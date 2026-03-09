-- src/db/schema.sql
-- Run once against a fresh database: psql $DATABASE_URL -f src/db/schema.sql

CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- ─── Users ────────────────────────────────────────────────────────────────────

CREATE TABLE IF NOT EXISTS users (
  id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  username        VARCHAR(50)  UNIQUE NOT NULL,
  email           VARCHAR(255) UNIQUE NOT NULL,
  password_hash   TEXT NOT NULL,

  -- Email verification
  is_verified     BOOLEAN DEFAULT FALSE,
  -- Manual or automated account lock
  is_locked       BOOLEAN DEFAULT FALSE,
  -- Consecutive failed login counter — reset on successful login
  failed_attempts INT DEFAULT 0,
  -- Null = permanent lock; set = temporary lock expires at this time
  locked_until    TIMESTAMPTZ,

  last_login      TIMESTAMPTZ,
  created_at      TIMESTAMPTZ DEFAULT NOW(),
  updated_at      TIMESTAMPTZ DEFAULT NOW()
);

-- ─── Email Verification Tokens ────────────────────────────────────────────────
-- Single-use tokens sent when user registers or requests re-verification.
-- Only the SHA-256 hash is stored — raw token travels only in the email link.

CREATE TABLE IF NOT EXISTS email_verification_tokens (
  id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id     UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  token_hash  TEXT NOT NULL UNIQUE,
  expires_at  TIMESTAMPTZ NOT NULL,
  used        BOOLEAN DEFAULT FALSE,
  created_at  TIMESTAMPTZ DEFAULT NOW()
);

-- ─── Password Reset Tokens ────────────────────────────────────────────────────
-- Short-lived (15 min), single-use tokens for password reset.
-- Same hash-only storage pattern as email verification tokens.

CREATE TABLE IF NOT EXISTS password_reset_tokens (
  id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id     UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  token_hash  TEXT NOT NULL UNIQUE,
  expires_at  TIMESTAMPTZ NOT NULL,
  used        BOOLEAN DEFAULT FALSE,
  created_at  TIMESTAMPTZ DEFAULT NOW()
);

-- ─── Refresh Tokens ───────────────────────────────────────────────────────────
-- Long-lived session tokens. Rotated on every use. Hashed in storage.

CREATE TABLE IF NOT EXISTS refresh_tokens (
  id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id     UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  token_hash  TEXT NOT NULL UNIQUE,
  expires_at  TIMESTAMPTZ NOT NULL,
  revoked     BOOLEAN DEFAULT FALSE,
  created_at  TIMESTAMPTZ DEFAULT NOW()
);

-- ─── Login Audit Log ──────────────────────────────────────────────────────────
-- Immutable record of every login attempt. Used for forensics and abuse detection.
-- user_id SET NULL on user deletion to preserve the audit trail.

CREATE TABLE IF NOT EXISTS login_audit (
  id             UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id        UUID REFERENCES users(id) ON DELETE SET NULL,
  ip_address     INET,
  user_agent     TEXT,
  success        BOOLEAN NOT NULL,
  failure_reason TEXT,
  created_at     TIMESTAMPTZ DEFAULT NOW()
);

-- ─── Indexes ──────────────────────────────────────────────────────────────────

CREATE INDEX IF NOT EXISTS idx_users_username    ON users(username);
CREATE INDEX IF NOT EXISTS idx_users_email       ON users(email);

CREATE INDEX IF NOT EXISTS idx_email_verify_user ON email_verification_tokens(user_id);
CREATE INDEX IF NOT EXISTS idx_email_verify_hash ON email_verification_tokens(token_hash);

CREATE INDEX IF NOT EXISTS idx_pw_reset_user     ON password_reset_tokens(user_id);
CREATE INDEX IF NOT EXISTS idx_pw_reset_hash     ON password_reset_tokens(token_hash);

CREATE INDEX IF NOT EXISTS idx_refresh_user      ON refresh_tokens(user_id);
CREATE INDEX IF NOT EXISTS idx_refresh_hash      ON refresh_tokens(token_hash);

CREATE INDEX IF NOT EXISTS idx_audit_user        ON login_audit(user_id);
CREATE INDEX IF NOT EXISTS idx_audit_ip          ON login_audit(ip_address);
CREATE INDEX IF NOT EXISTS idx_audit_created     ON login_audit(created_at);
