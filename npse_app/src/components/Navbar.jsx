import { useState, useEffect, useRef, useCallback } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

/* ─── Navigation data matching the design-doc IA ─── */
const NAV = [
    {
        label: 'Learn',
        description: 'Notes by subject, explained clearly.',
        links: [
            { label: 'Mathematics', href: '/notes/mathematics' },
            { label: 'English Language', href: '/notes/english-language' },
            { label: 'General Paper', href: '/notes/general-paper' },
            { label: 'Verbal Aptitude', href: '/notes/verbal' },
            { label: 'Quantitative Aptitude', href: '/notes/quantitative' },
        ],
    },
    {
        label: 'Practice',
        description: 'Quizzes and mock exams with feedback.',
        links: [
            { label: 'Topic Quizzes', href: '/quiz' },
            { label: 'Games', href: '/games' },
            { label: 'Mock Exams', href: '/mock-exams' },
        ],
    },
    {
        label: 'Resources',
        description: 'Printable help and study tools.',
        links: [
            { label: 'Study Tips', href: '/study-tips' },
            { label: 'Curriculum', href: '/curriculum-resources' },
            { label: 'Blog', href: '/blog' },
            // { label: 'Store', href: '/store' },
        ],
    },
    {
        label: 'Parents',
        description: 'Support your child with confidence.',
        links: [
            { label: 'Study Tips', href: '/study-tips' },
            { label: 'Donate', href: '/donate' },
        ],
    },
    {
        label: 'About',
        description: 'What we\'re building and why.',
        links: [
            { label: 'About Us', href: '/about' },
            { label: 'Our Mission', href: '/about' },
            { label: 'Contact', href: '/about' },
            { label: 'Blog', href: '/blog' },
        ],
    },
];

