import { Link } from 'react-router-dom';
import { quantitativeSubjects } from '../../data/quantitativeNotes';

const QuantitativeNotes = () => {
    return (
        <>
            {/* Page Header */}
            <section className="page-header" style={{ '--paper-color': '#06b6d4' }}>
                <div className="container">
                    <div className="breadcrumbs" style={{ color: 'rgba(255,255,255,0.7)' }}>
                        <Link to="/" style={{ color: 'rgba(255,255,255,0.7)' }}>Home</Link>
                        <span>›</span>
                        <Link to="/notes" style={{ color: 'rgba(255,255,255,0.7)' }}>Notes</Link>
                        <span>›</span>
                        <span style={{ color: 'white' }}>Quantitative Aptitude</span>
                    </div>
                    <div style={{ fontSize: 'var(--text-5xl)', marginBottom: 'var(--space-4)' }}>
                        🧮
                    </div>
                    <h1>Quantitative Aptitude Notes</h1>
                    <p>Master patterns, codes, number series, and logical reasoning for the NPSE</p>
                    <div className="subject-meta-badges">
                        <span className="badge badge-secondary">📁 7 Subject Areas</span>
                        <span className="badge badge-secondary">📖 30 Units</span>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section className="section" style={{ paddingBottom: 0 }}>
                <div className="container">
                    <div className="exam-info-box">
                        <h3>📋 About Quantitative Aptitude</h3>
                        <p style={{ marginBottom: 'var(--space-4)', color: 'var(--neutral-700)' }}>
                            Quantitative Aptitude tests your mental ability to interpret patterns, shapes, figures, letters, and codes.
                            It requires critical thinking and the ability to apply mathematical concepts in everyday activities.
                        </p>
                        <div className="exam-papers-grid">
                            <div className="exam-paper">
                                <h4>What You'll Learn</h4>
                                <p>Code breaking, Venn diagrams, number patterns, sequences, and logical operations</p>
                            </div>
                            <div className="exam-paper">
                                <h4>Skills Developed</h4>
                                <p>Pattern recognition, critical thinking, problem-solving, and mental arithmetic</p>
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
                        {quantitativeSubjects.map((subject) => (
                            <Link
                                to={`/notes/quantitative/${subject.id}`}
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
                        <Link to="/quiz/quantitative" className="btn btn-primary btn-lg">
                            🎯 Take Quantitative Quiz
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
                            <span className="mini-name">General Paper Notes</span>
                        </Link>
                        <Link
                            to="/notes/english-language"
                            className="notes-subject-mini-card"
                            style={{ '--subject-color': '#ec4899', '--subject-bg': '#fce7f3' }}
                        >
                            <span className="mini-icon">📝</span>
                            <span className="mini-name">English Language Notes</span>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
};

export default QuantitativeNotes;
