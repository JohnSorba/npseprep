import React, { useState, useRef, useEffect } from 'react';
import '../styles/AngleAnimation.css';

// Icon components using simple SVG
const RotateCwIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 2v6h-6"></path>
        <path d="M21 13a9 9 0 1 1-3-7.7L21 8"></path>
    </svg>
);

const InfoIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <line x1="12" y1="16" x2="12" y2="12"></line>
        <line x1="12" y1="8" x2="12.01" y2="8"></line>
    </svg>
);

const CheckIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
        <polyline points="22 4 12 14.01 9 11.01"></polyline>
    </svg>
);

const XIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <line x1="15" y1="9" x2="9" y2="15"></line>
        <line x1="9" y1="9" x2="15" y2="15"></line>
    </svg>
);

const TrophyIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path>
        <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path>
        <path d="M4 22h16"></path>
        <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path>
        <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path>
        <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path>
    </svg>
);

const TargetIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <circle cx="12" cy="12" r="6"></circle>
        <circle cx="12" cy="12" r="2"></circle>
    </svg>
);

const LightbulbIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"></path>
        <path d="M9 18h6"></path>
        <path d="M10 22h4"></path>
    </svg>
);

const SparklesIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path>
        <path d="M5 3v4"></path>
        <path d="M19 17v4"></path>
        <path d="M3 5h4"></path>
        <path d="M17 19h4"></path>
    </svg>
);

const ChevronRightIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="9 18 15 12 9 6"></polyline>
    </svg>
);

