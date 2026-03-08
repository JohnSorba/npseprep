import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/ParentDashboard.css';

/* ══════════════════════════════════════════
   DEMO DATA
══════════════════════════════════════════ */
const PARENT = { name: 'Mrs. Koroma', email: 'koroma@example.com', avatar: '👩' };

const SUBSCRIPTION = {
    plan: 'Premium Family',
    status: 'active',
    renewDate: '2026-06-01',
    daysLeft: 86,
    price: 'Le 120,000 / year',
    childSlots: 3,
    childrenUsed: 2,
};

const CHILDREN = [
    {
        id: 1,
        name: 'Aminata Koroma',
        age: 11,
        school: 'Annie Walsh Memorial School',
        class: 'Class 6',
        examYear: 2026,
        avatar: '👧',
        streak: 5,
        overallProgress: 38,
        lastSeen: '2 hours ago',
        rank: 4,
        totalPoints: 2480,
        subjects: [
            { name: 'English', icon: '📖', color: '#9333ea', progress: 45, score: 72 },
            { name: 'Mathematics', icon: '📐', color: '#0c8ce9', progress: 60, score: 81 },
            { name: 'Quantitative', icon: '🔢', color: '#f97316', progress: 25, score: 58 },
            { name: 'Verbal', icon: '💬', color: '#10b981', progress: 30, score: 65 },
            { name: 'General', icon: '🌍', color: '#ec4899', progress: 20, score: 50 },
        ],
        recentActivity: [
            { type: 'quiz', subject: 'Mathematics', score: 81, timeAgo: '2h ago', icon: '📐' },
            { type: 'notes', subject: 'English', topic: 'Nouns & Pronouns', timeAgo: '1d ago', icon: '📖' },
            { type: 'quiz', subject: 'Verbal Aptitude', score: 65, timeAgo: '2d ago', icon: '💬' },
            { type: 'game', subject: 'Word Scramble', result: 'Level 3 cleared', timeAgo: '3d ago', icon: '🎮' },
        ],
        weeklyScores: [55, 62, 58, 70, 75, 72, 81],
    },
    {
        id: 2,
        name: 'Mohamed Koroma',
        age: 10,
        school: 'Annie Walsh Memorial School',
        class: 'Class 5',
        examYear: 2027,
        avatar: '👦',
        streak: 2,
        overallProgress: 15,
        lastSeen: '1 day ago',
        rank: 12,
        totalPoints: 980,
        subjects: [
            { name: 'English', icon: '📖', color: '#9333ea', progress: 20, score: 55 },
            { name: 'Mathematics', icon: '📐', color: '#0c8ce9', progress: 18, score: 60 },
            { name: 'Quantitative', icon: '🔢', color: '#f97316', progress: 10, score: 48 },
            { name: 'Verbal', icon: '💬', color: '#10b981', progress: 12, score: 52 },
            { name: 'General', icon: '🌍', color: '#ec4899', progress: 15, score: 45 },
        ],
        recentActivity: [
            { type: 'quiz', subject: 'Mathematics', score: 60, timeAgo: '1d ago', icon: '📐' },
            { type: 'game', subject: 'Rapid Recall', result: 'Level 2 cleared', timeAgo: '2d ago', icon: '🎮' },
        ],
        weeklyScores: [40, 45, 42, 50, 55, 58, 60],
    },
];

const NOTIFICATIONS = [
    { id: 1, type: 'success', icon: '🎉', title: 'Aminata completed a quiz!', body: 'She scored 81% on Mathematics.', time: '2h ago', unread: true },
    { id: 2, type: 'info', icon: '📈', title: 'Progress milestone', body: 'Aminata mastered 5 topics in Mathematics.', time: '1d ago', unread: true },
    { id: 3, type: 'warning', icon: '⏰', title: 'Subscription reminder', body: 'Your plan renews in 86 days.', time: '2d ago', unread: false },
    { id: 4, type: 'info', icon: '📖', title: 'Mohamed read notes', body: 'He started English Language notes.', time: '3d ago', unread: false },
    { id: 5, type: 'success', icon: '🔥', title: 'Streak alert', body: 'Aminata is on a 5-day learning streak!', time: '3d ago', unread: false },
];

