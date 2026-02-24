import { Link } from 'react-router-dom';
import { verbalSubjects } from '../../data/verbalNotes';

const VerbalNotes = () => {
    return (
        <>
            <section className="page-hero">
                <div className="container">
                    <div className="breadcrumbs" style={{ color: 'rgba(255,255,255,0.7)' }}>
                        <Link to="/" style={{ color: 'rgba(255,255,255,0.7)' }}>Home</Link>
                        <span>›</span>
                        <Link to="/notes" style={{ color: 'rgba(255,255,255,0.7)' }}>Notes</Link>
                        <span>›</span>
                        <span style={{ color: 'white' }}>Verbal Aptitude</span>
                    </div>
                    <p className="platform-section__eyebrow" style={{ color: 'rgba(255,255,255,0.5)' }}>Study Notes</p>
                    <div style={{ fontSize: 'var(--text-5xl)', marginBottom: 'var(--space-4)' }}>💬</div>
                    <h1>Verbal Aptitude Notes</h1>
                    <p className="page-hero__subtitle">Master word relationships, vocabulary, and verbal reasoning skills for the NPSE</p>
                    <div className="subject-meta-badges">
                        <span className="badge badge-secondary">📁 8 Subject Areas</span>
                        <span className="badge badge-secondary">📖 30 Units</span>
                    </div>
                </div>
            </section>

            <section className="section" style={{ paddingBottom: 0 }}>
                <div className="container">
                    <div className="exam-info-box">
                        <h3>📋 About Verbal Aptitude</h3>
                        <p style={{ marginBottom: 'var(--space-4)', color: 'var(--neutral-700)' }}>
                            The Verbal Aptitude test consists of <strong>eight sections</strong> with <strong>40 questions</strong>
                            to be answered in <strong>30 minutes</strong>. It requires critical thinking and strong vocabulary skills.
                        </p>
                        <div className="exam-papers-grid">
                            <div className="exam-paper">
                                <h4>What You'll Learn</h4>
                                <p>Analogies, word groups, sentence arrangement, synonyms, antonyms, and codes</p>
                            </div>
                            <div className="exam-paper">
                                <h4>Skills Developed</h4>
                                <p>Vocabulary, reading comprehension, logical thinking, and word analysis</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="section-header">
                        <h2>Choose a Subject Area</h2>
                        <p>Select a topic to explore its study notes</p>
                    </div>
                    <div className="notes-subject-grid">
                        {verbalSubjects.map((subject) => (
                            <Link to={`/notes/verbal/${subject.id}`} key={subject.id} className="notes-subject-card"
                                style={{ '--subject-color': subject.color, '--subject-bg': subject.bgColor }}>
                                <div className="notes-subject-icon">{subject.icon}</div>
                                <div className="notes-subject-content">
                                    <h3>{subject.name}</h3>
                                    <p>{subject.description}</p>
                                    <div className="notes-subject-meta">
                                        <span className="notes-unit-count">📖 {subject.unitCount} Units</span>
                                        <span className="notes-arrow">Explore →</span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section" style={{ background: 'white' }}>
                <div className="container">
                    <div className="section-header"><h2>Quick Actions</h2></div>
                    <div style={{ display: 'flex', gap: 'var(--space-4)', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <Link to="/quiz/verbal" className="btn btn-primary btn-lg">🎯 Take Verbal Quiz</Link>
                        <Link to="/notes" className="btn btn-outline btn-lg">← Back to All Notes</Link>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="section-header"><h2>Also Explore</h2></div>
                    <div className="notes-subject-mini-grid">
                        <Link to="/notes/general-paper" className="notes-subject-mini-card" style={{ '--subject-color': '#6366f1', '--subject-bg': '#eef2ff' }}>
                            <span className="mini-icon">📚</span><span className="mini-name">General Paper</span>
                        </Link>
                        <Link to="/notes/english-language" className="notes-subject-mini-card" style={{ '--subject-color': '#ec4899', '--subject-bg': '#fce7f3' }}>
                            <span className="mini-icon">📝</span><span className="mini-name">English Language</span>
                        </Link>
                        <Link to="/notes/quantitative" className="notes-subject-mini-card" style={{ '--subject-color': '#06b6d4', '--subject-bg': '#ecfeff' }}>
                            <span className="mini-icon">🧮</span><span className="mini-name">Quantitative Aptitude</span>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
};

export default VerbalNotes;
