import { useParams, Link } from 'react-router-dom';
import { getGeneralPaperSubjectById, getUnitById } from '../../data/generalPaperNotes';
import { getNotesContent } from '../../data/notesContent';

const UnitNotes = () => {
    const { subjectId, unitId } = useParams();
    const subject = getGeneralPaperSubjectById(subjectId);
    const unit = getUnitById(subjectId, unitId);
    const content = getNotesContent(unitId);

    if (!subject || !unit || !content) {
        return (
            <section className="section">
                <div className="container" style={{ textAlign: 'center' }}>
                    <h2>Content Not Found</h2>
                    <p>The notes you're looking for don't exist.</p>
                    <Link to="/notes" className="btn btn-primary">
                        Back to Notes
                    </Link>
                </div>
            </section>
        );
    }

    // Find prev/next units
    const unitIndex = subject.units.findIndex(u => u.id === unitId);
    const prevUnit = unitIndex > 0 ? subject.units[unitIndex - 1] : null;
    const nextUnit = unitIndex < subject.units.length - 1 ? subject.units[unitIndex + 1] : null;

    // Render different section types
    const renderSection = (section, index) => {
        switch (section.type) {
            case 'text':
                return (
                    <div key={index} className="notes-section notes-text">
                        <h3>{section.heading}</h3>
                        <p>{section.content}</p>
                    </div>
                );

            case 'definition':
                return (
                    <div key={index} className="notes-section notes-definitions">
                        <h3>{section.heading}</h3>
                        <div className="definition-cards">
                            {section.definitions.map((def, i) => (
                                <div key={i} className="definition-card">
                                    <span className="definition-term">{def.term}</span>
                                    <span className="definition-text">{def.definition}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                );

            case 'list':
                return (
                    <div key={index} className="notes-section notes-list">
                        <h3>{section.heading}</h3>
                        {section.content && <p>{section.content}</p>}
                        <ul className="styled-list">
                            {section.items.map((item, i) => (
                                <li key={i}>
                                    <strong>{item.title}</strong>
                                    {item.description && <span> - {item.description}</span>}
                                </li>
                            ))}
                        </ul>
                    </div>
                );

            case 'numbered-list':
                return (
                    <div key={index} className="notes-section notes-numbered-list">
                        <h3>{section.heading}</h3>
                        <ol className="styled-ol">
                            {section.items.map((item, i) => (
                                <li key={i}>{item}</li>
                            ))}
                        </ol>
                    </div>
                );

            case 'cards':
                return (
                    <div key={index} className="notes-section notes-cards">
                        <h3>{section.heading}</h3>
                        <div className="info-cards-grid">
                            {section.items.map((item, i) => (
                                <div
                                    key={i}
                                    className="info-card"
                                    style={{ '--card-color': item.color }}
                                >
                                    <div className="info-card-icon">{item.icon}</div>
                                    <h4>{item.title}</h4>
                                    <p>{item.examples}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                );

            case 'comparison':
                return (
                    <div key={index} className="notes-section notes-comparison">
                        <h3>{section.heading}</h3>
                        <div className="comparison-grid">
                            {section.items.map((item, i) => (
                                <div key={i} className="comparison-card">
                                    <h4>{item.title}</h4>
                                    {item.description && <p className="comparison-desc">{item.description}</p>}
                                    {item.examples && (
                                        <div className="comparison-examples">
                                            {Array.isArray(item.examples)
                                                ? item.examples.map((ex, j) => (
                                                    <span key={j} className="example-tag">{ex}</span>
                                                ))
                                                : <span className="example-text">{item.examples}</span>
                                            }
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                );

            case 'grid':
                return (
                    <div key={index} className="notes-section notes-grid-section">
                        <h3>{section.heading}</h3>
                        <div className="tag-grid">
                            {section.items.map((item, i) => (
                                <span key={i} className="tag-item" style={{ '--tag-color': subject.color }}>
                                    {item}
                                </span>
                            ))}
                        </div>
                    </div>
                );

            case 'table':
                return (
                    <div key={index} className="notes-section notes-table">
                        <h3>{section.heading}</h3>
                        <div className="table-wrapper">
                            <table>
                                <thead>
                                    <tr>
                                        {section.headers.map((header, i) => (
                                            <th key={i}>{header}</th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody>
                                    {section.rows.map((row, i) => (
                                        <tr key={i}>
                                            {row.map((cell, j) => (
                                                <td key={j}>{cell}</td>
                                            ))}
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                );

            case 'steps':
                return (
                    <div key={index} className="notes-section notes-steps">
                        <h3>{section.heading}</h3>
                        <div className="steps-list">
                            {section.items.map((item, i) => (
                                <div key={i} className="step-item">
                                    <div className="step-number" style={{ background: subject.color }}>
                                        {item.step}
                                    </div>
                                    <div className="step-content">
                                        {item.description}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                );

            case 'checklist':
                return (
                    <div key={index} className="notes-section notes-checklist">
                        <h3>{section.heading}</h3>
                        <ul className="checklist">
                            {section.items.map((item, i) => (
                                <li key={i}>
                                    <span className="check-icon" style={{ color: subject.color }}>✓</span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                );

            case 'chart':
                return (
                    <div key={index} className="notes-section notes-chart">
                        <h3>{section.heading}</h3>
                        <div className="pie-chart-legend">
                            {section.data.map((item, i) => (
                                <div key={i} className="legend-item">
                                    <span
                                        className="legend-color"
                                        style={{ background: item.color }}
                                    ></span>
                                    <span className="legend-label">{item.label}</span>
                                    <span className="legend-value">{item.value}%</span>
                                </div>
                            ))}
                        </div>
                        <div className="simple-bar-chart">
                            {section.data.map((item, i) => (
                                <div key={i} className="bar-row">
                                    <span className="bar-label">{item.label}</span>
                                    <div className="bar-container">
                                        <div
                                            className="bar-fill"
                                            style={{
                                                width: `${item.value}%`,
                                                background: item.color
                                            }}
                                        ></div>
                                    </div>
                                    <span className="bar-value">{item.value}%</span>
                                </div>
                            ))}
                        </div>
                    </div>
                );

            case 'warning':
                return (
                    <div key={index} className="notes-section notes-warning">
                        <h3>{section.heading}</h3>
                        <div className="warning-box">
                            <span className="warning-icon">⚠️</span>
                            <ul>
                                {section.items.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                );

            default:
                return null;
        }
    };

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
                        <Link to={`/notes/${subject.id}`} style={{ color: 'rgba(255,255,255,0.7)' }}>{subject.name}</Link>
                        <span>›</span>
                        <span style={{ color: 'white' }}>Unit {unit.unitNumber}</span>
                    </div>
                    <p className="platform-section__eyebrow" style={{ color: 'rgba(255,255,255,0.5)' }}>Study Notes</p>
                    <span className="badge badge-secondary" style={{ marginBottom: 'var(--space-3)' }}>
                        {subject.icon} {subject.name}
                    </span>
                    <h1>{unit.title}</h1>
                    <div className="unit-header-meta">
                        <span>📖 Unit {unit.unitNumber}</span>
                        <span>⏱️ {unit.estimatedReadTime} read</span>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="section notes-content-section">
                <div className="container">
                    <div className="notes-layout">
                        {/* Sidebar - Topics */}
                        <aside className="notes-sidebar">
                            <div className="sidebar-sticky">
                                <h4>In this unit</h4>
                                <ul className="sidebar-nav">
                                    {content.sections.map((section, i) => (
                                        <li key={i}>
                                            <a href={`#section-${i}`}>{section.heading}</a>
                                        </li>
                                    ))}
                                </ul>
                                {content.keyPoints && (
                                    <div className="key-points-box">
                                        <h4>🔑 Key Points</h4>
                                        <ul>
                                            {content.keyPoints.map((point, i) => (
                                                <li key={i}>{point}</li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>
                        </aside>

                        {/* Main Content */}
                        <main className="notes-main-content">
                            {content.sections.map((section, index) => (
                                <div key={index} id={`section-${index}`}>
                                    {renderSection(section, index)}
                                </div>
                            ))}
                        </main>
                    </div>
                </div>
            </section>

            {/* Unit Navigation */}
            <section className="section" style={{ background: 'white' }}>
                <div className="container">
                    <div className="unit-navigation">
                        <div className="unit-nav-item">
                            {prevUnit ? (
                                <Link to={`/notes/${subject.id}/${prevUnit.id}`} className="unit-nav-link prev">
                                    <span className="nav-direction">← Previous Unit</span>
                                    <span className="nav-title">{prevUnit.title}</span>
                                </Link>
                            ) : (
                                <span></span>
                            )}
                        </div>
                        <div className="unit-nav-item">
                            {nextUnit ? (
                                <Link to={`/notes/${subject.id}/${nextUnit.id}`} className="unit-nav-link next">
                                    <span className="nav-direction">Next Unit →</span>
                                    <span className="nav-title">{nextUnit.title}</span>
                                </Link>
                            ) : (
                                <Link to="/quiz/general-paper" className="unit-nav-link next">
                                    <span className="nav-direction">All Done!</span>
                                    <span className="nav-title">Take a Quiz →</span>
                                </Link>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="cta-section">
                <div className="container">
                    <h2>Test Your Understanding</h2>
                    <p>Ready to see how well you understood this unit?</p>
                    <div style={{ display: 'flex', gap: 'var(--space-4)', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <Link to="/quiz/general-paper" className="btn btn-secondary btn-lg">
                            🎯 Take Quiz
                        </Link>
                        <Link to={`/notes/${subject.id}`} className="btn btn-ghost btn-lg">
                            ← Back to {subject.name}
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
};

export default UnitNotes;
