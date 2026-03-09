# Authentication Implementation Guide
### Node.js + Express + PostgreSQL — Production Reference v2

> **Purpose:** Living reference for a secure, production-grade authentication system. Covers every layer — database design, password security, session management, email verification, password reset, rate limiting, and audit logging — with full reasoning behind each decision.

---

## Table of Contents

1. [Architecture Overview](#1-architecture-overview)
2. [Project Structure](#2-project-structure)
3. [Technology Decisions & Reasoning](#3-technology-decisions--reasoning)
4. [Database Schema](#4-database-schema)
5. [Configuration](#5-configuration)
6. [Database Layer](#6-database-layer)
7. [Models](#7-models)
8. [Utilities](#8-utilities)
9. [Services](#9-services)
10. [Controllers](#10-controllers)
11. [Middleware](#11-middleware)
12. [Routes](#12-routes)
13. [App Entry Point](#13-app-entry-point)
14. [API Reference](#14-api-reference)
15. [Security Checklist](#15-security-checklist)
16. [Attack Surface & Mitigations](#16-attack-surface--mitigations)
17. [What We Are Not Doing Yet](#17-what-we-are-not-doing-yet-future-iterations)

---

## 1. Architecture Overview

```
Client
  │
  ├── POST /api/auth/register            → Validate → Hash pw → Create user → Send verify email
  ├── GET  /api/auth/verify-email?token  → Validate token → Mark user verified
  ├── POST /api/auth/resend-verification → Rate limit → Re-send verify email
  │
  ├── POST /api/auth/login               → Rate limit → Verify pw → Check verified → Issue tokens
  ├── POST /api/auth/refresh             → Rotate refresh token → Issue new access token
  ├── POST /api/auth/logout              → Revoke refresh token
  ├── POST /api/auth/logout-all          → Revoke all refresh tokens for user
  │
  ├── POST /api/auth/forgot-password     → Rate limit → Send reset email
  ├── POST /api/auth/reset-password      → Validate token → Hash new pw → Revoke all sessions
  │
  └── GET  /api/me                       → [requireAuth] → Return user info
```

### Layered Architecture

```
Routes → Middleware → Controllers → Services → Models → DB
                                  ↘         ↘
                               Utils     EmailService
```

| Layer | Responsibility |
|---|---|
| **Routes** | Map HTTP verbs + paths to controller functions |
| **Middleware** | Rate limiting, JWT verification, input validation |
| **Controllers** | Translate HTTP ↔ service calls. No business logic. |
| **Services** | All business logic. No HTTP concepts (req/res). |
| **Models** | All SQL queries. No business logic. |
| **Utils** | Pure functions — token generation, hashing, expiry |
| **Config** | Single source of truth for all environment variables |

### Token Strategy

| Token | Storage | Lifetime | Purpose |
|---|---|---|---|
| Access Token (JWT) | Client memory / Authorization header | 15 minutes | Authenticate API requests |
| Refresh Token (opaque) | HttpOnly Cookie | 30 days | Obtain new access tokens silently |
| Email Verify Token | Email link only | 24 hours | Confirm email ownership |
| Password Reset Token | Email link only | 15 minutes | Authorise password change |

---

## 2. Project Structure

```
auth-service/
├── package.json
├── .env                          ← Never commit
├── .env.example                  ← Commit this
├── .gitignore
└── src/
    ├── app.js
    ├── config/
    │   └── index.js              ← Env config with fail-fast validation
    ├── db/
    │   ├── index.js              ← pg Pool instance
    │   ├── schema.sql            ← Run once to set up DB
    │   └── migrate.js            ← Migration runner
    ├── models/
    │   ├── userModel.js          ← All SQL for users table
    │   ├── tokenModel.js         ← All SQL for token tables
    │   └── auditModel.js         ← Write-only audit log
    ├── services/
    │   ├── authService.js        ← Core auth business logic
    │   └── emailService.js       ← Nodemailer email sending
    ├── controllers/
    │   └── authController.js     ← HTTP ↔ service translation
    ├── middleware/
    │   ├── auth.js               ← JWT verification (requireAuth)
    │   ├── rateLimiter.js        ← Rate limiting configs
    │   └── validators.js         ← Input validation rule chains
    ├── routes/
    │   └── auth.js               ← Route definitions
    └── utils/
        └── tokens.js             ← Token generation and hashing
```

---

## 3. Technology Decisions & Reasoning

### Password Hashing: Argon2id

**Chosen over:** bcrypt, scrypt, PBKDF2

Winner of the Password Hashing Competition (2015) and the current OWASP recommendation.

- **Memory-hard** — forces attackers to use large amounts of RAM per attempt, making GPU/ASIC attacks prohibitively expensive
- **Time-hard** — configurable iteration count
- **Side-channel resistant** — the `id` variant combines protections from Argon2i and Argon2d

bcrypt is still acceptable but has a 72-character password limit and is not memory-hard. PBKDF2 is the weakest modern option.

```
memoryCost: 65536  (64MB — ~200ms target on a modern server)
timeCost: 3
parallelism: 4
```

### JWTs: Short-Lived Access Tokens Only

JWTs are stateless — no DB lookup required per request. However, they cannot be revoked without a denylist. This is why:
- Access tokens are **short-lived (15 minutes)**
- Long-term sessions use **stateful refresh tokens** stored in the DB

Never use JWTs as long-lived session tokens.

**Secret management:** Generate with `node -e "console.log(require('crypto').randomBytes(64).toString('hex'))"`. Rotate by issuing a new secret and allowing a grace period for old tokens to expire.

### Refresh Tokens: Opaque + Hashed in DB

A 64-byte cryptographically random hex string (`crypto.randomBytes(64)`). Only its SHA-256 hash is stored. If the DB is breached, raw tokens are unknown and useless.

**Rotation:** Every use revokes the old token and issues a new one atomically. Presenting a revoked token triggers `REFRESH_TOKEN_REUSE_DETECTED` — a strong signal of theft.

### Email Verification

Prevents fake account creation, enables security alerts, confirms email ownership. Same hash-only storage as refresh tokens. Tokens are single-use, 24-hour expiry, with previous tokens invalidated on re-issue. Login is blocked until the email is verified.

### Password Reset

15-minute expiry narrows the attack window. Single-use prevents replay. On success, **all sessions are revoked** — if an attacker triggered the reset, they are immediately logged out. A "password changed" notification is always sent to alert the legitimate user.

### Email Transport: Nodemailer

Framework-agnostic SMTP library. In development use [Mailtrap](https://mailtrap.io) — a free sandbox that captures emails without sending them to real inboxes. In production, swap SMTP credentials for SendGrid / Postmark / AWS SES — the application code does not change.

### Rate Limiting: Three-Tier Strategy

| Limiter | Window | Max | Applied to |
|---|---|---|---|
| `apiLimiter` | 15 min | 100 | All routes |
| `authLimiter` | 15 min | 10 (failures only) | `/login`, `/register` |
| `sensitiveActionLimiter` | 1 hour | 3 | `/forgot-password`, `/resend-verification` |

IP-based limiting alone is bypassable via distributed attacks. Per-account DB lockout covers that. `skipSuccessfulRequests: true` ensures legitimate users are never penalised for successful logins.

---

## 4. Database Schema

```sql
-- src/db/schema.sql — run with: node src/db/migrate.js

CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- Users
CREATE TABLE IF NOT EXISTS users (
  id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  username        VARCHAR(50)  UNIQUE NOT NULL,
  email           VARCHAR(255) UNIQUE NOT NULL,
  password_hash   TEXT NOT NULL,
  is_verified     BOOLEAN DEFAULT FALSE,
  is_locked       BOOLEAN DEFAULT FALSE,
  failed_attempts INT DEFAULT 0,
  locked_until    TIMESTAMPTZ,   -- NULL + is_locked = permanent; set = temporary
  last_login      TIMESTAMPTZ,
  created_at      TIMESTAMPTZ DEFAULT NOW(),
  updated_at      TIMESTAMPTZ DEFAULT NOW()
);

-- Email verification tokens (single-use, 24h expiry)
-- Only the hash is stored — raw token travels in the email link only
CREATE TABLE IF NOT EXISTS email_verification_tokens (
  id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id     UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  token_hash  TEXT NOT NULL UNIQUE,
  expires_at  TIMESTAMPTZ NOT NULL,
  used        BOOLEAN DEFAULT FALSE,
  created_at  TIMESTAMPTZ DEFAULT NOW()
);

-- Password reset tokens (single-use, 15min expiry)
CREATE TABLE IF NOT EXISTS password_reset_tokens (
  id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id     UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  token_hash  TEXT NOT NULL UNIQUE,
  expires_at  TIMESTAMPTZ NOT NULL,
  used        BOOLEAN DEFAULT FALSE,
  created_at  TIMESTAMPTZ DEFAULT NOW()
);

-- Refresh tokens (rotated on every use, 30 day expiry)
CREATE TABLE IF NOT EXISTS refresh_tokens (
  id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id     UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  token_hash  TEXT NOT NULL UNIQUE,
  expires_at  TIMESTAMPTZ NOT NULL,
  revoked     BOOLEAN DEFAULT FALSE,
  created_at  TIMESTAMPTZ DEFAULT NOW()
);

-- Immutable login audit log
CREATE TABLE IF NOT EXISTS login_audit (
  id             UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id        UUID REFERENCES users(id) ON DELETE SET NULL,  -- preserved after user deletion
  ip_address     INET,
  user_agent     TEXT,
  success        BOOLEAN NOT NULL,
  failure_reason TEXT,    -- USER_NOT_FOUND | WRONG_PASSWORD | ACCOUNT_LOCKED | EMAIL_NOT_VERIFIED
  created_at     TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_users_username    ON users(username);
CREATE INDEX IF NOT EXISTS idx_users_email       ON users(email);
CREATE INDEX IF NOT EXISTS idx_email_verify_hash ON email_verification_tokens(token_hash);
CREATE INDEX IF NOT EXISTS idx_pw_reset_hash     ON password_reset_tokens(token_hash);
CREATE INDEX IF NOT EXISTS idx_refresh_hash      ON refresh_tokens(token_hash);
CREATE INDEX IF NOT EXISTS idx_refresh_user      ON refresh_tokens(user_id);
CREATE INDEX IF NOT EXISTS idx_audit_user        ON login_audit(user_id);
CREATE INDEX IF NOT EXISTS idx_audit_ip          ON login_audit(ip_address);
CREATE INDEX IF NOT EXISTS idx_audit_created     ON login_audit(created_at);
```

**Schema design decisions:**
- **UUID primary keys** — not sequential integers. Sequential IDs are enumerable; `gen_random_uuid()` is cryptographically random.
- **`INET` for IP addresses** — PostgreSQL native type; supports indexing, range queries, subnet operations.
- **`ON DELETE CASCADE`** on token tables — deleting a user automatically cleans up all tokens.
- **`ON DELETE SET NULL`** on audit log — preserves the security trail even after user deletion.
- **`locked_until` vs `is_locked`** — `is_locked` with no `locked_until` = permanent ban; with `locked_until` = auto-expiring lockout.

---

## 5. Configuration

```js
// src/config/index.js
// Fails fast at startup if required vars are missing.

require('dotenv').config();

function required(key) {
  const value = process.env[key];
  if (!value) throw new Error(`Missing required environment variable: ${key}`);
  return value;
}

function optional(key, defaultValue) {
  return process.env[key] || defaultValue;
}

const config = {
  env: optional('NODE_ENV', 'development'),
  port: parseInt(optional('PORT', '3000'), 10),
  appUrl: optional('APP_URL', 'http://localhost:3000'),
  isProduction: optional('NODE_ENV', 'development') === 'production',

  db: {
    url: required('DATABASE_URL'),
    ssl: optional('NODE_ENV', 'development') === 'production',
  },

  jwt: {
    secret: required('JWT_SECRET'),
    accessExpiry: optional('JWT_ACCESS_EXPIRY', '15m'),
    refreshExpiryDays: parseInt(optional('JWT_REFRESH_EXPIRY_DAYS', '30'), 10),
  },

  email: {
    host: required('SMTP_HOST'),
    port: parseInt(optional('SMTP_PORT', '587'), 10),
    secure: optional('SMTP_SECURE', 'false') === 'true',
    user: required('SMTP_USER'),
    pass: required('SMTP_PASS'),
    from: optional('EMAIL_FROM', 'noreply@yourapp.com'),
    fromName: optional('EMAIL_FROM_NAME', 'YourApp'),
  },

  tokens: {
    emailVerifyExpiryHours: parseInt(optional('EMAIL_VERIFY_EXPIRY_HOURS', '24'), 10),
    passwordResetExpiryMinutes: parseInt(optional('PASSWORD_RESET_EXPIRY_MINUTES', '15'), 10),
  },

  auth: {
    maxFailedAttempts: 5,
    lockDurationMinutes: 15,
  },
};

module.exports = config;
```

```bash
# .env.example

NODE_ENV=development
PORT=3000
APP_URL=http://localhost:3000

DATABASE_URL=postgresql://user:password@localhost:5432/auth_db

# Generate with: node -e "console.log(require('crypto').randomBytes(64).toString('hex'))"
JWT_SECRET=your_256_bit_secret_here
JWT_ACCESS_EXPIRY=15m
JWT_REFRESH_EXPIRY_DAYS=30

# Development: Mailtrap (https://mailtrap.io) — captures emails, never sends to real inboxes
# Production: swap for SendGrid / Postmark / AWS SES
SMTP_HOST=smtp.mailtrap.io
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your_mailtrap_user
SMTP_PASS=your_mailtrap_pass
EMAIL_FROM=noreply@yourapp.com
EMAIL_FROM_NAME=YourApp

EMAIL_VERIFY_EXPIRY_HOURS=24
PASSWORD_RESET_EXPIRY_MINUTES=15
```

---

## 6. Database Layer

```js
// src/db/index.js
const { Pool } = require('pg');
const config = require('../config');

const pool = new Pool({
  connectionString: config.db.url,
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
  ssl: config.db.ssl ? { rejectUnauthorized: true } : false,
});

pool.on('error', (err) => {
  console.error('[DB] Unexpected pool error:', err);
  process.exit(-1);
});

module.exports = {
  query: (text, params) => pool.query(text, params),
  getClient: () => pool.connect(),  // Used for transactions
};
```

```js
// src/db/migrate.js — run with: node src/db/migrate.js
const fs = require('fs');
const path = require('path');
const { Pool } = require('pg');
require('dotenv').config();

async function migrate() {
  const pool = new Pool({ connectionString: process.env.DATABASE_URL });
  const sql = fs.readFileSync(path.join(__dirname, 'schema.sql'), 'utf8');
  try {
    await pool.query(sql);
    console.log('[migrate] Schema applied.');
  } catch (err) {
    console.error('[migrate] Failed:', err.message);
    process.exit(1);
  } finally {
    await pool.end();
  }
}
migrate();
```

**Why a connection pool?** Creating a new Postgres connection per request is expensive (TCP handshake, auth, memory). The pool reuses connections. `max: 20` is a safe default — tune against your DB's `max_connections` (typically 100 on managed services).

---

## 7. Models

Models own all SQL. Services call model functions — never write queries directly.

```js
// src/models/userModel.js
const db = require('../db');

const UserModel = {
  async findById(id) {
    const r = await db.query(
      `SELECT id, username, email, is_verified, is_locked, failed_attempts,
              locked_until, last_login, created_at FROM users WHERE id = $1`, [id]);
    return r.rows[0] || null;
  },

  async findByUsername(username) {
    const r = await db.query(
      `SELECT id, username, email, password_hash, is_verified,
              is_locked, failed_attempts, locked_until
       FROM users WHERE username = $1`, [username.toLowerCase()]);
    return r.rows[0] || null;
  },

  async findByEmail(email) {
    const r = await db.query(
      `SELECT id, username, email, password_hash, is_verified,
              is_locked, failed_attempts, locked_until
       FROM users WHERE email = $1`, [email.toLowerCase()]);
    return r.rows[0] || null;
  },

  async existsByUsernameOrEmail(username, email) {
    const r = await db.query(
      'SELECT id FROM users WHERE username = $1 OR email = $2',
      [username.toLowerCase(), email.toLowerCase()]);
    return r.rows.length > 0;
  },

  async create({ username, email, passwordHash }) {
    const r = await db.query(
      `INSERT INTO users (username, email, password_hash)
       VALUES ($1, $2, $3) RETURNING id, username, email, created_at`,
      [username.toLowerCase(), email.toLowerCase(), passwordHash]);
    return r.rows[0];
  },

  async recordFailedLogin(id, currentAttempts, maxAttempts, lockDurationMinutes) {
    const newAttempts = currentAttempts + 1;
    const shouldLock = newAttempts >= maxAttempts;
    await db.query(
      `UPDATE users SET failed_attempts=$1, is_locked=$2, locked_until=$3, updated_at=NOW() WHERE id=$4`,
      [newAttempts, shouldLock,
       shouldLock ? new Date(Date.now() + lockDurationMinutes * 60000) : null, id]);
  },

  async recordSuccessfulLogin(id) {
    await db.query(
      `UPDATE users SET failed_attempts=0, is_locked=FALSE, locked_until=NULL,
       last_login=NOW(), updated_at=NOW() WHERE id=$1`, [id]);
  },

  async updatePassword(id, passwordHash) {
    await db.query(
      `UPDATE users SET password_hash=$1, updated_at=NOW() WHERE id=$2`,
      [passwordHash, id]);
  },
};

module.exports = UserModel;
```

```js
// src/models/tokenModel.js
const db = require('../db');

const TokenModel = {
  // ── Refresh tokens ──────────────────────────────────────────────────────────

  async createRefreshToken(userId, tokenHash, expiresAt) {
    await db.query(
      `INSERT INTO refresh_tokens (user_id, token_hash, expires_at) VALUES ($1,$2,$3)`,
      [userId, tokenHash, expiresAt]);
  },

  async findRefreshToken(tokenHash) {
    const r = await db.query(
      `SELECT rt.id, rt.user_id, rt.expires_at, rt.revoked, u.username, u.is_locked
       FROM refresh_tokens rt JOIN users u ON u.id=rt.user_id WHERE rt.token_hash=$1`,
      [tokenHash]);
    return r.rows[0] || null;
  },

  async revokeRefreshToken(id) {
    await db.query('UPDATE refresh_tokens SET revoked=TRUE WHERE id=$1', [id]);
  },

  async revokeRefreshTokenByHash(tokenHash) {
    await db.query('UPDATE refresh_tokens SET revoked=TRUE WHERE token_hash=$1', [tokenHash]);
  },

  async revokeAllRefreshTokens(userId) {
    await db.query('UPDATE refresh_tokens SET revoked=TRUE WHERE user_id=$1', [userId]);
  },

  // ── Email verification tokens ───────────────────────────────────────────────

  async createEmailVerifyToken(userId, tokenHash, expiresAt) {
    // Invalidate previous unused tokens before issuing a new one
    await db.query(
      `UPDATE email_verification_tokens SET used=TRUE WHERE user_id=$1 AND used=FALSE`,
      [userId]);
    await db.query(
      `INSERT INTO email_verification_tokens (user_id, token_hash, expires_at) VALUES ($1,$2,$3)`,
      [userId, tokenHash, expiresAt]);
  },

  async findEmailVerifyToken(tokenHash) {
    const r = await db.query(
      `SELECT evt.id, evt.user_id, evt.expires_at, evt.used, u.email, u.is_verified
       FROM email_verification_tokens evt JOIN users u ON u.id=evt.user_id
       WHERE evt.token_hash=$1`, [tokenHash]);
    return r.rows[0] || null;
  },

  async markEmailVerifyTokenUsed(id) {
    await db.query('UPDATE email_verification_tokens SET used=TRUE WHERE id=$1', [id]);
  },

  // ── Password reset tokens ───────────────────────────────────────────────────

  async createPasswordResetToken(userId, tokenHash, expiresAt) {
    // Invalidate previous unused tokens before issuing a new one
    await db.query(
      `UPDATE password_reset_tokens SET used=TRUE WHERE user_id=$1 AND used=FALSE`,
      [userId]);
    await db.query(
      `INSERT INTO password_reset_tokens (user_id, token_hash, expires_at) VALUES ($1,$2,$3)`,
      [userId, tokenHash, expiresAt]);
  },

  async findPasswordResetToken(tokenHash) {
    const r = await db.query(
      `SELECT id, user_id, expires_at, used FROM password_reset_tokens WHERE token_hash=$1`,
      [tokenHash]);
    return r.rows[0] || null;
  },

  async markPasswordResetTokenUsed(id) {
    await db.query('UPDATE password_reset_tokens SET used=TRUE WHERE id=$1', [id]);
  },
};

module.exports = TokenModel;
```

```js
// src/models/auditModel.js
const db = require('../db');

const AuditModel = {
  async log(userId, ip, userAgent, success, reason = null) {
    try {
      await db.query(
        `INSERT INTO login_audit (user_id, ip_address, user_agent, success, failure_reason)
         VALUES ($1,$2,$3,$4,$5)`,
        [userId, ip, userAgent, success, reason]);
    } catch (err) {
      // Never crash auth flow on audit failure
      console.error('[AuditModel] Write failed:', err.message);
    }
  },
};

module.exports = AuditModel;
```

---

## 8. Utilities

```js
// src/utils/tokens.js
// Pure functions only — no DB access, no side effects, fully testable.

const crypto = require('crypto');
const jwt = require('jsonwebtoken');
const config = require('../config');

// Generates a cryptographically random hex string
function generateOpaqueToken(byteLength = 64) {
  return crypto.randomBytes(byteLength).toString('hex');
}

// One-way hash for DB storage — raw token never stored
function hashToken(token) {
  return crypto.createHash('sha256').update(token).digest('hex');
}

// Short-lived JWT carrying only non-sensitive identity
function generateAccessToken(user) {
  return jwt.sign(
    { sub: user.id, username: user.username },
    config.jwt.secret,
    { expiresIn: config.jwt.accessExpiry }
  );
}

function buildRefreshTokenExpiry() {
  return new Date(Date.now() + config.jwt.refreshExpiryDays * 24 * 60 * 60 * 1000);
}

function buildEmailVerifyExpiry() {
  return new Date(Date.now() + config.tokens.emailVerifyExpiryHours * 60 * 60 * 1000);
}

function buildPasswordResetExpiry() {
  return new Date(Date.now() + config.tokens.passwordResetExpiryMinutes * 60 * 1000);
}

module.exports = {
  generateOpaqueToken, hashToken, generateAccessToken,
  buildRefreshTokenExpiry, buildEmailVerifyExpiry, buildPasswordResetExpiry,
};
```

---

## 9. Services

### authService.js

```js
// src/services/authService.js
// All business logic. No HTTP concepts. Throws named Error objects.

const argon2 = require('argon2');
const db = require('../db');
const config = require('../config');
const UserModel = require('../models/userModel');
const TokenModel = require('../models/tokenModel');
const AuditModel = require('../models/auditModel');
const {
  generateOpaqueToken, hashToken, generateAccessToken,
  buildRefreshTokenExpiry, buildEmailVerifyExpiry, buildPasswordResetExpiry,
} = require('../utils/tokens');
const {
  sendVerificationEmail, sendPasswordResetEmail, sendPasswordChangedEmail,
} = require('./emailService');

const ARGON2_OPTIONS = { type: argon2.argon2id, memoryCost: 65536, timeCost: 3, parallelism: 4 };

// Pre-computed dummy hash — used when user not found to prevent timing attacks
let DUMMY_HASH;
(async () => { DUMMY_HASH = await argon2.hash('dummy_timing_protection', ARGON2_OPTIONS); })();

// ── Register ──────────────────────────────────────────────────────────────────

async function register({ username, email, password }) {
  if (await UserModel.existsByUsernameOrEmail(username, email))
    throw new Error('USERNAME_OR_EMAIL_TAKEN');

  const passwordHash = await argon2.hash(password, ARGON2_OPTIONS);
  const user = await UserModel.create({ username, email, passwordHash });

  const rawToken = generateOpaqueToken();
  await TokenModel.createEmailVerifyToken(user.id, hashToken(rawToken), buildEmailVerifyExpiry());
  await sendVerificationEmail(user, rawToken);

  return user;
}

// ── Resend Verification ───────────────────────────────────────────────────────

async function resendVerificationEmail(email) {
  const user = await UserModel.findByEmail(email);
  if (!user || user.is_verified) return; // Silent — never reveal existence

  const rawToken = generateOpaqueToken();
  await TokenModel.createEmailVerifyToken(user.id, hashToken(rawToken), buildEmailVerifyExpiry());
  await sendVerificationEmail(user, rawToken);
}

// ── Verify Email ──────────────────────────────────────────────────────────────

async function verifyEmail(rawToken) {
  const record = await TokenModel.findEmailVerifyToken(hashToken(rawToken));
  if (!record)                                  throw new Error('INVALID_TOKEN');
  if (record.used)                              throw new Error('TOKEN_ALREADY_USED');
  if (new Date(record.expires_at) < new Date()) throw new Error('TOKEN_EXPIRED');
  if (record.is_verified)                       throw new Error('ALREADY_VERIFIED');

  // Atomic: mark token used + mark user verified
  const client = await db.getClient();
  try {
    await client.query('BEGIN');
    await client.query('UPDATE email_verification_tokens SET used=TRUE WHERE id=$1', [record.id]);
    await client.query('UPDATE users SET is_verified=TRUE, updated_at=NOW() WHERE id=$1', [record.user_id]);
    await client.query('COMMIT');
  } catch (err) { await client.query('ROLLBACK'); throw err; }
  finally { client.release(); }
}

// ── Login ─────────────────────────────────────────────────────────────────────

async function login({ username, password, ip, userAgent }) {
  const user = await UserModel.findByUsername(username);

  // Always hash even when user doesn't exist — prevents timing-based username enumeration
  if (!user) {
    await argon2.verify(DUMMY_HASH, password).catch(() => {});
    await AuditModel.log(null, ip, userAgent, false, 'USER_NOT_FOUND');
    throw new Error('INVALID_CREDENTIALS');
  }

  const isLocked = user.is_locked && (!user.locked_until || new Date(user.locked_until) > new Date());
  if (isLocked) {
    await AuditModel.log(user.id, ip, userAgent, false, 'ACCOUNT_LOCKED');
    throw new Error('ACCOUNT_LOCKED');
  }

  if (!await argon2.verify(user.password_hash, password)) {
    await UserModel.recordFailedLogin(user.id, user.failed_attempts,
      config.auth.maxFailedAttempts, config.auth.lockDurationMinutes);
    await AuditModel.log(user.id, ip, userAgent, false, 'WRONG_PASSWORD');
    throw new Error('INVALID_CREDENTIALS');
  }

  // Block login until email is verified
  if (!user.is_verified) {
    await AuditModel.log(user.id, ip, userAgent, false, 'EMAIL_NOT_VERIFIED');
    throw new Error('EMAIL_NOT_VERIFIED');
  }

  await UserModel.recordSuccessfulLogin(user.id);
  await AuditModel.log(user.id, ip, userAgent, true, null);

  const accessToken = generateAccessToken(user);
  const rawRefresh = generateOpaqueToken();
  await TokenModel.createRefreshToken(user.id, hashToken(rawRefresh), buildRefreshTokenExpiry());

  return { accessToken, refreshToken: rawRefresh };
}

// ── Refresh ───────────────────────────────────────────────────────────────────

async function refreshAccessToken(rawRefreshToken) {
  const record = await TokenModel.findRefreshToken(hashToken(rawRefreshToken));
  if (!record)        throw new Error('INVALID_REFRESH_TOKEN');
  if (record.revoked) throw new Error('REFRESH_TOKEN_REUSE_DETECTED');
  if (new Date(record.expires_at) < new Date()) throw new Error('REFRESH_TOKEN_EXPIRED');
  if (record.is_locked) throw new Error('ACCOUNT_LOCKED');

  // Atomic token rotation
  const client = await db.getClient();
  let newRawToken;
  try {
    await client.query('BEGIN');
    await client.query('UPDATE refresh_tokens SET revoked=TRUE WHERE id=$1', [record.id]);
    newRawToken = generateOpaqueToken();
    await client.query(
      'INSERT INTO refresh_tokens (user_id, token_hash, expires_at) VALUES ($1,$2,$3)',
      [record.user_id, hashToken(newRawToken), buildRefreshTokenExpiry()]);
    await client.query('COMMIT');
  } catch (err) { await client.query('ROLLBACK'); throw err; }
  finally { client.release(); }

  return {
    accessToken: generateAccessToken({ id: record.user_id, username: record.username }),
    refreshToken: newRawToken,
  };
}

// ── Logout ────────────────────────────────────────────────────────────────────

async function logout(rawRefreshToken) {
  if (!rawRefreshToken) return;
  await TokenModel.revokeRefreshTokenByHash(hashToken(rawRefreshToken));
}

async function logoutAll(userId) {
  await TokenModel.revokeAllRefreshTokens(userId);
}

// ── Forgot Password ───────────────────────────────────────────────────────────

async function forgotPassword(email) {
  const user = await UserModel.findByEmail(email);
  if (!user) return; // Silent — never reveal whether the email exists

  const rawToken = generateOpaqueToken();
  await TokenModel.createPasswordResetToken(user.id, hashToken(rawToken), buildPasswordResetExpiry());
  await sendPasswordResetEmail(user, rawToken);
}

// ── Reset Password ────────────────────────────────────────────────────────────

async function resetPassword(rawToken, newPassword) {
  const record = await TokenModel.findPasswordResetToken(hashToken(rawToken));
  if (!record)                                  throw new Error('INVALID_TOKEN');
  if (record.used)                              throw new Error('TOKEN_ALREADY_USED');
  if (new Date(record.expires_at) < new Date()) throw new Error('TOKEN_EXPIRED');

  const user = await UserModel.findById(record.user_id);
  if (!user) throw new Error('INVALID_TOKEN');

  const passwordHash = await argon2.hash(newPassword, ARGON2_OPTIONS);

  // Atomic: mark token used + update password + revoke ALL sessions
  const client = await db.getClient();
  try {
    await client.query('BEGIN');
    await client.query('UPDATE password_reset_tokens SET used=TRUE WHERE id=$1', [record.id]);
    await client.query('UPDATE users SET password_hash=$1, updated_at=NOW() WHERE id=$2', [passwordHash, record.user_id]);
    await client.query('UPDATE refresh_tokens SET revoked=TRUE WHERE user_id=$1', [record.user_id]);
    await client.query('COMMIT');
  } catch (err) { await client.query('ROLLBACK'); throw err; }
  finally { client.release(); }

  // Notify user — even if they didn't initiate the reset
  await sendPasswordChangedEmail(user).catch(err =>
    console.error('[authService] Password change notification failed:', err.message));
}

module.exports = {
  register, resendVerificationEmail, verifyEmail,
  login, refreshAccessToken, logout, logoutAll,
  forgotPassword, resetPassword,
};
```

### emailService.js

```js
// src/services/emailService.js
// Nodemailer SMTP. Swap .env to change provider — no code changes needed.
// Development: Mailtrap. Production: SendGrid / Postmark / AWS SES.

const nodemailer = require('nodemailer');
const config = require('../config');

const transport = nodemailer.createTransport({
  host: config.email.host, port: config.email.port,
  secure: config.email.secure,
  auth: { user: config.email.user, pass: config.email.pass },
});

const FROM = `"${config.email.fromName}" <${config.email.from}>`;

async function sendVerificationEmail(user, token) {
  const url = `${config.appUrl}/api/auth/verify-email?token=${token}`;
  await transport.sendMail({
    from: FROM, to: user.email,
    subject: 'Verify your email address',
    text: `Hi ${user.username},\n\nVerify your email: ${url}\n\nExpires in ${config.tokens.emailVerifyExpiryHours} hours.\n\nIf you did not register, ignore this email.`,
    html: `
      <div style="font-family:Arial,sans-serif;max-width:560px;margin:0 auto">
        <h2>Verify your email address</h2>
        <p>Hi <strong>${user.username}</strong>,</p>
        <p>Thank you for registering. Click the button below to verify your email.</p>
        <p style="margin:32px 0">
          <a href="${url}" style="background:#4F46E5;color:white;padding:12px 24px;
             text-decoration:none;border-radius:6px;font-weight:bold">
            Verify Email Address
          </a>
        </p>
        <p style="color:#666;font-size:14px">
          Expires in <strong>${config.tokens.emailVerifyExpiryHours} hours</strong>.
          If you did not register, ignore this email.
        </p>
        <p style="color:#999;font-size:12px">Or copy this link: <a href="${url}">${url}</a></p>
      </div>`,
  });
}

async function sendPasswordResetEmail(user, token) {
  const url = `${config.appUrl}/api/auth/reset-password?token=${token}`;
  await transport.sendMail({
    from: FROM, to: user.email,
    subject: 'Reset your password',
    text: `Hi ${user.username},\n\nReset your password: ${url}\n\nExpires in ${config.tokens.passwordResetExpiryMinutes} minutes. Single use only.\n\nIf you did not request this, ignore this email.`,
    html: `
      <div style="font-family:Arial,sans-serif;max-width:560px;margin:0 auto">
        <h2>Reset your password</h2>
        <p>Hi <strong>${user.username}</strong>,</p>
        <p>We received a request to reset your password.</p>
        <p style="margin:32px 0">
          <a href="${url}" style="background:#4F46E5;color:white;padding:12px 24px;
             text-decoration:none;border-radius:6px;font-weight:bold">
            Reset Password
          </a>
        </p>
        <p style="color:#e53e3e;font-size:14px">
          ⚠️ Expires in <strong>${config.tokens.passwordResetExpiryMinutes} minutes</strong>. Single use only.
        </p>
        <p style="color:#666;font-size:14px">
          If you did not request this, ignore this email. Your password has not changed.
        </p>
        <p style="color:#999;font-size:12px">Or copy this link: <a href="${url}">${url}</a></p>
      </div>`,
  });
}

// Always sent when password changes — alerts user if they didn't initiate it
async function sendPasswordChangedEmail(user) {
  await transport.sendMail({
    from: FROM, to: user.email,
    subject: 'Your password has been changed',
    text: `Hi ${user.username},\n\nYour password was changed. If this was not you, reset your password immediately and contact support.`,
    html: `
      <div style="font-family:Arial,sans-serif;max-width:560px;margin:0 auto">
        <h2>Password changed</h2>
        <p>Hi <strong>${user.username}</strong>,</p>
        <p>Your password was successfully changed.</p>
        <p style="color:#e53e3e;font-size:14px">
          ⚠️ If you did not make this change, your account may be compromised.
          Please reset your password immediately and contact support.
        </p>
      </div>`,
  });
}

module.exports = { sendVerificationEmail, sendPasswordResetEmail, sendPasswordChangedEmail };
```

---

## 10. Controllers

```js
// src/controllers/authController.js
// HTTP ↔ service translation only. No SQL. No business logic.
// Maps domain errors to HTTP status codes.

const authService = require('../services/authService');

const REFRESH_COOKIE = (isProd) => ({
  httpOnly: true, secure: isProd, sameSite: 'strict',
  maxAge: 30 * 24 * 60 * 60 * 1000,
});

const TOKEN_ERRORS = {
  INVALID_TOKEN:      [400, 'This link is invalid.'],
  TOKEN_ALREADY_USED: [400, 'This link has already been used.'],
  TOKEN_EXPIRED:      [400, 'This link has expired. Please request a new one.'],
  ALREADY_VERIFIED:   [400, 'This email is already verified.'],
};

async function register(req, res, next) {
  try {
    const user = await authService.register(req.body);
    res.status(201).json({ message: 'Account created. Please verify your email.', userId: user.id });
  } catch (err) {
    if (err.message === 'USERNAME_OR_EMAIL_TAKEN')
      return res.status(409).json({ error: 'An account with that username or email already exists.' });
    next(err);
  }
}

async function resendVerification(req, res, next) {
  try {
    await authService.resendVerificationEmail(req.body.email);
    res.json({ message: 'If that email is registered and unverified, a new link has been sent.' });
  } catch (err) { next(err); }
}

async function verifyEmail(req, res, next) {
  try {
    await authService.verifyEmail(req.query.token);
    res.json({ message: 'Email verified. You can now log in.' });
  } catch (err) {
    const [status, message] = TOKEN_ERRORS[err.message] || [];
    if (status) return res.status(status).json({ error: message });
    next(err);
  }
}

async function login(req, res, next) {
  try {
    const { accessToken, refreshToken } = await authService.login({
      ...req.body, ip: req.ip, userAgent: req.headers['user-agent'] || 'unknown',
    });
    res.cookie('refreshToken', refreshToken, REFRESH_COOKIE(req.app.get('isProduction')));
    res.json({ accessToken });
  } catch (err) {
    if (err.message === 'ACCOUNT_LOCKED')
      return res.status(423).json({ error: 'Account locked. Try again in 15 minutes.' });
    if (err.message === 'EMAIL_NOT_VERIFIED')
      return res.status(403).json({ error: 'Please verify your email before logging in.', code: 'EMAIL_NOT_VERIFIED' });
    if (err.message === 'INVALID_CREDENTIALS')
      return res.status(401).json({ error: 'Invalid username or password.' });
    next(err);
  }
}

async function refresh(req, res, next) {
  const raw = req.cookies?.refreshToken;
  if (!raw) return res.status(401).json({ error: 'No refresh token.' });
  try {
    const { accessToken, refreshToken } = await authService.refreshAccessToken(raw);
    res.cookie('refreshToken', refreshToken, REFRESH_COOKIE(req.app.get('isProduction')));
    res.json({ accessToken });
  } catch (err) {
    res.clearCookie('refreshToken');
    if (err.message === 'REFRESH_TOKEN_REUSE_DETECTED')
      return res.status(401).json({ error: 'Session invalidated. Please log in again.' });
    res.status(401).json({ error: 'Session expired. Please log in again.' });
  }
}

async function logout(req, res, next) {
  try {
    await authService.logout(req.cookies?.refreshToken);
    res.clearCookie('refreshToken');
    res.json({ message: 'Logged out.' });
  } catch (err) { next(err); }
}

async function logoutAll(req, res, next) {
  try {
    await authService.logoutAll(req.user.id);
    res.clearCookie('refreshToken');
    res.json({ message: 'All sessions terminated.' });
  } catch (err) { next(err); }
}

async function forgotPassword(req, res, next) {
  try {
    await authService.forgotPassword(req.body.email);
    res.json({ message: 'If an account with that email exists, a reset link has been sent.' });
  } catch (err) { next(err); }
}

async function resetPassword(req, res, next) {
  try {
    await authService.resetPassword(req.query.token, req.body.password);
    res.json({ message: 'Password reset. Please log in with your new password.' });
  } catch (err) {
    const [status, message] = TOKEN_ERRORS[err.message] || [];
    if (status) return res.status(status).json({ error: message });
    next(err);
  }
}

module.exports = {
  register, resendVerification, verifyEmail,
  login, refresh, logout, logoutAll,
  forgotPassword, resetPassword,
};
```

---

## 11. Middleware

### auth.js — JWT Verification

```js
// src/middleware/auth.js
const jwt = require('jsonwebtoken');
const config = require('../config');

function requireAuth(req, res, next) {
  const authHeader = req.headers.authorization;
  if (!authHeader?.startsWith('Bearer '))
    return res.status(401).json({ error: 'Missing or invalid Authorization header.' });

  try {
    const payload = jwt.verify(authHeader.split(' ')[1], config.jwt.secret);
    req.user = { id: payload.sub, username: payload.username };
    next();
  } catch (err) {
    if (err.name === 'TokenExpiredError')
      // Client should call POST /api/auth/refresh, then retry the original request
      return res.status(401).json({ error: 'TOKEN_EXPIRED' });
    res.status(401).json({ error: 'Invalid token.' });
  }
}

module.exports = { requireAuth };
```

### rateLimiter.js

```js
// src/middleware/rateLimiter.js
const rateLimit = require('express-rate-limit');

// Global — all routes
const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, max: 100,
  standardHeaders: true, legacyHeaders: false,
  message: { error: 'Too many requests.' },
});

// Auth endpoints — failures only
const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, max: 10,
  skipSuccessfulRequests: true,  // Legit users never penalised
  standardHeaders: true, legacyHeaders: false,
  message: { error: 'Too many failed attempts. Try again in 15 minutes.' },
});

// Password reset and resend-verification — extra strict
const sensitiveActionLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, max: 3,
  standardHeaders: true, legacyHeaders: false,
  message: { error: 'Too many requests. Try again in an hour.' },
});

module.exports = { apiLimiter, authLimiter, sensitiveActionLimiter };
```

### validators.js

```js
// src/middleware/validators.js
const { body, query, validationResult } = require('express-validator');

const passwordRule = body('password')
  .isLength({ min: 8 }).withMessage('Password must be at least 8 characters.')
  .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])/)
  .withMessage('Must include uppercase, lowercase, number, and special character (@$!%*?&).');

const validateRegister = [
  body('username').trim().isLength({ min: 3, max: 50 })
    .matches(/^[a-zA-Z0-9_]+$/).withMessage('Alphanumeric and underscores only.'),
  body('email').isEmail().normalizeEmail(),
  passwordRule,
];

const validateLogin = [
  body('username').trim().notEmpty(),
  body('password').notEmpty(),
];

const validateEmail = [body('email').isEmail().normalizeEmail()];
const validateToken = [query('token').notEmpty()];
const validateResetPassword = [query('token').notEmpty(), passwordRule];

function handleValidationErrors(req, res, next) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
  next();
}

module.exports = {
  validateRegister, validateLogin, validateEmail,
  validateToken, validateResetPassword, handleValidationErrors,
};
```

---

## 12. Routes

```js
// src/routes/auth.js — route definitions only, no logic

const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/authController');
const { requireAuth } = require('../middleware/auth');
const { authLimiter, sensitiveActionLimiter } = require('../middleware/rateLimiter');
const {
  validateRegister, validateLogin, validateEmail,
  validateToken, validateResetPassword, handleValidationErrors,
} = require('../middleware/validators');

// Registration & email verification
router.post('/register',            authLimiter, validateRegister, handleValidationErrors, ctrl.register);
router.post('/resend-verification', sensitiveActionLimiter, validateEmail, handleValidationErrors, ctrl.resendVerification);
router.get( '/verify-email',        validateToken, handleValidationErrors, ctrl.verifyEmail);

// Sessions
router.post('/login',       authLimiter, validateLogin, handleValidationErrors, ctrl.login);
router.post('/refresh',     ctrl.refresh);
router.post('/logout',      requireAuth, ctrl.logout);
router.post('/logout-all',  requireAuth, ctrl.logoutAll);

// Password reset
router.post('/forgot-password', sensitiveActionLimiter, validateEmail, handleValidationErrors, ctrl.forgotPassword);
router.post('/reset-password',  validateResetPassword, handleValidationErrors, ctrl.resetPassword);

module.exports = router;
```

---

## 13. App Entry Point

```js
// src/app.js
const config = require('./config');
const express = require('express');
const helmet = require('helmet');
const cookieParser = require('cookie-parser');
const { apiLimiter } = require('./middleware/rateLimiter');
const { requireAuth } = require('./middleware/auth');
const authRoutes = require('./routes/auth');

const app = express();

// Required when behind nginx / ALB / Heroku — makes req.ip return real client IP
app.set('trust proxy', 1);
app.set('isProduction', config.isProduction);

app.use(helmet());                                    // Security headers
app.use(express.json({ limit: '10kb' }));             // 10kb body limit prevents DoS
app.use(express.urlencoded({ extended: true, limit: '10kb' }));
app.use(cookieParser());                              // Reads HttpOnly refresh token cookie
app.use(apiLimiter);                                  // Global rate limit

app.use('/api/auth', authRoutes);
app.get('/api/me', requireAuth, (req, res) => res.json({ user: req.user }));
app.get('/health', (_, res) => res.json({ status: 'ok' }));

app.use((req, res) => res.status(404).json({ error: 'Route not found.' }));

app.use((err, req, res, next) => {
  console.error('[Error]', err);
  res.status(500).json({
    error: config.isProduction ? 'An internal error occurred.' : err.message,
  });
});

app.listen(config.port, () =>
  console.log(`[app] Running in ${config.env} mode on port ${config.port}`)
);

module.exports = app;
```

---

## 14. API Reference

| Method | Path | Auth | Rate Limit | Description |
|---|---|---|---|---|
| POST | `/api/auth/register` | — | authLimiter | Register, send verify email |
| GET | `/api/auth/verify-email?token=` | — | — | Verify email |
| POST | `/api/auth/resend-verification` | — | sensitiveAction | Resend verify email |
| POST | `/api/auth/login` | — | authLimiter | Login, receive tokens |
| POST | `/api/auth/refresh` | Cookie | — | Rotate refresh token |
| POST | `/api/auth/logout` | Bearer | — | Revoke current session |
| POST | `/api/auth/logout-all` | Bearer | — | Revoke all sessions |
| POST | `/api/auth/forgot-password` | — | sensitiveAction | Send reset email |
| POST | `/api/auth/reset-password?token=` | — | — | Set new password |
| GET | `/api/me` | Bearer | — | Get current user |
| GET | `/health` | — | — | Health check |

---

## 15. Security Checklist

### Passwords
- [x] Argon2id — 64MB memory, 3 iterations, 4 threads
- [x] Passwords never logged or returned in responses
- [x] Timing-safe comparison via `argon2.verify()`
- [x] Dummy hash run when user not found — prevents timing-based username enumeration

### Tokens
- [x] JWTs short-lived (15 minutes)
- [x] All tokens: only SHA-256 hashes stored in DB
- [x] Refresh tokens: rotated on every use, reuse detection
- [x] Refresh tokens: HttpOnly, Secure, SameSite=strict cookie
- [x] Email verify tokens: single-use, 24h expiry, previous invalidated on re-issue
- [x] Password reset tokens: single-use, 15min expiry, previous invalidated on re-issue
- [x] All sessions revoked on password reset

### Email Security
- [x] Verification required before first login
- [x] "Password changed" notification always sent on reset
- [x] Forgot password always returns 200 — never reveals email existence
- [x] Resend verification always returns 200

### Transport
- [x] Helmet security headers including HSTS
- [x] SSL on DB connections in production
- [x] `trust proxy` for correct IP detection

### Rate Limiting & Lockout
- [x] IP rate limiting on auth endpoints (10 failures / 15 min)
- [x] Per-account DB lockout after 5 failures (15 min)
- [x] Permanent lockout supported
- [x] `skipSuccessfulRequests: true`
- [x] Sensitive actions: 3 per hour per IP

### Enumeration Prevention
- [x] Login: identical error for wrong password and user not found
- [x] Forgot password / resend: always 200
- [x] Register: vague conflict message

### Audit
- [x] All login attempts logged with reason
- [x] IP and user agent captured
- [x] Audit preserved after user deletion
- [x] Audit failure never crashes auth flow

### Input
- [x] All inputs validated and sanitised before service layer
- [x] Body size limited to 10kb
- [x] Username character set restricted

---

## 16. Attack Surface & Mitigations

| Attack | Mitigation |
|---|---|
| **Brute force (single IP)** | IP rate limiting: 10 failures / 15 min |
| **Distributed brute force** | Per-account DB lockout after 5 failures |
| **Credential stuffing** | Account lockout + audit log |
| **Timing attack — username enum via login** | Dummy hash when user not found |
| **Timing attack — email enum via forgot password** | Always returns 200 |
| **Register enumeration** | Vague "already exists" message |
| **XSS token theft** | Refresh token in HttpOnly cookie |
| **CSRF** | SameSite=strict on refresh cookie |
| **JWT forgery** | 256-bit secret; verified on every request |
| **Stolen refresh token** | Rotation + REUSE_DETECTED |
| **Password reset link interception** | 15-min expiry, single-use |
| **Reset token brute force** | 64-byte token = 2^512 space |
| **Verify token replay** | `used` column checked atomically |
| **Session takeover after password change** | All sessions revoked on reset |
| **Silent account takeover** | "Password changed" email always sent |
| **Database breach** | Argon2id hashes; all tokens stored as SHA-256 hashes |
| **Man-in-the-middle** | HSTS; DB SSL |
| **Clickjacking** | `X-Frame-Options: DENY` via Helmet |
| **SQL injection** | Parameterised queries throughout |
| **DoS via large bodies** | `express.json({ limit: '10kb' })` |
| **Session fixation** | New tokens on every login |

---

## 17. What We Are Not Doing Yet (Future Iterations)

| Feature | Priority | Notes |
|---|---|---|
| **MFA / TOTP** | High — add next | `otplib`; backup codes; recovery flow |
| **WhatsApp OTP** | High | Twilio Verify; channel alternative to SMS |
| **Breach password detection** | Medium | HaveIBeenPwned k-anonymity API at register/login |
| **OAuth / Social login** | Medium | Google/GitHub via `passport.js` |
| **Refresh token families** | Medium | Full family invalidation on reuse |
| **Device fingerprinting** | Medium | Flag and notify on new device login |
| **Suspicious login alerts** | Medium | Email on new country/device |
| **Admin dashboard** | Low | View/unlock accounts; inspect audit log |
| **Token denylist (Redis)** | Low | Immediate JWT revocation — trade statelessness |
| **Passkeys / WebAuthn** | Long-term | Phishing-proof; additive alongside passwords |

---

*Move features from this section into the appropriate sections above as they are implemented. Each entry should include full code, reasoning, and updated checklist items.*
