import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/AdminPanel.css';

/* ══════════════════════════════════════════════════
   DEMO DATA
══════════════════════════════════════════════════ */
const STATS = {
    totalUsers: 1248,
    totalParents: 412,
    totalPupils: 836,
    totalQuestions: 9843,
    totalSubjects: 5,
    totalTopics: 42,
    quizAttempts: 24781,
    activeToday: 184,
    revenue: 'Le 14,400,000',
    activeSubscriptions: 312,
};

const USERS = [
    { id: 1, name: 'Mrs. Koroma', email: 'koroma@example.com', role: 'parent', plan: 'Premium Family', status: 'active', joined: '2025-06-01', children: 2, lastLogin: '2h ago' },
    { id: 2, name: 'Mr. Bangura', email: 'bangura@example.com', role: 'parent', plan: 'Basic', status: 'active', joined: '2025-08-15', children: 1, lastLogin: '1d ago' },
    { id: 3, name: 'Mrs. Sesay', email: 'sesay@example.com', role: 'parent', plan: 'Premium Family', status: 'active', joined: '2025-09-03', children: 3, lastLogin: '3h ago' },
    { id: 4, name: 'Admin User', email: 'admin@npseprep.sl', role: 'admin', plan: '—', status: 'active', joined: '2024-01-01', children: 0, lastLogin: 'Just now' },
    { id: 5, name: 'Mr. Kamara', email: 'kamara@example.com', role: 'parent', plan: 'Basic', status: 'suspended', joined: '2025-10-20', children: 1, lastLogin: '30d ago' },
    { id: 6, name: 'Mrs. Conteh', email: 'conteh@example.com', role: 'parent', plan: 'School Bundle', status: 'active', joined: '2025-05-11', children: 5, lastLogin: '45m ago' },
];

const PUPILS = [
    { id: 1, name: 'Aminata Koroma', age: 11, school: 'Annie Walsh Memorial', class: 'Class 6', parent: 'Mrs. Koroma', progress: 38, streak: 5, points: 2480, examYear: 2026, lastActive: '2h ago' },
    { id: 2, name: 'Mohamed Koroma', age: 10, school: 'Annie Walsh Memorial', class: 'Class 5', parent: 'Mrs. Koroma', progress: 15, streak: 2, points: 980, examYear: 2027, lastActive: '1d ago' },
    { id: 3, name: 'Isata Bangura', age: 11, school: 'SLBS Primary', class: 'Class 6', parent: 'Mr. Bangura', progress: 72, streak: 12, points: 4320, examYear: 2026, lastActive: '4h ago' },
    { id: 4, name: 'Abdul Sesay', age: 11, school: 'St. Edwards Primary', class: 'Class 6', parent: 'Mrs. Sesay', progress: 55, streak: 7, points: 3150, examYear: 2026, lastActive: '6h ago' },
    { id: 5, name: 'Fatmata Kamara', age: 12, school: 'CKC Primary', class: 'Class 6', parent: 'Mr. Kamara', progress: 8, streak: 0, points: 240, examYear: 2026, lastActive: '30d ago' },
];

const QUESTIONS = [
    { id: 1, stem: 'What is 3/4 + 1/2?', subject: 'Mathematics', topic: 'Fractions & Decimals', difficulty: 'easy', correctAnswer: 'A', attempts: 342, accuracy: 78 },
    { id: 2, stem: 'Which word is a noun in: "The clever boy solved..."', subject: 'English Language', topic: 'Nouns & Pronouns', difficulty: 'easy', correctAnswer: 'C', attempts: 289, accuracy: 84 },
    { id: 3, stem: 'Find the missing number: 3, 9, 27, 81, ?', subject: 'Quantitative', topic: 'Number Patterns', difficulty: 'medium', correctAnswer: 'B', attempts: 201, accuracy: 61 },
    { id: 4, stem: 'HAPPY is to SAD as TALL is to:', subject: 'Verbal Aptitude', topic: 'Analogies', difficulty: 'easy', correctAnswer: 'B', attempts: 415, accuracy: 91 },
    { id: 5, stem: 'What is the capital city of Sierra Leone?', subject: 'General Paper', topic: 'National Symbols', difficulty: 'easy', correctAnswer: 'C', attempts: 508, accuracy: 95 },
    { id: 6, stem: 'If 6 workers finish in 12 days, how many days for 9?', subject: 'Quantitative', topic: 'Ages & Money Problems', difficulty: 'hard', correctAnswer: 'A', attempts: 178, accuracy: 42 },
];

const SUBJECTS = [
    { id: 1, name: 'English Language', icon: '📖', color: '#9333ea', topics: 8, questions: 2341, avgScore: 72, totalAttempts: 8921 },
    { id: 2, name: 'Mathematics', icon: '📐', color: '#0c8ce9', topics: 8, questions: 2189, avgScore: 68, totalAttempts: 7642 },
    { id: 3, name: 'Quantitative Aptitude', icon: '🔢', color: '#f97316', topics: 7, questions: 1876, avgScore: 61, totalAttempts: 5834 },
    { id: 4, name: 'Verbal Aptitude', icon: '💬', color: '#10b981', topics: 7, questions: 1654, avgScore: 74, totalAttempts: 4917 },
    { id: 5, name: 'General Paper', icon: '🌍', color: '#ec4899', topics: 10, questions: 1783, avgScore: 69, totalAttempts: 6234 },
];

