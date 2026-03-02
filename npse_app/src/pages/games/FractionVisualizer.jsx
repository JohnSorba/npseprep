import { useState, useCallback, useMemo } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/FractionVisualizer.css';

/* ═══════════════════════════════════════════════════
   HELPERS
   ═══════════════════════════════════════════════════ */
function rnd(min, max) { return Math.floor(Math.random() * (max - min + 1)) + min; }
function pick(arr) { return arr[Math.floor(Math.random() * arr.length)]; }
function gcd(a, b) { return b === 0 ? a : gcd(b, a % b); }
function lcm(a, b) { return (a * b) / gcd(a, b); }
function simplify(n, d) { const g = gcd(Math.abs(n), Math.abs(d)); return { n: n / g, d: d / g }; }
function fracStr(n, d) { const s = simplify(n, d); return `${s.n}/${s.d}`; }
function fracEq(n1, d1, n2, d2) { return n1 * d2 === n2 * d1; }

/* ═══════════════════════════════════════════════════
   PIE CHART RENDERER
   ═══════════════════════════════════════════════════ */
function PieChart({ numerator, denominator, size = 100, color = '#6366f1' }) {
    const r = size / 2 - 4;
    const cx = size / 2, cy = size / 2;
    const filled = numerator / denominator;
    const angle = filled * 360;

    function polarToCart(cx, cy, r, angleDeg) {
        const rad = ((angleDeg - 90) * Math.PI) / 180;
        return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
    }

    let slicePath = '';
    if (filled >= 1) {
        slicePath = `M ${cx} ${cy} m -${r} 0 a ${r} ${r} 0 1 1 ${r * 2} 0 a ${r} ${r} 0 1 1 -${r * 2} 0`;
    } else if (filled > 0) {
        const start = polarToCart(cx, cy, r, 0);
        const end = polarToCart(cx, cy, r, angle);
        const large = angle > 180 ? 1 : 0;
        slicePath = `M ${cx} ${cy} L ${start.x} ${start.y} A ${r} ${r} 0 ${large} 1 ${end.x} ${end.y} Z`;
    }

    const lines = Array.from({ length: denominator }, (_, i) => {
        const a = (i / denominator) * 360;
        const ep = polarToCart(cx, cy, r, a);
        return <line key={i} x1={cx} y1={cy} x2={ep.x} y2={ep.y} stroke="white" strokeWidth={1.5} />;
    });

    return (
        <svg viewBox={`0 0 ${size} ${size}`} width={size} height={size} style={{ display: 'block' }}>
            <circle cx={cx} cy={cy} r={r} fill="#e2e8f0" />
            {filled > 0 && <path d={slicePath} fill={color} />}
            {lines}
            <circle cx={cx} cy={cy} r={r} fill="none" stroke="#94a3b8" strokeWidth={2} />
        </svg>
    );
}

/* ═══════════════════════════════════════════════════
   BAR MODEL RENDERER
   ═══════════════════════════════════════════════════ */
function BarModel({ numerator, denominator, width = 200, height = 38, color = '#6366f1' }) {
    const cellW = width / denominator;
    return (
        <svg viewBox={`0 0 ${width} ${height}`} width={width} height={height} style={{ display: 'block' }}>
            {Array.from({ length: denominator }, (_, i) => (
                <rect key={i} x={i * cellW + 1} y={1} width={cellW - 2} height={height - 2}
                    fill={i < numerator ? color : '#e2e8f0'}
                    rx={3} />
            ))}
            <rect x={0} y={0} width={width} height={height} fill="none" stroke="#94a3b8" strokeWidth={1.5} rx={4} />
        </svg>
    );
}

/* ═══════════════════════════════════════════════════
   FRACTION TYPESET DISPLAY
   ═══════════════════════════════════════════════════ */
