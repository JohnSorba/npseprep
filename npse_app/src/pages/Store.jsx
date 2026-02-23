/**
 * Store Page — Product Catalogue
 * TEP Section 9 — Digital content products for purchase.
 */

import { useState, useEffect } from 'react';
import { fetchProducts, createPurchase } from '../services/paymentApi';

const PRODUCT_TYPE_LABELS = {
    note_pack: 'Notes Pack',
    topic_pack: 'Topic Pack',
    mock_exam: 'Mock Exam',
    subscription: 'Subscription',
};

const PRODUCT_TYPE_ICONS = {
    note_pack: '📚',
    topic_pack: '📖',
    mock_exam: '📝',
    subscription: '⭐',
};

export default function Store() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [purchasing, setPurchasing] = useState(null);
    const [error, setError] = useState('');
    const [filter, setFilter] = useState('all');

    useEffect(() => {
        loadProducts();
    }, []);

    const loadProducts = async () => {
        try {
            const data = await fetchProducts();
            setProducts(data);
        } catch (err) {
            setError('Failed to load products. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    const handlePurchase = async (productId) => {
        const token = localStorage.getItem('token');
        if (!token) {
            window.location.href = '/login?redirect=/store';
            return;
        }

        setPurchasing(productId);
        setError('');

        try {
            const result = await createPurchase(productId);
            if (result.checkout_url) {
                window.location.href = result.checkout_url;
            }
        } catch (err) {
            setError(err.message || 'Purchase failed. Please try again.');
        } finally {
            setPurchasing(null);
        }
    };

    const filteredProducts = filter === 'all'
        ? products
        : products.filter(p => p.product_type === filter);

    if (loading) {
        return (
            <>
                <section className="page-hero">
                    <div className="container">
                        <h1>NPSE Prep Store</h1>
                    </div>
                </section>
                <section className="platform-section" style={{ textAlign: 'center' }}>
                    <div className="container">
                        <p>Loading products...</p>
                    </div>
                </section>
            </>
        );
    }

    return (
        <>
            {/* Page Hero */}
            <section className="page-hero">
                <div className="container">
                    <p className="platform-section__eyebrow" style={{ color: 'rgba(255,255,255,0.5)' }}>Premium Content</p>
                    <h1>NPSE Prep Store</h1>
                    <p className="page-hero__subtitle">
                        Unlock premium study materials, full mock exams, and detailed notes
                        for NPSE success.
                    </p>
                </div>
            </section>

            {/* Filter Bar */}
            <section className="tips-nav-bar">
                <div className="container">
                    <div className="tips-nav-bar__inner">
                        {[
                            { key: 'all', label: 'All Products' },
                            { key: 'note_pack', label: '📚 Notes' },
                            { key: 'mock_exam', label: '📝 Mock Exams' },
                            { key: 'subscription', label: '⭐ Subscriptions' },
                        ].map(f => (
                            <button
                                key={f.key}
                                className={`hero-cta ${filter === f.key ? 'hero-cta--primary' : 'hero-cta--secondary'}`}
                                style={filter !== f.key ? { background: 'var(--color-ivory)', color: 'var(--color-navy)', borderColor: 'var(--color-border, #e2e8f0)' } : {}}
                                onClick={() => setFilter(f.key)}
                            >
                                {f.label}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Products */}
            <section className="platform-section">
                <div className="container">
                    {error && <div className="donate-error-themed" style={{ marginBottom: 'var(--space-6)' }}>{error}</div>}

                    {filteredProducts.length === 0 ? (
                        <div style={{ textAlign: 'center', padding: 'var(--space-16) 0' }}>
                            <p style={{ color: '#888' }}>No products available in this category yet.</p>
                        </div>
                    ) : (
                        <div className="practise-grid">
                            {filteredProducts.map((product) => (
                                <div key={product.id} className="practise-card" style={{ position: 'relative' }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
                                        <span className="pillar-card__number">
                                            {PRODUCT_TYPE_ICONS[product.product_type]} {PRODUCT_TYPE_LABELS[product.product_type]}
                                        </span>
                                        {product.product_type === 'subscription' && (
                                            <span className="access-card__badge">Most Popular</span>
                                        )}
                                    </div>

                                    <h3>{product.name}</h3>
                                    <p>{product.description}</p>

                                    <ul className="practise-card__features">
                                        {product.product_type === 'note_pack' && (
                                            <>
                                                <li>All topic notes</li>
                                                <li>Detailed explanations</li>
                                                <li>Examples & diagrams</li>
                                            </>
                                        )}
                                        {product.product_type === 'mock_exam' && (
                                            <>
                                                <li>10 full mock exams</li>
                                                <li>Timed simulations</li>
                                                <li>Score breakdowns</li>
                                            </>
                                        )}
                                        {product.product_type === 'subscription' && (
                                            <>
                                                <li>All notes & packs</li>
                                                <li>Unlimited mock exams</li>
                                                <li>Performance analytics</li>
                                                <li>Priority support</li>
                                            </>
                                        )}
                                    </ul>

                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'auto', paddingTop: 'var(--space-4)', borderTop: '1px solid var(--color-border, #e2e8f0)' }}>
                                        <div>
                                            <span style={{ fontSize: '0.75rem', color: '#888' }}>Le </span>
                                            <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '1.25rem', fontWeight: 700, color: 'var(--color-navy)' }}>
                                                {Number(product.price_amount).toLocaleString()}
                                            </span>
                                        </div>
                                        <button
                                            className="access-card__cta access-card__cta--primary"
                                            onClick={() => handlePurchase(product.id)}
                                            disabled={purchasing === product.id}
                                        >
                                            {purchasing === product.id ? 'Processing...' : 'Buy Now'}
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </section>

            {/* Trust Bar */}
            <section className="platform-section platform-section--alt" style={{ paddingTop: 0 }}>
                <div className="container">
                    <div style={{ display: 'flex', justifyContent: 'center', gap: 'var(--space-8)', flexWrap: 'wrap' }}>
                        {[
                            { icon: '🔒', text: 'Secure Payment' },
                            { icon: '📱', text: 'Mobile Money' },
                            { icon: '⚡', text: 'Instant Access' },
                            { icon: '💬', text: 'Support Available' },
                        ].map((t, i) => (
                            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)', fontSize: '0.88rem', color: '#666' }}>
                                <span style={{ fontSize: '1.2rem' }}>{t.icon}</span>
                                <span style={{ fontWeight: 500 }}>{t.text}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
