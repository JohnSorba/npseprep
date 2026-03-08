import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/PupilDashboard.css';
import '../styles/PupilHome.css';

/* ─────────────────────────── DATA ─────────────────────────── */

const PUPIL = {
    name: 'Aminata',
    streak: 5,
    totalPoints: 2480,
    rank: 4,
    overallProgress: 38,
};

const EXAM_DAYS = 42;
const EXAM_WEEKS = 6;

const SUBJECTS = [
    {
        id: 'english',
        name: 'English Language',
        icon: '📖',
        color: '#9333ea',
        bgColor: '#f3e8ff',
        completion: 45,
        topicsTotal: 8,
        topicsDone: 3,
        nextTopic: 'Verb Tenses & Usage',
        quizScore: 72,
        path: '/dashboard/pupil/english',
    },
    {
        id: 'mathematics',
        name: 'Mathematics',
        icon: '📐',
        color: '#0c8ce9',
        bgColor: '#e0efff',
        completion: 60,
        topicsTotal: 8,
        topicsDone: 5,
        nextTopic: 'Geometry (Lines & Angles)',
        quizScore: 81,
        path: '/dashboard/pupil/mathematics',
    },
    {
        id: 'quantitative',
        name: 'Quantitative Aptitude',
        icon: '🔢',
        color: '#f97316',
        bgColor: '#fff7ed',
        completion: 25,
        topicsTotal: 7,
        topicsDone: 2,
        nextTopic: 'Sets and Venn Diagrams',
        quizScore: 58,
        path: '/dashboard/pupil/quantitative',
    },
    {
        id: 'verbal',
        name: 'Verbal Aptitude',
        icon: '💬',
        color: '#10b981',
        bgColor: '#ecfdf5',
        completion: 30,
        topicsTotal: 7,
        topicsDone: 2,
        nextTopic: 'Analogies',
        quizScore: 65,
        path: '/dashboard/pupil/verbal',
    },
    {
        id: 'social-studies',
        name: 'Social Studies',
        icon: '🌍',
        color: '#ec4899',
        bgColor: '#fce7f3',
        completion: 35,
        topicsTotal: 6,
        topicsDone: 2,
        nextTopic: 'Sierra Leone History',
        quizScore: 78,
        path: '/dashboard/pupil/social-studies',
    },
    {
        id: 'science',
        name: 'Integrated Science',
        icon: '🔬',
        color: '#0ea5e9',
        bgColor: '#e0f2fe',
        completion: 20,
        topicsTotal: 8,
        topicsDone: 1,
        nextTopic: 'Human Systems',
        quizScore: 62,
        path: '/dashboard/pupil/science',
    },
    {
        id: 'health-ed',
        name: 'Health Education',
        icon: '🏥',
        color: '#10b981',
        bgColor: '#ecfdf5',
        completion: 40,
        topicsTotal: 5,
        topicsDone: 2,
        nextTopic: 'Balanced Diets',
        quizScore: 85,
        path: '/dashboard/pupil/health-ed',
    },
    {
        id: 'home-economics',
        name: 'Home Economics',
        icon: '🍳',
        color: '#f59e0b',
        bgColor: '#fffbeb',
        completion: 15,
        topicsTotal: 6,
        topicsDone: 1,
        nextTopic: 'Home Management',
        quizScore: 55,
        path: '/dashboard/pupil/home-economics',
    },
    {
        id: 'ag-science',
        name: 'Agricultural Science',
        icon: '🌱',
        color: '#84cc16',
        bgColor: '#f7fee7',
        completion: 10,
        topicsTotal: 7,
        topicsDone: 0,
        nextTopic: 'Farm Tools',
        quizScore: 0,
        path: '/dashboard/pupil/ag-science',
    },
];

