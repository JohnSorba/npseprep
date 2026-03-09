// src/models/tokenModel.js
// All DB interactions for the three token tables:
//   refresh_tokens, email_verification_tokens, password_reset_tokens

const db = require('../db');

const TokenModel = {

  // ── Refresh Tokens ─────────────────────────────────────────────────────────

  async createRefreshToken(userId, tokenHash, expiresAt) {
    await db.query(
      `INSERT INTO refresh_tokens (user_id, token_hash, expires_at)
       VALUES ($1, $2, $3)`,
      [userId, tokenHash, expiresAt]
    );
  },

  async findRefreshToken(tokenHash) {
    const result = await db.query(
      `SELECT rt.id, rt.user_id, rt.expires_at, rt.revoked,
              u.username, u.is_locked
       FROM refresh_tokens rt
       JOIN users u ON u.id = rt.user_id
       WHERE rt.token_hash = $1`,
      [tokenHash]
    );
    return result.rows[0] || null;
  },

  async revokeRefreshToken(id) {
    await db.query(
      'UPDATE refresh_tokens SET revoked = TRUE WHERE id = $1',
      [id]
    );
  },

  async revokeRefreshTokenByHash(tokenHash) {
    await db.query(
      'UPDATE refresh_tokens SET revoked = TRUE WHERE token_hash = $1',
      [tokenHash]
    );
  },

  async revokeAllRefreshTokens(userId) {
    await db.query(
      'UPDATE refresh_tokens SET revoked = TRUE WHERE user_id = $1',
      [userId]
    );
  },

  // ── Email Verification Tokens ──────────────────────────────────────────────

  async createEmailVerifyToken(userId, tokenHash, expiresAt) {
    // Invalidate any existing unused tokens for this user first
    await db.query(
      `UPDATE email_verification_tokens
       SET used = TRUE
       WHERE user_id = $1 AND used = FALSE`,
      [userId]
    );
    await db.query(
      `INSERT INTO email_verification_tokens (user_id, token_hash, expires_at)
       VALUES ($1, $2, $3)`,
      [userId, tokenHash, expiresAt]
    );
  },

  async findEmailVerifyToken(tokenHash) {
    const result = await db.query(
      `SELECT evt.id, evt.user_id, evt.expires_at, evt.used,
              u.email, u.is_verified
       FROM email_verification_tokens evt
       JOIN users u ON u.id = evt.user_id
       WHERE evt.token_hash = $1`,
      [tokenHash]
    );
    return result.rows[0] || null;
  },

  async markEmailVerifyTokenUsed(id) {
    await db.query(
      'UPDATE email_verification_tokens SET used = TRUE WHERE id = $1',
      [id]
    );
  },

  // ── Password Reset Tokens ──────────────────────────────────────────────────

  async createPasswordResetToken(userId, tokenHash, expiresAt) {
    // Invalidate any existing unused tokens for this user first
    await db.query(
      `UPDATE password_reset_tokens
       SET used = TRUE
       WHERE user_id = $1 AND used = FALSE`,
      [userId]
    );
    await db.query(
      `INSERT INTO password_reset_tokens (user_id, token_hash, expires_at)
       VALUES ($1, $2, $3)`,
      [userId, tokenHash, expiresAt]
    );
  },

  async findPasswordResetToken(tokenHash) {
    const result = await db.query(
      `SELECT prt.id, prt.user_id, prt.expires_at, prt.used
       FROM password_reset_tokens prt
       WHERE prt.token_hash = $1`,
      [tokenHash]
    );
    return result.rows[0] || null;
  },

  async markPasswordResetTokenUsed(id) {
    await db.query(
      'UPDATE password_reset_tokens SET used = TRUE WHERE id = $1',
      [id]
    );
  },
};

module.exports = TokenModel;
