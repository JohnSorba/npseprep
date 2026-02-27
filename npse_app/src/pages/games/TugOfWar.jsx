import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Link } from 'react-router-dom';
import mathQuizQuestions from '../../data/mathQuizQuestions';
import verbalQuizQuestions from '../../data/verbalQuizQuestions';
import quantitativeQuizQuestions from '../../data/quantitativeQuizQuestions';
import englishLanguageQuizQuestions from '../../data/englishlanguageQuizQuestions';
import generalPaperQuizQuestions from '../../data/generalPaperQuizQuestions';

/* ================================================================
   CONSTANTS
 ================================================================ */
const WIN_THRESHOLD = 70;
const STEP_SIZE = 10;
const GAME_TIME = 150; // seconds
const IDLE_PAUSE_THRESHOLD = 10; // seconds

/* ================================================================
   SUBJECT CONFIG
 ================================================================ */
const SUBJECT_OPTIONS = [
    { id: 'mathematics', name: 'Mathematics', icon: '📐', color: '#0c8ce9', questions: mathQuizQuestions },
    { id: 'english', name: 'English Language', icon: '📝', color: '#e67e22', questions: englishLanguageQuizQuestions },
    { id: 'verbal', name: 'Verbal Aptitude', icon: '🗣️', color: '#9b59b6', questions: verbalQuizQuestions },
    { id: 'quantitative', name: 'Quantitative Aptitude', icon: '🔢', color: '#27ae60', questions: quantitativeQuizQuestions },
    { id: 'general', name: 'General Paper', icon: '🌍', color: '#e74c3c', questions: generalPaperQuizQuestions },
];

/* ================================================================
   HELPERS
 ================================================================ */
const shuffle = (arr) => [...arr].sort(() => Math.random() - 0.5);

/* ================================================================
   TUG OF WAR IMAGE (Single Asset)
   ================================================================ */
const TugImage = ({ isWinner }) => {
    return (
        <div className={`tow-main-image-wrap ${isWinner ? 'tow-winner' : ''}`}>
            <img
                src="/brain_tug_img.png"
                alt="Brain Tug of War"
                className="tow-main-image"
            />
        </div>
    );
};

/* ================================================================
   ARENA
 ================================================================ */
