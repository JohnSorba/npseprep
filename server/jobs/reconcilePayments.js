/**
 * Payment Reconciliation Job
 * TEP Section 8.3 — Scheduled reconciliation of stale payments
 *
 * Queries Monime for payments stuck in pending/processing state
 * and updates their status accordingly.
 *
 * Run via: node jobs/reconcilePayments.js
 * Or attach to a cron scheduler (e.g., node-cron).
 */

require('dotenv').config();
const db = require('../db');
const monime = require('../services/monimeClient');

const STALE_MINUTES = 30; // Reconcile payments older than this

async function reconcile() {
    console.log('[Reconcile] Starting payment reconciliation...');

    try {
        // Find stale payments
        const result = await db.query(
            `SELECT id, monime_payment_id, purpose, donation_id, order_id, amount, currency, status
             FROM payments
             WHERE status IN ('initiated', 'pending', 'processing')
               AND monime_payment_id IS NOT NULL
               AND created_at < NOW() - INTERVAL '${STALE_MINUTES} minutes'
             ORDER BY created_at ASC
             LIMIT 50`
        );

        if (result.rows.length === 0) {
            console.log('[Reconcile] No stale payments found.');
            return;
        }

        console.log(`[Reconcile] Found ${result.rows.length} stale payment(s) to reconcile.`);

        for (const payment of result.rows) {
            try {
                // Fetch from Monime
                const monimePayment = await monime.getPayment(payment.monime_payment_id);

                if (monimePayment.status === 'completed') {
                    // Verify amounts
                    const verification = await monime.verifyPayment(
                        payment.monime_payment_id,
                        Number(payment.amount),
                        payment.currency
                    );

                    if (verification.verified) {
                        await fulfil(payment);
                        console.log(`[Reconcile] Payment ${payment.id} → completed (fulfilled)`);
                    } else {
                        console.warn(`[Reconcile] Payment ${payment.id} completed but verification failed: ${verification.reason}`);
                    }
                } else if (['failed', 'cancelled', 'expired'].includes(monimePayment.status)) {
                    await markFailed(payment);
                    console.log(`[Reconcile] Payment ${payment.id} → ${monimePayment.status}`);
                } else {
                    console.log(`[Reconcile] Payment ${payment.id} still ${monimePayment.status} — skipping`);
                }

            } catch (err) {
                console.error(`[Reconcile] Error processing payment ${payment.id}:`, err.message);
            }
        }

    } catch (err) {
        console.error('[Reconcile] Fatal error:', err);
    }

    console.log('[Reconcile] Done.');
}


async function fulfil(payment) {
    await db.query(`UPDATE payments SET status = 'completed' WHERE id = $1`, [payment.id]);

    if (payment.purpose === 'donation') {
        await db.query(`UPDATE donations SET status = 'paid' WHERE id = $1`, [payment.donation_id]);
    } else if (payment.purpose === 'purchase') {
        await db.query(`UPDATE orders SET status = 'paid' WHERE id = $1`, [payment.order_id]);

        // Create entitlements
        const orderItems = await db.query(
            `SELECT product_id FROM order_items WHERE order_id = $1`,
            [payment.order_id]
        );
        const orderResult = await db.query(
            `SELECT user_id FROM orders WHERE id = $1`,
            [payment.order_id]
        );

        if (orderResult.rows.length > 0) {
            const userId = orderResult.rows[0].user_id;
            for (const item of orderItems.rows) {
                const existing = await db.query(
                    `SELECT id FROM entitlements WHERE user_id = $1 AND product_id = $2
                     AND (expires_at IS NULL OR expires_at > NOW()) LIMIT 1`,
                    [userId, item.product_id]
                );
                if (existing.rows.length === 0) {
                    await db.query(
                        `INSERT INTO entitlements (user_id, product_id, source_order_id, starts_at)
                         VALUES ($1, $2, $3, NOW())`,
                        [userId, item.product_id, payment.order_id]
                    );
                }
            }
        }
    }
}

async function markFailed(payment) {
    await db.query(`UPDATE payments SET status = 'failed' WHERE id = $1`, [payment.id]);

    if (payment.purpose === 'donation') {
        await db.query(`UPDATE donations SET status = 'failed' WHERE id = $1`, [payment.donation_id]);
    } else if (payment.purpose === 'purchase') {
        await db.query(`UPDATE orders SET status = 'failed' WHERE id = $1`, [payment.order_id]);
    }
}


// Run directly or export for cron integration
if (require.main === module) {
    reconcile().then(() => process.exit(0)).catch(() => process.exit(1));
} else {
    module.exports = { reconcile };
}
