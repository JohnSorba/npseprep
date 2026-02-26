import React, { useState, useEffect } from 'react';
import './AngleAnimation.css';

// Helper to determine angle type and colors
const getAngleType = (angle) => {
    if (angle === 0) return { label: "Zero Angle", className: "angle-zero" };
    if (angle > 0 && angle < 90) return { label: "Acute Angle", className: "angle-acute" };
    if (angle === 90) return { label: "Right Angle", className: "angle-right" };
    if (angle > 90 && angle < 180) return { label: "Obtuse Angle", className: "angle-obtuse" };
    if (angle === 180) return { label: "Straight Angle", className: "angle-straight" };
    if (angle > 180 && angle < 360) return { label: "Reflex Angle", className: "angle-reflex" };
    if (angle === 360) return { label: "Full Rotation", className: "angle-full" };
    return { label: "", className: "" };
};

const AngleExplorer = () => {
    const [angle, setAngle] = useState(270);
    const [isPlaying, setIsPlaying] = useState(false);

    // Animation Loop
    useEffect(() => {
        let intervalId;
        if (isPlaying) {
            intervalId = setInterval(() => {
                setAngle(prev => {
                    if (prev >= 360) return 0;
                    return prev + 1;
                });
            }, 20);
        }
        return () => clearInterval(intervalId);
    }, [isPlaying]);

    // Geometry Constants
    const cx = 250; // Center X
    const cy = 250; // Center Y
    const r = 170;  // Radius

    // Calculate tip of the rotating arm
    const radians = (angle * Math.PI) / 180;
    const tipX = cx + r * Math.cos(radians);
    const tipY = cy - r * Math.sin(radians);

    const typeData = getAngleType(angle);
    const isReflex = angle > 180 && angle < 360;
    const convexAngle = 360 - angle;

    return (
        <div className="angle-explorer-container">
            {/* Header */}
            <header className="angle-explorer-header">
                <h2 className="angle-explorer-title">Full Circle & Reflex Angles</h2>
                <p className="angle-explorer-subtitle">0° starts on the Right. Moves Counter-Clockwise.</p>
            </header>

            {/* Main Visual Area */}
            <div className="angle-visual-area">
                <svg viewBox="0 0 500 500" className="angle-main-svg">
                    {/* 1. Faint Background Circle */}
                    <circle cx={cx} cy={cy} r={r} fill="none" className="bg-circle" />

                    {/* 2. Static Straight Line */}
                    <line x1={cx - r} y1={cy} x2={cx + r} y2={cy} className="base-line" />

                    {/* 3. The Main Wedge */}
                    {angle === 360 ? (
                        <circle cx={cx} cy={cy} r={r} className="angle-wedge-full" />
                    ) : (
                        <path
                            d={`
                                M ${cx} ${cy}
                                L ${cx + r} ${cy}
                                A ${r} ${r} 0 ${angle > 180 ? 1 : 0} 0 ${tipX} ${tipY}
                                Z
                            `}
                            className="angle-wedge"
                        />
                    )}

                    {/* 4. Reflex Gap Visualization */}
                    {isReflex && (
                        <g className="reflex-gap">
                            <path
                                d={`
                                    M ${cx} ${cy}
                                    L ${tipX} ${tipY}
                                    A ${r} ${r} 0 ${convexAngle > 180 ? 1 : 0} 1 ${cx + r} ${cy}
                                    Z
                                `}
                                className="reflex-gap-path"
                            />
                            {/* Label for the convex/inner angle */}
                            <text
                                x={cx + (r / 1.8) * Math.cos(radians + (360 - angle) / 2 * Math.PI / 180)}
                                y={cy - (r / 1.8) * Math.sin(radians + (360 - angle) / 2 * Math.PI / 180)}
                                textAnchor="middle"
                                dominantBaseline="middle"
                                className="reflex-angle-label"
                            >
                                {convexAngle}°
                            </text>
                        </g>
                    )}

                    {/* 5. Center Point */}
                    <circle cx={cx} cy={cy} r="6" className="vertex-point" />
                    <text x={cx} y={cy + 25} textAnchor="middle" className="vertex-label">Vertex</text>

                    {/* 6. Compass Labels */}
                    <text x={cx + r + 15} y={cy + 6} textAnchor="start" className="compass-label major">0°</text>
                    <text x={cx - r - 15} y={cy + 6} textAnchor="end" className="compass-label major">180°</text>
                    <text x={cx} y={cy + r + 20} textAnchor="middle" className="compass-label">270°</text>
                    <text x={cx} y={cy - r - 10} textAnchor="middle" className="compass-label">90°</text>
                    <text x={cx + r + 15} y={cy - 10} textAnchor="start" className="compass-label">360°</text>

                    {/* 7. The Rotating Arm */}
                    <line x1={cx} y1={cy} x2={tipX} y2={tipY} className="rotating-arm" />
                    <circle cx={tipX} cy={tipY} r="4" className="arm-tip" />

                    {/* 8. Floating Main Angle Label on the Arc */}
                    {angle > 10 && angle < 350 && (
                        <text
                            x={cx + (r / 1.5) * Math.cos(radians / 2)}
                            y={cy - (r / 1.5) * Math.sin(radians / 2)}
                            textAnchor="middle"
                            dominantBaseline="middle"
                            className="main-angle-label"
                        >
                            {angle}°
                        </text>
                    )}

                    {/* Right Angle Square Indicator */}
                    {angle === 90 && (
                        <rect x={cx} y={cy - 30} width="30" height="30" fill="none" stroke="#4F46E5" strokeWidth="2" />
                    )}
                </svg>

                {/* Overlay Label Type */}
                <div className={`angle-type-overlay ${typeData.className} ${angle !== 0 ? 'bounce' : ''}`}>
                    {typeData.label}
                </div>

                {/* Reflex Info Box */}
                {isReflex && (
                    <div className="reflex-info-box">
                        <h4 className="reflex-info-title">Reflex Angle!</h4>
                        <p className="reflex-info-text">Greater than 180° but less than 360°.</p>
                        <div className="reflex-info-details">
                            Large: {angle}° <br />
                            Small: {convexAngle}°
                        </div>
                    </div>
                )}
            </div>

            {/* Controls Section */}
            <div className="angle-controls-section">
                <div className="slider-wrapper">
                    <span className="slider-limit">0°</span>
                    <div className="slider-container">
                        <input
                            type="range"
                            min="0"
                            max="360"
                            value={angle}
                            onChange={(e) => {
                                setAngle(Number(e.target.value));
                                setIsPlaying(false);
                            }}
                            className="angle-slider"
                        />
                        <div
                            className="slider-progress"
                            style={{ width: `${(angle / 360) * 100}%` }}
                        ></div>
                    </div>
                    <span className="slider-limit">360°</span>
                </div>

                <div className="button-group">
                    <button onClick={() => setAngle(45)} className="preset-btn acute">Acute (45°)</button>
                    <button onClick={() => setAngle(90)} className="preset-btn right">Right (90°)</button>
                    <button onClick={() => setAngle(180)} className="preset-btn straight">Straight (180°)</button>
                    <button onClick={() => setAngle(270)} className="preset-btn reflex">Reflex (270°)</button>
                    <button onClick={() => setAngle(360)} className="preset-btn full">Full (360°)</button>

                    <div className="button-divider"></div>

                    <button
                        onClick={() => setIsPlaying(!isPlaying)}
                        className={`action-btn ${isPlaying ? 'stop' : 'play'}`}
                    >
                        {isPlaying ? '⏸ Stop' : '▶ Animate'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AngleExplorer;