function FracTypeset({ n, d, size = 'md', color = '#1e293b' }) {
    const szMap = { sm: { n: 18, d: 14 }, md: { n: 24, d: 18 }, lg: { n: 32, d: 24 } };
    const s = szMap[size] || szMap.md;
    return (
        <span className="fv-typeset-frac" style={{ color }}>
            <span className="fv-typeset-n" style={{ fontSize: s.n }}>{n}</span>
            <span className="fv-typeset-line" />
            <span className="fv-typeset-d" style={{ fontSize: s.d }}>{d}</span>
        </span>
    );
}

/* Mixed number display */
function MixedTypeset({ whole, n, d, color = '#1e293b' }) {
    if (n === 0) return <span style={{ fontSize: 28, fontWeight: 900, color }}>{whole}</span>;
    return (
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4, color }}>
            <span style={{ fontSize: 28, fontWeight: 900 }}>{whole}</span>
            <FracTypeset n={n} d={d} size="md" color={color} />
        </span>
    );
}

/* Visual display (alternates pie/bar) */
function FractionDisplay({ numerator, denominator, mode = 'pie', size = 110, color = '#6366f1' }) {
    if (mode === 'bar') {
        return <BarModel numerator={numerator} denominator={denominator} width={Math.min(220, size * 2)} height={size * 0.32} color={color} />;
    }
    return <PieChart numerator={numerator} denominator={denominator} size={size} color={color} />;
}

/* Number line for decimals/fractions */
function FracNumberLine({ value, max = 1, width = 240 }) {
    const pct = Math.min(Math.max(value / max, 0), 1);
    const h = 36, trackY = 18, markerX = pct * (width - 20) + 10;
    const ticks = Array.from({ length: max * 4 + 1 }, (_, i) => i);
    return (
        <svg viewBox={`0 0 ${width} ${h}`} width={width} height={h} style={{ display: 'block', overflow: 'visible' }}>
            <line x1={10} y1={trackY} x2={width - 10} y2={trackY} stroke="#cbd5e1" strokeWidth={3} strokeLinecap="round" />
            {[0, max].map((v, i) => {
                const x = i === 0 ? 10 : width - 10;
                return <g key={i}><line x1={x} y1={trackY - 6} x2={x} y2={trackY + 6} stroke="#475569" strokeWidth={2} /><text x={x} y={trackY + 17} textAnchor="middle" fontSize={11} fill="#475569" fontWeight="600">{v}</text></g>;
            })}
            <circle cx={markerX} cy={trackY} r={8} fill="#6366f1" />
            <text x={markerX} y={trackY - 14} textAnchor="middle" fontSize={11} fill="#6366f1" fontWeight="800">{value.toFixed(2).replace(/\.?0+$/, '')}</text>
        </svg>
    );
}

/* ═══════════════════════════════════════════════════
   NICE FRACTION POOLS
   ═══════════════════════════════════════════════════ */
const SIMPLE_DENOMS = [2, 3, 4, 5];
const MID_DENOMS = [2, 3, 4, 5, 6, 8];
const ALL_DENOMS = [2, 3, 4, 5, 6, 8, 10];

function niceFrac(pool = MID_DENOMS) {
    const d = pick(pool);
    const n = rnd(1, d - 1);
    return { n, d };
}

function distFrac(n, d, pool = MID_DENOMS) {
    // a clearly different fraction
    let fn, fd;
    let attempts = 0;
    do {
        fd = pick(pool);
        fn = rnd(1, fd - 1);
        attempts++;
    } while (attempts < 30 && fracEq(fn, fd, n, d));
    return { n: fn, d: fd };
}

/* ═══════════════════════════════════════════════════
   QUESTION GENERATORS (8 level types)
   ═══════════════════════════════════════════════════ */

// Level 1 — Identify simple fractions (halves, thirds, quarters)
function genIdentify(mode, pool = SIMPLE_DENOMS) {
    const { n, d } = niceFrac(pool);
    const opts = [{ n, d }];
    while (opts.length < 4) {
        const { n: fn, d: fd } = distFrac(n, d, pool);
        if (!opts.some(o => o.n === fn && o.d === fd)) opts.push({ n: fn, d: fd });
    }
    opts.sort(() => Math.random() - 0.5);
    const ci = opts.findIndex(o => fracEq(o.n, o.d, n, d));
    return {
        type: 'Identify', prompt: 'What fraction does this diagram show?',
        fraction: { n, d }, mode, compare: false, operation: null,
        options: opts, correctIndex: ci, answer: fracStr(n, d),
        explanation: `The shape has ${d} equal parts and ${n} ${n === 1 ? 'is' : 'are'} shaded. That's ${fracStr(n, d)}.`,
        optionType: 'frac',
    };
}

