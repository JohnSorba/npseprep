// src/models/userModel.js
// All database interactions for the users table.
// Controllers and services never write raw SQL — they call these functions.

const db = require('../db');

const UserModel = {
  // ── Find ───────────────────────────────────────────────────────────────────

  async findById(id) {
    const result = await db.query(
      `SELECT id, username, email, is_verified, is_locked, failed_attempts,
              locked_until, last_login, created_at, updated_at
       FROM users WHERE id = $1`,
      [id]
    );
    return result.rows[0] || null;
  },

  async findByUsername(username) {
    const result = await db.query(
      `SELECT id, username, email, password_hash, is_verified,
              is_locked, failed_attempts, locked_until
       FROM users WHERE username = $1`,
      [username.toLowerCase()]
    );
    return result.rows[0] || null;
  },

  async findByEmail(email) {
    const result = await db.query(
      `SELECT id, username, email, password_hash, is_verified,
              is_locked, failed_attempts, locked_until
       FROM users WHERE email = $1`,
      [email.toLowerCase()]
    );
    return result.rows[0] || null;
  },

  // Check whether a username OR email is already taken (used at registration)
  async existsByUsernameOrEmail(username, email) {
    const result = await db.query(
      'SELECT id FROM users WHERE username = $1 OR email = $2',
      [username.toLowerCase(), email.toLowerCase()]
    );
    return result.rows.length > 0;
  },

  // ── Create ─────────────────────────────────────────────────────────────────

  async create({ username, email, passwordHash }) {
    const result = await db.query(
      `INSERT INTO users (username, email, password_hash)
       VALUES ($1, $2, $3)
       RETURNING id, username, email, created_at`,
      [username.toLowerCase(), email.toLowerCase(), passwordHash]
    );
    return result.rows[0];
  },

  // ── Update ─────────────────────────────────────────────────────────────────

  async markVerified(id) {
    await db.query(
      `UPDATE users SET is_verified = TRUE, updated_at = NOW() WHERE id = $1`,
      [id]
    );
  },

  async recordFailedLogin(id, currentAttempts, maxAttempts, lockDurationMinutes) {
    const newAttempts = currentAttempts + 1;
    const shouldLock = newAttempts >= maxAttempts;
    await db.query(
      `UPDATE users SET
        failed_attempts = $1,
        is_locked       = $2,
        locked_until    = $3,
        updated_at      = NOW()
       WHERE id = $4`,
      [
        newAttempts,
        shouldLock,
        shouldLock ? new Date(Date.now() + lockDurationMinutes * 60 * 1000) : null,
        id,
      ]
    );
  },

  async recordSuccessfulLogin(id) {
    await db.query(
      `UPDATE users SET
        failed_attempts = 0,
        is_locked       = FALSE,
        locked_until    = NULL,
        last_login      = NOW(),
        updated_at      = NOW()
       WHERE id = $1`,
      [id]
    );
  },

  async updatePassword(id, passwordHash) {
    await db.query(
      `UPDATE users SET password_hash = $1, updated_at = NOW() WHERE id = $2`,
      [passwordHash, id]
    );
  },
};

module.exports = UserModel;
