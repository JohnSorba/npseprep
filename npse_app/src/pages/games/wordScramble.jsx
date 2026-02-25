import { useState, useCallback, useMemo, useEffect } from 'react';
import { Link } from 'react-router-dom';
import wordScrambleData from '../../data/wordScrambleData';
import '../../styles/WordScramble.css';

/* ────────────────────────────────────────────
   HELPER — shuffle an array (Fisher-Yates)
   ──────────────────────────────────────────── */
function shuffleArray(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

/* ────────────────────────────────────────────
   HELPER — shuffle a word (guaranteed different)
   ──────────────────────────────────────────── */
function shuffleWord(word) {
    if (word.length <= 1) return word;
    const original = word.toLowerCase();
    let shuffled = original;

    let attempts = 0;
    while (shuffled === original && attempts < 10) {
        const arr = original.split('');
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        shuffled = arr.join('');
        attempts++;
    }

    // Fallback if random shuffle fails to produce a different string (unlikely for >2 chars)
    if (shuffled === original) {
        return original.length > 1
            ? original.slice(1) + original[0]
            : original;
    }

    return shuffled;
}

/* ────────────────────────────────────────────
   INITIAL LEVEL STATES
   ──────────────────────────────────────────── */
function initLevelStates() {
    const STORAGE_KEY = 'npse_scramble_progress';
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
        try {
            return JSON.parse(saved);
        } catch (e) {
            console.error("Error loading scramble progress", e);
        }
    }

    const states = {};
    wordScrambleData.sections.forEach((section, si) => {
        section.levels.forEach((level, li) => {
            states[level.id] = si === 0 && li === 0 ? 'unlocked' : 'locked';
        });
    });
    return states;
}

/* ═══════════════════════════════════════════════════════════
   COMPONENT
   ═══════════════════════════════════════════════════════════ */
