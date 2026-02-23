/**
 * Nessi Mascot Component
 * The official NPSE Prep mascot - a friendly compass character
 * 
 * @param {Object} props
 * @param {number} props.size - Size of the mascot (height in pixels), default 100
 * @param {string} props.position - Position type: 'inline', 'float-left', 'float-right', 'absolute'
 * @param {Object} props.style - Additional inline styles
 * @param {boolean} props.animate - Whether to apply bounce animation, default true
 * @param {string} props.className - Additional CSS class names
 * @param {string} props.speech - Optional speech bubble text
 * @param {string} props.variant - 'default', 'small', 'tiny' for preset sizes
 */
const Mascot = ({
    size,
    position = 'inline',
    style = {},
    animate = true,
    className = '',
    speech = '',
    variant = 'default'
}) => {
    // Preset sizes based on variant
    const sizeMap = {
        tiny: 40,
        small: 60,
        default: 100,
        medium: 120,
        large: 150
    };

    const finalSize = size || sizeMap[variant] || sizeMap.default;

    // Position classes
    const positionClass = position !== 'inline' ? `mascot--${position}` : '';
    const animateClass = animate ? 'mascot--animated' : '';

    return (
        <div
            className={`mascot-wrapper ${positionClass} ${animateClass} ${className}`}
            style={style}
        >
            <img
                src="/nessi_mascot.png"
                alt="Nessi the NPSE Prep Mascot"
                className="mascot-image"
                style={{ height: `${finalSize}px`, width: 'auto' }}
            />
            {speech && (
                <div className="mascot-speech">
                    <span>{speech}</span>
                </div>
            )}
        </div>
    );
};

export default Mascot;