// Level 2 — Compare fractions with visuals
function genCompare(mode) {
    const { n: n1, d: d1 } = niceFrac(MID_DENOMS);
    let { n: n2, d: d2 } = distFrac(n1, d1, MID_DENOMS);
    while (fracEq(n1, d1, n2, d2)) { const f = distFrac(n1, d1, MID_DENOMS); n2 = f.n; d2 = f.d; }
    const v1 = n1 / d1, v2 = n2 / d2;
    const sym = v1 < v2 ? '<' : v1 > v2 ? '>' : '=';
    const opts = ['<', '>', '='];
    return {
        type: 'Compare', prompt: 'Which symbol goes between the two fractions?',
        fractionA: { n: n1, d: d1 }, fractionB: { n: n2, d: d2 },
        mode, compare: true, operation: null,
        options: opts, correctIndex: opts.indexOf(sym), answer: sym,
        explanation: `${n1}/${d1} = ${v1.toFixed(3).replace(/0+$/, '')}, ${n2}/${d2} = ${v2.toFixed(3).replace(/0+$/, '')}. So ${n1}/${d1} ${sym} ${n2}/${d2}.`,
        optionType: 'symbol',
    };
}

// Level 3 — Equivalent fractions
function genEquivalent() {
    const bases = [[1, 2], [1, 3], [2, 3], [1, 4], [3, 4], [1, 5], [2, 5], [3, 5], [1, 6], [5, 6]];
    const [bn, bd] = pick(bases);
    const mult = rnd(2, 5);
    const { n: tn, d: td } = simplify(bn * mult, bd * mult);
    const opts = [{ n: tn, d: td }];
    while (opts.length < 4) {
        const fd = pick(ALL_DENOMS);
        const fn = rnd(1, fd - 1);
        if (!fracEq(fn, fd, bn, bd) && !opts.some(o => fracEq(o.n, o.d, fn, fd))) opts.push({ n: fn, d: fd });
    }
    opts.sort(() => Math.random() - 0.5);
    const ci = opts.findIndex(o => fracEq(o.n, o.d, bn, bd));
    return {
        type: 'Equivalent', prompt: `Which fraction is equivalent to ${bn}/${bd}?`,
        fraction: { n: bn, d: bd }, mode: 'pie', compare: false, operation: null,
        options: opts, correctIndex: ci, answer: fracStr(tn, td),
        explanation: `${bn}/${bd} = ${tn}/${td} — multiply (or divide) both top and bottom by ${mult} to get equivalent fractions.`,
        optionType: 'frac',
    };
}

// Level 4 — Add fractions (same denominator)
function genAddSameDenom() {
    const d = pick([2, 3, 4, 5, 6, 8]);
    let n1 = rnd(1, d - 2), n2;
    do { n2 = rnd(1, d - 1); } while (n1 + n2 > d * 2 || n1 + n2 === 0);
    const sumN = n1 + n2, sumD = d;
    const { n: rn, d: rd } = simplify(sumN, sumD);
    const opts = [{ n: rn, d: rd }];
    while (opts.length < 4) {
        const fn = rnd(1, d + 2), fd = d;
        const s = simplify(fn, fd);
        if (!fracEq(s.n, s.d, rn, rd) && !opts.some(o => fracEq(o.n, o.d, s.n, s.d))) opts.push(s);
    }
    opts.sort(() => Math.random() - 0.5);
    const ci = opts.findIndex(o => fracEq(o.n, o.d, rn, rd));
    return {
        type: 'Add Fractions', prompt: `What is ${n1}/${d} + ${n2}/${d}?`,
        operation: { op: '+', a: { n: n1, d }, b: { n: n2, d } },
        fraction: null, mode: 'bar', compare: false,
        options: opts, correctIndex: ci, answer: `${rn}/${rd}`,
        explanation: `Same denominator — just add the tops: ${n1} + ${n2} = ${sumN}. So ${n1}/${d} + ${n2}/${d} = ${sumN}/${d}${rn !== sumN ? ` = ${rn}/${rd}` : ''}.`,
        optionType: 'frac',
    };
}

