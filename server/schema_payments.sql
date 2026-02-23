-- =============================================================
-- NPSE Prep — Payment Schema Migration
-- TEP Section 5: Data Model (PostgreSQL)
-- =============================================================

-- Custom ENUM types
DO $$ BEGIN
    CREATE TYPE product_type AS ENUM ('note_pack', 'topic_pack', 'mock_exam', 'subscription');
EXCEPTION WHEN duplicate_object THEN NULL;
END $$;

DO $$ BEGIN
    CREATE TYPE order_status AS ENUM ('created', 'pending_payment', 'paid', 'failed', 'cancelled', 'refunded');
EXCEPTION WHEN duplicate_object THEN NULL;
END $$;

DO $$ BEGIN
    CREATE TYPE donation_status AS ENUM ('created', 'pending_payment', 'paid', 'failed', 'refunded');
EXCEPTION WHEN duplicate_object THEN NULL;
END $$;

DO $$ BEGIN
    CREATE TYPE payment_status AS ENUM ('initiated', 'pending', 'processing', 'completed', 'failed', 'cancelled', 'refunded');
EXCEPTION WHEN duplicate_object THEN NULL;
END $$;

DO $$ BEGIN
    CREATE TYPE payment_purpose AS ENUM ('donation', 'purchase');
EXCEPTION WHEN duplicate_object THEN NULL;
END $$;

DO $$ BEGIN
    CREATE TYPE webhook_processing_status AS ENUM ('received', 'processed', 'ignored', 'failed');
EXCEPTION WHEN duplicate_object THEN NULL;
END $$;


-- =============================================================
-- Products
-- =============================================================
CREATE TABLE IF NOT EXISTS products (
    id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    slug            TEXT NOT NULL UNIQUE,
    name            TEXT NOT NULL,
    description     TEXT,
    price_amount    NUMERIC(12,2) NOT NULL DEFAULT 0,
    price_currency  TEXT NOT NULL DEFAULT 'SLE',
    product_type    product_type NOT NULL DEFAULT 'note_pack',
    is_active       BOOLEAN NOT NULL DEFAULT true,
    created_at      TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at      TIMESTAMPTZ NOT NULL DEFAULT NOW()
);


