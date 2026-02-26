import { useState, useCallback, useMemo, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import spellingGameData from '../../data/spellingGameData';
import '../../styles/FillInTheBlank.css';

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
   LOGIC — generate blanks based on level
   ──────────────────────────────────────────── */
function generateBlanks(word, levelIndex, sectionIndex) {
    const len = word.length;
    // levelIndex: 0, 1, 2
    // sectionIndex: 0, 1, 2
    const totalLevel = (sectionIndex * 3) + levelIndex + 1; // 1 to 9

    let numBlanks;
    if (totalLevel === 1) {
        numBlanks = 1;
    } else {
        // Curve: Level 6 ≈ 50%, Level 9 ≈ 70%
        const maxRatio = 0.7;
        const ratio = 0.1 + ((totalLevel - 1) / 8) * (maxRatio - 0.1);
        numBlanks = Math.max(1, Math.round(len * ratio));
    }

    // Ensure we don't blank everything
    numBlanks = Math.min(numBlanks, len - 1);
    if (numBlanks < 1) numBlanks = 1;

    const indices = Array.from({ length: len }, (_, i) => i);
    const shuffledIndices = shuffleArray(indices);
    const blankIndices = shuffledIndices.slice(0, numBlanks);

    return blankIndices.sort((a, b) => a - b);
}

/* ────────────────────────────────────────────
   INITIAL LEVEL STATES
   ──────────────────────────────────────────── */
function initLevelStates() {
    const STORAGE_KEY = 'npse_fillblank_progress';
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
        try {
            return JSON.parse(saved);
        } catch (e) {
            console.error("Error loading fill-blank progress", e);
        }
    }

    const states = {};
    spellingGameData.sections.forEach((section, si) => {
        section.levels.forEach((level, li) => {
            states[level.id] = si === 0 && li === 0 ? 'unlocked' : 'locked';
        });
    });
    return states;
}

/* ═══════════════════════════════════════════════════════════
   COMPONENT
   ═══════════════════════════════════════════════════════════ */
