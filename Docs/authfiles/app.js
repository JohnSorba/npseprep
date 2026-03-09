// src/app.js
const config = require('./config');
const express = require('express');
const helmet = require('helmet');
const cookieParser = require('cookie-parser');
const { apiLimiter } = require('./middleware/rateLimiter');
const { requireAuth } = require('./middleware/auth');
const authRoutes = require('./routes/auth');

const app = express();

// ── Trust proxy ────────────────────────────────────────────────────────────────
// Required when running behind nginx, AWS ALB, Heroku, etc.
// Without this, req.ip returns the proxy IP instead of the real client IP,
// which breaks IP-based rate limiting.
app.set('trust proxy', 1);
app.set('isProduction', config.isProduction);

// ── Security headers ───────────────────────────────────────────────────────────
app.use(helmet());

// ── Body parsing ───────────────────────────────────────────────────────────────
// 10kb limit prevents DoS via extremely large request bodies
app.use(express.json({ limit: '10kb' }));
app.use(express.urlencoded({ extended: true, limit: '10kb' }));

// ── Cookie parsing ─────────────────────────────────────────────────────────────
// Required to read the HttpOnly refresh token cookie
app.use(cookieParser());

// ── Global rate limit ──────────────────────────────────────────────────────────
app.use(apiLimiter);

// ── Routes ─────────────────────────────────────────────────────────────────────
app.use('/api/auth', authRoutes);

// Example protected route
app.get('/api/me', requireAuth, (req, res) => {
  res.json({ user: req.user });
});

// ── Health check ───────────────────────────────────────────────────────────────
app.get('/health', (_, res) => res.json({ status: 'ok' }));

// ── 404 handler ────────────────────────────────────────────────────────────────
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found.' });
});

// ── Global error handler ───────────────────────────────────────────────────────
// Never expose stack traces in production
app.use((err, req, res, next) => {
  console.error('[Error]', err);
  res.status(500).json({
    error: config.isProduction ? 'An internal error occurred.' : err.message,
  });
});

app.listen(config.port, () => {
  console.log(`[app] Running in ${config.env} mode on port ${config.port}`);
});

module.exports = app;
