/**
 * Entitlement Middleware
 * TEP Section 4.2 — Access-control for paid digital content.
 *
 * Checks if the authenticated user has an active entitlement
 * for the requested product.
 */

const db = require('../db');

/**
 * Middleware factory — checks entitlement for a given product slug.
 *
 * Usage:
 *   router.get('/content/math-notes', requireEntitlement('math-notes-pack'), (req, res) => { ... })
 *
 * @param {string} productSlug — The product slug to check
 */
function requireEntitlement(productSlug) {
    return async (req, res, next) => {
        if (!req.user) {
            return res.status(401).json({ error: 'Authentication required to access this content.' });
        }

        try {
            const result = await db.query(
                `SELECT e.id
                 FROM entitlements e
                 JOIN products p ON p.id = e.product_id
                 WHERE e.user_id = $1
                   AND p.slug = $2
                   AND e.starts_at <= NOW()
                   AND (e.expires_at IS NULL OR e.expires_at > NOW())
                 LIMIT 1`,
                [req.user.id, productSlug]
            );

            if (result.rows.length === 0) {
                return res.status(403).json({
                    error: 'You do not have access to this content.',
                    required_product: productSlug,
                });
            }

            next();
        } catch (err) {
            console.error('[Entitlement Check] Error:', err);
            return res.status(500).json({ error: 'Could not verify content access.' });
        }
    };
}

/**
 * Check multiple entitlements — user needs at least one.
 *
 * @param  {...string} productSlugs
 */
function requireAnyEntitlement(...productSlugs) {
    return async (req, res, next) => {
        if (!req.user) {
            return res.status(401).json({ error: 'Authentication required to access this content.' });
        }

        try {
            const result = await db.query(
                `SELECT e.id
                 FROM entitlements e
                 JOIN products p ON p.id = e.product_id
                 WHERE e.user_id = $1
                   AND p.slug = ANY($2)
                   AND e.starts_at <= NOW()
                   AND (e.expires_at IS NULL OR e.expires_at > NOW())
                 LIMIT 1`,
                [req.user.id, productSlugs]
            );

            if (result.rows.length === 0) {
                return res.status(403).json({
                    error: 'You do not have access to this content.',
                    required_products: productSlugs,
                });
            }

            next();
        } catch (err) {
            console.error('[Entitlement Check] Error:', err);
            return res.status(500).json({ error: 'Could not verify content access.' });
        }
    };
}

module.exports = { requireEntitlement, requireAnyEntitlement };