const WORKSHEETS = [
    { id: 1, title: "Today's Daily Worksheet", subject: 'All Subjects', date: '7 Mar 2026', type: 'daily', pages: 4, icon: '📋' },
    { id: 2, title: 'English Language — Week 9', subject: 'English', date: '1 Mar 2026', type: 'subject', pages: 6, icon: '📖' },
    { id: 3, title: 'Mathematics — Week 9', subject: 'Mathematics', date: '1 Mar 2026', type: 'subject', pages: 8, icon: '📐' },
    { id: 4, title: 'Quantitative — Week 8', subject: 'Quantitative', date: '22 Feb 2026', type: 'subject', pages: 5, icon: '🔢' },
    { id: 5, title: 'General Paper — Week 8', subject: 'General', date: '22 Feb 2026', type: 'subject', pages: 5, icon: '🌍' },
    { id: 6, title: 'NPSE Mock Worksheet 2023', subject: 'All Subjects', date: '15 Feb 2026', type: 'mock', pages: 12, icon: '📋' },
];

const PAYMENT_HISTORY = [
    { id: 1, date: '1 Jun 2025', desc: 'Premium Family Plan – Annual', amount: 'Le 120,000', status: 'paid' },
    { id: 2, date: '1 Jun 2024', desc: 'Premium Family Plan – Annual', amount: 'Le 100,000', status: 'paid' },
    { id: 3, date: '1 Jun 2023', desc: 'Basic Plan – Annual', amount: 'Le 60,000', status: 'paid' },
];

const DAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

/* ══════════════════════════════════════════
   HELPERS
══════════════════════════════════════════ */
const scoreColor = (p) => {
    if (p >= 80) return '#1B8A5A';
    if (p >= 65) return '#0c8ce9';
    if (p >= 50) return '#f59e0b';
    return '#ef4444';
};

const ProgressRing = ({ pct, color, size = 64, stroke = 6 }) => {
    const r = (size - stroke) / 2;
    const circ = 2 * Math.PI * r;
    const dash = (pct / 100) * circ;
    return (
        <svg width={size} height={size} style={{ transform: 'rotate(-90deg)' }}>
            <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="#F3F4F6" strokeWidth={stroke} />
            <circle
                cx={size / 2} cy={size / 2} r={r} fill="none"
                stroke={color} strokeWidth={stroke}
                strokeDasharray={`${dash} ${circ}`}
                strokeLinecap="round"
                style={{ transition: 'stroke-dasharray 0.8s ease' }}
            />
        </svg>
    );
};

const MiniBar = ({ val }) => (
    <div className="prt-bar-col">
        <div className="prt-bar-col__fill" style={{ height: `${val}%`, background: scoreColor(val) }} />
        <span className="prt-bar-col__val">{val}</span>
    </div>
);

/* ══════════════════════════════════════════
   TABS
══════════════════════════════════════════ */
const TABS = [
    { id: 'overview', label: 'Overview', icon: '🏠' },
    { id: 'children', label: 'Children', icon: '👧' },
    { id: 'progress', label: 'Progress', icon: '📊' },
    { id: 'worksheets', label: 'Worksheets', icon: '📋' },
    { id: 'subscription', label: 'Subscription', icon: '💳' },
];

