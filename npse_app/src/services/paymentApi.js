/**
 * Payment API Service
 * Frontend HTTP client for payment-related backend endpoints.
 *
 * All payment logic lives on the server — this module only
 * handles UI ↔ backend communication.
 */

const API_BASE = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api/v1';

function getAuthHeaders() {
    const token = localStorage.getItem('token');
    const headers = { 'Content-Type': 'application/json' };
    if (token) {
        headers['Authorization'] = `Bearer ${token}`;
    }
    return headers;
}

async function handleResponse(response) {
    const data = await response.json();
    if (!response.ok) {
        throw new Error(data.error || `Request failed with status ${response.status}`);
    }
    return data;
}

// ──── Products ────────────────────────────────────────────────

export async function fetchProducts(type = null) {
    const url = type ? `${API_BASE}/products?type=${type}` : `${API_BASE}/products`;
    const response = await fetch(url);
    return handleResponse(response);
}

export async function fetchProduct(slug) {
    const response = await fetch(`${API_BASE}/products/${slug}`);
    return handleResponse(response);
}

export async function fetchMyEntitlements() {
    const response = await fetch(`${API_BASE}/products/entitlements/mine`, {
        headers: getAuthHeaders(),
    });
    return handleResponse(response);
}

// ──── Donations ───────────────────────────────────────────────

export async function createDonation({ amount, currency = 'SLE', message = '', donor_name = '', donor_email = '' }) {
    const response = await fetch(`${API_BASE}/donations`, {
        method: 'POST',
        headers: getAuthHeaders(),
        body: JSON.stringify({ amount, currency, message, donor_name, donor_email }),
    });
    return handleResponse(response);
}

export async function getDonationStatus(donationId) {
    const response = await fetch(`${API_BASE}/donations/${donationId}`);
    return handleResponse(response);
}

// ──── Purchases ───────────────────────────────────────────────

export async function createPurchase(productId) {
    const response = await fetch(`${API_BASE}/checkout/purchase`, {
        method: 'POST',
        headers: getAuthHeaders(),
        body: JSON.stringify({ product_id: productId }),
    });
    return handleResponse(response);
}

export async function getOrderStatus(orderId) {
    const response = await fetch(`${API_BASE}/checkout/orders/${orderId}`, {
        headers: getAuthHeaders(),
    });
    return handleResponse(response);
}
