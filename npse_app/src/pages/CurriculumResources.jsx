import { Link } from 'react-router-dom';
import '../styles/CurriculumResources.css';

const CurriculumResources = () => {
    const resources = [
        { id: 'vocabulary-builder', title: 'Vocabulary Builder', description: 'Master key educational terms and academic English vocabulary used in the NPSE.', icon: '📚', link: '/vocabulary-builder', status: 'Primary English' },
        { id: 'english-syllabus', title: 'English Syllabus', description: 'Detailed breakdown of the National NPSE English Language curriculum.', icon: '📝', link: '/notes/english-language', status: 'Official' },
        { id: 'math-formulae', title: 'Math Formulae', description: 'Essential mathematical formulas and concepts for Prep 6 pupils.', icon: '➕', link: '/notes/mathematics', status: 'Core Math' },
    ];

    return (
        <>
            <section className="page-hero">
                <div className="container">
                    <p className="platform-section__eyebrow" style={{ color: 'rgba(255,255,255,0.5)' }}>Resources</p>
                    <h1>Curriculum Resources</h1>
                    <p className="page-hero__subtitle">Comprehensive materials to guide you through the NPSE syllabus</p>
                </div>
            </section>

            <section className="platform-section">
                <div className="container">
                    <div className="resources-strip">
                        {resources.map((resource) => (
                            <Link to={resource.link} key={resource.id} className="resources-strip__card">
                                <span className="resources-strip__icon">{resource.icon}</span>
                                <h4>{resource.title}</h4>
                                <p>{resource.description}</p>
                                <span className="themed-subject-card__link">{resource.status} →</span>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <section className="support-section">
                <div className="container">
                    <div className="support-section__inner" style={{ textAlign: 'center', maxWidth: '600px' }}>
                        <div className="support-section__content">
                            <h2>Need more help?</h2>
                            <p>Our mock exams and practice quizzes are updated weekly to match the latest curriculum changes.</p>
                            <div style={{ display: 'flex', gap: 'var(--space-3)', justifyContent: 'center', flexWrap: 'wrap', marginTop: 'var(--space-6)' }}>
                                <Link to="/mock-exams" className="hero-cta hero-cta--primary">Take a Mock Exam</Link>
                                <Link to="/quiz" className="hero-cta hero-cta--secondary">Practice Quiz</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default CurriculumResources;
