// src/middleware/validators.js
// express-validator rule chains for each endpoint.
// Applied as middleware arrays in routes — errors surfaced via validationResult().

const { body, query, validationResult } = require('express-validator');

// ── Shared password rule (reused in register and reset-password) ──────────────
const passwordRule = body('password')
  .isLength({ min: 8 })
  .withMessage('Password must be at least 8 characters.')
  .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])/)
  .withMessage('Password must include uppercase, lowercase, a number, and a special character (@$!%*?&).');

// ── Validators ────────────────────────────────────────────────────────────────

const validateRegister = [
  body('username')
    .trim()
    .isLength({ min: 3, max: 50 })
    .withMessage('Username must be 3–50 characters.')
    .matches(/^[a-zA-Z0-9_]+$/)
    .withMessage('Username may only contain letters, numbers, and underscores.'),
  body('email')
    .isEmail().withMessage('Must be a valid email address.')
    .normalizeEmail(),
  passwordRule,
];

const validateLogin = [
  body('username').trim().notEmpty().withMessage('Username is required.'),
  body('password').notEmpty().withMessage('Password is required.'),
];

const validateEmail = [
  body('email')
    .isEmail().withMessage('Must be a valid email address.')
    .normalizeEmail(),
];

const validateToken = [
  query('token').notEmpty().withMessage('Token is required.'),
];

const validateResetPassword = [
  query('token').notEmpty().withMessage('Reset token is required.'),
  passwordRule,
];

// ── Middleware to check result and return 400 if invalid ─────────────────────

function handleValidationErrors(req, res, next) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
}

module.exports = {
  validateRegister,
  validateLogin,
  validateEmail,
  validateToken,
  validateResetPassword,
  handleValidationErrors,
};
