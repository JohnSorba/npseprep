/**
 * Products Route
 * Public catalogue of available digital products.
 */

const express = require('express');
const router = express.Router();
const db = require('../db');
const { authenticateToken } = require('../middleware/auth');

// ──── GET /api/v1/products ────────────────────────────────────
// Public — lists all active products
router.get('/', async (req, res) => {
    try {
        const { type } = req.query; // Optional filter by product_type

        let query = `SELECT id, slug, name, description, price_amount, price_currency, product_type
                      FROM products
                      WHERE is_active = true`;
        const params = [];

        if (type) {
            params.push(type);
            query += ` AND product_type = $${params.length}`;
        }

        query += ` ORDER BY price_amount ASC`;

        const result = await db.query(query, params);
        res.json(result.rows);
    } catch (err) {
        console.error('[Products] Error fetching products:', err);
        res.status(500).json({ error: 'Failed to fetch products.' });
    }
});


// ──── GET /api/v1/products/:slug ──────────────────────────────
router.get('/:slug', async (req, res) => {
    try {
        const result = await db.query(
            `SELECT id, slug, name, description, price_amount, price_currency, product_type
             FROM products
             WHERE slug = $1 AND is_active = true`,
            [req.params.slug]
        );

        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Product not found.' });
        }

        res.json(result.rows[0]);
    } catch (err) {
        console.error('[Products] Error fetching product:', err);
        res.status(500).json({ error: 'Failed to fetch product.' });
    }
});


// ──── GET /api/v1/products/entitlements/mine ──────────────────
// Returns products the authenticated user has access to
router.get('/entitlements/mine', authenticateToken, async (req, res) => {
    try {
        const result = await db.query(
            `SELECT p.id, p.slug, p.name, p.description, p.product_type,
                    e.starts_at, e.expires_at
             FROM entitlements e
             JOIN products p ON p.id = e.product_id
             WHERE e.user_id = $1
               AND e.starts_at <= NOW()
               AND (e.expires_at IS NULL OR e.expires_at > NOW())
             ORDER BY e.created_at DESC`,
            [req.user.id]
        );

        res.json(result.rows);
    } catch (err) {
        console.error('[Products] Error fetching entitlements:', err);
        res.status(500).json({ error: 'Failed to fetch entitlements.' });
    }
});


module.exports = router;
