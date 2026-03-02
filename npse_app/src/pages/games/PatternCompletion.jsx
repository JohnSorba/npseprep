import { useState, useCallback, useMemo } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/PatternCompletion.css';

/* ═══════════════════════════════════════════════════
   SVG SHAPE RENDERER
   ═══════════════════════════════════════════════════ */
const SHAPE_COLORS = {
    red: '#ef4444',
    blue: '#3b82f6',
    green: '#22c55e',
    purple: '#a855f7',
    orange: '#f97316',
    teal: '#14b8a6',
};

function ShapeIcon({ shape, color, size = 32, filled = true }) {
    const s = size;
    const c = SHAPE_COLORS[color] || color || '#6366f1';
    const fill = filled ? c : 'none';
    const stroke = c;
    const sw = 2.5;

    const shapes = {
        circle: <circle cx={s / 2} cy={s / 2} r={s / 2 - sw} fill={fill} stroke={stroke} strokeWidth={sw} />,
        square: <rect x={sw} y={sw} width={s - sw * 2} height={s - sw * 2} rx={3} fill={fill} stroke={stroke} strokeWidth={sw} />,
        triangle: <polygon points={`${s / 2},${sw} ${s - sw},${s - sw} ${sw},${s - sw}`} fill={fill} stroke={stroke} strokeWidth={sw} strokeLinejoin="round" />,
        diamond: <polygon points={`${s / 2},${sw} ${s - sw},${s / 2} ${s / 2},${s - sw} ${sw},${s / 2}`} fill={fill} stroke={stroke} strokeWidth={sw} />,
        star: (() => {
            const cx = s / 2, cy = s / 2;
            const outerR = s / 2 - sw * 0.5;
            const innerR = outerR * 0.4;
            const pts = Array.from({ length: 10 }, (_, i) => {
                const angle = (i * Math.PI) / 5 - Math.PI / 2;
                const r = i % 2 === 0 ? outerR : innerR;
                return `${cx + r * Math.cos(angle)},${cy + r * Math.sin(angle)}`;
            }).join(' ');
            return <polygon points={pts} fill={fill} stroke={stroke} strokeWidth={sw} strokeLinejoin="round" />;
        })(),
        hexagon: (() => {
            const cx = s / 2, cy = s / 2, r = s / 2 - sw;
            const pts = Array.from({ length: 6 }, (_, i) => {
                const a = (i * Math.PI) / 3 - Math.PI / 6;
                return `${cx + r * Math.cos(a)},${cy + r * Math.sin(a)}`;
            }).join(' ');
            return <polygon points={pts} fill={fill} stroke={stroke} strokeWidth={sw} />;
        })(),
        cross: <g stroke={stroke} strokeWidth={sw * 1.5} strokeLinecap="round">
            <line x1={s * 0.2} y1={s / 2} x2={s * 0.8} y2={s / 2} />
            <line x1={s / 2} y1={s * 0.2} x2={s / 2} y2={s * 0.8} />
        </g>,
        arrow: <polygon points={`${s * 0.2},${s * 0.35} ${s * 0.6},${s * 0.35} ${s * 0.6},${s * 0.2} ${s * 0.85},${s / 2} ${s * 0.6},${s * 0.8} ${s * 0.6},${s * 0.65} ${s * 0.2},${s * 0.65}`} fill={fill} stroke={stroke} strokeWidth={sw * 0.6} strokeLinejoin="round" />,
    };

    return (
        <svg viewBox={`0 0 ${s} ${s}`} width={s} height={s} style={{ display: 'block', overflow: 'visible' }}>
            {shapes[shape] || shapes.circle}
        </svg>
    );
}

/* ═══════════════════════════════════════════════════
   COUNT DOTS RENDERER
   ═══════════════════════════════════════════════════ */
function CountDots({ count, color = '#6366f1', size = 48 }) {
    const positions = [
        [],
        [[0.5, 0.5]],
        [[0.3, 0.5], [0.7, 0.5]],
        [[0.3, 0.3], [0.7, 0.3], [0.5, 0.7]],
        [[0.3, 0.3], [0.7, 0.3], [0.3, 0.7], [0.7, 0.7]],
        [[0.3, 0.25], [0.7, 0.25], [0.5, 0.5], [0.3, 0.75], [0.7, 0.75]],
        [[0.25, 0.25], [0.75, 0.25], [0.25, 0.5], [0.75, 0.5], [0.25, 0.75], [0.75, 0.75]],
    ];
    const pts = positions[Math.min(count, 6)] || positions[6];
    const r = size * 0.1;
    return (
        <svg viewBox="0 0 1 1" width={size} height={size} style={{ display: 'block' }}>
            {pts.map(([x, y], i) => (
                <circle key={i} cx={x} cy={y} r={r} fill={color} />
            ))}
        </svg>
    );
}

