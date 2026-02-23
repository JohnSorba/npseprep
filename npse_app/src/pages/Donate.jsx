/**
 * Donate Page — "Support Us"
 * TEP Section 9 — Frontend Donation Flow
 */

import { useState } from 'react';
import { createDonation } from '../services/paymentApi';

const PRESET_AMOUNTS = [
    { label: 'Le 10', value: 10 },
    { label: 'Le 25', value: 25 },
    { label: 'Le 50', value: 50 },
    { label: 'Le 100', value: 100 },
    { label: 'Le 200', value: 200 },
    { label: 'Le 250', value: 250 },
    { label: 'Le 300', value: 300 },
    { label: 'Le 400', value: 400 },
    { label: 'Le 500', value: 500 },
    { label: 'Le 1000', value: 1000 },
];

export default function Donate() {
    const [selectedAmount, setSelectedAmount] = useState(null);
    const [customAmount, setCustomAmount] = useState('');
    const [donorName, setDonorName] = useState('');
    const [donorEmail, setDonorEmail] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const actualAmount = customAmount ? Number(customAmount) : selectedAmount;

    const handlePresetClick = (value) => {
        setSelectedAmount(value);
        setCustomAmount('');
    };

    const handleCustomChange = (e) => {
        setCustomAmount(e.target.value);
        setSelectedAmount(null);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        if (!actualAmount || actualAmount <= 0) {
            setError('Please select or enter a donation amount.');
            return;
        }

        setLoading(true);

        try {
            const result = await createDonation({
                amount: actualAmount,
                currency: 'SLE',
                message,
                donor_name: donorName,
                donor_email: donorEmail,
            });

            if (result.checkout_url) {
                window.location.href = result.checkout_url;
            } else {
                setError('Payment checkout is being set up. Please try again shortly.');
            }
        } catch (err) {
            setError(err.message || 'Something went wrong. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            {/* Page Hero */}
            <section className="page-hero">
                <div className="container">
                    <p className="platform-section__eyebrow" style={{ color: 'rgba(255,255,255,0.5)' }}>Support Education</p>
                    <h1>Support NPSE Prep</h1>
                    <p className="page-hero__subtitle">
                        Your donation helps us provide free and affordable exam preparation
                        resources to pupils across Sierra Leone.
                    </p>
                </div>
            </section>

            {/* Impact Stats */}
            <section className="impact-section" style={{ padding: 'var(--space-12) 0' }}>
                <div className="container">
                    <div className="impact-section__inner">
                        <div className="impact-section__stats">
                            <div className="impact-stat">
                                <span className="impact-stat__number">5,000+</span>
                                <span className="impact-stat__label">Pupils Supported</span>
                            </div>
                            <div className="impact-stat">
                                <span className="impact-stat__number">150+</span>
                                <span className="impact-stat__label">Free Resources</span>
                            </div>
                            <div className="impact-stat">
                                <span className="impact-stat__number">30+</span>
                                <span className="impact-stat__label">Schools Reached</span>
                            </div>
                            <div className="impact-stat">
                                <span className="impact-stat__number">100%</span>
                                <span className="impact-stat__label">Goes to Education</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Donation Form */}
            <section className="platform-section">
                <div className="container" style={{ maxWidth: '640px' }}>
                    <form className="donate-form-themed" onSubmit={handleSubmit}>
                        <div className="platform-section__header" style={{ marginBottom: 'var(--space-6)' }}>
                            <p className="platform-section__eyebrow">Donate</p>
                            <h2>Make a donation</h2>
                        </div>

                        {/* Preset Amounts */}
                        <div className="donate-form-themed__group">
                            <label>Select an amount (SLE)</label>
                            <div className="donate-amount-grid">
                                {PRESET_AMOUNTS.map((preset) => (
                                    <button
                                        key={preset.value}
                                        type="button"
                                        className={`donate-amount-btn ${selectedAmount === preset.value ? 'donate-amount-btn--active' : ''}`}
                                        onClick={() => handlePresetClick(preset.value)}
                                    >
                                        {preset.label}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Custom Amount */}
                        <div className="donate-form-themed__group">
                            <label htmlFor="customAmount">Or enter a custom amount</label>
                            <div className="donate-input-wrapper">
                                <span className="donate-input-wrapper__prefix">Le</span>
                                <input
                                    id="customAmount"
                                    type="number"
                                    min="1"
                                    step="0.01"
                                    placeholder="0.00"
                                    value={customAmount}
                                    onChange={handleCustomChange}
                                    className="donate-input-wrapper__input"
                                />
                            </div>
                        </div>

                        {/* Donor Details */}
                        <div className="donate-form-themed__group">
                            <label htmlFor="donorName">Your Name (optional)</label>
                            <input
                                id="donorName"
                                type="text"
                                placeholder="John Doe"
                                value={donorName}
                                onChange={(e) => setDonorName(e.target.value)}
                                className="donate-input-full"
                            />
                        </div>

                        <div className="donate-form-themed__group">
                            <label htmlFor="donorEmail">Your Email (optional)</label>
                            <input
                                id="donorEmail"
                                type="email"
                                placeholder="john@example.com"
                                value={donorEmail}
                                onChange={(e) => setDonorEmail(e.target.value)}
                                className="donate-input-full"
                            />
                        </div>

                        <div className="donate-form-themed__group">
                            <label htmlFor="donationMessage">Message (optional)</label>
                            <textarea
                                id="donationMessage"
                                placeholder="Leave a message of support..."
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                className="donate-textarea"
                                rows={3}
                                maxLength={500}
                            />
                        </div>

                        {error && <div className="donate-error-themed">{error}</div>}

                        <button
                            type="submit"
                            className="hero-cta hero-cta--primary"
                            style={{ width: '100%', marginTop: 'var(--space-4)' }}
                            disabled={loading || !actualAmount}
                        >
                            {loading ? 'Processing...' : `Donate ${actualAmount ? `Le ${actualAmount.toLocaleString()}` : ''}`}
                        </button>

                        <p className="donate-secure-note-themed">
                            🔒 Payments processed securely via Monime. We never store your payment details.
                        </p>
                    </form>
                </div>
            </section>
        </>
    );
}
