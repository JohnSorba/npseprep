// src/middleware/rateLimiter.js

const rateLimit = require('express-rate-limit');

// ── Global API limiter — applied to all routes ─────────────────────────────────
const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: 'Too many requests. Please try again later.' },
});

// ── Auth limiter — login and register only ─────────────────────────────────────
// skipSuccessfulRequests: only failed attempts count — legit users never penalised
const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 10,
  skipSuccessfulRequests: true,
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: 'Too many failed attempts. Please try again in 15 minutes.' },
});

// ── Password reset / resend verification — extra strict ───────────────────────
const sensitiveActionLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour
  max: 3,
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: 'Too many requests. Please try again in an hour.' },
});

module.exports = { apiLimiter, authLimiter, sensitiveActionLimiter };
