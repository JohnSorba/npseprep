const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config();

// ──── Import Routes ───────────────────────────────────────────
const authRoutes = require('./routes/auth');
const donationRoutes = require('./routes/donations');
const checkoutRoutes = require('./routes/checkout');
const webhookRoutes = require('./routes/webhooks');
const productRoutes = require('./routes/products');
const subjectRoutes = require('./routes/subjects');
const questionRoutes = require('./routes/questions');
const quizRoutes = require('./routes/quiz');
const dashboardRoutes = require('./routes/dashboard');
const adminRoutes = require('./routes/admin');

// ──── Middleware ───────────────────────────────────────────────
app.use(cors({
    origin: process.env.APP_BASE_URL || 'http://localhost:5173',
    credentials: true,
}));

// Webhook route needs raw body for signature verification
// It is registered BEFORE express.json() to get the raw payload
app.use('/api/v1/webhooks', webhookRoutes);

// Parse JSON for all other routes
app.use(express.json());

// ──── API Routes ──────────────────────────────────────────────
app.use('/api/auth', authRoutes);
app.use('/api/v1/donations', donationRoutes);
app.use('/api/v1/checkout', checkoutRoutes);
app.use('/api/v1/products', productRoutes);
app.use('/api/subjects', subjectRoutes);
app.use('/api/questions', questionRoutes);
app.use('/api/quiz', quizRoutes);
app.use('/api/dashboard', dashboardRoutes);
app.use('/api/admin', adminRoutes);

// ──── Health Check ────────────────────────────────────────────
app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// ──── Global Error Handler ────────────────────────────────────
app.use((err, req, res, next) => {
    console.error('[Server Error]', err);
    res.status(500).json({ error: 'Internal server error' });
});

// ──── Start Server ────────────────────────────────────────────
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
});