// Level 5 — Subtract fractions (same denominator)
function genSubSameDenom() {
    const d = pick([2, 3, 4, 5, 6, 8]);
    let n1 = rnd(2, d), n2;
    do { n2 = rnd(1, n1 - 1); } while (n1 === n2);
    const diffN = n1 - n2;
    const { n: rn, d: rd } = simplify(diffN, d);
    const opts = [{ n: rn, d: rd }];
    while (opts.length < 4) {
        const fn = rnd(0, d), fd = d;
        if (fn === 0) { if (!opts.some(o => o.n === 0)) opts.push({ n: 0, d: 1 }); continue; }
        const s = simplify(fn, fd);
        if (!fracEq(s.n, s.d, rn, rd) && !opts.some(o => fracEq(o.n, o.d, s.n, s.d))) opts.push(s);
    }
    opts.sort(() => Math.random() - 0.5);
    const ci = opts.findIndex(o => fracEq(o.n, o.d, rn, rd));
    return {
        type: 'Subtract Fractions', prompt: `What is ${n1}/${d} − ${n2}/${d}?`,
        operation: { op: '−', a: { n: n1, d }, b: { n: n2, d } },
        fraction: null, mode: 'bar', compare: false,
        options: opts, correctIndex: ci, answer: `${rn}/${rd}`,
        explanation: `Same denominator — subtract the tops: ${n1} − ${n2} = ${diffN}. Result: ${diffN}/${d}${rn !== diffN ? ` = ${rn}/${rd}` : ''}.`,
        optionType: 'frac',
    };
}

// Level 6 — Add fractions (different denominators)
function genAddDiffDenom() {
    const pairs = [[1, 2, 1, 3], [1, 3, 1, 4], [1, 4, 1, 2], [2, 3, 1, 6], [1, 2, 1, 4], [3, 4, 1, 8], [1, 3, 2, 5]];
    const [n1, d1, n2, d2] = pick(pairs);
    const L = lcm(d1, d2);
    const sumN = n1 * (L / d1) + n2 * (L / d2);
    const { n: rn, d: rd } = simplify(sumN, L);
    const opts = [{ n: rn, d: rd }];
    while (opts.length < 4) {
        const fd = pick([4, 6, 8, 10, 12]);
        const fn = rnd(1, fd - 1);
        const s = simplify(fn, fd);
        if (!fracEq(s.n, s.d, rn, rd) && !opts.some(o => fracEq(o.n, o.d, s.n, s.d))) opts.push(s);
    }
    opts.sort(() => Math.random() - 0.5);
    const ci = opts.findIndex(o => fracEq(o.n, o.d, rn, rd));
    return {
        type: 'Add (Diff. Denom.)', prompt: `What is ${n1}/${d1} + ${n2}/${d2}?`,
        operation: { op: '+', a: { n: n1, d: d1 }, b: { n: n2, d: d2 } },
        fraction: null, mode: 'pie', compare: false,
        options: opts, correctIndex: ci, answer: `${rn}/${rd}`,
        explanation: `Find a common denominator: LCM(${d1}, ${d2}) = ${L}. Convert: ${n1}/${d1} = ${n1 * (L / d1)}/${L}, ${n2}/${d2} = ${n2 * (L / d2)}/${L}. Add tops: ${sumN}/${L}${rn !== sumN ? ` = ${rn}/${rd}` : ''}.`,
        optionType: 'frac',
    };
}

