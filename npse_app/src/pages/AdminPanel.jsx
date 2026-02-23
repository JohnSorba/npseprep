import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:5000';

const AdminPanel = () => {
    const { user } = useAuth();
    const navigate = useNavigate();

    // ── State ──────────────────────────────────────────────────
    const [activeTab, setActiveTab] = useState('overview');
    const [stats, setStats] = useState(null);
    const [subjects, setSubjects] = useState([]);
    const [topics, setTopics] = useState([]);
    const [questions, setQuestions] = useState([]);
    const [questionsTotal, setQuestionsTotal] = useState(0);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    // Filters
    const [filterSubject, setFilterSubject] = useState('');
    const [filterTopic, setFilterTopic] = useState('');

    // New question form
    const emptyQuestion = {
        subject_id: '', topic_id: '', difficulty: 'medium', stem: '',
        option_a: '', option_b: '', option_c: '', option_d: '', option_e: '',
        correct_answer: 'A', explanation: '', tags: []
    };
    const [formData, setFormData] = useState(emptyQuestion);
    const [editingId, setEditingId] = useState(null);

    // New subject / topic
    const [newSubjectName, setNewSubjectName] = useState('');
    const [newTopicName, setNewTopicName] = useState('');
    const [newTopicSubject, setNewTopicSubject] = useState('');

    const token = localStorage.getItem('token');
    const authHeaders = { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' };

    // ── Auth guard ─────────────────────────────────────────────
    useEffect(() => {
        if (!user || user.role !== 'admin') {
            navigate('/');
        }
    }, [user]);

    // ── Load data ──────────────────────────────────────────────
    useEffect(() => {
        if (user?.role === 'admin') {
            loadData();
        }
    }, [user]);

    const loadData = async () => {
        setLoading(true);
        try {
            const [statsRes, subjectsRes] = await Promise.all([
                fetch(`${API_BASE}/api/admin/stats`, { headers: authHeaders }),
                fetch(`${API_BASE}/api/subjects`)
            ]);

            if (statsRes.ok) setStats(await statsRes.json());
            if (subjectsRes.ok) setSubjects(await subjectsRes.json());
        } catch (err) {
            setError('Failed to load admin data');
        } finally {
            setLoading(false);
        }
    };

    const loadQuestions = async (subjectId = '', topicId = '') => {
        try {
            let url = `${API_BASE}/api/admin/questions?limit=50`;
            if (subjectId) url += `&subject_id=${subjectId}`;
            if (topicId) url += `&topic_id=${topicId}`;

            const res = await fetch(url, { headers: authHeaders });
            if (res.ok) {
                const data = await res.json();
                setQuestions(data.questions || []);
                setQuestionsTotal(data.total || 0);
            }
        } catch (err) {
            setError('Failed to load questions');
        }
    };

    const loadTopicsForSubject = async (subjectId) => {
        if (!subjectId) {
            setTopics([]);
            return;
        }
        try {
            const res = await fetch(`${API_BASE}/api/subjects/${subjectId}/topics`);
            if (res.ok) setTopics(await res.json());
        } catch (err) {
            console.error('Failed to load topics');
        }
    };

    // ── Handlers ───────────────────────────────────────────────
    const flashSuccess = (msg) => {
        setSuccess(msg);
        setTimeout(() => setSuccess(''), 3000);
    };

    const handleFilterChange = (subjectId) => {
        setFilterSubject(subjectId);
        setFilterTopic('');
        loadTopicsForSubject(subjectId);
        loadQuestions(subjectId, '');
    };

    const handleSaveQuestion = async (e) => {
        e.preventDefault();
        setError('');
        try {
            const url = editingId
                ? `${API_BASE}/api/admin/questions/${editingId}`
                : `${API_BASE}/api/admin/questions`;
            const method = editingId ? 'PUT' : 'POST';

            const res = await fetch(url, {
                method,
                headers: authHeaders,
                body: JSON.stringify(formData)
            });

            if (!res.ok) {
                const data = await res.json();
                throw new Error(data.error || 'Failed to save');
            }

            flashSuccess(editingId ? 'Question updated!' : 'Question created!');
            setFormData(emptyQuestion);
            setEditingId(null);
            loadQuestions(filterSubject, filterTopic);
            loadData();
        } catch (err) {
            setError(err.message);
        }
    };

    const handleEditQuestion = (q) => {
        setFormData({
            subject_id: q.subject_id,
            topic_id: q.topic_id,
            difficulty: q.difficulty,
            stem: q.stem,
            option_a: q.option_a,
            option_b: q.option_b,
            option_c: q.option_c,
            option_d: q.option_d,
            option_e: q.option_e || '',
            correct_answer: q.correct_answer,
            explanation: q.explanation || '',
            tags: q.tags || []
        });
        setEditingId(q.id);
        loadTopicsForSubject(q.subject_id);
        setActiveTab('questions');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleDeleteQuestion = async (id) => {
        if (!confirm('Delete this question?')) return;
        try {
            const res = await fetch(`${API_BASE}/api/admin/questions/${id}`, {
                method: 'DELETE',
                headers: authHeaders
            });
            if (res.ok) {
                flashSuccess('Question deleted');
                loadQuestions(filterSubject, filterTopic);
                loadData();
            }
        } catch (err) {
            setError('Failed to delete question');
        }
    };

    const handleCreateSubject = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch(`${API_BASE}/api/admin/subjects`, {
                method: 'POST',
                headers: authHeaders,
                body: JSON.stringify({ name: newSubjectName })
            });
            if (!res.ok) {
                const data = await res.json();
                throw new Error(data.error);
            }
            flashSuccess('Subject created!');
            setNewSubjectName('');
            loadData();
        } catch (err) {
            setError(err.message);
        }
    };

    const handleCreateTopic = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch(`${API_BASE}/api/admin/topics`, {
                method: 'POST',
                headers: authHeaders,
                body: JSON.stringify({ subject_id: newTopicSubject, name: newTopicName })
            });
            if (!res.ok) {
                const data = await res.json();
                throw new Error(data.error);
            }
            flashSuccess('Topic created!');
            setNewTopicName('');
            loadData();
        } catch (err) {
            setError(err.message);
        }
    };

    if (!user || user.role !== 'admin') return null;

    // ── Styles ─────────────────────────────────────────────────
    const inputStyle = {
        width: '100%', padding: 'var(--space-3)', border: '1px solid var(--neutral-200)',
        borderRadius: 'var(--radius-lg)', fontSize: 'var(--text-sm)', fontFamily: 'inherit'
    };
    const labelStyle = {
        display: 'block', fontWeight: '600', fontSize: 'var(--text-sm)',
        marginBottom: 'var(--space-1)', color: 'var(--neutral-700)'
    };
    const tabStyle = (active) => ({
        padding: 'var(--space-3) var(--space-5)',
        border: 'none',
        background: active ? 'var(--primary-500)' : 'var(--neutral-100)',
        color: active ? 'white' : 'var(--neutral-600)',
        borderRadius: 'var(--radius-lg)',
        cursor: 'pointer',
        fontWeight: '600',
        fontSize: 'var(--text-sm)',
        transition: 'all 0.2s'
    });

    return (
        <>
            {/* ─── Header ──────────────────────────────────────── */}
            <section className="page-header">
                <div className="container">
                    <h1>Admin Panel 🛠️</h1>
                    <p>Manage content and monitor platform activity</p>
                </div>
            </section>

            {/* ─── Alerts ──────────────────────────────────────── */}
            {success && (
                <div style={{
                    position: 'fixed', top: '20px', right: '20px', zIndex: 9999,
                    padding: 'var(--space-4) var(--space-6)', background: 'var(--success-600)',
                    color: 'white', borderRadius: 'var(--radius-xl)', boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
                    fontWeight: '600', animation: 'fadeIn 0.3s ease'
                }}>
                    ✅ {success}
                </div>
            )}
            {error && (
                <div style={{
                    position: 'fixed', top: '20px', right: '20px', zIndex: 9999,
                    padding: 'var(--space-4) var(--space-6)', background: 'var(--error-600, #ef4444)',
                    color: 'white', borderRadius: 'var(--radius-xl)', boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
                    fontWeight: '600', cursor: 'pointer'
                }} onClick={() => setError('')}>
                    ❌ {error}
                </div>
            )}

            {/* ─── Tabs ────────────────────────────────────────── */}
            <section className="section" style={{ paddingTop: 'var(--space-4)' }}>
                <div className="container">
                    <div style={{ display: 'flex', gap: 'var(--space-2)', marginBottom: 'var(--space-8)', flexWrap: 'wrap' }}>
                        {['overview', 'questions', 'content', 'users'].map(tab => (
                            <button
                                key={tab}
                                style={tabStyle(activeTab === tab)}
                                onClick={() => {
                                    setActiveTab(tab);
                                    if (tab === 'questions') loadQuestions(filterSubject, filterTopic);
                                }}
                            >
                                {tab === 'overview' && '📊 '}
                                {tab === 'questions' && '❓ '}
                                {tab === 'content' && '📁 '}
                                {tab === 'users' && '👥 '}
                                {tab.charAt(0).toUpperCase() + tab.slice(1)}
                            </button>
                        ))}
                    </div>

                    {/* ═══════════════════════════════════════════
                         TAB: Overview
                        ═══════════════════════════════════════════ */}
                    {activeTab === 'overview' && stats && (
                        <div>
                            <div style={{
                                display: 'grid',
                                gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                                gap: 'var(--space-6)',
                                marginBottom: 'var(--space-10)'
                            }}>
                                {[
                                    { label: 'Total Users', value: stats.totalUsers, icon: '👥', color: 'var(--primary-600)' },
                                    { label: 'Questions', value: stats.totalQuestions, icon: '❓', color: 'var(--secondary-600, #9333ea)' },
                                    { label: 'Subjects', value: stats.totalSubjects, icon: '📘', color: 'var(--success-600)' },
                                    { label: 'Topics', value: stats.totalTopics, icon: '📂', color: 'var(--warning-600, #f59e0b)' },
                                    { label: 'Quiz Attempts', value: stats.totalAttempts, icon: '📝', color: '#0c8ce9' }
                                ].map(card => (
                                    <div key={card.label} className="card" style={{ padding: 'var(--space-6)', textAlign: 'center' }}>
                                        <div style={{ fontSize: '2rem', marginBottom: 'var(--space-2)' }}>{card.icon}</div>
                                        <div style={{ fontSize: 'var(--text-3xl)', fontWeight: '700', color: card.color }}>{card.value}</div>
                                        <div style={{ color: 'var(--neutral-500)', fontSize: 'var(--text-sm)' }}>{card.label}</div>
                                    </div>
                                ))}
                            </div>

                            {/* Recent Users */}
                            <div className="card" style={{ padding: 'var(--space-6)' }}>
                                <h3 style={{ marginBottom: 'var(--space-4)' }}>👥 Recent Users</h3>
                                <div style={{ overflowX: 'auto' }}>
                                    <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 'var(--text-sm)' }}>
                                        <thead>
                                            <tr style={{ borderBottom: '2px solid var(--neutral-200)', textAlign: 'left' }}>
                                                <th style={{ padding: 'var(--space-3)' }}>Name</th>
                                                <th style={{ padding: 'var(--space-3)' }}>Email</th>
                                                <th style={{ padding: 'var(--space-3)' }}>Role</th>
                                                <th style={{ padding: 'var(--space-3)' }}>Plan</th>
                                                <th style={{ padding: 'var(--space-3)' }}>Joined</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {stats.recentUsers?.map(u => (
                                                <tr key={u.id} style={{ borderBottom: '1px solid var(--neutral-100)' }}>
                                                    <td style={{ padding: 'var(--space-3)', fontWeight: '500' }}>{u.name}</td>
                                                    <td style={{ padding: 'var(--space-3)' }}>{u.email}</td>
                                                    <td style={{ padding: 'var(--space-3)' }}>
                                                        <span style={{
                                                            padding: '2px 8px',
                                                            borderRadius: 'var(--radius-full)',
                                                            fontSize: 'var(--text-xs)',
                                                            fontWeight: '600',
                                                            background: u.role === 'admin' ? 'var(--primary-100)' : 'var(--neutral-100)',
                                                            color: u.role === 'admin' ? 'var(--primary-700)' : 'var(--neutral-600)'
                                                        }}>{u.role}</span>
                                                    </td>
                                                    <td style={{ padding: 'var(--space-3)' }}>
                                                        <span style={{
                                                            padding: '2px 8px',
                                                            borderRadius: 'var(--radius-full)',
                                                            fontSize: 'var(--text-xs)',
                                                            fontWeight: '600',
                                                            background: u.subscription_type === 'premium' ? '#fef3c7' : 'var(--neutral-100)',
                                                            color: u.subscription_type === 'premium' ? '#92400e' : 'var(--neutral-600)'
                                                        }}>{u.subscription_type}</span>
                                                    </td>
                                                    <td style={{ padding: 'var(--space-3)', color: 'var(--neutral-500)' }}>
                                                        {new Date(u.created_at).toLocaleDateString()}
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* ═══════════════════════════════════════════
                         TAB: Questions
                        ═══════════════════════════════════════════ */}
                    {activeTab === 'questions' && (
                        <div>
                            {/* Question Form */}
                            <div className="card" style={{ padding: 'var(--space-6)', marginBottom: 'var(--space-8)' }}>
                                <h3 style={{ marginBottom: 'var(--space-4)' }}>
                                    {editingId ? '✏️ Edit Question' : '➕ Add New Question'}
                                </h3>
                                <form onSubmit={handleSaveQuestion}>
                                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 'var(--space-4)', marginBottom: 'var(--space-4)' }}>
                                        <div>
                                            <label style={labelStyle}>Subject *</label>
                                            <select
                                                style={inputStyle}
                                                value={formData.subject_id}
                                                onChange={(e) => {
                                                    setFormData({ ...formData, subject_id: e.target.value, topic_id: '' });
                                                    loadTopicsForSubject(e.target.value);
                                                }}
                                                required
                                            >
                                                <option value="">Select Subject</option>
                                                {subjects.map(s => <option key={s.id} value={s.id}>{s.name}</option>)}
                                            </select>
                                        </div>
                                        <div>
                                            <label style={labelStyle}>Topic *</label>
                                            <select
                                                style={inputStyle}
                                                value={formData.topic_id}
                                                onChange={(e) => setFormData({ ...formData, topic_id: e.target.value })}
                                                required
                                            >
                                                <option value="">Select Topic</option>
                                                {topics.map(t => <option key={t.id} value={t.id}>{t.name}</option>)}
                                            </select>
                                        </div>
                                        <div>
                                            <label style={labelStyle}>Difficulty</label>
                                            <select
                                                style={inputStyle}
                                                value={formData.difficulty}
                                                onChange={(e) => setFormData({ ...formData, difficulty: e.target.value })}
                                            >
                                                <option value="easy">Easy</option>
                                                <option value="medium">Medium</option>
                                                <option value="hard">Hard</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div style={{ marginBottom: 'var(--space-4)' }}>
                                        <label style={labelStyle}>Question Stem *</label>
                                        <textarea
                                            style={{ ...inputStyle, minHeight: '80px', resize: 'vertical' }}
                                            value={formData.stem}
                                            onChange={(e) => setFormData({ ...formData, stem: e.target.value })}
                                            placeholder="Enter the question..."
                                            required
                                        />
                                    </div>

                                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-4)', marginBottom: 'var(--space-4)' }}>
                                        {['A', 'B', 'C', 'D', 'E'].map(letter => (
                                            <div key={letter}>
                                                <label style={labelStyle}>
                                                    Option {letter} {letter !== 'E' ? '*' : ''}
                                                </label>
                                                <input
                                                    style={inputStyle}
                                                    value={formData[`option_${letter.toLowerCase()}`]}
                                                    onChange={(e) => setFormData({ ...formData, [`option_${letter.toLowerCase()}`]: e.target.value })}
                                                    placeholder={`Option ${letter}`}
                                                    required={letter !== 'E'}
                                                />
                                            </div>
                                        ))}
                                        <div>
                                            <label style={labelStyle}>Correct Answer *</label>
                                            <select
                                                style={inputStyle}
                                                value={formData.correct_answer}
                                                onChange={(e) => setFormData({ ...formData, correct_answer: e.target.value })}
                                            >
                                                {['A', 'B', 'C', 'D', 'E'].map(l => <option key={l} value={l}>{l}</option>)}
                                            </select>
                                        </div>
                                    </div>

                                    <div style={{ marginBottom: 'var(--space-4)' }}>
                                        <label style={labelStyle}>Explanation</label>
                                        <textarea
                                            style={{ ...inputStyle, minHeight: '60px', resize: 'vertical' }}
                                            value={formData.explanation}
                                            onChange={(e) => setFormData({ ...formData, explanation: e.target.value })}
                                            placeholder="Explain the correct answer..."
                                        />
                                    </div>

                                    <div style={{ display: 'flex', gap: 'var(--space-3)' }}>
                                        <button type="submit" className="btn btn-primary">
                                            {editingId ? '💾 Update Question' : '➕ Create Question'}
                                        </button>
                                        {editingId && (
                                            <button
                                                type="button"
                                                className="btn btn-outline"
                                                onClick={() => { setFormData(emptyQuestion); setEditingId(null); }}
                                            >
                                                Cancel
                                            </button>
                                        )}
                                    </div>
                                </form>
                            </div>

                            {/* Filter + Question List */}
                            <div className="card" style={{ padding: 'var(--space-6)' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--space-4)', flexWrap: 'wrap', gap: 'var(--space-3)' }}>
                                    <h3>📋 Questions ({questionsTotal})</h3>
                                    <div style={{ display: 'flex', gap: 'var(--space-3)' }}>
                                        <select
                                            style={{ ...inputStyle, width: 'auto' }}
                                            value={filterSubject}
                                            onChange={(e) => handleFilterChange(e.target.value)}
                                        >
                                            <option value="">All Subjects</option>
                                            {subjects.map(s => <option key={s.id} value={s.id}>{s.name}</option>)}
                                        </select>
                                    </div>
                                </div>

                                {questions.length === 0 ? (
                                    <p style={{ textAlign: 'center', color: 'var(--neutral-400)', padding: 'var(--space-8)' }}>
                                        No questions found. Create subjects and topics first, then add questions.
                                    </p>
                                ) : (
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
                                        {questions.map(q => (
                                            <div key={q.id} style={{
                                                padding: 'var(--space-4)',
                                                background: 'var(--neutral-50)',
                                                borderRadius: 'var(--radius-lg)',
                                                borderLeft: `3px solid ${q.difficulty === 'hard' ? 'var(--error-500, #ef4444)' : q.difficulty === 'medium' ? 'var(--warning-500, #f59e0b)' : 'var(--success-500)'}`
                                            }}>
                                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 'var(--space-3)' }}>
                                                    <div style={{ flex: 1 }}>
                                                        <div style={{ fontWeight: '600', marginBottom: '4px' }}>{q.stem}</div>
                                                        <div style={{ fontSize: 'var(--text-xs)', color: 'var(--neutral-500)' }}>
                                                            {q.subject_name} › {q.topic_name} • {q.difficulty} • Answer: {q.correct_answer}
                                                        </div>
                                                    </div>
                                                    <div style={{ display: 'flex', gap: 'var(--space-2)', flexShrink: 0 }}>
                                                        <button
                                                            onClick={() => handleEditQuestion(q)}
                                                            style={{
                                                                padding: '4px 10px', border: '1px solid var(--neutral-200)',
                                                                borderRadius: 'var(--radius-md)', background: 'white',
                                                                cursor: 'pointer', fontSize: 'var(--text-xs)'
                                                            }}
                                                        >✏️</button>
                                                        <button
                                                            onClick={() => handleDeleteQuestion(q.id)}
                                                            style={{
                                                                padding: '4px 10px', border: '1px solid var(--error-200, #fecaca)',
                                                                borderRadius: 'var(--radius-md)', background: 'white',
                                                                cursor: 'pointer', fontSize: 'var(--text-xs)', color: 'var(--error-600, #ef4444)'
                                                            }}
                                                        >🗑️</button>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    )}

                    {/* ═══════════════════════════════════════════
                         TAB: Content (Subjects & Topics)
                        ═══════════════════════════════════════════ */}
                    {activeTab === 'content' && (
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-8)' }}>
                            {/* Create Subject */}
                            <div className="card" style={{ padding: 'var(--space-6)' }}>
                                <h3 style={{ marginBottom: 'var(--space-4)' }}>📘 Add Subject</h3>
                                <form onSubmit={handleCreateSubject}>
                                    <div style={{ marginBottom: 'var(--space-4)' }}>
                                        <label style={labelStyle}>Subject Name *</label>
                                        <input
                                            style={inputStyle}
                                            value={newSubjectName}
                                            onChange={(e) => setNewSubjectName(e.target.value)}
                                            placeholder="e.g. Mathematics"
                                            required
                                        />
                                    </div>
                                    <button type="submit" className="btn btn-primary btn-sm">Create Subject</button>
                                </form>

                                <h4 style={{ marginTop: 'var(--space-6)', marginBottom: 'var(--space-3)' }}>Existing Subjects</h4>
                                {subjects.length === 0 ? (
                                    <p style={{ color: 'var(--neutral-400)', fontSize: 'var(--text-sm)' }}>No subjects yet.</p>
                                ) : (
                                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-2)' }}>
                                        {subjects.map(s => (
                                            <span key={s.id} style={{
                                                padding: 'var(--space-2) var(--space-3)',
                                                background: 'var(--primary-50)',
                                                borderRadius: 'var(--radius-lg)',
                                                fontSize: 'var(--text-sm)',
                                                fontWeight: '500',
                                                color: 'var(--primary-700)'
                                            }}>{s.name}</span>
                                        ))}
                                    </div>
                                )}
                            </div>

                            {/* Create Topic */}
                            <div className="card" style={{ padding: 'var(--space-6)' }}>
                                <h3 style={{ marginBottom: 'var(--space-4)' }}>📂 Add Topic</h3>
                                <form onSubmit={handleCreateTopic}>
                                    <div style={{ marginBottom: 'var(--space-4)' }}>
                                        <label style={labelStyle}>Subject *</label>
                                        <select
                                            style={inputStyle}
                                            value={newTopicSubject}
                                            onChange={(e) => setNewTopicSubject(e.target.value)}
                                            required
                                        >
                                            <option value="">Select Subject</option>
                                            {subjects.map(s => <option key={s.id} value={s.id}>{s.name}</option>)}
                                        </select>
                                    </div>
                                    <div style={{ marginBottom: 'var(--space-4)' }}>
                                        <label style={labelStyle}>Topic Name *</label>
                                        <input
                                            style={inputStyle}
                                            value={newTopicName}
                                            onChange={(e) => setNewTopicName(e.target.value)}
                                            placeholder="e.g. Fractions"
                                            required
                                        />
                                    </div>
                                    <button type="submit" className="btn btn-primary btn-sm">Create Topic</button>
                                </form>
                            </div>
                        </div>
                    )}

                    {/* ═══════════════════════════════════════════
                         TAB: Users
                        ═══════════════════════════════════════════ */}
                    {activeTab === 'users' && stats && (
                        <div className="card" style={{ padding: 'var(--space-6)' }}>
                            <h3 style={{ marginBottom: 'var(--space-4)' }}>👥 All Users ({stats.totalUsers})</h3>
                            <div style={{ overflowX: 'auto' }}>
                                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 'var(--text-sm)' }}>
                                    <thead>
                                        <tr style={{ borderBottom: '2px solid var(--neutral-200)', textAlign: 'left' }}>
                                            <th style={{ padding: 'var(--space-3)' }}>Name</th>
                                            <th style={{ padding: 'var(--space-3)' }}>Email</th>
                                            <th style={{ padding: 'var(--space-3)' }}>Role</th>
                                            <th style={{ padding: 'var(--space-3)' }}>Plan</th>
                                            <th style={{ padding: 'var(--space-3)' }}>Joined</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {stats.recentUsers?.map(u => (
                                            <tr key={u.id} style={{ borderBottom: '1px solid var(--neutral-100)' }}>
                                                <td style={{ padding: 'var(--space-3)', fontWeight: '500' }}>{u.name}</td>
                                                <td style={{ padding: 'var(--space-3)' }}>{u.email}</td>
                                                <td style={{ padding: 'var(--space-3)' }}>
                                                    <span style={{
                                                        padding: '2px 8px', borderRadius: 'var(--radius-full)',
                                                        fontSize: 'var(--text-xs)', fontWeight: '600',
                                                        background: u.role === 'admin' ? 'var(--primary-100)' : 'var(--neutral-100)',
                                                        color: u.role === 'admin' ? 'var(--primary-700)' : 'var(--neutral-600)'
                                                    }}>{u.role}</span>
                                                </td>
                                                <td style={{ padding: 'var(--space-3)' }}>
                                                    <span style={{
                                                        padding: '2px 8px', borderRadius: 'var(--radius-full)',
                                                        fontSize: 'var(--text-xs)', fontWeight: '600',
                                                        background: u.subscription_type === 'premium' ? '#fef3c7' : 'var(--neutral-100)',
                                                        color: u.subscription_type === 'premium' ? '#92400e' : 'var(--neutral-600)'
                                                    }}>{u.subscription_type}</span>
                                                </td>
                                                <td style={{ padding: 'var(--space-3)', color: 'var(--neutral-500)' }}>
                                                    {new Date(u.created_at).toLocaleDateString()}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    )}
                </div>
            </section>
        </>
    );
};

export default AdminPanel;
