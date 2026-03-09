// src/services/authService.js
// Pure business logic. No HTTP concepts (req/res) — only domain errors and return values.
// All DB access goes through models. All token operations go through utils/tokens.

const argon2 = require('argon2');
const db = require('../db');
const config = require('../config');
const UserModel = require('../models/userModel');
const TokenModel = require('../models/tokenModel');
const AuditModel = require('../models/auditModel');
const {
  generateOpaqueToken,
  hashToken,
  generateAccessToken,
  buildRefreshTokenExpiry,
  buildEmailVerifyExpiry,
  buildPasswordResetExpiry,
} = require('../utils/tokens');
const {
  sendVerificationEmail,
  sendPasswordResetEmail,
  sendPasswordChangedEmail,
} = require('./emailService');

// ── Argon2id config ────────────────────────────────────────────────────────────
// memoryCost: 64MB — makes GPU/ASIC attacks expensive
// timeCost: 3 iterations, parallelism: 4 threads
// Targets ~200ms on a modern server

const ARGON2_OPTIONS = {
  type: argon2.argon2id,
  memoryCost: 65536,
  timeCost: 3,
  parallelism: 4,
};

// Pre-hashed dummy — used when user is not found to prevent timing attacks
let DUMMY_HASH;
(async () => {
  DUMMY_HASH = await argon2.hash('dummy_password_timing_protection', ARGON2_OPTIONS);
})();

// ── Register ───────────────────────────────────────────────────────────────────

async function register({ username, email, password }) {
  const taken = await UserModel.existsByUsernameOrEmail(username, email);
  if (taken) throw new Error('USERNAME_OR_EMAIL_TAKEN');

  const passwordHash = await argon2.hash(password, ARGON2_OPTIONS);
  const user = await UserModel.create({ username, email, passwordHash });

  // Issue email verification token and send welcome email
  const rawToken = generateOpaqueToken();
  const tokenHash = hashToken(rawToken);
  const expiresAt = buildEmailVerifyExpiry();

  await TokenModel.createEmailVerifyToken(user.id, tokenHash, expiresAt);
  await sendVerificationEmail(user, rawToken);

  return user;
}

// ── Resend Verification Email ──────────────────────────────────────────────────

async function resendVerificationEmail(email) {
  const user = await UserModel.findByEmail(email);

  // Always respond with success — never reveal whether the email exists
  if (!user || user.is_verified) return;

  const rawToken = generateOpaqueToken();
  const tokenHash = hashToken(rawToken);
  const expiresAt = buildEmailVerifyExpiry();

  await TokenModel.createEmailVerifyToken(user.id, tokenHash, expiresAt);
  await sendVerificationEmail(user, rawToken);
}

// ── Verify Email ───────────────────────────────────────────────────────────────

async function verifyEmail(rawToken) {
  const tokenHash = hashToken(rawToken);
  const record = await TokenModel.findEmailVerifyToken(tokenHash);

  if (!record)                              throw new Error('INVALID_TOKEN');
  if (record.used)                          throw new Error('TOKEN_ALREADY_USED');
  if (new Date(record.expires_at) < new Date()) throw new Error('TOKEN_EXPIRED');
  if (record.is_verified)                   throw new Error('ALREADY_VERIFIED');

  // Mark token used and user verified atomically
  const client = await db.getClient();
  try {
    await client.query('BEGIN');
    await client.query(
      'UPDATE email_verification_tokens SET used = TRUE WHERE id = $1',
      [record.id]
    );
    await client.query(
      'UPDATE users SET is_verified = TRUE, updated_at = NOW() WHERE id = $1',
      [record.user_id]
    );
    await client.query('COMMIT');
  } catch (err) {
    await client.query('ROLLBACK');
    throw err;
  } finally {
    client.release();
  }
}

// ── Login ──────────────────────────────────────────────────────────────────────

async function login({ username, password, ip, userAgent }) {
  const user = await UserModel.findByUsername(username);

  // Always run argon2.verify even when no user found — prevents timing attacks
  if (!user) {
    await argon2.verify(DUMMY_HASH, password).catch(() => {});
    await AuditModel.log(null, ip, userAgent, false, 'USER_NOT_FOUND');
    throw new Error('INVALID_CREDENTIALS');
  }

  // Check lockout — temporary or permanent
  const isTemporarilyLocked = user.is_locked && user.locked_until && new Date(user.locked_until) > new Date();
  const isPermanentlyLocked = user.is_locked && !user.locked_until;
  if (isTemporarilyLocked || isPermanentlyLocked) {
    await AuditModel.log(user.id, ip, userAgent, false, 'ACCOUNT_LOCKED');
    throw new Error('ACCOUNT_LOCKED');
  }

  const valid = await argon2.verify(user.password_hash, password);

  if (!valid) {
    await UserModel.recordFailedLogin(
      user.id,
      user.failed_attempts,
      config.auth.maxFailedAttempts,
      config.auth.lockDurationMinutes
    );
    await AuditModel.log(user.id, ip, userAgent, false, 'WRONG_PASSWORD');
    throw new Error('INVALID_CREDENTIALS');
  }

  // Block unverified users from logging in
  if (!user.is_verified) {
    await AuditModel.log(user.id, ip, userAgent, false, 'EMAIL_NOT_VERIFIED');
    throw new Error('EMAIL_NOT_VERIFIED');
  }

  // Success
  await UserModel.recordSuccessfulLogin(user.id);
  await AuditModel.log(user.id, ip, userAgent, true, null);

  const accessToken = generateAccessToken(user);
  const rawRefresh = generateOpaqueToken();
  const refreshHash = hashToken(rawRefresh);
  const refreshExpiry = buildRefreshTokenExpiry();

  await TokenModel.createRefreshToken(user.id, refreshHash, refreshExpiry);

  return { accessToken, refreshToken: rawRefresh };
}

