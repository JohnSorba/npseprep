import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Blog.css';

const MOCK_POSTS = [
    {
        id: '1',
        title: 'The Architecture of Modern Learning Systems',
        slug: 'modern-learning-architecture',
        preview_text: 'An in-depth exploration of how distributed systems and cognitive psychology intersect to create high-performance educational platforms.',
        published_at: '2026-02-01',
        category: 'Research',
        tags: ['IT', 'Education', 'Architecture'],
        image_url: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=800',
        author: 'Dr. Technos',
        isHero: true
    },
    {
        id: '2',
        title: 'Cognitive Load and User Interface Design',
        slug: 'cognitive-load-ui',
        preview_text: 'Minimizing friction in technical documentation through strategic visual hierarchy.',
        published_at: '2026-02-03',
        category: 'Technical',
        tags: ['UX', 'Psychology', 'Design'],
        image_url: 'https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?auto=format&fit=crop&q=80&w=800',
        author: 'Design Guru'
    },
    {
        id: '3',
        title: 'The Philosophy of NPSE Excellence',
        slug: 'philosophy-npse',
        preview_text: 'Beyond rote memorization: cultivating a mindset of inquiry and critical thinking.',
        published_at: '2026-02-04',
        category: 'Philosophy',
        tags: ['Mentorship', 'Strategy'],
        image_url: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&q=80&w=800',
        author: 'Edu Thinker'
    },
    {
        id: '4',
        title: 'PostgreSQL Indexing for High-Performance Apps',
        slug: 'postgres-indexing',
        preview_text: 'B-tree vs GIST: choosing the right index for sub-millisecond response times.',
        published_at: '2026-02-05',
        category: 'IT',
        tags: ['Database', 'PostgreSQL', 'Performance'],
        image_url: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&q=80&w=800',
        author: 'Data Maven'
    },
    {
        id: '5',
        title: 'The Future of Technical Writing',
        slug: 'future-tech-writing',
        preview_text: 'How AI is reshaping the way we document complex systems and communicate technical knowledge.',
        published_at: '2026-02-06',
        category: 'Technical',
        tags: ['AI', 'Writing'],
        image_url: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&q=80&w=800',
        author: 'Modern Scribe'
    }
];

const ArticleCard = ({ post, isHero = false }) => {
    const cardRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.1 }
        );
        if (cardRef.current) observer.observe(cardRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <article ref={cardRef} className={`article-card ${isHero ? 'hero-card' : ''} fade-in ${isVisible ? 'visible' : ''}`}>
            <div className="article-image-wrapper">
                <img src={post.image_url} alt={post.title} className="article-image" loading="lazy" />
            </div>
            <div className="article-content">
                <span className="article-category">{post.category}</span>
                <h3 className="article-title">{post.title}</h3>
                <p className="article-excerpt">{post.preview_text}</p>
                <div className="article-meta">
                    <span>By {post.author} • {new Date(post.published_at).toLocaleDateString()}</span>
                    <Link to={`/blog/${post.slug}`} className="read-more">
                        Read More
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
                    </Link>
                </div>
            </div>
        </article>
    );
};

const SideArticle = ({ post }) => (
    <div className="side-article-card">
        <img src={post.image_url} alt={post.title} className="side-article-image" loading="lazy" />
        <div className="side-article-info">
            <Link to={`/blog/${post.slug}`} style={{ textDecoration: 'none' }}>
                <h4>{post.title}</h4>
            </Link>
            <p>{new Date(post.published_at).toLocaleDateString()}</p>
        </div>
    </div>
);

const Blog = () => {
    const heroPost = MOCK_POSTS.find(p => p.isHero);
    const secondaryPosts = MOCK_POSTS.filter(p => !p.isHero && p.category !== 'Technical');
    const sidebarPosts = MOCK_POSTS.filter(p => p.category === 'Technical' || p.category === 'IT');

    return (
        <>
            {/* Page Hero */}
            <section className="page-hero">
                <div className="container">
                    <p className="platform-section__eyebrow" style={{ color: 'rgba(255,255,255,0.5)' }}>Blog</p>
                    <h1>Research & Insights</h1>
                    <p className="page-hero__subtitle">Deep dives into education, philosophy, and technology</p>
                </div>
            </section>

            <section className="platform-section">
                <main className="blog-container">
                    <section className="hero-feature">
                        {heroPost && <ArticleCard post={heroPost} isHero={true} />}

                        <div className="secondary-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                            {secondaryPosts.map(post => (
                                <ArticleCard key={post.id} post={post} />
                            ))}
                        </div>
                    </section>

                    <aside className="sidebar-feed">
                        <div className="sidebar-section">
                            <h3 className="sidebar-title">Tech & Development</h3>
                            <div className="sidebar-list">
                                {sidebarPosts.map(post => (
                                    <SideArticle key={post.id} post={post} />
                                ))}
                            </div>
                        </div>

                        <div className="sidebar-section" style={{ marginTop: '2rem' }}>
                            <h3 className="sidebar-title">Curriculum Links</h3>
                            <ul style={{ listStyle: 'none', padding: 0 }}>
                                <li style={{ marginBottom: '1rem' }}>
                                    <Link to="/notes" className="themed-subject-card__link">Study Notes →</Link>
                                </li>
                                <li style={{ marginBottom: '1rem' }}>
                                    <Link to="/vocabulary-builder" className="themed-subject-card__link">Vocabulary Builder →</Link>
                                </li>
                                <li style={{ marginBottom: '1rem' }}>
                                    <Link to="/mock-exams" className="themed-subject-card__link">Practice Mock Exams →</Link>
                                </li>
                            </ul>
                        </div>
                    </aside>
                </main>
            </section>
        </>
    );
};

export default Blog;
