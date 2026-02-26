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
const QUESTIONS_PER_GAME = 10;
const WRONG_CHANCE = 0.65; // 65% of "student answers" are wrong

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

/**
 * Build game items from quiz questions.
 * Each item has:
 *   - question text
 *   - studentAnswer (the text shown as "a student answered...")
 *   - isCorrect (boolean — did the student get it right?)
 *   - correctAnswer (the actual correct answer text)
 *   - wrongOptions (other options to pick from if student was wrong)
 */
const buildGameItems = (questions, count) => {
    const pool = shuffle(questions).slice(0, count);
    return pool.map((q) => {
        const correctOpt = q.options.find(o => o.label === q.correctOption);
        const wrongOpts = q.options.filter(o => o.label !== q.correctOption);
        const showWrong = Math.random() < WRONG_CHANCE && wrongOpts.length > 0;

        let studentAnswer, isCorrect;
        if (showWrong) {
            // Pick a random wrong answer as the "student's answer"
            const wrongPick = wrongOpts[Math.floor(Math.random() * wrongOpts.length)];
            studentAnswer = wrongPick.text;
            isCorrect = false;
        } else {
            studentAnswer = correctOpt.text;
            isCorrect = true;
        }

        // Build correction options: correct answer + 2 wrong ones (shuffled)
        const correctionOptions = shuffle([
            { text: correctOpt.text, isRight: true },
            ...shuffle(wrongOpts).slice(0, 2).map(o => ({ text: o.text, isRight: false })),
        ]);

        return {
            id: q.id,
            question: q.question,
            topic: q.topic,
            studentAnswer,
            isCorrect,
            correctAnswer: correctOpt.text,
            correctionOptions,
            explanation: q.explanation || '',
        };
    });
};

