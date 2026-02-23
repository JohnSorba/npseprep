# Technical Execution Plan (TEP) — Monime Payments Integration (Node.js)

**Date:** 18 February 2026  
**Project:** NPSE Prep Website  
**Scope:** Implement Monime payments for **Donations** and **Paid Digital Content** using **Node.js** backend, with secure webhook handling, order fulfilment, and audit-ready transaction logging.

---

## 1. Objectives

1. Accept **donations** (one-time, optionally recurring if supported by Monime).
2. Accept **product purchases** for digital content (notes, topic packs, mock exams, subscriptions).
3. Reliably confirm payments via **server-side verification + webhooks** (no “frontend says paid” shortcuts).
4. Maintain a clean audit trail: payment intents, provider transactions, fulfilment, refunds/chargebacks (if applicable).
5. Support **test** and **live** environments with parity.

---

## 2. Assumptions & Constraints

- The platform has (or will have) a backend service with:
  - Node.js runtime
  - PostgreSQL (recommended) or another durable DB
- Monime provides:
  - REST API using Bearer token authentication
  - A **Space ID** header (multi-tenancy)
  - Webhooks for payment events
- The site is **mobile-first** and must support Sierra Leone payment realities (Mobile Money emphasis).
- PCI/Payment credentials must **never** be exposed to the browser.

---

## 3. High-Level Architecture

### Components
- **Frontend (React/Next.js or React SPA)**
  - Donation page
  - Product catalogue + paywall pages
  - Payment status pages (success/failure/pending)
- **Backend (Node.js, Express/NestJS/Fastify)**
  - Checkout endpoints (create Payment / Payment Code)
  - Webhook receiver endpoint (Monime → backend)
  - Fulfilment logic (unlock content)
  - Email service integration (receipts / confirmations) (optional)
- **Database**
  - Users, products, purchases, donations
  - Payment ledger, webhook events (for idempotency and audit)
- **Observability**
  - Structured logs (JSON)
  - Error tracking (e.g., Sentry)
  - Metrics and alerting (optional)

---

## 4. Core Payment Flows

### 4.1 Donations (Support Us)

**User Journey**
1. User selects donation amount (preset or custom).
2. Frontend calls backend to create a donation checkout session.
3. Backend creates a Monime Payment (or Payment Code) with metadata linking to `donation_id`.
4. User completes payment via Monime UI/channel.
5. Monime sends webhook to backend confirming result.
6. Backend marks donation as `paid` and issues receipt.

**Backend Truth Rule**
- Donation is considered successful **only** when:
  - A valid webhook event is received and verified, OR
  - Backend performs a server-side fetch/verification of the payment object and confirms completed status.

---

### 4.2 Paid Digital Content (Products)

**User Journey**
1. User selects product.
2. Frontend calls backend: `POST /checkout/purchase`.
3. Backend creates an `order` and Monime Payment intent with metadata (`order_id`, `user_id`, `product_id`).
4. User pays.
5. Webhook confirms completion.
6. Backend marks order as paid and creates entitlements (unlock content).

**Access Control**
- Every protected resource checks DB entitlements:
  - product purchased OR subscription active
  - and expiry not passed (if applicable)

---

## 5. Data Model (PostgreSQL Suggested)

> Use UUIDs, timestamps in UTC, and strict status enums.

### 5.1 Tables

#### `users`
- `id` (uuid, pk)
- `email` (text, unique, nullable if you allow phone-only)
- `phone` (text, nullable)
- `created_at`, `updated_at`

#### `products`
- `id` (uuid, pk)
- `slug` (text, unique)
- `name` (text)
- `description` (text)
- `price_amount` (numeric)
- `price_currency` (text) — e.g., `SLE`, `USD`
- `product_type` (enum) — `note_pack`, `topic_pack`, `mock_exam`, `subscription`
- `is_active` (bool)
- `created_at`, `updated_at`

#### `orders`
- `id` (uuid, pk)
- `user_id` (uuid, fk → users)
- `status` (enum) — `created`, `pending_payment`, `paid`, `failed`, `cancelled`, `refunded`
- `total_amount` (numeric)
- `currency` (text)
- `created_at`, `updated_at`

