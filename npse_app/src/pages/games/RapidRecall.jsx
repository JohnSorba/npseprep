import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { subjects } from '../../data/subjects';

const RapidRecall = () => {
    const [gameState, setGameState] = useState('setup'); // setup, playing, results
    const [selectedSubject, setSelectedSubject] = useState(null);
    const [questions, setQuestions] = useState([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [streak, setStreak] = useState(0);
    const [maxStreak, setMaxStreak] = useState(0);
    const [timeLeft, setTimeLeft] = useState(60);
    const [difficulty, setDifficulty] = useState('standard');
    const [timerMode, setTimerMode] = useState(true);
    const [feedback, setFeedback] = useState(null); // { correct: boolean, message: string }
    const [answers, setAnswers] = useState([]);
    const [startTime, setStartTime] = useState(null);

    // Filter subjects that have questions
    const availableSubjects = subjects.filter(s => s.quizQuestions && s.quizQuestions.length > 0);

    const startGaming = () => {
        if (!selectedSubject) return;

        // Shuffle and pick 10 questions
        const shuffled = [...selectedSubject.quizQuestions].sort(() => 0.5 - Math.random());
        const selected = shuffled.slice(0, 10);

        setQuestions(selected);
        setCurrentQuestionIndex(0);
        setScore(0);
        setStreak(0);
        setMaxStreak(0);
        setTimeLeft(timerMode ? 60 : 0);
        setAnswers([]);
        setGameState('playing');
        setStartTime(Date.now());
    };

    const handleAnswer = (optionIndex) => {
        if (feedback) return;

        const question = questions[currentQuestionIndex];
        const isCorrect = optionIndex === question.correctAnswer;

        const newFeedback = {
            correct: isCorrect,
            message: isCorrect ? 'Great job!' : 'Not quite.',
            correctOption: question.options[question.correctAnswer]
        };

        setFeedback(newFeedback);
        setAnswers([...answers, {
            questionId: question.id,
            correct: isCorrect,
            userAnswer: optionIndex,
            time: Date.now()
        }]);

        if (isCorrect) {
            setScore(prev => prev + 10 + (timerMode ? Math.floor(timeLeft / 10) : 0));
            setStreak(prev => {
                const newStreak = prev + 1;
                if (newStreak > maxStreak) setMaxStreak(newStreak);
                return newStreak;
            });
        } else {
            setStreak(0);
        }

        // Auto move to next after 1.5 seconds
        setTimeout(() => {
            setFeedback(null);
            if (currentQuestionIndex < questions.length - 1) {
                setCurrentQuestionIndex(prev => prev + 1);
            } else {
                setGameState('results');
            }
        }, 1500);
    };

    useEffect(() => {
        let timer;
        if (gameState === 'playing' && timerMode && timeLeft > 0 && !feedback) {
            timer = setInterval(() => {
                setTimeLeft(prev => {
                    if (prev <= 1) {
                        setGameState('results');
                        return 0;
                    }
                    return prev - 1;
                });
            }, 1000);
        }
        return () => clearInterval(timer);
    }, [gameState, timerMode, timeLeft, feedback]);

    if (gameState === 'setup') {
        return (
            <div className="game-container">
                <section className="page-header">
                    <div className="container">
                        <Link to="/games" className="back-link">← Back to Games</Link>
                        <h1>Rapid Recall</h1>
                        <p>Answer as many questions as you can in 60 seconds!</p>
                    </div>
                </section>

                <div className="container section">
                    <div className="setup-card">
                        <h3>Game Settings</h3>

                        <div className="setting-group">
                            <label>1. Select Subject</label>
                            <div className="subject-pills">
                                {availableSubjects.map(s => (
                                    <button
                                        key={s.id}
                                        className={`pill ${selectedSubject?.id === s.id ? 'active' : ''}`}
                                        onClick={() => setSelectedSubject(s)}
                                    >
                                        <span className="pill-icon">{s.icon}</span>
                                        {s.name}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="setting-group">
                            <label>2. Timer Mode</label>
                            <div className="toggle-group">
                                <button
                                    className={`toggle-btn ${timerMode ? 'active' : ''}`}
                                    onClick={() => setTimerMode(true)}
                                >
                                    ⏱️ Timed (60s)
                                </button>
                                <button
                                    className={`toggle-btn ${!timerMode ? 'active' : ''}`}
                                    onClick={() => setTimerMode(false)}
                                >
                                    🧘 Relaxed
                                </button>
                            </div>
                        </div>

                        <button
                            className="btn btn-primary btn-lg btn-block"
                            disabled={!selectedSubject}
                            onClick={startGaming}
                            style={{ marginTop: 'var(--space-6)' }}
                        >
                            Start Game! 🚀
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    if (gameState === 'playing') {
        const question = questions[currentQuestionIndex];
        const progress = ((currentQuestionIndex) / questions.length) * 100;

        return (
            <div className="game-screen">
                <div className="game-header-bar">
                    <div className="container header-bar-content">
                        <div className="game-stat">
                            <span className="stat-label">Progress</span>
                            <span className="stat-value">{currentQuestionIndex + 1}/{questions.length}</span>
                        </div>
                        {timerMode && (
                            <div className={`game-timer ${timeLeft < 10 ? 'urgent' : ''}`}>
                                <span className="timer-icon">⏱️</span>
                                <span className="timer-value">{timeLeft}s</span>
                            </div>
                        )}
                        <div className="game-stat">
                            <span className="stat-label">Score</span>
                            <span className="stat-value">{score}</span>
                        </div>
                    </div>
                    <div className="progress-bar-container">
                        <div className="progress-bar-fill" style={{ width: `${progress}%` }}></div>
                    </div>
                </div>

                <div className="container gameplay-content">
                    <div className="question-box">
                        <div className="streak-badge" style={{ opacity: streak > 1 ? 1 : 0 }}>
                            🔥 {streak} Streak!
                        </div>
                        <h2 className="game-question-text">{question.question}</h2>

                        <div className="options-grid">
                            {question.options.map((option, idx) => {
                                let btnClass = "game-option-btn";
                                if (feedback) {
                                    if (idx === question.correctAnswer) btnClass += " correct";
                                    else if (idx === answers[answers.length - 1]?.userAnswer && !answers[answers.length - 1]?.correct) btnClass += " incorrect";
                                    else btnClass += " disabled";
                                }

                                return (
                                    <button
                                        key={idx}
                                        className={btnClass}
                                        onClick={() => handleAnswer(idx)}
                                        disabled={!!feedback}
                                    >
                                        <span className="option-index">{String.fromCharCode(65 + idx)}</span>
                                        {option}
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    {feedback && (
                        <div className={`feedback-toast ${feedback.correct ? 'success' : 'error'}`}>
                            {feedback.correct ? '✨ Correct!' : `❌ Correct answer: ${feedback.correctOption}`}
                        </div>
                    )}
                </div>
            </div>
        );
    }

    if (gameState === 'results') {
        const accuracy = Math.round((answers.filter(a => a.correct).length / questions.length) * 100) || 0;

        return (
            <div className="results-screen">
                <section className="page-header">
                    <div className="container">
                        <h1>Game Over!</h1>
                        <p>Great effort on your {selectedSubject.name} recall drill.</p>
                    </div>
                </section>

                <div className="container section">
                    <div className="results-card">
                        <div className="results-grid">
                            <div className="result-item">
                                <span className="result-label">Score</span>
                                <span className="result-value">{score}</span>
                            </div>
                            <div className="result-item">
                                <span className="result-label">Accuracy</span>
                                <span className="result-value">{accuracy}%</span>
                            </div>
                            <div className="result-item">
                                <span className="result-label">Max Streak</span>
                                <span className="result-value">{maxStreak}</span>
                            </div>
                            <div className="result-item">
                                <span className="result-label">Time Remaining</span>
                                <span className="result-value">{timeLeft}s</span>
                            </div>
                        </div>

                        <div className="results-actions">
                            <button className="btn btn-primary btn-lg" onClick={startGaming}>
                                🔄 Play Again
                            </button>
                            <button className="btn btn-outline btn-lg" onClick={() => setGameState('setup')}>
                                📚 Change Topic
                            </button>
                        </div>

                        <Link to="/games" className="back-link-bottom">Return to Games Menu</Link>
                    </div>

                    <div className="missed-concepts">
                        <h3>Review Missed Questions</h3>
                        <div className="review-list">
                            {questions.map((q, idx) => {
                                const ans = answers.find(a => a.questionId === q.id);
                                if (ans && ans.correct) return null;
                                return (
                                    <div key={idx} className="review-item">
                                        <p className="review-q"><strong>Q:</strong> {q.question}</p>
                                        <p className="review-a"><strong>Correct Answer:</strong> {q.options[q.correctAnswer]}</p>
                                        <p className="review-e">{q.explanation}</p>
                                    </div>
                                );
                            })}
                            {answers.every(a => a.correct) && questions.length > 0 && (
                                <p className="perfect-msg">Perfect! You didn't miss any questions. 🏆</p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return null;
};

export default RapidRecall;
