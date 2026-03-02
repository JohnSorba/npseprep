import { useState, useCallback, useMemo } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/NumberSequences.css';

/* ═══════════════════════════════════════════════════
   HELPERS
   ═══════════════════════════════════════════════════ */
function rnd(min, max) { return Math.floor(Math.random() * (max - min + 1)) + min; }
function pick(arr) { return arr[Math.floor(Math.random() * arr.length)]; }
function round2(n) { return Math.round(n * 100) / 100; }
function fmt(n) {
    if (typeof n !== 'number') return String(n);
    if (Number.isInteger(n)) return String(n);
    return round2(n).toFixed(round2(n) === Math.round(n) ? 0 : (String(round2(n)).split('.')[1] || '').length);
}

/* ═══════════════════════════════════════════════════
   SEQUENCE GENERATORS — one per level, progressive
   ═══════════════════════════════════════════════════ */
const GENERATORS = {

    // ── Level 1 ── Simple Count-Up / Count-Down (diff 1–5, small start)
    1: () => {
        const diff = rnd(1, 5) * (Math.random() > 0.4 ? 1 : -1);
        const start = diff > 0 ? rnd(1, 10) : rnd(20, 40);
        const seq = Array.from({ length: 7 }, (_, i) => start + i * diff);
        const hi = rnd(1, 5);
        return {
            sequence: seq.map(fmt), hiddenIndex: hi, answer: fmt(seq[hi]),
            type: 'Count Up & Down',
            explanation: `Each number ${diff > 0 ? 'increases' : 'decreases'} by ${Math.abs(diff)}. Starting at ${start}: just keep ${diff > 0 ? 'adding' : 'subtracting'} ${Math.abs(diff)}.`,
            isText: false,
        };
    },

    // ── Level 2 ── Arithmetic (larger numbers, mixed ±)
    2: () => {
        const diff = rnd(3, 20) * (Math.random() > 0.5 ? 1 : -1);
        const start = diff > 0 ? rnd(2, 30) : rnd(50, 120);
        const seq = Array.from({ length: 7 }, (_, i) => start + i * diff);
        const hi = rnd(1, 5);
        return {
            sequence: seq.map(fmt), hiddenIndex: hi, answer: fmt(seq[hi]),
            type: 'Arithmetic',
            explanation: `This arithmetic sequence changes by ${diff > 0 ? '+' + diff : diff} each step. Start: ${start} → ${start + diff} → ${start + 2 * diff}…`,
            isText: false,
        };
    },

    // ── Level 3 ── Geometric × 2/3/4 or ÷ 2
    3: () => {
        const ratio = pick([2, 3, 4, 0.5]);
        const start = ratio < 1 ? rnd(32, 256) : rnd(1, 5);
        const seq = Array.from({ length: 6 }, (_, i) => round2(start * Math.pow(ratio, i)));
        const hi = rnd(1, 4);
        const op = ratio >= 1 ? `× ${ratio}` : `÷ ${1 / ratio}`;
        return {
            sequence: seq.map(fmt), hiddenIndex: hi, answer: fmt(seq[hi]),
            type: 'Geometric',
            explanation: `Geometric sequence — each term is ${op} the previous. ${start} ${op} = ${fmt(start * ratio)}, then ${fmt(start * ratio)} ${op} = ${fmt(start * ratio * ratio)}.`,
            isText: false,
        };
    },

    // ── Level 4 ── Perfect Squares & Cubes (mixed)
    4: () => {
        const isCube = Math.random() > 0.5;
        const offset = rnd(0, 4);
        const seq = Array.from({ length: 6 }, (_, i) =>
            isCube ? (i + offset + 1) ** 3 : (i + offset + 1) ** 2);
        const hi = rnd(1, 4);
        return {
            sequence: seq.map(fmt), hiddenIndex: hi, answer: fmt(seq[hi]),
            type: isCube ? 'Perfect Cubes' : 'Perfect Squares',
            explanation: isCube
                ? `These are perfect cubes: n³ in order. ${offset + 1}³=${(offset + 1) ** 3}, ${offset + 2}³=${(offset + 2) ** 3}, ${offset + 3}³=${(offset + 3) ** 3}…`
                : `These are perfect squares: n² in order. ${offset + 1}²=${(offset + 1) ** 2}, ${offset + 2}²=${(offset + 2) ** 2}, ${offset + 3}²=${(offset + 3) ** 3}…`,
            isText: false,
        };
    },

    // ── Level 5 ── Fibonacci & Tribonacci
    5: () => {
        const isTri = Math.random() > 0.5;
        const a = rnd(1, 6), b = rnd(1, 6);
        let seq;
        if (isTri) {
            const c = rnd(1, 6);
            seq = [a, b, c];
            while (seq.length < 8) seq.push(seq.at(-1) + seq.at(-2) + seq.at(-3));
            seq.length = 8;
        } else {
            seq = [a, b];
            while (seq.length < 8) seq.push(seq.at(-1) + seq.at(-2));
            seq.length = 7;
        }
        const hi = isTri ? rnd(3, 6) : rnd(2, 5);
        return {
            sequence: seq.map(fmt), hiddenIndex: hi, answer: fmt(seq[hi]),
            type: isTri ? 'Tribonacci' : 'Fibonacci',
            explanation: isTri
                ? `Tribonacci: each number = sum of the three before it. ${a}+${b}+${c}=${a + b + c}, then ${b}+${c}+${a + b + c}=${b + c + a + b + c}…`
                : `Fibonacci: each number = sum of the two before it. ${a}+${b}=${a + b}, ${b}+${a + b}=${b + a + b}…`,
            isText: false,
        };
    },

    // ── Level 6 ── Decimal Arithmetic (tenths & hundredths)
    6: () => {
        const steps = [0.1, 0.2, 0.25, 0.5, 1.5, 0.3, 0.4];
        const diff = pick(steps) * (Math.random() > 0.5 ? 1 : -1);
        const start = round2(rnd(1, 15) + pick([0, 0.1, 0.2, 0.25, 0.5, 0.75]));
        const seq = Array.from({ length: 7 }, (_, i) => round2(start + i * diff));
        const hi = rnd(1, 5);
        return {
            sequence: seq.map(fmt), hiddenIndex: hi, answer: fmt(seq[hi]),
            type: 'Decimal Sequence',
            explanation: `A decimal arithmetic sequence — each number ${diff > 0 ? 'increases' : 'decreases'} by ${Math.abs(diff)}. Decimals work just like whole numbers, just watch the decimal point!`,
            isText: false,
        };
    },

    // ── Level 7 ── Square Roots & Surds (show √n)
    7: () => {
        const perfectSqs = [1, 4, 9, 16, 25, 36, 49, 64, 81, 100, 121, 144];
        const startIdx = rnd(0, 6);
        const seq = perfectSqs.slice(startIdx, startIdx + 6);
        const rootSeq = seq.map(n => ({ val: n, display: `${Math.sqrt(n)}` }));
        // Show as √n labels OR show roots as numbers
        const showRoots = Math.random() > 0.5;
        const displaySeq = showRoots
            ? seq.map((n, i) => `√${n} = ${Math.sqrt(n)}`)
            : seq.map(n => fmt(Math.sqrt(n)));
        const answerRaw = showRoots ? `√${seq[rnd(1, 4)]} = ${Math.sqrt(seq[rnd(1, 4)])}` : fmt(Math.sqrt(seq[rnd(1, 4)]));
        const hi = rnd(1, 4);
        const answerVal = showRoots ? `${Math.sqrt(seq[hi])}` : fmt(Math.sqrt(seq[hi]));
        return {
            sequence: displaySeq, hiddenIndex: hi, answer: answerVal,
            type: 'Square Roots',
            explanation: `Square roots of perfect squares: √1=1, √4=2, √9=3, √16=4… Each root is the number that, when squared, gives the original. The pattern here goes up by ${Math.sqrt(seq[1]) - Math.sqrt(seq[0])} each step.`,
            isText: true,
        };
    },

    // ── Level 8 ── Mixed & Alternating Advanced (two-rule interleaved + negatives)
    8: () => {
        const mode = pick(['negatives', 'two-strand', 'multiply-add', 'growing-doubles']);
        if (mode === 'negatives') {
            const start = rnd(-30, -5), diff = rnd(3, 10);
            const seq = Array.from({ length: 7 }, (_, i) => start + i * diff);
            const hi = rnd(1, 5);
            return {
                sequence: seq.map(fmt), hiddenIndex: hi, answer: fmt(seq[hi]),
                type: 'Negative Numbers',
                explanation: `This sequence starts negative and adds ${diff} each step. Even when numbers are negative, arithmetic rules still apply: ${start} + ${diff} = ${start + diff}.`,
                isText: false,
            };
        }
        if (mode === 'two-strand') {
            const sA = rnd(2, 20), dA = rnd(3, 10), sB = rnd(2, 20), dB = rnd(3, 10);
            const seq = Array.from({ length: 8 }, (_, i) =>
                i % 2 === 0 ? sA + Math.floor(i / 2) * dA : sB + Math.floor(i / 2) * dB);
            const hi = pick([1, 3, 5, 7]);
            return {
                sequence: seq.map(fmt), hiddenIndex: hi, answer: fmt(seq[hi]),
                type: 'Two-Strand',
                explanation: `Two interleaved sequences! Even positions: ${sA}, ${sA + dA}, ${sA + 2 * dA}… (add ${dA}). Odd positions: ${sB}, ${sB + dB}… (add ${dB}).`,
                isText: false,
            };
        }
        if (mode === 'multiply-add') {
            // Each term = prev × r + c
            const r = rnd(2, 3), c = rnd(1, 5), start = rnd(1, 5);
            const seq = [start];
            while (seq.length < 7) seq.push(seq.at(-1) * r + c);
            const hi = rnd(1, 5);
            return {
                sequence: seq.map(fmt), hiddenIndex: hi, answer: fmt(seq[hi]),
                type: 'Multiply + Add',
                explanation: `Each term = previous × ${r} then + ${c}. So ${start} → ${start * r + c} → ${(start * r + c) * r + c}… A two-step rule!`,
                isText: false,
            };
        }
        // growing-doubles: differences double each time
        const start = rnd(2, 10), firstDiff = rnd(1, 3);
        const seq = [start];
        let d = firstDiff;
        while (seq.length < 7) { seq.push(seq.at(-1) + d); d *= 2; }
        const hi = rnd(1, 5);
        return {
            sequence: seq.map(fmt), hiddenIndex: hi, answer: fmt(seq[hi]),
            type: 'Doubling Gaps',
            explanation: `The gaps between terms double each time! Differences: ${firstDiff}, ${firstDiff * 2}, ${firstDiff * 4}, ${firstDiff * 8}… This creates rapid growth.`,
            isText: false,
        };
    },
};

