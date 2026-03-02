import { useState, useCallback, useMemo } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/ClockAngles.css';

/* ═══════════════════════════════════════════════════
   SVG CLOCK RENDERER
   ═══════════════════════════════════════════════════ */
const R = 80; // clock radius
const CX = 90, CY = 90; // centre
const SIZE = 180;

function toRad(deg) { return (deg * Math.PI) / 180; }

function handCoords(angleDeg, length) {
    const rad = toRad(angleDeg - 90);
    return { x: CX + length * Math.cos(rad), y: CY + length * Math.sin(rad) };
}

function ClockFace({ hour, minute, showArc = false, arcAngle = null, size = SIZE }) {
    const minuteAngle = minute * 6; // 360/60
    const hourAngle = (hour % 12) * 30 + minute * 0.5; // 360/12 + minute offset

    const minuteHand = handCoords(minuteAngle, R * 0.75);
    const hourHand = handCoords(hourAngle, R * 0.55);

    // Arc between hands
    const arcStart = hourAngle < minuteAngle ? hourAngle : minuteAngle;
    const arcEnd = hourAngle < minuteAngle ? minuteAngle : hourAngle;
    const arcSpan = arcEnd - arcStart;

    function arcPath(startDeg, spanDeg, r) {
        const s = handCoords(startDeg, r);
        const e = handCoords(startDeg + spanDeg, r);
        const largeArc = spanDeg > 180 ? 1 : 0;
        return `M ${CX} ${CY} L ${s.x} ${s.y} A ${r} ${r} 0 ${largeArc} 1 ${e.x} ${e.y} Z`;
    }

    const scale = size / SIZE;

    return (
        <svg viewBox={`0 0 ${SIZE} ${SIZE}`} width={size} height={size} style={{ display: 'block' }}>
            {/* Rim */}
            <circle cx={CX} cy={CY} r={R} fill="white" stroke="#1e293b" strokeWidth={3} />

            {/* Hour ticks */}
            {Array.from({ length: 12 }, (_, i) => {
                const a = toRad(i * 30 - 90);
                const inner = R * 0.85;
                return (
                    <line key={i}
                        x1={CX + inner * Math.cos(a)} y1={CY + inner * Math.sin(a)}
                        x2={CX + R * Math.cos(a)} y2={CY + R * Math.sin(a)}
                        stroke="#334155" strokeWidth={i % 3 === 0 ? 3 : 1.5}
                    />
                );
            })}

            {/* Hour numbers */}
            {[12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((n, i) => {
                const a = toRad(i * 30 - 90);
                const nr = R * 0.68;
                return <text key={n} x={CX + nr * Math.cos(a)} y={CY + nr * Math.sin(a)} textAnchor="middle" dominantBaseline="central" fontSize={10} fontWeight="700" fill="#1e293b">{n}</text>;
            })}

            {/* Arc fill */}
            {showArc && (
                <path d={arcPath(arcStart, arcSpan, R * 0.5)} fill="#6366f133" stroke="none" />
            )}

            {/* Hour hand */}
            <line x1={CX} y1={CY} x2={hourHand.x} y2={hourHand.y} stroke="#1e293b" strokeWidth={5} strokeLinecap="round" />

            {/* Minute hand */}
            <line x1={CX} y1={CY} x2={minuteHand.x} y2={minuteHand.y} stroke="#6366f1" strokeWidth={3.5} strokeLinecap="round" />

            {/* Centre dot */}
            <circle cx={CX} cy={CY} r={5} fill="#1e293b" />
        </svg>
    );
}

/* ═══════════════════════════════════════════════════
   QUESTION GENERATORS
   ═══════════════════════════════════════════════════ */
function rnd(min, max) { return Math.floor(Math.random() * (max - min + 1)) + min; }
function pick(arr) { return arr[Math.floor(Math.random() * arr.length)]; }

function calcAngle(hour, minute) {
    const ha = (hour % 12) * 30 + minute * 0.5;
    const ma = minute * 6;
    const diff = Math.abs(ha - ma);
    return Math.min(diff, 360 - diff);
}

const NICE_TIMES = [
    [12, 0], [3, 0], [6, 0], [9, 0],
    [1, 30], [2, 0], [4, 0], [5, 0],
    [7, 0], [8, 0], [10, 0], [11, 0],
    [3, 30], [6, 30], [9, 30], [1, 0],
];

const CHALLENGE_TYPES = [
    // Type A: Calculate angle between hands
    () => {
        const [h, m] = pick(NICE_TIMES);
        const angle = Math.round(calcAngle(h, m));
        const hStr = `${h}:${m.toString().padStart(2, '0')}`;
        // distractors
        const opts = [angle];
        while (opts.length < 4) {
            const d = angle + pick([-30, -15, 15, 30, 45, -45, 60, -60, 90]);
            const v = ((d % 360) + 360) % 360;
            if (!opts.includes(v) && v >= 0 && v <= 180) opts.push(v);
        }
        opts.sort(() => Math.random() - 0.5);
        return {
            type: 'Find the Angle',
            prompt: `The time is ${hStr}. What is the angle between the hour and minute hands?`,
            hour: h, minute: m,
            showArc: true,
            answer: angle,
            options: opts,
            correctIndex: opts.indexOf(angle),
            explanation: `At ${hStr}: the hour hand is at ${Math.round((h % 12) * 30 + m * 0.5)}°, the minute hand is at ${Math.round(m * 6)}°. The angle between them is ${angle}°.`,
        };
    },

    // Type B: Which clock shows the given time?
    () => {
        const [h, m] = pick(NICE_TIMES);
        const hStr = `${h}:${m.toString().padStart(2, '0')}`;
        const fakes = NICE_TIMES.filter(([fh, fm]) => !(fh === h && fm === m)).sort(() => Math.random() - 0.5).slice(0, 3);
        const all = [[h, m], ...fakes].sort(() => Math.random() - 0.5);
        const ci = all.findIndex(([fh, fm]) => fh === h && fm === m);
        return {
            type: 'Read the Clock',
            prompt: `Which clock shows ${hStr}?`,
            multiClock: true,
            clocks: all,
            answer: `${h}:${m.toString().padStart(2, '0')}`,
            correctIndex: ci,
            explanation: `${hStr}: the minute hand points to ${m === 0 ? 12 : m / 5}, the hour hand is between ${h % 12} and ${(h % 12) + 1}.`,
        };
    },

    // Type C: What time does the clock show?
    () => {
        const [h, m] = pick(NICE_TIMES);
        const hStr = `${h}:${m.toString().padStart(2, '0')}`;
        const fakes = NICE_TIMES.filter(([fh, fm]) => !(fh === h && fm === m)).sort(() => Math.random() - 0.5).slice(0, 3);
        const timeOpts = [[h, m], ...fakes].sort(() => Math.random() - 0.5);
        const ci = timeOpts.findIndex(([fh, fm]) => fh === h && fm === m);
        return {
            type: 'Name the Time',
            prompt: 'What time does this clock show?',
            hour: h, minute: m,
            multiClock: false,
            timeOptions: timeOpts,
            answer: hStr,
            correctIndex: ci,
            explanation: `The minute hand (purple) at 12 = :00, at 3 = :15, at 6 = :30, at 9 = :45. The hour hand (dark) shows which hour.`,
        };
    },
];

const DIFFICULTY = {
    starter: { label: 'Starter', icon: '🌱', color: '#22c55e', questions: 6, types: [1, 2] },
    explorer: { label: 'Explorer', icon: '🔭', color: '#6366f1', questions: 8, types: [0, 1, 2] },
    champion: { label: 'Champion', icon: '🏆', color: '#f59e0b', questions: 10, types: [0, 1, 2] },
};

function buildSession(difficulty) {
    const d = DIFFICULTY[difficulty];
    return Array.from({ length: d.questions }, () => {
        const gen = CHALLENGE_TYPES[pick(d.types)];
        return gen();
    });
}

/* ═══════════════════════════════════════════════════
   MAIN COMPONENT
   ═══════════════════════════════════════════════════ */
export default function ClockAngles() {
    const [view, setView] = useState('setup');
    const [difficulty, setDifficulty] = useState('starter');
    const [questions, setQuestions] = useState([]);
    const [currentIdx, setCurrentIdx] = useState(0);
    const [answered, setAnswered] = useState(null);
    const [chosenIdx, setChosenIdx] = useState(null);
    const [results, setResults] = useState([]);
    const [streak, setStreak] = useState(0);
    const [bestStreak, setBestStreak] = useState(0);

    const diff = DIFFICULTY[difficulty];
    const q = questions[currentIdx];
    const correctCount = results.filter(r => r.correct).length;
    const progress = questions.length > 0 ? currentIdx / questions.length : 0;

    const startGame = useCallback((d) => {
        setQuestions(buildSession(d));
        setCurrentIdx(0); setAnswered(null); setChosenIdx(null);
        setResults([]); setStreak(0); setBestStreak(0);
        setDifficulty(d); setView('playing');
    }, []);

    const handleChoice = useCallback((idx) => {
        if (answered) return;
        const isCorrect = idx === q.correctIndex;
        setChosenIdx(idx); setAnswered(isCorrect ? 'correct' : 'wrong');
        setResults(prev => [...prev, { correct: isCorrect }]);
        setStreak(prev => { const next = isCorrect ? prev + 1 : 0; setBestStreak(b => Math.max(b, next)); return next; });
    }, [answered, q]);

    const handleNext = useCallback(() => {
        if (currentIdx + 1 >= questions.length) setView('results');
        else { setCurrentIdx(i => i + 1); setAnswered(null); setChosenIdx(null); }
    }, [currentIdx, questions.length]);

    const stars = useMemo(() => {
        if (!questions.length) return 0;
        const pct = correctCount / questions.length;
        return pct >= 0.9 ? 3 : pct >= 0.6 ? 2 : 1;
    }, [correctCount, questions.length]);

    if (view === 'setup') return (
        <div className="ca-page">
            <div className="container">
                <Link to="/games" className="ca-back-link">← Back to Games</Link>
                <div className="ca-hero">
                    <div className="ca-hero-clock" aria-hidden="true">
                        <ClockFace hour={3} minute={0} showArc size={100} />
                    </div>
                    <h1>Clock Angles</h1>
                    <p>Read clocks, calculate angles between hands, and identify times. Master telling time like a pro!</p>
                </div>
                <div className="ca-diff-grid">
                    {Object.entries(DIFFICULTY).map(([key, d]) => (
                        <button key={key} className={`ca-diff-card ${difficulty === key ? 'selected' : ''}`} style={{ '--diff-color': d.color }} onClick={() => setDifficulty(key)}>
                            <span className="ca-diff-icon">{d.icon}</span>
                            <span className="ca-diff-label">{d.label}</span>
                            <span className="ca-diff-meta">{d.questions} questions · {d.types.length} challenge types</span>
                        </button>
                    ))}
                </div>
                <button className="ca-start-btn" onClick={() => startGame(difficulty)}>Start Game ▶</button>
            </div>
        </div>
    );

    if (view === 'playing' && q) {
        const ac = diff.color;
        return (
            <div className="ca-page ca-page-game">
                <div className="ca-top-bar">
                    <div className="container ca-bar-inner">
                        <button className="ca-quit" onClick={() => setView('setup')}>✕</button>
                        <div className="ca-bar-info">
                            <span className="ca-bar-label" style={{ color: ac }}>{diff.label}</span>
                            <span className="ca-bar-q">{currentIdx + 1} / {questions.length}</span>
                        </div>
                        <div className="ca-bar-right">
                            {streak >= 2 && <span className="ca-streak-badge">🔥 {streak}</span>}
                            <div className="ca-bar-track"><div className="ca-bar-fill" style={{ width: `${progress * 100}%`, background: ac }} /></div>
                        </div>
                    </div>
                </div>

                <div className="container ca-game-area">
                    <div className={`ca-card ${answered === 'correct' ? 'ca-card-correct' : answered === 'wrong' ? 'ca-card-wrong' : ''}`}>
                        <div className="ca-type-row">
                            <span className="ca-type-tag" style={{ background: ac + '22', color: ac }}>{q.type}</span>
                            <p className="ca-prompt">{q.prompt}</p>
                        </div>

                        {/* Single clock display (angle / name-the-time modes) */}
                        {!q.multiClock && (
                            <div className="ca-clock-center">
                                <ClockFace hour={q.hour} minute={q.minute} showArc={q.showArc && !!answered} size={160} />
                            </div>
                        )}

                        {/* 4 clock display (which-clock mode) */}
                        {q.multiClock && (
                            <div className="ca-clock-grid">
                                {q.clocks.map(([fh, fm], i) => {
                                    const isCorrect = i === q.correctIndex;
                                    const wasChosen = i === chosenIdx;
                                    let cls = 'ca-clock-option';
                                    if (answered) cls += isCorrect ? ' ca-clock-correct' : wasChosen ? ' ca-clock-wrong' : ' ca-clock-neutral';
                                    return (
                                        <button key={i} className={cls} onClick={() => handleChoice(i)} disabled={!!answered}>
                                            <ClockFace hour={fh} minute={fm} size={100} />
                                            <span className="ca-clock-label">{String.fromCharCode(65 + i)}</span>
                                            {answered && isCorrect && <span className="ca-checkmark">✓</span>}
                                        </button>
                                    );
                                })}
                            </div>
                        )}

                        {answered && (
                            <div className={`ca-feedback ${answered}`}>
                                {answered === 'correct' ? '✅ Correct!' : `❌ The answer is: ${q.answer}${q.type === 'Find the Angle' ? '°' : ''}`}
                                <p className="ca-explain">{q.explanation}</p>
                            </div>
                        )}

                        {/* Options for angle / time modes */}
                        {!q.multiClock && (
                            <div className="ca-choices">
                                <p className="ca-choices-label">{answered ? 'The options were:' : 'Choose your answer:'}</p>
                                <div className="ca-choices-grid">
                                    {(q.options || q.timeOptions).map((opt, i) => {
                                        const isCorrect = i === q.correctIndex;
                                        const wasChosen = i === chosenIdx;
                                        let cls = 'ca-choice-btn';
                                        if (answered) cls += isCorrect ? ' ca-choice-correct' : wasChosen ? ' ca-choice-wrong' : ' ca-choice-neutral';
                                        else cls += wasChosen ? ' ca-chosen' : '';
                                        const label = q.timeOptions ? `${opt[0]}:${String(opt[1]).padStart(2, '0')}` : `${opt}°`;
                                        return (
                                            <button key={i} className={cls} onClick={() => handleChoice(i)} disabled={!!answered}>
                                                {label}
                                                {answered && isCorrect && <span className="ca-opt-check">✓</span>}
                                            </button>
                                        );
                                    })}
                                </div>
                            </div>
                        )}

                        {answered && (
                            <div className="ca-card-actions">
                                <button className="ca-next-btn" style={{ background: ac }} onClick={handleNext}>
                                    {currentIdx + 1 >= questions.length ? 'See Results 🏁' : 'Next Challenge →'}
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        );
    }

    if (view === 'results') {
        const pct = Math.round((correctCount / questions.length) * 100);
        return (
            <div className="ca-page">
                <div className="container">
                    <div className="ca-results-card">
                        <div className="ca-results-emoji">{stars === 3 ? '🕐' : stars === 2 ? '🎉' : '🌱'}</div>
                        <h2>{stars === 3 ? 'Clockwork Perfect!' : stars === 2 ? 'Great Timing!' : 'Keep Practising!'}</h2>
                        <div className="ca-stars">{[1, 2, 3].map(s => <span key={s} className={`ca-star ${s <= stars ? 'ca-star-lit' : ''}`}>⭐</span>)}</div>
                        <p className="ca-results-sub">{diff.label} Mode</p>
                        <div className="ca-results-stats">
                            <div className="ca-stat"><span className="ca-stat-val">{correctCount}/{questions.length}</span><span className="ca-stat-label">Correct</span></div>
                            <div className="ca-stat"><span className="ca-stat-val">{pct}%</span><span className="ca-stat-label">Accuracy</span></div>
                            <div className="ca-stat"><span className="ca-stat-val">🔥 {bestStreak}</span><span className="ca-stat-label">Best Streak</span></div>
                        </div>
                        <div className="ca-results-breakdown">{results.map((r, i) => <span key={i} className={`ca-result-dot ${r.correct ? 'dot-correct' : 'dot-wrong'}`} />)}</div>
                        <div className="ca-results-actions">
                            <button className="ca-btn ca-btn-primary" onClick={() => startGame(difficulty)}>🔄 Play Again</button>
                            <button className="ca-btn ca-btn-secondary" onClick={() => setView('setup')}>Change Difficulty</button>
                            <Link to="/games" className="ca-btn ca-btn-ghost">← All Games</Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    return null;
}