/* ================================================================
   MAIN COMPONENT
================================================================ */
export default function SpotTheMistake() {
    const [phase, setPhase] = useState('select'); // select | playing | feedback | finished
    const [selectedSubject, setSelectedSubject] = useState(null);

    // Game state
    const [items, setItems] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [step, setStep] = useState('judge'); // judge | correct | feedback
    const [score, setScore] = useState(0);
    const [totalAnswered, setTotalAnswered] = useState(0);
    const [streak, setStreak] = useState(0);
    const [bestStreak, setBestStreak] = useState(0);
    const [judgedCorrectly, setJudgedCorrectly] = useState(null); // true/false
    const [selectedCorrection, setSelectedCorrection] = useState(null);
    const [showExplanation, setShowExplanation] = useState(false);

    // Results tracking
    const [results, setResults] = useState([]); // [{question, studentAnswer, isCorrect, playerJudgment, playerCorrection, gotItRight}]

    // Timer
    const [elapsed, setElapsed] = useState(0);
    const timerRef = useRef(null);

    const currentItem = items[currentIndex] || null;

    /* Start game */
    const startGame = useCallback((subject) => {
        setSelectedSubject(subject);
        const gameItems = buildGameItems(subject.questions, QUESTIONS_PER_GAME);
        setItems(gameItems);
        setCurrentIndex(0);
        setStep('judge');
        setScore(0);
        setTotalAnswered(0);
        setStreak(0);
        setBestStreak(0);
        setElapsed(0);
        setResults([]);
        setJudgedCorrectly(null);
        setSelectedCorrection(null);
        setShowExplanation(false);
        setPhase('playing');
    }, []);

    /* Timer */
    useEffect(() => {
        if (phase === 'playing') {
            timerRef.current = setInterval(() => setElapsed(t => t + 1), 1000);
            return () => clearInterval(timerRef.current);
        }
        return () => clearInterval(timerRef.current);
    }, [phase]);

    /* Player judges: "Correct" or "Wrong" */
    const handleJudgment = (playerSaysCorrect) => {
        const item = currentItem;
        if (!item) return;

        if (item.isCorrect && playerSaysCorrect) {
            // Student was right, player said correct → player is right!
            recordResult(item, 'correct', null, true);
            addScore(true);
            setStep('feedback');
            setJudgedCorrectly(true);
        } else if (!item.isCorrect && !playerSaysCorrect) {
            // Student was wrong, player said wrong → good catch! Now pick the right answer.
            setJudgedCorrectly(true);
            setStep('correct');
        } else {
            // Player got it wrong
            recordResult(item, playerSaysCorrect ? 'correct' : 'wrong', null, false);
            addScore(false);
            setStep('feedback');
            setJudgedCorrectly(false);
        }
    };

    /* Player selects the correction */
    const handleCorrection = (option) => {
        const item = currentItem;
        if (!item) return;
        setSelectedCorrection(option.text);

        if (option.isRight) {
            recordResult(item, 'wrong', option.text, true);
            addScore(true);
        } else {
            recordResult(item, 'wrong', option.text, false);
            addScore(false);
        }
        setStep('feedback');
    };

    const addScore = (correct) => {
        setTotalAnswered(t => t + 1);
        if (correct) {
            setScore(s => s + 1);
            setStreak(s => {
                const ns = s + 1;
                setBestStreak(b => Math.max(b, ns));
                return ns;
            });
        } else {
            setStreak(0);
        }
    };

    const recordResult = (item, playerJudgment, playerCorrection, gotItRight) => {
        setResults(prev => [...prev, {
            question: item.question,
            studentAnswer: item.studentAnswer,
            isCorrect: item.isCorrect,
            correctAnswer: item.correctAnswer,
            playerJudgment,
            playerCorrection,
            gotItRight,
            explanation: item.explanation,
        }]);
    };

    /* Next question */
    const nextQuestion = () => {
        if (currentIndex + 1 >= items.length) {
            clearInterval(timerRef.current);
            setPhase('finished');
        } else {
            setCurrentIndex(i => i + 1);
            setStep('judge');
            setJudgedCorrectly(null);
            setSelectedCorrection(null);
            setShowExplanation(false);
        }
    };

    const formatTime = (s) => {
        const m = Math.floor(s / 60);
        const sec = s % 60;
        return `${m}:${String(sec).padStart(2, '0')}`;
    };

    const getAccuracy = () => {
        if (totalAnswered === 0) return 100;
        return Math.round((score / totalAnswered) * 100);
    };

    const getGrade = () => {
        const pct = getAccuracy();
        if (pct >= 90) return { emoji: '🌟', label: 'Outstanding!' };
        if (pct >= 70) return { emoji: '🎉', label: 'Great Job!' };
        if (pct >= 50) return { emoji: '👍', label: 'Good Effort!' };
        return { emoji: '💪', label: 'Keep Practising!' };
    };

    /* ================================
       SUBJECT SELECTION
    ================================ */
    if (phase === 'select') {
        return (
            <div className="stm-page">
                <div className="stm-select-screen">
                    <Link to="/games" className="stm-back-link">← Back to Games</Link>
                    <div className="stm-select-header">
                        <span className="stm-select-icon">🔍</span>
                        <h1>Spot the Mistake</h1>
                        <p>A student has answered each question. Can you tell if they got it right or wrong?</p>
                    </div>

                    <div className="stm-subject-grid">
                        {SUBJECT_OPTIONS.map((subj) => (
                            <button
                                key={subj.id}
                                className="stm-subject-card"
                                onClick={() => startGame(subj)}
                            >
                                <span className="stm-subj-icon">{subj.icon}</span>
                                <span className="stm-subj-name">{subj.name}</span>
                                <span className="stm-subj-count">{subj.questions.length} questions</span>
                            </button>
                        ))}
                    </div>

                    <div className="stm-rules">
                        <h3>How to Play</h3>
                        <ul>
                            <li>📋 You'll see a question and a student's answer.</li>
                            <li>✅ If the student is right, tap <strong>"Correct!"</strong></li>
                            <li>❌ If the student is wrong, tap <strong>"Wrong!"</strong> then select the right answer.</li>
                            <li>🧠 Some answers look right but aren't — think carefully!</li>
                            <li>⏱️ {QUESTIONS_PER_GAME} questions per game. Be fast and accurate!</li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }

    /* ================================
       FINISHED SCREEN
    ================================ */
    if (phase === 'finished') {
        const grade = getGrade();
        const mistakesCaught = results.filter(r => !r.isCorrect && r.gotItRight).length;
        const falseAlarms = results.filter(r => r.isCorrect && !r.gotItRight).length;
        const missed = results.filter(r => !r.gotItRight).length;

        return (
            <div className="stm-page stm-page-light">
                <div className="stm-finish-wrap">
                    <div className="stm-finish-card">
                        <span className="stm-finish-emoji">{grade.emoji}</span>
                        <h2>{grade.label}</h2>
                        <p className="stm-finish-sub">{selectedSubject?.name} — {QUESTIONS_PER_GAME} Questions</p>

                        <div className="stm-finish-stats">
                            <div className="stm-fstat">
                                <span className="stm-fstat-val stm-fstat-big">{score}/{totalAnswered}</span>
                                <span className="stm-fstat-label">Score</span>
                            </div>
                            <div className="stm-fstat">
                                <span className="stm-fstat-val">{getAccuracy()}%</span>
                                <span className="stm-fstat-label">Accuracy</span>
                            </div>
                            <div className="stm-fstat">
                                <span className="stm-fstat-val">{formatTime(elapsed)}</span>
                                <span className="stm-fstat-label">Time</span>
                            </div>
                            <div className="stm-fstat">
                                <span className="stm-fstat-val">🔥 {bestStreak}</span>
                                <span className="stm-fstat-label">Best Streak</span>
                            </div>
                        </div>

                        <div className="stm-finish-breakdown">
                            <div className="stm-fb-item stm-fb-good">
                                <span className="stm-fb-icon">🎯</span>
                                <span className="stm-fb-count">{mistakesCaught}</span>
                                <span className="stm-fb-label">Mistakes caught</span>
                            </div>
                            <div className="stm-fb-item stm-fb-ok">
                                <span className="stm-fb-icon">✅</span>
                                <span className="stm-fb-count">{results.filter(r => r.isCorrect && r.gotItRight).length}</span>
                                <span className="stm-fb-label">Correct confirmed</span>
                            </div>
                            <div className="stm-fb-item stm-fb-bad">
                                <span className="stm-fb-icon">❌</span>
                                <span className="stm-fb-count">{missed}</span>
                                <span className="stm-fb-label">Mistakes missed</span>
                            </div>
                        </div>

                        {/* Review wrong answers */}
                        {results.some(r => !r.gotItRight) && (
                            <div className="stm-review-section">
                                <h4 className="stm-review-title">Review Your Mistakes</h4>
                                {results.filter(r => !r.gotItRight).map((r, i) => (
                                    <div key={i} className="stm-review-item">
                                        <p className="stm-review-q">{r.question}</p>
                                        <p className="stm-review-student">
                                            Student said: <strong>{r.studentAnswer}</strong>
                                            {r.isCorrect ? ' (was actually correct)' : ' (was wrong)'}
                                        </p>
                                        <p className="stm-review-correct">
                                            ✅ Correct answer: <strong>{r.correctAnswer}</strong>
                                        </p>
                                        {r.explanation && (
                                            <p className="stm-review-explain">💡 {r.explanation}</p>
                                        )}
                                    </div>
                                ))}
                            </div>
                        )}

                        <div className="stm-finish-actions">
                            <button className="stm-btn-primary" onClick={() => startGame(selectedSubject)}>
                                🔄 Play Again
                            </button>
                            <button className="stm-btn-secondary" onClick={() => setPhase('select')}>
                                📚 Change Subject
                            </button>
                            <Link to="/games" className="stm-btn-secondary">← All Games</Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    /* ================================
       GAMEPLAY SCREEN
    ================================ */
    if (!currentItem) return null;

    return (
        <div className="stm-page stm-page-light">
            {/* Header */}
            <div className="stm-header">
                <Link to="/games" className="stm-home-btn">🏠 HOME</Link>
                <div className="stm-header-center">
                    <h1 className="stm-header-title">SPOT THE MISTAKE</h1>
                    <p className="stm-header-sub">{selectedSubject?.name}</p>
                </div>
                <div className="stm-header-stats">
                    <div className="stm-hs-item">
                        <span className="stm-hs-val">{score}/{totalAnswered}</span>
                        <span className="stm-hs-label">Score</span>
                    </div>
                    <div className="stm-hs-item stm-hs-timer">
                        <span className="stm-hs-val">{formatTime(elapsed)}</span>
                        <span className="stm-hs-label">Time</span>
                    </div>
                </div>
            </div>

            {/* Progress bar */}
            <div className="stm-progress-bar">
                <div className="stm-progress-info">
                    <span className="stm-progress-label">Question {currentIndex + 1} of {items.length}</span>
                    {streak >= 2 && <span className="stm-streak-badge">🔥 {streak} streak!</span>}
                </div>
                <div className="stm-progress-track">
                    <div
                        className="stm-progress-fill"
                        style={{ width: `${((currentIndex + (step === 'feedback' ? 1 : 0)) / items.length) * 100}%` }}
                    />
                </div>
            </div>

            {/* Question card */}
            <div className="stm-game-area">
                <div className="stm-question-card">
                    {/* Topic badge */}
                    <span className="stm-topic-badge">{currentItem.topic}</span>

                    {/* Question */}
                    <p className="stm-question-text">{currentItem.question}</p>

                    {/* Student's answer card */}
                    <div className={`stm-student-card ${step === 'feedback'
                            ? (currentItem.isCorrect ? 'stm-student-right' : 'stm-student-wrong')
                            : ''
                        }`}>
                        <div className="stm-student-label">
                            <span className="stm-student-avatar">👤</span>
                            <span>A student answered:</span>
                        </div>
                        <p className="stm-student-answer">"{currentItem.studentAnswer}"</p>

                        {/* Show verdict badge in feedback */}
                        {step === 'feedback' && (
                            <span className={`stm-verdict-badge ${currentItem.isCorrect ? 'stm-verdict-right' : 'stm-verdict-wrong'}`}>
                                {currentItem.isCorrect ? '✓ This was correct' : '✗ This was wrong'}
                            </span>
                        )}
                    </div>

                    {/* STEP: Judge — "Correct" or "Wrong" buttons */}
                    {step === 'judge' && (
                        <div className="stm-judge-section">
                            <p className="stm-judge-prompt">Is this student's answer correct?</p>
                            <div className="stm-judge-buttons">
                                <button className="stm-btn-correct" onClick={() => handleJudgment(true)}>
                                    <span className="stm-btn-icon">✓</span>
                                    <span>Correct!</span>
                                </button>
                                <button className="stm-btn-wrong" onClick={() => handleJudgment(false)}>
                                    <span className="stm-btn-icon">✗</span>
                                    <span>Wrong!</span>
                                </button>
                            </div>
                        </div>
                    )}

                    {/* STEP: Correct — pick the right answer */}
                    {step === 'correct' && (
                        <div className="stm-correct-section">
                            <p className="stm-correct-prompt">Good catch! 🎯 Now select the correct answer:</p>
                            <div className="stm-correct-options">
                                {currentItem.correctionOptions.map((opt, i) => (
                                    <button
                                        key={i}
                                        className="stm-correct-opt"
                                        onClick={() => handleCorrection(opt)}
                                    >
                                        <span className="stm-opt-letter">{'ABC'[i]}</span>
                                        <span className="stm-opt-text">{opt.text}</span>
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* STEP: Feedback */}
                    {step === 'feedback' && (
                        <div className="stm-feedback-section">
                            {/* Result message */}
                            <div className={`stm-feedback-msg ${judgedCorrectly && (selectedCorrection === null || selectedCorrection === currentItem.correctAnswer) ? 'stm-fb-success' : 'stm-fb-fail'}`}>
                                {(() => {
                                    const lastResult = results[results.length - 1];
                                    if (!lastResult) return null;

                                    if (lastResult.gotItRight) {
                                        if (currentItem.isCorrect) {
                                            return <span>✅ Correct! The student had the right answer.</span>;
                                        } else {
                                            return <span>🎯 Great catch! You found the mistake and knew the right answer!</span>;
                                        }
                                    } else {
                                        if (currentItem.isCorrect) {
                                            return <span>❌ Oops! The student actually had the right answer: <strong>{currentItem.correctAnswer}</strong></span>;
                                        } else if (selectedCorrection && selectedCorrection !== currentItem.correctAnswer) {
                                            return <span>❌ Good catch on the mistake, but the correct answer is: <strong>{currentItem.correctAnswer}</strong></span>;
                                        } else {
                                            return <span>❌ The student was wrong! The correct answer is: <strong>{currentItem.correctAnswer}</strong></span>;
                                        }
                                    }
                                })()}
                            </div>

                            {/* Explanation */}
                            {currentItem.explanation && (
                                <div className="stm-explanation">
                                    <button
                                        className="stm-explain-toggle"
                                        onClick={() => setShowExplanation(!showExplanation)}
                                    >
                                        💡 {showExplanation ? 'Hide' : 'Show'} Explanation
                                    </button>
                                    {showExplanation && (
                                        <p className="stm-explain-text">{currentItem.explanation}</p>
                                    )}
                                </div>
                            )}

                            {/* Next button */}
                            <button className="stm-btn-next" onClick={nextQuestion}>
                                {currentIndex + 1 >= items.length ? '🏁 See Results' : 'Next Question →'}
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