const WORKSHEETS = [
    { id: 1, title: "Daily Worksheet — Mar 8, 2026", subject: 'All Subjects', type: 'daily', generated: '8 Mar 2026', downloads: 84 },
    { id: 2, title: "English Language — Week 10", subject: 'English', type: 'subject', generated: '5 Mar 2026', downloads: 62 },
    { id: 3, title: "Mathematics — Week 10", subject: 'Mathematics', type: 'subject', generated: '5 Mar 2026', downloads: 58 },
    { id: 4, title: "NPSE Mock Paper 2024", subject: 'All Subjects', type: 'mock', generated: '1 Mar 2026', downloads: 203 },
    { id: 5, title: "Quantitative — Week 9", subject: 'Quantitative', type: 'subject', generated: '28 Feb 2026', downloads: 41 },
];

const SUBSCRIPTIONS = [
    { id: 1, parent: 'Mrs. Koroma', plan: 'Premium Family', status: 'active', start: 'Jun 2025', end: 'Jun 2026', amount: 'Le 120,000', children: 2 },
    { id: 2, parent: 'Mr. Bangura', plan: 'Basic', status: 'active', start: 'Aug 2025', end: 'Aug 2026', amount: 'Le 60,000', children: 1 },
    { id: 3, parent: 'Mrs. Sesay', plan: 'Premium Family', status: 'active', start: 'Sep 2025', end: 'Sep 2026', amount: 'Le 120,000', children: 3 },
    { id: 4, parent: 'Mr. Kamara', plan: 'Basic', status: 'expired', start: 'Oct 2024', end: 'Oct 2025', amount: 'Le 60,000', children: 1 },
    { id: 5, parent: 'Mrs. Conteh', plan: 'School Bundle', status: 'active', start: 'May 2025', end: 'May 2026', amount: 'Le 400,000', children: 5 },
];

const WEEKLY_SIGNUPS = [18, 24, 31, 27, 42, 38, 55];
const WEEKLY_REVENUE = [180, 240, 300, 260, 420, 380, 540]; // × 1000 Le
const HARD_QUESTIONS = QUESTIONS.filter(q => q.accuracy < 60).sort((a, b) => a.accuracy - b.accuracy);
const POPULAR_TOPICS = [
    { name: 'Nouns & Pronouns', subject: 'English', attempts: 2341 },
    { name: 'National Symbols', subject: 'General', attempts: 2189 },
    { name: 'Analogies', subject: 'Verbal', attempts: 1934 },
    { name: 'Fractions', subject: 'Maths', attempts: 1876 },
    { name: 'Number Patterns', subject: 'Quant', attempts: 1654 },
];

const DAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

/* ══════════════════════════════════════════════════
   HELPERS
══════════════════════════════════════════════════ */
const diffColor = d => d === 'hard' ? '#ef4444' : d === 'medium' ? '#f59e0b' : '#1B8A5A';
const accColor = a => a >= 80 ? '#1B8A5A' : a >= 60 ? '#0c8ce9' : a >= 40 ? '#f59e0b' : '#ef4444';
const planBg = p => p === 'Premium Family' ? '#FEF3C7' : p === 'School Bundle' ? '#E0EFFF' : '#F3F4F6';
const planFg = p => p === 'Premium Family' ? '#92400E' : p === 'School Bundle' ? '#1E3A5F' : '#566075';
const roleBg = r => r === 'admin' ? '#EDE9FE' : '#F3F4F6';
const roleFg = r => r === 'admin' ? '#5B21B6' : '#566075';

const MiniChart = ({ vals, color }) => {
    const max = Math.max(...vals);
    return (
        <div className="adm-mini-chart">
            {vals.map((v, i) => (
                <div key={i} className="adm-mini-bar-wrap">
                    <div className="adm-mini-bar" style={{ height: `${(v / max) * 100}%`, background: color }} />
                </div>
            ))}
        </div>
    );
};

const StatusBadge = ({ status }) => (
    <span className={`adm-badge adm-badge--${status}`}>{status}</span>
);

/* ══════════════════════════════════════════════════
   SECTION COMPONENTS
══════════════════════════════════════════════════ */

