import { useParams, Link } from 'react-router-dom';
import { getSubjectById, subjects } from '../data/subjects';

const SubjectDetail = () => {
    const { subjectId } = useParams();
    const subject = getSubjectById(subjectId);

    if (!subject) {
        return (
            <section className="platform-section" style={{ textAlign: 'center' }}>
                <div className="container">
                    <h2>Subject not found</h2>
                    <p>The subject you're looking for doesn't exist.</p>
                    <Link to="/" className="access-card__cta access-card__cta--primary" style={{ display: 'inline-flex' }}>
                        Back to Home
                    </Link>
                </div>
            </section>
        );
    }

    return (
        <>
            {/* Page Hero */}
            <section className="page-hero" style={{ '--page-hero-accent': subject.color }}>
                <div className="container">
                    <div className="breadcrumbs-themed">
                        <Link to="/">Home</Link> <span>›</span>
                        <Link to="/notes">Study Notes</Link> <span>›</span>
                        <span className="breadcrumbs-themed--active">{subject.name}</span>
                    </div>
                    <div style={{ fontSize: '3rem', marginBottom: 'var(--space-3)' }}>{subject.icon}</div>
                    <h1>{subject.name}</h1>
                    <p className="page-hero__subtitle">{subject.description}</p>
                </div>
            </section>

            {/* Topics */}
            <section className="platform-section">
                <div className="container">
                    <div className="platform-section__header">
                        <p className="platform-section__eyebrow">Topics</p>
                        <h2>Key NPSE topics</h2>
                        <p className="platform-section__desc">Master these essential topics to excel in {subject.name}</p>
                    </div>
                    <div className="topic-pills-grid">
                        {subject.topics.map((topic, i) => (
                            <div key={i} className="topic-pill" style={{ '--topic-color': subject.color, '--topic-bg': subject.bgColor }}>
                                {topic}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Sample Questions */}
            <section className="platform-section platform-section--alt">
                <div className="container" style={{ maxWidth: '800px' }}>
                    <div className="platform-section__header">
                        <p className="platform-section__eyebrow">Practice</p>
                        <h2>Sample questions</h2>
                        <p className="platform-section__desc">Get a feel for the type of questions in the NPSE</p>
                    </div>
                    <div className="sample-questions-list">
                        {subject.sampleQuestions.map((q, index) => (
                            <div key={q.id} className="sample-question-card" style={{ '--q-color': subject.color }}>
                                <span className="sample-question-card__label" style={{ color: subject.color }}>Question {index + 1}</span>
                                <h4>{q.question}</h4>
                                <div className="sample-question-card__options">
                                    {q.options.map((option, optIndex) => (
                                        <div key={optIndex} className={`sample-question-card__option ${optIndex === q.correctAnswer ? 'sample-question-card__option--correct' : ''}`}>
                                            <span className={`sample-question-card__letter ${optIndex === q.correctAnswer ? 'sample-question-card__letter--correct' : ''}`}>
                                                {String.fromCharCode(65 + optIndex)}
                                            </span>
                                            {option}
                                        </div>
                                    ))}
                                </div>
                                <div className="sample-question-card__explanation">
                                    <strong>💡 Explanation:</strong> {q.explanation}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="support-section">
                <div className="container">
                    <div className="support-section__inner" style={{ textAlign: 'center', maxWidth: '700px' }}>
                        <div className="support-section__content">
                            <h2>Ready for a full quiz?</h2>
                            <p>Test your {subject.name} knowledge with our interactive quiz or challenge yourself with Rapid Recall.</p>
                            <div style={{ display: 'flex', gap: 'var(--space-3)', justifyContent: 'center', flexWrap: 'wrap', marginTop: 'var(--space-6)' }}>
                                <Link to={`/quiz/${subject.id}`} className="hero-cta hero-cta--primary">Take {subject.name} Quiz</Link>
                                <Link to="/games/rapid-recall" className="hero-cta hero-cta--secondary">Play Rapid Recall</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Other Subjects */}
            <section className="platform-section">
                <div className="container">
                    <div className="platform-section__header">
                        <h2>Explore other subjects</h2>
                    </div>
                    <div className="subject-cards-grid">
                        {subjects
                            .filter(s => s.id !== subject.id)
                            .slice(0, 4)
                            .map((s) => (
                                <Link to={`/subjects/${s.id}`} key={s.id} className="themed-subject-card">
                                    <div className="themed-subject-card__icon" style={{ background: s.bgColor, color: s.color }}>
                                        {s.icon}
                                    </div>
                                    <h3>{s.name}</h3>
                                    <p>{s.description}</p>
                                    <span className="themed-subject-card__link">Explore →</span>
                                </Link>
                            ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default SubjectDetail;
