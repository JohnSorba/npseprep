import { useState, useEffect, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { subjects } from '../data/subjects';
import heroKidsImage from '../assets/hero_kids_learning.png';

/* ─── Games data ─── */
const GAMES = [
    { id: 'rapid-recall', name: 'Rapid Recall', desc: 'Timed micro-drills to build fast retrieval and confidence.', icon: '⚡', color: '#F59E0B', path: '/games/rapid-recall', ready: true },
    { id: 'match-link', name: 'Match & Link', desc: 'Match definitions, examples, and processes to deepen understanding.', icon: '🔗', color: '#3B82F6', path: '/games/match-link', ready: false },
    { id: 'spot-mistake', name: 'Spot the Mistake', desc: 'Find errors in worked solutions and sharpen your accuracy.', icon: '🔍', color: '#EF4444', path: '/games/spot-mistake', ready: false },
];

/* ─── Blog articles ─── */
const BLOG_ARTICLES = [
    { title: 'How to Create an Effective NPSE Study Schedule', tag: 'Study Tips', href: '/study-tips' },
    { title: 'Understanding the NPSE Marking Scheme', tag: 'Exam Tips', href: '/blog' },
    { title: '5 Common Mistakes to Avoid in Mathematics', tag: 'Subject Tips', href: '/blog' },
];

/* ─── Notes paths per subject ─── */
const NOTES_PATHS = {
    mathematics: '/notes/mathematics',
    english: '/notes/english-language',
    quantitative: '/notes/quantitative',
    verbal: '/notes/verbal',
    general: '/notes/general-paper',
};

const AUTO_ROTATE_MS = 10000;

const Home = () => {
    const [activeSubject, setActiveSubject] = useState(0);
    const [heroVisible, setHeroVisible] = useState(false);
    const [isPaused, setIsPaused] = useState(false);
    const timerRef = useRef(null);

    useEffect(() => {
        const t = setTimeout(() => setHeroVisible(true), 100);
        return () => clearTimeout(t);
    }, []);

    /* Auto-rotate subjects */
    const startTimer = useCallback(() => {
        clearInterval(timerRef.current);
        timerRef.current = setInterval(() => {
            setActiveSubject(prev => (prev + 1) % subjects.length);
        }, AUTO_ROTATE_MS);
    }, []);

    useEffect(() => {
        if (!isPaused) startTimer();
        return () => clearInterval(timerRef.current);
    }, [isPaused, startTimer]);

    const handleSubjectClick = (index) => {
        setActiveSubject(index);
        setIsPaused(true);
        // Resume auto-rotate after 10 seconds of inactivity
        clearTimeout(timerRef.current);
        timerRef.current = setTimeout(() => setIsPaused(false), 10000);
    };

    const current = subjects[activeSubject];

    return (
        <>
            {/* ═══════════════════════════════════════════════════════════
                 HERO — Structured Confidence
                ═══════════════════════════════════════════════════════════ */}
            <section className="cinematic-hero">
                <div className="cinematic-hero__overlay" />
                <img src={heroKidsImage} alt="Students studying" className="cinematic-hero__bg" />
                <div className="cinematic-hero__content cinematic-hero__content--centered">
                    <div className={`cinematic-hero__text ${heroVisible ? 'cinematic-hero__text--visible' : ''}`}>
                        <p className="cinematic-hero__eyebrow">Sierra Leone's NPSE Preparation Platform</p>
                        <h1 className="cinematic-hero__title">
                            Comprehensive NPSE Preparation.
                            <span className="cinematic-hero__title--accent">Notes. Practice. Mastery.</span>
                        </h1>
                        <p className="cinematic-hero__subtitle">
                            Structured, curriculum-aligned resources for every pupil preparing for the National Primary School Examination.
                        </p>
                        <div className="cinematic-hero__ctas">
                            <Link to="/quiz" className="hero-cta hero-cta--primary">Start Free Practice</Link>
                            <Link to="/notes" className="hero-cta hero-cta--secondary">Browse Study Notes</Link>
                        </div>
                    </div>
                </div>
                {/* Scroll indicator */}
                <div className="cinematic-hero__scroll">
                    <span />
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════════════
                 1. LEARN — Interactive Subject Explorer
                ═══════════════════════════════════════════════════════════ */}
            <section className="platform-section">
                <div className="container">
                    <div className="platform-section__header">
                        <p className="platform-section__eyebrow">Learn</p>
                        <h2>Explore all NPSE Subjects</h2>
                        <p className="platform-section__desc">
                            Click any subject to see its topics — or let us cycle through them for you.
                        </p>
                    </div>

                    <div className="subject-explorer">
                        {/* Left — Subject List */}
                        <div className="subject-explorer__list">
                            {subjects.map((subject, i) => (
                                <button
                                    key={subject.id}
                                    className={`subject-explorer__item ${activeSubject === i ? 'subject-explorer__item--active' : ''}`}
                                    style={{ '--subject-accent': subject.color, '--subject-bg': subject.bgColor }}
                                    onClick={() => handleSubjectClick(i)}
                                >
                                    <span className="subject-explorer__item-icon" style={{ background: subject.bgColor }}>
                                        {subject.icon}
                                    </span>
                                    <div className="subject-explorer__item-text">
                                        <span className="subject-explorer__item-name">{subject.name}</span>
                                        <span className="subject-explorer__item-count">{subject.topics.length} topics</span>
                                    </div>
                                    {activeSubject === i && (
                                        <span className="subject-explorer__item-indicator" style={{ background: subject.color }} />
                                    )}
                                </button>
                            ))}
                            {/* Progress bar showing rotation */}
                            {!isPaused && (
                                <div className="subject-explorer__progress">
                                    <div
                                        className="subject-explorer__progress-bar"
                                        style={{ '--progress-color': current.color, animationDuration: `${AUTO_ROTATE_MS}ms` }}
                                        key={activeSubject} /* Force re-render for animation restart */
                                    />
                                </div>
                            )}
                        </div>

                        {/* Right — Topics Panel */}
                        <div
                            className="subject-explorer__panel"
                            style={{ '--panel-accent': current.color, '--panel-bg': current.bgColor }}
                        >
                            <div className="subject-explorer__panel-header">
                                <span className="subject-explorer__panel-icon" style={{ background: current.bgColor }}>
                                    {current.icon}
                                </span>
                                <div>
                                    <h3 className="subject-explorer__panel-title" style={{ color: current.color }}>
                                        {current.name}
                                    </h3>
                                    <p className="subject-explorer__panel-desc">{current.description}</p>
                                </div>
                            </div>

                            <div className="subject-explorer__topics">
                                {current.topics.map((topic, i) => (
                                    <div key={i} className="subject-explorer__topic" style={{ animationDelay: `${i * 50}ms` }}>
                                        <span className="subject-explorer__topic-dot" style={{ background: current.color }} />
                                        <span>{topic}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="subject-explorer__panel-footer">
                                <Link
                                    to={`/subjects/${current.id}`}
                                    className="access-card__cta access-card__cta--primary"
                                    style={{ background: current.color }}
                                >
                                    Explore {current.name} →
                                </Link>
                                <Link
                                    to={NOTES_PATHS[current.id] || '/notes'}
                                    className="subject-explorer__notes-link"
                                    style={{ color: current.color }}
                                >
                                    Study Notes →
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════════════
                 2. PRACTISE — Quizzes & Games
                ═══════════════════════════════════════════════════════════ */}
            <section className="platform-section platform-section--alt">
                <div className="container">
                    <div className="platform-section__header">
                        <p className="platform-section__eyebrow">Practise</p>
                        <h2>Test your knowledge</h2>
                        <p className="platform-section__desc">
                            Interactive quizzes and educational games designed to reinforce learning and build exam confidence.
                        </p>
                    </div>

                    <div className="practise-grid">
                        {/* Quiz Card */}
                        <div className="practise-card">
                            <div className="practise-card__icon">🎯</div>
                            <h3>Subject Quizzes</h3>
                            <p>Choose any subject and test your understanding with instant feedback on every question.</p>
                            <ul className="practise-card__features">
                                <li>5 NPSE subjects covered</li>
                                <li>Instant answer feedback</li>
                                <li>Score tracking</li>
                            </ul>
                            <Link to="/quiz" className="access-card__cta access-card__cta--primary">Start a Quiz</Link>
                        </div>

                        {/* Games Cards */}
                        {GAMES.map(game => (
                            <div key={game.id} className="practise-card">
                                <div className="practise-card__icon" style={{ color: game.color }}>{game.icon}</div>
                                <h3>{game.name}</h3>
                                <p>{game.desc}</p>
                                {game.ready ? (
                                    <Link to={game.path} className="access-card__cta access-card__cta--primary">Play Now</Link>
                                ) : (
                                    <span className="practise-card__soon">Coming Soon</span>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════════════
                 3. TEST YOURSELF — Mock Exams
                ═══════════════════════════════════════════════════════════ */}
            <section className="platform-section">
                <div className="container">
                    <div className="platform-section__header">
                        <p className="platform-section__eyebrow">Test Yourself</p>
                        <h2>Full Mock Examinations</h2>
                        <p className="platform-section__desc">
                            Simulate the real NPSE experience with timed tests, structured feedback, and performance reports.
                        </p>
                    </div>

                    <div className="mock-preview">
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

                    <div style={{ textAlign: 'center', marginTop: 'var(--space-8)' }}>
                        <Link to="/mock-exams" className="hero-cta hero-cta--primary" style={{ background: 'var(--color-green)' }}>
                            Learn More About Mock Exams
                        </Link>
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════════════
                 4. PAST PAPERS
                ═══════════════════════════════════════════════════════════ */}
            <section className="platform-section platform-section--alt">
                <div className="container">
                    <div className="platform-section__header">
                        <p className="platform-section__eyebrow">Past Papers</p>
                        <h2>Real NPSE Past Questions</h2>
                        <p className="platform-section__desc">
                            Study with actual past examination papers to understand the format, difficulty, and question styles.
                        </p>
                    </div>

                    <div className="past-papers-preview">
                        <div className="past-papers-preview__card">
                            <div className="past-papers-preview__year">2024</div>
                            <h4>NPSE Past Paper</h4>
                            <p>All 5 subjects with full answer keys</p>
                            <span className="practise-card__soon">Coming Soon</span>
                        </div>
                        <div className="past-papers-preview__card">
                            <div className="past-papers-preview__year">2023</div>
                            <h4>NPSE Past Paper</h4>
                            <p>All 5 subjects with full answer keys</p>
                            <span className="practise-card__soon">Coming Soon</span>
                        </div>
                        <div className="past-papers-preview__card">
                            <div className="past-papers-preview__year">2022</div>
                            <h4>NPSE Past Paper</h4>
                            <p>All 5 subjects with full answer keys</p>
                            <span className="practise-card__soon">Coming Soon</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════════════
                 5. IMPACT + STATS (National Context)
                ═══════════════════════════════════════════════════════════ */}
            <section className="impact-section">
                <div className="container">
                    <div className="impact-section__inner">
                        <p className="impact-section__small">Over 150,000 pupils sit the NPSE each year.</p>
                        <h2 className="impact-section__big">Preparation should not depend on <span>chance.</span></h2>
                        <p className="impact-section__body">
                            We provide structured, curriculum-aligned resources for pupils, parents and teachers across Sierra Leone.
                            Every child deserves access to quality exam preparation.
                        </p>
                        <div className="impact-section__stats">
                            <div className="impact-stat"><span className="impact-stat__number">5</span><span className="impact-stat__label">NPSE Subjects</span></div>
                            <div className="impact-stat"><span className="impact-stat__number">750+</span><span className="impact-stat__label">Practice Questions</span></div>
                            <div className="impact-stat"><span className="impact-stat__number">75+</span><span className="impact-stat__label">Topics Covered</span></div>
                            <div className="impact-stat"><span className="impact-stat__number">Free</span><span className="impact-stat__label">Core Access</span></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════════════
                 6. STUDY SUPPORT — Blog / Articles / Exam Tips
                ═══════════════════════════════════════════════════════════ */}
            <section className="platform-section">
                <div className="container">
                    <div className="platform-section__header">
                        <p className="platform-section__eyebrow">Study Support</p>
                        <h2>Tips, articles & exam strategies</h2>
                        <p className="platform-section__desc">
                            Expert guidance and practical advice to help you study smarter, not harder.
                        </p>
                    </div>

                    <div className="study-support-grid">
                        {BLOG_ARTICLES.map((article, idx) => (
                            <Link to={article.href} key={idx} className="study-support-card">
                                <span className="study-support-card__tag">{article.tag}</span>
                                <h3>{article.title}</h3>
                                <span className="study-support-card__link">Read more →</span>
                            </Link>
                        ))}
                    </div>

                    <div style={{ textAlign: 'center', marginTop: 'var(--space-8)' }}>
                        <div style={{ display: 'flex', gap: 'var(--space-3)', justifyContent: 'center', flexWrap: 'wrap' }}>
                            <Link to="/study-tips" className="hero-cta hero-cta--primary" style={{ background: 'var(--color-green)' }}>Study Tips</Link>
                            <Link to="/blog" className="hero-cta hero-cta--secondary" style={{ background: 'var(--color-bg)', color: 'var(--color-ink)', borderColor: 'var(--color-border)' }}>Read Blog</Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════════════
                 7. RESOURCES
                ═══════════════════════════════════════════════════════════ */}
            <section className="platform-section platform-section--alt">
                <div className="container">
                    <div className="platform-section__header">
                        <p className="platform-section__eyebrow">Resources</p>
                        <h2>Curriculum tools & materials</h2>
                        <p className="platform-section__desc">
                            Download materials, explore the syllabus, and access tools to support your preparation.
                        </p>
                    </div>

                    <div className="resources-strip">
                        <Link to="/curriculum-resources" className="resources-strip__card">
                            <span className="resources-strip__icon">📋</span>
                            <h4>Curriculum Resources</h4>
                            <p>Detailed syllabus breakdowns and reference materials</p>
                        </Link>
                        <Link to="/vocabulary-builder" className="resources-strip__card">
                            <span className="resources-strip__icon">📚</span>
                            <h4>Vocabulary Builder</h4>
                            <p>Master key academic English terms for the NPSE</p>
                        </Link>
                        <Link to="/notes" className="resources-strip__card">
                            <span className="resources-strip__icon">📝</span>
                            <h4>All Study Notes</h4>
                            <p>Browse every subject paper's structured notes</p>
                        </Link>
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════════════
                 8. FINAL CTA — Support & Get Started
                ═══════════════════════════════════════════════════════════ */}
            <section className="support-section">
                <div className="container">
                    <div className="support-section__inner" style={{ textAlign: 'center', maxWidth: '700px' }}>
                        <div className="support-section__content">
                            <p className="platform-section__eyebrow" style={{ color: 'rgba(255,255,255,0.5)' }}>Get Started Today</p>
                            <h2>Every pupil deserves quality preparation</h2>
                            <p>
                                Join thousands of pupils across Sierra Leone using NPSE Prep to study smarter.
                                Start for free or support the mission to reach every community.
                            </p>
                            <div style={{ display: 'flex', gap: 'var(--space-3)', justifyContent: 'center', flexWrap: 'wrap', marginTop: 'var(--space-8)' }}>
                                <Link to="/quiz" className="hero-cta hero-cta--primary">Start Free Practice</Link>
                                <Link to="/donate" className="hero-cta hero-cta--secondary">Support the Mission</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;
