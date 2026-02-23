import { Link } from 'react-router-dom';

/**
 * NPSE Prep Logo Component
 * Use this for consistent branding throughout the site
 * 
 * @param {Object} props
 * @param {number} props.size - Size of the logo height in pixels, default 50
 * @param {boolean} props.showText - Whether to show "NPSE Prep" text (not used with PNG), default false
 * @param {boolean} props.linkToHome - Whether the logo links to home, default true
 * @param {string} props.className - Additional CSS class names
 * @param {boolean} props.useSvg - Whether to use SVG version instead of PNG, default false
 */
const Logo = ({
    size = 50,
    showText = false,
    linkToHome = true,
    className = '',
    useSvg = false
}) => {
    // Calculate width based on height (maintaining aspect ratio of ~1.3:1)
    const width = Math.round(size * 1.3);

    const LogoSVG = () => (
        <svg
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            className="logo-svg"
        >
            <circle cx="20" cy="20" r="18" fill="#0c8ce9" />
            <path
                d="M14 28V15L20 12L26 15V28"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <circle cx="20" cy="20" r="4" fill="white" />
        </svg>
    );

    const LogoPNG = () => (
        <img
            src="/npse_prep_official_logo_png.png"
            alt="NPSE Prep Logo"
            height={size}
            width={width}
            className="logo-img"
        />
    );

    const content = (
        <>
            {useSvg ? <LogoSVG /> : <LogoPNG />}
            {showText && (
                <span className="logo-text">
                    NPSE Prep
                </span>
            )}
        </>
    );

    if (linkToHome) {
        return (
            <Link to="/" className={`logo-component ${className}`}>
                {content}
            </Link>
        );
    }

    return (
        <div className={`logo-component ${className}`}>
            {content}
        </div>
    );
};

export default Logo;