// Level 7 — Multiply fractions
function genMultiply() {
    const pool = [[1, 2, 1, 3], [1, 2, 2, 3], [3, 4, 1, 2], [2, 3, 3, 4], [1, 3, 3, 4], [1, 4, 2, 3], [3, 5, 1, 2]];
    const [n1, d1, n2, d2] = pick(pool);
    const { n: rn, d: rd } = simplify(n1 * n2, d1 * d2);
    const opts = [{ n: rn, d: rd }];
    while (opts.length < 4) {
        const fd = pick([6, 8, 10, 12, 15]);
        const fn = rnd(1, fd - 1);
        const s = simplify(fn, fd);
        if (!fracEq(s.n, s.d, rn, rd) && !opts.some(o => fracEq(o.n, o.d, s.n, s.d))) opts.push(s);
    }
    opts.sort(() => Math.random() - 0.5);
    const ci = opts.findIndex(o => fracEq(o.n, o.d, rn, rd));
    return {
        type: 'Multiply Fractions', prompt: `What is ${n1}/${d1} × ${n2}/${d2}?`,
        operation: { op: '×', a: { n: n1, d: d1 }, b: { n: n2, d: d2 } },
        fraction: null, mode: 'pie', compare: false,
        options: opts, correctIndex: ci, answer: `${rn}/${rd}`,
        explanation: `Multiply tops and bottoms separately: ${n1}×${n2} = ${n1 * n2} on top, ${d1}×${d2} = ${d1 * d2} on the bottom. ${n1 * n2}/${d1 * d2}${rn !== n1 * n2 ? ` = ${rn}/${rd}` : ''}.`,
        optionType: 'frac',
    };
}

// Level 8 — Divide fractions (flip & multiply) + mixed numbers
function genDivide() {
    const pool = [[1, 2, 1, 4], [2, 3, 1, 3], [3, 4, 1, 2], [1, 2, 2, 3], [3, 4, 3, 8], [2, 5, 1, 5], [1, 3, 2, 9]];
    const [n1, d1, n2, d2] = pick(pool);
    // a÷b = a × (1/b) = (n1*d2)/(d1*n2)
    const { n: rn, d: rd } = simplify(n1 * d2, d1 * n2);
    const opts = [{ n: rn, d: rd }];
    while (opts.length < 4) {
        const fd = pick([2, 3, 4, 6, 8]);
        const fn = rnd(1, fd + 2);
        const s = simplify(fn, fd);
        if (!fracEq(s.n, s.d, rn, rd) && !opts.some(o => fracEq(o.n, o.d, s.n, s.d))) opts.push(s);
    }
    opts.sort(() => Math.random() - 0.5);
    const ci = opts.findIndex(o => fracEq(o.n, o.d, rn, rd));
    return {
        type: 'Divide Fractions', prompt: `What is ${n1}/${d1} ÷ ${n2}/${d2}?`,
        operation: { op: '÷', a: { n: n1, d: d1 }, b: { n: n2, d: d2 } },
        fraction: null, mode: 'pie', compare: false,
        options: opts, correctIndex: ci, answer: `${rn}/${rd}`,
        explanation: `To divide fractions, flip the second and multiply: ${n1}/${d1} × ${d2}/${n2} = ${n1 * d2}/${d1 * n2}${rn !== n1 * d2 ? ` = ${rn}/${rd}` : ''}.`,
        optionType: 'frac',
    };
}

/* ═══════════════════════════════════════════════════
   8 LEVELS CONFIG
   ═══════════════════════════════════════════════════ */