#### `order_items`
- `id` (uuid, pk)
- `order_id` (uuid, fk → orders)
- `product_id` (uuid, fk → products)
- `unit_amount` (numeric)
- `quantity` (int)
- `created_at`

#### `donations`
- `id` (uuid, pk)
- `user_id` (uuid, nullable fk → users)
- `amount` (numeric)
- `currency` (text)
- `status` (enum) — `created`, `pending_payment`, `paid`, `failed`, `refunded`
- `message` (text, nullable)
- `created_at`, `updated_at`

#### `payments`
- `id` (uuid, pk) — internal payment record
- `monime_payment_id` (text, unique) — the Monime Payment object ID
- `purpose` (enum) — `donation`, `purchase`
- `donation_id` (uuid, nullable)
- `order_id` (uuid, nullable)
- `amount` (numeric)
- `currency` (text)
- `status` (enum) — `initiated`, `pending`, `processing`, `completed`, `failed`, `cancelled`, `refunded`
- `provider_channel` (text, nullable) — momo/card/bank/wallet
- `reference` (text, unique, nullable) — your internal reference string
- `created_at`, `updated_at`

#### `entitlements`
- `id` (uuid, pk)
- `user_id` (uuid, fk → users)
- `product_id` (uuid, fk → products)
- `source_order_id` (uuid, fk → orders)
- `starts_at` (timestamptz)
- `expires_at` (timestamptz, nullable)
- `created_at`

#### `webhook_events`
- `id` (uuid, pk)
- `provider` (text) — `monime`
- `event_id` (text, unique) — webhook’s unique event identifier
- `event_type` (text)
- `payload` (jsonb)
- `received_at` (timestamptz)
- `processed_at` (timestamptz, nullable)
- `processing_status` (enum) — `received`, `processed`, `ignored`, `failed`

### 5.2 Idempotency Strategy
- `webhook_events.event_id` must be unique.
- When processing a webhook:
  - Insert `webhook_events` first; if conflict, stop (already processed/received).
  - Then process business logic.

---

## 6. API Endpoints (Backend)

> Prefix all with `/api/v1`.

### 6.1 Donations
- `POST /donations`
  - body: `amount`, `currency`, optional `message`, optional `user_id`
  - creates donation + Monime payment intent
  - returns: `donation_id`, `checkout_url` (or payment code info)

- `GET /donations/:id`
  - returns donation status for UI

### 6.2 Purchases
- `POST /checkout/purchase`
  - body: `product_id`, optional `quantity` (usually 1), `user_id`
  - creates order + payment intent
  - returns: `order_id`, `checkout_url`

- `GET /orders/:id`
  - returns order status

### 6.3 Webhooks
- `POST /webhooks/monime`
  - accepts events from Monime
  - verifies signature (if provided) or verifies by fetching payment details server-side
  - processes payment completion/failure

---

## 7. Monime Integration (Node.js)

### 7.1 Environment Variables

```
MONIME_BASE_URL=https://api.monime.io
MONIME_SECRET_KEY=mon_test_xxx OR mon_xxx
MONIME_SPACE_ID=space_xxx
MONIME_WEBHOOK_SECRET=xxx (if Monime signs webhooks)
APP_BASE_URL=https://yourdomain.com
```

**Non-negotiable:** Do not put Monime keys in frontend builds.

### 7.2 HTTP Client
- Use `axios` or native `fetch` (Node 18+).
- Centralise Monime calls in `services/monimeClient.js`.

**Headers**
- `Authorization: Bearer <MONIME_SECRET_KEY>`
- `Monime-Space-Id: <MONIME_SPACE_ID>`
- `Content-Type: application/json`

### 7.3 Create Payment Intent (Purchase/Donation)
- Construct a `reference` (your internal): e.g. `NPSEPREP-ORDER-<orderId>` or `NPSEPREP-DON-<donationId>`
- Attach metadata: `order_id`, `donation_id`, `user_id`, `purpose`
- Persist:
  - Internal `payments` row with `initiated`
  - Store returned `monime_payment_id` and any checkout token/URL

### 7.4 Payment Verification
You must verify success in at least one of these ways:
1. **Webhook signature validation** (preferred if Monime supports), plus payload checks; OR
2. **Server-side fetch**: on webhook receive, call Monime API to retrieve payment by ID and confirm status, amount, and currency.