/* ═══════════════════════════════════════════════════
   LEVEL CONFIG (8 levels)
   ═══════════════════════════════════════════════════ */
const LEVELS = [
    { key: 'l1', label: 'Level 1', sublabel: 'Count Up & Down', icon: '1️⃣', color: '#22c55e', questions: 6, genKeys: [1], badge: 'Beginner' },
    { key: 'l2', label: 'Level 2', sublabel: 'Arithmetic', icon: '2️⃣', color: '#84cc16', questions: 7, genKeys: [1, 2], badge: 'Easy' },
    { key: 'l3', label: 'Level 3', sublabel: 'Geometric', icon: '3️⃣', color: '#14b8a6', questions: 8, genKeys: [2, 3], badge: 'Easy+' },
    { key: 'l4', label: 'Level 4', sublabel: 'Squares & Cubes', icon: '4️⃣', color: '#3b82f6', questions: 8, genKeys: [2, 3, 4], badge: 'Medium' },
    { key: 'l5', label: 'Level 5', sublabel: 'Fibonacci', icon: '5️⃣', color: '#6366f1', questions: 9, genKeys: [3, 4, 5], badge: 'Medium+' },
    { key: 'l6', label: 'Level 6', sublabel: 'Decimals', icon: '6️⃣', color: '#a855f7', questions: 9, genKeys: [4, 5, 6], badge: 'Hard' },
    { key: 'l7', label: 'Level 7', sublabel: 'Square Roots', icon: '7️⃣', color: '#ec4899', questions: 10, genKeys: [5, 6, 7], badge: 'Hard+' },
    { key: 'l8', label: 'Level 8', sublabel: 'Mixed & Negatives', icon: '8️⃣', color: '#f97316', questions: 10, genKeys: [6, 7, 8], badge: 'Expert' },
];
const LEVEL_MAP = Object.fromEntries(LEVELS.map(l => [l.key, l]));

