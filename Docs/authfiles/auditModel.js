// src/models/auditModel.js
// Immutable login audit log. Write-only from the application layer.

const db = require('../db');

const AuditModel = {
  async log(userId, ip, userAgent, success, reason = null) {
    try {
      await db.query(
        `INSERT INTO login_audit (user_id, ip_address, user_agent, success, failure_reason)
         VALUES ($1, $2, $3, $4, $5)`,
        [userId, ip, userAgent, success, reason]
      );
    } catch (err) {
      // Audit failure must never crash the auth flow — log and continue
      console.error('[AuditModel] Write failed:', err.message);
    }
  },
};

module.exports = AuditModel;
