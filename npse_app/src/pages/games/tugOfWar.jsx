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
const WIN_THRESHOLD = 50;
const STEP_SIZE = 10;
const GAME_TIME = 120; // seconds

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

const pickQuestion = (pool) => {
    if (!pool || pool.length === 0) return null;
    const q = pool[Math.floor(Math.random() * pool.length)];
    return {
        id: q.id + '-' + Math.random(),
        text: q.question,
        options: q.options,
        correctOption: q.correctOption,
        explanation: q.explanation,
    };
};

/* ================================================================
   SVG HUMAN SPRITE
   - Static by default (no animation)
   - Only animates briefly on correct/wrong answer via CSS class
================================================================ */
const HumanSprite = ({ team, variant = 0, isWinner }) => {
    const isBlue = team === 'blue';
    const faceDir = isBlue ? 1 : -1;

    const skinTones = ['#F5CBA7', '#D2B48C', '#C68642', '#FFDBAC'];
    const skinColor = skinTones[(isBlue ? 0 : 1) + variant];

    const shirtColor = isBlue ? '#2980B9' : '#E74C3C';
    const shirtPattern = isBlue ? '#1F6FA3' : '#C0392B';
    const pantsColor = isBlue ? '#1A5276' : '#922B21';
    const hairColor = variant === 0 ? '#2C1810' : '#1A1A2E';
    const headband = isBlue ? '#3498DB' : '#E74C3C';
    const shoeColor = isBlue ? '#2471A3' : '#E74C3C';

    return (
        <svg
            viewBox="0 0 120 180"
            className={`tow-sprite ${isWinner ? 'tow-winner' : ''}`}
            style={{ transform: `scaleX(${faceDir})` }}
        >
            {/* Headband */}
            <ellipse cx="60" cy="24" rx="22" ry="10" fill={headband} />
            <rect x="38" y="18" width="44" height="8" fill={headband} rx="2" />
            {isBlue ? (
                <path d="M82 22 Q90 18 95 25 Q88 28 82 22Z" fill={headband} opacity="0.8" />
            ) : (
                <path d="M38 22 Q30 18 25 25 Q32 28 38 22Z" fill={headband} opacity="0.8" />
            )}

            {/* Hair */}
            <ellipse cx="60" cy="26" rx="20" ry="16" fill={hairColor} />

            {/* Head */}
            <ellipse cx="60" cy="32" rx="16" ry="16" fill={skinColor} />

            {/* Eyes */}
            <circle cx="53" cy="29" r="2.5" fill="#2C3E50" />
            <circle cx="67" cy="29" r="2.5" fill="#2C3E50" />
            <circle cx="53.8" cy="28.2" r="0.8" fill="white" />
            <circle cx="67.8" cy="28.2" r="0.8" fill="white" />

            {/* Eyebrows */}
            <line x1="49" y1="24" x2="56" y2="25" stroke={hairColor} strokeWidth="1.5" strokeLinecap="round" />
            <line x1="64" y1="25" x2="71" y2="24" stroke={hairColor} strokeWidth="1.5" strokeLinecap="round" />

            {/* Mouth */}
            {isWinner ? (
                <path d="M53 38 Q60 46 67 38" fill="none" stroke="#E74C3C" strokeWidth="2" strokeLinecap="round" />
            ) : (
                <path d="M55 38 Q60 40 65 38" fill="none" stroke="#C0392B" strokeWidth="1.5" strokeLinecap="round" />
            )}

            {/* Neck */}
            <rect x="55" y="46" width="10" height="6" fill={skinColor} rx="3" />

            {/* Torso */}
            <path d="M38 55 Q38 52 48 50 L72 50 Q82 52 82 55 L84 100 Q84 104 60 106 Q36 104 36 100 Z"
                fill={shirtColor} />
            <line x1="45" y1="55" x2="55" y2="95" stroke={shirtPattern} strokeWidth="3" opacity="0.3" />
            <line x1="55" y1="55" x2="65" y2="95" stroke={shirtPattern} strokeWidth="3" opacity="0.3" />
            <line x1="65" y1="55" x2="75" y2="95" stroke={shirtPattern} strokeWidth="3" opacity="0.3" />
            <path d="M52 50 L60 58 L68 50" fill="none" stroke={shirtPattern} strokeWidth="2" />

            {/* Back arm pulling */}
            <path d={`M${isBlue ? 38 : 82} 62 Q${isBlue ? 14 : 106} 66 ${isBlue ? -5 : 125} 72`}
                fill="none" stroke={skinColor} strokeWidth="9" strokeLinecap="round" />
            <circle cx={isBlue ? -5 : 125} cy="72" r="6" fill={skinColor} />
            <circle cx={isBlue ? -3 : 123} cy="69" r="2.5" fill={skinColor} />
            <circle cx={isBlue ? 0 : 120} cy="71" r="2.5" fill={skinColor} />

            {/* Front arm bracing */}
            <path d={`M${isBlue ? 82 : 38} 62 Q${isBlue ? 94 : 26} 80 ${isBlue ? 88 : 32} 95`}
                fill="none" stroke={skinColor} strokeWidth="8" strokeLinecap="round" />
            <circle cx={isBlue ? 88 : 32} cy="95" r="5" fill={skinColor} />

            {/* Belt */}
            <rect x="36" y="98" width="48" height="6" rx="3" fill="#5D4037" />
            <rect x="56" y="97" width="8" height="8" rx="2" fill="#8D6E63" />

            {/* Legs */}
            <path d="M46 104 L30 145 L24 165"
                fill="none" stroke={pantsColor} strokeWidth="11" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M74 104 L85 145 L90 165"
                fill="none" stroke={pantsColor} strokeWidth="11" strokeLinecap="round" strokeLinejoin="round" />

            {/* Shoes */}
            <ellipse cx="20" cy="170" rx="12" ry="6" fill={shoeColor} />
            <ellipse cx="94" cy="170" rx="12" ry="6" fill={shoeColor} />
            <ellipse cx="16" cy="168" rx="4" ry="3" fill="white" opacity="0.3" />
            <ellipse cx="90" cy="168" rx="4" ry="3" fill="white" opacity="0.3" />
        </svg>
    );
};