/* ═══════════════════════════════════════════════════
   CELL RENDERER
   ═══════════════════════════════════════════════════ */
function Cell({ cell, size = 44 }) {
    if (!cell) return <div className="pc-cell-empty" style={{ width: size, height: size }} />;
    if (cell.type === 'dots') {
        return <div className="pc-cell-inner" style={{ width: size, height: size }}>
            <CountDots count={cell.value} color={SHAPE_COLORS[cell.color] || '#6366f1'} size={size * 0.88} />
        </div>;
    }
    return (
        <div className="pc-cell-inner" style={{ width: size, height: size }}>
            <ShapeIcon shape={cell.shape} color={cell.color} size={size * 0.78} filled={cell.filled !== false} />
            {cell.count > 1 && <span className="pc-cell-count" style={{ color: SHAPE_COLORS[cell.color] }}>{cell.count}</span>}
        </div>
    );
}

/* ═══════════════════════════════════════════════════
   RULE TYPES & QUESTION GENERATION
   ═══════════════════════════════════════════════════ */
const SHAPES_LIST = ['circle', 'square', 'triangle', 'diamond', 'star', 'hexagon'];
const COLORS_LIST = ['red', 'blue', 'green', 'purple', 'orange', 'teal'];

function pick(arr) { return arr[Math.floor(Math.random() * arr.length)]; }
function shuffle(arr) { return [...arr].sort(() => Math.random() - 0.5); }
function range(n) { return Array.from({ length: n }, (_, i) => i); }

/* Each rule returns a 3×3 grid (9 cells) + explanation */
const RULE_GENERATORS = [
    // 1. Shape changes by row, color stays constant in each row
    () => {
        const shapes = shuffle(SHAPES_LIST).slice(0, 3);
        const colors = [pick(COLORS_LIST), pick(COLORS_LIST), pick(COLORS_LIST)];
        const grid = range(3).flatMap(r =>
            range(3).map(c => ({ shape: shapes[c], color: colors[r] }))
        );
        return {
            grid,
            rule: 'Shape by Row',
            explanation: `Each row uses the same colour but cycles through three different shapes left-to-right. Find the shape that continues the pattern in the missing cell.`,
        };
    },

    // 2. Color changes by column, shape stays constant in each column
    () => {
        const shapes = [pick(SHAPES_LIST), pick(SHAPES_LIST), pick(SHAPES_LIST)];
        const colors = shuffle(COLORS_LIST).slice(0, 3);
        const grid = range(3).flatMap(r =>
            range(3).map(c => ({ shape: shapes[c], color: colors[r] }))
        );
        return {
            grid,
            rule: 'Color by Column',
            explanation: `Each column uses the same shape but cycles through three different colours top-to-bottom. The missing piece must match the column's shape and the row's colour.`,
        };
    },

    // 3. Count pattern (dots increase by row)
    () => {
        const color = pick(COLORS_LIST);
        const startCounts = [1, 2, 3];
        const grid = range(3).flatMap(r =>
            range(3).map(c => ({
                type: 'dots',
                value: startCounts[r] + c,
                color,
            }))
        );
        return {
            grid,
            rule: 'Counting Pattern',
            explanation: `The number of dots increases by 1 as you move right across a row, and increases by 1 as you move down each column. Count carefully to find the missing amount.`,
        };
    },

    // 4. Diagonal rule: same shape along each diagonal
    () => {
        const shapes = shuffle(SHAPES_LIST).slice(0, 3);
        const colors = shuffle(COLORS_LIST).slice(0, 3);
        // main diagonal, anti-diagonal, centre
        const assignments = [
            [0, shapes[0], colors[0]], [4, shapes[1], colors[1]], [8, shapes[2], colors[2]],
            [1, shapes[1], colors[2]], [2, shapes[2], colors[1]],
            [3, shapes[0], colors[1]], [5, shapes[1], colors[0]],
            [6, shapes[2], colors[2]], [7, shapes[0], colors[2]],
        ];
        const cells = range(9).map(i => {
            const found = assignments.find(([idx]) => idx === i);
            return found ? { shape: found[1], color: found[2] } : { shape: pick(SHAPES_LIST), color: pick(COLORS_LIST) };
        });
        return {
            grid: cells,
            rule: 'Diagonal Rule',
            explanation: `Follow the shapes along the diagonals — each diagonal uses the same shape. Combine that with the colour pattern to find the missing piece.`,
        };
    },

    // 5. Shape rotation (same shape, rotating colour set)
    () => {
        const shape = pick(SHAPES_LIST);
        const colors = shuffle(COLORS_LIST).slice(0, 3);
        const grid = range(3).flatMap(r =>
            range(3).map(c => ({ shape, color: colors[(r + c) % 3] }))
        );
        return {
            grid,
            rule: 'Rotating Colors',
            explanation: `All cells contain the same shape. The colours rotate in a fixed sequence — the sequence shifts by one position each row. Find the correct colour for the missing cell.`,
        };
    },

    // 6. Each row contains each shape exactly once (Latin square)
    () => {
        const shapes = shuffle(SHAPES_LIST).slice(0, 3);
        const color = pick(COLORS_LIST);
        const grid = range(3).flatMap(r => {
            const rowShapes = [...shapes].sort(() => Math.random() - 0.5);
            return range(3).map(c => ({ shape: rowShapes[c], color }));
        });
        return {
            grid,
            rule: 'Each Row — All Shapes',
            explanation: `Every row contains each of the three shapes exactly once (like a mini-Sudoku for shapes). Find the shape missing from that row.`,
        };
    },

    // 7. Size/count increases along row
    () => {
        const shape = pick(SHAPES_LIST);
        const color = pick(COLORS_LIST);
        const grid = range(3).flatMap(r =>
            range(3).map(c => ({ shape, color, count: c + 1, filled: true }))
        );
        return {
            grid,
            rule: 'Quantity Grows',
            explanation: `Each row shows the same shape but with an increasing quantity — 1, 2 then 3. The number resets at the start of each new row. Complete the missing cell with the right count.`,
        };
    },

    // 8. Alternating fill (filled / outline)
    () => {
        const shape = pick(SHAPES_LIST);
        const color = pick(COLORS_LIST);
        const grid = range(9).map(i => ({ shape, color, filled: i % 2 === 0 }));
        return {
            grid,
            rule: 'Filled vs Outline',
            explanation: `Cells alternate between a filled shape and an outlined shape in a checkerboard pattern. Decide whether the missing cell should be filled or just an outline.`,
        };
    },
];