const MISSIONS = [
    {
        id: 1,
        type: 'review',
        icon: '🔄',
        label: 'Review Mistakes',
        desc: 'You got 3 wrong in your last English quiz.',
        subject: 'English Language',
        subjectColor: '#9333ea',
        cta: 'Review Now',
        ctaStyle: 'ph-mission-btn--purple',
    },
    {
        id: 2,
        type: 'practice',
        icon: '📐',
        label: 'Practice Weak Topic',
        desc: 'Geometry is your weakest area — let\'s fix it!',
        subject: 'Mathematics',
        subjectColor: '#0c8ce9',
        cta: 'Start Practice',
        ctaStyle: 'ph-mission-btn--blue',
    },
    {
        id: 3,
        type: 'game',
        icon: '🎮',
        label: 'Play a Learning Game',
        desc: 'Word Scramble today — fun + vocabulary boost.',
        subject: 'Verbal Aptitude',
        subjectColor: '#10b981',
        cta: 'Play Game',
        ctaStyle: 'ph-mission-btn--green',
    },
];

const RECENT_ACTIVITY = [
    { id: 1, type: 'quiz', subject: 'Mathematics', score: 81, total: 100, timeAgo: '2h ago', icon: '📐', color: '#0c8ce9' },
    { id: 2, type: 'notes', subject: 'English Language', topic: 'Nouns & Pronouns', timeAgo: '1d ago', icon: '📖', color: '#9333ea' },
    { id: 3, type: 'quiz', subject: 'Verbal Aptitude', score: 65, total: 100, timeAgo: '2d ago', icon: '💬', color: '#10b981' },
    { id: 4, type: 'game', subject: 'Word Scramble', result: 'Level 3 cleared', timeAgo: '3d ago', icon: '🎮', color: '#f97316' },
];

const QUICK_ACTIONS = [
    { id: 'qa-practice', icon: '🎯', label: 'Quick Practice', desc: '10 random questions', to: '/quiz', color: '#1B8A5A', bg: '#ecfdf5' },
    { id: 'qa-mock', icon: '📋', label: 'Mock Exam', desc: 'Full NPSE paper', to: '/mock-exams', color: '#1E6FB8', bg: '#e0efff' },
    { id: 'qa-notes', icon: '📚', label: 'Study Notes', desc: 'Read & revise topics', to: '/notes', color: '#9333ea', bg: '#f3e8ff' },
    { id: 'qa-games', icon: '🎮', label: 'Play Games', desc: 'Learn while having fun', to: '/games', color: '#f97316', bg: '#fff7ed' },
];

const LEADERBOARD = [
    { rank: 1, name: 'Amadu S.', points: 3200, trend: 'up', isMe: false },
    { rank: 2, name: 'Fatu K.', points: 2950, trend: 'up', isMe: false },
    { rank: 3, name: 'Mohamed B.', points: 2610, trend: 'neutral', isMe: false },
    { rank: 4, name: 'Aminata', points: 2480, trend: 'up', isMe: true },
    { rank: 5, name: 'David O.', points: 2310, trend: 'down', isMe: false },
];

const STUDY_TIP = '"Break your revision into 25-minute focused sessions, then take a 5-minute break. This Pomodoro method helps your brain retain information better."';

/* ─────────────────────────── HELPERS ─────────────────────────── */

const scoreColor = (pct) => {
    if (pct >= 80) return '#1B8A5A';
    if (pct >= 65) return '#0c8ce9';
    if (pct >= 50) return '#f59e0b';
    return '#ef4444';
};

const TrendIcon = ({ trend }) => {
    if (trend === 'up') return <span className="lb-trend lb-trend--up">↗</span>;
    if (trend === 'down') return <span className="lb-trend lb-trend--down">↘</span>;
    return <span className="lb-trend lb-trend--neutral">—</span>;
};

/* ─────────────────────────── COMPONENT ─────────────────────────── */

