import { Link } from 'react-router-dom';

const Notes = () => {
    const subjectPapers = [
        { id: 'general-paper', name: 'General Paper', icon: '📚', color: '#1B8A5A', description: 'Home Economics, Physical Health Ed, Agricultural Science, Science, and Social Studies.', subjectCount: 5, route: '/notes/general-paper' },
        { id: 'english-language', name: 'English Language', icon: '📝', color: '#9333ea', description: 'Grammar, Vocabulary, Reading, Writing, Speaking & Listening, and Literature.', subjectCount: 10, route: '/notes/english-language' },
        { id: 'mathematics', name: 'Mathematics', icon: '🔢', color: '#1E6FB8', description: 'Numbers, fractions, decimals, measurement, geometry, and data handling.', subjectCount: 8, route: '/notes/mathematics' },
        { id: 'quantitative', name: 'Quantitative Aptitude', icon: '🧮', color: '#F97316', description: 'Patterns, codes, number series, shapes, and logical reasoning skills.', subjectCount: 7, route: '/notes/quantitative' },
        { id: 'verbal', name: 'Verbal Aptitude', icon: '💬', color: '#C73E3E', description: 'Analogies, word groups, sentence arrangement, synonyms, antonyms, and codes.', subjectCount: 8, route: '/notes/verbal' },
    ];

    return (
        <>
            <section className="page-hero">
                <div className="container">
                    <p className="platform-section__eyebrow" style={{ color: 'rgba(255,255,255,0.5)' }}>Study Notes</p>
                    <h1>NPSE Study Notes</h1>
                    <p className="page-hero__subtitle">Comprehensive study materials organised by subject to help you excel</p>
                </div>
            </section>

            <section className="platform-section">
                <div className="container">
                    <div className="platform-section__header">
                        <h2>Choose Your Subject Paper</h2>
                        <p className="platform-section__desc">Select a paper to explore detailed study notes</p>
                    </div>
                    <div className="notes-papers-grid-themed">
                        {subjectPapers.map((paper) => (
                            <Link to={paper.route} key={paper.id} className="notes-paper-card-themed" style={{ '--paper-color': paper.color }}>
                                <div className="notes-paper-card-themed__icon" style={{ background: `${paper.color}11`, color: paper.color }}>{paper.icon}</div>
                                <div>
                                    <h3>{paper.name}</h3>
                                    <p>{paper.description}</p>
                                    <div className="notes-paper-card-themed__meta">
                                        <span>📁 {paper.subjectCount} Subject Areas</span>
                                        <span className="notes-paper-card-themed__arrow">Explore →</span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <section className="platform-section platform-section--alt">
                <div className="container">
                    <div className="platform-section__header">
                        <p className="platform-section__eyebrow">Study Tips</p>
                        <h2>Make the most of your notes</h2>
                    </div>
                    <div className="process-steps">
                        <div className="process-step">
                            <span className="process-step__number">01</span>
                            <div className="process-step__icon">
                                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" /></svg>
                            </div>
                            <h3>Read Carefully</h3>
                            <p>Go through each unit systematically, making sure you understand before moving on.</p>
                        </div>
                        <div className="process-step">
                            <span className="process-step__number">02</span>
                            <div className="process-step__icon">
                                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" /><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" /></svg>
                            </div>
                            <h3>Take Notes</h3>
                            <p>Write down important points and formulas in your own words.</p>
                        </div>
                        <div className="process-step">
                            <span className="process-step__number">03</span>
                            <div className="process-step__icon">
                                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>
                            </div>
                            <h3>Practice</h3>
                            <p>Take quizzes after each section to test your understanding.</p>
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
                            <p>After studying, take our quizzes to see how much you've learnt.</p>
                            <div style={{ display: 'flex', gap: 'var(--space-3)', justifyContent: 'center', flexWrap: 'wrap', marginTop: 'var(--space-6)' }}>
                                <Link to="/quiz" className="hero-cta hero-cta--primary">Take a Quiz</Link>
                                <Link to="/games" className="hero-cta hero-cta--secondary">Play Games</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Notes;
