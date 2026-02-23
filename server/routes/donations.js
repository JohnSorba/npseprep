/**
 * Donations Route
 * TEP Section 6.1 — POST /donations, GET /donations/:id
 *
 * Handles one-time donation creation with Monime payment intent.
 */

const express = require('express');
const router = express.Router();
const Joi = require('joi');
const db = require('../db');
const monime = require('../services/monimeClient');
const { optionalAuth } = require('../middleware/auth');

// ──── Validation ──────────────────────────────────────────────
const donationSchema = Joi.object({
    amount: Joi.number().positive().required(),
    currency: Joi.string().valid('SLE', 'USD').default('SLE'),
    message: Joi.string().max(500).allow('', null).optional(),
    donor_name: Joi.string().max(255).allow('', null).optional(),
    donor_email: Joi.string().email().allow('', null).optional(),
});

// ──── POST /api/v1/donations ──────────────────────────────────
router.post('/', optionalAuth, async (req, res) => {
    try {
        // Validate
        const { error, value } = donationSchema.validate(req.body);
        if (error) return res.status(400).json({ error: error.details[0].message });

        const { amount, currency, message, donor_name, donor_email } = value;
        const userId = req.user?.id || null;

        // 1. Create donation record
        const donationResult = await db.query(
            `INSERT INTO donations (user_id, donor_name, donor_email, amount, currency, status, message)
             VALUES ($1, $2, $3, $4, $5, 'created', $6)
             RETURNING id`,
            [userId, donor_name, donor_email, amount, currency, message]
        );
        const donationId = donationResult.rows[0].id;

        // 2. Build reference
        const reference = `NPSEPREP-DON-${donationId}`;

        // 3. Create Monime payment intent
        const callbackUrl = `${process.env.APP_BASE_URL}/payment/success?donationId=${donationId}`;
        const monimePayment = await monime.createPayment({
            amount,
            currency,
            reference,
            description: `Donation to NPSE Prep${message ? ': ' + message : ''}`,
            metadata: {
                purpose: 'donation',
                donation_id: donationId,
                user_id: userId,
            },
            callbackUrl,
        });

        // 4. Create internal payment record
        await db.query(
            `INSERT INTO payments (monime_payment_id, purpose, donation_id, amount, currency, status, reference, checkout_url)
             VALUES ($1, 'donation', $2, $3, $4, 'initiated', $5, $6)`,
            [monimePayment.id, donationId, amount, currency, reference, monimePayment.checkout_url || null]
        );

        // 5. Update donation status
        await db.query(
            `UPDATE donations SET status = 'pending_payment' WHERE id = $1`,
            [donationId]
        );

        // 6. Return to frontend
        res.status(201).json({
            donation_id: donationId,
            checkout_url: monimePayment.checkout_url || null,
            payment_code: monimePayment.payment_code || null,
            reference,
        });

    } catch (err) {
        console.error('[Donations] Error creating donation:', err);
        res.status(500).json({ error: 'Failed to create donation. Please try again.' });
    }
});


// ──── GET /api/v1/donations/:id ───────────────────────────────
router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;

        const result = await db.query(
            `SELECT d.id, d.amount, d.currency, d.status, d.message, d.donor_name, d.created_at,
                    p.status as payment_status, p.reference
             FROM donations d
             LEFT JOIN payments p ON p.donation_id = d.id
             WHERE d.id = $1`,
            [id]
        );

        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Donation not found.' });
        }

        res.json(result.rows[0]);
    } catch (err) {
        console.error('[Donations] Error fetching donation:', err);
        res.status(500).json({ error: 'Failed to fetch donation.' });
    }
});


module.exports = router;
