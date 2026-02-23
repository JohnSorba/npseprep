import { Link } from 'react-router-dom';
import { subjects } from '../data/subjects';

const Subjects = () => {
    return (
        <>
            {/* Page Hero */}
            <section className="page-hero">
                <div className="container">
                    <p className="platform-section__eyebrow" style={{ color: 'rgba(255,255,255,0.5)' }}>All Subjects</p>
                    <h1>NPSE Subjects</h1>
                    <p className="page-hero__subtitle">Explore all five subjects covered in the National Primary School Examination</p>
                </div>
            </section>

            {/* Subjects Grid */}
            <section className="platform-section">
                <div className="container">
                    <div className="subject-cards-grid">
                        {subjects.map((subject) => (
                            <Link
                                to={`/subjects/${subject.id}`}
                                key={subject.id}
                                className="themed-subject-card"
                            >
                                <div className="themed-subject-card__icon" style={{ background: subject.bgColor, color: subject.color }}>
                                    {subject.icon}
                                </div>
                                <h3>{subject.name}</h3>
                                <p>{subject.description}</p>
                                <div className="themed-subject-card__topics">
                                    {subject.topics.slice(0, 3).map((topic, idx) => (
                                        <span key={idx} className="themed-subject-card__tag">{topic}</span>
                                    ))}
                                </div>
                                <div className="themed-subject-card__actions">
                                    <span className="themed-subject-card__link">Explore Subject →</span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section className="platform-section platform-section--alt">
                <div className="container">
                    <div className="platform-section__header">
                        <p className="platform-section__eyebrow">How It Works</p>
                        <h2>Getting started is simple</h2>
                    </div>
                    <div className="process-steps">
                        <div className="process-step">
                            <span className="process-step__number">01</span>
                            <div className="process-step__icon">
                                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" /></svg>
                            </div>
                            <h3>Choose a Subject</h3>
                            <p>Select any of the five NPSE subjects you want to study or practise.</p>
                        </div>
                        <div className="process-step">
                            <span className="process-step__number">02</span>
                            <div className="process-step__icon">
                                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" /></svg>
                            </div>
                            <h3>Study the Topics</h3>
                            <p>Review structured notes and key concepts for each topic in the subject.</p>
                        </div>
                        <div className="process-step">
                            <span className="process-step__number">03</span>
                            <div className="process-step__icon">
                                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>
                            </div>
                            <h3>Take Quizzes</h3>
                            <p>Test your knowledge with interactive quizzes and get instant feedback.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="support-section">
                <div className="container">
                    <div className="support-section__inner" style={{ textAlign: 'center', maxWidth: '600px' }}>
                        <div className="support-section__content">
                            <h2>Ready to test your knowledge?</h2>
                            <p>Pick any subject and take a free quiz to see how much you know.</p>
                            <div style={{ display: 'flex', gap: 'var(--space-3)', justifyContent: 'center', flexWrap: 'wrap', marginTop: 'var(--space-6)' }}>
                                <Link to="/quiz" className="hero-cta hero-cta--primary">Start a Quiz</Link>
                                <Link to="/notes" className="hero-cta hero-cta--secondary">Browse Notes</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Subjects;
