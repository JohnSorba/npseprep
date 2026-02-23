import { Link } from 'react-router-dom';

const MockExams = () => {
    return (
        <>
            {/* Page Hero */}
            <section className="page-hero">
                <div className="container">
                    <p className="platform-section__eyebrow" style={{ color: 'rgba(255,255,255,0.5)' }}>Test Yourself</p>
                    <h1>NPSE Mock Exams</h1>
                    <p className="page-hero__subtitle">Prepare for the real exam with structured, timed mock tests</p>
                </div>
            </section>

            {/* What Are Mock Exams */}
            <section className="platform-section">
                <div className="container">
                    <div className="platform-section__header">
                        <p className="platform-section__eyebrow">Overview</p>
                        <h2>What are NPSE Mock Exams?</h2>
                        <p className="platform-section__desc">
                            Practice tests that simulate the real National Primary School Examination experience, helping pupils understand the format, manage time, and identify areas for improvement.
                        </p>
                    </div>

                    <div className="process-steps">
                        <div className="process-step">
                            <span className="process-step__number">01</span>
                            <div className="process-step__icon">
                                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" /><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" /></svg>
                            </div>
                            <h3>Select Your Exam</h3>
                            <p>Choose from subject-specific tests or full mock exams covering all NPSE subjects.</p>
                        </div>
                        <div className="process-step">
                            <span className="process-step__number">02</span>
                            <div className="process-step__icon">
                                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
                            </div>
                            <h3>Timed Conditions</h3>
                            <p>Practice under real exam conditions with timed questions to build speed and confidence.</p>
                        </div>
                        <div className="process-step">
                            <span className="process-step__number">03</span>
                            <div className="process-step__icon">
                                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M18 20V10" /><path d="M12 20V4" /><path d="M6 20v-6" /></svg>
                            </div>
                            <h3>Instant Results</h3>
                            <p>Get your score immediately with detailed breakdowns and recommendations.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* For Parents */}
            <section className="platform-section platform-section--alt">
                <div className="container">
                    <div className="platform-section__header">
                        <p className="platform-section__eyebrow">For Parents</p>
                        <h2>Comprehensive insights for your child</h2>
                    </div>

                    <div className="practise-grid" style={{ maxWidth: '900px', margin: '0 auto' }}>
                        <div className="practise-card">
                            <div className="practise-card__icon">📈</div>
                            <h3>Detailed Scores</h3>
                            <p>See exactly how your child performed in each subject with percentage scores and comparisons.</p>
                        </div>
                        <div className="practise-card">
                            <div className="practise-card__icon">🎯</div>
                            <h3>Topic Breakdown</h3>
                            <p>Understand which specific topics need more attention with our detailed analysis.</p>
                        </div>
                        <div className="practise-card">
                            <div className="practise-card__icon">📅</div>
                            <h3>Progress Tracking</h3>
                            <p>Monitor improvement over time with progress charts and performance trends.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Exam Options */}
            <section className="platform-section">
                <div className="container">
                    <div className="platform-section__header">
                        <p className="platform-section__eyebrow">Exam Types</p>
                        <h2>Mock Exam Options</h2>
                        <p className="platform-section__desc">Choose the format that works best for your preparation</p>
                    </div>

                    <div className="mock-preview" style={{ maxWidth: '780px', margin: '0 auto' }}>
                        <div className="mock-preview__card">
                            <span className="pillar-card__number">Subject Mock</span>
                            <h3>Focus on one subject</h3>
                            <ul className="access-card__features">
                                <li>20 questions per subject</li>
                                <li>30-minute time limit</li>
                                <li>Topic-based feedback</li>
                                <li>Unlimited retakes</li>
                            </ul>
                            <span className="practise-card__soon">Coming Soon</span>
                        </div>
                        <div className="mock-preview__card mock-preview__card--featured">
                            <div className="access-card__badge">Recommended</div>
                            <span className="pillar-card__number">Full NPSE Mock</span>
                            <h3>Complete exam experience</h3>
                            <ul className="access-card__features">
                                <li>All 5 NPSE subjects</li>
                                <li>100 questions total</li>
                                <li>Real exam timing</li>
                                <li>Comprehensive report</li>
                            </ul>
                            <span className="practise-card__soon">Coming Soon</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="support-section">
                <div className="container">
                    <div className="support-section__inner" style={{ textAlign: 'center', maxWidth: '600px' }}>
                        <div className="support-section__content">
                            <h2>Start practising today</h2>
                            <p>Try our free quizzes while we prepare our full mock exam experience.</p>
                            <div style={{ display: 'flex', gap: 'var(--space-3)', justifyContent: 'center', flexWrap: 'wrap', marginTop: 'var(--space-6)' }}>
                                <Link to="/quiz" className="hero-cta hero-cta--primary">Try Free Quiz</Link>
                                <Link to="/notes" className="hero-cta hero-cta--secondary">Browse Study Notes</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default MockExams;