const WordScramble = () => {
    // ── navigation ──
    const [view, setView] = useState('map'); // map | game | level-complete | section-complete
    const [activeLevelId, setActiveLevelId] = useState(null);

    // ── progression ──
    const [levelStates, setLevelStates] = useState(initLevelStates);

    // Persist progress
    useEffect(() => {
        localStorage.setItem('npse_scramble_progress', JSON.stringify(levelStates));
    }, [levelStates]);

    // ── game state ──
    const [words, setWords] = useState([]); // the shuffled word list for session
    const [currentIndex, setCurrentIndex] = useState(0);
    const [scrambledWord, setScrambledWord] = useState('');
    const [userInput, setUserInput] = useState('');
    const [correctCount, setCorrectCount] = useState(0);
    const [isCorrect, setIsCorrect] = useState(null); // null | true | false
    const [showHint, setShowHint] = useState(false);

    // ── derived data ──
    const activeLevel = useMemo(() => {
        if (!activeLevelId) return null;
        for (const section of wordScrambleData.sections) {
            for (const level of section.levels) {
                if (level.id === activeLevelId) return level;
            }
        }
        return null;
    }, [activeLevelId]);

    const activeSection = useMemo(() => {
        if (!activeLevelId) return null;
        for (const section of wordScrambleData.sections) {
            if (section.levels.some(l => l.id === activeLevelId)) return section;
        }
        return null;
    }, [activeLevelId]);

    /* ────────────────────────────────────────
       ACTIONS
       ──────────────────────────────────────── */
    const startLevel = useCallback((levelId) => {
        let level = null;
        for (const section of wordScrambleData.sections) {
            for (const l of section.levels) {
                if (l.id === levelId) { level = l; break; }
            }
            if (level) break;
        }
        if (!level) return;

        const shuffledList = shuffleArray(level.words);
        setWords(shuffledList);
        setCurrentIndex(0);
        setScrambledWord(shuffleWord(shuffledList[0]));
        setUserInput('');
        setCorrectCount(0);
        setIsCorrect(null);
        setShowHint(false);
        setActiveLevelId(levelId);
        setView('game');
    }, []);

    const handleReshuffle = () => {
        const currentWord = words[currentIndex];
        setScrambledWord(shuffleWord(currentWord));
    };

    const handleSubmit = (e) => {
        if (e) e.preventDefault();
        const original = words[currentIndex].toLowerCase();
        const guess = userInput.trim().toLowerCase();

        if (guess === original) {
            setIsCorrect(true);
            setTimeout(() => {
                const nextIdx = currentIndex + 1;
                if (nextIdx < words.length) {
                    setCurrentIndex(nextIdx);
                    setScrambledWord(shuffleWord(words[nextIdx]));
                    setUserInput('');
                    setIsCorrect(null);
                    setCorrectCount(prev => prev + 1);
                    setShowHint(false);
                } else {
                    setCorrectCount(prev => prev + 1);
                    completeLevel();
                }
            }, 1000);
        } else {
            setIsCorrect(false);
            setTimeout(() => setIsCorrect(null), 1000);
        }
    };

    const completeLevel = useCallback(() => {
        setLevelStates(prev => {
            const next = { ...prev, [activeLevelId]: 'complete' };
            const sectionIdx = wordScrambleData.sections.findIndex(s =>
                s.levels.some(l => l.id === activeLevelId)
            );
            const section = wordScrambleData.sections[sectionIdx];
            const levelIdx = section.levels.findIndex(l => l.id === activeLevelId);

            if (levelIdx < section.levels.length - 1) {
                const nextLevelId = section.levels[levelIdx + 1].id;
                if (next[nextLevelId] === 'locked') next[nextLevelId] = 'unlocked';
            }

            const sectionComplete = section.levels.every(l => next[l.id] === 'complete');
            if (sectionComplete && sectionIdx < wordScrambleData.sections.length - 1) {
                const nextSection = wordScrambleData.sections[sectionIdx + 1];
                const firstOfNext = nextSection.levels[0].id;
                if (next[firstOfNext] === 'locked') next[firstOfNext] = 'unlocked';
            }
            return next;
        });

        const sIdx = wordScrambleData.sections.findIndex(s =>
            s.levels.some(l => l.id === activeLevelId)
        );
        const sec = wordScrambleData.sections[sIdx];
        const lIdx = sec.levels.findIndex(l => l.id === activeLevelId);
        const isSectionFinal = lIdx === sec.levels.length - 1;

        setView(isSectionFinal ? 'section-complete' : 'level-complete');
    }, [activeLevelId]);

    const goToMap = () => setView('map');
    const goToNextLevel = () => {
        const sIdx = wordScrambleData.sections.findIndex(s =>
            s.levels.some(l => l.id === activeLevelId)
        );
        const sec = wordScrambleData.sections[sIdx];
        const lIdx = sec.levels.findIndex(l => l.id === activeLevelId);

        if (lIdx < sec.levels.length - 1) {
            startLevel(sec.levels[lIdx + 1].id);
        } else if (sIdx < wordScrambleData.sections.length - 1) {
            startLevel(wordScrambleData.sections[sIdx + 1].levels[0].id);
        } else {
            goToMap();
        }
    };

    /* ═══════════════════════════════════════════════════════
       RENDER — MAP
       ═══════════════════════════════════════════════════════ */
    if (view === 'map') {
        return (
            <div className="ws-page">
                <div className="container">
                    <Link to="/games" className="ws-back-link">← Back to Games</Link>
                    <div className="ws-hero">
                        <span className="ws-hero-icon">🧩</span>
                        <h1>Word Scramble</h1>
                        <p>Untangle the letters to find the correct spelling. Master 180 words from Schonell's list!</p>
                    </div>

                    <div className="ws-sections">
                        {wordScrambleData.sections.map(section => {
                            const completed = section.levels.filter(l => levelStates[l.id] === 'complete').length;
                            const total = section.levels.length;
                            return (
                                <div key={section.id} className="ws-section-card" style={{ '--section-color': section.color }}>
                                    <div className="ws-section-header">
                                        <span className="ws-section-icon">{section.icon}</span>
                                        <div>
                                            <h2>{section.title}</h2>
                                            <p>{section.description}</p>
                                        </div>
                                    </div>
                                    <div className="ws-progress-track">
                                        <div className="ws-progress-fill" style={{ width: `${(completed / total) * 100}%` }}></div>
                                    </div>
                                    <div className="ws-level-grid">
                                        {section.levels.map((level, li) => {
                                            const state = levelStates[level.id];
                                            return (
                                                <button
                                                    key={level.id}
                                                    className={`ws-level-btn ${state}`}
                                                    onClick={() => startLevel(level.id)}
                                                    disabled={state === 'locked'}
                                                >
                                                    <span className="ws-lvl-num">{li + 1}</span>
                                                    {state === 'locked' && <small>Locked</small>}
                                                    {state === 'complete' && <small>Done</small>}
                                                    {state === 'unlocked' && <small>Start</small>}
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

    if (view === 'level-complete' || view === 'section-complete') {
        return (
            <div className="ws-page">
                <div className="container">
                    <div className="ws-complete-card">
                        <div className="ws-complete-emoji">{view === 'section-complete' ? '🏆' : '🎉'}</div>
                        <h2>{view === 'section-complete' ? 'Section Cleared!' : 'Level Complete!'}</h2>
                        <p>You mastered {correctCount} words in {activeSection?.title} {activeLevel?.title}.</p>
                        <div className="ws-complete-actions">
                            <button className="ws-btn ws-btn-primary" onClick={goToNextLevel}>Next Level →</button>
                            <button className="ws-btn ws-btn-secondary" onClick={goToMap}>Back to Map</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    /* ═══════════════════════════════════════════════════════
       RENDER — GAME
       ═══════════════════════════════════════════════════════ */
    return (
        <div className="ws-page ws-game-active">
            <div className="ws-top-bar">
                <div className="container ws-bar-inner">
                    <button className="ws-quit" onClick={goToMap}>✕</button>
                    <div className="ws-bar-info">
                        <span className="ws-category" style={{ color: activeSection?.color }}>{activeSection?.title}</span>
                        <span className="ws-level">{activeLevel?.title}</span>
                    </div>
                    <div className="ws-bar-progress">
                        <div className="ws-bar-track"><div className="ws-bar-fill" style={{ width: `${(currentIndex / words.length) * 100}%`, background: activeSection?.color }}></div></div>
                        <span>{currentIndex + 1}/{words.length}</span>
                    </div>
                </div>
            </div>

            <div className="container ws-game-content">
                <div className={`ws-word-card ${isCorrect === true ? 'correct' : isCorrect === false ? 'shake' : ''}`}>
                    <div className="ws-scrambled-display">
                        {scrambledWord.toUpperCase().split('').map((char, i) => (
                            <span key={i} className="ws-char-tile" style={{ animationDelay: `${i * 0.05}s` }}>{char}</span>
                        ))}
                    </div>

                    <form onSubmit={handleSubmit} className="ws-input-form">
                        <input
                            type="text"
                            className={`ws-input ${isCorrect === false ? 'error' : ''}`}
                            placeholder="Type your answer..."
                            value={userInput}
                            onChange={(e) => setUserInput(e.target.value)}
                            autoFocus
                            autoComplete="off"
                        />
                        <div className="ws-actions">
                            <button type="submit" className="ws-submit-btn">Check Answer</button>
                            <button type="button" className="ws-reshuffle-btn" onClick={handleReshuffle}>Reshuffle 🔀</button>
                        </div>
                    </form>

                    <button className="ws-hint-toggle" onClick={() => setShowHint(!showHint)}>
                        {showHint ? "Hide Hint" : "Need a Hint?"}
                    </button>
                    {showHint && (
                        <p className="ws-hint-text">Starts with: <strong>{words[currentIndex][0].toUpperCase()}</strong></p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default WordScramble;