// ── Refresh Access Token ───────────────────────────────────────────────────────

async function refreshAccessToken(rawRefreshToken) {
  const tokenHash = hashToken(rawRefreshToken);
  const record = await TokenModel.findRefreshToken(tokenHash);

  if (!record)       throw new Error('INVALID_REFRESH_TOKEN');
  if (record.revoked) throw new Error('REFRESH_TOKEN_REUSE_DETECTED');
  if (new Date(record.expires_at) < new Date()) throw new Error('REFRESH_TOKEN_EXPIRED');
  if (record.is_locked) throw new Error('ACCOUNT_LOCKED');

  // Rotate atomically — revoke old, issue new
  const client = await db.getClient();
  let newRawToken;
  try {
    await client.query('BEGIN');
    await client.query(
      'UPDATE refresh_tokens SET revoked = TRUE WHERE id = $1',
      [record.id]
    );
    newRawToken = generateOpaqueToken();
    const newHash = hashToken(newRawToken);
    const newExpiry = buildRefreshTokenExpiry();
    await client.query(
      `INSERT INTO refresh_tokens (user_id, token_hash, expires_at) VALUES ($1, $2, $3)`,
      [record.user_id, newHash, newExpiry]
    );
    await client.query('COMMIT');
  } catch (err) {
    await client.query('ROLLBACK');
    throw err;
  } finally {
    client.release();
  }

  const accessToken = generateAccessToken({ id: record.user_id, username: record.username });
  return { accessToken, refreshToken: newRawToken };
}

// ── Logout ─────────────────────────────────────────────────────────────────────

async function logout(rawRefreshToken) {
  if (!rawRefreshToken) return;
  const tokenHash = hashToken(rawRefreshToken);
  await TokenModel.revokeRefreshTokenByHash(tokenHash);
}

async function logoutAll(userId) {
  await TokenModel.revokeAllRefreshTokens(userId);
}

// ── Forgot Password ────────────────────────────────────────────────────────────

async function forgotPassword(email) {
  const user = await UserModel.findByEmail(email);

  // Always respond with success — never reveal whether the email exists
  if (!user) return;

  const rawToken = generateOpaqueToken();
  const tokenHash = hashToken(rawToken);
  const expiresAt = buildPasswordResetExpiry();

  await TokenModel.createPasswordResetToken(user.id, tokenHash, expiresAt);
  await sendPasswordResetEmail(user, rawToken);
}

// ── Reset Password ─────────────────────────────────────────────────────────────

async function resetPassword(rawToken, newPassword) {
  const tokenHash = hashToken(rawToken);
  const record = await TokenModel.findPasswordResetToken(tokenHash);

  if (!record)                                  throw new Error('INVALID_TOKEN');
  if (record.used)                              throw new Error('TOKEN_ALREADY_USED');
  if (new Date(record.expires_at) < new Date()) throw new Error('TOKEN_EXPIRED');

  const user = await UserModel.findById(record.user_id);
  if (!user) throw new Error('INVALID_TOKEN');

  const passwordHash = await argon2.hash(newPassword, ARGON2_OPTIONS);

  // Atomically: mark token used, update password, revoke all refresh tokens
  const client = await db.getClient();
  try {
    await client.query('BEGIN');
    await client.query(
      'UPDATE password_reset_tokens SET used = TRUE WHERE id = $1',
      [record.id]
    );
    await client.query(
      'UPDATE users SET password_hash = $1, updated_at = NOW() WHERE id = $2',
      [passwordHash, record.user_id]
    );
    // Invalidate ALL existing sessions — force re-login everywhere
    await client.query(
      'UPDATE refresh_tokens SET revoked = TRUE WHERE user_id = $1',
      [record.user_id]
    );
    await client.query('COMMIT');
  } catch (err) {
    await client.query('ROLLBACK');
    throw err;
  } finally {
    client.release();
  }

  // Notify user their password changed
  await sendPasswordChangedEmail(user).catch((err) => {
    console.error('[authService] Password changed notification failed:', err.message);
  });
}

module.exports = {
  register,
  resendVerificationEmail,
  verifyEmail,
  login,
  refreshAccessToken,
  logout,
  logoutAll,
  forgotPassword,
  resetPassword,
};
