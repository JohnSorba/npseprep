import { Link } from 'react-router-dom';
import { englishLanguageSubjects } from '../../data/englishLanguageNotes';

const EnglishLanguageNotes = () => {
    return (
        <>
            {/* Page Header */}
            <section className="page-header" style={{ '--paper-color': '#ec4899' }}>
                <div className="container">
                    <div className="breadcrumbs" style={{ color: 'rgba(255,255,255,0.7)' }}>
                        <Link to="/" style={{ color: 'rgba(255,255,255,0.7)' }}>Home</Link>
                        <span>›</span>
                        <Link to="/notes" style={{ color: 'rgba(255,255,255,0.7)' }}>Notes</Link>
                        <span>›</span>
                        <span style={{ color: 'white' }}>English Language</span>
                    </div>
                    <div style={{ fontSize: 'var(--text-5xl)', marginBottom: 'var(--space-4)' }}>
                        📝
                    </div>
                    <h1>English Language Notes</h1>
                    <p>Comprehensive study materials covering Grammar, Vocabulary, Reading, Writing, Speaking, and Literature based on the MBSSE Prep 6 curriculum</p>
                    <div className="subject-meta-badges">
                        <span className="badge badge-secondary">📁 10 Subject Areas</span>
                        <span className="badge badge-secondary">📄 Papers 1 & 2</span>
                    </div>
                </div>
            </section>

            {/* Exam Info */}
            <section className="section" style={{ paddingBottom: 0 }}>
                <div className="container">
                    <div className="exam-info-box">
                        <h3>📋 About the English Language Exam</h3>
                        <div className="exam-papers-grid">
                            <div className="exam-paper">
                                <h4>English Paper 1</h4>
                                <p>Comprehension Passages, Grammar and Vocabulary</p>
                                <span className="exam-duration">⏱️ 45 minutes</span>
                            </div>
                            <div className="exam-paper">
                                <h4>English Paper 2</h4>
                                <p>Essay Questions, Composition and Letter Writing</p>
                                <span className="exam-duration">⏱️ 45 minutes</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Subject Cards */}
            <section className="section">
                <div className="container">
                    <div className="section-header">
                        <h2>Choose a Subject Area</h2>
                        <p>Select a topic to explore its study notes and materials</p>
                    </div>

                    <div className="notes-subject-grid">
                        {englishLanguageSubjects.map((subject) => (
                            <Link
                                to={`/notes/english-language/${subject.id}`}
                                key={subject.id}
                                className="notes-subject-card"
                                style={{ '--subject-color': subject.color, '--subject-bg': subject.bgColor }}
                            >
                                <div className="notes-subject-icon">
                                    {subject.icon}
                                </div>
                                <div className="notes-subject-content">
                                    <h3>{subject.name}</h3>
                                    <p>{subject.description}</p>
                                    <div className="notes-subject-meta">
                                        <span className="notes-unit-count">
                                            📖 {subject.unitCount} Units
                                        </span>
                                        <span className="notes-arrow">
                                            Explore →
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Quick Actions */}
            <section className="section" style={{ background: 'white' }}>
                <div className="container">
                    <div className="section-header">
                        <h2>Quick Actions</h2>
                    </div>
                    <div style={{
                        display: 'flex',
                        gap: 'var(--space-4)',
                        justifyContent: 'center',
                        flexWrap: 'wrap'
                    }}>
                        <Link to="/quiz/english" className="btn btn-primary btn-lg">
                            🎯 Take English Language Quiz
                        </Link>
                        <Link to="/notes" className="btn btn-outline btn-lg">
                            ← Back to All Notes
                        </Link>
                    </div>
                </div>
            </section>

            {/* Also Explore */}
            <section className="section">
                <div className="container">
                    <div className="section-header">
                        <h2>Also Explore</h2>
                    </div>
                    <div className="notes-subject-mini-grid">
                        <Link
                            to="/notes/general-paper"
                            className="notes-subject-mini-card"
                            style={{ '--subject-color': '#6366f1', '--subject-bg': '#eef2ff' }}
                        >
                            <span className="mini-icon">📚</span>
                            <span className="mini-name">General Paper</span>
                        </Link>
                        <Link
                            to="/notes/mathematics"
                            className="notes-subject-mini-card"
                            style={{ '--subject-color': '#10b981', '--subject-bg': '#ecfdf5' }}
                        >
                            <span className="mini-icon">🔢</span>
                            <span className="mini-name">Mathematics</span>
                        </Link>
                        <Link
                            to="/notes/quantitative"
                            className="notes-subject-mini-card"
                            style={{ '--subject-color': '#06b6d4', '--subject-bg': '#ecfeff' }}
                        >
                            <span className="mini-icon">🧮</span>
                            <span className="mini-name">Quantitative Aptitude</span>
                        </Link>
                        <Link
                            to="/notes/verbal"
                            className="notes-subject-mini-card"
                            style={{ '--subject-color': '#8b5cf6', '--subject-bg': '#f5f3ff' }}
                        >
                            <span className="mini-icon">💬</span>
                            <span className="mini-name">Verbal Aptitude</span>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
};

export default EnglishLanguageNotes;
