import { Link } from 'react-router-dom';
import { generalPaperSubjects } from '../../data/generalPaperNotes';

const GeneralPaperNotes = () => {
    return (
        <>
            {/* Page Header */}
            <section className="page-header" style={{ '--paper-color': '#6366f1' }}>
                <div className="container">
                    <div className="breadcrumbs" style={{ color: 'rgba(255,255,255,0.7)' }}>
                        <Link to="/" style={{ color: 'rgba(255,255,255,0.7)' }}>Home</Link>
                        <span>›</span>
                        <Link to="/notes" style={{ color: 'rgba(255,255,255,0.7)' }}>Notes</Link>
                        <span>›</span>
                        <span style={{ color: 'white' }}>General Paper</span>
                    </div>
                    <div style={{ fontSize: 'var(--text-5xl)', marginBottom: 'var(--space-4)' }}>
                        📚
                    </div>
                    <h1>General Paper Notes</h1>
                    <p>Comprehensive study materials for Home Economics, Physical Health Education, Agricultural Science, Science, and Social Studies</p>
                    <div className="subject-meta-badges">
                        <span className="badge badge-secondary">📁 5 Subject Areas</span>
                    </div>
                </div>
            </section>

            {/* Subject Cards */}
            <section className="section">
                <div className="container">
                    <div className="section-header">
                        <h2>Choose a Subject</h2>
                        <p>Select a subject to explore its study notes and materials</p>
                    </div>

                    <div className="notes-subject-grid">
                        {generalPaperSubjects.map((subject) => (
                            <Link
                                to={`/notes/general-paper/${subject.id}`}
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
                        <Link to="/quiz/general-paper" className="btn btn-primary btn-lg">
                            🎯 Take General Paper Quiz
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

export default GeneralPaperNotes;