/* ── OVERVIEW ── */
const OverviewSection = ({ setTab }) => (
    <div className="adm-section">
        {/* Top metric cards */}
        <div className="adm-metrics-grid">
            {[
                { icon: '👥', val: STATS.totalUsers.toLocaleString(), label: 'Total Users', color: '#9333ea', sub: `${STATS.totalParents} parents · ${STATS.totalPupils} pupils` },
                { icon: '🎯', val: STATS.quizAttempts.toLocaleString(), label: 'Quiz Attempts', color: '#0c8ce9', sub: 'All time' },
                { icon: '💳', val: STATS.activeSubscriptions, label: 'Active Subscriptions', color: '#1B8A5A', sub: `${STATS.revenue} total revenue` },
                { icon: '🔥', val: STATS.activeToday, label: 'Active Today', color: '#f97316', sub: 'Unique logins' },
                { icon: '❓', val: STATS.totalQuestions.toLocaleString(), label: 'Questions in Bank', color: '#ec4899', sub: `${STATS.totalTopics} topics` },
                { icon: '📋', val: STATS.totalSubjects, label: 'Subjects', color: '#10b981', sub: `${STATS.totalTopics} curriculum topics` },
            ].map((m, i) => (
                <div key={i} className="adm-metric-card">
                    <div className="adm-metric-card__icon" style={{ color: m.color }}>{m.icon}</div>
                    <div className="adm-metric-card__val" style={{ color: m.color }}>{m.val}</div>
                    <div className="adm-metric-card__label">{m.label}</div>
                    <div className="adm-metric-card__sub">{m.sub}</div>
                </div>
            ))}
        </div>

        {/* Charts row */}
        <div className="adm-charts-row">
            <div className="adm-card adm-chart-card">
                <div className="adm-card__header">
                    <h3 className="adm-card__title">📈 Weekly New Signups</h3>
                </div>
                <div className="adm-bar-chart">
                    {WEEKLY_SIGNUPS.map((v, i) => (
                        <div key={i} className="adm-bar-wrap">
                            <div className="adm-bar-fill" style={{ height: `${(v / Math.max(...WEEKLY_SIGNUPS)) * 100}%`, background: '#9333ea' }} />
                            <span className="adm-bar-val">{v}</span>
                            <span className="adm-bar-day">{DAYS[i]}</span>
                        </div>
                    ))}
                </div>
            </div>

            <div className="adm-card adm-chart-card">
                <div className="adm-card__header">
                    <h3 className="adm-card__title">💰 Weekly Revenue (Le '000)</h3>
                </div>
                <div className="adm-bar-chart">
                    {WEEKLY_REVENUE.map((v, i) => (
                        <div key={i} className="adm-bar-wrap">
                            <div className="adm-bar-fill" style={{ height: `${(v / Math.max(...WEEKLY_REVENUE)) * 100}%`, background: '#1B8A5A' }} />
                            <span className="adm-bar-val">{v}</span>
                            <span className="adm-bar-day">{DAYS[i]}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>

        {/* Subject performance */}
        <div className="adm-card">
            <div className="adm-card__header">
                <h3 className="adm-card__title">📚 Subject Performance Overview</h3>
                <button className="adm-card__action" onClick={() => setTab('subjects')}>View All →</button>
            </div>
            <div className="adm-subject-perf-list">
                {SUBJECTS.map(s => (
                    <div key={s.id} className="adm-subject-perf-row">
                        <span className="adm-subject-perf-icon" style={{ color: s.color }}>{s.icon}</span>
                        <span className="adm-subject-perf-name">{s.name}</span>
                        <div className="adm-subject-perf-bar-wrap">
                            <div className="adm-subject-perf-bar">
                                <div className="adm-subject-perf-fill" style={{ width: `${s.avgScore}%`, background: s.color }} />
                            </div>
                            <span className="adm-subject-perf-pct" style={{ color: s.color }}>{s.avgScore}%</span>
                        </div>
                        <span className="adm-subject-perf-meta">{s.totalAttempts.toLocaleString()} attempts</span>
                    </div>
                ))}
            </div>
        </div>

        {/* Recent signups */}
        <div className="adm-card">
            <div className="adm-card__header">
                <h3 className="adm-card__title">👤 Recent Users</h3>
                <button className="adm-card__action" onClick={() => setTab('users')}>View All →</button>
            </div>
            <div className="adm-table-wrap">
                <table className="adm-table">
                    <thead><tr>{['Name', 'Email', 'Role', 'Plan', 'Joined'].map(h => <th key={h}>{h}</th>)}</tr></thead>
                    <tbody>
                        {USERS.slice(0, 4).map(u => (
                            <tr key={u.id}>
                                <td className="adm-table__strong">{u.name}</td>
                                <td>{u.email}</td>
                                <td><span className="adm-chip" style={{ background: roleBg(u.role), color: roleFg(u.role) }}>{u.role}</span></td>
                                <td><span className="adm-chip" style={{ background: planBg(u.plan), color: planFg(u.plan) }}>{u.plan}</span></td>
                                <td className="adm-table__muted">{u.joined}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    </div>
);

/* ── USERS ── */
const UsersSection = () => {
    const [search, setSearch] = useState('');
    const [roleFilter, setRoleFilter] = useState('all');
    const filtered = USERS.filter(u =>
        (roleFilter === 'all' || u.role === roleFilter) &&
        (u.name.toLowerCase().includes(search.toLowerCase()) || u.email.toLowerCase().includes(search.toLowerCase()))
    );
    return (
        <div className="adm-section">
            <div className="adm-section__toolbar">
                <input id="adm-user-search" className="adm-search-input" placeholder="Search users…" value={search} onChange={e => setSearch(e.target.value)} />
                <div className="adm-filter-tabs">
                    {['all', 'admin', 'parent'].map(r => (
                        <button key={r} id={`adm-role-${r}`} className={`adm-filter-tab ${roleFilter === r ? 'adm-filter-tab--active' : ''}`} onClick={() => setRoleFilter(r)}>
                            {r.charAt(0).toUpperCase() + r.slice(1)}
                        </button>
                    ))}
                </div>
                <button className="adm-btn adm-btn--primary" id="adm-add-user-btn">+ Invite User</button>
            </div>
            <div className="adm-card">
                <div className="adm-table-wrap">
                    <table className="adm-table">
                        <thead><tr>{['Name', 'Email', 'Role', 'Plan', 'Status', 'Children', 'Last Login', 'Actions'].map(h => <th key={h}>{h}</th>)}</tr></thead>
                        <tbody>
                            {filtered.map(u => (
                                <tr key={u.id} id={`adm-user-row-${u.id}`}>
                                    <td className="adm-table__strong">{u.name}</td>
                                    <td>{u.email}</td>
                                    <td><span className="adm-chip" style={{ background: roleBg(u.role), color: roleFg(u.role) }}>{u.role}</span></td>
                                    <td><span className="adm-chip" style={{ background: planBg(u.plan), color: planFg(u.plan) }}>{u.plan}</span></td>
                                    <td><StatusBadge status={u.status} /></td>
                                    <td className="adm-table__center">{u.children || '—'}</td>
                                    <td className="adm-table__muted">{u.lastLogin}</td>
                                    <td>
                                        <div className="adm-row-actions">
                                            <button className="adm-btn adm-btn--xs adm-btn--outline" id={`adm-edit-user-${u.id}`}>Edit</button>
                                            <button className={`adm-btn adm-btn--xs ${u.status === 'active' ? 'adm-btn--warn' : 'adm-btn--success'}`} id={`adm-toggle-user-${u.id}`}>
                                                {u.status === 'active' ? 'Suspend' : 'Restore'}
                                            </button>
                                            <button className="adm-btn adm-btn--xs adm-btn--outline" id={`adm-reset-pw-${u.id}`}>Reset PW</button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

/* ── PUPILS ── */
const PupilsSection = () => {
    const [search, setSearch] = useState('');
    const filtered = PUPILS.filter(p => p.name.toLowerCase().includes(search.toLowerCase()) || p.parent.toLowerCase().includes(search.toLowerCase()));
    return (
        <div className="adm-section">
            <div className="adm-section__toolbar">
                <input id="adm-pupil-search" className="adm-search-input" placeholder="Search pupils…" value={search} onChange={e => setSearch(e.target.value)} />
            </div>
            <div className="adm-card">
                <div className="adm-table-wrap">
                    <table className="adm-table">
                        <thead><tr>{['Pupil', 'School', 'Class', 'Parent', 'Progress', 'Streak', 'Points', 'Exam Year', 'Last Active'].map(h => <th key={h}>{h}</th>)}</tr></thead>
                        <tbody>
                            {filtered.map(p => (
                                <tr key={p.id} id={`adm-pupil-row-${p.id}`}>
                                    <td className="adm-table__strong">{p.name}</td>
                                    <td className="adm-table__muted">{p.school}</td>
                                    <td>{p.class}</td>
                                    <td>{p.parent}</td>
                                    <td>
                                        <div className="adm-progress-cell">
                                            <div className="adm-progress-bar"><div className="adm-progress-fill" style={{ width: `${p.progress}%`, background: accColor(p.progress) }} /></div>
                                            <span style={{ color: accColor(p.progress), fontWeight: 700, fontSize: 12 }}>{p.progress}%</span>
                                        </div>
                                    </td>
                                    <td><span className="adm-chip" style={{ background: '#FEF3C7', color: '#92400E' }}>🔥 {p.streak}d</span></td>
                                    <td className="adm-table__strong">{p.points.toLocaleString()}</td>
                                    <td>{p.examYear}</td>
                                    <td className="adm-table__muted">{p.lastActive}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

/* ── QUESTIONS ── */
const QuestionsSection = () => {
    const [subFilter, setSubFilter] = useState('All');
    const [diffFilter, setDiffFilter] = useState('all');
    const [showForm, setShowForm] = useState(false);
    const [editId, setEditId] = useState(null);
    const [formData, setFormData] = useState({ subject: '', topic: '', difficulty: 'easy', stem: '', optA: '', optB: '', optC: '', optD: '', answer: 'A', explanation: '' });

    const filtered = QUESTIONS.filter(q =>
        (subFilter === 'All' || q.subject === subFilter) &&
        (diffFilter === 'all' || q.difficulty === diffFilter)
    );

    return (
        <div className="adm-section">
            {/* Add / Edit form */}
            <div className="adm-card adm-form-card" id="adm-question-form">
                <button className="adm-card__header adm-collapsible" onClick={() => setShowForm(s => !s)}>
                    <h3 className="adm-card__title">{editId ? '✏️ Edit Question' : '➕ Add New Question'}</h3>
                    <span>{showForm ? '▲' : '▼'}</span>
                </button>
                {showForm && (
                    <div className="adm-form-body">
                        <div className="adm-form-grid adm-form-grid--3">
                            {[
                                { id: 'q-subject', label: 'Subject *', el: 'select', options: ['', 'English Language', 'Mathematics', 'Quantitative Aptitude', 'Verbal Aptitude', 'General Paper'] },
                                { id: 'q-topic', label: 'Topic *', el: 'select', options: ['', 'Select subject first'] },
                                { id: 'q-diff', label: 'Difficulty', el: 'select', options: ['easy', 'medium', 'hard'] },
                            ].map(f => (
                                <div key={f.id} className="adm-form-field">
                                    <label htmlFor={f.id} className="adm-form-label">{f.label}</label>
                                    <select id={f.id} className="adm-form-input">
                                        {f.options.map(o => <option key={o}>{o}</option>)}
                                    </select>
                                </div>
                            ))}
                        </div>
                        <div className="adm-form-field" style={{ marginBottom: 12 }}>
                            <label htmlFor="q-stem" className="adm-form-label">Question Stem *</label>
                            <textarea id="q-stem" className="adm-form-input adm-form-textarea" placeholder="Enter the question…" />
                        </div>
                        <div className="adm-form-grid adm-form-grid--2">
                            {['A', 'B', 'C', 'D'].map(l => (
                                <div key={l} className="adm-form-field">
                                    <label htmlFor={`q-opt${l}`} className="adm-form-label">Option {l} *</label>
                                    <input id={`q-opt${l}`} className="adm-form-input" placeholder={`Option ${l}`} />
                                </div>
                            ))}
                            <div className="adm-form-field">
                                <label htmlFor="q-answer" className="adm-form-label">Correct Answer *</label>
                                <select id="q-answer" className="adm-form-input">
                                    {['A', 'B', 'C', 'D'].map(l => <option key={l}>{l}</option>)}
                                </select>
                            </div>
                        </div>
                        <div className="adm-form-field" style={{ marginBottom: 16 }}>
                            <label htmlFor="q-explanation" className="adm-form-label">Explanation</label>
                            <textarea id="q-explanation" className="adm-form-input adm-form-textarea" placeholder="Explain the correct answer…" />
                        </div>
                        <div className="adm-form-actions">
                            <button className="adm-btn adm-btn--primary" id="adm-save-question-btn">{editId ? 'Update Question' : 'Create Question'}</button>
                            <button className="adm-btn adm-btn--outline" onClick={() => { setShowForm(false); setEditId(null); }}>Cancel</button>
                        </div>
                    </div>
                )}
            </div>

            {/* Filter + list */}
            <div className="adm-section__toolbar">
                <span className="adm-table-count">Showing {filtered.length} of {QUESTIONS.length} questions</span>
                <div className="adm-filter-tabs">
                    {['All', ...SUBJECTS.map(s => s.name.split(' ')[0])].map(s => (
                        <button key={s} className={`adm-filter-tab ${subFilter === s ? 'adm-filter-tab--active' : ''}`} onClick={() => setSubFilter(s)}>{s}</button>
                    ))}
                </div>
                <div className="adm-filter-tabs">
                    {['all', 'easy', 'medium', 'hard'].map(d => (
                        <button key={d} className={`adm-filter-tab ${diffFilter === d ? 'adm-filter-tab--active' : ''}`} onClick={() => setDiffFilter(d)}>{d === 'all' ? 'All Levels' : d}</button>
                    ))}
                </div>
            </div>
            <div className="adm-card">
                <div className="adm-table-wrap">
                    <table className="adm-table">
                        <thead><tr>{['Question', 'Subject', 'Topic', 'Difficulty', 'Answer', 'Attempts', 'Accuracy', 'Actions'].map(h => <th key={h}>{h}</th>)}</tr></thead>
                        <tbody>
                            {filtered.map(q => (
                                <tr key={q.id} id={`adm-q-row-${q.id}`}>
                                    <td className="adm-table__question">{q.stem}</td>
                                    <td><span className="adm-chip" style={{ background: '#F3F4F6', color: '#374151' }}>{q.subject.split(' ')[0]}</span></td>
                                    <td className="adm-table__muted">{q.topic}</td>
                                    <td><span className="adm-chip adm-diff-chip" style={{ background: diffColor(q.difficulty) + '22', color: diffColor(q.difficulty) }}>{q.difficulty}</span></td>
                                    <td className="adm-table__center"><span className="adm-answer-chip">{q.correctAnswer}</span></td>
                                    <td className="adm-table__muted">{q.attempts}</td>
                                    <td>
                                        <div className="adm-accuracy-cell">
                                            <div className="adm-progress-bar"><div className="adm-progress-fill" style={{ width: `${q.accuracy}%`, background: accColor(q.accuracy) }} /></div>
                                            <span style={{ color: accColor(q.accuracy), fontWeight: 700, fontSize: 11 }}>{q.accuracy}%</span>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="adm-row-actions">
                                            <button className="adm-btn adm-btn--xs adm-btn--outline" id={`adm-edit-q-${q.id}`} onClick={() => { setEditId(q.id); setShowForm(true); }}>Edit</button>
                                            <button className="adm-btn adm-btn--xs adm-btn--danger" id={`adm-del-q-${q.id}`}>Delete</button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

/* ── SUBJECTS ── */
const SubjectsSection = () => {
    const [showForm, setShowForm] = useState(false);
    return (
        <div className="adm-section">
            <div className="adm-section__toolbar">
                <button className="adm-btn adm-btn--primary" id="adm-add-subject-btn" onClick={() => setShowForm(s => !s)}>+ Add Subject / Topic</button>
            </div>

            {showForm && (
                <div className="adm-card adm-form-card" style={{ marginBottom: 16 }}>
                    <div className="adm-form-body">
                        <div className="adm-form-grid adm-form-grid--2">
                            <div>
                                <h4 style={{ marginBottom: 12, color: 'var(--adm-ink)' }}>📘 New Subject</h4>
                                <div className="adm-form-field">
                                    <label htmlFor="adm-subj-name" className="adm-form-label">Subject Name *</label>
                                    <input id="adm-subj-name" className="adm-form-input" placeholder="e.g., Mathematics" />
                                </div>
                                <button className="adm-btn adm-btn--primary" id="adm-create-subject-btn" style={{ marginTop: 10 }}>Create Subject</button>
                            </div>
                            <div>
                                <h4 style={{ marginBottom: 12, color: 'var(--adm-ink)' }}>📂 New Topic</h4>
                                <div className="adm-form-field">
                                    <label htmlFor="adm-topic-subj" className="adm-form-label">Subject *</label>
                                    <select id="adm-topic-subj" className="adm-form-input">
                                        <option value="">Select Subject</option>
                                        {SUBJECTS.map(s => <option key={s.id}>{s.name}</option>)}
                                    </select>
                                </div>
                                <div className="adm-form-field" style={{ marginTop: 10 }}>
                                    <label htmlFor="adm-topic-name" className="adm-form-label">Topic Name *</label>
                                    <input id="adm-topic-name" className="adm-form-input" placeholder="e.g., Fractions & Decimals" />
                                </div>
                                <button className="adm-btn adm-btn--primary" id="adm-create-topic-btn" style={{ marginTop: 10 }}>Create Topic</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <div className="adm-subjects-grid">
                {SUBJECTS.map(s => (
                    <div key={s.id} className="adm-subject-card" id={`adm-subject-${s.id}`}>
                        <div className="adm-subject-card__header" style={{ background: s.color + '18' }}>
                            <span className="adm-subject-card__icon" style={{ color: s.color }}>{s.icon}</span>
                            <div>
                                <div className="adm-subject-card__name">{s.name}</div>
                                <div className="adm-subject-card__meta">{s.topics} topics · {s.questions.toLocaleString()} questions</div>
                            </div>
                            <div className="adm-subject-card__score" style={{ color: s.color }}>
                                <span className="adm-subject-card__score-val">{s.avgScore}%</span>
                                <span className="adm-subject-card__score-label">Avg Score</span>
                            </div>
                        </div>
                        <div className="adm-subject-card__body">
                            <div className="adm-subject-card__bar-wrap">
                                <div className="adm-subject-perf-bar">
                                    <div className="adm-subject-perf-fill" style={{ width: `${s.avgScore}%`, background: s.color }} />
                                </div>
                            </div>
                            <div className="adm-subject-card__stats">
                                <span>{s.totalAttempts.toLocaleString()} attempts</span>
                                <div className="adm-row-actions">
                                    <button className="adm-btn adm-btn--xs adm-btn--outline" id={`adm-edit-subj-${s.id}`}>Edit</button>
                                    <button className="adm-btn adm-btn--xs adm-btn--outline" id={`adm-view-topics-${s.id}`}>Topics →</button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

/* ── WORKSHEETS ── */
const WorksheetsAdminSection = () => (
    <div className="adm-section">
        <div className="adm-section__toolbar">
            <button className="adm-btn adm-btn--primary" id="adm-gen-worksheet-btn">⚡ Generate New Worksheet</button>
        </div>
        <div className="adm-card">
            <div className="adm-card__header">
                <h3 className="adm-card__title">📋 All Worksheets</h3>
            </div>
            <div className="adm-table-wrap">
                <table className="adm-table">
                    <thead><tr>{['Title', 'Subject', 'Type', 'Generated', 'Downloads', 'Actions'].map(h => <th key={h}>{h}</th>)}</tr></thead>
                    <tbody>
                        {WORKSHEETS.map(w => (
                            <tr key={w.id} id={`adm-ws-row-${w.id}`}>
                                <td className="adm-table__strong">{w.title}</td>
                                <td>{w.subject}</td>
                                <td>
                                    <span className={`adm-chip adm-chip--ws-${w.type}`}>
                                        {w.type === 'daily' ? 'Daily' : w.type === 'mock' ? 'Mock' : w.type}
                                    </span>
                                </td>
                                <td className="adm-table__muted">{w.generated}</td>
                                <td className="adm-table__center">{w.downloads}</td>
                                <td>
                                    <div className="adm-row-actions">
                                        <button className="adm-btn adm-btn--xs adm-btn--outline" id={`adm-dl-ws-${w.id}`}>⬇ PDF</button>
                                        <button className="adm-btn adm-btn--xs adm-btn--danger" id={`adm-del-ws-${w.id}`}>Delete</button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    </div>
);

/* ── SUBSCRIPTIONS ── */
const SubscriptionsSection = () => (
    <div className="adm-section">
        {/* Revenue summary */}
        <div className="adm-metrics-grid adm-metrics-grid--4">
            {[
                { icon: '💰', val: 'Le 14.4M', label: 'Total Revenue', color: '#1B8A5A' },
                { icon: '✅', val: 312, label: 'Active Subscriptions', color: '#0c8ce9' },
                { icon: '⚠️', val: 38, label: 'Expiring in 30 days', color: '#f59e0b' },
                { icon: '❌', val: 14, label: 'Expired / Unpaid', color: '#ef4444' },
            ].map((m, i) => (
                <div key={i} className="adm-metric-card">
                    <div className="adm-metric-card__icon" style={{ color: m.color }}>{m.icon}</div>
                    <div className="adm-metric-card__val" style={{ color: m.color }}>{m.val}</div>
                    <div className="adm-metric-card__label">{m.label}</div>
                </div>
            ))}
        </div>

        <div className="adm-card">
            <div className="adm-card__header">
                <h3 className="adm-card__title">💳 Subscription Records</h3>
            </div>
            <div className="adm-table-wrap">
                <table className="adm-table">
                    <thead><tr>{['Parent', 'Plan', 'Status', 'Start', 'End', 'Amount', 'Children', 'Actions'].map(h => <th key={h}>{h}</th>)}</tr></thead>
                    <tbody>
                        {SUBSCRIPTIONS.map(s => (
                            <tr key={s.id} id={`adm-sub-row-${s.id}`}>
                                <td className="adm-table__strong">{s.parent}</td>
                                <td><span className="adm-chip" style={{ background: planBg(s.plan), color: planFg(s.plan) }}>{s.plan}</span></td>
                                <td><StatusBadge status={s.status} /></td>
                                <td className="adm-table__muted">{s.start}</td>
                                <td className="adm-table__muted">{s.end}</td>
                                <td className="adm-table__strong">{s.amount}</td>
                                <td className="adm-table__center">{s.children}</td>
                                <td>
                                    <div className="adm-row-actions">
                                        <button className="adm-btn adm-btn--xs adm-btn--outline" id={`adm-view-sub-${s.id}`}>View</button>
                                        <button className="adm-btn adm-btn--xs adm-btn--warn" id={`adm-cancel-sub-${s.id}`}>Cancel</button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    </div>
);

/* ── ANALYTICS ── */
const AnalyticsSection = () => (
    <div className="adm-section">
        {/* KPI row */}
        <div className="adm-metrics-grid">
            {[
                { icon: '📊', val: '74%', label: 'Overall Quiz Accuracy', color: '#1B8A5A', trend: '+3% this week' },
                { icon: '⏱️', val: '22m', label: 'Avg. Session Duration', color: '#0c8ce9', trend: '↑ 4m vs last week' },
                { icon: '🏆', val: '38%', label: 'Avg. Pupil Progress', color: '#9333ea', trend: 'Steady' },
                { icon: '💡', val: '6.2', label: 'Topics per pupil/week', color: '#f97316', trend: '+1.1 this week' },
            ].map((m, i) => (
                <div key={i} className="adm-metric-card">
                    <div className="adm-metric-card__icon" style={{ color: m.color }}>{m.icon}</div>
                    <div className="adm-metric-card__val" style={{ color: m.color }}>{m.val}</div>
                    <div className="adm-metric-card__label">{m.label}</div>
                    <div className="adm-metric-card__sub">{m.trend}</div>
                </div>
            ))}
        </div>

        <div className="adm-analytics-row">
            {/* Popular topics */}
            <div className="adm-card">
                <div className="adm-card__header"><h3 className="adm-card__title">🔥 Most Practised Topics</h3></div>
                <div className="adm-popular-list">
                    {POPULAR_TOPICS.map((t, i) => (
                        <div key={i} className="adm-popular-row">
                            <span className="adm-popular-rank">#{i + 1}</span>
                            <div className="adm-popular-info">
                                <span className="adm-popular-name">{t.name}</span>
                                <span className="adm-popular-sub">{t.subject}</span>
                            </div>
                            <div className="adm-popular-bar-wrap">
                                <div className="adm-subject-perf-bar">
                                    <div className="adm-subject-perf-fill" style={{ width: `${(t.attempts / POPULAR_TOPICS[0].attempts) * 100}%`, background: '#9333ea' }} />
                                </div>
                                <span className="adm-popular-count">{t.attempts.toLocaleString()}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Hard questions */}
            <div className="adm-card">
                <div className="adm-card__header"><h3 className="adm-card__title">⚠️ Difficult Questions (Low Accuracy)</h3></div>
                <div className="adm-table-wrap">
                    <table className="adm-table">
                        <thead><tr>{['Question', 'Subject', 'Accuracy'].map(h => <th key={h}>{h}</th>)}</tr></thead>
                        <tbody>
                            {HARD_QUESTIONS.map(q => (
                                <tr key={q.id}>
                                    <td className="adm-table__question">{q.stem}</td>
                                    <td><span className="adm-chip" style={{ background: '#F3F4F6', color: '#374151' }}>{q.subject.split(' ')[0]}</span></td>
                                    <td><span style={{ color: accColor(q.accuracy), fontWeight: 700 }}>{q.accuracy}%</span></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

        {/* Subject comparison chart */}
        <div className="adm-card">
            <div className="adm-card__header"><h3 className="adm-card__title">📈 Subject Avg. Score Comparison</h3></div>
            <div className="adm-bar-chart adm-bar-chart--tall">
                {SUBJECTS.map(s => (
                    <div key={s.id} className="adm-bar-wrap adm-bar-wrap--wide">
                        <div className="adm-bar-fill" style={{ height: `${s.avgScore}%`, background: s.color }} />
                        <span className="adm-bar-val">{s.avgScore}%</span>
                        <span className="adm-bar-day">{s.icon}</span>
                    </div>
                ))}
            </div>
        </div>
    </div>
);

/* ── SETTINGS ── */
const SettingsSection = () => (
    <div className="adm-section">
        <div className="adm-settings-grid">
            {/* Platform settings */}
            <div className="adm-card">
                <div className="adm-card__header"><h3 className="adm-card__title">⚙️ Platform Settings</h3></div>
                <div className="adm-form-body">
                    {[
                        { id: 's-site-name', label: 'Site Name', val: 'NPSE Prep' },
                        { id: 's-exam-date', label: 'NPSE Exam Date', val: '2026-04-20', type: 'date' },
                        { id: 's-support', label: 'Support Email', val: 'support@npseprep.sl' },
                    ].map(f => (
                        <div key={f.id} className="adm-form-field" style={{ marginBottom: 14 }}>
                            <label htmlFor={f.id} className="adm-form-label">{f.label}</label>
                            <input id={f.id} type={f.type || 'text'} className="adm-form-input" defaultValue={f.val} />
                        </div>
                    ))}
                    <div className="adm-setting-toggle-row">
                        <div>
                            <div className="adm-setting-toggle-label">Maintenance Mode</div>
                            <div className="adm-setting-toggle-sub">Take the site offline for maintenance</div>
                        </div>
                        <div className="adm-toggle" id="adm-toggle-maintenance" role="switch" aria-checked="false">
                            <div className="adm-toggle__knob" />
                        </div>
                    </div>
                    <div className="adm-setting-toggle-row">
                        <div>
                            <div className="adm-setting-toggle-label">Allow New Registrations</div>
                            <div className="adm-setting-toggle-sub">Stop new parents from signing up</div>
                        </div>
                        <div className="adm-toggle adm-toggle--on" id="adm-toggle-reg" role="switch" aria-checked="true">
                            <div className="adm-toggle__knob" />
                        </div>
                    </div>
                    <button className="adm-btn adm-btn--primary" id="adm-save-settings-btn" style={{ marginTop: 16 }}>Save Settings</button>
                </div>
            </div>

            {/* Subscription plans */}
            <div className="adm-card">
                <div className="adm-card__header"><h3 className="adm-card__title">💳 Plan Configuration</h3></div>
                <div className="adm-form-body">
                    {[
                        { id: 's-basic-price', label: 'Basic Plan Price', val: '60000' },
                        { id: 's-premium-price', label: 'Premium Family Plan Price', val: '120000' },
                        { id: 's-school-price', label: 'School Bundle Price', val: '400000' },
                        { id: 's-basic-slots', label: 'Basic Child Slots', val: '1' },
                        { id: 's-premium-slots', label: 'Premium Child Slots', val: '3' },
                        { id: 's-school-slots', label: 'School Bundle Slots', val: '10' },
                    ].map(f => (
                        <div key={f.id} className="adm-form-field" style={{ marginBottom: 14 }}>
                            <label htmlFor={f.id} className="adm-form-label">{f.label}</label>
                            <input id={f.id} type="number" className="adm-form-input" defaultValue={f.val} />
                        </div>
                    ))}
                    <button className="adm-btn adm-btn--primary" id="adm-save-plans-btn" style={{ marginTop: 8 }}>Update Plans</button>
                </div>
            </div>

            {/* Admin accounts */}
            <div className="adm-card" style={{ gridColumn: '1 / -1' }}>
                <div className="adm-card__header">
                    <h3 className="adm-card__title">👮 Admin Accounts</h3>
                    <button className="adm-btn adm-btn--primary adm-btn--sm" id="adm-add-admin-btn">+ Add Admin</button>
                </div>
                <div className="adm-table-wrap">
                    <table className="adm-table">
                        <thead><tr>{['Name', 'Email', 'Role', 'Last Login', 'Actions'].map(h => <th key={h}>{h}</th>)}</tr></thead>
                        <tbody>
                            {USERS.filter(u => u.role === 'admin').map(u => (
                                <tr key={u.id}>
                                    <td className="adm-table__strong">{u.name}</td>
                                    <td>{u.email}</td>
                                    <td><span className="adm-chip" style={{ background: roleBg(u.role), color: roleFg(u.role) }}>{u.role}</span></td>
                                    <td className="adm-table__muted">{u.lastLogin}</td>
                                    <td><div className="adm-row-actions"><button className="adm-btn adm-btn--xs adm-btn--outline" id={`adm-edit-admin-${u.id}`}>Edit</button></div></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
);

/* ══════════════════════════════════════════════════
   TABS CONFIG
══════════════════════════════════════════════════ */
const TABS = [
    { id: 'overview', icon: '🏠', label: 'Dashboard' },
    { id: 'users', icon: '👥', label: 'Users' },
    { id: 'pupils', icon: '👧', label: 'Pupils' },
    { id: 'questions', icon: '❓', label: 'Questions' },
    { id: 'subjects', icon: '📚', label: 'Subjects' },
    { id: 'worksheets', icon: '📋', label: 'Worksheets' },
    { id: 'subscriptions', icon: '💳', label: 'Subscriptions' },
    { id: 'analytics', icon: '📊', label: 'Analytics' },
    { id: 'settings', icon: '⚙️', label: 'Settings' },
];

/* ══════════════════════════════════════════════════
   MAIN COMPONENT
══════════════════════════════════════════════════ */
const AdminPanel = () => {
    const [tab, setTab] = useState('overview');
    const [toast, setToast] = useState(null);

    const showToast = (msg, type = 'success') => {
        setToast({ msg, type });
        setTimeout(() => setToast(null), 3000);
    };

    const renderSection = () => {
        switch (tab) {
            case 'overview': return <OverviewSection setTab={setTab} />;
            case 'users': return <UsersSection />;
            case 'pupils': return <PupilsSection />;
            case 'questions': return <QuestionsSection />;
            case 'subjects': return <SubjectsSection />;
            case 'worksheets': return <WorksheetsAdminSection />;
            case 'subscriptions': return <SubscriptionsSection />;
            case 'analytics': return <AnalyticsSection />;
            case 'settings': return <SettingsSection />;
            default: return <OverviewSection setTab={setTab} />;
        }
    };

    const current = TABS.find(t => t.id === tab);

    return (
        <div className="adm-root">

            {/* Toast */}
            {toast && (
                <div className={`adm-toast adm-toast--${toast.type}`} role="alert">
                    {toast.type === 'success' ? '✅' : '❌'} {toast.msg}
                </div>
            )}

            {/* ── LEFT SIDEBAR ── */}
            <aside className="adm-sidebar">
                <div className="adm-sidebar__brand">
                    <Link to="/" className="adm-brand-link">
                        <span className="adm-brand-icon">🟡</span>
                        <span className="adm-brand-name">NPSE Prep</span>
                    </Link>
                    <span className="adm-brand-badge">ADMIN</span>
                </div>

                <nav className="adm-nav" aria-label="Admin navigation">
                    {TABS.map(t => (
                        <button
                            key={t.id}
                            id={`adm-nav-${t.id}`}
                            className={`adm-nav__item ${tab === t.id ? 'adm-nav__item--active' : ''}`}
                            onClick={() => setTab(t.id)}
                        >
                            <span className="adm-nav__icon">{t.icon}</span>
                            <span className="adm-nav__label">{t.label}</span>
                            {t.id === 'questions' && <span className="adm-nav__count">{STATS.totalQuestions.toLocaleString()}</span>}
                            {t.id === 'users' && <span className="adm-nav__count">{STATS.totalUsers}</span>}
                        </button>
                    ))}
                </nav>

                <div className="adm-sidebar__footer">
                    <div className="adm-admin-pill">
                        <span className="adm-admin-pill__avatar">👤</span>
                        <div>
                            <div className="adm-admin-pill__name">Admin</div>
                            <div className="adm-admin-pill__role">Super Admin</div>
                        </div>
                        <Link to="/" className="adm-admin-pill__exit" title="Back to site">↩</Link>
                    </div>
                </div>
            </aside>

            {/* ── MAIN CONTENT ── */}
            <div className="adm-content">

                {/* Top bar */}
                <header className="adm-topbar">
                    <div className="adm-topbar__left">
                        <h1 className="adm-topbar__title">
                            {current?.icon} {current?.label}
                        </h1>
                        <span className="adm-topbar__sub">NPSE Prep Admin Panel</span>
                    </div>
                    <div className="adm-topbar__right">
                        <div className="adm-topbar__stats">
                            <span className="adm-topbar__stat"><span>🟢</span> {STATS.activeToday} active today</span>
                            <span className="adm-topbar__divider" />
                            <span className="adm-topbar__stat">💳 {STATS.activeSubscriptions} subscriptions</span>
                        </div>
                        <button className="adm-btn adm-btn--outline adm-btn--sm" id="adm-refresh-btn" onClick={() => showToast('Data refreshed!')}>🔄 Refresh</button>
                        <Link to="/" className="adm-btn adm-btn--outline adm-btn--sm" id="adm-view-site-btn">← View Site</Link>
                    </div>
                </header>

                {/* Page body */}
                <main className="adm-main">
                    {renderSection()}
                </main>
            </div>
        </div>
    );
};

export default AdminPanel;
