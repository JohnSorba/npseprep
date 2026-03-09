// src/routes/auth.js
// Route definitions only — no logic. Maps HTTP verbs + paths to controller functions.

const express = require('express');
const authController = require('../controllers/authController');
const { requireAuth } = require('../middleware/auth');
const { authLimiter, sensitiveActionLimiter } = require('../middleware/rateLimiter');
const {
  validateRegister,
  validateLogin,
  validateEmail,
  validateToken,
  validateResetPassword,
  handleValidationErrors,
} = require('../middleware/validators');

const router = express.Router();

// ── Registration & Email Verification ─────────────────────────────────────────
router.post(
  '/register',
  authLimiter,
  validateRegister,
  handleValidationErrors,
  authController.register
);

router.post(
  '/resend-verification',
  sensitiveActionLimiter,
  validateEmail,
  handleValidationErrors,
  authController.resendVerification
);

router.get(
  '/verify-email',
  validateToken,
  handleValidationErrors,
  authController.verifyEmail
);

// ── Session Management ─────────────────────────────────────────────────────────
router.post(
  '/login',
  authLimiter,
  validateLogin,
  handleValidationErrors,
  authController.login
);

router.post('/refresh',  authController.refresh);
router.post('/logout',   requireAuth, authController.logout);
router.post('/logout-all', requireAuth, authController.logoutAll);

// ── Password Reset ─────────────────────────────────────────────────────────────
router.post(
  '/forgot-password',
  sensitiveActionLimiter,
  validateEmail,
  handleValidationErrors,
  authController.forgotPassword
);

router.post(
  '/reset-password',
  validateResetPassword,
  handleValidationErrors,
  authController.resetPassword
);

module.exports = router;
