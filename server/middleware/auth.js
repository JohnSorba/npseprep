// src/middleware/auth.js
// Verifies the JWT access token on protected routes.
// Sets req.user = { id, username } on success.

const jwt = require('jsonwebtoken');
const config = require('../config');
const db = require('../db');

function requireAuth(req, res, next) {
  const authHeader = req.headers.authorization;

  if (!authHeader?.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'Missing or invalid Authorization header.' });
  }

  const token = authHeader.split(' ')[1];

  try {
    const payload = jwt.verify(token, config.jwt.secret);
    req.user = { id: payload.sub, username: payload.username };
    next();
  } catch (err) {
    if (err.name === 'TokenExpiredError') {
      // Client should catch TOKEN_EXPIRED and call POST /api/auth/refresh
      return res.status(401).json({ error: 'TOKEN_EXPIRED' });
    }
    return res.status(401).json({ error: 'Invalid token.' });
  }
}

function optionalAuth(req, res, next) {
  const authHeader = req.headers.authorization;
  if (!authHeader?.startsWith('Bearer ')) return next();

  try {
    const payload = jwt.verify(authHeader.split(' ')[1], config.jwt.secret);
    req.user = { id: payload.sub, username: payload.username };
  } catch (err) {
    // Ignore errors for optional auth
  }
  next();
}

function requireRole(role) {
  return async (req, res, next) => {
    if (!req.user || !req.user.id) {
      return res.status(401).json({ error: 'Unauthorized' });
    }

    try {
      const result = await db.query('SELECT role FROM users WHERE id = $1', [req.user.id]);
      if (result.rows.length === 0 || result.rows[0].role !== role) {
        return res.status(403).json({ error: 'Forbidden: Insufficient permissions.' });
      }
      req.user.role = result.rows[0].role;
      next();
    } catch (err) {
      console.error('[auth] requireRole error:', err);
      res.status(500).json({ error: 'Internal server error while checking permissions.' });
    }
  };
}

module.exports = {
  requireAuth,
  authenticateToken: requireAuth, // Alias for backward compatibility 
  optionalAuth,
  requireRole
};