function generateQuestion() {
    const gen = pick(RULE_GENERATORS);
    const { grid, rule, explanation } = gen();

    // hide cell at position 8 (bottom-right) — classic IQ test spot
    const answer = { ...grid[8] };
    const questionGrid = grid.map((cell, i) => i === 8 ? null : cell);

    // generate 3 distractors
    const makeDistractor = () => {
        const d = { ...answer };
        const roll = Math.random();
        const colorKeys = Object.keys(SHAPE_COLORS);
        if (roll < 0.33) {
            d.color = pick(colorKeys.filter(c => c !== answer.color));
        } else if (roll < 0.66) {
            if (d.shape) d.shape = pick(SHAPES_LIST.filter(s => s !== answer.shape));
        } else {
            d.filled = !d.filled;
        }
        return d;
    };

    const distractors = [];
    for (let i = 0; i < 3; i++) {
        let dist;
        let attempts = 0;
        do {
            dist = makeDistractor();
            attempts++;
        } while (attempts < 20 && distractors.some(d =>
            d.shape === dist.shape && d.color === dist.color && d.filled === dist.filled && d.value === dist.value));
        distractors.push(dist);
    }

    const options = shuffle([answer, ...distractors]);
    const correctIndex = options.findIndex(o =>
        o.shape === answer.shape && o.color === answer.color &&
        o.filled === answer.filled && o.value === answer.value && o.type === answer.type
    );

    return { grid: questionGrid, answer, options, correctIndex, rule, explanation };
}

/* ═══════════════════════════════════════════════════
   DIFFICULTY CONFIG
   ═══════════════════════════════════════════════════ */
const DIFFICULTY = {
    starter: { label: 'Starter', icon: '🌱', color: '#22c55e', questions: 6, ruleFilter: [0, 1, 2, 4] },
    explorer: { label: 'Explorer', icon: '🔭', color: '#6366f1', questions: 8, ruleFilter: [0, 1, 2, 3, 4, 5] },
    champion: { label: 'Champion', icon: '🏆', color: '#f59e0b', questions: 10, ruleFilter: null },
};

function buildSession(difficulty) {
    const d = DIFFICULTY[difficulty];
    const numQ = d.questions;
    return Array.from({ length: numQ }, () => generateQuestion(d.ruleFilter));
}

/* ═══════════════════════════════════════════════════
   MATRIX DISPLAY
   ═══════════════════════════════════════════════════ */