/* ═══════════════════════════════════════════════════
   QUESTION BUILDER
   ═══════════════════════════════════════════════════ */
function generateQuestion(levelKey) {
    const lvl = LEVEL_MAP[levelKey];
    const genKey = pick(lvl.genKeys);
    const q = GENERATORS[genKey]();

    // Build distractors appropriate to the answer type
    const answerNum = parseFloat(q.answer);
    const distractors = new Set();
    const baseOffsets = q.isText
        ? [1, -1, 2, -2, 3, 0.5, -0.5]
        : (Math.abs(answerNum) < 5
            ? [-2, -1, 1, 2, 3, -3, 4, -4]
            : [-answerNum * 0.2, answerNum * 0.2, -answerNum * 0.3, answerNum * 0.15, 5, -5, 10, -10].map(Math.round));

    let attempts = 0;
    while (distractors.size < 3 && attempts < 60) {
        attempts++;
        const off = pick(baseOffsets);
        const v = round2(answerNum + off);
        const fv = fmt(v);
        if (fv !== q.answer && v !== 0 && !distractors.has(fv)) distractors.add(fv);
    }
    // fallback if not enough distractors
    let extra = 1;
    while (distractors.size < 3) {
        const fv = fmt(answerNum + extra);
        if (fv !== q.answer) distractors.add(fv);
        extra++;
    }

    const allOptions = [q.answer, ...[...distractors]].sort(() => Math.random() - 0.5);
    return { ...q, options: allOptions, correctIndex: allOptions.indexOf(q.answer) };
}

