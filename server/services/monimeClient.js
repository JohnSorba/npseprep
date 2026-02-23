/**
 * Monime Payment API Client
 * TEP Section 7 — Centralised Monime HTTP client
 *
 * All Monime API calls go through this module.
 * Keys are NEVER exposed to the browser.
 */

const crypto = require('crypto');

const MONIME_BASE_URL = process.env.MONIME_BASE_URL || 'https://api.monime.io';
const MONIME_SECRET_KEY = process.env.MONIME_SECRET_KEY;
const MONIME_SPACE_ID = process.env.MONIME_SPACE_ID;
const MONIME_WEBHOOK_SECRET = process.env.MONIME_WEBHOOK_SECRET;

// ----- Internal helpers -----

function getHeaders() {
    return {
        'Authorization': `Bearer ${MONIME_SECRET_KEY}`,
        'Monime-Space-Id': MONIME_SPACE_ID,
        'Content-Type': 'application/json',
    };
}

async function monimeRequest(method, path, body = null) {
    const url = `${MONIME_BASE_URL}${path}`;
    const options = {
        method,
        headers: getHeaders(),
    };

    if (body) {
        options.body = JSON.stringify(body);
    }

    const response = await fetch(url, options);
    const data = await response.json();

    if (!response.ok) {
        const err = new Error(`Monime API error: ${response.status} ${response.statusText}`);
        err.status = response.status;
        err.data = data;
        throw err;
    }

    return data;
}

// ----- Public API -----

/**
 * Create a Monime payment intent.
 *
 * @param {Object} params
 * @param {number} params.amount       – Amount in minor currency unit or decimal
 * @param {string} params.currency     – e.g. 'SLE', 'USD'
 * @param {string} params.reference    – Internal reference e.g. NPSEPREP-ORDER-<uuid>
 * @param {string} params.description  – Human-readable description
 * @param {Object} params.metadata     – Arbitrary key-value pairs (order_id, user_id, purpose)
 * @param {string} params.callbackUrl  – URL Monime redirects to after payment
 * @returns {Object} Monime payment object with checkout_url, id, etc.
 */
async function createPayment({ amount, currency, reference, description, metadata = {}, callbackUrl }) {
    const body = {
        amount,
        currency,
        reference,
        description,
        metadata,
        callback_url: callbackUrl,
    };

    return monimeRequest('POST', '/v1/payments', body);
}

/**
 * Retrieve an existing Monime payment by ID.
 *
 * @param {string} paymentId – The Monime payment object ID
 * @returns {Object} Full Monime payment object
 */
async function getPayment(paymentId) {
    return monimeRequest('GET', `/v1/payments/${paymentId}`);
}

/**
 * Verify a webhook signature.
 * If Monime does not sign webhooks, use server-side fetch verification instead.
 *
 * @param {string} payload   – Raw request body (string)
 * @param {string} signature – Webhook signature header value
 * @returns {boolean}
 */
function verifyWebhookSignature(payload, signature) {
    if (!MONIME_WEBHOOK_SECRET) {
        console.warn('[Monime] No webhook secret configured — skipping signature check');
        return true;
    }

    const expected = crypto
        .createHmac('sha256', MONIME_WEBHOOK_SECRET)
        .update(payload)
        .digest('hex');

    return crypto.timingSafeEqual(Buffer.from(expected), Buffer.from(signature || ''));
}

/**
 * Server-side verification: fetch payment from Monime and cross-check.
 *
 * @param {string} monimePaymentId – The Monime payment ID
 * @param {number} expectedAmount
 * @param {string} expectedCurrency
 * @returns {{ verified: boolean, payment: Object, reason?: string }}
 */
async function verifyPayment(monimePaymentId, expectedAmount, expectedCurrency) {
    try {
        const payment = await getPayment(monimePaymentId);

        if (payment.status !== 'completed') {
            return { verified: false, payment, reason: `Status is '${payment.status}', not 'completed'` };
        }
        if (Number(payment.amount) !== Number(expectedAmount)) {
            return { verified: false, payment, reason: `Amount mismatch: expected ${expectedAmount}, got ${payment.amount}` };
        }
        if (payment.currency !== expectedCurrency) {
            return { verified: false, payment, reason: `Currency mismatch: expected ${expectedCurrency}, got ${payment.currency}` };
        }

        return { verified: true, payment };
    } catch (err) {
        return { verified: false, payment: null, reason: err.message };
    }
}

module.exports = {
    createPayment,
    getPayment,
    verifyWebhookSignature,
    verifyPayment,
};
