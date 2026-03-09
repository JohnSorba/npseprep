// src/services/emailService.js
// Handles all outbound email. Uses Nodemailer with an SMTP transport.
// In development, configure Mailtrap (https://mailtrap.io) to capture emails safely.
// In production, replace with SendGrid / Postmark / AWS SES by swapping the transport.

const nodemailer = require('nodemailer');
const config = require('../config');

// ── Transport ──────────────────────────────────────────────────────────────────

const transport = nodemailer.createTransport({
  host: config.email.host,
  port: config.email.port,
  secure: config.email.secure,
  auth: {
    user: config.email.user,
    pass: config.email.pass,
  },
});

const FROM = `"${config.email.fromName}" <${config.email.from}>`;

// ── Send helpers ───────────────────────────────────────────────────────────────

async function sendEmail({ to, subject, html, text }) {
  await transport.sendMail({ from: FROM, to, subject, html, text });
}

// ── Email: Verify Email Address ────────────────────────────────────────────────

async function sendVerificationEmail(user, token) {
  const verifyUrl = `${config.appUrl}/api/auth/verify-email?token=${token}`;

  await sendEmail({
    to: user.email,
    subject: 'Verify your email address',
    text: `Hi ${user.username},\n\nPlease verify your email by visiting:\n${verifyUrl}\n\nThis link expires in ${config.tokens.emailVerifyExpiryHours} hours.\n\nIf you did not create an account, please ignore this email.`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 560px; margin: 0 auto;">
        <h2 style="color: #1a1a1a;">Verify your email address</h2>
        <p>Hi <strong>${user.username}</strong>,</p>
        <p>Thank you for registering. Please verify your email address by clicking the button below.</p>
        <p style="margin: 32px 0;">
          <a href="${verifyUrl}"
             style="background: #4F46E5; color: white; padding: 12px 24px;
                    text-decoration: none; border-radius: 6px; font-weight: bold;">
            Verify Email Address
          </a>
        </p>
        <p style="color: #666; font-size: 14px;">
          This link expires in <strong>${config.tokens.emailVerifyExpiryHours} hours</strong>.
          If you did not create an account, you can safely ignore this email.
        </p>
        <hr style="border: none; border-top: 1px solid #eee; margin: 24px 0;">
        <p style="color: #999; font-size: 12px;">
          If the button does not work, copy and paste this URL into your browser:<br>
          <a href="${verifyUrl}" style="color: #4F46E5;">${verifyUrl}</a>
        </p>
      </div>
    `,
  });
}

// ── Email: Password Reset ──────────────────────────────────────────────────────

async function sendPasswordResetEmail(user, token) {
  const resetUrl = `${config.appUrl}/api/auth/reset-password?token=${token}`;

  await sendEmail({
    to: user.email,
    subject: 'Reset your password',
    text: `Hi ${user.username},\n\nYou requested a password reset. Visit the following link to set a new password:\n${resetUrl}\n\nThis link expires in ${config.tokens.passwordResetExpiryMinutes} minutes and can only be used once.\n\nIf you did not request this, please ignore this email — your password has not changed.`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 560px; margin: 0 auto;">
        <h2 style="color: #1a1a1a;">Reset your password</h2>
        <p>Hi <strong>${user.username}</strong>,</p>
        <p>We received a request to reset the password for your account.</p>
        <p style="margin: 32px 0;">
          <a href="${resetUrl}"
             style="background: #4F46E5; color: white; padding: 12px 24px;
                    text-decoration: none; border-radius: 6px; font-weight: bold;">
            Reset Password
          </a>
        </p>
        <p style="color: #e53e3e; font-size: 14px;">
          ⚠️ This link expires in <strong>${config.tokens.passwordResetExpiryMinutes} minutes</strong>
          and can only be used once.
        </p>
        <p style="color: #666; font-size: 14px;">
          If you did not request a password reset, please ignore this email.
          Your password has not been changed.
        </p>
        <hr style="border: none; border-top: 1px solid #eee; margin: 24px 0;">
        <p style="color: #999; font-size: 12px;">
          If the button does not work, copy and paste this URL into your browser:<br>
          <a href="${resetUrl}" style="color: #4F46E5;">${resetUrl}</a>
        </p>
      </div>
    `,
  });
}

// ── Email: Password Changed Notification ───────────────────────────────────────
// Alert the user whenever their password is changed — whether they did it or not.

async function sendPasswordChangedEmail(user) {
  await sendEmail({
    to: user.email,
    subject: 'Your password has been changed',
    text: `Hi ${user.username},\n\nYour password was successfully changed.\n\nIf you did not make this change, please reset your password immediately and contact support.`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 560px; margin: 0 auto;">
        <h2 style="color: #1a1a1a;">Password changed</h2>
        <p>Hi <strong>${user.username}</strong>,</p>
        <p>Your password was successfully changed.</p>
        <p style="color: #e53e3e; font-size: 14px;">
          ⚠️ If you did not make this change, your account may be compromised.
          Please reset your password immediately and contact support.
        </p>
      </div>
    `,
  });
}

module.exports = {
  sendVerificationEmail,
  sendPasswordResetEmail,
  sendPasswordChangedEmail,
};
