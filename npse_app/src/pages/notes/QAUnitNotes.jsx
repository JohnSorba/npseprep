import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getQuantitativeSubjectById, getQuantitativeUnitById } from '../../data/quantitativeNotes';
import { getQuantitativeNotesContent } from '../../data/quantitativeNotesContent';
import { MathText } from '../../components/Math';
import '../../styles/Notes.css';

// Icons as inline SVGs
const CheckIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
);

const ArrowLeftIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="19" y1="12" x2="5" y2="12"></line>
        <polyline points="12 19 5 12 12 5"></polyline>
    </svg>
);

const ArrowRightIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="5" y1="12" x2="19" y2="12"></line>
        <polyline points="12 5 19 12 12 19"></polyline>
    </svg>
);

// TOC Icons
const TocIcons = {
    text: '📖',
    definition: '📝',
    list: '📋',
    table: '📊',
    cards: '🃏',
    default: '📌'
};

const QAUnitNotes = () => {
    const { subjectId, unitId } = useParams();
    const subject = getQuantitativeSubjectById(subjectId);
    const unit = getQuantitativeUnitById(subjectId, unitId);
    const content = getQuantitativeNotesContent(unitId);
    const [activeSection, setActiveSection] = useState(0);

    // Calculate progress
    const unitIndex = subject?.units.findIndex(u => u.id === unitId) || 0;
    const totalUnits = subject?.units.length || 1;
    const progress = Math.round(((unitIndex + 1) / totalUnits) * 100);

    const prevUnit = unitIndex > 0 ? subject?.units[unitIndex - 1] : null;
    const nextUnit = unitIndex < (subject?.units.length || 0) - 1 ? subject?.units[unitIndex + 1] : null;

    // Scroll spy for active section
    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll('.content-section');
            sections.forEach((section, index) => {
                const rect = section.getBoundingClientRect();
                if (rect.top <= 150 && rect.bottom > 150) {
                    setActiveSection(index);
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    if (!subject || !unit) {
        return (
            <section className="section">
                <div className="container" style={{ textAlign: 'center' }}>
                    <h2>Content Not Found</h2>
                    <p>The notes you're looking for don't exist.</p>
                    <Link to="/notes/quantitative" className="btn btn-primary">Back to Quantitative</Link>
                </div>
            </section>
        );
    }

    const renderSectionContent = (section) => {
        switch (section.type) {
            case 'text':
                return <p><MathText>{section.content}</MathText></p>;
            case 'definition':
                return (
                    <div className="definition-cards">
                        {section.definitions.map((def, i) => (
                            <div key={i} className="definition-card-v2">
                                <span className="definition-term-v2"><MathText>{def.term}</MathText></span>
                                <span className="definition-text-v2"><MathText>{def.definition}</MathText></span>
                            </div>
                        ))}
                    </div>
                );
            case 'list':
                return (
                    <ul className="check-list">
                        {section.items.map((item, i) => (
                            <li key={i} className="check-list-item">
                                <span className="check-icon-wrapper">
                                    <CheckIcon />
                                </span>
                                <span>
                                    <strong>{item.title}</strong>
                                    {item.description && <> - <MathText>{item.description}</MathText></>}
                                </span>
                            </li>
                        ))}
                    </ul>
                );
            case 'numbered-list':
                return (
                    <div className="steps-list-v2">
                        {section.items.map((item, i) => (
                            <div key={i} className="step-item-v2">
                                <div className="step-number-v2" style={{ background: subject.color }}>
                                    {i + 1}
                                </div>
                                <div className="step-content-v2">
                                    <p><MathText>{item}</MathText></p>
                                </div>
                            </div>
                        ))}
                    </div>
                );
            case 'cards':
                return (
                    <div className="info-cards-grid-v2">
                        {section.items.map((item, i) => (
                            <div key={i} className="info-card-v2">
                                <div className="info-card-icon-v2">{item.icon}</div>
                                <h4 className="info-card-title-v2">{item.title}</h4>
                                <p className="info-card-text-v2"><MathText>{item.examples}</MathText></p>
                            </div>
                        ))}
                    </div>
                );
            case 'comparison':
                return (
                    <div className="comparison-grid">
                        {section.items.map((item, i) => (
                            <div key={i} className="comparison-card">
                                <h4>{item.title}</h4>
                                {item.description && <p className="comparison-desc"><MathText>{item.description}</MathText></p>}
                                {item.examples && (
                                    <div className="comparison-examples">
                                        {Array.isArray(item.examples) ? item.examples.map((ex, j) => (
                                            <span key={j} className="example-tag"><MathText>{ex}</MathText></span>
                                        )) : <span className="example-text"><MathText>{item.examples}</MathText></span>}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                );
            case 'table':
                return (
                    <div className="table-wrapper">
                        <table className="content-table">
                            <thead>
                                <tr>
                                    {section.headers.map((h, i) => (
                                        <th key={i}><MathText>{h}</MathText></th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {section.rows.map((row, i) => (
                                    <tr key={i}>
                                        {row.map((cell, j) => (
                                            <td key={j}><MathText>{cell}</MathText></td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                );
            case 'steps':
                return (
                    <div className="steps-list-v2">
                        {section.items.map((item, i) => (
                            <div key={i} className="step-item-v2">
                                <div className="step-number-v2" style={{ background: subject.color }}>{item.step}</div>
                                <div className="step-content-v2">
                                    <p><MathText>{item.description}</MathText></p>
                                </div>
                            </div>
                        ))}
                    </div>
                );
            case 'checklist':
                return (
                    <ul className="check-list">
                        {section.items.map((item, i) => (
                            <li key={i} className="check-list-item">
                                <span className="check-icon-wrapper" style={{ background: subject.color + '20' }}>
                                    <CheckIcon />
                                </span>
                                <span><MathText>{item}</MathText></span>
                            </li>
                        ))}
                    </ul>
                );
            default:
                return null;
        }
    };

    return (
        <div className="notes-page-wrapper">
            {/* Sidebar - Hidden on tablet and mobile via CSS */}
            <aside className="notes-toc-sidebar">
                {/* Table of Contents */}
                <div className="toc-card">
                    <div className="toc-title">Table of Contents</div>
                    <ul className="toc-list">
                        {content?.sections.map((section, i) => (
                            <a
                                key={i}
                                href={`#section-${i}`}
                                className={`toc-item ${activeSection === i ? 'active' : ''}`}
                                onClick={(e) => {
                                    e.preventDefault();
                                    document.getElementById(`section-${i}`)?.scrollIntoView({ behavior: 'smooth' });
                                }}
                            >
                                <span className="toc-item-icon">
                                    {TocIcons[section.type] || TocIcons.default}
                                </span>
                                <span>{i + 1}. {section.heading}</span>
                            </a>
                        ))}
                    </ul>
                </div>

                {/* Lesson Progress */}
                <div className="lesson-progress-card">
                    <div className="lesson-progress-header">
                        <span className="lesson-progress-label">Lesson Progress</span>
                        <span className="lesson-progress-value">{progress}%</span>
                    </div>
                    <div className="lesson-progress-bar">
                        <div className="lesson-progress-fill" style={{ width: `${progress}%` }}></div>
                    </div>
                </div>

                {/* Key Points Box */}
                {content?.keyPoints && (
                    <div className="toc-card">
                        <div className="toc-title">🔑 Key Points</div>
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                            {content.keyPoints.map((point, i) => (
                                <li key={i} style={{ padding: '8px 0', borderBottom: '1px solid #f1f5f9', fontSize: '14px', color: 'var(--neutral-600)' }}>
                                    <MathText>{point}</MathText>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                {/* Sidebar CTA */}
                <div className="sidebar-cta-card">
                    <div className="sidebar-cta-title">Stuck on a concept?</div>
                    <div className="sidebar-cta-text">
                        Practice with our interactive games for {subject.name}.
                    </div>
                    <Link to="/games/rapid-recall" className="sidebar-cta-btn">
                        Play Now
                    </Link>
                </div>
            </aside>

            {/* Main Content */}
            <main className="notes-content-main">
                {/* Breadcrumb */}
                <nav className="notes-breadcrumb">
                    <Link to="/">Home</Link>
                    <span>›</span>
                    <Link to="/notes/quantitative">Quantitative</Link>
                    <span>›</span>
                    <Link to={`/notes/quantitative/${subject.id}`}>{subject.name}</Link>
                    <span>›</span>
                    <span className="active">{unit.title}</span>
                </nav>

                {/* Chapter Tag & Title */}
                <div className="chapter-tag">🔢 Unit {unit.unitNumber}</div>
                <h1 className="content-title">{unit.title}</h1>
                <p className="content-subtitle">
                    Estimated reading time: {unit.estimatedReadTime}
                </p>

                {/* Content Sections */}
                {content ? (
                    content.sections.map((section, index) => (
                        <div key={index} id={`section-${index}`} className="content-section">
                            <h2 className="content-section-title">{section.heading}</h2>
                            {renderSectionContent(section)}
                        </div>
                    ))
                ) : (
                    <div className="content-section">
                        <h2 className="content-section-title">Coming Soon</h2>
                        <p>Detailed content for this unit is being prepared. Check back soon!</p>
                        <p><strong>Topics covered:</strong> {unit.topics.join(', ')}</p>
                    </div>
                )}

                {/* Quiz CTA Block */}
                <div className="quiz-cta-block">
                    <div className="quiz-cta-content">
                        <h3>Ready to test your knowledge?</h3>
                        <p>Complete the {subject.name} quiz to unlock the next chapter and earn 50 XP!</p>
                    </div>
                    <Link to="/quiz/quantitative" className="quiz-cta-btn">
                        Take Topic Quiz
                        <ArrowRightIcon />
                    </Link>
                </div>

                {/* Bottom Navigation */}
                <nav className="notes-bottom-nav">
                    {prevUnit ? (
                        <Link to={`/notes/quantitative/${subject.id}/${prevUnit.id}`} className="nav-link-prev">
                            <ArrowLeftIcon />
                            Previous Topic
                        </Link>
                    ) : (
                        <span></span>
                    )}
                    {nextUnit ? (
                        <Link to={`/notes/quantitative/${subject.id}/${nextUnit.id}`} className="nav-link-next">
                            Next Topic
                            <ArrowRightIcon />
                        </Link>
                    ) : (
                        <Link to="/quiz/quantitative" className="nav-link-next">
                            Take Quiz
                            <ArrowRightIcon />
                        </Link>
                    )}
                </nav>
            </main>
        </div>
    );
};

export default QAUnitNotes;