const Arena = ({ position, winner, p1Score, p2Score, timer }) => {
    const clamped = Math.max(-50, Math.min(50, position));
    const pct = 50 + clamped;

    const formatTime = (s) => {
        const m = Math.floor(s / 60);
        const sec = s % 60;
        return `${String(m).padStart(2, '0')}:${String(sec).padStart(2, '0')}`;
    };

    return (
        <div className="tow-arena-wrap">
            <div className="tow-scoreboard">
                <div className="tow-sb-team tow-sb-blue">
                    <span className="tow-sb-label">Team 1</span>
                    <span className="tow-sb-score">{p1Score}</span>
                </div>
                <div className="tow-sb-timer">
                    <span className="tow-sb-clock">🕐</span>
                    <span className="tow-sb-time">{formatTime(timer)}</span>
                </div>
                <div className="tow-sb-team tow-sb-red">
                    <span className="tow-sb-label">Team 2</span>
                    <span className="tow-sb-score">{p2Score}</span>
                </div>
            </div>

            <div className="tow-arena">
                <div className="tow-center-line" />
                <div className="tow-image-container" style={{ left: `${pct}%` }}>
                    <TugImage isWinner={!!winner} />
                </div>

                {winner && (
                    <div className="tow-winner-overlay">
                        <div className="tow-winner-card">
                            <span className="tow-trophy">🏆</span>
                            <h2>Player {winner} Wins!</h2>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

/* ================================================================
   TEAM PANEL
 ================================================================ */
const TeamPanel = ({ team, score, question, onAnswer, disabled, feedback }) => {
    if (!question) return <div className={`tow-team-panel tow-tp-${team}`} />;
    const isBlue = team === 'blue';
    const teamLabel = isBlue ? 'Team 1' : 'Team 2';

    return (
        <div className={`tow-team-panel tow-tp-${team} ${feedback === 'error' ? 'tow-shake' : ''} ${disabled ? 'tow-tp-disabled' : ''}`}>
            <div className={`tow-tp-header tow-tp-header-${team}`}>
                <span className="tow-tp-name">{teamLabel}</span>
                <span className="tow-tp-badge">{score}</span>
            </div>
            <div className="tow-tp-body">
                <p className={`tow-tp-prompt tow-tp-prompt-${team}`}>{question.text}</p>
                {feedback === 'success' && <div className="tow-tp-feedback tow-tp-fb-correct">✅ Correct!</div>}
                {feedback === 'error' && <div className="tow-tp-feedback tow-tp-fb-wrong">❌ Wrong!</div>}
                <div className="tow-tp-options">
                    {question.options.map((opt) => (
                        <button
                            key={opt.label}
                            onClick={() => onAnswer(opt.label)}
                            disabled={disabled || feedback}
                            className={`tow-tp-opt tow-tp-opt-${team}`}
                        >
                            <span className={`tow-tp-opt-letter tow-tp-letter-${team}`}>{opt.label}</span>
                            <span className="tow-tp-opt-text">{opt.text}</span>
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

/* ================================================================
   MAIN COMPONENT
 ================================================================ */
export default function TugOfWar() {
    const [phase, setPhase] = useState('select');
    const [selectedSubject, setSelectedSubject] = useState(null);
    const [questionMode, setQuestionMode] = useState('random'); // random | same
    const [questionPool, setQuestionPool] = useState([]);
    const [ropePosition, setRopePosition] = useState(0);
    const [p1Question, setP1Question] = useState(null);
    const [p2Question, setP2Question] = useState(null);
    const [p1Index, setP1Index] = useState(0);
    const [p2Index, setP2Index] = useState(0);
    const [p1Score, setP1Score] = useState(0);
    const [p2Score, setP2Score] = useState(0);
    const [p1Feedback, setP1Feedback] = useState(null);
    const [p2Feedback, setP2Feedback] = useState(null);
    const [winner, setWinner] = useState(null);
    const [timer, setTimer] = useState(GAME_TIME);
    const [isFullscreen, setIsFullscreen] = useState(false);
    const [isPaused, setIsPaused] = useState(false);
    const [hasInitialActivity, setHasInitialActivity] = useState(false);
    const [idleCounter, setIdleCounter] = useState(0);

    const timerRef = useRef(null);
    const gameRef = useRef(null);

    /* Fullscreen toggle */
    const toggleFullscreen = useCallback(() => {
        if (!document.fullscreenElement) {
            const el = gameRef.current || document.documentElement;
            el.requestFullscreen?.().then(() => setIsFullscreen(true)).catch(() => { });
        } else {
            document.exitFullscreen?.().then(() => setIsFullscreen(false)).catch(() => { });
        }
    }, []);

    useEffect(() => {
        const handler = () => setIsFullscreen(!!document.fullscreenElement);
        document.addEventListener('fullscreenchange', handler);
        return () => document.removeEventListener('fullscreenchange', handler);
    }, []);

    // Format a question from the data pool
    const formatQuestionObj = (q) => {
        if (!q) return null;
        return {
            id: q.id + '-' + Math.random(),
            text: q.question,
            options: q.options,
            correctOption: q.correctOption,
            explanation: q.explanation,
        };
    };

    /* Start game */
    const startGame = useCallback((subject, mode = 'random') => {
        const pool = shuffle(subject.questions);
        setSelectedSubject(subject);
        setQuestionPool(pool);
        setQuestionMode(mode);
        setRopePosition(0);
        setP1Score(0);
        setP2Score(0);
        setP1Index(0);
        setP2Index(mode === 'same' ? 0 : 1); // Start different for random
        setWinner(null);
        setP1Feedback(null);
        setP2Feedback(null);
        setTimer(GAME_TIME);
        setIsPaused(false);
        setHasInitialActivity(false);
        setIdleCounter(0);

        if (mode === 'same') {
            const q = formatQuestionObj(pool[0]);
            setP1Question(q);
            setP2Question(q);
        } else {
            setP1Question(formatQuestionObj(pool[0]));
            setP2Question(formatQuestionObj(pool[1 % pool.length]));
        }
        setPhase('playing');
    }, []);

    /* Timer & Idle check */
    useEffect(() => {
        if (phase !== 'playing' || isPaused) return;

        timerRef.current = setInterval(() => {
            // Idle check at the start
            if (!hasInitialActivity) {
                setIdleCounter((prev) => {
                    if (prev + 1 >= IDLE_PAUSE_THRESHOLD) {
                        setIsPaused(true);
                        return 0;
                    }
                    return prev + 1;
                });
            }

            setTimer((t) => {
                if (t <= 1) {
                    clearInterval(timerRef.current);
                    // Determine winner based primarily on points if timer runs out
                    if (p1Score > p2Score) setWinner(1);
                    else if (p2Score > p1Score) setWinner(2);
                    else {
                        // Tie-break with rope position
                        if (ropePosition < 0) setWinner(1);
                        else if (ropePosition > 0) setWinner(2);
                        else setWinner(1); // Final fallback
                    }
                    setPhase('finished');
                    return 0;
                }
                return t - 1;
            });
        }, 1000);

        return () => clearInterval(timerRef.current);
    }, [phase, isPaused, hasInitialActivity, ropePosition, p1Score, p2Score]);

    /* Check win by threshold */
    useEffect(() => {
        if (ropePosition <= -WIN_THRESHOLD && phase === 'playing') {
            setWinner(1);
            setPhase('finished');
            clearInterval(timerRef.current);
        } else if (ropePosition >= WIN_THRESHOLD && phase === 'playing') {
            setWinner(2);
            setPhase('finished');
            clearInterval(timerRef.current);
        }
    }, [ropePosition, phase]);

    /* Handle answer */
    const handleAnswer = (player, selectedLabel) => {
        if (phase !== 'playing' || isPaused) return;
        setHasInitialActivity(true);

        const isP1 = player === 1;
        const currentQ = isP1 ? p1Question : p2Question;
        const isCorrect = selectedLabel === currentQ.correctOption;

        if (isP1) setP1Feedback(isCorrect ? 'success' : 'error');
        else setP2Feedback(isCorrect ? 'success' : 'error');

        // Update score and rope
        if (isCorrect) {
            if (isP1) setP1Score(s => s + 1);
            else setP2Score(s => s + 1);
            setRopePosition((prev) => isP1 ? prev - STEP_SIZE : prev + STEP_SIZE);
        } else {
            // Wrong answer pulls toward opponent
            setRopePosition((prev) => isP1 ? prev + STEP_SIZE : prev - STEP_SIZE);
        }

        // Delay to show feedback before moving to next question
        setTimeout(() => {
            setP1Feedback(null);
            setP2Feedback(null);

            // Increment index and pick next question ONLY for the responding player
            if (isP1) {
                const nextIdx = (p1Index + 1) % questionPool.length;
                setP1Index(nextIdx);
                setP1Question(formatQuestionObj(questionPool[nextIdx]));
            } else {
                const nextIdx = (p2Index + 1) % questionPool.length;
                setP2Index(nextIdx);
                setP2Question(formatQuestionObj(questionPool[nextIdx]));
            }
        }, 400);
    };

    const resumeGame = () => {
        setIsPaused(false);
        setHasInitialActivity(true);
    };

    /* ================================
       SUBJECT SELECTION SCREEN
    ================================ */
    if (phase === 'select') {
        return (
            <div className="tow-page">
                <div className="tow-select-screen">
                    <Link to="/games" className="tow-back-link">← Back to Games</Link>
                    <div className="tow-select-header">
                        <span className="tow-select-icon">🪢</span>
                        <h1>Brain Tug</h1>
                        <p>Answer questions faster than your opponent to pull them across the line! Choose your settings.</p>
                    </div>

                    <div className="tow-setup-options">
                        <div className="tow-mode-toggle">
                            <label>Question Type:</label>
                            <div className="tow-toggle-btns">
                                <button
                                    className={`tow-toggle-btn ${questionMode === 'random' ? 'active' : ''}`}
                                    onClick={() => setQuestionMode('random')}
                                >
                                    🎲 Random (Individual)
                                </button>
                                <button
                                    className={`tow-toggle-btn ${questionMode === 'same' ? 'active' : ''}`}
                                    onClick={() => setQuestionMode('same')}
                                >
                                    ⚔️ Same (Symmetric)
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="tow-subject-grid">
                        {SUBJECT_OPTIONS.map((subj) => (
                            <button
                                key={subj.id}
                                className="tow-subject-card"
                                style={{ '--accent': subj.color }}
                                onClick={() => startGame(subj, questionMode)}
                            >
                                <span className="tow-subj-icon">{subj.icon}</span>
                                <span className="tow-subj-name">{subj.name}</span>
                                <span className="tow-subj-count">{subj.questions.length} questions</span>
                            </button>
                        ))}
                    </div>

                    <div className="tow-rules">
                        <h3>How to Play</h3>
                        <ul>
                            <li>🎮 Two players share one screen — <strong>Team 1</strong> (Blue) vs <strong>Team 2</strong> (Red).</li>
                            <li>✅ Correct pulls toward you. ❌ Wrong pulls toward opponent.</li>
                            <li>🔄 New question appears immediately after any answer.</li>
                            <li>💡 <strong>Symmetric Mode</strong>: Both teams get the same question. First to answer wins the pull!</li>
                            <li>🏆 Winner is decided by rope position OR points if time runs out.</li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }

    /* ================================
       GAME PLAY / FINISHED SCREEN
    ================================ */
    return (
        <div className="tow-page tow-page-light" ref={gameRef}>
            <div className="tow-title-bar">
                <Link to="/games" className="tow-home-btn">🏠 HOME</Link>
                <div className="tow-title-center">
                    <h1 className="tow-game-title">TUG OF WAR: {selectedSubject?.name.toUpperCase()}</h1>
                    <p className="tow-title-sub">
                        {questionMode === 'same' ? 'Both teams get the same question. Race to answer!' : 'Each team gets their own questions.'}
                    </p>
                </div>
                <div className="tow-title-actions">
                    <button className="tow-btn-fullscreen" onClick={toggleFullscreen} title={isFullscreen ? 'Exit Fullscreen' : 'Fullscreen'}>
                        {isFullscreen ? '⊗' : '⛶'}
                    </button>
                    <button className="tow-btn-restart" onClick={() => setPhase('select')}>
                        {phase === 'finished' ? '🎮 New' : '↩'}
                    </button>
                </div>
            </div>

            {phase === 'finished' && (
                <div className="tow-endgame-cta">
                    <button className="tow-btn-play-again" onClick={() => startGame(selectedSubject, questionMode)}>
                        🔄 Rematch
                    </button>
                    <button className="tow-btn-change" onClick={() => setPhase('select')}>
                        📚 Change Subject
                    </button>
                    <Link to="/games" className="tow-btn-secondary">← All Games</Link>
                </div>
            )}

            <div className="tow-game-layout">
                <TeamPanel
                    team="blue"
                    score={p1Score}
                    question={p1Question}
                    onAnswer={(label) => handleAnswer(1, label)}
                    disabled={phase === 'finished' || isPaused}
                    feedback={p1Feedback}
                />

                <Arena
                    position={ropePosition}
                    winner={winner}
                    p1Score={p1Score}
                    p2Score={p2Score}
                    timer={timer}
                />

                <TeamPanel
                    team="red"
                    score={p2Score}
                    question={p2Question}
                    onAnswer={(label) => handleAnswer(2, label)}
                    disabled={phase === 'finished' || isPaused}
                    feedback={p2Feedback}
                />
            </div>

            {/* Only the pause overlay remains fixed at the top level */}
            {isPaused && !winner && (
                <div className="tow-pause-overlay-fixed">
                    <div className="tow-winner-card tow-pause-card">
                        <span className="tow-trophy">💤</span>
                        <h2>Napping?</h2>
                        <p>Join the tug of war! Tap continue to resume.</p>
                        <button className="tow-btn-play-again" onClick={resumeGame} style={{ marginTop: '20px' }}>
                            ▶️ Continue
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}