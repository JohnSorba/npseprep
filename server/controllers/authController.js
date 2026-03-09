// src/controllers/authController.js
// Translates HTTP requests into service calls and HTTP responses.
// No business logic here — that lives in authService.js.
// No DB access here — that lives in models.

const authService = require('../services/authService');

const REFRESH_COOKIE_OPTIONS = (isProduction) => ({
  httpOnly: true,           // Inaccessible to JavaScript — XSS-proof
  secure: isProduction,     // HTTPS only in production
  sameSite: 'strict',       // No cross-site sending — CSRF-proof
  maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days in milliseconds
});

function getClientInfo(req) {
  return {
    ip: req.ip,
    userAgent: req.headers['user-agent'] || 'unknown',
  };
}

// ── POST /api/auth/register ────────────────────────────────────────────────────

async function register(req, res, next) {
  try {
    const user = await authService.register(req.body);
    res.status(201).json({
      message: 'Account created. Please check your email to verify your address.',
      userId: user.id,
    });
  } catch (err) {
    if (err.message === 'USERNAME_OR_EMAIL_TAKEN') {
      // 409 Conflict — intentionally vague to prevent enumeration
      return res.status(409).json({
        error: 'An account with that username or email already exists.',
      });
    }
    next(err);
  }
}

// ── POST /api/auth/resend-verification ────────────────────────────────────────

async function resendVerification(req, res, next) {
  try {
    await authService.resendVerificationEmail(req.body.email);
    // Always 200 — never reveal whether the email exists
    res.json({ message: 'If that email is registered and unverified, a new link has been sent.' });
  } catch (err) {
    next(err);
  }
}

// ── GET /api/auth/verify-email?token=... ──────────────────────────────────────

async function verifyEmail(req, res, next) {
  try {
    await authService.verifyEmail(req.query.token);
    res.json({ message: 'Email verified successfully. You can now log in.' });
  } catch (err) {
    const map = {
      INVALID_TOKEN:    [400, 'This verification link is invalid.'],
      TOKEN_ALREADY_USED: [400, 'This verification link has already been used.'],
      TOKEN_EXPIRED:    [400, 'This verification link has expired. Please request a new one.'],
      ALREADY_VERIFIED: [400, 'This email address is already verified.'],
    };
    const [status, message] = map[err.message] || [null, null];
    if (status) return res.status(status).json({ error: message });
    next(err);
  }
}

// ── POST /api/auth/login ───────────────────────────────────────────────────────

async function login(req, res, next) {
  try {
    const { ip, userAgent } = getClientInfo(req);
    const { username, password } = req.body;
    const { accessToken, refreshToken } = await authService.login({
      username, password, ip, userAgent,
    });

    res.cookie('refreshToken', refreshToken, REFRESH_COOKIE_OPTIONS(req.app.get('isProduction')));
    res.json({ accessToken });
  } catch (err) {
    if (err.message === 'ACCOUNT_LOCKED') {
      return res.status(423).json({
        error: 'Account temporarily locked due to too many failed attempts. Try again in 15 minutes.',
      });
    }
    if (err.message === 'EMAIL_NOT_VERIFIED') {
      return res.status(403).json({
        error: 'Please verify your email address before logging in.',
        code: 'EMAIL_NOT_VERIFIED',
      });
    }
    // INVALID_CREDENTIALS and anything unexpected both return 401 — never distinguish
    if (err.message === 'INVALID_CREDENTIALS') {
      return res.status(401).json({ error: 'Invalid username or password.' });
    }
    next(err);
  }
}

// ── POST /api/auth/refresh ─────────────────────────────────────────────────────

async function refresh(req, res, next) {
  const rawRefreshToken = req.cookies?.refreshToken;
  if (!rawRefreshToken) {
    return res.status(401).json({ error: 'No refresh token.' });
  }

  try {
    const { accessToken, refreshToken: newRefreshToken } =
      await authService.refreshAccessToken(rawRefreshToken);

    res.cookie('refreshToken', newRefreshToken, REFRESH_COOKIE_OPTIONS(req.app.get('isProduction')));
    res.json({ accessToken });
  } catch (err) {
    res.clearCookie('refreshToken');
    if (err.message === 'REFRESH_TOKEN_REUSE_DETECTED') {
      return res.status(401).json({ error: 'Session invalidated. Please log in again.' });
    }
    res.status(401).json({ error: 'Session expired. Please log in again.' });
  }
}

// ── POST /api/auth/logout ──────────────────────────────────────────────────────

async function logout(req, res, next) {
  try {
    await authService.logout(req.cookies?.refreshToken);
    res.clearCookie('refreshToken');
    res.json({ message: 'Logged out successfully.' });
  } catch (err) {
    next(err);
  }
}

// ── POST /api/auth/logout-all ──────────────────────────────────────────────────

async function logoutAll(req, res, next) {
  try {
    await authService.logoutAll(req.user.id);
    res.clearCookie('refreshToken');
    res.json({ message: 'All sessions terminated.' });
  } catch (err) {
    next(err);
  }
}

// ── POST /api/auth/forgot-password ────────────────────────────────────────────

async function forgotPassword(req, res, next) {
  try {
    await authService.forgotPassword(req.body.email);
    // Always 200 — never reveal whether the email exists
    res.json({
      message: 'If an account with that email exists, a password reset link has been sent.',
    });
  } catch (err) {
    next(err);
  }
}

// ── POST /api/auth/reset-password ─────────────────────────────────────────────

async function resetPassword(req, res, next) {
  try {
    await authService.resetPassword(req.query.token, req.body.password);
    res.json({ message: 'Password reset successfully. Please log in with your new password.' });
  } catch (err) {
    const map = {
      INVALID_TOKEN:    [400, 'This reset link is invalid.'],
      TOKEN_ALREADY_USED: [400, 'This reset link has already been used.'],
      TOKEN_EXPIRED:    [400, 'This reset link has expired. Please request a new one.'],
    };
    const [status, message] = map[err.message] || [null, null];
    if (status) return res.status(status).json({ error: message });
    next(err);
  }
}

module.exports = {
  register,
  resendVerification,
  verifyEmail,
  login,
  refresh,
  logout,
  logoutAll,
  forgotPassword,
  resetPassword,
};
