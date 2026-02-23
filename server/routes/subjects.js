/**
 * Subjects & Topics API Routes
 * GET /api/subjects        – list all subjects
 * GET /api/subjects/:id    – get one subject with its topics
 * GET /api/topics/:subjectId – list topics for a subject
 */

const express = require('express');
const router = express.Router();
const db = require('../db');

// ── List all subjects ──────────────────────────────────────────
router.get('/', async (req, res) => {
    try {
        const result = await db.query('SELECT * FROM subjects ORDER BY name');
        res.json(result.rows);
    } catch (err) {
        console.error('[Subjects] GET / error:', err);
        res.status(500).json({ error: 'Failed to fetch subjects' });
    }
});

// ── Get a single subject with its topics ───────────────────────
router.get('/:id', async (req, res) => {
    try {
        const subjectResult = await db.query('SELECT * FROM subjects WHERE id = $1', [req.params.id]);
        if (subjectResult.rows.length === 0) {
            return res.status(404).json({ error: 'Subject not found' });
        }

        const topicsResult = await db.query(
            'SELECT * FROM topics WHERE subject_id = $1 ORDER BY name',
            [req.params.id]
        );

        res.json({
            ...subjectResult.rows[0],
            topics: topicsResult.rows
        });
    } catch (err) {
        console.error('[Subjects] GET /:id error:', err);
        res.status(500).json({ error: 'Failed to fetch subject' });
    }
});

// ── List topics for a subject ──────────────────────────────────
router.get('/:subjectId/topics', async (req, res) => {
    try {
        const result = await db.query(
            'SELECT * FROM topics WHERE subject_id = $1 ORDER BY name',
            [req.params.subjectId]
        );
        res.json(result.rows);
    } catch (err) {
        console.error('[Subjects] GET /:subjectId/topics error:', err);
        res.status(500).json({ error: 'Failed to fetch topics' });
    }
});

module.exports = router;
