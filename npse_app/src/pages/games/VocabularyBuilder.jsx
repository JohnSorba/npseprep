import { useState, useCallback, useMemo, useEffect } from 'react';
import { Link } from 'react-router-dom';
import spellingGameData from '../../data/spellingGameData';
import '../../styles/VocabularyBuilder.css';

/* ────────────────────────────────────────────
   HELPER — shuffle an array (Fisher-Yates)
   ──────────────────────────────────────────── */
function shuffle(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

/* ────────────────────────────────────────────
   HELPER — shuffle options for a question
   ──────────────────────────────────────────── */
function buildOptions(word) {
    return shuffle([...word.distractors, word.correct_answer]);
}

/* ────────────────────────────────────────────
   INITIAL LEVEL STATES
   ──────────────────────────────────────────── */
function initLevelStates() {
    const STORAGE_KEY = 'npse_vocab_progress';
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
        try {
            return JSON.parse(saved);
        } catch (e) {
            console.error("Error loading vocab progress", e);
        }
    }

    const states = {};
    spellingGameData.sections.forEach((section, si) => {
        section.levels.forEach((level, li) => {
            // first level of first section = unlocked; rest = locked
            states[level.id] = si === 0 && li === 0 ? 'unlocked' : 'locked';
        });
    });
    return states;
}

/* ═══════════════════════════════════════════════════════════
   COMPONENT
   ═══════════════════════════════════════════════════════════ */