-- =============================================================
-- Orders
-- =============================================================
CREATE TABLE IF NOT EXISTS orders (
    id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id         UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    status          order_status NOT NULL DEFAULT 'created',
    total_amount    NUMERIC(12,2) NOT NULL DEFAULT 0,
    currency        TEXT NOT NULL DEFAULT 'SLE',
    created_at      TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at      TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_orders_user_id ON orders(user_id);
CREATE INDEX IF NOT EXISTS idx_orders_status  ON orders(status);


-- =============================================================
-- Order Items
-- =============================================================
CREATE TABLE IF NOT EXISTS order_items (
    id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    order_id        UUID NOT NULL REFERENCES orders(id) ON DELETE CASCADE,
    product_id      UUID NOT NULL REFERENCES products(id) ON DELETE RESTRICT,
    unit_amount     NUMERIC(12,2) NOT NULL DEFAULT 0,
    quantity        INTEGER NOT NULL DEFAULT 1,
    created_at      TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_order_items_order_id ON order_items(order_id);


-- =============================================================
-- Donations
-- =============================================================
CREATE TABLE IF NOT EXISTS donations (
    id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id         UUID REFERENCES users(id) ON DELETE SET NULL,
    donor_name      TEXT,
    donor_email     TEXT,
    amount          NUMERIC(12,2) NOT NULL,
    currency        TEXT NOT NULL DEFAULT 'SLE',
    status          donation_status NOT NULL DEFAULT 'created',
    message         TEXT,
    created_at      TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at      TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_donations_user_id ON donations(user_id);
CREATE INDEX IF NOT EXISTS idx_donations_status  ON donations(status);


-- =============================================================
-- Payments (internal ledger, maps to Monime payment objects)
-- =============================================================
CREATE TABLE IF NOT EXISTS payments (
    id                  UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    monime_payment_id   TEXT UNIQUE,
    purpose             payment_purpose NOT NULL,
    donation_id         UUID REFERENCES donations(id) ON DELETE SET NULL,
    order_id            UUID REFERENCES orders(id) ON DELETE SET NULL,
    amount              NUMERIC(12,2) NOT NULL,
    currency            TEXT NOT NULL DEFAULT 'SLE',
    status              payment_status NOT NULL DEFAULT 'initiated',
    provider_channel    TEXT,
    reference           TEXT UNIQUE,
    checkout_url        TEXT,
    created_at          TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at          TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_payments_monime_id   ON payments(monime_payment_id);
CREATE INDEX IF NOT EXISTS idx_payments_reference    ON payments(reference);
CREATE INDEX IF NOT EXISTS idx_payments_order_id     ON payments(order_id);
CREATE INDEX IF NOT EXISTS idx_payments_donation_id  ON payments(donation_id);
CREATE INDEX IF NOT EXISTS idx_payments_status       ON payments(status);


-- =============================================================
-- Entitlements (grants user access to purchased products)
-- =============================================================
CREATE TABLE IF NOT EXISTS entitlements (
    id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id         UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    product_id      UUID NOT NULL REFERENCES products(id) ON DELETE CASCADE,
    source_order_id UUID REFERENCES orders(id) ON DELETE SET NULL,
    starts_at       TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    expires_at      TIMESTAMPTZ,
    created_at      TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_entitlements_user_id    ON entitlements(user_id);
CREATE INDEX IF NOT EXISTS idx_entitlements_product_id ON entitlements(product_id);
CREATE UNIQUE INDEX IF NOT EXISTS idx_entitlements_user_product
    ON entitlements(user_id, product_id)
    WHERE expires_at IS NULL OR expires_at > NOW();


-- =============================================================
-- Webhook Events (idempotency + audit trail)
-- =============================================================
CREATE TABLE IF NOT EXISTS webhook_events (
    id                  UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    provider            TEXT NOT NULL DEFAULT 'monime',
    event_id            TEXT NOT NULL UNIQUE,
    event_type          TEXT NOT NULL,
    payload             JSONB NOT NULL,
    received_at         TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    processed_at        TIMESTAMPTZ,
    processing_status   webhook_processing_status NOT NULL DEFAULT 'received'
);

CREATE INDEX IF NOT EXISTS idx_webhook_events_event_id ON webhook_events(event_id);
CREATE INDEX IF NOT EXISTS idx_webhook_events_status   ON webhook_events(processing_status);


-- =============================================================
-- Updated-at trigger function (reusable)
-- =============================================================
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Apply trigger to tables with updated_at
DO $$ BEGIN
    CREATE TRIGGER set_products_updated_at   BEFORE UPDATE ON products   FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
EXCEPTION WHEN duplicate_object THEN NULL; END $$;

DO $$ BEGIN
    CREATE TRIGGER set_orders_updated_at     BEFORE UPDATE ON orders     FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
EXCEPTION WHEN duplicate_object THEN NULL; END $$;

DO $$ BEGIN
    CREATE TRIGGER set_donations_updated_at  BEFORE UPDATE ON donations  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
EXCEPTION WHEN duplicate_object THEN NULL; END $$;

DO $$ BEGIN
    CREATE TRIGGER set_payments_updated_at   BEFORE UPDATE ON payments   FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
EXCEPTION WHEN duplicate_object THEN NULL; END $$;


-- =============================================================
-- Seed: Sample products
-- =============================================================
INSERT INTO products (slug, name, description, price_amount, price_currency, product_type)
VALUES
    ('math-notes-pack',      'Mathematics Notes Pack',       'Full access to all Mathematics unit notes',                    50.00, 'SLE', 'note_pack'),
    ('english-notes-pack',   'English Language Notes Pack',  'Full access to all English Language unit notes',               50.00, 'SLE', 'note_pack'),
    ('gp-notes-pack',        'General Paper Notes Pack',     'Full access to all General Paper unit notes',                  50.00, 'SLE', 'note_pack'),
    ('full-notes-bundle',    'Complete Notes Bundle',        'Access all subject notes across the entire curriculum',       150.00, 'SLE', 'note_pack'),
    ('mock-exam-pack',       'Mock Exam Pack',               '10 full mock NPSE exams with detailed breakdowns',           100.00, 'SLE', 'mock_exam'),
    ('premium-subscription', 'Premium Subscription',         'Unlimited access to all notes, quizzes, and mock exams',     200.00, 'SLE', 'subscription')
ON CONFLICT (slug) DO NOTHING;
