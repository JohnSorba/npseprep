/**
 * Checkout / Purchase Route
 * TEP Section 6.2 — POST /checkout/purchase, GET /orders/:id
 *
 * Creates orders for digital content purchases.
 */

const express = require('express');
const router = express.Router();
const Joi = require('joi');
const db = require('../db');
const monime = require('../services/monimeClient');
const { authenticateToken } = require('../middleware/auth');

// ──── Validation ──────────────────────────────────────────────
const purchaseSchema = Joi.object({
    product_id: Joi.string().uuid().required(),
    quantity: Joi.number().integer().min(1).max(10).default(1),
});

// ──── POST /api/v1/checkout/purchase ──────────────────────────
router.post('/purchase', authenticateToken, async (req, res) => {
    try {
        // Validate
        const { error, value } = purchaseSchema.validate(req.body);
        if (error) return res.status(400).json({ error: error.details[0].message });

        const { product_id, quantity } = value;
        const userId = req.user.id;

        // 1. Fetch product and validate
        const productResult = await db.query(
            `SELECT * FROM products WHERE id = $1 AND is_active = true`,
            [product_id]
        );

        if (productResult.rows.length === 0) {
            return res.status(404).json({ error: 'Product not found or not available.' });
        }

        const product = productResult.rows[0];

        // 2. Check if user already has active entitlement
        const existingEntitlement = await db.query(
            `SELECT id FROM entitlements
             WHERE user_id = $1 AND product_id = $2
               AND starts_at <= NOW()
               AND (expires_at IS NULL OR expires_at > NOW())
             LIMIT 1`,
            [userId, product_id]
        );

        if (existingEntitlement.rows.length > 0) {
            return res.status(400).json({ error: 'You already have access to this product.' });
        }

        // 3. Calculate total (server-side — never trust frontend)
        const totalAmount = Number(product.price_amount) * quantity;
        const currency = product.price_currency;

        // 4. Create order
        const orderResult = await db.query(
            `INSERT INTO orders (user_id, status, total_amount, currency)
             VALUES ($1, 'created', $2, $3)
             RETURNING id`,
            [userId, totalAmount, currency]
        );
        const orderId = orderResult.rows[0].id;

        // 5. Create order item
        await db.query(
            `INSERT INTO order_items (order_id, product_id, unit_amount, quantity)
             VALUES ($1, $2, $3, $4)`,
            [orderId, product_id, product.price_amount, quantity]
        );

        // 6. Build reference
        const reference = `NPSEPREP-ORDER-${orderId}`;

        // 7. Create Monime payment intent
        const callbackUrl = `${process.env.APP_BASE_URL}/payment/success?orderId=${orderId}`;
        const monimePayment = await monime.createPayment({
            amount: totalAmount,
            currency,
            reference,
            description: `Purchase: ${product.name}`,
            metadata: {
                purpose: 'purchase',
                order_id: orderId,
                user_id: userId,
                product_id,
            },
            callbackUrl,
        });

        // 8. Create internal payment record
        await db.query(
            `INSERT INTO payments (monime_payment_id, purpose, order_id, amount, currency, status, reference, checkout_url)
             VALUES ($1, 'purchase', $2, $3, $4, 'initiated', $5, $6)`,
            [monimePayment.id, orderId, totalAmount, currency, reference, monimePayment.checkout_url || null]
        );

        // 9. Update order status
        await db.query(
            `UPDATE orders SET status = 'pending_payment' WHERE id = $1`,
            [orderId]
        );

        // 10. Return to frontend
        res.status(201).json({
            order_id: orderId,
            checkout_url: monimePayment.checkout_url || null,
            reference,
            total_amount: totalAmount,
            currency,
        });

    } catch (err) {
        console.error('[Checkout] Error creating purchase:', err);
        res.status(500).json({ error: 'Failed to process purchase. Please try again.' });
    }
});


// ──── GET /api/v1/orders/:id ──────────────────────────────────
router.get('/orders/:id', authenticateToken, async (req, res) => {
    try {
        const { id } = req.params;
        const userId = req.user.id;

        const result = await db.query(
            `SELECT o.id, o.status, o.total_amount, o.currency, o.created_at,
                    p.status as payment_status, p.reference, p.provider_channel,
                    json_agg(json_build_object(
                        'product_id', oi.product_id,
                        'product_name', pr.name,
                        'unit_amount', oi.unit_amount,
                        'quantity', oi.quantity
                    )) as items
             FROM orders o
             LEFT JOIN payments p ON p.order_id = o.id
             LEFT JOIN order_items oi ON oi.order_id = o.id
             LEFT JOIN products pr ON pr.id = oi.product_id
             WHERE o.id = $1 AND o.user_id = $2
             GROUP BY o.id, p.status, p.reference, p.provider_channel`,
            [id, userId]
        );

        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Order not found.' });
        }

        res.json(result.rows[0]);
    } catch (err) {
        console.error('[Checkout] Error fetching order:', err);
        res.status(500).json({ error: 'Failed to fetch order.' });
    }
});


module.exports = router;