/* ══════════════════════════════════════════
   SECTION: OVERVIEW
══════════════════════════════════════════ */
const OverviewSection = ({ setTab, setSelectedChild }) => (
    <div className="par-section">
        {/* Stats row */}
        <div className="par-stats-row">
            {[
                { icon: '👧', val: SUBSCRIPTION.childrenUsed, label: 'Children enrolled', color: '#9333ea' },
                { icon: '📚', val: '38%', label: 'Avg. overall progress', color: '#0c8ce9' },
                { icon: '🔥', val: '5', label: 'Best streak (days)', color: '#f97316' },
                { icon: '🎯', val: '72%', label: 'Avg. quiz accuracy', color: '#1B8A5A' },
            ].map((s, i) => (
                <div key={i} className="par-stat-card">
                    <div className="par-stat-card__icon" style={{ color: s.color }}>{s.icon}</div>
                    <div className="par-stat-card__val" style={{ color: s.color }}>{s.val}</div>
                    <div className="par-stat-card__label">{s.label}</div>
                </div>
            ))}
        </div>

        {/* Children quick cards */}
        <div className="par-subsection-header">
            <h2 className="par-subsection-title">👧 Your Children</h2>
            <button className="par-link-btn" onClick={() => setTab('children')}>Manage →</button>
        </div>
        <div className="par-children-grid">
            {CHILDREN.map(child => (
                <div key={child.id} className="par-child-card" onClick={() => { setSelectedChild(child); setTab('progress'); }} style={{ cursor: 'pointer' }}>
                    <div className="par-child-card__top">
                        <div className="par-child-card__avatar">{child.avatar}</div>
                        <div>
                            <div className="par-child-card__name">{child.name}</div>
                            <div className="par-child-card__meta">{child.class} · {child.school}</div>
                        </div>
                        <div className="par-child-card__streak">🔥 {child.streak}d</div>
                    </div>

                    {/* Mini ring + progress */}
                    <div className="par-child-card__progress-row">
                        <div className="par-child-card__ring-wrap">
                            <ProgressRing pct={child.overallProgress} color="#F59E0B" size={56} stroke={5} />
                            <span className="par-child-card__ring-label">{child.overallProgress}%</span>
                        </div>
                        <div className="par-child-card__subject-bars">
                            {child.subjects.map(s => (
                                <div key={s.name} className="par-child-card__subbar">
                                    <span className="par-child-card__subbar-label">{s.icon}</span>
                                    <div className="par-child-card__subbar-track">
                                        <div className="par-child-card__subbar-fill" style={{ width: `${s.progress}%`, background: s.color }} />
                                    </div>
                                    <span className="par-child-card__subbar-pct" style={{ color: s.color }}>{s.progress}%</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="par-child-card__footer">
                        <span className="par-child-card__seen">Last active: {child.lastSeen}</span>
                        <span className="par-child-card__view-btn">View Progress →</span>
                    </div>
                </div>
            ))}
        </div>

        {/* Recent activity across all children */}
        <div className="par-subsection-header">
            <h2 className="par-subsection-title">🕓 Latest Activity</h2>
        </div>
        <div className="par-activity-list">
            {[...CHILDREN[0].recentActivity.map(a => ({ ...a, child: CHILDREN[0].name.split(' ')[0] })),
            ...CHILDREN[1].recentActivity.map(a => ({ ...a, child: CHILDREN[1].name.split(' ')[0] }))]
                .slice(0, 5)
                .map((item, i) => (
                    <div key={i} className="par-activity-row">
                        <span className="par-activity-row__avatar">
                            {item.child === 'Aminata' ? '👧' : '👦'}
                        </span>
                        <div className="par-activity-row__info">
                            <span className="par-activity-row__child">{item.child}</span>
                            <span className="par-activity-row__detail">
                                {item.type === 'quiz' && <>scored <strong style={{ color: scoreColor(item.score) }}>{item.score}%</strong> on {item.subject}</>}
                                {item.type === 'notes' && <>read notes: {item.topic}</>}
                                {item.type === 'game' && <>{item.result} — {item.subject}</>}
                            </span>
                        </div>
                        <span className="par-activity-row__time">{item.timeAgo}</span>
                    </div>
                ))}
        </div>
    </div>
);

/* ══════════════════════════════════════════
   SECTION: CHILDREN MANAGEMENT
══════════════════════════════════════════ */
const ChildrenSection = () => {
    const [showForm, setShowForm] = useState(false);
    return (
        <div className="par-section">
            <div className="par-subsection-header">
                <h2 className="par-subsection-title">👧 Manage Children</h2>
                <button className="par-btn par-btn--primary" id="par-add-child-btn" onClick={() => setShowForm(s => !s)}>
                    + Add Child
                </button>
            </div>

            {showForm && (
                <div className="par-form-card" id="par-add-child-form">
                    <h3 className="par-form-card__title">Add a New Child</h3>
                    <div className="par-form-grid">
                        {[
                            { id: 'child-name', label: 'Full Name', type: 'text', placeholder: 'e.g. Fatmata Koroma' },
                            { id: 'child-age', label: 'Age', type: 'number', placeholder: '11' },
                            { id: 'child-school', label: 'School', type: 'text', placeholder: 'School name' },
                            { id: 'child-class', label: 'Class', type: 'text', placeholder: 'Class 6' },
                            { id: 'child-exam-year', label: 'Target Exam Year', type: 'number', placeholder: '2026' },
                        ].map(f => (
                            <div key={f.id} className="par-form-field">
                                <label htmlFor={f.id} className="par-form-label">{f.label}</label>
                                <input id={f.id} type={f.type} placeholder={f.placeholder} className="par-form-input" />
                            </div>
                        ))}
                    </div>
                    <div className="par-form-actions">
                        <button className="par-btn par-btn--primary" id="par-save-child-btn">Save Child</button>
                        <button className="par-btn par-btn--outline" onClick={() => setShowForm(false)}>Cancel</button>
                    </div>
                </div>
            )}

            <div className="par-children-manage-list">
                {CHILDREN.map(child => (
                    <div key={child.id} className="par-manage-row" id={`par-child-row-${child.id}`}>
                        <div className="par-manage-row__left">
                            <div className="par-manage-row__avatar">{child.avatar}</div>
                            <div>
                                <div className="par-manage-row__name">{child.name}</div>
                                <div className="par-manage-row__meta">{child.age} yrs · {child.class} · {child.school} · Exam {child.examYear}</div>
                            </div>
                        </div>
                        <div className="par-manage-row__right">
                            <span className="par-manage-row__streak">🔥 {child.streak}-day streak</span>
                            <span className="par-manage-row__progress">{child.overallProgress}% progress</span>
                            <button className="par-btn par-btn--sm par-btn--outline" id={`par-edit-${child.id}`}>Edit</button>
                            <button className="par-btn par-btn--sm par-btn--danger" id={`par-delete-${child.id}`}>Delete</button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Slot info */}
            <div className="par-slot-info">
                <span>👶 {SUBSCRIPTION.childrenUsed} of {SUBSCRIPTION.childSlots} child slots used</span>
                {SUBSCRIPTION.childrenUsed < SUBSCRIPTION.childSlots && (
                    <span className="par-slot-info__avail"> · {SUBSCRIPTION.childSlots - SUBSCRIPTION.childrenUsed} slot available</span>
                )}
            </div>
        </div>
    );
};

/* ══════════════════════════════════════════
   SECTION: PROGRESS REPORTS
══════════════════════════════════════════ */
const ProgressSection = ({ selectedChild, setSelectedChild }) => {
    const child = selectedChild || CHILDREN[0];
    return (
        <div className="par-section">
            {/* Child selector */}
            <div className="par-child-selector">
                {CHILDREN.map(c => (
                    <button
                        key={c.id}
                        id={`par-progress-tab-${c.id}`}
                        className={`par-child-tab ${child.id === c.id ? 'par-child-tab--active' : ''}`}
                        onClick={() => setSelectedChild(c)}
                    >
                        {c.avatar} {c.name.split(' ')[0]}
                    </button>
                ))}
            </div>

            {/* Summary row */}
            <div className="par-progress-summary">
                <div className="par-progress-summary__avatar-block">
                    <div className="par-progress-summary__avatar">{child.avatar}</div>
                    <div>
                        <div className="par-progress-summary__name">{child.name}</div>
                        <div className="par-progress-summary__meta">{child.class} · {child.school}</div>
                    </div>
                </div>
                <div className="par-progress-summary__stats">
                    {[
                        { val: child.overallProgress + '%', label: 'Overall Progress', color: '#F59E0B' },
                        { val: '#' + child.rank, label: 'National Rank', color: '#9333ea' },
                        { val: child.totalPoints.toLocaleString(), label: 'Total Points', color: '#0c8ce9' },
                        { val: child.streak + ' days', label: 'Current Streak', color: '#f97316' },
                    ].map((s, i) => (
                        <div key={i} className="par-summary-stat">
                            <div className="par-summary-stat__val" style={{ color: s.color }}>{s.val}</div>
                            <div className="par-summary-stat__label">{s.label}</div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Subject mastery */}
            <div className="par-subsection-header">
                <h2 className="par-subsection-title">📚 Subject Mastery</h2>
            </div>
            <div className="par-subject-mastery-grid">
                {child.subjects.map(s => (
                    <div key={s.name} className="par-mastery-card">
                        <div className="par-mastery-card__top">
                            <div className="par-mastery-card__icon-wrap" style={{ background: s.color + '18', color: s.color }}>
                                {s.icon}
                            </div>
                            <div>
                                <div className="par-mastery-card__name">{s.name}</div>
                                <div className="par-mastery-card__score" style={{ color: scoreColor(s.score) }}>
                                    Avg: {s.score}%
                                </div>
                            </div>
                            <div className="par-mastery-card__ring">
                                <ProgressRing pct={s.progress} color={s.color} size={52} stroke={5} />
                                <span className="par-mastery-card__ring-label" style={{ color: s.color }}>{s.progress}%</span>
                            </div>
                        </div>
                        <div className="par-mastery-card__bar-track">
                            <div className="par-mastery-card__bar-fill" style={{ width: `${s.progress}%`, background: s.color }} />
                        </div>
                    </div>
                ))}
            </div>

            {/* Weekly scores chart */}
            <div className="par-subsection-header">
                <h2 className="par-subsection-title">📈 Weekly Quiz Scores</h2>
            </div>
            <div className="par-chart-card">
                <div className="prt-bars">
                    {child.weeklyScores.map((v, i) => (
                        <div key={i} className="prt-bar-wrap">
                            <MiniBar val={v} />
                            <span className="prt-day-label">{DAYS[i]}</span>
                        </div>
                    ))}
                </div>
                <div className="prt-chart-legend">
                    <span className="prt-legend-item prt-legend--green">≥80% Excellent</span>
                    <span className="prt-legend-item prt-legend--blue">≥65% Good</span>
                    <span className="prt-legend-item prt-legend--amber">≥50% Fair</span>
                    <span className="prt-legend-item prt-legend--red">Below 50%</span>
                </div>
            </div>

            {/* Recent activity */}
            <div className="par-subsection-header">
                <h2 className="par-subsection-title">🕓 Recent Activity</h2>
            </div>
            <div className="par-activity-list">
                {child.recentActivity.map((item, i) => (
                    <div key={i} className="par-activity-row">
                        <span className="par-activity-row__icon-box">{item.icon}</span>
                        <div className="par-activity-row__info">
                            <span className="par-activity-row__child">{item.subject}</span>
                            <span className="par-activity-row__detail">
                                {item.type === 'quiz' && <>Quiz · Scored <strong style={{ color: scoreColor(item.score) }}>{item.score}%</strong></>}
                                {item.type === 'notes' && <>Notes read · {item.topic}</>}
                                {item.type === 'game' && <>Game · {item.result}</>}
                            </span>
                        </div>
                        <span className="par-activity-row__time">{item.timeAgo}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

/* ══════════════════════════════════════════
   SECTION: WORKSHEETS
══════════════════════════════════════════ */
const WorksheetsSection = () => {
    const [typeFilter, setTypeFilter] = useState('all');

    const filtered = WORKSHEETS.filter(w =>
        typeFilter === 'all' || w.type === typeFilter
    );

    return (
        <div className="par-section">
            <div className="par-subsection-header">
                <h2 className="par-subsection-title">📋 Printable Worksheets</h2>
                <div className="par-filter-tabs">
                    {[
                        { id: 'all', label: 'All' },
                        { id: 'daily', label: 'Daily' },
                        { id: 'subject', label: 'By Subject' },
                        { id: 'mock', label: 'Mock Papers' },
                    ].map(f => (
                        <button
                            key={f.id}
                            id={`par-ws-filter-${f.id}`}
                            className={`par-filter-tab ${typeFilter === f.id ? 'par-filter-tab--active' : ''}`}
                            onClick={() => setTypeFilter(f.id)}
                        >
                            {f.label}
                        </button>
                    ))}
                </div>
            </div>

            <div className="par-ws-grid">
                {filtered.map(ws => (
                    <div key={ws.id} className="par-ws-card" id={`par-ws-${ws.id}`}>
                        <div className="par-ws-card__icon">{ws.icon}</div>
                        <div className="par-ws-card__info">
                            <div className="par-ws-card__title">{ws.title}</div>
                            <div className="par-ws-card__meta">{ws.subject} · {ws.pages} pages · {ws.date}</div>
                            <span className={`par-ws-badge par-ws-badge--${ws.type}`}>
                                {ws.type === 'daily' ? 'Daily' : ws.type === 'mock' ? 'Mock Paper' : 'Subject'}
                            </span>
                        </div>
                        <button className="par-ws-download-btn" id={`par-ws-dl-${ws.id}`} aria-label="Download worksheet">
                            ⬇ PDF
                        </button>
                    </div>
                ))}
            </div>

            <div className="par-ws-note">
                📌 Worksheets are auto-generated based on your child's current progress level.
            </div>
        </div>
    );
};

/* ══════════════════════════════════════════
   SECTION: SUBSCRIPTION
══════════════════════════════════════════ */
const SubscriptionSection = () => (
    <div className="par-section">
        {/* Current plan hero */}
        <div className="par-plan-hero">
            <div className="par-plan-hero__left">
                <div className="par-plan-hero__badge">✅ ACTIVE PLAN</div>
                <div className="par-plan-hero__name">{SUBSCRIPTION.plan}</div>
                <div className="par-plan-hero__price">{SUBSCRIPTION.price}</div>
                <div className="par-plan-hero__renew">Renews on {SUBSCRIPTION.renewDate} · {SUBSCRIPTION.daysLeft} days remaining</div>
                <div className="par-plan-hero__actions">
                    <button className="par-btn par-btn--primary" id="par-renew-btn">Renew Plan</button>
                    <button className="par-btn par-btn--outline" id="par-upgrade-btn">Upgrade Plan</button>
                </div>
            </div>
            <div className="par-plan-hero__right">
                <div className="par-plan-countdown">
                    <div className="par-plan-tile">
                        <span className="par-plan-tile__num">{SUBSCRIPTION.daysLeft}</span>
                        <span className="par-plan-tile__unit">DAYS LEFT</span>
                    </div>
                    <div className="par-plan-tile">
                        <span className="par-plan-tile__num">{SUBSCRIPTION.childrenUsed}/{SUBSCRIPTION.childSlots}</span>
                        <span className="par-plan-tile__unit">CHILD SLOTS</span>
                    </div>
                </div>
            </div>
        </div>

        {/* Plan comparison */}
        <div className="par-subsection-header" style={{ marginTop: 32 }}>
            <h2 className="par-subsection-title">📦 Available Plans</h2>
        </div>
        <div className="par-plans-grid">
            {[
                {
                    name: 'Basic',
                    price: 'Le 60,000',
                    period: '/ year',
                    features: ['1 child account', 'All 5 subjects', 'Quiz practice', 'Study notes'],
                    missing: ['Mock exams', 'Worksheets', 'Priority support'],
                    current: false,
                    id: 'par-plan-basic',
                },
                {
                    name: 'Premium Family',
                    price: 'Le 120,000',
                    period: '/ year',
                    features: ['Up to 3 children', 'All 5 subjects', 'Quiz practice', 'Study notes', 'Mock exams', 'Worksheets (PDF)', 'Priority support'],
                    missing: [],
                    current: true,
                    id: 'par-plan-premium',
                },
                {
                    name: 'School Bundle',
                    price: 'Le 400,000',
                    period: '/ year',
                    features: ['Up to 10 children', 'All 5 subjects', 'Everything in Premium', 'Bulk progress reports', 'School support'],
                    missing: [],
                    current: false,
                    id: 'par-plan-school',
                },
            ].map(plan => (
                <div key={plan.name} className={`par-plan-card ${plan.current ? 'par-plan-card--current' : ''}`} id={plan.id}>
                    {plan.current && <div className="par-plan-card__badge">YOUR PLAN</div>}
                    <div className="par-plan-card__name">{plan.name}</div>
                    <div className="par-plan-card__price">
                        <span className="par-plan-card__amount">{plan.price}</span>
                        <span className="par-plan-card__period">{plan.period}</span>
                    </div>
                    <ul className="par-plan-card__features">
                        {plan.features.map(f => (
                            <li key={f} className="par-plan-feature par-plan-feature--yes">✓ {f}</li>
                        ))}
                        {plan.missing.map(f => (
                            <li key={f} className="par-plan-feature par-plan-feature--no">✗ {f}</li>
                        ))}
                    </ul>
                    <button
                        className={`par-btn ${plan.current ? 'par-btn--outline' : 'par-btn--primary'}`}
                        id={`${plan.id}-btn`}
                        disabled={plan.current}
                    >
                        {plan.current ? 'Current Plan' : 'Switch Plan'}
                    </button>
                </div>
            ))}
        </div>

        {/* Payment history */}
        <div className="par-subsection-header" style={{ marginTop: 32 }}>
            <h2 className="par-subsection-title">🧾 Payment History</h2>
        </div>
        <div className="par-payment-table">
            <div className="par-payment-table__header">
                <span>Date</span><span>Description</span><span>Amount</span><span>Status</span>
            </div>
            {PAYMENT_HISTORY.map(p => (
                <div key={p.id} className="par-payment-row" id={`par-payment-${p.id}`}>
                    <span className="par-payment-row__date">{p.date}</span>
                    <span className="par-payment-row__desc">{p.desc}</span>
                    <span className="par-payment-row__amount">{p.amount}</span>
                    <span className="par-payment-badge par-payment-badge--paid">✓ {p.status}</span>
                </div>
            ))}
        </div>

        <div className="par-monime-note">
            💳 Payments processed securely via <strong>Monime</strong> — Sierra Leone's mobile money platform.
        </div>
    </div>
);

/* ══════════════════════════════════════════
   MAIN COMPONENT
══════════════════════════════════════════ */
const ParentDashboard = () => {
    const [tab, setTab] = useState('overview');
    const [selectedChild, setSelectedChild] = useState(CHILDREN[0]);
    const [search, setSearch] = useState('');
    const unreadCount = NOTIFICATIONS.filter(n => n.unread).length;

    const renderMain = () => {
        switch (tab) {
            case 'overview': return <OverviewSection setTab={setTab} setSelectedChild={setSelectedChild} />;
            case 'children': return <ChildrenSection />;
            case 'progress': return <ProgressSection selectedChild={selectedChild} setSelectedChild={setSelectedChild} />;
            case 'worksheets': return <WorksheetsSection />;
            case 'subscription': return <SubscriptionSection />;
            default: return <OverviewSection setTab={setTab} setSelectedChild={setSelectedChild} />;
        }
    };

    return (
        <div className="pd-root">

            {/* ══ NAV ══ */}
            <header className="pd-nav">
                <div className="pd-nav__inner">
                    <Link to="/" className="pd-nav__logo">
                        <span className="pd-nav__logo-icon">🟡</span>
                        <span className="pd-nav__logo-text">NPSE Prep</span>
                    </Link>

                    <nav className="pd-nav__links">
                        {TABS.map(t => (
                            <button
                                key={t.id}
                                id={`par-nav-${t.id}`}
                                className={`pd-nav__link pd-nav-tab ${tab === t.id ? 'pd-nav__link--active' : ''}`}
                                onClick={() => setTab(t.id)}
                            >
                                {t.label}
                            </button>
                        ))}
                    </nav>

                    <div className="pd-nav__right">
                        <div className="pd-search">
                            <span className="pd-search__icon">🔍</span>
                            <input
                                id="par-search-input"
                                type="text"
                                placeholder="Search…"
                                className="pd-search__input"
                                value={search}
                                onChange={e => setSearch(e.target.value)}
                            />
                        </div>
                        {/* Notification bell */}
                        <button className="par-bell" id="par-bell-btn" aria-label="Notifications">
                            🔔
                            {unreadCount > 0 && <span className="par-bell__badge">{unreadCount}</span>}
                        </button>
                        <div className="pd-avatar par-avatar-parent" aria-label="Profile">
                            {PARENT.avatar}
                        </div>
                    </div>
                </div>
            </header>

            {/* ══ BODY ══ */}
            <div className="pd-body">

                {/* ── Main column ── */}
                <main className="pd-main">

                    {/* Page header */}
                    <div className="par-page-header">
                        <div>
                            <p className="par-page-header__eyebrow">Parent Dashboard</p>
                            <h1 className="par-page-header__title">
                                {tab === 'overview' && `Good day, ${PARENT.name} 👋`}
                                {tab === 'children' && 'Manage Children'}
                                {tab === 'progress' && 'Progress Reports'}
                                {tab === 'worksheets' && 'Worksheets & Resources'}
                                {tab === 'subscription' && 'Subscription & Billing'}
                            </h1>
                        </div>
                        {/* Mobile tab pills */}
                        <div className="par-mobile-tabs">
                            {TABS.map(t => (
                                <button
                                    key={t.id}
                                    className={`par-mobile-tab ${tab === t.id ? 'par-mobile-tab--active' : ''}`}
                                    onClick={() => setTab(t.id)}
                                >
                                    {t.icon}
                                </button>
                            ))}
                        </div>
                    </div>

                    {renderMain()}
                </main>

                {/* ── Sidebar ── */}
                <aside className="pd-sidebar">

                    {/* Subscription status */}
                    <div className={`par-sub-card ${SUBSCRIPTION.daysLeft < 30 ? 'par-sub-card--warning' : ''}`}>
                        <div className="par-sub-card__header">
                            <span className="par-sub-card__icon">💳</span>
                            <span className="par-sub-card__title">Subscription</span>
                            <span className="par-sub-card__status">✅ Active</span>
                        </div>
                        <div className="par-sub-card__plan">{SUBSCRIPTION.plan}</div>
                        <div className="par-sub-card__renew">{SUBSCRIPTION.daysLeft} days until renewal</div>
                        <div className="par-sub-card__bar">
                            <div className="par-sub-card__bar-fill" style={{ width: `${(SUBSCRIPTION.daysLeft / 365) * 100}%` }} />
                        </div>
                        <button
                            className="par-btn par-btn--primary par-btn--full"
                            id="par-sidebar-manage-sub"
                            onClick={() => setTab('subscription')}
                        >
                            Manage Plan
                        </button>
                    </div>

                    {/* Notifications */}
                    <div className="pd-sidebar-card">
                        <div className="pd-lb-header">
                            <span className="pd-lb-header__icon">🔔</span>
                            <span className="pd-lb-header__title">Notifications</span>
                            {unreadCount > 0 && <span className="par-notif-count">{unreadCount} new</span>}
                        </div>
                        <div className="par-notif-list">
                            {NOTIFICATIONS.map(n => (
                                <div key={n.id} className={`par-notif-row ${n.unread ? 'par-notif-row--unread' : ''}`} id={`par-notif-${n.id}`}>
                                    <span className="par-notif-row__icon">{n.icon}</span>
                                    <div className="par-notif-row__body">
                                        <div className="par-notif-row__title">{n.title}</div>
                                        <div className="par-notif-row__desc">{n.body}</div>
                                        <div className="par-notif-row__time">{n.time}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Quick links */}
                    <div className="pd-sidebar-card">
                        <div className="pd-lb-header">
                            <span className="pd-lb-header__icon">⚡</span>
                            <span className="pd-lb-header__title">Quick Actions</span>
                        </div>
                        <div className="par-quick-links">
                            {[
                                { icon: '📊', label: 'View Progress Report', action: () => setTab('progress'), id: 'par-quick-progress' },
                                { icon: '📋', label: 'Download Worksheet', action: () => setTab('worksheets'), id: 'par-quick-worksheets' },
                                { icon: '👧', label: 'Add a Child', action: () => setTab('children'), id: 'par-quick-child' },
                                { icon: '💳', label: 'Manage Subscription', action: () => setTab('subscription'), id: 'par-quick-sub' },
                            ].map(l => (
                                <button key={l.id} id={l.id} className="par-quick-link-btn" onClick={l.action}>
                                    <span className="par-quick-link-btn__icon">{l.icon}</span>
                                    <span>{l.label}</span>
                                    <span className="par-quick-link-btn__arrow">›</span>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Study tip for parent */}
                    <div className="pd-sidebar-card pd-tip-card">
                        <div className="pd-tip-card__header">
                            <span className="pd-tip-card__icon">💡</span>
                            <span className="pd-tip-card__title">Parent Tip</span>
                        </div>
                        <p className="pd-tip-card__text">
                            "Ask your child to explain what they learned today — teaching back is one of the most powerful revision techniques."
                        </p>
                    </div>

                </aside>
            </div>
        </div>
    );
};

export default ParentDashboard;
