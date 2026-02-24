import { useParams, Link } from 'react-router-dom';
import { getGeneralPaperSubjectById, generalPaperSubjects } from '../../data/generalPaperNotes';

const GPSubjectNotes = () => {
    const { subjectId } = useParams();
    const subject = getGeneralPaperSubjectById(subjectId);

    if (!subject) {
        return (
            <section className="section">
                <div className="container" style={{ textAlign: 'center' }}>
                    <h2>Subject Not Found</h2>
                    <p>The subject you're looking for doesn't exist.</p>
                    <Link to="/notes/general-paper" className="btn btn-primary">
                        Back to General Paper
                    </Link>
                </div>
            </section>
        );
    }

    return (
        <>
            {/* Page Header */}
            <section className="page-hero">
                <div className="container">
                    <div className="breadcrumbs" style={{ color: 'rgba(255,255,255,0.7)' }}>
                        <Link to="/" style={{ color: 'rgba(255,255,255,0.7)' }}>Home</Link>
                        <span>›</span>
                        <Link to="/notes" style={{ color: 'rgba(255,255,255,0.7)' }}>Notes</Link>
                        <span>›</span>
                        <Link to="/notes/general-paper" style={{ color: 'rgba(255,255,255,0.7)' }}>General Paper</Link>
                        <span>›</span>
                        <span style={{ color: 'white' }}>{subject.name}</span>
                    </div>
                    <p className="platform-section__eyebrow" style={{ color: 'rgba(255,255,255,0.5)' }}>Study Notes</p>
                    <div style={{ fontSize: 'var(--text-5xl)', marginBottom: 'var(--space-4)' }}>
                        {subject.icon}
                    </div>
                    <h1>{subject.name}</h1>
                    <p className="page-hero__subtitle">{subject.description}</p>
                    <div className="subject-meta-badges">
                        <span className="badge badge-secondary">📖 {subject.unitCount} Units</span>
                    </div>
                </div>
            </section>

            {/* Units List */}
            <section className="section">
                <div className="container">
                    <div className="section-header">
                        <h2>Study Units</h2>
                        <p>Work through each unit to master {subject.name}</p>
                    </div>

                    <div className="units-grid">
                        {subject.units.map((unit, index) => (
                            <Link
                                to={`/notes/general-paper/${subject.id}/${unit.id}`}
                                key={unit.id}
                                className="unit-card"
                                style={{ '--unit-color': subject.color, '--unit-bg': subject.bgColor }}
                            >
                                <div className="unit-number">
                                    Unit {unit.unitNumber}
                                </div>
                                <h3 className="unit-title">{unit.title}</h3>
                                <div className="unit-topics">
                                    {unit.topics.slice(0, 3).map((topic, i) => (
                                        <span key={i} className="unit-topic-tag">
                                            {topic}
                                        </span>
                                    ))}
                                    {unit.topics.length > 3 && (
                                        <span className="unit-topic-more">
                                            +{unit.topics.length - 3} more
                                        </span>
                                    )}
                                </div>
                                <div className="unit-footer">
                                    <span className="unit-read-time">
                                        ⏱️ {unit.estimatedReadTime}
                                    </span>
                                    <span className="unit-arrow">
                                        Read →
                                    </span>
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
                        <Link to={`/quiz/general-paper`} className="btn btn-primary btn-lg">
                            🎯 Take General Paper Quiz
                        </Link>
                        <Link to="/notes/general-paper" className="btn btn-outline btn-lg">
                            ← Back to General Paper
                        </Link>
                    </div>
                </div>
            </section>

            {/* Other Subjects */}
            <section className="section">
                <div className="container">
                    <div className="section-header">
                        <h2>Explore Other Subjects</h2>
                    </div>
                    <div className="notes-subject-mini-grid">
                        {generalPaperSubjects
                            .filter(s => s.id !== subject.id)
                            .map((s) => (
                                <Link
                                    to={`/notes/general-paper/${s.id}`}
                                    key={s.id}
                                    className="notes-subject-mini-card"
                                    style={{ '--subject-color': s.color, '--subject-bg': s.bgColor }}
                                >
                                    <span className="mini-icon">{s.icon}</span>
                                    <span className="mini-name">{s.name}</span>
                                </Link>
                            ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default GPSubjectNotes;