const LEVELS = [
    { key: 'l1', label: 'Level 1', sublabel: 'Read Fractions', icon: '1️⃣', color: '#22c55e', questions: 6, badge: 'Beginner', gen: () => genIdentify('pie', SIMPLE_DENOMS) },
    { key: 'l2', label: 'Level 2', sublabel: 'Identify (Pie & Bar)', icon: '2️⃣', color: '#84cc16', questions: 6, badge: 'Easy', gen: (i) => genIdentify(i % 2 === 0 ? 'pie' : 'bar', MID_DENOMS) },
    { key: 'l3', label: 'Level 3', sublabel: 'Compare Fractions', icon: '3️⃣', color: '#14b8a6', questions: 7, badge: 'Easy+', gen: (i) => genCompare(i % 2 === 0 ? 'pie' : 'bar') },
    { key: 'l4', label: 'Level 4', sublabel: 'Equivalent Fractions', icon: '4️⃣', color: '#3b82f6', questions: 8, badge: 'Medium', gen: () => genEquivalent() },
    { key: 'l5', label: 'Level 5', sublabel: 'Add (Same Denom.)', icon: '5️⃣', color: '#6366f1', questions: 8, badge: 'Medium+', gen: () => genAddSameDenom() },
    { key: 'l6', label: 'Level 6', sublabel: 'Subtract Fractions', icon: '6️⃣', color: '#a855f7', questions: 9, badge: 'Hard', gen: () => pick([genAddSameDenom, genSubSameDenom])() },
    { key: 'l7', label: 'Level 7', sublabel: 'Add & Multiply', icon: '7️⃣', color: '#ec4899', questions: 9, badge: 'Hard+', gen: () => pick([genAddDiffDenom, genMultiply])() },
    { key: 'l8', label: 'Level 8', sublabel: 'All Operations', icon: '8️⃣', color: '#f97316', questions: 10, badge: 'Expert', gen: () => pick([genAddDiffDenom, genMultiply, genDivide, genEquivalent])() },
];
const LEVEL_MAP = Object.fromEntries(LEVELS.map(l => [l.key, l]));

function buildSession(levelKey) {
    const lvl = LEVEL_MAP[levelKey];
    return Array.from({ length: lvl.questions }, (_, i) => lvl.gen(i));
}

/* ═══════════════════════════════════════════════════
   OPERATION DISPLAY
   ═══════════════════════════════════════════════════ */
function OperationDisplay({ op, a, b, answered, answer }) {
    return (
        <div className="fv-operation-row">
            <FracTypeset n={a.n} d={a.d} size="lg" />
            <span className="fv-op-symbol">{op}</span>
            <FracTypeset n={b.n} d={b.d} size="lg" />
            <span className="fv-op-symbol">=</span>
            <span className={`fv-op-answer ${answered ? (answered === 'correct' ? 'fv-op-correct' : 'fv-op-wrong') : 'fv-op-blank'}`}>
                {answered
                    ? <FracTypeset n={answer.split('/')[0]} d={answer.split('/')[1]} size="lg" color={answered === 'correct' ? '#16a34a' : '#dc2626'} />
                    : '?'}
            </span>
        </div>
    );
}

/* ═══════════════════════════════════════════════════
   OPTION RENDERERS
   ═══════════════════════════════════════════════════ */
function FracOptionBtn({ opt, isCorrect, wasChosen, answered, onClick, disabled }) {
    let cls = 'fv-choice-btn fv-choice-frac-btn';
    if (answered) cls += isCorrect ? ' fv-choice-correct' : wasChosen ? ' fv-choice-wrong' : ' fv-choice-neutral';
    else cls += wasChosen ? ' fv-chosen' : '';
    return (
        <button className={cls} onClick={onClick} disabled={disabled}>
            <span className="fv-frac-display">
                <span className="fv-frac-n">{opt.n}</span>
                <span className="fv-frac-line" />
                <span className="fv-frac-d">{opt.d}</span>
            </span>
            {answered && isCorrect && <span className="fv-opt-tick">✓</span>}
        </button>
    );
}

/* ═══════════════════════════════════════════════════
   MAIN COMPONENT
   ═══════════════════════════════════════════════════ */