export default function AngleExplorer() {
    const [angle, setAngle] = useState(45);
    const [isDragging, setIsDragging] = useState(false);
    const [showQuiz, setShowQuiz] = useState(false);
    const [currentQuiz, setCurrentQuiz] = useState(null);
    const [quizFeedback, setQuizFeedback] = useState(null);
    const [score, setScore] = useState(0);
    const [streak, setStreak] = useState(0);
    const [showHint, setShowHint] = useState(false);
    const [animationKey, setAnimationKey] = useState(0);
    const svgRef = useRef(null);

    const CENTER = { x: 250, y: 250 };
    const RADIUS = 180;

    const normalizedAngle = ((angle % 360) + 360) % 360;

    const getHandlePosition = (deg) => {
        const rad = (deg * Math.PI) / 180;
        return {
            x: CENTER.x + RADIUS * Math.cos(rad),
            y: CENTER.y + RADIUS * Math.sin(rad),
        };
    };

    const handlePos = getHandlePosition(normalizedAngle);

    const getAngleType = (deg) => {
        if (deg === 0 || deg === 360) return { label: 'Zero Angle', className: 'angle-zero' };
        if (deg > 0 && deg < 90) return { label: 'Acute Angle', className: 'angle-acute' };
        if (deg === 90) return { label: 'Right Angle', className: 'angle-right' };
        if (deg > 90 && deg < 180) return { label: 'Obtuse Angle', className: 'angle-obtuse' };
        if (deg === 180) return { label: 'Straight Angle', className: 'angle-straight' };
        return { label: 'Reflex Angle', className: 'angle-reflex' };
    };

    const getAngleColor = (deg) => {
        if (deg === 0 || deg === 360) return '#64748b';
        if (deg > 0 && deg < 90) return '#22c55e';
        if (deg === 90) return '#3b82f6';
        if (deg > 90 && deg < 180) return '#f97316';
        if (deg === 180) return '#8b5cf6';
        return '#ef4444';
    };

    const angleInfo = getAngleType(normalizedAngle);
    const angleColor = getAngleColor(normalizedAngle);

    // Quiz Functions
    const generateQuiz = () => {
        const types = ['acute', 'right', 'obtuse', 'straight'];
        const type = types[Math.floor(Math.random() * types.length)];

        let question;

        switch (type) {
            case 'acute':
                const acuteTarget = Math.floor(Math.random() * 80) + 10;
                question = {
                    type: 'create',
                    targetAngle: acuteTarget,
                    tolerance: 5,
                    question: `Create an acute angle of approximately ${acuteTarget}°`,
                    hint: 'Acute angles are less than 90° - smaller than a square corner!'
                };
                break;
            case 'right':
                question = {
                    type: 'create',
                    targetAngle: 90,
                    tolerance: 3,
                    question: 'Create a perfect right angle (90°)',
                    hint: 'A right angle looks like the corner of a square or the letter L'
                };
                break;
            case 'obtuse':
                const obtuseTarget = Math.floor(Math.random() * 80) + 100;
                question = {
                    type: 'create',
                    targetAngle: obtuseTarget,
                    tolerance: 5,
                    question: `Create an obtuse angle of approximately ${obtuseTarget}°`,
                    hint: 'Obtuse angles are greater than 90° but less than 180° - wider than a square corner'
                };
                break;
            case 'straight':
            default:
                question = {
                    type: 'create',
                    targetAngle: 180,
                    tolerance: 3,
                    question: 'Create a straight angle (180°)',
                    hint: 'A straight angle forms a straight line - like a ruler!'
                };
                break;
        }

        setCurrentQuiz(question);
        setQuizFeedback(null);
        setShowHint(false);
        setAngle(0);
    };

    const checkAnswer = () => {
        if (!currentQuiz || currentQuiz.type !== 'create') return;

        const diff = Math.abs(normalizedAngle - (currentQuiz.targetAngle || 0));
        const isCorrect = diff <= (currentQuiz.tolerance || 5);

        setQuizFeedback(isCorrect ? 'correct' : 'incorrect');

        if (isCorrect) {
            setScore(s => s + 10 + (streak * 2));
            setStreak(s => s + 1);
            setAnimationKey(k => k + 1);
        } else {
            setStreak(0);
        }
    };

    const handleStart = (e) => {
        e.preventDefault();
        setIsDragging(true);
    };

    const handleMove = (e) => {
        if (!isDragging || !svgRef.current) return;

        const svgRect = svgRef.current.getBoundingClientRect();
        const clientX = e.touches ? e.touches[0].clientX : e.clientX;
        const clientY = e.touches ? e.touches[0].clientY : e.clientY;

        const dx = clientX - (svgRect.left + svgRect.width / 2);
        const dy = clientY - (svgRect.top + svgRect.height / 2);

        let rad = Math.atan2(dy, dx);
        let deg = rad * (180 / Math.PI);

        setAngle(deg);
    };

    const handleEnd = () => {
        setIsDragging(false);
    };

    useEffect(() => {
        if (isDragging) {
            window.addEventListener('mousemove', handleMove);
            window.addEventListener('mouseup', handleEnd);
            window.addEventListener('touchmove', handleMove);
            window.addEventListener('touchend', handleEnd);
        }
        return () => {
            window.removeEventListener('mousemove', handleMove);
            window.removeEventListener('mouseup', handleEnd);
            window.removeEventListener('touchmove', handleMove);
            window.removeEventListener('touchend', handleEnd);
        };
    }, [isDragging]);

    const describeArc = (x, y, radius, startAngle, endAngle) => {
        const start = getHandlePosition(startAngle);
        const end = getHandlePosition(endAngle);
        const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";

        return [
            "M", x, y,
            "L", start.x, start.y,
            "A", radius, radius, 0, largeArcFlag, 1, end.x, end.y,
            "Z"
        ].join(" ");
    };

    // Calculate target position for quiz
    const targetPos = currentQuiz?.targetAngle ? getHandlePosition(currentQuiz.targetAngle) : null;

    return (
        <div className="angle-explorer">
            {/* Header */}
            <header className="angle-explorer-header">
                <div className="angle-explorer-badge">
                    <SparklesIcon />
                    <span>Prep 6 Geometry Lab</span>
                </div>
                <h2 className="angle-explorer-title">Interactive Angle Explorer</h2>
                <p className="angle-explorer-subtitle">
                    Drag the handle to discover angles, or challenge yourself with the quiz mode!
                </p>
            </header>

            {/* Score Bar */}
            {showQuiz && (
                <div className="angle-score-bar">
                    <div className="score-item">
                        <TrophyIcon />
                        <div>
                            <p className="score-label">Score</p>
                            <p className="score-value">{score}</p>
                        </div>
                    </div>
                    <div className="score-item">
                        <TargetIcon />
                        <div>
                            <p className="score-label">Streak</p>
                            <p className="score-value">{streak}</p>
                        </div>
                    </div>
                </div>
            )}

            <div className="angle-explorer-grid">
                {/* Main Visualizer Card */}
                <div className="angle-visualizer-card">
                    <div className="angle-visualizer-header">
                        <div className="angle-type-display">
                            <div className={`angle-indicator ${angleInfo.className}`}></div>
                            <span className={`angle-type-label ${angleInfo.className}`}>{angleInfo.label}</span>
                        </div>
                        <div className="angle-value-display">
                            {showQuiz && currentQuiz && (
                                <span className="target-badge">Target: {currentQuiz.targetAngle}°</span>
                            )}
                            <div className="current-angle">{Math.round(normalizedAngle)}°</div>
                        </div>
                    </div>

                    <div className="angle-canvas-container">
                        {/* Quiz Target Indicator */}
                        {showQuiz && targetPos && (
                            <div
                                className="quiz-target-indicator"
                                style={{
                                    left: `calc(50% + ${(targetPos.x - CENTER.x) * (100 / 500)}%)`,
                                    top: `calc(50% + ${(targetPos.y - CENTER.y) * (100 / 500)}%)`
                                }}
                            >
                                <div className="target-ring"></div>
                                <TargetIcon />
                            </div>
                        )}

                        {/* Success Animation */}
                        {quizFeedback === 'correct' && (
                            <div key={animationKey} className="success-animation">
                                <CheckIcon />
                            </div>
                        )}

                        <svg
                            ref={svgRef}
                            viewBox="0 0 500 500"
                            className="angle-svg"
                            onMouseDown={(e) => {
                                const svgRect = svgRef.current?.getBoundingClientRect();
                                if (!svgRect) return;
                                const clientX = e.clientX;
                                const clientY = e.clientY;
                                const dx = clientX - (svgRect.left + svgRect.width / 2);
                                const dy = clientY - (svgRect.top + svgRect.height / 2);
                                let rad = Math.atan2(dy, dx);
                                let deg = rad * (180 / Math.PI);
                                setAngle(deg);
                                setIsDragging(true);
                            }}
                        >
                            {/* Grid/Background Circles */}
                            <circle cx={CENTER.x} cy={CENTER.y} r={RADIUS} fill="white" stroke="#e2e8f0" strokeWidth="2" strokeDasharray="4 4" />
                            <circle cx={CENTER.x} cy={CENTER.y} r={RADIUS * 0.66} fill="none" stroke="#f1f5f9" strokeWidth="1" />
                            <circle cx={CENTER.x} cy={CENTER.y} r={RADIUS * 0.33} fill="none" stroke="#f1f5f9" strokeWidth="1" />

                            {/* Axis Lines */}
                            <line x1={CENTER.x - RADIUS - 20} y1={CENTER.y} x2={CENTER.x + RADIUS + 20} y2={CENTER.y} stroke="#cbd5e1" strokeWidth="1" />
                            <line x1={CENTER.x} y1={CENTER.y - RADIUS - 20} x2={CENTER.x} y2={CENTER.y + RADIUS + 20} stroke="#cbd5e1" strokeWidth="1" />

                            {/* Degree Markers */}
                            {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg) => {
                                const isMajor = deg % 90 === 0;
                                return (
                                    <g key={deg}>
                                        <line
                                            x1={CENTER.x + (RADIUS - 10) * Math.cos(deg * Math.PI / 180)}
                                            y1={CENTER.y + (RADIUS - 10) * Math.sin(deg * Math.PI / 180)}
                                            x2={CENTER.x + (RADIUS + (isMajor ? 10 : 5)) * Math.cos(deg * Math.PI / 180)}
                                            y2={CENTER.y + (RADIUS + (isMajor ? 10 : 5)) * Math.sin(deg * Math.PI / 180)}
                                            stroke={isMajor ? "#94a3b8" : "#cbd5e1"}
                                            strokeWidth={isMajor ? 2 : 1}
                                        />
                                        {isMajor && (
                                            <text
                                                x={CENTER.x + (RADIUS + 25) * Math.cos(deg * Math.PI / 180)}
                                                y={CENTER.y + (RADIUS + 25) * Math.sin(deg * Math.PI / 180)}
                                                textAnchor="middle"
                                                dominantBaseline="middle"
                                                className="degree-marker-text"
                                            >
                                                {deg}°
                                            </text>
                                        )}
                                    </g>
                                );
                            })}

                            {/* The Angle Wedge */}
                            <path
                                d={describeArc(CENTER.x, CENTER.y, RADIUS * 0.8, 0, normalizedAngle)}
                                fill={angleColor + '30'}
                                stroke={angleColor}
                                strokeWidth="2"
                                className="angle-wedge"
                            />

                            {/* Base Line */}
                            <line
                                x1={CENTER.x}
                                y1={CENTER.y}
                                x2={CENTER.x + RADIUS}
                                y2={CENTER.y}
                                stroke="#475569"
                                strokeWidth="4"
                                strokeLinecap="round"
                            />

                            {/* Rotating Line */}
                            <line
                                x1={CENTER.x}
                                y1={CENTER.y}
                                x2={handlePos.x}
                                y2={handlePos.y}
                                stroke={angleColor}
                                strokeWidth="4"
                                strokeLinecap="round"
                                className="rotating-line"
                            />

                            {/* Center Point */}
                            <circle cx={CENTER.x} cy={CENTER.y} r="6" fill="#1e293b" />

                            {/* Draggable Handle */}
                            <g
                                className="angle-handle"
                                onMouseDown={handleStart}
                                onTouchStart={handleStart}
                            >
                                <circle
                                    cx={handlePos.x}
                                    cy={handlePos.y}
                                    r="14"
                                    fill="white"
                                    stroke={angleColor}
                                    strokeWidth="3"
                                />
                                <circle
                                    cx={handlePos.x}
                                    cy={handlePos.y}
                                    r="5"
                                    fill={angleColor}
                                />
                            </g>

                            {/* Angle Label */}
                            <g transform={`translate(${CENTER.x + 50}, ${CENTER.y - 50})`}>
                                <rect x="-12" y="-24" width="90" height="36" rx="8" fill="white" stroke={angleColor} strokeWidth="2" />
                                <text x="33" y="-4" textAnchor="middle" fill={angleColor} className="angle-label-text">
                                    {Math.round(normalizedAngle)}°
                                </text>
                            </g>
                        </svg>
                    </div>

                    {/* Controls */}
                    <div className="angle-controls">
                        <div className="slider-container">
                            <span className="slider-label">0°</span>
                            <input
                                type="range"
                                min="0"
                                max="360"
                                value={normalizedAngle}
                                onChange={(e) => setAngle(Number(e.target.value))}
                                className="angle-slider"
                            />
                            <span className="slider-label">360°</span>
                        </div>

                        {/* Quick Presets */}
                        <div className="preset-buttons">
                            {[0, 45, 90, 135, 180, 270].map((preset) => (
                                <button
                                    key={preset}
                                    onClick={() => setAngle(preset)}
                                    className={`preset-btn ${Math.round(normalizedAngle) === preset ? 'active' : ''}`}
                                >
                                    {preset}°
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Sidebar */}
                <div className="angle-sidebar">
                    {/* Mode Toggle */}
                    <div className="mode-toggle">
                        <button
                            onClick={() => {
                                setShowQuiz(false);
                                setQuizFeedback(null);
                            }}
                            className={`mode-btn ${!showQuiz ? 'active' : ''}`}
                        >
                            <RotateCwIcon />
                            Explore
                        </button>
                        <button
                            onClick={() => {
                                setShowQuiz(true);
                                if (!currentQuiz) generateQuiz();
                            }}
                            className={`mode-btn quiz ${showQuiz ? 'active' : ''}`}
                        >
                            <TrophyIcon />
                            Quiz Mode
                        </button>
                    </div>

                    {/* Quiz Panel */}
                    {showQuiz ? (
                        <div className="quiz-panel">
                            {!currentQuiz ? (
                                <div className="quiz-start">
                                    <TrophyIcon />
                                    <button onClick={generateQuiz} className="start-quiz-btn">
                                        Start Quiz <ChevronRightIcon />
                                    </button>
                                </div>
                            ) : (
                                <div className="quiz-content">
                                    <div className="quiz-header">
                                        <h3>Challenge!</h3>
                                        <button onClick={() => setShowHint(!showHint)} className="hint-btn">
                                            <LightbulbIcon />
                                        </button>
                                    </div>

                                    <p className="quiz-question">{currentQuiz.question}</p>

                                    {showHint && (
                                        <div className="hint-box">
                                            <LightbulbIcon />
                                            {currentQuiz.hint}
                                        </div>
                                    )}

                                    {quizFeedback === null ? (
                                        <button onClick={checkAnswer} className="check-answer-btn">
                                            Check My Answer
                                        </button>
                                    ) : (
                                        <div className={`feedback-box ${quizFeedback}`}>
                                            {quizFeedback === 'correct' ? (
                                                <div className="feedback-content">
                                                    <CheckIcon />
                                                    <span>Excellent! Well done!</span>
                                                    <button onClick={generateQuiz} className="next-challenge-btn">
                                                        Next Challenge
                                                    </button>
                                                </div>
                                            ) : (
                                                <div className="feedback-content">
                                                    <XIcon />
                                                    <span>Not quite! Try again</span>
                                                    <p className="feedback-hint">You're at {Math.round(normalizedAngle)}°, need ~{currentQuiz.targetAngle}°</p>
                                                    <button onClick={() => setQuizFeedback(null)} className="try-again-btn">
                                                        Try Again
                                                    </button>
                                                </div>
                                            )}
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                    ) : (
                        /* Angle Types Legend (Explore Mode) */
                        <div className="angle-legend-panel">
                            <h3><InfoIcon /> Angle Types</h3>
                            <div className="legend-items">
                                {[
                                    { label: 'Acute', range: '0° to 90°', className: 'angle-acute', icon: '🔍', active: normalizedAngle > 0 && normalizedAngle < 90 },
                                    { label: 'Right', range: 'Exactly 90°', className: 'angle-right', icon: '📐', active: normalizedAngle === 90 },
                                    { label: 'Obtuse', range: '90° to 180°', className: 'angle-obtuse', icon: '📏', active: normalizedAngle > 90 && normalizedAngle < 180 },
                                    { label: 'Straight', range: 'Exactly 180°', className: 'angle-straight', icon: '➡️', active: normalizedAngle === 180 },
                                    { label: 'Reflex', range: '180° to 360°', className: 'angle-reflex', icon: '🔄', active: normalizedAngle > 180 && normalizedAngle < 360 },
                                ].map((type) => (
                                    <div
                                        key={type.label}
                                        className={`legend-item ${type.className} ${type.active ? 'active' : ''}`}
                                    >
                                        <span className="legend-icon">{type.icon}</span>
                                        <div>
                                            <span className="legend-label">{type.label}</span>
                                            <span className="legend-range">{type.range}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Real World Examples */}
                    <div className="real-world-panel">
                        <h4><SparklesIcon /> Real World Angles</h4>
                        <div className="real-world-examples">
                            <div className="example-item">
                                <span className="example-emoji">🍕</span>
                                <div>
                                    <p className="example-title">Acute: Pizza Slice</p>
                                    <p className="example-desc">Less than 90°</p>
                                </div>
                            </div>
                            <div className="example-item">
                                <span className="example-emoji">🚪</span>
                                <div>
                                    <p className="example-title">Right: Door Corner</p>
                                    <p className="example-desc">Exactly 90°</p>
                                </div>
                            </div>
                            <div className="example-item">
                                <span className="example-emoji">🪑</span>
                                <div>
                                    <p className="example-title">Obtuse: Reclined Chair</p>
                                    <p className="example-desc">More than 90°</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}