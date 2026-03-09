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
router.post('/register', authLimiter, validateRegister, handleValidationErrors, ctrl.register);
router.post('/resend-verification', sensitiveActionLimiter, validateEmail, handleValidationErrors, ctrl.resendVerification);
router.get('/verify-email', validateToken, handleValidationErrors, ctrl.verifyEmail);

// Sessions
router.post('/login', authLimiter, validateLogin, handleValidationErrors, ctrl.login);
router.post('/refresh', ctrl.refresh);
router.post('/logout', requireAuth, ctrl.logout);
router.post('/logout-all', requireAuth, ctrl.logoutAll);

// Password reset
router.post('/forgot-password', sensitiveActionLimiter, validateEmail, handleValidationErrors, ctrl.forgotPassword);
router.post('/reset-password', validateResetPassword, handleValidationErrors, ctrl.resetPassword);

module.exports = router;