const VocabularyBuilder = () => {
    // ── navigation ──
    const [view, setView] = useState('map'); // map | game | level-complete | section-complete
    const [activeLevelId, setActiveLevelId] = useState(null);

    // ── progression ──
    const [levelStates, setLevelStates] = useState(initLevelStates);

    // Persist progress to localStorage whenever levelStates changes
    useEffect(() => {
        localStorage.setItem('npse_vocab_progress', JSON.stringify(levelStates));
    }, [levelStates]);

    // ── session engine ──
    const [queue, setQueue] = useState([]);
    const [retryPool, setRetryPool] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [correctCount, setCorrectCount] = useState(0);
    const [totalRequired, setTotalRequired] = useState(0);
    const [options, setOptions] = useState([]);

    // ── review state ──
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [showReview, setShowReview] = useState(false);

    // ── session stats ──
    const [sessionStats, setSessionStats] = useState({ attempts: 0, mistakes: 0 });

    // ── derive active level / section data ──
    const activeLevel = useMemo(() => {
        if (!activeLevelId) return null;
        for (const section of spellingGameData.sections) {
            for (const level of section.levels) {
                if (level.id === activeLevelId) return level;
            }
        }
        return null;
    }, [activeLevelId]);

    const activeSection = useMemo(() => {
        if (!activeLevelId) return null;
        for (const section of spellingGameData.sections) {
            if (section.levels.some(l => l.id === activeLevelId)) return section;
        }
        return null;
    }, [activeLevelId]);

    /* ────────────────────────────────────────
       START A LEVEL
       ──────────────────────────────────────── */
    const startLevel = useCallback((levelId) => {
        let level = null;
        for (const section of spellingGameData.sections) {
            for (const l of section.levels) {
                if (l.id === levelId) { level = l; break; }
            }
            if (level) break;
        }
        if (!level) return;

        const shuffled = shuffle(level.words);
        setQueue(shuffled);
        setRetryPool([]);
        setCurrentIndex(0);
        setCorrectCount(0);
        setTotalRequired(shuffled.length);
        setOptions(buildOptions(shuffled[0]));
        setSelectedAnswer(null);
        setShowReview(false);
        setSessionStats({ attempts: 0, mistakes: 0 });
        setActiveLevelId(levelId);
        setView('game');
    }, []);

    /* ────────────────────────────────────────
       ANSWER HANDLER
       ──────────────────────────────────────── */
    const handleAnswer = useCallback((answer) => {
        if (showReview) return; // already answered
        const current = queue[currentIndex];
        const isCorrect = answer === current.correct_answer;

        setSelectedAnswer(answer);
        setShowReview(true);
        setSessionStats(prev => ({
            attempts: prev.attempts + 1,
            mistakes: prev.mistakes + (isCorrect ? 0 : 1),
        }));

        if (isCorrect) {
            setCorrectCount(prev => prev + 1);
        } else {
            // add to retry pool
            setRetryPool(prev => [...prev, current]);
        }
    }, [showReview, queue, currentIndex]);

    /* ────────────────────────────────────────
       NEXT (after review)
       ──────────────────────────────────────── */
    const handleNext = useCallback(() => {
        const nextIdx = currentIndex + 1;

        if (nextIdx < queue.length) {
            // more items in queue
            setCurrentIndex(nextIdx);
            setOptions(buildOptions(queue[nextIdx]));
            setSelectedAnswer(null);
            setShowReview(false);
        } else if (retryPool.length > 0) {
            // exhaust queue → inject retry pool
            const reshuffled = shuffle(retryPool);
            setQueue(reshuffled);
            setRetryPool([]);
            setCurrentIndex(0);
            setOptions(buildOptions(reshuffled[0]));
            setSelectedAnswer(null);
            setShowReview(false);
        } else {
            // ✅ level complete — update states
            completeLevel();
        }
    }, [currentIndex, queue, retryPool]);

    /* ────────────────────────────────────────
       COMPLETE LEVEL — propagate unlocks
       ──────────────────────────────────────── */
    const completeLevel = useCallback(() => {
        setLevelStates(prev => {
            const next = { ...prev, [activeLevelId]: 'complete' };
            // find section & next level
            const sectionIdx = spellingGameData.sections.findIndex(s =>
                s.levels.some(l => l.id === activeLevelId)
            );
            const section = spellingGameData.sections[sectionIdx];
            const levelIdx = section.levels.findIndex(l => l.id === activeLevelId);

            if (levelIdx < section.levels.length - 1) {
                // unlock next level in same section
                const nextLevelId = section.levels[levelIdx + 1].id;
                if (next[nextLevelId] === 'locked') next[nextLevelId] = 'unlocked';
            }

            // check if entire section is complete → unlock first level of next section
            const sectionComplete = section.levels.every(l => next[l.id] === 'complete');
            if (sectionComplete && sectionIdx < spellingGameData.sections.length - 1) {
                const nextSection = spellingGameData.sections[sectionIdx + 1];
                const firstOfNext = nextSection.levels[0].id;
                if (next[firstOfNext] === 'locked') next[firstOfNext] = 'unlocked';
            }

            return next;
        });

        // determine which completion screen
        const sIdx = spellingGameData.sections.findIndex(s =>
            s.levels.some(l => l.id === activeLevelId)
        );
        const sec = spellingGameData.sections[sIdx];
        const lIdx = sec.levels.findIndex(l => l.id === activeLevelId);
        const isSectionFinal = lIdx === sec.levels.length - 1;

        setView(isSectionFinal ? 'section-complete' : 'level-complete');
    }, [activeLevelId]);

    /* ────────────────────────────────────────
       NAVIGATION HELPERS
       ──────────────────────────────────────── */
    const goToMap = () => {
        setView('map');
        setActiveLevelId(null);
    };

    const goToNextLevel = () => {
        const sIdx = spellingGameData.sections.findIndex(s =>
            s.levels.some(l => l.id === activeLevelId)
        );
        const sec = spellingGameData.sections[sIdx];
        const lIdx = sec.levels.findIndex(l => l.id === activeLevelId);

        if (lIdx < sec.levels.length - 1) {
            startLevel(sec.levels[lIdx + 1].id);
        } else if (sIdx < spellingGameData.sections.length - 1) {
            startLevel(spellingGameData.sections[sIdx + 1].levels[0].id);
        } else {
            goToMap();
        }
    };

    /* ────────────────────────────────────────
       CURRENT WORD (game view)
       ──────────────────────────────────────── */
    const currentWord = queue[currentIndex] || null;
    const progressPercent = totalRequired > 0 ? (correctCount / totalRequired) * 100 : 0;
    const remaining = queue.length - currentIndex - 1 + retryPool.length;

    /* ═══════════════════════════════════════════════════════
       RENDER — MAP VIEW (section & level selection)
       ═══════════════════════════════════════════════════════ */
    if (view === 'map') {
        return (
            <div className="vb-page">
                <div className="container">
                    <Link to="/games" className="vb-back-link" id="vb-back-to-games">← Back to Games</Link>

                    <div className="vb-hero">
                        <span className="vb-hero-icon">📖</span>
                        <h1>Vocabulary Builder</h1>
                        <p>Master 180 essential words from Schonell's Spelling List. Complete all three sections to prove your mastery!</p>
                    </div>

                    <div className="vb-sections">
                        {spellingGameData.sections.map((section) => {
                            const completedLevels = section.levels.filter(l => levelStates[l.id] === 'complete').length;
                            const totalLevels = section.levels.length;
                            const sectionDone = completedLevels === totalLevels;

                            return (
                                <div
                                    key={section.id}
                                    className={`vb-section-card ${sectionDone ? 'section-done' : ''}`}
                                    style={{ '--section-color': section.color }}
                                >
                                    <div className="vb-section-header">
                                        <span className="vb-section-icon">{section.icon}</span>
                                        <div>
                                            <h2>{section.title}</h2>
                                            <p className="vb-section-desc">{section.description}</p>
                                        </div>
                                        {sectionDone && <span className="vb-section-badge">✓ Complete</span>}
                                    </div>

                                    <div className="vb-section-progress-bar">
                                        <div
                                            className="vb-section-progress-fill"
                                            style={{ width: `${(completedLevels / totalLevels) * 100}%` }}
                                        />
                                    </div>
                                    <span className="vb-section-progress-text">{completedLevels}/{totalLevels} levels</span>

                                    <div className="vb-level-list">
                                        {section.levels.map((level, li) => {
                                            const state = levelStates[level.id];
                                            return (
                                                <button
                                                    key={level.id}
                                                    id={`vb-level-${level.id}`}
                                                    className={`vb-level-btn ${state}`}
                                                    disabled={state === 'locked'}
                                                    onClick={() => startLevel(level.id)}
                                                >
                                                    <span className="vb-level-num">{li + 1}</span>
                                                    <span className="vb-level-title">{level.title}</span>
                                                    <span className="vb-level-words">{level.words.length} words</span>
                                                    {state === 'locked' && <span className="vb-lock-icon">🔒</span>}
                                                    {state === 'complete' && <span className="vb-check-icon">✅</span>}
                                                    {state === 'unlocked' && <span className="vb-play-icon">▶</span>}
                                                </button>
                                            );
                                        })}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        );
    }

    /* ═══════════════════════════════════════════════════════
       RENDER — LEVEL COMPLETE SCREEN
       ═══════════════════════════════════════════════════════ */
    if (view === 'level-complete') {
        const accuracy = sessionStats.attempts > 0
            ? Math.round((sessionStats.attempts - sessionStats.mistakes) / sessionStats.attempts * 100)
            : 100;

        return (
            <div className="vb-page">
                <div className="container">
                    <div className="vb-complete-card">
                        <div className="vb-complete-emoji">🎉</div>
                        <h2>Level Complete!</h2>
                        <p className="vb-complete-subtitle">
                            {activeLevel?.title} — {activeSection?.title}
                        </p>

                        <div className="vb-stats-grid">
                            <div className="vb-stat">
                                <span className="vb-stat-value">{correctCount}</span>
                                <span className="vb-stat-label">Words Mastered</span>
                            </div>
                            <div className="vb-stat">
                                <span className="vb-stat-value">{sessionStats.attempts}</span>
                                <span className="vb-stat-label">Total Attempts</span>
                            </div>
                            <div className="vb-stat">
                                <span className="vb-stat-value">{accuracy}%</span>
                                <span className="vb-stat-label">Accuracy</span>
                            </div>
                            <div className="vb-stat">
                                <span className="vb-stat-value">{sessionStats.mistakes}</span>
                                <span className="vb-stat-label">Retries</span>
                            </div>
                        </div>

                        <div className="vb-complete-actions">
                            <button className="vb-btn vb-btn-primary" onClick={goToNextLevel} id="vb-next-level">
                                Next Level →
                            </button>
                            <button className="vb-btn vb-btn-secondary" onClick={goToMap} id="vb-back-to-map">
                                Back to Map
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    /* ═══════════════════════════════════════════════════════
       RENDER — SECTION COMPLETE SCREEN
       ═══════════════════════════════════════════════════════ */
    if (view === 'section-complete') {
        const accuracy = sessionStats.attempts > 0
            ? Math.round((sessionStats.attempts - sessionStats.mistakes) / sessionStats.attempts * 100)
            : 100;

        const sIdx = spellingGameData.sections.findIndex(s =>
            s.levels.some(l => l.id === activeLevelId)
        );
        const hasNextSection = sIdx < spellingGameData.sections.length - 1;

        return (
            <div className="vb-page">
                <div className="container">
                    <div className="vb-complete-card vb-section-done-card">
                        <div className="vb-complete-emoji">🏆</div>
                        <h2>Section Complete!</h2>
                        <p className="vb-complete-subtitle">
                            You've mastered all words in <strong>{activeSection?.title}</strong>
                        </p>

                        <div className="vb-stats-grid">
                            <div className="vb-stat">
                                <span className="vb-stat-value">{correctCount}</span>
                                <span className="vb-stat-label">Words Mastered</span>
                            </div>
                            <div className="vb-stat">
                                <span className="vb-stat-value">{accuracy}%</span>
                                <span className="vb-stat-label">Final Accuracy</span>
                            </div>
                        </div>

                        <div className="vb-complete-actions">
                            {hasNextSection && (
                                <button className="vb-btn vb-btn-primary" onClick={goToNextLevel} id="vb-next-section">
                                    Start Next Section →
                                </button>
                            )}
                            <button className="vb-btn vb-btn-secondary" onClick={goToMap} id="vb-section-back-to-map">
                                Back to Map
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    /* ═══════════════════════════════════════════════════════
       RENDER — GAME VIEW
       ═══════════════════════════════════════════════════════ */
    const questionLabel = {
        synonym: '🔗 Synonym',
        antonym: '🔄 Antonym',
        definition: '📖 Definition',
        'fill-blank': '✏️ Fill in the Blank',
    };

    return (
        <div className="vb-page vb-game-active">
            {/* ── TOP BAR ── */}
            <div className="vb-game-bar">
                <div className="container vb-bar-inner">
                    <button className="vb-bar-back" onClick={goToMap} id="vb-quit-game">✕</button>
                    <div className="vb-bar-info">
                        <span className="vb-bar-section" style={{ color: activeSection?.color }}>
                            {activeSection?.icon} {activeSection?.title}
                        </span>
                        <span className="vb-bar-level">{activeLevel?.title}</span>
                    </div>
                    <div className="vb-bar-progress">
                        <div className="vb-bar-progress-track">
                            <div
                                className="vb-bar-progress-fill"
                                style={{
                                    width: `${progressPercent}%`,
                                    background: activeSection?.color
                                }}
                            />
                        </div>
                        <span className="vb-bar-count">{correctCount}/{totalRequired}</span>
                    </div>
                </div>
            </div>

            {/* ── QUESTION AREA ── */}
            <div className="container vb-game-body">
                {currentWord && (
                    <div className="vb-question-card">
                        <div className="vb-q-type-badge" style={{ background: activeSection?.color }}>
                            {questionLabel[currentWord.question_type] || 'Question'}
                        </div>

                        <h2 className="vb-target-word">{currentWord.word}</h2>
                        <p className="vb-question-text">{currentWord.question}</p>

                        <div className="vb-options-grid">
                            {options.map((opt, idx) => {
                                let cls = 'vb-option';
                                if (showReview) {
                                    if (opt === currentWord.correct_answer) cls += ' correct';
                                    else if (opt === selectedAnswer) cls += ' incorrect';
                                    else cls += ' dimmed';
                                }
                                return (
                                    <button
                                        key={idx}
                                        id={`vb-option-${idx}`}
                                        className={cls}
                                        onClick={() => handleAnswer(opt)}
                                        disabled={showReview}
                                    >
                                        <span className="vb-opt-letter">{String.fromCharCode(65 + idx)}</span>
                                        <span className="vb-opt-text">{opt}</span>
                                    </button>
                                );
                            })}
                        </div>

                        {/* ── REVIEW PANEL ── */}
                        {showReview && (
                            <div className={`vb-review ${selectedAnswer === currentWord.correct_answer ? 'vb-review-correct' : 'vb-review-incorrect'}`}>
                                <div className="vb-review-badge">
                                    {selectedAnswer === currentWord.correct_answer
                                        ? '✅ Correct!'
                                        : '❌ Incorrect'}
                                </div>

                                <div className="vb-review-details">
                                    <div className="vb-review-row">
                                        <span className="vb-review-label">Word</span>
                                        <span className="vb-review-value">{currentWord.word}</span>
                                    </div>
                                    <div className="vb-review-row">
                                        <span className="vb-review-label">Answer</span>
                                        <span className="vb-review-value vb-review-answer">{currentWord.correct_answer}</span>
                                    </div>
                                    <div className="vb-review-row">
                                        <span className="vb-review-label">Example</span>
                                        <span className="vb-review-value vb-review-example">"{currentWord.example_sentence}"</span>
                                    </div>
                                </div>

                                <div className="vb-review-footer">
                                    <span className="vb-remaining">
                                        {remaining > 0
                                            ? `${remaining} word${remaining !== 1 ? 's' : ''} remaining`
                                            : 'Last question!'
                                        }
                                    </span>
                                    <button className="vb-btn vb-btn-primary" onClick={handleNext} id="vb-next-btn">
                                        {remaining > 0 ? 'Next →' : 'Finish'}
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default VocabularyBuilder;