function buildSession(levelKey) {
    return Array.from({ length: LEVEL_MAP[levelKey].questions }, () => generateQuestion(levelKey));
}

/* ═══════════════════════════════════════════════════
   SEQUENCE DISPLAY
   ═══════════════════════════════════════════════════ */
function SequenceDisplay({ sequence, hiddenIndex, answered, revealValue, accentColor }) {
    return (
        <div className="ns-sequence-wrap">
            <div className="ns-sequence">
                {sequence.map((num, i) => {
                    const isHidden = i === hiddenIndex;
                    const revealed = isHidden && answered;
                    return (
                        <div key={i} className="ns-seq-item">
                            <div
                                className={`ns-seq-num ${isHidden ? (revealed ? 'ns-seq-revealed' : 'ns-seq-hidden') : 'ns-seq-visible'}`}
                                style={isHidden ? { borderColor: accentColor, color: revealed ? '#22c55e' : accentColor } : {}}
                            >
                                {isHidden && !revealed ? '?' : (revealed ? revealValue : num)}
                            </div>
                            {i < sequence.length - 1 && <span className="ns-seq-arrow">→</span>}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

/* ═══════════════════════════════════════════════════
   MAIN COMPONENT
   ═══════════════════════════════════════════════════ */
export default function NumberSequences() {
    const [view, setView] = useState('setup');
    const [levelKey, setLevelKey] = useState('l1');
    const [questions, setQuestions] = useState([]);
    const [currentIdx, setCurrentIdx] = useState(0);
    const [answered, setAnswered] = useState(null);
    const [chosenIdx, setChosenIdx] = useState(null);
    const [results, setResults] = useState([]);
    const [streak, setStreak] = useState(0);
    const [bestStreak, setBestStreak] = useState(0);

    const lvl = LEVEL_MAP[levelKey];
    const q = questions[currentIdx];
    const correctCount = results.filter(r => r.correct).length;
    const progress = questions.length > 0 ? currentIdx / questions.length : 0;

    const startGame = useCallback((lk) => {
        setQuestions(buildSession(lk));
        setCurrentIdx(0); setAnswered(null); setChosenIdx(null);
        setResults([]); setStreak(0); setBestStreak(0);
        setLevelKey(lk); setView('playing');
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

    /* ── SETUP ── */
    if (view === 'setup') return (
        <div className="ns-page">
            <div className="container">
                <Link to="/games" className="ns-back-link">← Back to Games</Link>
                <div className="ns-hero">
                    <div className="ns-hero-strip" aria-hidden="true">
                        {[2, 4, 8, '?', 32].map((n, i) => <span key={i} className={`ns-hero-num ${n === '?' ? 'ns-hero-num-q' : ''}`}>{n}</span>)}
                    </div>
                    <h1>Number Sequences</h1>
                    <p>8 levels from simple counting to square roots, decimals, Fibonacci, and beyond. Find the hidden number!</p>
                </div>

                <div className="ns-levels-grid">
                    {LEVELS.map(l => (
                        <button
                            key={l.key}
                            className={`ns-level-card ${levelKey === l.key ? 'selected' : ''}`}
                            style={{ '--diff-color': l.color }}
                            onClick={() => setLevelKey(l.key)}
                        >
                            <span className="ns-level-badge" style={{ background: l.color + '22', color: l.color }}>{l.badge}</span>
                            <span className="ns-level-icon">{l.icon}</span>
                            <span className="ns-level-label">{l.label}</span>
                            <span className="ns-level-sub">{l.sublabel}</span>
                            <span className="ns-level-meta">{l.questions} questions</span>
                        </button>
                    ))}
                </div>

                <button className="ns-start-btn" style={{ background: lvl.color }} onClick={() => startGame(levelKey)}>
                    Start {lvl.label} ▶
                </button>
            </div>
        </div>
    );

    /* ── PLAYING ── */
    if (view === 'playing' && q) {
        const ac = lvl.color;
        return (
            <div className="ns-page ns-page-game">
                <div className="ns-top-bar">
                    <div className="container ns-bar-inner">
                        <button className="ns-quit" onClick={() => setView('setup')}>✕</button>
                        <div className="ns-bar-info">
                            <span className="ns-bar-label" style={{ color: ac }}>{lvl.label} — {lvl.sublabel}</span>
                            <span className="ns-bar-q">{currentIdx + 1} / {questions.length}</span>
                        </div>
                        <div className="ns-bar-right">
                            {streak >= 2 && <span className="ns-streak-badge">🔥 {streak}</span>}
                            <div className="ns-bar-track"><div className="ns-bar-fill" style={{ width: `${progress * 100}%`, background: ac }} /></div>
                        </div>
                    </div>
                </div>

                <div className="container ns-game-area">
                    <div className={`ns-card ${answered === 'correct' ? 'ns-card-correct' : answered === 'wrong' ? 'ns-card-wrong' : ''}`}>
                        <div className="ns-type-row">
                            <span className="ns-type-tag" style={{ background: ac + '22', color: ac }}>{q.type}</span>
                            <p className="ns-prompt">What is the missing number?</p>
                        </div>
                        <SequenceDisplay sequence={q.sequence} hiddenIndex={q.hiddenIndex} answered={answered} revealValue={q.answer} accentColor={ac} />

                        {answered && (
                            <div className={`ns-feedback ${answered}`}>
                                {answered === 'correct' ? '✅ Correct!' : `❌ The answer is ${q.answer}.`}
                                <p className="ns-explain">{q.explanation}</p>
                            </div>
                        )}

                        <div className="ns-choices">
                            <p className="ns-choices-label">{answered ? 'The options were:' : 'Choose the missing number:'}</p>
                            <div className="ns-choices-grid">
                                {q.options.map((opt, i) => {
                                    const isCorrect = i === q.correctIndex;
                                    const wasChosen = i === chosenIdx;
                                    let cls = 'ns-choice-btn';
                                    if (answered) cls += isCorrect ? ' ns-choice-correct' : wasChosen ? ' ns-choice-wrong' : ' ns-choice-neutral';
                                    else cls += wasChosen ? ' ns-chosen' : '';
                                    return (<button key={i} className={cls} onClick={() => handleChoice(i)} disabled={!!answered}>{opt}</button>);
                                })}
                            </div>
                        </div>

                        {answered && (
                            <div className="ns-card-actions">
                                <button className="ns-next-btn" style={{ background: ac }} onClick={handleNext}>
                                    {currentIdx + 1 >= questions.length ? 'See Results 🏁' : 'Next Sequence →'}
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
        const nextLevelIdx = LEVELS.findIndex(l => l.key === levelKey) + 1;
        const nextLevel = nextLevelIdx < LEVELS.length ? LEVELS[nextLevelIdx] : null;
        return (
            <div className="ns-page">
                <div className="container">
                    <div className="ns-results-card">
                        <div className="ns-results-emoji">{stars === 3 ? '🧮' : stars === 2 ? '🎉' : '🌱'}</div>
                        <h2>{stars === 3 ? 'Number Wizard!' : stars === 2 ? 'Well Done!' : 'Keep Practising!'}</h2>
                        <div className="ns-stars">{[1, 2, 3].map(s => <span key={s} className={`ns-star ${s <= stars ? 'ns-star-lit' : ''}`}>⭐</span>)}</div>
                        <p className="ns-results-sub">{lvl.label} — {lvl.sublabel}</p>
                        <div className="ns-results-stats">
                            <div className="ns-stat"><span className="ns-stat-val">{correctCount}/{questions.length}</span><span className="ns-stat-label">Correct</span></div>
                            <div className="ns-stat"><span className="ns-stat-val">{pct}%</span><span className="ns-stat-label">Accuracy</span></div>
                            <div className="ns-stat"><span className="ns-stat-val">🔥 {bestStreak}</span><span className="ns-stat-label">Best Streak</span></div>
                        </div>
                        <div className="ns-results-breakdown">{results.map((r, i) => <span key={i} className={`ns-result-dot ${r.correct ? 'dot-correct' : 'dot-wrong'}`} />)}</div>
                        <div className="ns-results-actions">
                            <button className="ns-btn ns-btn-primary" onClick={() => startGame(levelKey)}>🔄 Play Again</button>
                            {nextLevel && stars >= 2 && (
                                <button className="ns-btn ns-btn-next" style={{ background: nextLevel.color }} onClick={() => startGame(nextLevel.key)}>
                                    {nextLevel.icon} Next: {nextLevel.label} — {nextLevel.sublabel} →
                                </button>
                            )}
                            <button className="ns-btn ns-btn-secondary" onClick={() => setView('setup')}>All Levels</button>
                            <Link to="/games" className="ns-btn ns-btn-ghost">← All Games</Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    return null;
}