const PupilHome = () => {
    const [search, setSearch] = useState('');

    /* Filter subjects by search */
    const visibleSubjects = SUBJECTS.filter(s =>
        search.trim() === '' ||
        s.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="pd-root">

            {/* ══════════ DASHBOARD NAV (same pattern as subject page) ══════════ */}
            <header className="pd-nav">
                <div className="pd-nav__inner">
                    <Link to="/" className="pd-nav__logo">
                        <span className="pd-nav__logo-icon">🟡</span>
                        <span className="pd-nav__logo-text">NPSE Prep</span>
                    </Link>

                    <nav className="pd-nav__links">
                        <Link to="/dashboard/pupil" className="pd-nav__link pd-nav__link--active">Home</Link>
                        <Link to="/dashboard/pupil/english" className="pd-nav__link">Subjects</Link>
                        <Link to="/quiz" className="pd-nav__link">Quizzes</Link>
                        <Link to="/study-tips" className="pd-nav__link">Study Tips</Link>
                        <Link to="/leaderboard" className="pd-nav__link">Leaderboard</Link>
                    </nav>

                    <div className="pd-nav__right">
                        <div className="pd-search">
                            <span className="pd-search__icon">🔍</span>
                            <input
                                id="ph-search-input"
                                type="text"
                                placeholder="Search subjects…"
                                className="pd-search__input"
                                value={search}
                                onChange={e => setSearch(e.target.value)}
                            />
                        </div>
                        <div className="pd-streak">
                            <span className="pd-streak__label">CURRENT STREAK</span>
                            <span className="pd-streak__value">🔥 {PUPIL.streak} Days</span>
                        </div>
                        <div className="pd-avatar" aria-label="Profile">👤</div>
                    </div>
                </div>
            </header>

            {/* ══════════ BODY ══════════ */}
            <div className="pd-body">

                {/* ── MAIN COLUMN ── */}
                <main className="pd-main">

                    {/* ── Welcome Banner ── */}
                    <div className="ph-welcome">
                        <div className="ph-welcome__left">
                            <p className="ph-welcome__eyebrow">Good afternoon 👋</p>
                            <h1 className="ph-welcome__name">Welcome back, {PUPIL.name}!</h1>
                            <p className="ph-welcome__sub">
                                You're on a <strong>{PUPIL.streak}-day streak</strong> — keep it up!
                                Your NPSE exam is in <strong>{EXAM_DAYS} days</strong>.
                            </p>
                            <div className="ph-welcome__stats">
                                <div className="ph-welcome__stat">
                                    <span className="ph-welcome__stat-val">{PUPIL.totalPoints.toLocaleString()}</span>
                                    <span className="ph-welcome__stat-label">Total Points</span>
                                </div>
                                <div className="ph-welcome__stat-divider" />
                                <div className="ph-welcome__stat">
                                    <span className="ph-welcome__stat-val">#{PUPIL.rank}</span>
                                    <span className="ph-welcome__stat-label">Your Rank</span>
                                </div>
                                <div className="ph-welcome__stat-divider" />
                                <div className="ph-welcome__stat">
                                    <span className="ph-welcome__stat-val">{PUPIL.overallProgress}%</span>
                                    <span className="ph-welcome__stat-label">Overall Progress</span>
                                </div>
                            </div>
                        </div>
                        <div className="ph-welcome__right" aria-hidden="true">
                            <div className="ph-welcome__orb ph-welcome__orb--1" />
                            <div className="ph-welcome__orb ph-welcome__orb--2" />
                            <span className="ph-welcome__emoji">🎓</span>
                        </div>
                    </div>

                    {/* ── Today's Mission ── */}
                    <section className="ph-section" aria-labelledby="ph-mission-title">
                        <div className="ph-section__header">
                            <h2 className="ph-section__title" id="ph-mission-title">🎯 Today's Mission</h2>
                            <span className="ph-section__badge">3 tasks</span>
                        </div>
                        <div className="ph-mission-grid">
                            {MISSIONS.map(m => (
                                <div key={m.id} className="ph-mission-card" id={`ph-mission-${m.id}`}>
                                    <div className="ph-mission-card__top">
                                        <span className="ph-mission-card__icon">{m.icon}</span>
                                        <span
                                            className="ph-mission-card__subject"
                                            style={{ color: m.subjectColor }}
                                        >
                                            {m.subject}
                                        </span>
                                    </div>
                                    <p className="ph-mission-card__label">{m.label}</p>
                                    <p className="ph-mission-card__desc">{m.desc}</p>
                                    <button className={`ph-mission-btn ${m.ctaStyle}`} id={`ph-mission-cta-${m.id}`}>
                                        {m.cta} →
                                    </button>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* ── Quick Actions ── */}
                    <section className="ph-section" aria-labelledby="ph-actions-title">
                        <div className="ph-section__header">
                            <h2 className="ph-section__title" id="ph-actions-title">⚡ Quick Actions</h2>
                        </div>
                        <div className="ph-actions-grid">
                            {QUICK_ACTIONS.map(a => (
                                <Link
                                    key={a.id}
                                    id={a.id}
                                    to={a.to}
                                    className="ph-action-card"
                                    style={{ '--action-color': a.color, '--action-bg': a.bg }}
                                >
                                    <span className="ph-action-card__icon" style={{ background: a.bg, color: a.color }}>
                                        {a.icon}
                                    </span>
                                    <span className="ph-action-card__label">{a.label}</span>
                                    <span className="ph-action-card__desc">{a.desc}</span>
                                </Link>
                            ))}
                        </div>
                    </section>

                    {/* ── My Subjects ── */}
                    <section className="ph-section" aria-labelledby="ph-subjects-title">
                        <div className="ph-section__header">
                            <h2 className="ph-section__title" id="ph-subjects-title">📚 My Subjects</h2>
                            <span className="ph-section__sub">{SUBJECTS.length} subjects</span>
                        </div>
                        <div className="ph-subjects-list">
                            {visibleSubjects.map(sub => (
                                <Link
                                    key={sub.id}
                                    to={sub.path}
                                    id={`ph-subject-${sub.id}`}
                                    className="ph-subject-row"
                                    style={{ '--sub-color': sub.color }}
                                >
                                    {/* Left colour bar */}
                                    <div className="ph-subject-row__bar" style={{ background: sub.color }} />

                                    {/* Icon */}
                                    <div
                                        className="ph-subject-row__icon"
                                        style={{ background: sub.bgColor, color: sub.color }}
                                    >
                                        {sub.icon}
                                    </div>

                                    {/* Info */}
                                    <div className="ph-subject-row__info">
                                        <div className="ph-subject-row__name-row">
                                            <span className="ph-subject-row__name">{sub.name}</span>
                                            <span className="ph-subject-row__topics">
                                                {sub.topicsDone}/{sub.topicsTotal} topics
                                            </span>
                                        </div>
                                        <div className="ph-subject-row__progress-wrap">
                                            <div className="ph-subject-row__progress-bar">
                                                <div
                                                    className="ph-subject-row__progress-fill"
                                                    style={{ width: `${sub.completion}%`, background: sub.color }}
                                                />
                                            </div>
                                            <span className="ph-subject-row__pct">{sub.completion}%</span>
                                        </div>
                                        <p className="ph-subject-row__next">
                                            Next: {sub.nextTopic}
                                        </p>
                                    </div>

                                    {/* Quiz score chip */}
                                    <div className="ph-subject-row__score-wrap">
                                        <span
                                            className="ph-subject-row__score"
                                            style={{ color: scoreColor(sub.quizScore), borderColor: scoreColor(sub.quizScore) + '33' }}
                                        >
                                            {sub.quizScore}%
                                        </span>
                                        <span className="ph-subject-row__score-label">Avg. Score</span>
                                    </div>

                                    {/* Arrow */}
                                    <span className="ph-subject-row__arrow" aria-hidden="true">›</span>
                                </Link>
                            ))}
                        </div>
                    </section>

                    {/* ── Recent Activity ── */}
                    <section className="ph-section" aria-labelledby="ph-activity-title">
                        <div className="ph-section__header">
                            <h2 className="ph-section__title" id="ph-activity-title">🕓 Recent Activity</h2>
                        </div>
                        <div className="ph-activity-list">
                            {RECENT_ACTIVITY.map(item => (
                                <div key={item.id} className="ph-activity-row" id={`ph-activity-${item.id}`}>
                                    <div
                                        className="ph-activity-row__icon"
                                        style={{ background: item.color + '18', color: item.color }}
                                    >
                                        {item.icon}
                                    </div>
                                    <div className="ph-activity-row__info">
                                        <span className="ph-activity-row__subject">{item.subject}</span>
                                        {item.type === 'quiz' && (
                                            <span className="ph-activity-row__detail">
                                                Quiz · Scored <strong style={{ color: scoreColor(item.score) }}>{item.score}%</strong>
                                            </span>
                                        )}
                                        {item.type === 'notes' && (
                                            <span className="ph-activity-row__detail">Notes read · {item.topic}</span>
                                        )}
                                        {item.type === 'game' && (
                                            <span className="ph-activity-row__detail">Game · {item.result}</span>
                                        )}
                                    </div>
                                    <span className="ph-activity-row__time">{item.timeAgo}</span>
                                </div>
                            ))}
                        </div>
                    </section>

                </main>

                {/* ── SIDEBAR ── */}
                <aside className="pd-sidebar">

                    {/* Exam Countdown */}
                    <div className="pd-sidebar-card pd-exam-card">
                        <div className="pd-exam-card__header">
                            <span className="pd-exam-card__title">NPSE Exam Date</span>
                            <span className="pd-exam-card__icon">📅</span>
                        </div>
                        <div className="pd-exam-card__countdown">
                            <div className="pd-exam-tile">
                                <span className="pd-exam-tile__num">{String(EXAM_DAYS).padStart(2, '0')}</span>
                                <span className="pd-exam-tile__unit">DAYS LEFT</span>
                            </div>
                            <div className="pd-exam-tile">
                                <span className="pd-exam-tile__num">{String(EXAM_WEEKS).padStart(2, '0')}</span>
                                <span className="pd-exam-tile__unit">WEEKS</span>
                            </div>
                        </div>
                        <p className="pd-exam-card__quote">
                            "Education is the most powerful weapon which you can use to change the world."
                        </p>
                    </div>

                    {/* Overall Progress */}
                    <div className="pd-sidebar-card">
                        <div className="pd-lb-header">
                            <span className="pd-lb-header__icon">📊</span>
                            <span className="pd-lb-header__title">Overall Progress</span>
                        </div>
                        <div className="ph-progress-subjects">
                            {SUBJECTS.map(sub => (
                                <div key={sub.id} className="ph-progress-row">
                                    <span className="ph-progress-row__icon">{sub.icon}</span>
                                    <div className="ph-progress-row__bar-wrap">
                                        <div className="ph-progress-row__label-row">
                                            <span className="ph-progress-row__name">{sub.name.split(' ')[0]}</span>
                                            <span className="ph-progress-row__pct" style={{ color: sub.color }}>
                                                {sub.completion}%
                                            </span>
                                        </div>
                                        <div className="ph-progress-row__bar">
                                            <div
                                                className="ph-progress-row__fill"
                                                style={{ width: `${sub.completion}%`, background: sub.color }}
                                            />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Leaderboard */}
                    <div className="pd-sidebar-card">
                        <div className="pd-lb-header">
                            <span className="pd-lb-header__icon">🏆</span>
                            <span className="pd-lb-header__title">Top Students</span>
                        </div>
                        <ol className="pd-lb-list">
                            {LEADERBOARD.map(entry => (
                                <li
                                    key={entry.rank}
                                    className={`pd-lb-row ${entry.isMe ? 'pd-lb-row--me' : ''}`}
                                >
                                    <span className="pd-lb-rank">{entry.rank}</span>
                                    <div className="pd-lb-avatar" aria-hidden="true">
                                        {entry.isMe ? '🙋' : '👤'}
                                    </div>
                                    <div className="pd-lb-info">
                                        <span className="pd-lb-name">
                                            {entry.name}{entry.isMe && <span className="ph-me-tag"> (You)</span>}
                                        </span>
                                        <span className="pd-lb-pts">{entry.points.toLocaleString()} pts</span>
                                    </div>
                                    <TrendIcon trend={entry.trend} />
                                </li>
                            ))}
                        </ol>
                        <Link to="/leaderboard" id="ph-full-leaderboard-link" className="pd-lb-full-link">
                            FULL LEADERBOARD
                        </Link>
                    </div>

                    {/* Study Tip */}
                    <div className="pd-sidebar-card pd-tip-card">
                        <div className="pd-tip-card__header">
                            <span className="pd-tip-card__icon">💡</span>
                            <span className="pd-tip-card__title">Study Tip</span>
                        </div>
                        <p className="pd-tip-card__text">{STUDY_TIP}</p>
                    </div>

                </aside>
            </div>
        </div>
    );
};

export default PupilHome;
