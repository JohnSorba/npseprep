import { useState, useEffect, useCallback, useRef } from 'react';
import { Link } from 'react-router-dom';
import mathQuizQuestions from '../data/mathQuizQuestions';
import generalPaperQuizQuestions from '../data/generalPaperQuizQuestions';
import englishLanguageQuizQuestions from '../data/englishlanguageQuizQuestions';
import verbalQuizQuestions from '../data/verbalQuizQuestions';
import quantitativeQuizQuestions from '../data/quantitativeQuizQuestions';
import '../styles/Quiz.css';

// ─── Config ───
const STORAGE_KEY = 'npse_quiz_session';
const MIN_Q = 20;
const MAX_Q = 40;
const SECS_PER_Q = 60; // seconds per question when timed

// Available subjects — extend this array as new question banks are added
const QUIZ_SUBJECTS = [
    { id: 'mathematics', label: '🔢 Mathematics', questions: mathQuizQuestions },
    { id: 'english', label: '📖 English', questions: englishLanguageQuizQuestions },
    { id: 'general-paper', label: '🌍 General Paper', questions: generalPaperQuizQuestions },
    { id: 'quantitative', label: '📐 Quantitative', questions: quantitativeQuizQuestions },
    { id: 'verbal', label: '🗣️ Verbal', questions: verbalQuizQuestions },
];

