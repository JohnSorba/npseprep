/**
 * Donate Page — "Support Us"
 * TEP Section 9 — Frontend Donation Flow
 */

import { useState } from 'react';
import { Link } from 'react-router-dom';
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
            {/* <section className="impact-section" style={{ padding: 'var(--space-12) 0' }}>
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
            </section> */}

            {/* USSD / Mobile Money Section */}
            <section className="platform-section">
                <div className="container" style={{ maxWidth: '640px' }}>
                    <div className="ussd-card">
                        <div className="platform-section__header" style={{ marginBottom: 'var(--space-6)' }}>
                            <p className="platform-section__eyebrow">Support Our Mission</p>
                            <h2>Help us reach every pupil</h2>
                        </div>

                        <div className="support-message">
                            <p>
                                Thank you for your interest in supporting NPSE Prep! Your contributions help us keep our core resources free for pupils across Sierra Leone.
                            </p>
                            <p>
                                You can support us quickly and easily via <strong>Orange Money</strong> or <strong>Africell Money</strong>.
                            </p>
                        </div>

                        <div className="ussd-instruction-box">
                            <span className="ussd-instruction-box__label">DIAL SHORTCODE</span>
                            <div className="ussd-code-display">
                                {/* REPLACE THIS WITH REAL MERCHANT CODE */}
                                <code>*715*013078441#</code>
                            </div>
                            <p className="ussd-instruction-box__hint">Type this on your phone to donate via Mobile Money</p>

                            <div style={{ marginTop: 'var(--space-6)' }}>
                                <a
                                    href="tel:*715*013078441%23"
                                    className="hero-cta hero-cta--primary"
                                    style={{ width: '100%', display: 'inline-block', textAlign: 'center' }}
                                >
                                    Click to Dial Now
                                </a>
                            </div>
                        </div>

                        <div className="ussd-steps">
                            <h4>How it works:</h4>
                            <ol>
                                <li>Dial the code above or click the button.</li>
                                <li>Enter the amount you wish to donate.</li>
                                <li>Enter your PIN to confirm.</li>
                                <li>You will receive a confirmation SMS.</li>
                            </ol>
                        </div>

                        {/* <div className="support-contact">
                            <p>Need help or want to donate a different way? <Link to="/about" style={{ color: 'var(--pay-primary)', fontWeight: '600' }}>Contact us</Link></p>
                        </div> */}
                    </div>

                    {/* Original donation form commented out for future reactivation */}
                    {/* 
                    <form className="donate-form-themed" onSubmit={handleSubmit}>
                        ... (form content) ...
                    </form>
                    */}
                </div>
            </section>

            <style dangerouslySetInnerHTML={{
                __html: `
                .ussd-card {
                    background: #fff;
                    border-radius: var(--pay-radius);
                    padding: 40px;
                    box-shadow: var(--pay-shadow-lg);
                    border: 1px solid var(--pay-gray-200);
                }
                .support-message {
                    font-size: 1.1rem;
                    line-height: 1.6;
                    color: var(--pay-gray-700);
                    margin-bottom: var(--space-8);
                }
                .support-message p {
                    margin-bottom: var(--space-4);
                }
                .ussd-instruction-box {
                    background: var(--pay-gray-50);
                    border: 2px dashed var(--pay-gray-300);
                    border-radius: var(--pay-radius-sm);
                    padding: 32px 24px;
                    text-align: center;
                    margin-bottom: var(--space-8);
                    overflow-wrap: break-word;
                    word-wrap: break-word;
                }
                .ussd-instruction-box__label {
                    display: block;
                    font-size: 0.75rem;
                    font-weight: 800;
                    color: var(--pay-gray-500);
                    text-transform: uppercase;
                    letter-spacing: 0.1em;
                    margin-bottom: var(--space-2);
                }
                .ussd-code-display {
                    font-size: clamp(1.5rem, 6vw, 2.5rem);
                    font-weight: 800;
                    color: var(--pay-primary);
                    margin: var(--space-2) 0;
                    letter-spacing: 0.05em;
                    line-height: 1.2;
                }
                .ussd-code-display code {
                    display: inline-block;
                    max-width: 100%;
                }
                .ussd-instruction-box__hint {
                    font-size: 0.9rem;
                    color: var(--pay-gray-500);
                }
                .ussd-steps {
                    margin-bottom: var(--space-8);
                }
                .ussd-steps h4 {
                    font-size: 1rem;
                    font-weight: 700;
                    margin-bottom: var(--space-4);
                }
                .ussd-steps ol {
                    margin-left: var(--space-5);
                    color: var(--pay-gray-600);
                }
                .ussd-steps li {
                    margin-bottom: var(--space-2);
                }
                .support-contact {
                    text-align: center;
                    font-size: 0.95rem;
                    color: var(--pay-gray-500);
                    border-top: 1px solid var(--pay-gray-100);
                    padding-top: var(--space-6);
                }

                @media (max-width: 480px) {
                    .ussd-card {
                        padding: 24px 16px;
                    }
                    .support-message {
                        font-size: 1rem;
                    }
                    .ussd-instruction-box {
                        padding: 24px 12px;
                    }
                }
            `}} />

        </>
    );
}
