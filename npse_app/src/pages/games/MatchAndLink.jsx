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
const PAIRS_PER_ROUND = 6;
const MAX_ROUNDS = 3;

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

const truncate = (str, len = 80) => str.length > len ? str.slice(0, len) + '…' : str;

/** Build N matching pairs from quiz questions */
const buildPairs = (questions, count) => {
    const shuffled = shuffle(questions);
    const pairs = [];
    const usedAnswers = new Set();

    for (const q of shuffled) {
        if (pairs.length >= count) break;
        const correctOpt = q.options.find(o => o.label === q.correctOption);
        if (!correctOpt) continue;
        const ansKey = correctOpt.text.toLowerCase().trim();
        if (usedAnswers.has(ansKey)) continue;
        usedAnswers.add(ansKey);

        pairs.push({
            id: q.id,
            question: q.question,
            answer: correctOpt.text,
            topic: q.topic,
        });
    }
    return pairs;
};

/* ================================================================
   MAIN COMPONENT
================================================================ */
export default function MatchAndLink() {
    const [phase, setPhase] = useState('select'); // select | playing | roundEnd | finished
    const [selectedSubject, setSelectedSubject] = useState(null);
    const [allQuestions, setAllQuestions] = useState([]);

    // Round state
    const [round, setRound] = useState(1);
    const [pairs, setPairs] = useState([]);
    const [leftItems, setLeftItems] = useState([]);
    const [rightItems, setRightItems] = useState([]);
    const [selectedLeft, setSelectedLeft] = useState(null);
    const [selectedRight, setSelectedRight] = useState(null);
    const [matchedPairs, setMatchedPairs] = useState([]); // [{leftId, rightId}]
    const [wrongPair, setWrongPair] = useState(null);
    const [score, setScore] = useState(0);
    const [totalAttempts, setTotalAttempts] = useState(0);
    const [streak, setStreak] = useState(0);
    const [bestStreak, setBestStreak] = useState(0);

    // Timer — per-round + cumulative
    const [roundStartTime, setRoundStartTime] = useState(0); // elapsed at round start
    const [elapsed, setElapsed] = useState(0);               // cumulative seconds
    const timerRef = useRef(null);

    // Round scores
    const [roundScores, setRoundScores] = useState([]);

    // Guard: is the round fully initialised with pairs?
    const roundReady = useRef(false);

    /* Start game */
    const startGame = useCallback((subject) => {
        setSelectedSubject(subject);
        const shuffledQ = shuffle(subject.questions);
        setAllQuestions(shuffledQ);
        setRound(1);
        setScore(0);
        setTotalAttempts(0);
        setStreak(0);
        setBestStreak(0);
        setElapsed(0);
        setRoundStartTime(0);
        setRoundScores([]);
        setMatchedPairs([]);
        setSelectedLeft(null);
        setSelectedRight(null);
        setWrongPair(null);
        roundReady.current = false;

        // Build first round pairs immediately
        const roundPairs = buildPairs(shuffledQ.slice(0, PAIRS_PER_ROUND * 3), PAIRS_PER_ROUND);
        setPairs(roundPairs);
        setLeftItems(roundPairs.map((p, i) => ({ id: p.id, text: p.question, index: i })));
        setRightItems(shuffle(roundPairs.map((p, i) => ({ id: p.id, text: p.answer, index: i }))));

        // Mark ready after a tick so completion check doesn't fire on empty state
        setTimeout(() => { roundReady.current = true; }, 50);
        setPhase('playing');
    }, []);

    /* Timer — runs while phase === 'playing' */
    useEffect(() => {
        if (phase === 'playing') {
            timerRef.current = setInterval(() => setElapsed(t => t + 1), 1000);
            return () => clearInterval(timerRef.current);
        }
        return () => clearInterval(timerRef.current);
    }, [phase]);

    /* Check for round completion */
    useEffect(() => {
        // Only fire when round is fully ready, all pairs are loaded, and all matched
        if (
            phase !== 'playing' ||
            !roundReady.current ||
            pairs.length === 0 ||
            matchedPairs.length < pairs.length
        ) return;

        clearInterval(timerRef.current);

        // Calculate per-round time
        const roundTime = elapsed - roundStartTime;

        setRoundScores(prev => [...prev, {
            round,
            correct: matchedPairs.length,
            total: pairs.length,
            time: roundTime,
        }]);

        if (round >= MAX_ROUNDS) {
            setPhase('finished');
        } else {
            setPhase('roundEnd');
        }
    }, [matchedPairs.length, pairs.length, phase, round, elapsed, roundStartTime]);

    /* Advance to next round */
    const nextRound = () => {
        const nextRoundNum = round + 1;
        setRound(nextRoundNum);

        // Build pairs for the new round
        const usedCount = (nextRoundNum - 1) * PAIRS_PER_ROUND;
        const available = allQuestions.slice(usedCount);
        const roundPairs = buildPairs(available, PAIRS_PER_ROUND);

        setPairs(roundPairs);
        setLeftItems(roundPairs.map((p, i) => ({ id: p.id, text: p.question, index: i })));
        setRightItems(shuffle(roundPairs.map((p, i) => ({ id: p.id, text: p.answer, index: i }))));
        setMatchedPairs([]);
        setSelectedLeft(null);
        setSelectedRight(null);
        setWrongPair(null);
        setRoundStartTime(elapsed); // mark start of this round's time

        // Guard: delay marking ready so the completion check doesn't fire on transition
        roundReady.current = false;
        setTimeout(() => { roundReady.current = true; }, 50);

        setPhase('playing');
    };

    /* Handle selection */
    const handleSelectLeft = (item) => {
        if (matchedPairs.some(m => m.leftId === item.id)) return;
        setSelectedLeft(item.id);
        setWrongPair(null);

        if (selectedRight !== null) {
            tryMatch(item.id, selectedRight);
        }
    };

    const handleSelectRight = (item) => {
        if (matchedPairs.some(m => m.rightId === item.id)) return;
        setSelectedRight(item.id);
        setWrongPair(null);

        if (selectedLeft !== null) {
            tryMatch(selectedLeft, item.id);
        }
    };

    const tryMatch = (leftId, rightId) => {
        setTotalAttempts(a => a + 1);

        if (leftId === rightId) {
            // Correct match — same question id
            setMatchedPairs(prev => [...prev, { leftId, rightId }]);
            setScore(s => s + 1);
            setStreak(s => {
                const newStreak = s + 1;
                setBestStreak(b => Math.max(b, newStreak));
                return newStreak;
            });
            setSelectedLeft(null);
            setSelectedRight(null);
        } else {
            // Wrong match
            setWrongPair({ leftId, rightId });
            setStreak(0);
            setTimeout(() => {
                setWrongPair(null);
                setSelectedLeft(null);
                setSelectedRight(null);
            }, 600);
        }
    };

    const formatTime = (s) => {
        const m = Math.floor(s / 60);
        const sec = s % 60;
        return `${m}:${String(sec).padStart(2, '0')}`;
    };

    const getAccuracy = () => {
        if (totalAttempts === 0) return 100;
        return Math.round((score / totalAttempts) * 100);
    };

    const getTotalRoundTime = () => {
        return roundScores.reduce((sum, rs) => sum + rs.time, 0);
    };

    const getItemState = (id, side) => {
        const isMatched = matchedPairs.some(m => side === 'left' ? m.leftId === id : m.rightId === id);
        if (isMatched) return 'matched';

        const isWrong = wrongPair && (side === 'left' ? wrongPair.leftId === id : wrongPair.rightId === id);
        if (isWrong) return 'wrong';

        const isSelected = side === 'left' ? selectedLeft === id : selectedRight === id;
        if (isSelected) return 'selected';

        return 'default';
    };

    /* ================================
       SUBJECT SELECTION
    ================================ */
    if (phase === 'select') {
        return (
            <div className="mal-page">
                <div className="mal-select-screen">
                    <Link to="/games" className="mal-back-link">← Back to Games</Link>
                    <div className="mal-select-header">
                        <span className="mal-select-icon">🔗</span>
                        <h1>Match & Link</h1>
                        <p>Connect questions to their correct answers. Match all pairs to complete each round!</p>
                    </div>

                    <div className="mal-subject-grid">
                        {SUBJECT_OPTIONS.map((subj) => (
                            <button
                                key={subj.id}
                                className="mal-subject-card"
                                onClick={() => startGame(subj)}
                            >
                                <span className="mal-subj-icon">{subj.icon}</span>
                                <span className="mal-subj-name">{subj.name}</span>
                                <span className="mal-subj-count">{subj.questions.length} questions</span>
                            </button>
                        ))}
                    </div>

                    <div className="mal-rules">
                        <h3>How to Play</h3>
                        <ul>
                            <li>🎯 Tap a question on the left, then tap its matching answer on the right.</li>
                            <li>✅ Correct matches stay connected and light up green.</li>
                            <li>❌ Wrong matches flash red — try again!</li>
                            <li>⏱️ Complete all {PAIRS_PER_ROUND} pairs per round. {MAX_ROUNDS} rounds total.</li>
                            <li>🔥 Build streaks for bonus points!</li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }

    /* ================================
       ROUND COMPLETE SCREEN
    ================================ */
    if (phase === 'roundEnd') {
        const lastRound = roundScores[roundScores.length - 1];
        return (
            <div className="mal-page mal-page-light">
                <div className="mal-round-screen">
                    <div className="mal-round-card">
                        <span className="mal-round-emoji">🎉</span>
                        <h2>Round {lastRound?.round} Complete!</h2>
                        <p className="mal-round-sub">Great job! Here's how you did:</p>

                        <div className="mal-round-stats">
                            <div className="mal-stat-item">
                                <span className="mal-stat-val">{lastRound?.correct}/{lastRound?.total}</span>
                                <span className="mal-stat-label">Pairs Matched</span>
                            </div>
                            <div className="mal-stat-item">
                                <span className="mal-stat-val">{formatTime(lastRound?.time || 0)}</span>
                                <span className="mal-stat-label">Round Time</span>
                            </div>
                            <div className="mal-stat-item">
                                <span className="mal-stat-val">{getAccuracy()}%</span>
                                <span className="mal-stat-label">Accuracy</span>
                            </div>
                        </div>

                        <button className="mal-btn-primary" onClick={nextRound}>
                            Next Round →
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    /* ================================
       FINISHED SCREEN
    ================================ */
    if (phase === 'finished') {
        const totalTime = getTotalRoundTime();
        return (
            <div className="mal-page mal-page-light">
                <div className="mal-round-screen">
                    <div className="mal-round-card mal-finish-card">
                        <span className="mal-round-emoji">🏆</span>
                        <h2>Game Complete!</h2>
                        <p className="mal-round-sub">{selectedSubject?.name} — {MAX_ROUNDS} Rounds</p>

                        <div className="mal-round-stats">
                            <div className="mal-stat-item">
                                <span className="mal-stat-val mal-stat-big">{score}</span>
                                <span className="mal-stat-label">Total Matches</span>
                            </div>
                            <div className="mal-stat-item">
                                <span className="mal-stat-val">{getAccuracy()}%</span>
                                <span className="mal-stat-label">Accuracy</span>
                            </div>
                            <div className="mal-stat-item">
                                <span className="mal-stat-val">{formatTime(totalTime)}</span>
                                <span className="mal-stat-label">Total Time</span>
                            </div>
                            <div className="mal-stat-item">
                                <span className="mal-stat-val">🔥 {bestStreak}</span>
                                <span className="mal-stat-label">Best Streak</span>
                            </div>
                        </div>

                        {/* Per-round breakdown */}
                        <div className="mal-rounds-breakdown">
                            <h4 className="mal-rb-title">Round Breakdown</h4>
                            {roundScores.map((rs) => {
                                const pct = rs.total > 0 ? Math.round((rs.correct / rs.total) * 100) : 0;
                                return (
                                    <div key={rs.round} className="mal-rb-row">
                                        <span className="mal-rb-label">Round {rs.round}</span>
                                        <span className="mal-rb-bar">
                                            <span
                                                className="mal-rb-fill"
                                                style={{ width: `${pct}%` }}
                                            />
                                        </span>
                                        <span className="mal-rb-pct">{pct}%</span>
                                        <span className="mal-rb-time">{formatTime(rs.time)}</span>
                                    </div>
                                );
                            })}
                        </div>

                        <div className="mal-finish-actions">
                            <button className="mal-btn-primary" onClick={() => startGame(selectedSubject)}>
                                🔄 Play Again
                            </button>
                            <button className="mal-btn-secondary" onClick={() => setPhase('select')}>
                                📚 Change Subject
                            </button>
                            <Link to="/games" className="mal-btn-secondary">← All Games</Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    /* ================================
       GAMEPLAY SCREEN
    ================================ */
    const currentRoundTime = elapsed - roundStartTime;

    return (
        <div className="mal-page mal-page-light">
            {/* Header bar */}
            <div className="mal-header">
                <Link to="/games" className="mal-home-btn">🏠 HOME</Link>
                <div className="mal-header-center">
                    <h1 className="mal-header-title">MATCH & LINK</h1>
                    <p className="mal-header-sub">{selectedSubject?.name}</p>
                </div>
                <div className="mal-header-stats">
                    <div className="mal-hs-item">
                        <span className="mal-hs-val">{score}</span>
                        <span className="mal-hs-label">Pairs</span>
                    </div>
                    <div className="mal-hs-item mal-hs-timer">
                        <span className="mal-hs-val">{formatTime(currentRoundTime)}</span>
                        <span className="mal-hs-label">Round</span>
                    </div>
                </div>
            </div>

            {/* Round indicator */}
            <div className="mal-round-bar">
                <div className="mal-round-info">
                    <span className="mal-round-label">Round {round}/{MAX_ROUNDS}</span>
                    <span className="mal-round-matched">{matchedPairs.length}/{pairs.length} matched</span>
                    {streak >= 2 && <span className="mal-streak-badge">🔥 {streak} streak!</span>}
                </div>
                <div className="mal-progress">
                    <div
                        className="mal-progress-fill"
                        style={{ width: pairs.length > 0 ? `${(matchedPairs.length / pairs.length) * 100}%` : '0%' }}
                    />
                </div>
            </div>

            {/* Matching columns */}
            <div className="mal-game-area">
                {/* Left = Questions */}
                <div className="mal-column mal-col-left">
                    <div className="mal-col-header mal-col-header-q">Questions</div>
                    <div className="mal-col-items">
                        {leftItems.map((item, idx) => {
                            const state = getItemState(item.id, 'left');
                            return (
                                <button
                                    key={item.id}
                                    className={`mal-item mal-item-q mal-item-${state}`}
                                    onClick={() => handleSelectLeft(item)}
                                    disabled={state === 'matched'}
                                >
                                    <span className="mal-item-num">{idx + 1}</span>
                                    <span className="mal-item-text">{truncate(item.text, 70)}</span>
                                    {state === 'matched' && <span className="mal-item-check">✓</span>}
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* Right = Answers */}
                <div className="mal-column mal-col-right">
                    <div className="mal-col-header mal-col-header-a">Answers</div>
                    <div className="mal-col-items">
                        {rightItems.map((item, idx) => {
                            const state = getItemState(item.id, 'right');
                            const letters = 'ABCDEFGHIJ';
                            return (
                                <button
                                    key={item.id + '-r'}
                                    className={`mal-item mal-item-a mal-item-${state}`}
                                    onClick={() => handleSelectRight(item)}
                                    disabled={state === 'matched'}
                                >
                                    <span className="mal-item-letter">{letters[idx]}</span>
                                    <span className="mal-item-text">{truncate(item.text, 70)}</span>
                                    {state === 'matched' && <span className="mal-item-check">✓</span>}
                                </button>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* Hint at bottom */}
            <div className="mal-hint">
                {selectedLeft && !selectedRight && <span>Now tap the matching answer →</span>}
                {selectedRight && !selectedLeft && <span>← Now tap the matching question</span>}
                {!selectedLeft && !selectedRight && matchedPairs.length < pairs.length && (
                    <span>Tap a question, then tap its answer to match</span>
                )}
            </div>
        </div>
    );
}