const Navbar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [openPanel, setOpenPanel] = useState(null);
    const [mobileAccordion, setMobileAccordion] = useState(null);
    const [isNavbarVisible, setIsNavbarVisible] = useState(true);
    const prevScrollRef = useRef(0);
    const closeTimerRef = useRef(null);
    const location = useLocation();
    const navigate = useNavigate();
    const { user, logout } = useAuth();

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    /* ─── Exam countdown ─── */
    const examDate = new Date('2026-05-02');
    const today = new Date();
    const diffDays = Math.ceil((examDate - today) / (1000 * 60 * 60 * 24));
    const showNotice = location.pathname === '/';

    /* ─── Scroll hide / show ─── */
    useEffect(() => {
        const handleScroll = () => {
            const currentScroll = window.scrollY;
            setIsNavbarVisible(prevScrollRef.current > currentScroll || currentScroll < 50);
            prevScrollRef.current = currentScroll;
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    /* ─── ESC closes panels ─── */
    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === 'Escape') setOpenPanel(null);
        };
        document.addEventListener('keydown', handleEsc);
        return () => document.removeEventListener('keydown', handleEsc);
    }, []);

    /* ─── Close mobile menu on route change ─── */
    useEffect(() => {
        setMobileMenuOpen(false);
        setOpenPanel(null);
    }, [location.pathname]);

    /* ─── Hover intent helpers (80ms delay on leave) ─── */
    const handleMouseEnter = useCallback((label) => {
        clearTimeout(closeTimerRef.current);
        setOpenPanel(label);
    }, []);

    const handleMouseLeave = useCallback(() => {
        closeTimerRef.current = setTimeout(() => setOpenPanel(null), 120);
    }, []);

    return (
        <>
            {/* ── Exam Notice (Home only) ── */}
            {showNotice && (
                <div className="exam-notice">
                    <div className="header-container">
                        <p className="exam-notice__text">
                            <span>📢</span>
                            <strong>{diffDays} days to go</strong> for the NPSE exam! The big day is 2nd May 2026. 🚀
                        </p>
                    </div>
                </div>
            )}

            {/* ── Header ── */}
            <header className={`site-header ${!isNavbarVisible ? 'site-header--hidden' : ''}`}>
                <div className="header-container header-inner">
                    {/* Left – Logo */}
                    <Link to="/" className="header-logo">
                        <img
                            src="/npse_prep_official_logo_png.png"
                            alt="NPSE Prep"
                            className="header-logo__img"
                        />
                    </Link>

                    {/* Centre – Desktop Navigation */}
                    <nav className="header-nav" aria-label="Main navigation">
                        {NAV.map((item) => (
                            <div
                                key={item.label}
                                className="header-nav__item"
                                onMouseEnter={() => handleMouseEnter(item.label)}
                                onMouseLeave={handleMouseLeave}
                            >
                                <button
                                    className={`header-nav__trigger ${openPanel === item.label ? 'header-nav__trigger--open' : ''}`}
                                    onFocus={() => setOpenPanel(item.label)}
                                    aria-haspopup="true"
                                    aria-expanded={openPanel === item.label}
                                >
                                    {item.label}
                                    <svg className="header-nav__chevron" viewBox="0 0 12 8" fill="none">
                                        <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </button>

                                {/* Mega Panel */}
                                <div
                                    className={`mega-panel ${openPanel === item.label ? 'mega-panel--open' : ''}`}
                                    role="menu"
                                >
                                    <div className="mega-panel__inner">
                                        <div className="mega-panel__info">
                                            <span className="mega-panel__title">{item.label}</span>
                                            <p className="mega-panel__desc">{item.description}</p>
                                        </div>
                                        <ul className="mega-panel__links">
                                            {item.links.map((l) => (
                                                <li key={l.href + l.label}>
                                                    <Link
                                                        to={l.href}
                                                        className="mega-panel__link"
                                                        role="menuitem"
                                                    >
                                                        {l.label}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </nav>

                    {/* Right – Actions */}
                    <div className="header-actions">
                        {user ? (
                            <>
                                <Link to="/dashboard" className="header-btn header-btn--secondary">
                                    Dashboard
                                </Link>
                                <button onClick={handleLogout} className="header-btn header-btn--secondary">
                                    Logout
                                </button>
                            </>
                        ) : (
                            <Link to="/login" className="header-btn header-btn--secondary">
                                Sign in
                            </Link>
                        )}
                        <Link to="/quiz" className="header-btn header-btn--primary">
                            Start practising
                        </Link>
                    </div>

                    {/* Mobile – Hamburger */}
                    <button
                        className="header-hamburger"
                        onClick={() => setMobileMenuOpen(true)}
                        aria-label="Open menu"
                    >
                        <span /><span /><span />
                    </button>
                </div>
            </header>

            {/* ── Mobile Drawer ── */}
            <div
                className={`mobile-drawer-overlay ${mobileMenuOpen ? 'mobile-drawer-overlay--open' : ''}`}
                onClick={() => setMobileMenuOpen(false)}
            />
            <aside className={`mobile-drawer ${mobileMenuOpen ? 'mobile-drawer--open' : ''}`}>
                <div className="mobile-drawer__header">
                    <Link to="/" className="header-logo" onClick={() => setMobileMenuOpen(false)}>
                        <img src="/npse_prep_official_logo_png.png" alt="NPSE Prep" className="header-logo__img header-logo__img--sm" />
                    </Link>
                    <button className="mobile-drawer__close" onClick={() => setMobileMenuOpen(false)} aria-label="Close menu">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M15 5L5 15M5 5l10 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg>
                    </button>
                </div>

                <nav className="mobile-drawer__nav">
                    <Link to="/" className="mobile-drawer__link" onClick={() => setMobileMenuOpen(false)}>Home</Link>
                    {NAV.map((group) => (
                        <div key={group.label} className="mobile-drawer__group">
                            <button
                                className="mobile-drawer__accordion-btn"
                                onClick={() => setMobileAccordion(mobileAccordion === group.label ? null : group.label)}
                                aria-expanded={mobileAccordion === group.label}
                            >
                                {group.label}
                                <svg className={`mobile-drawer__chevron ${mobileAccordion === group.label ? 'mobile-drawer__chevron--open' : ''}`} viewBox="0 0 12 8" fill="none">
                                    <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                            {mobileAccordion === group.label && (
                                <div className="mobile-drawer__sub">
                                    {group.links.map((l) => (
                                        <Link key={l.href + l.label} to={l.href} className="mobile-drawer__sub-link" onClick={() => setMobileMenuOpen(false)}>
                                            {l.label}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </nav>

                {/* Mobile Auth */}
                <div className="mobile-drawer__footer">
                    {user ? (
                        <>
                            <Link to="/dashboard" className="header-btn header-btn--secondary header-btn--full" onClick={() => setMobileMenuOpen(false)}>Dashboard</Link>
                            <button onClick={() => { handleLogout(); setMobileMenuOpen(false); }} className="header-btn header-btn--secondary header-btn--full" style={{ color: 'var(--color-error)' }}>Logout</button>
                        </>
                    ) : (
                        <>
                            <Link to="/login" className="header-btn header-btn--secondary header-btn--full" onClick={() => setMobileMenuOpen(false)}>Sign in</Link>
                            <Link to="/quiz" className="header-btn header-btn--primary header-btn--full" onClick={() => setMobileMenuOpen(false)}>Start practising</Link>
                        </>
                    )}
                </div>
            </aside>
        </>
    );
};

export default Navbar;
