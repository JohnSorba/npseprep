import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:5000';

const Dashboard = () => {
    const { user, logout } = useAuth();
    const navigate = useNavigate();
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        if (!user) {
            navigate('/login');
            return;
        }
        fetchDashboard();
    }, [user]);

    const fetchDashboard = async () => {
        try {
            const token = localStorage.getItem('token');
            const res = await fetch(`${API_BASE}/api/dashboard/summary`, {
                headers: { Authorization: `Bearer ${token}` }
            });
            if (!res.ok) throw new Error('Failed to load dashboard');
            const json = await res.json();
            setData(json);
        } catch (err) {
            // Fallback to empty data when backend is not available (demo mode)
            console.warn('Dashboard API unavailable, using demo data:', err.message);
            setData({
                totalQuizzes: 0,
                averageScore: 0,
                recentAttempts: [],
                mockExamResults: [],
                weakestTopics: [],
                subjectPerformance: []
            });
        } finally {
            setLoading(false);
        }
    };

    if (!user) return null;

    // ── Score colour helper ──
    const scoreColor = (pct) => {
        if (pct >= 80) return '#0FA958';
        if (pct >= 60) return '#0c8ce9';
        if (pct >= 40) return '#f59e0b';
        return '#ef4444';
    };

    const formatDate = (d) => new Date(d).toLocaleDateString('en-GB', {
        day: 'numeric', month: 'short', year: 'numeric'
    });

    // ── Loading State ──
    if (loading) {
        return (
            <>
                <section className="page-hero">
                    <div className="container">
                        <h1>My Dashboard</h1>
                        <p className="page-hero__subtitle">Loading your progress…</p>
                    </div>
                </section>
                <section className="platform-section" style={{ textAlign: 'center', padding: 'var(--space-16) 0' }}>
                    <div className="container">
                        <div style={{ fontSize: '3rem', marginBottom: 'var(--space-4)', animation: 'pulse 1.5s infinite' }}>📊</div>
                        <p style={{ color: '#888' }}>Fetching your performance data…</p>
                    </div>
                </section>
            </>
        );
    }

    // ── Error State ──
    if (error) {
        return (
            <>
                <section className="page-hero">
                    <div className="container">
                        <h1>My Dashboard</h1>
                    </div>
                </section>
                <section className="platform-section" style={{ textAlign: 'center', padding: 'var(--space-16) 0' }}>
                    <div className="container">
                        <div style={{ fontSize: '3rem', marginBottom: 'var(--space-4)' }}>⚠️</div>
                        <p style={{ color: '#ef4444', marginBottom: 'var(--space-4)' }}>{error}</p>
                        <button className="hero-cta hero-cta--primary" onClick={fetchDashboard}>Try Again</button>
                    </div>
                </section>
            </>
        );
    }

    const hasAttempts = data && data.totalQuizzes > 0;

    return (
        <>
            {/* ─── Header ─── */}
            <section className="page-hero">
                <div className="container">
                    <p className="platform-section__eyebrow" style={{ color: 'rgba(255,255,255,0.5)' }}>Dashboard</p>
                    <h1>Welcome back, {user.name}! 👋</h1>
                    <p className="page-hero__subtitle">Track your NPSE preparation progress</p>
                </div>
            </section>

            {/* ─── Overview Cards ─── */}
            <section className="platform-section" style={{ marginTop: '-40px' }}>
                <div className="container">
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                        gap: 'var(--space-5)'
                    }}>
                        {[
                            { icon: '📝', value: data.totalQuizzes, label: 'Quizzes Taken', color: 'var(--color-green)' },
                            { icon: '🎯', value: `${data.averageScore}%`, label: 'Average Score', color: scoreColor(data.averageScore) },
                            { icon: '📚', value: data.mockExamResults?.length || 0, label: 'Mock Exams', color: '#9333ea' },
                            { icon: '💡', value: data.weakestTopics?.length || 0, label: 'Weak Areas', color: '#f59e0b' },
                        ].map((stat, i) => (
                            <div key={i} className="donate-form-themed" style={{ textAlign: 'center', padding: 'var(--space-6)' }}>
                                <div style={{ fontSize: '2rem', marginBottom: 'var(--space-2)' }}>{stat.icon}</div>
                                <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '1.5rem', fontWeight: 700, color: stat.color }}>
                                    {stat.value}
                                </div>
                                <div style={{ color: '#888', fontSize: '0.8rem', marginTop: 'var(--space-1)' }}>{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── Main Content Grid ─── */}
            <section className="platform-section platform-section--alt">
                <div className="container">
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
                        gap: 'var(--space-8)',
                        alignItems: 'start'
                    }}>
                        {/* ── Recent Attempts ── */}
                        <div className="donate-form-themed">
                            <h3 style={{ marginBottom: 'var(--space-4)', display: 'flex', alignItems: 'center', gap: 'var(--space-2)', color: 'var(--color-navy)' }}>
                                🕓 Recent Attempts
                            </h3>

                            {!hasAttempts ? (
                                <div style={{ textAlign: 'center', padding: 'var(--space-8)', color: '#888' }}>
                                    <div style={{ fontSize: '2rem', marginBottom: 'var(--space-3)' }}>🎯</div>
                                    <p>You haven't taken any quizzes yet.</p>
                                    <Link to="/quiz" className="access-card__cta access-card__cta--primary" style={{ display: 'inline-flex', marginTop: 'var(--space-3)' }}>
                                        Start a Quiz →
                                    </Link>
                                </div>
                            ) : (
                                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
                                    {data.recentAttempts.map((attempt) => (
                                        <div key={attempt.id} style={{
                                            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                                            padding: 'var(--space-3) var(--space-4)',
                                            background: 'var(--color-ivory)',
                                            borderRadius: 'var(--radius-md)',
                                            borderLeft: `3px solid ${scoreColor(parseFloat(attempt.percentage))}`
                                        }}>
                                            <div>
                                                <div style={{ fontWeight: 600, fontSize: '0.85rem', textTransform: 'capitalize' }}>
                                                    {attempt.quiz_type === 'mock' ? '📚 Mock Exam' : '📝 Quiz'}
                                                </div>
                                                <div style={{ color: '#888', fontSize: '0.72rem' }}>
                                                    {formatDate(attempt.created_at)}
                                                </div>
                                            </div>
                                            <div style={{
                                                fontFamily: "'IBM Plex Mono', monospace",
                                                fontWeight: 700, color: scoreColor(parseFloat(attempt.percentage)),
                                                fontSize: '1rem'
                                            }}>
                                                {attempt.score}/{attempt.total_questions}
                                                <span style={{ fontSize: '0.7rem', marginLeft: '4px', fontWeight: 500 }}>
                                                    ({attempt.percentage}%)
                                                </span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* ── Right Column ── */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-8)' }}>

                            {/* ── Subject Performance ── */}
                            <div className="donate-form-themed">
                                <h3 style={{ marginBottom: 'var(--space-4)', display: 'flex', alignItems: 'center', gap: 'var(--space-2)', color: 'var(--color-navy)' }}>
                                    📊 Subject Performance
                                </h3>

                                {data.subjectPerformance && data.subjectPerformance.length > 0 ? (
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
                                        {data.subjectPerformance.map((sp) => (
                                            <div key={sp.id}>
                                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                                                    <span style={{ fontWeight: 500, fontSize: '0.85rem' }}>{sp.name}</span>
                                                    <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontWeight: 600, color: scoreColor(parseFloat(sp.accuracy)), fontSize: '0.85rem' }}>
                                                        {sp.accuracy}%
                                                    </span>
                                                </div>
                                                <div style={{
                                                    width: '100%', height: '6px',
                                                    background: 'var(--color-ivory)',
                                                    borderRadius: '3px'
                                                }}>
                                                    <div style={{
                                                        width: `${sp.accuracy}%`, height: '100%',
                                                        background: scoreColor(parseFloat(sp.accuracy)),
                                                        borderRadius: '3px', transition: 'width 0.6s ease'
                                                    }} />
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                ) : (
                                    <p style={{ color: '#888', textAlign: 'center', padding: 'var(--space-4)' }}>
                                        Complete quizzes to see your subject breakdown.
                                    </p>
                                )}
                            </div>

                            {/* ── Weakest Topics ── */}
                            <div className="donate-form-themed">
                                <h3 style={{ marginBottom: 'var(--space-4)', display: 'flex', alignItems: 'center', gap: 'var(--space-2)', color: 'var(--color-navy)' }}>
                                    ⚠️ Areas to Improve
                                </h3>

                                {data.weakestTopics && data.weakestTopics.length > 0 ? (
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
                                        {data.weakestTopics.map((wt) => (
                                            <div key={wt.id} style={{
                                                padding: 'var(--space-3) var(--space-4)',
                                                background: 'rgba(239,68,68,0.04)',
                                                borderRadius: 'var(--radius-md)',
                                                display: 'flex', justifyContent: 'space-between',
                                                alignItems: 'center'
                                            }}>
                                                <div>
                                                    <div style={{ fontWeight: 600, fontSize: '0.85rem' }}>{wt.topic_name}</div>
                                                    <div style={{ fontSize: '0.72rem', color: '#888' }}>{wt.subject_name}</div>
                                                </div>
                                                <div style={{
                                                    fontFamily: "'IBM Plex Mono', monospace",
                                                    fontWeight: 700, color: '#ef4444', fontSize: '0.85rem'
                                                }}>
                                                    {wt.accuracy}%
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                ) : (
                                    <p style={{ color: '#888', textAlign: 'center', padding: 'var(--space-4)' }}>
                                        {hasAttempts ? 'Great job! No weak areas detected yet.' : 'Take quizzes to identify areas for improvement.'}
                                    </p>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* ── Quick Actions ── */}
                    <section className="support-section" style={{ marginTop: 'var(--space-10)', borderRadius: 'var(--radius-xl)', overflow: 'hidden' }}>
                        <div className="container">
                            <div className="support-section__inner" style={{ textAlign: 'center', maxWidth: '600px' }}>
                                <div className="support-section__content">
                                    <h2>Keep Practising! 🚀</h2>
                                    <p>Consistent practice is the key to NPSE success.</p>
                                    <div style={{ display: 'flex', gap: 'var(--space-3)', justifyContent: 'center', flexWrap: 'wrap', marginTop: 'var(--space-6)' }}>
                                        <Link to="/quiz" className="hero-cta hero-cta--primary">🎯 Take a Quiz</Link>
                                        <Link to="/mock-exams" className="hero-cta hero-cta--secondary">📚 Mock Exam</Link>
                                        <Link to="/notes" className="hero-cta hero-cta--secondary" style={{ background: 'transparent' }}>📖 Study Notes</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </section>
        </>
    );
};

export default Dashboard;
