import { Link } from 'react-router-dom';

const About = () => {
    return (
        <>
            {/* Page Hero */}
            <section className="page-hero">
                <div className="container">
                    <p className="platform-section__eyebrow" style={{ color: 'rgba(255,255,255,0.5)' }}>About</p>
                    <h1>About NPSE Prep</h1>
                    <p className="page-hero__subtitle">Dedicated to helping Sierra Leone's pupils succeed in the NPSE</p>
                </div>
            </section>

            {/* Why We Exist */}
            <section className="platform-section">
                <div className="container" style={{ maxWidth: '800px' }}>
                    <div className="platform-section__header">
                        <p className="platform-section__eyebrow">Our Story</p>
                        <h2>Why we built NPSE Prep</h2>
                    </div>
                    <div className="about-prose">
                        <p>
                            Every year, thousands of Prep 6 pupils across Sierra Leone sit for the National Primary School Examination. This exam is a crucial stepping stone in their educational journey, determining their path to secondary education.
                        </p>
                        <p>
                            We created NPSE Prep because we believe every child deserves access to quality exam preparation, regardless of where they live or their family's resources. Our platform brings the best study materials and practice tools directly to pupils and their families.
                        </p>
                        <p>
                            By combining engaging interactive content with the official NPSE curriculum, we make studying effective and enjoyable. Our goal is simple: help more pupils succeed and build confidence in their abilities.
                        </p>
                    </div>
                </div>
            </section>

            {/* Focus */}
            <section className="platform-section platform-section--alt">
                <div className="container">
                    <div className="platform-section__header">
                        <p className="platform-section__eyebrow">Our Focus</p>
                        <h2>What makes NPSE Prep different</h2>
                    </div>

                    <div className="process-steps">
                        <div className="process-step">
                            <span className="process-step__number">01</span>
                            <div className="process-step__icon">
                                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>
                            </div>
                            <h3>NPSE Alignment</h3>
                            <p>Every question, topic, and material is carefully aligned with the official NPSE curriculum.</p>
                        </div>
                        <div className="process-step">
                            <span className="process-step__number">02</span>
                            <div className="process-step__icon">
                                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="10" r="3" /><path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z" /></svg>
                            </div>
                            <h3>Made for Sierra Leone</h3>
                            <p>Content created with local context, currency, and examples pupils can relate to.</p>
                        </div>
                        <div className="process-step">
                            <span className="process-step__number">03</span>
                            <div className="process-step__icon">
                                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="5" y="2" width="14" height="20" rx="2" ry="2" /><line x1="12" y1="18" x2="12.01" y2="18" /></svg>
                            </div>
                            <h3>Accessible Anywhere</h3>
                            <p>Works on phones, tablets, and computers — quality education with limited resources.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="platform-section">
                <div className="container">
                    <div className="platform-section__header">
                        <p className="platform-section__eyebrow">Values</p>
                        <h2>Our educational mission</h2>
                        <p className="platform-section__desc">The principles that guide everything we do</p>
                    </div>

                    <div className="values-grid-themed">
                        {[
                            { icon: '🌟', title: 'Excellence', desc: 'We strive for the highest quality in our content and user experience.' },
                            { icon: '🤝', title: 'Accessibility', desc: 'Quality education should be available to every child, everywhere.' },
                            { icon: '💪', title: 'Empowerment', desc: 'We build confidence and skills that last beyond the exam.' },
                            { icon: '📚', title: 'Integrity', desc: 'Honest, accurate content that truly prepares pupils for success.' },
                            { icon: '🎮', title: 'Engagement', desc: 'Learning should be enjoyable, not a chore.' },
                            { icon: '📈', title: 'Progress', desc: 'Continuous improvement in everything we do.' },
                        ].map((v, i) => (
                            <div key={i} className="value-card-themed">
                                <span className="value-card-themed__icon">{v.icon}</span>
                                <h4>{v.title}</h4>
                                <p>{v.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Quote */}
            <section className="impact-section" style={{ padding: 'var(--space-16) 0' }}>
                <div className="container">
                    <div className="impact-section__inner">
                        <blockquote className="about-quote">
                            "Our goal is simple. Exams can be stressful, but proper preparation builds confidence. We want every Prep 6 pupil in Sierra Leone to walk into their NPSE feeling ready, capable, and confident."
                        </blockquote>
                        <p className="about-quote__author">— The NPSE Prep Team</p>
                    </div>
                </div>
            </section>

            {/* Honest Approach */}
            <section className="platform-section">
                <div className="container" style={{ maxWidth: '800px' }}>
                    <div className="platform-section__header">
                        <p className="platform-section__eyebrow">Transparency</p>
                        <h2>Clear, honest approach</h2>
                    </div>
                    <div className="about-prose">
                        <p>
                            We believe in transparency. Our platform offers free practice quizzes so you can experience the quality of our content before committing to anything else.
                        </p>
                        <p>
                            We don't make unrealistic promises. NPSE success requires hard work from pupils, support from parents, and guidance from teachers. Our platform is a tool to support this effort — not a magic solution.
                        </p>
                        <p>
                            We're continuously improving based on feedback from pupils, parents, and educators. If you have suggestions or spot any errors, we want to hear from you.
                        </p>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="support-section">
                <div className="container">
                    <div className="support-section__inner" style={{ textAlign: 'center', maxWidth: '600px' }}>
                        <div className="support-section__content">
                            <h2>Ready to begin?</h2>
                            <p>Start exploring our free resources to help your child succeed.</p>
                            <div style={{ display: 'flex', gap: 'var(--space-3)', justifyContent: 'center', flexWrap: 'wrap', marginTop: 'var(--space-6)' }}>
                                <Link to="/quiz" className="hero-cta hero-cta--primary">Try a Free Quiz</Link>
                                <Link to="/notes" className="hero-cta hero-cta--secondary">Browse Study Notes</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default About;
