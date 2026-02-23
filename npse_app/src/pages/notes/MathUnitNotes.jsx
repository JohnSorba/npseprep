import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getMathSubjectById, getMathUnitById } from '../../data/mathNotes';
import { getMathNotesContent } from '../../data/mathNotesContent';
import { MathText } from '../../components/Math';
import AngleExplorer from '../../components/AngleAnimation';
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
    table: '📊',
    diagram: '🎨',
    interactive: '🎮',
    default: '📌'
};

const MathUnitNotes = () => {
    const { subjectId, unitId } = useParams();
    const subject = getMathSubjectById(subjectId);
    const unit = getMathUnitById(subjectId, unitId);
    const content = getMathNotesContent(unitId);
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
                    <Link to="/notes/mathematics" className="btn btn-primary">Back to Mathematics</Link>
                </div>
            </section>
        );
    }

    const renderSection = (section, index) => {
        switch (section.type) {
            case 'text':
                return (
                    <div key={index} className="notes-section notes-text">
                        <h3>{section.heading}</h3>
                        <p><MathText>{section.content}</MathText></p>
                    </div>
                );
            case 'definition':
                return (
                    <div key={index} className="notes-section notes-definitions">
                        <h3>{section.heading}</h3>
                        <div className="definition-cards">
                            {section.definitions.map((def, i) => (
                                <div key={i} className="definition-card">
                                    <span className="definition-term">
                                        <MathText>{def.term}</MathText>
                                    </span>
                                    <span className="definition-text">
                                        <MathText>{def.definition}</MathText>
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                );
            case 'numbered-list':
                return (
                    <div key={index} className="notes-section notes-numbered-list">
                        <h3>{section.heading}</h3>
                        <ol className="styled-ol">
                            {section.items.map((item, i) => (
                                <li key={i}><MathText>{item}</MathText></li>
                            ))}
                        </ol>
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
                    </div>
                );
            case 'steps':
                return (
                    <div key={index} className="notes-section notes-steps">
                        <h3>{section.heading}</h3>
                        <div className="steps-list">
                            {section.items.map((item, i) => (
                                <div key={i} className="step-item">
                                    <div className="step-number" style={{ background: subject.color }}>{item.step}</div>
                                    <div className="step-content"><MathText>{item.description}</MathText></div>
                                </div>
                            ))}
                        </div>
                    </div>
                );
            case 'list':
                return (
                    <div key={index} className="notes-section notes-list">
                        <h3>{section.heading}</h3>
                        <div className="styled-list">
                            {section.items.map((item, i) => (
                                <div key={i} className="list-item-card">
                                    <strong>{item.title}</strong>
                                    <p><MathText>{item.description}</MathText></p>
                                </div>
                            ))}
                        </div>
                    </div>
                );
            case 'cards':
                return (
                    <div key={index} className="notes-section notes-cards">
                        <h3>{section.heading}</h3>
                        <div className="info-cards-grid">
                            {section.items.map((item, i) => (
                                <div key={i} className="info-card" style={{ borderTopColor: item.color || subject.color }}>
                                    {item.icon && <span className="info-card-icon">{item.icon}</span>}
                                    <h4>{item.title}</h4>
                                    {item.examples && <p className="info-card-examples"><MathText>{item.examples}</MathText></p>}
                                    {item.description && <p><MathText>{item.description}</MathText></p>}
                                </div>
                            ))}
                        </div>
                    </div>
                );
            case 'diagram':
                return (
                    <div key={index} className="notes-section notes-diagram">
                        <h3>{section.heading}</h3>
                        {renderDiagram(section.diagramType, section.data)}
                    </div>
                );
            case 'interactive':
                return (
                    <div key={index} className="notes-section notes-interactive">
                        <h3>{section.heading}</h3>
                        {section.component === 'angle-explorer' && <AngleExplorer />}
                    </div>
                );
            default:
                return null;
        }
    };

    // Render diagram based on type
    const renderDiagram = (type, data) => {
        switch (type) {
            case 'place-value':
                return (
                    <div className="diagram-place-value">
                        <div className="diagram-title">{data.title}</div>
                        <div className="place-value-boxes">
                            {data.positions.map((pos, i) => (
                                <div key={i} className="place-value-box" style={{ backgroundColor: pos.color }}>
                                    <div className="pv-digit">{pos.value}</div>
                                    <div className="pv-label">{pos.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                );
            case 'number-line':
                return (
                    <div className="diagram-number-line">
                        <div className="diagram-title">{data.title}</div>
                        <div className="number-line">
                            <div className="line-track"></div>
                            {data.points.map((point, i) => {
                                const position = ((point.value - data.min) / (data.max - data.min)) * 100;
                                return (
                                    <div key={i} className="line-point" style={{ left: `${position}%` }}>
                                        <div className="point-marker"></div>
                                        <div className="point-label">{point.label}</div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                );
            case 'number-grid':
                return (
                    <div className="diagram-number-grid">
                        <div className="diagram-title">{data.title}</div>
                        <div className="number-grid" style={{ gridTemplateColumns: `repeat(${data.gridCols}, 1fr)` }}>
                            {data.numbers.map((num, i) => (
                                <div key={i} className="grid-number" style={{ backgroundColor: data.highlightColor }}>{num}</div>
                            ))}
                        </div>
                    </div>
                );
            case 'sieve':
                return (
                    <div className="diagram-sieve">
                        <div className="diagram-title">{data.title}</div>
                        <div className="sieve-grid">
                            {Array.from({ length: data.max }, (_, i) => i + 1).map(num => (
                                <div key={num} className={`sieve-number ${data.primes.includes(num) ? 'is-prime' : ''} ${num === 1 ? 'is-one' : ''}`}>
                                    {num}
                                </div>
                            ))}
                        </div>
                        <div className="sieve-legend">
                            <span className="legend-item"><span className="legend-box prime"></span> Prime</span>
                            <span className="legend-item"><span className="legend-box not-prime"></span> Not Prime</span>
                        </div>
                    </div>
                );
            case 'fraction-circle':
                return (
                    <div className="diagram-fraction-circle">
                        <div className="diagram-title">{data.title}</div>
                        <svg viewBox="0 0 100 100" className="fraction-svg">
                            {Array.from({ length: data.denominator }, (_, i) => {
                                const startAngle = (i * 360 / data.denominator) - 90;
                                const endAngle = ((i + 1) * 360 / data.denominator) - 90;
                                const largeArc = (360 / data.denominator) > 180 ? 1 : 0;
                                const x1 = 50 + 40 * Math.cos(startAngle * Math.PI / 180);
                                const y1 = 50 + 40 * Math.sin(startAngle * Math.PI / 180);
                                const x2 = 50 + 40 * Math.cos(endAngle * Math.PI / 180);
                                const y2 = 50 + 40 * Math.sin(endAngle * Math.PI / 180);
                                return (
                                    <path
                                        key={i}
                                        d={`M 50 50 L ${x1} ${y1} A 40 40 0 ${largeArc} 1 ${x2} ${y2} Z`}
                                        fill={i < data.numerator ? data.shadedColor : data.unshadedColor}
                                        stroke="white"
                                        strokeWidth="1"
                                    />
                                );
                            })}
                        </svg>
                        <div className="fraction-label"><MathText>{`$\\frac{${data.numerator}}{${data.denominator}}$`}</MathText></div>
                    </div>
                );
            case 'rectangle':
                return (
                    <div className="diagram-shape">
                        <div className="diagram-title">{data.title}</div>
                        <div className="shape-container">
                            <svg viewBox="0 0 160 120" className="shape-svg">
                                <rect x="20" y="20" width="120" height="80" fill="#e0f2fe" stroke="#0ea5e9" strokeWidth="2" />
                                <text x="80" y="65" textAnchor="middle" className="shape-label">A = {data.length} × {data.width}</text>
                                <text x="80" y="12" textAnchor="middle" className="dimension-label">{data.length} cm</text>
                                <text x="148" y="65" textAnchor="start" className="dimension-label">{data.width} cm</text>
                            </svg>
                            {data.showArea && <div className="shape-info">Area = {data.length * data.width} cm²</div>}
                            {data.showPerimeter && <div className="shape-info">Perimeter = {2 * (data.length + data.width)} cm</div>}
                        </div>
                    </div>
                );
            case 'triangle-area':
                return (
                    <div className="diagram-shape">
                        <div className="diagram-title">{data.title}</div>
                        <div className="shape-container">
                            <svg viewBox="0 0 140 120" className="shape-svg">
                                <polygon points="70,10 10,100 130,100" fill="#dcfce7" stroke="#22c55e" strokeWidth="2" />
                                <line x1="70" y1="10" x2="70" y2="100" stroke="#22c55e" strokeWidth="1" strokeDasharray="4" />
                                <text x="75" y="60" className="dimension-label">h={data.height}cm</text>
                                <text x="70" y="115" textAnchor="middle" className="dimension-label">b={data.base}cm</text>
                            </svg>
                            <div className="shape-info">Area = ½ × {data.base} × {data.height} = {data.area} cm²</div>
                        </div>
                    </div>
                );
            case 'decimal-shift':
                return (
                    <div className="diagram-decimal-shift">
                        <div className="diagram-title">{data.title}</div>
                        <div className="shift-examples">
                            {data.examples.map((ex, i) => (
                                <div key={i} className="shift-row">
                                    <span className="shift-original">{ex.original}</span>
                                    <span className="shift-operation">{ex.operation || ex.multiplier}</span>
                                    <span className="shift-arrow">→</span>
                                    <span className="shift-result">{ex.result}</span>
                                </div>
                            ))}
                        </div>
                        <div className="shift-direction">
                            {data.direction === 'right' ? '→ Decimal moves RIGHT' : '← Decimal moves LEFT'}
                        </div>
                    </div>
                );
            case 'polygon-gallery':
                return (
                    <div className="diagram-polygon-gallery">
                        <div className="diagram-title">{data.title}</div>
                        <div className="polygon-grid">
                            {data.polygons.map((poly, i) => (
                                <div key={i} className="polygon-card" style={{ borderColor: poly.color }}>
                                    <div className="polygon-shape" style={{ backgroundColor: poly.color + '20' }}>
                                        <span className="polygon-sides">{poly.sides}</span>
                                    </div>
                                    <div className="polygon-name">{poly.name}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                );
            case 'angle-types':
                return (
                    <div className="diagram-angle-types">
                        <div className="diagram-title">{data.title}</div>
                        <div className="angles-grid">
                            {data.angles.map((angle, i) => (
                                <div key={i} className="angle-card" style={{ borderColor: angle.color }}>
                                    <svg viewBox="0 0 60 60" className="angle-svg">
                                        <line x1="30" y1="50" x2="55" y2="50" stroke={angle.color} strokeWidth="2" />
                                        <line x1="30" y1="50" x2={30 + 25 * Math.cos((90 - angle.example) * Math.PI / 180)} y2={50 - 25 * Math.sin((90 - angle.example) * Math.PI / 180)} stroke={angle.color} strokeWidth="2" />
                                        <path d={`M 40 50 A 10 10 0 0 0 ${30 + 10 * Math.cos((90 - angle.example) * Math.PI / 180)} ${50 - 10 * Math.sin((90 - angle.example) * Math.PI / 180)}`} fill="none" stroke={angle.color} strokeWidth="1.5" />
                                    </svg>
                                    <div className="angle-name">{angle.type}</div>
                                    <div className="angle-range">{angle.range}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                );
            case 'ratio-blocks':
                return (
                    <div className="diagram-ratio-blocks">
                        <div className="diagram-title">{data.title}</div>
                        <div className="ratio-visual">
                            {data.parts.map((part, pIdx) => (
                                Array.from({ length: part.count }, (_, i) => (
                                    <div key={`${pIdx}-${i}`} className="ratio-block" style={{ backgroundColor: part.color }}></div>
                                ))
                            ))}
                        </div>
                    </div>
                );
            case 'percentage-bar':
                return (
                    <div className="diagram-percentage-bar">
                        <div className="diagram-title">{data.title}</div>
                        <div className="percentage-track">
                            <div className="percentage-fill" style={{ width: `${data.percentage}%`, backgroundColor: data.shadedColor }}></div>
                        </div>
                        <div className="percentage-labels">
                            <span>0%</span>
                            <span>{data.percentage}%</span>
                            <span>100%</span>
                        </div>
                    </div>
                );
            case 'cuboid':
                return (
                    <div className="diagram-shape">
                        <div className="diagram-title">{data.title}</div>
                        <div className="shape-container">
                            <svg viewBox="0 0 160 140" className="shape-svg cuboid-svg">
                                {/* Back face */}
                                <polygon points="40,20 120,20 120,80 40,80" fill="#bfdbfe" stroke="#3b82f6" strokeWidth="1" />
                                {/* Side face */}
                                <polygon points="120,20 140,40 140,100 120,80" fill="#93c5fd" stroke="#3b82f6" strokeWidth="1" />
                                {/* Bottom face */}
                                <polygon points="40,80 120,80 140,100 60,100" fill="#60a5fa" stroke="#3b82f6" strokeWidth="1" />
                                {/* Labels */}
                                <text x="80" y="55" textAnchor="middle" className="dimension-label">{data.length}×{data.width}</text>
                                <text x="145" y="70" className="dimension-label">h={data.height}</text>
                            </svg>
                            {data.showFormula && <div className="shape-info">V = {data.length} × {data.width} × {data.height} = {data.length * data.width * data.height} cm³</div>}
                        </div>
                    </div>
                );
            case 'circle-parts':
                return (
                    <div className="diagram-circle-parts">
                        <div className="diagram-title">{data.title}</div>
                        <div className="circle-diagram">
                            <svg viewBox="0 0 200 200" className="circle-svg">
                                <circle cx="100" cy="100" r="80" fill="#e0f2fe" stroke="#0ea5e9" strokeWidth="2" />
                                <circle cx="100" cy="100" r="3" fill="#0ea5e9" />
                                <line x1="100" y1="100" x2="180" y2="100" stroke="#ef4444" strokeWidth="2" />
                                <line x1="20" y1="100" x2="180" y2="100" stroke="#22c55e" strokeWidth="2" strokeDasharray="5" />
                                <text x="140" y="90" className="circle-label" fill="#ef4444">radius</text>
                                <text x="100" y="130" textAnchor="middle" className="circle-label" fill="#22c55e">diameter</text>
                            </svg>
                            <div className="circle-parts-list">
                                {data.parts.map((part, i) => (
                                    <div key={i} className="circle-part-item">
                                        <strong>{part.name}:</strong> {part.description}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                );
            case 'pie-chart':
                return (
                    <div className="diagram-pie-chart">
                        <div className="diagram-title">{data.title}</div>
                        <div className="pie-container">
                            <svg viewBox="0 0 200 200" className="pie-svg">
                                {data.slices.reduce((acc, slice, i) => {
                                    const startAngle = acc.angle - 90;
                                    const sliceAngle = (slice.value / data.total) * 360;
                                    const endAngle = startAngle + sliceAngle;
                                    const largeArc = sliceAngle > 180 ? 1 : 0;
                                    const x1 = 100 + 80 * Math.cos(startAngle * Math.PI / 180);
                                    const y1 = 100 + 80 * Math.sin(startAngle * Math.PI / 180);
                                    const x2 = 100 + 80 * Math.cos(endAngle * Math.PI / 180);
                                    const y2 = 100 + 80 * Math.sin(endAngle * Math.PI / 180);
                                    acc.paths.push(
                                        <path
                                            key={i}
                                            d={`M 100 100 L ${x1} ${y1} A 80 80 0 ${largeArc} 1 ${x2} ${y2} Z`}
                                            fill={slice.color}
                                            stroke="white"
                                            strokeWidth="1"
                                        />
                                    );
                                    acc.angle = acc.angle + sliceAngle;
                                    return acc;
                                }, { angle: 0, paths: [] }).paths}
                            </svg>
                            <div className="pie-legend">
                                {data.slices.map((slice, i) => (
                                    <div key={i} className="legend-item">
                                        <span className="legend-color" style={{ backgroundColor: slice.color }}></span>
                                        {slice.label}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                );
            case 'bar-chart':
                return (
                    <div className="diagram-bar-chart">
                        <div className="diagram-title">{data.title}</div>
                        <div className="bar-chart-container">
                            <div className="bar-chart-y-label">{data.yLabel}</div>
                            <div className="bar-chart-bars">
                                {data.data.map((item, i) => (
                                    <div key={i} className="bar-wrapper">
                                        <div className="bar" style={{ height: `${(item.value / Math.max(...data.data.map(d => d.value))) * 100}%`, backgroundColor: subject.color }}>
                                            <span className="bar-value">{item.value}</span>
                                        </div>
                                        <span className="bar-label">{item.label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                );
            case 'formula-box':
                return (
                    <div className="diagram-formula-box">
                        <div className="diagram-title">{data.title}</div>
                        <div className="formula-display">
                            <MathText>{`$$${data.formula}$$`}</MathText>
                        </div>
                        <div className="formula-variables">
                            {data.variables.map((v, i) => (
                                <div key={i} className="variable-item">
                                    <strong>{v.symbol}</strong> = {v.meaning}
                                </div>
                            ))}
                        </div>
                    </div>
                );
            case 'bodmas-steps':
                return (
                    <div className="diagram-bodmas">
                        <div className="diagram-title">{data.title}</div>
                        <div className="bodmas-grid">
                            {data.steps.map((step, i) => (
                                <div key={i} className="bodmas-card" style={{ backgroundColor: step.color + '20', borderColor: step.color }}>
                                    <span className="bodmas-letter" style={{ color: step.color }}>{step.letter}</span>
                                    <span className="bodmas-word">{step.word}</span>
                                    <span className="bodmas-example">{step.example}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                );
            case 'roman-numeral-chart':
                return (
                    <div className="diagram-roman-chart">
                        <div className="diagram-title">{data.title}</div>
                        <div className="roman-grid">
                            {data.numerals.map((item, i) => (
                                <div key={i} className="roman-card" style={{ backgroundColor: item.color + '20', borderColor: item.color }}>
                                    <span className="roman-symbol" style={{ color: item.color }}>{item.roman}</span>
                                    <span className="roman-value">{item.value}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                );
            case 'pattern-types':
                return (
                    <div className="diagram-patterns">
                        <div className="diagram-title">{data.title}</div>
                        <div className="patterns-grid">
                            {data.patterns.map((pattern, i) => (
                                <div key={i} className="pattern-card" style={{ borderColor: pattern.color }}>
                                    <h4 style={{ color: pattern.color }}>{pattern.type}</h4>
                                    <p className="pattern-rule">{pattern.rule}</p>
                                    <p className="pattern-example">{pattern.example}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                );
            case 'square-numbers':
                return (
                    <div className="diagram-square-numbers">
                        <div className="diagram-title">{data.title}</div>
                        <div className="squares-grid">
                            {data.squares.map((item, i) => (
                                <div key={i} className="square-card">
                                    <span className="square-n">{item.n}²</span>
                                    <span className="square-equals">=</span>
                                    <span className="square-result">{item.square}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                );
            case 'triangle-types':
                return (
                    <div className="diagram-triangle-types">
                        <div className="diagram-title">{data.title}</div>
                        <div className="triangle-grid">
                            {data.triangles.map((tri, i) => (
                                <div key={i} className="triangle-card" style={{ borderColor: tri.color }}>
                                    <div className="triangle-icon" style={{ borderBottomColor: tri.color }}>
                                        {tri.name === 'Equilateral' && <svg viewBox="0 0 60 52"><polygon points="30,2 58,50 2,50" fill={tri.color + '30'} stroke={tri.color} strokeWidth="2" /></svg>}
                                        {tri.name === 'Isosceles' && <svg viewBox="0 0 60 52"><polygon points="30,2 55,50 5,50" fill={tri.color + '30'} stroke={tri.color} strokeWidth="2" /></svg>}
                                        {tri.name === 'Scalene' && <svg viewBox="0 0 60 52"><polygon points="20,2 60,50 2,50" fill={tri.color + '30'} stroke={tri.color} strokeWidth="2" /></svg>}
                                    </div>
                                    <h4>{tri.name}</h4>
                                    <p>{tri.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                );
            case 'quadrilateral-gallery':
                return (
                    <div className="diagram-quad-gallery">
                        <div className="diagram-title">{data.title}</div>
                        <div className="quad-grid">
                            {data.shapes.map((shape, i) => (
                                <div key={i} className="quad-card" style={{ borderColor: shape.color }}>
                                    <div className="quad-shape" style={{ backgroundColor: shape.color + '20' }}>
                                        {shape.name === 'Square' && <svg viewBox="0 0 50 50"><rect x="5" y="5" width="40" height="40" fill="none" stroke={shape.color} strokeWidth="2" /></svg>}
                                        {shape.name === 'Rectangle' && <svg viewBox="0 0 60 40"><rect x="5" y="5" width="50" height="30" fill="none" stroke={shape.color} strokeWidth="2" /></svg>}
                                        {shape.name === 'Parallelogram' && <svg viewBox="0 0 60 40"><polygon points="15,5 55,5 45,35 5,35" fill="none" stroke={shape.color} strokeWidth="2" /></svg>}
                                        {shape.name === 'Rhombus' && <svg viewBox="0 0 50 50"><polygon points="25,5 45,25 25,45 5,25" fill="none" stroke={shape.color} strokeWidth="2" /></svg>}
                                        {shape.name === 'Trapezium' && <svg viewBox="0 0 60 40"><polygon points="15,5 45,5 55,35 5,35" fill="none" stroke={shape.color} strokeWidth="2" /></svg>}
                                        {shape.name === 'Kite' && <svg viewBox="0 0 50 60"><polygon points="25,5 45,25 25,55 5,25" fill="none" stroke={shape.color} strokeWidth="2" /></svg>}
                                    </div>
                                    <h4>{shape.name}</h4>
                                    <p>{shape.properties}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                );
            case 'line-types':
                return (
                    <div className="diagram-line-types">
                        <div className="diagram-title">{data.title}</div>
                        <div className="line-types-grid">
                            {data.types.map((lineType, i) => (
                                <div key={i} className="line-type-card">
                                    <svg viewBox="0 0 80 60" className="line-svg">
                                        {lineType.name === 'Parallel' && (
                                            <>
                                                <line x1="10" y1="20" x2="70" y2="20" stroke="#3b82f6" strokeWidth="2" />
                                                <line x1="10" y1="40" x2="70" y2="40" stroke="#3b82f6" strokeWidth="2" />
                                            </>
                                        )}
                                        {lineType.name === 'Perpendicular' && (
                                            <>
                                                <line x1="10" y1="50" x2="70" y2="50" stroke="#22c55e" strokeWidth="2" />
                                                <line x1="40" y1="10" x2="40" y2="50" stroke="#22c55e" strokeWidth="2" />
                                                <rect x="40" y="40" width="10" height="10" fill="none" stroke="#22c55e" strokeWidth="1" />
                                            </>
                                        )}
                                        {lineType.name === 'Intersecting' && (
                                            <>
                                                <line x1="10" y1="50" x2="70" y2="10" stroke="#f97316" strokeWidth="2" />
                                                <line x1="10" y1="10" x2="70" y2="50" stroke="#f97316" strokeWidth="2" />
                                            </>
                                        )}
                                    </svg>
                                    <h4>{lineType.name}</h4>
                                    <p>{lineType.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                );
            default:
                return <div className="diagram-placeholder">Diagram: {type}</div>;
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
                        Try our interactive flashcards for {subject.name}.
                    </div>
                    <Link to="/games/rapid-recall" className="sidebar-cta-btn">
                        Practice Now
                    </Link>
                </div>
            </aside>

            {/* Main Content */}
            <main className="notes-content-main">
                {/* Breadcrumb */}
                <nav className="notes-breadcrumb">
                    <Link to="/">Home</Link>
                    <span>›</span>
                    <Link to="/notes/mathematics">Mathematics</Link>
                    <span>›</span>
                    <Link to={`/notes/mathematics/${subject.id}`}>{subject.name}</Link>
                    <span>›</span>
                    <span className="active">{unit.title}</span>
                </nav>

                {/* Chapter Tag & Title */}
                <div className="chapter-tag">📐 Unit {unit.unitNumber}</div>
                <h1 className="content-title">{unit.title}</h1>
                <p className="content-subtitle">
                    Estimated reading time: {unit.estimatedReadTime}
                </p>

                {/* Content Sections */}
                {content ? (
                    content.sections.map((section, index) => (
                        <div key={index} id={`section-${index}`} className="content-section">
                            <h2 className="content-section-title">{section.heading}</h2>
                            {renderSection(section, index)}
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
                    <Link to="/quiz/mathematics" className="quiz-cta-btn">
                        Take Topic Quiz
                        <ArrowRightIcon />
                    </Link>
                </div>

                {/* Bottom Navigation */}
                <nav className="notes-bottom-nav">
                    {prevUnit ? (
                        <Link to={`/notes/mathematics/${subject.id}/${prevUnit.id}`} className="nav-link-prev">
                            <ArrowLeftIcon />
                            Previous Topic
                        </Link>
                    ) : (
                        <span></span>
                    )}
                    {nextUnit ? (
                        <Link to={`/notes/mathematics/${subject.id}/${nextUnit.id}`} className="nav-link-next">
                            Next Topic
                            <ArrowRightIcon />
                        </Link>
                    ) : (
                        <Link to="/quiz/mathematics" className="nav-link-next">
                            Take Quiz
                            <ArrowRightIcon />
                        </Link>
                    )}
                </nav>
            </main>
        </div>
    );
};

export default MathUnitNotes;
