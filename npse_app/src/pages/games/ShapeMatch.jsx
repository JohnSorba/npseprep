import { useState, useCallback, useMemo } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/ShapeMatch.css';

/* ═══════════════════════════════════════════════════
   SHAPE DEFINITIONS
   Each shape is a 5×5 boolean grid (true = filled)
   ═══════════════════════════════════════════════════ */
const SHAPES = {
    L: [
        [1, 0, 0, 0, 0],
        [1, 0, 0, 0, 0],
        [1, 0, 0, 0, 0],
        [1, 1, 0, 0, 0],
        [0, 0, 0, 0, 0],
    ],
    T: [
        [0, 0, 0, 0, 0],
        [1, 1, 1, 0, 0],
        [0, 1, 0, 0, 0],
        [0, 1, 0, 0, 0],
        [0, 0, 0, 0, 0],
    ],
    S: [
        [0, 0, 0, 0, 0],
        [0, 1, 1, 0, 0],
        [1, 1, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
    ],
    Z: [
        [0, 0, 0, 0, 0],
        [1, 1, 0, 0, 0],
        [0, 1, 1, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
    ],
    F: [
        [0, 0, 0, 0, 0],
        [0, 1, 1, 0, 0],
        [1, 1, 0, 0, 0],
        [0, 1, 0, 0, 0],
        [0, 0, 0, 0, 0],
    ],
    J: [
        [0, 1, 0, 0, 0],
        [0, 1, 0, 0, 0],
        [0, 1, 0, 0, 0],
        [1, 1, 0, 0, 0],
        [0, 0, 0, 0, 0],
    ],
    Plus: [
        [0, 0, 0, 0, 0],
        [0, 1, 0, 0, 0],
        [1, 1, 1, 0, 0],
        [0, 1, 0, 0, 0],
        [0, 0, 0, 0, 0],
    ],
    Arrow: [
        [0, 0, 0, 0, 0],
        [0, 1, 0, 0, 0],
        [1, 1, 1, 0, 0],
        [0, 1, 1, 0, 0],
        [0, 0, 0, 0, 0],
    ],
    Corner: [
        [1, 1, 0, 0, 0],
        [1, 0, 0, 0, 0],
        [1, 1, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
    ],
    Zig: [
        [0, 0, 0, 0, 0],
        [1, 0, 0, 0, 0],
        [1, 1, 0, 0, 0],
        [0, 1, 1, 0, 0],
        [0, 0, 0, 0, 0],
    ],
};

const SHAPE_KEYS = Object.keys(SHAPES);

/* ══════════════════════════════════════════════
   GRID TRANSFORMATIONS
   ══════════════════════════════════════════════ */
const N = 5;

function rotateGrid90CW(grid) {
    return Array.from({ length: N }, (_, r) =>
        Array.from({ length: N }, (_, c) => grid[N - 1 - c][r])
    );
}

function flipHorizontal(grid) {
    return grid.map(row => [...row].reverse());
}

function flipVertical(grid) {
    return [...grid].reverse().map(row => [...row]);
}

function flipBoth(grid) {
    return flipVertical(flipHorizontal(grid));
}

function rotate180(grid) {
    return rotateGrid90CW(rotateGrid90CW(grid));
}

function rotate270CW(grid) {
    return rotateGrid90CW(rotateGrid90CW(rotateGrid90CW(grid)));
}

// Normalise grid: trim empty leading rows/cols, re-centre in 5×5
function normalise(grid) {
    const rows = grid.map(r => r.map(Number));
    // find bounding box
    let minR = N, maxR = -1, minC = N, maxC = -1;
    rows.forEach((row, r) => row.forEach((v, c) => {
        if (v) { minR = Math.min(minR, r); maxR = Math.max(maxR, r); minC = Math.min(minC, c); maxC = Math.max(maxC, c); }
    }));
    if (maxR === -1) return rows; // empty
    const h = maxR - minR + 1;
    const w = maxC - minC + 1;
    const offR = Math.floor((N - h) / 2);
    const offC = Math.floor((N - w) / 2);
    const out = Array.from({ length: N }, () => Array(N).fill(0));
    for (let r = minR; r <= maxR; r++)
        for (let c = minC; c <= maxC; c++)
            if (rows[r][c]) out[r - minR + offR][c - minC + offC] = 1;
    return out;
}

const TRANSFORMS = {
    rot90: { label: 'Rotated 90° clockwise', hint: 'Imagine turning the shape like a clock — the top becomes the right side.', fn: rotateGrid90CW },
    rot180: { label: 'Rotated 180°', hint: 'Flip it completely upside-down and back-to-front at the same time.', fn: rotate180 },
    rot270: { label: 'Rotated 90° anti-clockwise', hint: 'Turn it the opposite way to a clock — the top becomes the left side.', fn: rotate270CW },
    flipH: { label: 'Flipped horizontally (mirror)', hint: 'Imagine holding a mirror to the right side — left and right swap.', fn: flipHorizontal },
    flipV: { label: 'Flipped vertically (upside down)', hint: 'Flip it over a horizontal line — the top becomes the bottom.', fn: flipVertical },
    flipB: { label: 'Flipped both ways', hint: 'Flip left-right, then also top-bottom — it looks fully reversed.', fn: flipBoth },
};

const DIFFICULTY = {
    starter: { label: 'Starter', icon: '🌱', color: '#22c55e', transforms: ['rot90', 'flipH'], questions: 6 },
    explorer: { label: 'Explorer', icon: '🔭', color: '#6366f1', transforms: ['rot90', 'rot180', 'flipH', 'flipV'], questions: 8 },
    champion: { label: 'Champion', icon: '🏆', color: '#f59e0b', transforms: Object.keys(TRANSFORMS), questions: 10 },
};

/* ══════════════════════════════════════════════
   HELPERS
   ══════════════════════════════════════════════ */
function randomPick(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function gridsEqual(a, b) {
    for (let r = 0; r < a.length; r++)
        for (let c = 0; c < a[r].length; c++)
            if (Number(a[r][c]) !== Number(b[r][c])) return false;
    return true;
}

// All 7 possible transforms (including identity = no change)
const ALL_TRANSFORM_FNS = [
    g => g.map(row => [...row]),   // identity — deep-copies so no mutation
    rotateGrid90CW,
    rotate180,
    rotate270CW,
    flipHorizontal,
    flipVertical,
    flipBoth,
];

/**
 * Returns all UNIQUE visual variants of a shape (normalised).
 * For an L-shape this gives up to 7; for a Plus (fully symmetric) just 1.
 */
function getAllVariants(rawBase) {
    const variants = [];
    for (const fn of ALL_TRANSFORM_FNS) {
        const norm = normalise(fn(rawBase));
        if (!variants.some(v => gridsEqual(v, norm))) {
            variants.push(norm);
        }
    }
    return variants;
}

/**
 * Build one question.
 * Guarantees: all 4 options are transforms of the SAME base shape.
 * If a shape does not have ≥4 distinct variants, a different shape is chosen.
 */
function buildQuestion(difficulty) {
    const { transforms } = DIFFICULTY[difficulty];

    // ── Step 1: pick a shape that has at least 4 unique visual variants ──
    let rawBase, allVariants;
    for (let attempt = 0; attempt < 30; attempt++) {
        rawBase = SHAPES[randomPick(SHAPE_KEYS)];
        allVariants = getAllVariants(rawBase);
        if (allVariants.length >= 4) break;
    }
    // Safety: if still < 4 after 30 tries, use L-shape (always ≥ 4 variants)
    if (allVariants.length < 4) {
        rawBase = SHAPES.L;
        allVariants = getAllVariants(rawBase);
    }

    const base = normalise(rawBase);  // normalised original for display

    // ── Step 2: pick a transform that actually *changes* the shape ──
    const shuffledTransforms = [...transforms].sort(() => Math.random() - 0.5);
    let transformKey = shuffledTransforms[0];
    let correct = normalise(TRANSFORMS[transformKey].fn(rawBase));

    for (const tk of shuffledTransforms) {
        const candidate = normalise(TRANSFORMS[tk].fn(rawBase));
        if (!gridsEqual(candidate, base)) {
            transformKey = tk;
            correct = candidate;
            break;
        }
    }

    // ── Step 3: 3 distractors = other unique variants that ≠ correct ──
    const distractors = allVariants
        .filter(v => !gridsEqual(v, correct))
        .sort(() => Math.random() - 0.5)
        .slice(0, 3);

    // ── Step 4: assemble and shuffle all 4 options ──
    const options = [correct, ...distractors].sort(() => Math.random() - 0.5);
    const correctIndex = options.findIndex(o => gridsEqual(o, correct));

    return {
        base,
        transformKey,
        transformLabel: TRANSFORMS[transformKey].label,
        transformHint: TRANSFORMS[transformKey].hint,
        correct,
        options,
        correctIndex,
    };
}

function buildSession(difficulty) {
    const { questions } = DIFFICULTY[difficulty];
    return Array.from({ length: questions }, () => buildQuestion(difficulty));
}

/* ══════════════════════════════════════════════
   SHAPE RENDERER — SVG grid
   ══════════════════════════════════════════════ */
const CELL = 36;
const GAP = 3;
const GRID_SIZE = N * CELL + (N - 1) * GAP;

// ShapeGrid now fills its container — size is controlled by CSS on the wrapper
function ShapeGrid({ grid, color = '#1e293b', animate = false }) {
    return (
        <svg
            viewBox={`0 0 ${GRID_SIZE} ${GRID_SIZE}`}
            style={{ display: 'block', width: '100%', height: '100%' }}
            className={animate ? 'sm-shape-anim' : ''}
        >
            {grid.map((row, r) =>
                row.map((val, c) => (
                    val ? (
                        <rect
                            key={`${r}-${c}`}
                            x={c * (CELL + GAP)}
                            y={r * (CELL + GAP)}
                            width={CELL}
                            height={CELL}
                            rx={6}
                            fill={color}
                            className={animate ? 'sm-cell-anim' : ''}
                            style={animate ? { animationDelay: `${(r * N + c) * 0.03}s` } : {}}
                        />
                    ) : null
                ))
            )}
        </svg>
    );
}

/* ══════════════════════════════════════════════
   MAIN COMPONENT
   ══════════════════════════════════════════════ */
export default function ShapeMatch() {
    const [view, setView] = useState('setup'); // setup | playing | results
    const [selectedDifficulty, setSelectedDifficulty] = useState('starter');
    const [questions, setQuestions] = useState([]);
    const [currentIdx, setCurrentIdx] = useState(0);
    const [answered, setAnswered] = useState(null); // 'correct' | 'wrong' | null
    const [chosenIdx, setChosenIdx] = useState(null);
    const [results, setResults] = useState([]); // { correct: bool }
    const [showHint, setShowHint] = useState(false);
    const [streak, setStreak] = useState(0);
    const [bestStreak, setBestStreak] = useState(0);

    const diff = DIFFICULTY[selectedDifficulty];
    const q = questions[currentIdx];
    const progress = questions.length > 0 ? currentIdx / questions.length : 0;
    const correctCount = results.filter(r => r.correct).length;

    const startGame = useCallback((difficulty) => {
        const qs = buildSession(difficulty);
        setQuestions(qs);
        setCurrentIdx(0);
        setAnswered(null);
        setChosenIdx(null);
        setResults([]);
        setShowHint(false);
        setStreak(0);
        setBestStreak(0);
        setSelectedDifficulty(difficulty);
        setView('playing');
    }, []);

    const handleChoice = useCallback((optIdx) => {
        if (answered) return;
        const isCorrect = optIdx === q.correctIndex;
        setChosenIdx(optIdx);
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
            setShowHint(false);
        }
    }, [currentIdx, questions.length]);

    const stars = useMemo(() => {
        if (!questions.length) return 0;
        const pct = correctCount / questions.length;
        if (pct >= 0.9) return 3;
        if (pct >= 0.6) return 2;
        return 1;
    }, [correctCount, questions.length]);

    /* ──────────────────────────────────────
       VIEW: SETUP
    ────────────────────────────────────── */
    if (view === 'setup') {
        return (
            <div className="sm-page">
                <div className="container">
                    <Link to="/games" className="sm-back-link">← Back to Games</Link>

                    <div className="sm-hero">
                        <div className="sm-hero-shapes" aria-hidden="true">
                            <svg width="60" height="60" viewBox="0 0 60 60"><rect x="10" y="10" width="18" height="18" rx="4" fill="#6366f1" /><rect x="10" y="32" width="18" height="18" rx="4" fill="#6366f1" /><rect x="32" y="32" width="18" height="18" rx="4" fill="#6366f1" /></svg>
                            <svg width="60" height="60" viewBox="0 0 60 60" style={{ transform: 'rotate(90deg)' }}><rect x="10" y="10" width="18" height="18" rx="4" fill="#f59e0b" /><rect x="10" y="32" width="18" height="18" rx="4" fill="#f59e0b" /><rect x="32" y="32" width="18" height="18" rx="4" fill="#f59e0b" /></svg>
                        </div>
                        <h1>Shape Match</h1>
                        <p>Can you spot how the shape has been transformed? Rotate, flip and match — train your spatial brain!</p>
                    </div>

                    <div className="sm-diff-grid">
                        {Object.entries(DIFFICULTY).map(([key, d]) => (
                            <button
                                key={key}
                                className={`sm-diff-card ${selectedDifficulty === key ? 'selected' : ''}`}
                                style={{ '--diff-color': d.color }}
                                onClick={() => setSelectedDifficulty(key)}
                            >
                                <span className="sm-diff-icon">{d.icon}</span>
                                <span className="sm-diff-label">{d.label}</span>
                                <span className="sm-diff-meta">{d.questions} questions · 4 options · {d.transforms.length} transforms</span>
                            </button>
                        ))}
                    </div>

                    {/* Preview the selected difficulty */}
                    <div className="sm-preview-box">
                        <p className="sm-preview-title">Transforms you'll see in <strong>{diff.label}</strong> mode:</p>
                        <div className="sm-transform-pills">
                            {diff.transforms.map(tk => (
                                <span key={tk} className="sm-transform-pill" style={{ background: diff.color + '22', color: diff.color }}>
                                    {TRANSFORMS[tk].label}
                                </span>
                            ))}
                        </div>
                    </div>

                    <button className="sm-start-btn" onClick={() => startGame(selectedDifficulty)}>
                        Start Game ▶
                    </button>
                </div>
            </div>
        );
    }

    /* ──────────────────────────────────────
       VIEW: PLAYING
    ────────────────────────────────────── */
    if (view === 'playing' && q) {
        const diffColor = DIFFICULTY[selectedDifficulty].color;

        return (
            <div className="sm-page sm-page-game">
                {/* Top bar */}
                <div className="sm-top-bar">
                    <div className="container sm-bar-inner">
                        <button className="sm-quit" onClick={() => setView('setup')} aria-label="Quit">✕</button>
                        <div className="sm-bar-info">
                            <span className="sm-bar-label" style={{ color: diffColor }}>{DIFFICULTY[selectedDifficulty].label}</span>
                            <span className="sm-bar-q">{currentIdx + 1} / {questions.length}</span>
                        </div>
                        <div className="sm-bar-right">
                            {streak >= 2 && <span className="sm-streak-badge">🔥 {streak}</span>}
                            <div className="sm-bar-track">
                                <div className="sm-bar-fill" style={{ width: `${progress * 100}%`, background: diffColor }} />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Game card */}
                <div className="container sm-game-area">
                    <div className={`sm-card ${answered === 'correct' ? 'sm-card-correct' : answered === 'wrong' ? 'sm-card-wrong' : ''}`}>
                        {/* Transform label */}
                        <div className="sm-transform-label">
                            <span className="sm-transform-tag" style={{ background: diffColor + '22', color: diffColor }}>Transform</span>
                            <p className="sm-transform-text">{q.transformLabel}</p>
                        </div>

                        {/* Shape display — always horizontal, sizes controlled by CSS */}
                        <div className="sm-shapes-row">
                            <div className="sm-shape-panel">
                                <p className="sm-panel-label">Original</p>
                                <div className="sm-shape-box sm-shape-box-source">
                                    <ShapeGrid grid={q.base} color={diffColor} animate />
                                </div>
                            </div>

                            <div className="sm-arrow-col">
                                <svg viewBox="0 0 32 32" fill="none" className="sm-arrow-svg">
                                    <path d="M4 16h18M16 8l10 8-10 8" stroke={diffColor} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>

                            <div className="sm-shape-panel">
                                <p className="sm-panel-label">{answered ? 'Answer' : 'Result'}</p>
                                {answered ? (
                                    <div className="sm-shape-box sm-shape-box-source sm-shape-box-reveal">
                                        <ShapeGrid grid={q.correct} color={answered === 'correct' ? '#22c55e' : '#ef4444'} />
                                    </div>
                                ) : (
                                    <div className="sm-shape-box sm-shape-box-source sm-shape-box-hidden">
                                        <span className="sm-question-mark">?</span>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Hint */}
                        {showHint && (
                            <div className="sm-hint-box">
                                <span className="sm-hint-label">💡 Hint</span>
                                <p className="sm-hint-text">{q.transformHint}</p>
                            </div>
                        )}

                        {/* Feedback */}
                        {answered && (
                            <div className={`sm-feedback ${answered}`}>
                                {answered === 'correct' ? '✅ Correct! Great spatial thinking!' : '❌ Not quite — see the correct result above.'}
                            </div>
                        )}

                        {/* Choices */}
                        {!answered && (
                            <div className="sm-choices">
                                <p className="sm-choices-label">Which result is correct?</p>
                                <div className={`sm-choices-grid sm-choices-${q.options.length}`}>
                                    {q.options.map((opt, i) => (
                                        <button
                                            key={i}
                                            className={`sm-choice-btn ${chosenIdx === i ? 'chosen' : ''}`}
                                            onClick={() => handleChoice(i)}
                                        >
                                            <div className="sm-choice-shape">
                                                <ShapeGrid grid={opt} color="#1e293b" />
                                            </div>
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}

                        {answered && (
                            <div className="sm-choices">
                                <p className="sm-choices-label">The options were:</p>
                                <div className={`sm-choices-grid sm-choices-${q.options.length}`}>
                                    {q.options.map((opt, i) => {
                                        const isCorrect = i === q.correctIndex;
                                        const wasChosen = i === chosenIdx;
                                        return (
                                            <div
                                                key={i}
                                                className={`sm-choice-btn sm-choice-result ${isCorrect ? 'choice-correct' : wasChosen ? 'choice-wrong' : 'choice-neutral'}`}
                                            >
                                                <div className="sm-choice-shape">
                                                    <ShapeGrid
                                                        grid={opt}
                                                        color={isCorrect ? '#22c55e' : wasChosen ? '#ef4444' : '#94a3b8'}
                                                    />
                                                </div>
                                                {isCorrect && <span className="sm-choice-checkmark">✓</span>}
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        )}

                        {/* Bottom actions */}
                        <div className="sm-card-actions">
                            {!answered && (
                                <button className="sm-hint-btn" onClick={() => setShowHint(h => !h)}>
                                    {showHint ? 'Hide hint' : '💡 Need a hint?'}
                                </button>
                            )}
                            {answered && (
                                <button className="sm-next-btn" style={{ background: diffColor }} onClick={handleNext}>
                                    {currentIdx + 1 >= questions.length ? 'See Results 🏁' : 'Next Shape →'}
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    /* ──────────────────────────────────────
       VIEW: RESULTS
    ────────────────────────────────────── */
    if (view === 'results') {
        const pct = Math.round((correctCount / questions.length) * 100);

        return (
            <div className="sm-page">
                <div className="container">
                    <div className="sm-results-card">
                        <div className="sm-results-emoji">{stars === 3 ? '🏆' : stars === 2 ? '🎉' : '🌱'}</div>
                        <h2 className="sm-results-title">
                            {stars === 3 ? 'Outstanding!' : stars === 2 ? 'Well Done!' : 'Keep Practising!'}
                        </h2>
                        <div className="sm-stars">
                            {[1, 2, 3].map(s => (
                                <span key={s} className={`sm-star ${s <= stars ? 'sm-star-lit' : ''}`}>⭐</span>
                            ))}
                        </div>
                        <p className="sm-results-sub">{DIFFICULTY[selectedDifficulty].label} Mode</p>

                        <div className="sm-results-stats">
                            <div className="sm-stat">
                                <span className="sm-stat-val">{correctCount}/{questions.length}</span>
                                <span className="sm-stat-label">Correct</span>
                            </div>
                            <div className="sm-stat">
                                <span className="sm-stat-val">{pct}%</span>
                                <span className="sm-stat-label">Accuracy</span>
                            </div>
                            <div className="sm-stat">
                                <span className="sm-stat-val">🔥 {bestStreak}</span>
                                <span className="sm-stat-label">Best Streak</span>
                            </div>
                        </div>

                        {/* Per-question breakdown */}
                        <div className="sm-results-breakdown">
                            {results.map((r, i) => (
                                <span key={i} className={`sm-result-dot ${r.correct ? 'dot-correct' : 'dot-wrong'}`} title={`Q${i + 1}`} />
                            ))}
                        </div>

                        <div className="sm-results-actions">
                            <button className="sm-btn sm-btn-primary" onClick={() => startGame(selectedDifficulty)}>
                                🔄 Play Again
                            </button>
                            <button className="sm-btn sm-btn-secondary" onClick={() => setView('setup')}>
                                Change Difficulty
                            </button>
                            <Link to="/games" className="sm-btn sm-btn-ghost">← All Games</Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return null;
}