function MatrixGrid({ cells, highlightEmpty = false, accentColor, onSelect, selectedIdx, answered, correctIndex, options }) {
    return (
        <div className="pc-matrix">
            {cells.map((cell, i) => {
                const isEmpty = cell === null;
                return (
                    <div
                        key={i}
                        className={`pc-matrix-cell ${isEmpty ? 'pc-matrix-cell-missing' : ''} ${isEmpty && highlightEmpty ? 'pc-matrix-cell-pulse' : ''}`}
                        style={isEmpty ? { borderColor: accentColor, boxShadow: `0 0 0 3px ${accentColor}33` } : {}}
                    >
                        {isEmpty ? <span className="pc-matrix-q">?</span> : <Cell cell={cell} size={42} />}
                    </div>
                );
            })}
        </div>
    );
}

/* ═══════════════════════════════════════════════════
   MAIN COMPONENT
   ═══════════════════════════════════════════════════ */
export default function PatternCompletion() {
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
        const qs = buildSession(d);
        setQuestions(qs);
        setCurrentIdx(0);
        setAnswered(null);
        setChosenIdx(null);
        setResults([]);
        setStreak(0);
        setBestStreak(0);
        setDifficulty(d);
        setView('playing');
    }, []);

    const handleChoice = useCallback((idx) => {
        if (answered) return;
        const isCorrect = idx === q.correctIndex;
        setChosenIdx(idx);
        setAnswered(isCorrect ? 'correct' : 'wrong');
        setResults(prev => [...prev, { correct: isCorrect }]);
        setStreak(prev => {
            const next = isCorrect ? prev + 1 : 0;
            setBestStreak(b => Math.max(b, next));
            return next;
        });
    }, [answered, q]);

    const handleNext = useCallback(() => {
        if (currentIdx + 1 >= questions.length) {
            setView('results');
        } else {
            setCurrentIdx(i => i + 1);
            setAnswered(null);
            setChosenIdx(null);
        }
    }, [currentIdx, questions.length]);

    const stars = useMemo(() => {
        if (!questions.length) return 0;
        const pct = correctCount / questions.length;
        if (pct >= 0.9) return 3;
        if (pct >= 0.6) return 2;
        return 1;
    }, [correctCount, questions.length]);

    /* ── SETUP ── */
    if (view === 'setup') return (
        <div className="pc-page">
            <div className="container">
                <Link to="/games" className="pc-back-link">← Back to Games</Link>
                <div className="pc-hero">
                    <div className="pc-hero-icon" aria-hidden="true">
                        <svg viewBox="0 0 64 64" width={56} height={56}>
                            {[0, 1, 2, 3, 4, 5, 6, 7, 8].map(i => {
                                const colors = ['#6366f1', '#f59e0b', '#22c55e', '#ef4444', '#6366f1', '#3b82f6', '#f97316', '#a855f7', '#14b8a6'];
                                const r = Math.floor(i / 3), c = i % 3;
                                return <rect key={i} x={c * 22 + 1} y={r * 22 + 1} width={18} height={18} rx={4} fill={colors[i]} />;
                            })}
                        </svg>
                    </div>
                    <h1>Pattern Completion</h1>
                    <p>Study the 3×3 matrix and find the piece that completes the pattern. Train your logical reasoning!</p>
                </div>

                <div className="pc-diff-grid">
                    {Object.entries(DIFFICULTY).map(([key, d]) => (
                        <button
                            key={key}
                            className={`pc-diff-card ${difficulty === key ? 'selected' : ''}`}
                            style={{ '--diff-color': d.color }}
                            onClick={() => setDifficulty(key)}
                        >
                            <span className="pc-diff-icon">{d.icon}</span>
                            <span className="pc-diff-label">{d.label}</span>
                            <span className="pc-diff-meta">{d.questions} questions · {d.ruleFilter ? d.ruleFilter.length : 8} rule types</span>
                        </button>
                    ))}
                </div>

                <button className="pc-start-btn" onClick={() => startGame(difficulty)}>
                    Start Game ▶
                </button>
            </div>
        </div>
    );

    /* ── PLAYING ── */
    if (view === 'playing' && q) {
        const accentColor = diff.color;
        const revealedGrid = answered ? q.grid.map((cell, i) => i === 8 ? q.answer : cell) : q.grid;

        return (
            <div className="pc-page pc-page-game">
                {/* Top bar */}
                <div className="pc-top-bar">
                    <div className="container pc-bar-inner">
                        <button className="pc-quit" onClick={() => setView('setup')} aria-label="Quit">✕</button>
                        <div className="pc-bar-info">
                            <span className="pc-bar-label" style={{ color: accentColor }}>{diff.label}</span>
                            <span className="pc-bar-q">{currentIdx + 1} / {questions.length}</span>
                        </div>
                        <div className="pc-bar-right">
                            {streak >= 2 && <span className="pc-streak-badge">🔥 {streak}</span>}
                            <div className="pc-bar-track">
                                <div className="pc-bar-fill" style={{ width: `${progress * 100}%`, background: accentColor }} />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container pc-game-area">
                    <div className={`pc-card ${answered === 'correct' ? 'pc-card-correct' : answered === 'wrong' ? 'pc-card-wrong' : ''}`}>
                        <div className="pc-rule-tag-row">
                            <span className="pc-rule-tag" style={{ background: accentColor + '22', color: accentColor }}>
                                {q.rule}
                            </span>
                            <p className="pc-prompt">Which piece completes the pattern?</p>
                        </div>

                        {/* Matrix */}
                        <div className="pc-matrix-wrapper">
                            <MatrixGrid
                                cells={answered ? revealedGrid : q.grid}
                                highlightEmpty={!answered}
                                accentColor={accentColor}
                            />
                        </div>

                        {/* Feedback */}
                        {answered && (
                            <div className={`pc-feedback ${answered}`}>
                                {answered === 'correct'
                                    ? '✅ Correct! Great logical thinking!'
                                    : '❌ Not quite — the correct answer is highlighted above.'}
                                <p className="pc-explain">{q.explanation}</p>
                            </div>
                        )}

                        {/* Choices */}
                        <div className="pc-choices">
                            <p className="pc-choices-label">{answered ? 'The options were:' : 'Pick the missing piece:'}</p>
                            <div className="pc-choices-grid">
                                {q.options.map((opt, i) => {
                                    const isCorrect = i === q.correctIndex;
                                    const wasChosen = i === chosenIdx;
                                    let cls = 'pc-choice-btn';
                                    if (answered) {
                                        cls += isCorrect ? ' choice-correct' : wasChosen ? ' choice-wrong' : ' choice-neutral';
                                    } else {
                                        cls += wasChosen ? ' chosen' : '';
                                    }
                                    return (
                                        <button
                                            key={i}
                                            className={cls}
                                            onClick={() => handleChoice(i)}
                                            disabled={!!answered}
                                        >
                                            <Cell cell={opt} size={40} />
                                            {answered && isCorrect && <span className="pc-checkmark">✓</span>}
                                        </button>
                                    );
                                })}
                            </div>
                        </div>

                        {answered && (
                            <div className="pc-card-actions">
                                <button className="pc-next-btn" style={{ background: accentColor }} onClick={handleNext}>
                                    {currentIdx + 1 >= questions.length ? 'See Results 🏁' : 'Next Pattern →'}
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        );
    }

    /* ── RESULTS ── */
    if (view === 'results') {
        const pct = Math.round((correctCount / questions.length) * 100);
        return (
            <div className="pc-page">
                <div className="container">
                    <div className="pc-results-card">
                        <div className="pc-results-emoji">{stars === 3 ? '🏆' : stars === 2 ? '🎉' : '🌱'}</div>
                        <h2 className="pc-results-title">
                            {stars === 3 ? 'Pattern Master!' : stars === 2 ? 'Well Done!' : 'Keep Practising!'}
                        </h2>
                        <div className="pc-stars">
                            {[1, 2, 3].map(s => (
                                <span key={s} className={`pc-star ${s <= stars ? 'pc-star-lit' : ''}`}>⭐</span>
                            ))}
                        </div>
                        <p className="pc-results-sub">{diff.label} Mode</p>
                        <div className="pc-results-stats">
                            <div className="pc-stat"><span className="pc-stat-val">{correctCount}/{questions.length}</span><span className="pc-stat-label">Correct</span></div>
                            <div className="pc-stat"><span className="pc-stat-val">{pct}%</span><span className="pc-stat-label">Accuracy</span></div>
                            <div className="pc-stat"><span className="pc-stat-val">🔥 {bestStreak}</span><span className="pc-stat-label">Best Streak</span></div>
                        </div>
                        <div className="pc-results-breakdown">
                            {results.map((r, i) => (
                                <span key={i} className={`pc-result-dot ${r.correct ? 'dot-correct' : 'dot-wrong'}`} title={`Q${i + 1}`} />
                            ))}
                        </div>
                        <div className="pc-results-actions">
                            <button className="pc-btn pc-btn-primary" onClick={() => startGame(difficulty)}>🔄 Play Again</button>
                            <button className="pc-btn pc-btn-secondary" onClick={() => setView('setup')}>Change Difficulty</button>
                            <Link to="/games" className="pc-btn pc-btn-ghost">← All Games</Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return null;
}
