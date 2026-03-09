// src/utils/tokens.js
// Pure utility functions for token generation and hashing.
// No DB access — no side effects.

const crypto = require('crypto');
const jwt = require('jsonwebtoken');
const config = require('../config');

function generateOpaqueToken(byteLength = 64) {
  return crypto.randomBytes(byteLength).toString('hex');
}

function hashToken(token) {
  return crypto.createHash('sha256').update(token).digest('hex');
}

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
  generateOpaqueToken,
  hashToken,
  generateAccessToken,
  buildRefreshTokenExpiry,
  buildEmailVerifyExpiry,
  buildPasswordResetExpiry,
};
