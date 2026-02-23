/**
 * Payment Status Page
 * TEP Section 9 — Success / Pending / Failed payment states
 *
 * Handles redirect back from Monime checkout.
 * URL patterns:
 *   /payment/success?orderId=... or ?donationId=...
 *   /payment/pending?orderId=... or ?donationId=...
 *   /payment/failed?orderId=...  or ?donationId=...
 */

import { useState, useEffect } from 'react';
import { useSearchParams, useLocation, Link } from 'react-router-dom';
import { getOrderStatus, getDonationStatus } from '../services/paymentApi';

export default function PaymentStatus() {
    const [searchParams] = useSearchParams();
    const location = useLocation();
    const [statusData, setStatusData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    // Determine type from URL path
    const pathStatus = location.pathname.split('/').pop(); // success, pending, or failed
    const orderId = searchParams.get('orderId');
    const donationId = searchParams.get('donationId');

    useEffect(() => {
        fetchStatus();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const fetchStatus = async () => {
        try {
            if (orderId) {
                const data = await getOrderStatus(orderId);
                setStatusData({ type: 'order', ...data });
            } else if (donationId) {
                const data = await getDonationStatus(donationId);
                setStatusData({ type: 'donation', ...data });
            }
        } catch (err) {
            setError('Could not retrieve payment status.');
        } finally {
            setLoading(false);
        }
    };

    const getStatusConfig = () => {
        const dbStatus = statusData?.status || statusData?.payment_status;

        if (dbStatus === 'paid' || dbStatus === 'completed' || pathStatus === 'success') {
            return {
                icon: '✅',
                title: statusData?.type === 'donation'
                    ? 'Thank You for Your Donation!'
                    : 'Purchase Successful!',
                subtitle: statusData?.type === 'donation'
                    ? 'Your generous contribution helps pupils across Sierra Leone prepare for their NPSE exams.'
                    : 'Your content has been unlocked. You can now access your purchased materials.',
                color: 'success',
            };
        }

        if (dbStatus === 'pending_payment' || dbStatus === 'processing' || dbStatus === 'pending' || pathStatus === 'pending') {
            return {
                icon: '⏳',
                title: 'Payment Processing',
                subtitle: 'Your payment is being processed. This may take a few moments. You will receive confirmation once completed.',
                color: 'pending',
            };
        }

        return {
            icon: '❌',
            title: 'Payment Failed',
            subtitle: 'Unfortunately, your payment could not be completed. Please try again or use a different payment method.',
            color: 'failed',
        };
    };

    if (loading) {
        return (
            <div className="payment-status-page">
                <div className="status-loading">
                    <div className="status-loading-spinner"></div>
                    <p>Checking payment status...</p>
                </div>
            </div>
        );
    }

    const config = getStatusConfig();

    return (
        <div className="payment-status-page">
            <section className="payment-status-container">
                <div className={`status-card status-${config.color}`}>
                    <div className="status-icon-wrapper">
                        <span className="status-icon">{config.icon}</span>
                    </div>

                    <h1 className="status-title">{config.title}</h1>
                    <p className="status-subtitle">{config.subtitle}</p>

                    {/* Transaction Details */}
                    {statusData && (
                        <div className="status-details">
                            {statusData.type === 'order' && (
                                <>
                                    <div className="detail-row">
                                        <span className="detail-label">Order ID</span>
                                        <span className="detail-value">{statusData.id}</span>
                                    </div>
                                    <div className="detail-row">
                                        <span className="detail-label">Amount</span>
                                        <span className="detail-value">
                                            Le {Number(statusData.total_amount).toLocaleString()}
                                        </span>
                                    </div>
                                    {statusData.reference && (
                                        <div className="detail-row">
                                            <span className="detail-label">Reference</span>
                                            <span className="detail-value">{statusData.reference}</span>
                                        </div>
                                    )}
                                </>
                            )}
                            {statusData.type === 'donation' && (
                                <>
                                    <div className="detail-row">
                                        <span className="detail-label">Donation ID</span>
                                        <span className="detail-value">{statusData.id}</span>
                                    </div>
                                    <div className="detail-row">
                                        <span className="detail-label">Amount</span>
                                        <span className="detail-value">
                                            Le {Number(statusData.amount).toLocaleString()}
                                        </span>
                                    </div>
                                </>
                            )}
                        </div>
                    )}

                    {error && <p className="status-error">{error}</p>}

                    {/* Actions */}
                    <div className="status-actions">
                        {config.color === 'success' && statusData?.type === 'order' && (
                            <Link to="/notes" className="status-action-btn primary">
                                Access My Content
                            </Link>
                        )}
                        {config.color === 'success' && statusData?.type === 'donation' && (
                            <Link to="/" className="status-action-btn primary">
                                Back to Home
                            </Link>
                        )}
                        {config.color === 'pending' && (
                            <button className="status-action-btn secondary" onClick={fetchStatus}>
                                Refresh Status
                            </button>
                        )}
                        {config.color === 'failed' && (
                            <>
                                <Link to="/store" className="status-action-btn primary">
                                    Try Again
                                </Link>
                                <Link to="/" className="status-action-btn secondary">
                                    Back to Home
                                </Link>
                            </>
                        )}
                    </div>
                </div>
            </section>
        </div>
    );
}
