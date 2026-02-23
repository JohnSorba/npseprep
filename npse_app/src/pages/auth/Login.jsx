import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);
        try {
            const user = await login(email, password);
            navigate(user.role === 'admin' ? '/admin' : '/dashboard');
        } catch (err) {
            setError(err.message || 'Failed to log in');
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <section className="page-hero" style={{ paddingBottom: 'var(--space-16)' }}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <p className="platform-section__eyebrow" style={{ color: 'rgba(255,255,255,0.5)' }}>Account</p>
                    <h1>Welcome Back! 👋</h1>
                    <p className="page-hero__subtitle">Log in to track your NPSE preparation progress</p>
                </div>
            </section>

            <section className="platform-section" style={{ marginTop: '-60px' }}>
                <div className="container" style={{ maxWidth: '440px' }}>
                    <div className="donate-form-themed">
                        {error && (
                            <div className="donate-error-themed" style={{ marginBottom: 'var(--space-6)' }}>
                                ⚠️ {error}
                            </div>
                        )}

                        <form onSubmit={handleSubmit}>
                            <div className="donate-form-themed__group">
                                <label>Email Address</label>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    placeholder="you@example.com"
                                    className="donate-input-full"
                                />
                            </div>

                            <div className="donate-form-themed__group">
                                <label>Password</label>
                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                    placeholder="Enter your password"
                                    className="donate-input-full"
                                />
                            </div>

                            <button
                                type="submit"
                                className="hero-cta hero-cta--primary"
                                disabled={loading}
                                style={{
                                    width: '100%',
                                    opacity: loading ? 0.7 : 1,
                                    cursor: loading ? 'not-allowed' : 'pointer'
                                }}
                            >
                                {loading ? '⏳ Logging in…' : '🔐 Log In'}
                            </button>
                        </form>

                        <div style={{
                            marginTop: 'var(--space-6)',
                            textAlign: 'center',
                            color: '#888',
                            fontSize: '0.85rem'
                        }}>
                            Don't have an account?{' '}
                            <Link to="/register" style={{ color: 'var(--color-green)', fontWeight: 600, textDecoration: 'none' }}>
                                Register here →
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Login;
