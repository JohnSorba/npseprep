import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const { register } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        if (password !== confirmPassword) {
            return setError('Passwords do not match');
        }
        if (password.length < 6) {
            return setError('Password must be at least 6 characters');
        }

        setLoading(true);
        try {
            await register(name, email, password, 'pupil');
            navigate('/login');
        } catch (err) {
            setError(err.message || 'Registration failed');
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <section className="page-hero" style={{ paddingBottom: 'var(--space-16)' }}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <p className="platform-section__eyebrow" style={{ color: 'rgba(255,255,255,0.5)' }}>Account</p>
                    <h1>Create Your Account 🎓</h1>
                    <p className="page-hero__subtitle">Join thousands of pupils preparing for the NPSE</p>
                </div>
            </section>

            <section className="platform-section" style={{ marginTop: '-60px' }}>
                <div className="container" style={{ maxWidth: '480px' }}>
                    <div className="donate-form-themed">
                        {error && (
                            <div className="donate-error-themed" style={{ marginBottom: 'var(--space-6)' }}>
                                ⚠️ {error}
                            </div>
                        )}

                        <form onSubmit={handleSubmit}>
                            <div className="donate-form-themed__group">
                                <label>Full Name</label>
                                <input
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                    placeholder="Your full name"
                                    minLength={3}
                                    className="donate-input-full"
                                />
                            </div>

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

                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-4)', marginBottom: 'var(--space-5)' }}>
                                <div className="donate-form-themed__group" style={{ marginBottom: 0 }}>
                                    <label>Password</label>
                                    <input
                                        type="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                        placeholder="Min 6 characters"
                                        className="donate-input-full"
                                    />
                                </div>
                                <div className="donate-form-themed__group" style={{ marginBottom: 0 }}>
                                    <label>Confirm Password</label>
                                    <input
                                        type="password"
                                        value={confirmPassword}
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                        required
                                        placeholder="Confirm password"
                                        className="donate-input-full"
                                    />
                                </div>
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
                                {loading ? '⏳ Creating account…' : '🚀 Create Account'}
                            </button>
                        </form>

                        <div style={{
                            marginTop: 'var(--space-6)',
                            textAlign: 'center',
                            color: '#888',
                            fontSize: '0.85rem'
                        }}>
                            Already have an account?{' '}
                            <Link to="/login" style={{ color: 'var(--color-green)', fontWeight: 600, textDecoration: 'none' }}>
                                Log in here →
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Register;
