/**
 * Webhook Route
 * TEP Section 6.3 + Section 8 — POST /webhooks/monime
 *
 * Receives payment events from Monime, verifies them,
 * and fulfils orders/donations with full idempotency.
 */

const express = require('express');
const router = express.Router();
const db = require('../db');
const monime = require('../services/monimeClient');

// ──── POST /api/v1/webhooks/monime ────────────────────────────
router.post('/monime', express.raw({ type: 'application/json' }), async (req, res) => {
    let rawBody;
    try {
        // 1. Get raw body for signature verification
        rawBody = typeof req.body === 'string' ? req.body : JSON.stringify(req.body);
        const signature = req.headers['x-monime-signature'] || req.headers['monime-signature'] || '';

        // 2. Verify webhook signature (if secret is configured)
        if (process.env.MONIME_WEBHOOK_SECRET) {
            const isValid = monime.verifyWebhookSignature(rawBody, signature);
            if (!isValid) {
                console.warn('[Webhook] Invalid signature — rejecting');
                return res.status(401).json({ error: 'Invalid signature' });
            }
        }

        // 3. Parse payload
        const payload = typeof req.body === 'object' ? req.body : JSON.parse(rawBody);
        const eventId = payload.event_id || payload.id;
        const eventType = payload.event_type || payload.type;
        const monimePaymentId = payload.data?.payment_id || payload.payment_id || payload.data?.id;

        if (!eventId || !eventType) {
            console.warn('[Webhook] Missing event_id or event_type — ignoring');
            return res.status(400).json({ error: 'Missing required fields' });
        }

        // 4. Idempotency gate — insert webhook event
        try {
            await db.query(
                `INSERT INTO webhook_events (event_id, event_type, payload, received_at, processing_status)
                 VALUES ($1, $2, $3, NOW(), 'received')`,
                [eventId, eventType, payload]
            );
        } catch (err) {
            if (err.code === '23505') {
                // Unique violation — already processed
                console.log(`[Webhook] Duplicate event ${eventId} — skipping`);
                return res.status(200).json({ status: 'already_processed' });
            }
            throw err;
        }

        // 5. Find internal payment record
        if (!monimePaymentId) {
            await markWebhookStatus(eventId, 'ignored');
            console.warn('[Webhook] No monime_payment_id in payload — ignoring');
            return res.status(200).json({ status: 'ignored' });
        }

        const paymentResult = await db.query(
            `SELECT * FROM payments WHERE monime_payment_id = $1`,
            [monimePaymentId]
        );

        if (paymentResult.rows.length === 0) {
            await markWebhookStatus(eventId, 'ignored');
            console.warn(`[Webhook] No internal payment found for Monime ID ${monimePaymentId}`);
            return res.status(200).json({ status: 'ignored' });
        }

        const payment = paymentResult.rows[0];

        // 6. Server-side verification (recommended by TEP)
        const verification = await monime.verifyPayment(
            monimePaymentId,
            Number(payment.amount),
            payment.currency
        );

        // 7. Process based on verification result
        if (verification.verified) {
            await handlePaymentCompleted(payment, eventId);
        } else if (eventType.includes('failed') || eventType.includes('cancelled')) {
            await handlePaymentFailed(payment, eventId);
        } else {
            // Payment not yet completed — update status but don't fulfil
            await db.query(
                `UPDATE payments SET status = 'processing' WHERE id = $1`,
                [payment.id]
            );
            await markWebhookStatus(eventId, 'processed');
        }

        res.status(200).json({ status: 'processed' });

    } catch (err) {
        console.error('[Webhook] Error processing webhook:', err);
        res.status(500).json({ error: 'Webhook processing failed' });
    }
});


// ──── Fulfilment Logic ────────────────────────────────────────

async function handlePaymentCompleted(payment, eventId) {
    const client = await require('pg').Pool.prototype.connect
        ? (await (async () => { const { Pool } = require('pg'); const p = new Pool({ connectionString: process.env.DATABASE_URL }); return p.connect(); })())
        : null;

    // Use a simpler approach with sequential queries since we have the db module
    try {
        // Update payment status
        await db.query(
            `UPDATE payments SET status = 'completed', provider_channel = COALESCE(provider_channel, 'monime') WHERE id = $1`,
            [payment.id]
        );

        if (payment.purpose === 'donation') {
            // Mark donation as paid
            await db.query(
                `UPDATE donations SET status = 'paid' WHERE id = $1`,
                [payment.donation_id]
            );
        } else if (payment.purpose === 'purchase') {
            // Mark order as paid
            await db.query(
                `UPDATE orders SET status = 'paid' WHERE id = $1`,
                [payment.order_id]
            );

            // Create entitlements for all items in the order
            const orderItems = await db.query(
                `SELECT oi.product_id FROM order_items oi WHERE oi.order_id = $1`,
                [payment.order_id]
            );

            // Get user_id from order
            const orderResult = await db.query(
                `SELECT user_id FROM orders WHERE id = $1`,
                [payment.order_id]
            );

            if (orderResult.rows.length > 0) {
                const userId = orderResult.rows[0].user_id;

                for (const item of orderItems.rows) {
                    // Check for existing entitlement before creating
                    const existing = await db.query(
                        `SELECT id FROM entitlements
                         WHERE user_id = $1 AND product_id = $2
                           AND (expires_at IS NULL OR expires_at > NOW())
                         LIMIT 1`,
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

        await markWebhookStatus(eventId, 'processed');
        console.log(`[Webhook] Payment ${payment.id} completed — fulfilment done`);

    } catch (err) {
        await markWebhookStatus(eventId, 'failed');
        console.error(`[Webhook] Fulfilment error for payment ${payment.id}:`, err);
        throw err;
    }
}

async function handlePaymentFailed(payment, eventId) {
    try {
        await db.query(
            `UPDATE payments SET status = 'failed' WHERE id = $1`,
            [payment.id]
        );

        if (payment.purpose === 'donation') {
            await db.query(
                `UPDATE donations SET status = 'failed' WHERE id = $1`,
                [payment.donation_id]
            );
        } else if (payment.purpose === 'purchase') {
            await db.query(
                `UPDATE orders SET status = 'failed' WHERE id = $1`,
                [payment.order_id]
            );
        }

        await markWebhookStatus(eventId, 'processed');
        console.log(`[Webhook] Payment ${payment.id} marked as failed`);
    } catch (err) {
        await markWebhookStatus(eventId, 'failed');
        throw err;
    }
}

async function markWebhookStatus(eventId, status) {
    await db.query(
        `UPDATE webhook_events SET processing_status = $1, processed_at = NOW() WHERE event_id = $2`,
        [status, eventId]
    );
}


module.exports = router;