/* ================================================================
   ARENA — central tug scene with scoreboard
   Sprites are always centered vertically, never stretched
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
            {/* Scoreboard */}
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

            {/* Arena field — fixed height, sprites centered */}
            <div className="tow-arena">
                <div className="tow-center-line" />

                <div className="tow-rope-group" style={{ left: `${pct}%` }}>
                    {/* Team 1 — 2 humans */}
                    <div className="tow-team-sprites tow-team-left">
                        <HumanSprite team="blue" variant={0} isWinner={winner === 1} />
                        <HumanSprite team="blue" variant={1} isWinner={winner === 1} />
                    </div>

                    {/* Rope */}
                    <div className="tow-rope">
                        <div className="tow-knot" />
                    </div>

                    {/* Team 2 — 2 humans */}
                    <div className="tow-team-sprites tow-team-right">
                        <HumanSprite team="red" variant={0} isWinner={winner === 2} />
                        <HumanSprite team="red" variant={1} isWinner={winner === 2} />
                    </div>
                </div>

                {/* Winner overlay */}
                {winner && (
                    <div className="tow-winner-overlay">
                        <div className="tow-winner-card">
                            <span className="tow-trophy">🏆</span>
                            <h2>Team {winner} Wins!</h2>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

/* ================================================================
   TEAM PANEL — question + options for one team
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
                            disabled={disabled}
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
    const [questionPool, setQuestionPool] = useState([]);
    const [ropePosition, setRopePosition] = useState(0);
    const [p1Question, setP1Question] = useState(null);
    const [p2Question, setP2Question] = useState(null);
    const [p1Score, setP1Score] = useState(0);
    const [p2Score, setP2Score] = useState(0);
    const [p1Feedback, setP1Feedback] = useState(null);
    const [p2Feedback, setP2Feedback] = useState(null);
    const [winner, setWinner] = useState(null);
    const [timer, setTimer] = useState(GAME_TIME);
    const [isFullscreen, setIsFullscreen] = useState(false);
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

    /* Listen for fullscreen changes (e.g. user presses Escape) */
    useEffect(() => {
        const handler = () => setIsFullscreen(!!document.fullscreenElement);
        document.addEventListener('fullscreenchange', handler);
        return () => document.removeEventListener('fullscreenchange', handler);
    }, []);

    /* Start game */
    const startGame = useCallback((subject) => {
        const pool = shuffle(subject.questions);
        setSelectedSubject(subject);
        setQuestionPool(pool);
        setRopePosition(0);
        setP1Score(0);
        setP2Score(0);
        setWinner(null);
        setP1Feedback(null);
        setP2Feedback(null);
        setTimer(GAME_TIME);
        setP1Question(pickQuestion(pool));
        setP2Question(pickQuestion(pool));
        setPhase('playing');
    }, []);

    /* Timer */
    useEffect(() => {
        if (phase !== 'playing') return;
        timerRef.current = setInterval(() => {
            setTimer((t) => {
                if (t <= 1) {
                    clearInterval(timerRef.current);
                    if (ropePosition < 0) setWinner(1);
                    else if (ropePosition > 0) setWinner(2);
                    else setWinner(p1Score >= p2Score ? 1 : 2);
                    setPhase('finished');
                    return 0;
                }
                return t - 1;
            });
        }, 1000);
        return () => clearInterval(timerRef.current);
    }, [phase]);

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
        if (phase !== 'playing') return;

        const isP1 = player === 1;
        const currentQ = isP1 ? p1Question : p2Question;
        const setFb = isP1 ? setP1Feedback : setP2Feedback;
        const setQ = isP1 ? setP1Question : setP2Question;
        const setScr = isP1 ? setP1Score : setP2Score;

        if (selectedLabel === currentQ.correctOption) {
            setFb('success');
            setScr((s) => s + 1);
            setRopePosition((prev) => (isP1 ? prev - STEP_SIZE : prev + STEP_SIZE));
            setTimeout(() => {
                setFb(null);
                setQ(pickQuestion(questionPool));
            }, 300);
        } else {
            setFb('error');
            setRopePosition((prev) => (isP1 ? prev + STEP_SIZE : prev - STEP_SIZE));
            setTimeout(() => setFb(null), 500);
        }
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
                        <p>Answer questions faster than your opponent to pull them across the line! Choose a subject to begin.</p>
                    </div>

                    <div className="tow-subject-grid">
                        {SUBJECT_OPTIONS.map((subj) => (
                            <button
                                key={subj.id}
                                className="tow-subject-card"
                                style={{ '--accent': subj.color }}
                                onClick={() => startGame(subj)}
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
                            <li>✅ A correct answer pulls the rope toward your team.</li>
                            <li>❌ A wrong answer pulls it toward the opponent and a new question appears immediately.</li>
                            <li>🏆 First to pull the opponent past the line wins!</li>
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
            {/* Title bar */}
            <div className="tow-title-bar">
                <Link to="/games" className="tow-home-btn">🏠 HOME</Link>
                <div className="tow-title-center">
                    <h1 className="tow-game-title">TUG OF WAR: {selectedSubject?.name.toUpperCase()}</h1>
                    <p className="tow-title-sub">
                        Correct answer pulls the rope toward your team.
                        Wrong answer pulls it toward the opponent.
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

            {/* Game layout: Arena full-width top, teams side-by-side below */}
            <div className="tow-game-layout">
                <Arena
                    position={ropePosition}
                    winner={winner}
                    p1Score={p1Score}
                    p2Score={p2Score}
                    timer={timer}
                />

                <div className="tow-teams-row">
                    <TeamPanel
                        team="blue"
                        score={p1Score}
                        question={p1Question}
                        onAnswer={(label) => handleAnswer(1, label)}
                        disabled={phase === 'finished'}
                        feedback={p1Feedback}
                    />
                    <TeamPanel
                        team="red"
                        score={p2Score}
                        question={p2Question}
                        onAnswer={(label) => handleAnswer(2, label)}
                        disabled={phase === 'finished'}
                        feedback={p2Feedback}
                    />
                </div>
            </div>

            {/* End-game buttons */}
            {phase === 'finished' && (
                <div className="tow-endgame-cta">
                    <button className="tow-btn-play-again" onClick={() => startGame(selectedSubject)}>
                        🔄 Rematch
                    </button>
                    <button className="tow-btn-change" onClick={() => setPhase('select')}>
                        📚 Change Subject
                    </button>
                </div>
            )}
        </div>
    );
}