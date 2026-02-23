import Mascot from './Mascot';

/**
 * Quick Tip Component with Nessi Mascot
 * For displaying tips, hints, and helpful information
 * 
 * @param {Object} props
 * @param {string} props.title - Title of the tip
 * @param {string} props.children - Content of the tip
 * @param {string} props.variant - 'default', 'success', 'warning', 'info'
 * @param {string} props.icon - Optional emoji icon for the title
 * @param {boolean} props.showMascot - Whether to show Nessi, default true
 */
const QuickTip = ({
    title = "Quick Tip!",
    children,
    variant = 'default',
    icon = '💡',
    showMascot = true
}) => {
    return (
        <div className={`quick-tip quick-tip--${variant}`}>
            {showMascot && (
                <Mascot variant="small" animate={true} />
            )}
            <div className="quick-tip-content">
                <h4>
                    <span>{icon}</span>
                    {title}
                </h4>
                <p>{children}</p>
            </div>
        </div>
    );
};

/**
 * Did You Know Component with Nessi Mascot
 * For interesting facts and trivia
 */
export const DidYouKnow = ({ children }) => {
    return (
        <div className="did-you-know">
            <Mascot variant="medium" animate={true} />
            <div className="did-you-know-content">
                <span className="label">Did You Know?</span>
                <p>{children}</p>
            </div>
        </div>
    );
};

/**
 * Callout Box Component with Nessi Mascot
 * For important announcements and highlights
 */
export const CalloutBox = ({ title, children, showMascot = true }) => {
    return (
        <div className="callout-box">
            {showMascot && (
                <Mascot variant="default" animate={true} />
            )}
            <div className="callout-box-content">
                {title && <h3>{title}</h3>}
                {typeof children === 'string' ? <p>{children}</p> : children}
            </div>
        </div>
    );
};

export default QuickTip;
