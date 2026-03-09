// src/config/index.js
// Single source of truth for all environment variables.
// Fails fast at startup if required vars are missing — never fails silently at runtime.

require('dotenv').config();

function required(key) {
  const value = process.env[key];
  if (!value) throw new Error(`Missing required environment variable: ${key}`);
  return value;
}

function optional(key, defaultValue) {
  return process.env[key] || defaultValue;
}

const config = {
  env: optional('NODE_ENV', 'development'),
  port: parseInt(optional('PORT', '3000'), 10),
  appUrl: optional('APP_URL', 'http://localhost:3000'),
  isProduction: optional('NODE_ENV', 'development') === 'production',

  db: {
    url: required('DATABASE_URL'),
    ssl: optional('NODE_ENV', 'development') === 'production',
  },

  jwt: {
    secret: required('JWT_SECRET'),
    accessExpiry: optional('JWT_ACCESS_EXPIRY', '15m'),
    refreshExpiryDays: parseInt(optional('JWT_REFRESH_EXPIRY_DAYS', '30'), 10),
  },

  email: {
    host: required('SMTP_HOST'),
    port: parseInt(optional('SMTP_PORT', '587'), 10),
    secure: optional('SMTP_SECURE', 'false') === 'true',
    user: required('SMTP_USER'),
    pass: required('SMTP_PASS'),
    from: optional('EMAIL_FROM', 'noreply@yourapp.com'),
    fromName: optional('EMAIL_FROM_NAME', 'YourApp'),
  },

  tokens: {
    emailVerifyExpiryHours: parseInt(optional('EMAIL_VERIFY_EXPIRY_HOURS', '24'), 10),
    passwordResetExpiryMinutes: parseInt(optional('PASSWORD_RESET_EXPIRY_MINUTES', '15'), 10),
  },

  auth: {
    maxFailedAttempts: 5,
    lockDurationMinutes: 15,
  },
};

module.exports = config;