const FillInTheBlank = () => {
    const [view, setView] = useState('map'); // map | game | level-complete
    const [activeLevelId, setActiveLevelId] = useState(null);
    const [levelStates, setLevelStates] = useState(initLevelStates);

    // ── game session state ──
    const [words, setWords] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [blankIndices, setBlankIndices] = useState([]);
    const [userInputs, setUserInputs] = useState({}); // { [idx]: 'char' }
    const [isCorrect, setIsCorrect] = useState(null); // null | true | false
    const [message, setMessage] = useState('');

    const inputRefs = useRef([]);

    // Persist progress
    useEffect(() => {
        localStorage.setItem('npse_fillblank_progress', JSON.stringify(levelStates));
    }, [levelStates]);

    const activeLevel = useMemo(() => {
        for (const section of spellingGameData.sections) {
            for (const level of section.levels) {
                if (level.id === activeLevelId) return level;
            }
        }
        return null;
    }, [activeLevelId]);

    const activeSection = useMemo(() => {
        for (const section of spellingGameData.sections) {
            if (section.levels.some(l => l.id === activeLevelId)) return section;
        }
        return null;
    }, [activeLevelId]);

    /* ────────────────────────────────────────
       START A LEVEL - GAMEPLAY
       ──────────────────────────────────────── */
    const startLevel = useCallback((levelId) => {
        let level = null;
        let sIdx = 0, lIdx = 0;

        spellingGameData.sections.forEach((s, si) => {
            s.levels.forEach((l, li) => {
                if (l.id === levelId) {
                    level = l;
                    sIdx = si;
                    lIdx = li;
                }
            });
        });

        if (!level) return;

        const shuffled = shuffleArray(level.words);
        setWords(shuffled);
        setCurrentIndex(0);
        setActiveLevelId(levelId);
        setupQuestion(shuffled[0], lIdx, sIdx);
        setView('game');
    }, []);

    const setupQuestion = (wordObj, lIdx, sIdx) => {
        const blanks = generateBlanks(wordObj.word, lIdx, sIdx);
        setBlankIndices(blanks);
        setUserInputs({});
        setIsCorrect(null);
        setMessage('');
    };

    /* ────────────────────────────────────────
       INPUT HANDLING
       ──────────────────────────────────────── */
    const handleInputChange = (char, index) => {
        if (char.length > 1) char = char[0];

        const newInputs = { ...userInputs, [index]: char.toLowerCase() };
        setUserInputs(newInputs);

        // Auto-advance to next blank
        if (char !== '') {
            const nextBlankPos = blankIndices.indexOf(index) + 1;
            if (nextBlankPos < blankIndices.length) {
                const nextIdx = blankIndices[nextBlankPos];
                inputRefs.current[nextIdx]?.focus();
            } else {
                // Check if all blanks filled
                const allFilled = blankIndices.every(idx => newInputs[idx] && newInputs[idx].length === 1);
                if (allFilled) validateAnswer(newInputs);
            }
        }
    };

    const handleKeyDown = (e, index) => {
        if (e.key === 'Backspace' && !userInputs[index]) {
            // Move to previous blank
            const prevBlankPos = blankIndices.indexOf(index) - 1;
            if (prevBlankPos >= 0) {
                const prevIdx = blankIndices[prevBlankPos];
                inputRefs.current[prevIdx]?.focus();
            }
        } else if (e.key === 'Enter') {
            const allFilled = blankIndices.every(idx => userInputs[idx]);
            if (allFilled) validateAnswer(userInputs);
        }
    };

    const validateAnswer = (inputs) => {
        const currentWordObj = words[currentIndex];
        const word = currentWordObj.word.toLowerCase();
        const guess = word.split('').map((char, idx) =>
            blankIndices.includes(idx) ? (inputs[idx] || '') : char
        ).join('');

        if (guess === word) {
            setIsCorrect(true);
            setMessage('Perfect! ✨');
            setTimeout(nextQuestion, 1200);
        } else {
            setIsCorrect(false);
            setMessage('Try again! 🔄');
            setTimeout(() => setIsCorrect(null), 1000);
        }
    };

    const nextQuestion = () => {
        const nextIdx = currentIndex + 1;
        if (nextIdx < words.length) {
            setCurrentIndex(nextIdx);

            const sIdx = spellingGameData.sections.findIndex(s => s.levels.some(l => l.id === activeLevelId));
            const lIdx = spellingGameData.sections[sIdx].levels.findIndex(l => l.id === activeLevelId);

            setupQuestion(words[nextIdx], lIdx, sIdx);
        } else {
            completeLevel();
        }
    };

    const completeLevel = () => {
        setLevelStates(prev => {
            const next = { ...prev, [activeLevelId]: 'complete' };

            const sIdx = spellingGameData.sections.findIndex(s => s.levels.some(l => l.id === activeLevelId));
            const section = spellingGameData.sections[sIdx];
            const lIdx = section.levels.findIndex(l => l.id === activeLevelId);

            if (lIdx < section.levels.length - 1) {
                const nl = section.levels[lIdx + 1].id;
                if (next[nl] === 'locked') next[nl] = 'unlocked';
            } else if (sIdx < spellingGameData.sections.length - 1) {
                const nl = spellingGameData.sections[sIdx + 1].levels[0].id;
                if (next[nl] === 'locked') next[nl] = 'unlocked';
            }
            return next;
        });
        setView('level-complete');
    };

    const goToMap = () => setView('map');

    const goToNextLevel = () => {
        const sIdx = spellingGameData.sections.findIndex(s => s.levels.some(l => l.id === activeLevelId));
        const section = spellingGameData.sections[sIdx];
        const lIdx = section.levels.findIndex(l => l.id === activeLevelId);

        if (lIdx < section.levels.length - 1) {
            startLevel(section.levels[lIdx + 1].id);
        } else if (sIdx < spellingGameData.sections.length - 1) {
            startLevel(spellingGameData.sections[sIdx + 1].levels[0].id);
        } else {
            goToMap();
        }
    };

    /* ═══════════════════════════════════════════════════════
       RENDER — MAP
       ═══════════════════════════════════════════════════════ */
    if (view === 'map') {
        return (
            <div className="fb-page">
                <div className="container">
                    <Link to="/games" className="fb-back-link">← Back to Games</Link>
                    <div className="fb-hero">
                        <span className="fb-hero-icon">✍️</span>
                        <h1>Fill in the Blanks</h1>
                        <p>Complete the words by filling in the missing characters. Master all 180 curated words!</p>
                    </div>

                    <div className="fb-sections">
                        {spellingGameData.sections.map((section) => {
                            const completed = section.levels.filter(l => levelStates[l.id] === 'complete').length;
                            const total = section.levels.length;
                            return (
                                <div key={section.id} className="fb-section-card" style={{ '--section-color': section.color }}>
                                    <div className="fb-section-header">
                                        <div className="fb-section-icon">{section.icon}</div>
                                        <div>
                                            <h2>{section.title}</h2>
                                            <p>{section.description}</p>
                                        </div>
                                    </div>

                                    <div className="fb-section-progress">
                                        <div className="fb-progress-bar">
                                            <div className="fb-progress-fill" style={{ width: `${(completed / total) * 100}%` }} />
                                        </div>
                                        <span>{completed}/{total} levels</span>
                                    </div>

                                    <div className="fb-levels-grid">
                                        {section.levels.map((level) => {
                                            const state = levelStates[level.id];
                                            return (
                                                <button
                                                    key={level.id}
                                                    className={`fb-level-btn ${state}`}
                                                    onClick={() => startLevel(level.id)}
                                                    disabled={state === 'locked'}
                                                >
                                                    {state === 'locked' ? '🔒' : level.title}
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
       RENDER — COMPLETE
       ═══════════════════════════════════════════════════════ */
    if (view === 'level-complete') {
        return (
            <div className="fb-page">
                <div className="container">
                    <div className="fb-complete-card">
                        <div className="fb-confetti">🎉</div>
                        <h2>Level {activeLevelId} Complete!</h2>
                        <p>Excellent work! You've mastered {words.length} words in this level.</p>
                        <div className="fb-actions">
                            <button className="fb-btn-primary" onClick={goToNextLevel}>Next Level →</button>
                            <button className="fb-btn-secondary" onClick={goToMap}>Back to Map</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    /* ═══════════════════════════════════════════════════════
       RENDER — GAME
       ═══════════════════════════════════════════════════════ */
    const currentWordObj = words[currentIndex] || {};
    const currentWordStr = currentWordObj.word || '';
    const hintSentence = currentWordObj.example_sentence
        ? currentWordObj.example_sentence.replace(new RegExp(currentWordStr, 'gi'), '_____')
        : '';

    return (
        <div className="fb-page fb-game-active">
            <div className="fb-top-bar">
                <div className="container fb-bar-inner">
                    <button className="fb-quit" onClick={goToMap}>✕</button>
                    <div className="fb-game-info">
                        <span className="fb-game-title">Fill in the Blanks</span>
                        <span className="fb-game-level">{activeSection?.title} — {activeLevel?.title}</span>
                    </div>
                    <div className="fb-progress">
                        <div className="fb-progress-track">
                            <div className="fb-progress-fill" style={{ width: `${(currentIndex / words.length) * 100}%`, background: activeSection?.color }}></div>
                        </div>
                        <span className="fb-progress-text">{currentIndex + 1}/{words.length}</span>
                    </div>
                </div>
            </div>

            <div className="container fb-game-container">
                <div className={`fb-word-box ${isCorrect === true ? 'fb-success' : isCorrect === false ? 'fb-error' : ''}`}>
                    <div className="fb-word-display">
                        {currentWordStr.split('').map((char, idx) => (
                            <div key={idx} className="fb-char-container">
                                {blankIndices.includes(idx) ? (
                                    <input
                                        ref={el => inputRefs.current[idx] = el}
                                        type="text"
                                        className={`fb-blank-input ${userInputs[idx] ? 'active' : ''}`}
                                        maxLength={1}
                                        value={userInputs[idx] || ''}
                                        onChange={(e) => handleInputChange(e.target.value, idx)}
                                        onKeyDown={(e) => handleKeyDown(e, idx)}
                                        autoFocus={idx === blankIndices[0]}
                                        autoComplete="off"
                                    />
                                ) : (
                                    <span className="fb-static-char">{char.toUpperCase()}</span>
                                )}
                            </div>
                        ))}
                    </div>

                    {message && <div className={`fb-game-msg ${isCorrect === true ? 'success' : 'error'}`}>{message}</div>}

                    {hintSentence && (
                        <div className="fb-hint-box">
                            <span className="fb-hint-label">Hint:</span>
                            <p className="fb-hint-text">"{hintSentence}"</p>
                        </div>
                    )}

                    <div className="fb-game-instructions">
                        Complete the word above.
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FillInTheBlank;
