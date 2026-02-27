import { Link } from 'react-router-dom';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="site-footer">
            <div className="container">
                <div className="site-footer__grid">
                    {/* Brand */}
                    <div className="site-footer__brand">
                        <Link to="/" className="site-footer__logo">
                            <img src="/npse_prep_official_logo_png.png" alt="NPSE Prep" height="48" width="62" />
                        </Link>
                        <p className="site-footer__tagline">
                            Structured preparation for Sierra Leone's National Primary School Examination.
                        </p>
                    </div>

                    {/* Subjects */}
                    <div className="site-footer__col">
                        <h4>Subjects</h4>
                        <ul>
                            <li><Link to="/notes/mathematics">Mathematics</Link></li>
                            <li><Link to="/notes/english-language">English Language</Link></li>
                            <li><Link to="/notes/general-paper">General Paper</Link></li>
                            <li><Link to="/notes/quantitative">Quantitative Aptitude</Link></li>
                            <li><Link to="/notes/verbal">Verbal Aptitude</Link></li>
                        </ul>
                    </div>

                    {/* Resources */}
                    <div className="site-footer__col">
                        <h4>Resources</h4>
                        <ul>
                            <li><Link to="/quiz">Practice Quizzes</Link></li>
                            <li><Link to="/mock-exams">Mock Exams</Link></li>
                            <li><Link to="/games">Games</Link></li>
                            <li><Link to="/study-tips">Study Tips</Link></li>
                            {/* <li><Link to="/curriculum-resources">Curriculum</Link></li> */}
                        </ul>
                    </div>

                    {/* About */}
                    <div className="site-footer__col">
                        <h4>About</h4>
                        <ul>
                            <li><Link to="/about">About Us</Link></li>
                            {/* <li><Link to="/blog">Blog</Link></li> */}
                            <li><Link to="/donate">Donate</Link></li>
                            {/* <li><Link to="/store">Store</Link></li> */}
                            {/* <li><Link to="/about">Contact</Link></li> */}
                        </ul>
                    </div>
                </div>

                {/* Bottom */}
                <div className="site-footer__bottom">
                    <div className="site-footer__legal">
                        <p>© {currentYear} NPSE Prep. All rights reserved.</p>
                        <p>Aligned with the National NPSE Curriculum</p>
                    </div>
                    <div className="site-footer__status">
                        <span className="site-footer__status-dot" />
                        <span className="site-footer__status-text">Platform Active</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