---

## 8. Webhook Processing Logic

### 8.1 Verification Steps
1. Validate request origin/signature (if available).
2. Parse payload.
3. Extract:
   - `event_id`
   - `event_type`
   - `monime_payment_id`
4. Insert into `webhook_events` (idempotency gate).
5. Retrieve internal `payments` row using `monime_payment_id`.
6. Fetch payment from Monime API (recommended) and cross-check:
   - status is `completed`
   - amount matches expected
   - currency matches expected
7. Transactionally update:
   - `payments.status`
   - `orders.status` or `donations.status`
   - create `entitlements` for purchases
8. Mark `webhook_events.processed_at` and `processing_status=processed`.

### 8.2 Failure Handling
- If payment is `failed`:
  - mark `payments.status=failed`
  - mark order/donation as failed
- If payload is missing required fields:
  - mark webhook_event as `ignored` and log.

### 8.3 Reconciliation
- Add a scheduled job (cron) to reconcile `pending/processing` payments older than N minutes/hours by querying Monime and updating statuses.

---

## 9. Frontend Integration (Minimal)

### Donation Button
- Calls backend: `POST /donations`
- Redirect user to `checkout_url`

### Purchase Button
- Calls backend: `POST /checkout/purchase`
- Redirect user to `checkout_url`

### Status Pages
- `/payment/success?orderId=...`
- `/payment/pending?orderId=...`
- `/payment/failed?orderId=...`
- Frontend polls `GET /orders/:id` for a short period (optional), but webhooks should do most of the work.

---

## 10. Security & Compliance

- Validate amounts server-side (never trust frontend amounts).
- Use HTTPS everywhere.
- Rate limit webhook endpoint.
- Store raw webhook payloads for audit (in `webhook_events.payload`).
- Never store card details; Monime should handle sensitive payment collection.
- Implement strict CORS rules.
- Rotate keys and use least-privileged tokens if Monime supports scopes.

---

## 11. Implementation Plan (Milestones)

### Milestone A — Foundations (Day 1–2)
- Node.js service scaffolding (Express)
- DB migrations (tables above)
- Monime client module
- Basic logging

### Milestone B — Donations (Day 3–4)
- `POST /donations`
- Create Monime payment
- Donation status endpoint
- Webhook receiver with idempotency
- Donation receipts (optional)

### Milestone C — Purchases & Entitlements (Day 5–7)
- Products seeded in DB
- Order creation + checkout
- Webhook fulfilment (entitlements)
- Access control middleware

### Milestone D — Hardening (Day 8–10)
- Reconciliation job
- Admin view of payments (optional)
- Error tracking + alerting
- Load testing of webhook endpoint

### Milestone E — Go Live (Day 11–12)
- Switch to live keys
- Real payment smoke tests
- Monitoring dashboards
- Rollback plan

---

## 12. Testing Strategy

### Unit Tests
- Monime client request builder
- Webhook handler (event parsing, idempotency, state transitions)

### Integration Tests
- Create order → create payment → simulate webhook → entitlement granted

### E2E Tests (Optional)
- Frontend checkout redirects
- Success/pending/failed flows

### Test Data
- Use Monime test tokens and environments.
- Seed products and run sample orders.

---

## 13. Operational Runbook (Minimum)

- How to rotate keys
- How to replay a webhook (from stored payload)
- How to reconcile stuck payments
- How to manually grant entitlement (admin fallback)
- Incident checklist (payment provider outage)

---

## 14. Deliverables

1. Backend service code:
   - `services/monimeClient.ts`
   - `routes/donations.ts`
   - `routes/checkout.ts`
   - `routes/webhooks.ts`
   - `jobs/reconcilePayments.ts`
2. DB migrations for tables.
3. Environment configuration templates (`.env.example`).
4. Automated tests.
5. This document: `TEP.md`.

---

## 15. Next Action (Recommended)

- Confirm which Monime flow you will use for checkout:
  - **Payment object with checkout URL**, or
  - **Payment Codes** (especially if you want lightweight donation links / QR codes)

Either way, the webhook + verification design above remains the same.