// ─── Helpers ───
function shuffleArray(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

/** Pick `count` questions spread evenly across all units */
function pickQuestions(pool, count) {
    const byUnit = {};
    pool.forEach((q) => {
        if (!byUnit[q.unit]) byUnit[q.unit] = [];
        byUnit[q.unit].push(q);
    });
    const units = Object.keys(byUnit);
    // shuffle within each unit
    units.forEach((u) => (byUnit[u] = shuffleArray(byUnit[u])));

    const picked = [];
    let round = 0;
    while (picked.length < count) {
        let added = false;
        for (const u of units) {
            if (picked.length >= count) break;
            if (round < byUnit[u].length) {
                picked.push(byUnit[u][round]);
                added = true;
            }
        }
        if (!added) break;
        round++;
    }
    return shuffleArray(picked);
}

function formatTime(secs) {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m}:${s.toString().padStart(2, '0')}`;
}

// ─── Persist / Restore session ───
function saveSession(data) {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch { /* quota */ }
}
function loadSession() {
    try {
        const raw = localStorage.getItem(STORAGE_KEY);
        return raw ? JSON.parse(raw) : null;
    } catch { return null; }
}
function clearSession() {
    localStorage.removeItem(STORAGE_KEY);
}

// ─────────────────────────────────────────
//  COMPONENT
// ─────────────────────────────────────────
const Quiz = () => {
    // Phase: 'hub' | 'active' | 'report'
    const [phase, setPhase] = useState('hub');

    // Hub state
    const [subjectId, setSubjectId] = useState('mathematics');
    const [questionCount, setQuestionCount] = useState(30);

    // Active quiz state
    const [questions, setQuestions] = useState([]);
    const [currentIdx, setCurrentIdx] = useState(0);
    const [selectedOption, setSelectedOption] = useState(null);
    const [showFeedback, setShowFeedback] = useState(false);
    const [answers, setAnswers] = useState([]); // { qId, picked, correct, isRight }
    const [timeLeft, setTimeLeft] = useState(null); // null = untimed, number = seconds
    const [timed, setTimed] = useState(true);

    const timerRef = useRef(null);

    // ─── Restore session on mount ───
    useEffect(() => {
        const saved = loadSession();
        if (saved && saved.phase === 'active' && saved.questions?.length) {
            setQuestions(saved.questions);
            setCurrentIdx(saved.currentIdx ?? 0);
            setAnswers(saved.answers ?? []);
            setTimeLeft(saved.timeLeft ?? null);
            setTimed(saved.timed ?? false);
            setSubjectId(saved.subjectId ?? 'mathematics');
            setPhase('active');
        }
    }, []);

    // ─── Timer tick ───
    useEffect(() => {
        if (phase !== 'active' || timeLeft === null || timeLeft <= 0) return;
        timerRef.current = setInterval(() => {
            setTimeLeft((t) => {
                if (t <= 1) {
                    clearInterval(timerRef.current);
                    return 0;
                }
                return t - 1;
            });
        }, 1000);
        return () => clearInterval(timerRef.current);
    }, [phase, timeLeft === null]); // eslint-disable-line react-hooks/exhaustive-deps

    // Auto-submit when timer hits 0
    useEffect(() => {
        if (timeLeft === 0 && phase === 'active') {
            finishQuiz();
        }
    }, [timeLeft]); // eslint-disable-line react-hooks/exhaustive-deps

    // Persist on every meaningful change
    useEffect(() => {
        if (phase === 'active' && questions.length > 0) {
            saveSession({ phase, questions, currentIdx, answers, timeLeft, timed, subjectId });
        }
    }, [phase, currentIdx, answers, timeLeft]); // eslint-disable-line react-hooks/exhaustive-deps

    // ─── Actions ───
    const startQuiz = useCallback(() => {
        const subject = QUIZ_SUBJECTS.find((s) => s.id === subjectId);
        if (!subject || !subject.questions) return;
        const picked = pickQuestions(subject.questions, questionCount);
        const totalTime = timed ? picked.length * SECS_PER_Q : null;
        setQuestions(picked);
        setCurrentIdx(0);
        setSelectedOption(null);
        setShowFeedback(false);
        setAnswers([]);
        setTimeLeft(totalTime);
        setPhase('active');
    }, [subjectId, questionCount, timed]);

    const handleSelect = (optLabel) => {
        if (showFeedback) return;
        setSelectedOption(optLabel);
    };

    const checkAnswer = () => {
        if (selectedOption === null) return;
        const q = questions[currentIdx];
        const isRight = selectedOption === q.correctOption;
        setShowFeedback(true);
        setAnswers((prev) => [
            ...prev,
            { qId: q.id, picked: selectedOption, correct: q.correctOption, isRight },
        ]);
    };

    const nextQuestion = () => {
        if (currentIdx < questions.length - 1) {
            setCurrentIdx((i) => i + 1);
            setSelectedOption(null);
            setShowFeedback(false);
        } else {
            finishQuiz();
        }
    };

    const finishQuiz = useCallback(() => {
        clearInterval(timerRef.current);
        clearSession();
        setPhase('report');
    }, []);

    const quitQuiz = () => {
        clearInterval(timerRef.current);
        clearSession();
        setPhase('hub');
    };

    const restartQuiz = () => {
        setPhase('hub');
    };

    // ─────────────────────────────────────────
    //  RENDER: HUB
    // ─────────────────────────────────────────
    if (phase === 'hub') {
        const activeSubject = QUIZ_SUBJECTS.find((s) => s.id === subjectId);
        const hasQuestions = activeSubject?.questions?.length > 0;
        const timerMinutes = Math.ceil((questionCount * SECS_PER_Q) / 60);

        return (
            <div className="quiz-hub">
                <div className="quiz-hub__inner">
                    {/* Header */}
                    <div className="quiz-hub__header">
                        <span className="quiz-hub__emoji">📝</span>
                        <h1 className="quiz-hub__title">Quiz Playground</h1>
                        <p className="quiz-hub__sub">Set up your practice quiz and test your knowledge</p>
                    </div>

                    {/* Setup Card */}
                    <div className="quiz-setup-card">
                        {/* Subject */}
                        <div className="quiz-setup-card__section">
                            <label className="quiz-setup-card__label">Subject</label>
                            <div className="quiz-subject-chips">
                                {QUIZ_SUBJECTS.map((s) => (
                                    <button
                                        key={s.id}
                                        className={`quiz-subject-chip ${subjectId === s.id ? 'quiz-subject-chip--active' : ''} ${!s.questions ? 'quiz-subject-chip--disabled' : ''}`}
                                        onClick={() => s.questions && setSubjectId(s.id)}
                                        disabled={!s.questions}
                                    >
                                        {s.label}
                                        {!s.questions && <span style={{ fontSize: '0.65rem' }}>soon</span>}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Question count */}
                        <div className="quiz-setup-card__section">
                            <label className="quiz-setup-card__label">
                                Number of Questions <span>— covers all topics</span>
                            </label>
                            <div className="quiz-slider-wrap">
                                <div className="quiz-slider-row">
                                    <input
                                        type="range"
                                        className="quiz-slider"
                                        min={MIN_Q}
                                        max={MAX_Q}
                                        step={5}
                                        value={questionCount}
                                        onChange={(e) => setQuestionCount(Number(e.target.value))}
                                    />
                                    <span className="quiz-slider-value">{questionCount}</span>
                                </div>
                                <div className="quiz-slider-labels">
                                    <span>{MIN_Q} min</span>
                                    <span>{MAX_Q} max</span>
                                </div>
                            </div>
                        </div>

                        {/* Timer toggle */}
                        <div className="quiz-setup-card__section">
                            <label className="quiz-setup-card__label">Timer</label>
                            <div style={{ display: 'flex', gap: 'var(--space-2)' }}>
                                <button
                                    className={`quiz-subject-chip ${timed ? 'quiz-subject-chip--active' : ''}`}
                                    onClick={() => setTimed(true)}
                                >
                                    ⏱️ Timed
                                </button>
                                <button
                                    className={`quiz-subject-chip ${!timed ? 'quiz-subject-chip--active' : ''}`}
                                    onClick={() => setTimed(false)}
                                >
                                    🧘 Untimed
                                </button>
                            </div>
                            {timed && (
                                <div className="quiz-timer-info" style={{ marginTop: 'var(--space-3)' }}>
                                    <span className="quiz-timer-info__icon">⏱️</span>
                                    <span>You'll have <strong>{timerMinutes} minutes</strong> for {questionCount} questions ({SECS_PER_Q}s each)</span>
                                </div>
                            )}
                        </div>

                        {/* Start */}
                        <button className="quiz-start-btn" disabled={!hasQuestions} onClick={startQuiz}>
                            🚀 Start Quiz
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    // ─────────────────────────────────────────
    //  RENDER: ACTIVE QUIZ
    // ─────────────────────────────────────────
    if (phase === 'active') {
        const q = questions[currentIdx];
        if (!q) return null;
        const progress = ((currentIdx + (showFeedback ? 1 : 0)) / questions.length) * 100;
        const isCorrect = answers[answers.length - 1]?.isRight;
        const showTimerWarn = timeLeft !== null && timeLeft < 60;

        return (
            <div className="quiz-active">
                {/* Top bar */}
                <div className="quiz-topbar">
                    <div className="quiz-topbar__inner">
                        <div className="quiz-topbar__progress">
                            <div className="quiz-progress-bar">
                                <div className="quiz-progress-fill" style={{ width: `${progress}%` }} />
                            </div>
                            <span className="quiz-topbar__count">{currentIdx + 1}/{questions.length}</span>
                        </div>
                        {timeLeft !== null && (
                            <span className={`quiz-topbar__timer ${showTimerWarn ? 'quiz-topbar__timer--warn' : ''}`}>
                                ⏱ {formatTime(timeLeft)}
                            </span>
                        )}
                        <button className="quiz-topbar__quit" onClick={quitQuiz}>Quit</button>
                    </div>
                </div>

                {/* Question body */}
                <div className="quiz-body">
                    <div className="quiz-body__inner">
                        {/* Meta */}
                        <div className="quiz-meta">
                            <span className="quiz-meta__unit">{q.topic}</span>
                            <span>•</span>
                            <span>{q.difficulty}</span>
                        </div>

                        {/* Question text */}
                        <h2 className="quiz-question-text">{q.question}</h2>

                        {/* Options */}
                        <div className="quiz-options">
                            {q.options.map((opt) => {
                                let cls = 'quiz-option';
                                if (showFeedback) {
                                    if (opt.label === q.correctOption) cls += ' quiz-option--correct';
                                    else if (opt.label === selectedOption && opt.label !== q.correctOption) cls += ' quiz-option--wrong';
                                } else if (opt.label === selectedOption) {
                                    cls += ' quiz-option--selected';
                                }

                                return (
                                    <button
                                        key={opt.label}
                                        className={cls}
                                        onClick={() => handleSelect(opt.label)}
                                        disabled={showFeedback}
                                    >
                                        <span className="quiz-option__letter">{opt.label}</span>
                                        <span className="quiz-option__text">{opt.text}</span>
                                    </button>
                                );
                            })}
                        </div>

                        {/* Feedback */}
                        {showFeedback && (
                            <div className={`quiz-feedback ${isCorrect ? 'quiz-feedback--correct' : 'quiz-feedback--wrong'}`}>
                                <span className="quiz-feedback__icon">{isCorrect ? '✅' : '❌'}</span>
                                <div>
                                    <div className="quiz-feedback__title">{isCorrect ? 'Correct!' : 'Not quite right'}</div>
                                    <p className="quiz-feedback__text">{q.explanation}</p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {/* Bottom action bar */}
                <div className="quiz-actions">
                    <div className="quiz-actions__inner">
                        {!showFeedback ? (
                            <button
                                className="quiz-action-btn quiz-action-btn--primary"
                                disabled={selectedOption === null}
                                onClick={checkAnswer}
                            >
                                Check Answer
                            </button>
                        ) : (
                            <button className="quiz-action-btn quiz-action-btn--primary" onClick={nextQuestion}>
                                {currentIdx < questions.length - 1 ? 'Next Question →' : 'See Results 🎉'}
                            </button>
                        )}
                    </div>
                </div>
            </div>
        );
    }

    // ─────────────────────────────────────────
    //  RENDER: REPORT
    // ─────────────────────────────────────────
    const totalQ = questions.length;
    const correctCount = answers.filter((a) => a.isRight).length;
    const wrongCount = totalQ - correctCount;
    const pct = totalQ > 0 ? Math.round((correctCount / totalQ) * 100) : 0;

    const getVerdict = () => {
        if (pct === 100) return { emoji: '🏆', msg: 'Perfect Score!', sub: "You're an NPSE champion!" };
        if (pct >= 80) return { emoji: '🌟', msg: 'Excellent!', sub: "You're well prepared!" };
        if (pct >= 60) return { emoji: '👍', msg: 'Good Job!', sub: 'Keep practising to improve!' };
        if (pct >= 40) return { emoji: '📚', msg: 'Keep Going!', sub: 'More practice will help!' };
        return { emoji: '💪', msg: "Don't Give Up!", sub: 'Review the topics and try again!' };
    };
    const verdict = getVerdict();

    return (
        <div className="quiz-report">
            <div className="quiz-report__inner">
                {/* Score hero */}
                <div className="quiz-score-hero">
                    <div style={{ fontSize: '2.5rem', marginBottom: 'var(--space-2)' }}>{verdict.emoji}</div>
                    <div className="quiz-score-ring">
                        <span className="quiz-score-ring__num">{correctCount}</span>
                        <span className="quiz-score-ring__den">of {totalQ}</span>
                    </div>
                    <h2>{verdict.msg}</h2>
                    <p>{verdict.sub}</p>
                    <p style={{ fontWeight: 600, color: 'var(--color-ink)', fontSize: 'var(--text-lg)' }}>{pct}%</p>
                </div>

                {/* Stats row */}
                <div className="quiz-stats-row">
                    <div className="quiz-stat-card">
                        <div className="quiz-stat-card__icon">✅</div>
                        <div className="quiz-stat-card__value">{correctCount}</div>
                        <div className="quiz-stat-card__label">Correct</div>
                    </div>
                    <div className="quiz-stat-card">
                        <div className="quiz-stat-card__icon">❌</div>
                        <div className="quiz-stat-card__value">{wrongCount}</div>
                        <div className="quiz-stat-card__label">Wrong</div>
                    </div>
                    <div className="quiz-stat-card">
                        <div className="quiz-stat-card__icon">📊</div>
                        <div className="quiz-stat-card__value">{pct}%</div>
                        <div className="quiz-stat-card__label">Score</div>
                    </div>
                </div>

                {/* Review all questions */}
                <div className="quiz-review">
                    <div className="quiz-review__title">Question Review</div>
                    {questions.map((q, i) => {
                        const ans = answers[i];
                        const answered = !!ans;
                        const icon = !answered ? '⬜' : ans.isRight ? '✅' : '❌';
                        const pickedOpt = answered ? q.options.find((o) => o.label === ans.picked) : null;
                        const correctOpt = q.options.find((o) => o.label === q.correctOption);

                        return (
                            <div className="quiz-review-item" key={q.id}>
                                <span className="quiz-review-item__icon">{icon}</span>
                                <div className="quiz-review-item__body">
                                    <div className="quiz-review-item__q">{i + 1}. {q.question}</div>
                                    <div className="quiz-review-item__answer">
                                        {answered ? (
                                            ans.isRight ? (
                                                <>Your answer: <strong>{ans.picked}. {pickedOpt?.text}</strong></>
                                            ) : (
                                                <>You chose: {ans.picked}. {pickedOpt?.text} — Correct: <strong>{q.correctOption}. {correctOpt?.text}</strong></>
                                            )
                                        ) : (
                                            <span>Not answered</span>
                                        )}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Actions */}
                <div className="quiz-report-actions">
                    <button className="quiz-report-btn quiz-report-btn--primary" onClick={restartQuiz}>
                        🔄 Take Another Quiz
                    </button>
                    <Link to="/notes/mathematics" className="quiz-report-btn quiz-report-btn--secondary">
                        📖 Review Notes
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Quiz;
