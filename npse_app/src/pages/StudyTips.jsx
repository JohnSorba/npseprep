import { Link } from 'react-router-dom';

const StudyTips = () => {
    const pupilTips = [
        { title: 'Create a Study Schedule', description: 'Set aside regular time each day for studying. Even 30 minutes of focused study is better than hours of distracted learning.' },
        { title: 'Take Practice Quizzes', description: 'Testing yourself helps you remember information better than just reading. Use our free quizzes to practice regularly.' },
        { title: 'Understand, Don\'t Memorise', description: 'Try to understand why an answer is correct. This helps you solve similar problems even if they look different.' },
        { title: 'Take Breaks', description: 'Your brain needs rest to absorb information. Study for 25-30 minutes, then take a 5-minute break.' },
        { title: 'Ask Questions', description: 'If you don\'t understand something, ask your teacher or parent. There are no silly questions!' },
        { title: 'Review Your Mistakes', description: 'When you get a question wrong, don\'t just move on. Understand why you got it wrong and how to get it right next time.' },
    ];

    const examTips = [
        { title: 'Read Questions Carefully', description: 'Take time to read each question properly before answering. Look for keywords like "NOT" or "EXCEPT".' },
        { title: 'Manage Your Time', description: 'Don\'t spend too long on difficult questions. Answer the easy ones first, then go back to harder ones.' },
        { title: 'Check Your Work', description: 'If you finish early, use the remaining time to review your answers and correct any mistakes.' },
        { title: 'Stay Calm', description: 'If you feel nervous, take a deep breath. Being calm helps you think more clearly.' },
    ];

    const parentTips = [
        { title: 'Create a Good Study Environment', description: 'Set up a quiet, well-lit space for your child to study. Remove distractions like TV and phones.' },
        { title: 'Establish a Routine', description: 'Consistent study times help children develop good habits. Balance study with play and rest.' },
        { title: 'Be Encouraging, Not Pressuring', description: 'Celebrate effort and improvement, not just perfect scores. Encourage your child to do their best.' },
        { title: 'Stay Involved', description: 'Ask about what they\'re learning, help with difficult concepts, and show interest in their education.' },
        { title: 'Use Our Platform Together', description: 'Sit with your child during practice quizzes. Discuss answers together and help them understand mistakes.' },
        { title: 'Ensure Proper Rest', description: 'A well-rested child learns better. Ensure they get 8-10 hours of sleep, especially before exams.' },
    ];

    const renderTipList = (tips) => (
        <div className="tips-list-themed">
            {tips.map((tip, i) => (
                <div key={i} className="tip-item-themed">
                    <span className="tip-item-themed__number">{String(i + 1).padStart(2, '0')}</span>
                    <div>
                        <h4>{tip.title}</h4>
                        <p>{tip.description}</p>
                    </div>
                </div>
            ))}
        </div>
    );

    return (
        <>
            <section className="page-hero">
                <div className="container">
                    <p className="platform-section__eyebrow" style={{ color: 'rgba(255,255,255,0.5)' }}>Study Support</p>
                    <h1>Study Tips & Advice</h1>
                    <p className="page-hero__subtitle">Guidance for pupils and parents to make the most of NPSE preparation</p>
                </div>
            </section>

            {/* Navigation */}
            <section className="tips-nav-bar">
                <div className="container">
                    <div className="tips-nav-bar__inner">
                        <a href="#pupils" className="hero-cta hero-cta--primary" style={{ background: 'var(--color-green)', height: '40px', fontSize: '13px' }}>For Pupils</a>
                        <a href="#parents" className="hero-cta hero-cta--secondary" style={{ background: 'var(--color-bg)', color: 'var(--color-ink)', borderColor: 'var(--color-border)', height: '40px', fontSize: '13px' }}>For Parents</a>
                    </div>
                </div>
            </section>

            {/* For Pupils */}
            <section id="pupils" className="platform-section">
                <div className="container">
                    <div className="tips-two-col">
                        <div>
                            <p className="platform-section__eyebrow">For Pupils</p>
                            <h2>How to study effectively</h2>
                            {renderTipList(pupilTips)}
                        </div>
                        <div>
                            <p className="platform-section__eyebrow">Exam Day</p>
                            <h2>Approaching exam questions</h2>
                            {renderTipList(examTips)}
                            <div style={{ marginTop: 'var(--space-6)', textAlign: 'center' }}>
                                <Link to="/quiz" className="access-card__cta access-card__cta--primary" style={{ display: 'inline-flex' }}>
                                    Practice with a Quiz →
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Divider */}
            <section className="impact-section" style={{ padding: 'var(--space-12) 0' }}>
                <div className="container">
                    <div className="impact-section__inner">
                        <h2 className="impact-section__big">Guidance for <span>Parents & Guardians</span></h2>
                        <p className="impact-section__body" style={{ margin: 0 }}>Your support plays a crucial role in your child's success</p>
                    </div>
                </div>
            </section>

            {/* For Parents */}
            <section id="parents" className="platform-section">
                <div className="container" style={{ maxWidth: '720px' }}>
                    <p className="platform-section__eyebrow">For Parents</p>
                    <h2 style={{ marginBottom: 'var(--space-8)' }}>Supporting learning at home</h2>
                    {renderTipList(parentTips)}
                </div>
            </section>

            {/* Key Takeaways */}
            <section className="platform-section platform-section--alt">
                <div className="container">
                    <div className="platform-section__header">
                        <p className="platform-section__eyebrow">Summary</p>
                        <h2>Key takeaways</h2>
                    </div>
                    <div className="process-steps">
                        <div className="process-step">
                            <span className="process-step__number">01</span>
                            <div className="process-step__icon">
                                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
                            </div>
                            <h3>Consistency is Key</h3>
                            <p>Regular, focused study sessions are more effective than last-minute cramming.</p>
                        </div>
                        <div className="process-step">
                            <span className="process-step__number">02</span>
                            <div className="process-step__icon">
                                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>
                            </div>
                            <h3>Practice Makes Perfect</h3>
                            <p>Use quizzes and mock exams to reinforce learning and build confidence.</p>
                        </div>
                        <div className="process-step">
                            <span className="process-step__number">03</span>
                            <div className="process-step__icon">
                                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg>
                            </div>
                            <h3>Support Matters</h3>
                            <p>A supportive environment at home helps children perform their best.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="support-section">
                <div className="container">
                    <div className="support-section__inner" style={{ textAlign: 'center', maxWidth: '600px' }}>
                        <div className="support-section__content">
                            <h2>Start your NPSE preparation today</h2>
                            <p>Put these tips into practice with our free interactive quizzes and study notes.</p>
                            <div style={{ display: 'flex', gap: 'var(--space-3)', justifyContent: 'center', flexWrap: 'wrap', marginTop: 'var(--space-6)' }}>
                                <Link to="/quiz" className="hero-cta hero-cta--primary">Take a Free Quiz</Link>
                                <Link to="/notes" className="hero-cta hero-cta--secondary">Browse Notes</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default StudyTips;