export default function FractionVisualizer() {
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
        <div className="fv-page">
            <div className="container">
                <Link to="/games" className="fv-back-link">← Back to Games</Link>
                <div className="fv-hero">
                    <div className="fv-hero-visuals" aria-hidden="true">
                        <PieChart numerator={3} denominator={4} size={80} color="#6366f1" />
                        <PieChart numerator={1} denominator={2} size={80} color="#f59e0b" />
                    </div>
                    <h1>Fraction Visualizer</h1>
                    <p>8 levels from basic identification to adding, subtracting, multiplying and dividing fractions!</p>
                </div>

                <div className="fv-levels-grid">
                    {LEVELS.map(l => (
                        <button
                            key={l.key}
                            className={`fv-level-card ${levelKey === l.key ? 'selected' : ''}`}
                            style={{ '--diff-color': l.color }}
                            onClick={() => setLevelKey(l.key)}
                        >
                            <span className="fv-level-badge" style={{ background: l.color + '22', color: l.color }}>{l.badge}</span>
                            <span className="fv-level-icon">{l.icon}</span>
                            <span className="fv-level-label">{l.label}</span>
                            <span className="fv-level-sub">{l.sublabel}</span>
                            <span className="fv-level-meta">{l.questions} questions</span>
                        </button>
                    ))}
                </div>

                <button className="fv-start-btn" style={{ background: lvl.color }} onClick={() => startGame(levelKey)}>
                    Start {lvl.label} ▶
                </button>
            </div>
        </div>
    );

    /* ── PLAYING ── */
    if (view === 'playing' && q) {
        const ac = lvl.color;
        return (
            <div className="fv-page fv-page-game">
                <div className="fv-top-bar">
                    <div className="container fv-bar-inner">
                        <button className="fv-quit" onClick={() => setView('setup')}>✕</button>
                        <div className="fv-bar-info">
                            <span className="fv-bar-label" style={{ color: ac }}>{lvl.label} — {lvl.sublabel}</span>
                            <span className="fv-bar-q">{currentIdx + 1} / {questions.length}</span>
                        </div>
                        <div className="fv-bar-right">
                            {streak >= 2 && <span className="fv-streak-badge">🔥 {streak}</span>}
                            <div className="fv-bar-track"><div className="fv-bar-fill" style={{ width: `${progress * 100}%`, background: ac }} /></div>
                        </div>
                    </div>
                </div>

                <div className="container fv-game-area">
                    <div className={`fv-card ${answered === 'correct' ? 'fv-card-correct' : answered === 'wrong' ? 'fv-card-wrong' : ''}`}>
                        <div className="fv-type-row">
                            <span className="fv-type-tag" style={{ background: ac + '22', color: ac }}>{q.type}</span>
                            <p className="fv-prompt">{q.prompt}</p>
                        </div>

                        {/* ── Operation display (add/sub/mul/div) ── */}
                        {q.operation && (
                            <OperationDisplay
                                op={q.operation.op}
                                a={q.operation.a}
                                b={q.operation.b}
                                answered={answered}
                                answer={q.answer}
                            />
                        )}

                        {/* ── Single visual (identify / equivalent) ── */}
                        {!q.compare && !q.operation && q.fraction && (
                            <div className="fv-visual-center">
                                <FractionDisplay numerator={q.fraction.n} denominator={q.fraction.d} mode={q.mode} size={120} color={ac} />
                                <p className="fv-mode-label">{q.mode === 'bar' ? 'Bar model' : 'Pie chart'}</p>
                            </div>
                        )}

                        {/* ── Compare visual ── */}
                        {q.compare && (
                            <div className="fv-compare-row">
                                <div className="fv-compare-item">
                                    <FractionDisplay numerator={q.fractionA.n} denominator={q.fractionA.d} mode={q.mode} size={96} color="#6366f1" />
                                    <FracTypeset n={q.fractionA.n} d={q.fractionA.d} size="md" />
                                </div>
                                <span className="fv-compare-blank" style={{ color: ac }}>{answered ? q.answer : '?'}</span>
                                <div className="fv-compare-item">
                                    <FractionDisplay numerator={q.fractionB.n} denominator={q.fractionB.d} mode={q.mode} size={96} color="#f59e0b" />
                                    <FracTypeset n={q.fractionB.n} d={q.fractionB.d} size="md" />
                                </div>
                            </div>
                        )}

                        {/* ── Feedback ── */}
                        {answered && (
                            <div className={`fv-feedback ${answered}`}>
                                {answered === 'correct' ? '✅ Correct!' : `❌ Answer: ${q.answer}`}
                                <p className="fv-explain">{q.explanation}</p>
                            </div>
                        )}

                        {/* ── Choices ── */}
                        <div className="fv-choices">
                            <p className="fv-choices-label">{answered ? 'The options were:' : 'Choose your answer:'}</p>

                            {q.optionType === 'symbol' ? (
                                <div className="fv-choices-grid fv-choices-symbol">
                                    {q.options.map((sym, i) => {
                                        const isCorrect = i === q.correctIndex;
                                        const wasChosen = i === chosenIdx;
                                        let cls = 'fv-choice-btn fv-choice-symbol-btn';
                                        if (answered) cls += isCorrect ? ' fv-choice-correct' : wasChosen ? ' fv-choice-wrong' : ' fv-choice-neutral';
                                        else cls += wasChosen ? ' fv-chosen' : '';
                                        return (
                                            <button key={i} className={cls} onClick={() => handleChoice(i)} disabled={!!answered}>
                                                {sym}
                                                {answered && isCorrect && <span className="fv-opt-tick">✓</span>}
                                            </button>
                                        );
                                    })}
                                </div>
                            ) : (
                                <div className="fv-choices-grid fv-choices-fractions">
                                    {q.options.map((opt, i) => (
                                        <FracOptionBtn
                                            key={i}
                                            opt={opt}
                                            isCorrect={i === q.correctIndex}
                                            wasChosen={i === chosenIdx}
                                            answered={answered}
                                            onClick={() => handleChoice(i)}
                                            disabled={!!answered}
                                        />
                                    ))}
                                </div>
                            )}
                        </div>

                        {answered && (
                            <div className="fv-card-actions">
                                <button className="fv-next-btn" style={{ background: ac }} onClick={handleNext}>
                                    {currentIdx + 1 >= questions.length ? 'See Results 🏁' : 'Next Question →'}
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
            <div className="fv-page">
                <div className="container">
                    <div className="fv-results-card">
                        <div className="fv-results-emoji">{stars === 3 ? '🥧' : stars === 2 ? '🎉' : '🌱'}</div>
                        <h2>{stars === 3 ? 'Fraction Expert!' : stars === 2 ? 'Well Done!' : 'Keep Practising!'}</h2>
                        <div className="fv-stars">{[1, 2, 3].map(s => <span key={s} className={`fv-star ${s <= stars ? 'fv-star-lit' : ''}`}>⭐</span>)}</div>
                        <p className="fv-results-sub">{lvl.label} — {lvl.sublabel}</p>
                        <div className="fv-results-stats">
                            <div className="fv-stat"><span className="fv-stat-val">{correctCount}/{questions.length}</span><span className="fv-stat-label">Correct</span></div>
                            <div className="fv-stat"><span className="fv-stat-val">{pct}%</span><span className="fv-stat-label">Accuracy</span></div>
                            <div className="fv-stat"><span className="fv-stat-val">🔥 {bestStreak}</span><span className="fv-stat-label">Best Streak</span></div>
                        </div>
                        <div className="fv-results-breakdown">{results.map((r, i) => <span key={i} className={`fv-result-dot ${r.correct ? 'dot-correct' : 'dot-wrong'}`} />)}</div>
                        <div className="fv-results-actions">
                            <button className="fv-btn fv-btn-primary" onClick={() => startGame(levelKey)}>🔄 Play Again</button>
                            {nextLevel && stars >= 2 && (
                                <button className="fv-btn fv-btn-next" style={{ background: nextLevel.color }} onClick={() => startGame(nextLevel.key)}>
                                    {nextLevel.icon} {nextLevel.label}: {nextLevel.sublabel} →
                                </button>
                            )}
                            <button className="fv-btn fv-btn-secondary" onClick={() => setView('setup')}>All Levels</button>
                            <Link to="/games" className="fv-btn fv-btn-ghost">← All Games</Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    return null;
}
