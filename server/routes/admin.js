/**
 * Admin API Routes
 * POST   /api/admin/questions       – create a question
 * PUT    /api/admin/questions/:id    – update a question
 * DELETE /api/admin/questions/:id    – delete a question
 * POST   /api/admin/subjects        – create a subject
 * POST   /api/admin/topics          – create a topic
 * GET    /api/admin/stats           – user & content statistics
 */

const express = require('express');
const router = express.Router();
const db = require('../db');
const { authenticateToken, requireRole } = require('../middleware/auth');
const Joi = require('joi');

// All admin routes require authentication + admin role
router.use(authenticateToken, requireRole('admin'));

// ── Question validation schema ─────────────────────────────────
const questionSchema = Joi.object({
    subject_id: Joi.string().uuid().required(),
    topic_id: Joi.string().uuid().required(),
    difficulty: Joi.string().valid('easy', 'medium', 'hard').default('medium'),
    stem: Joi.string().min(5).required(),
    option_a: Joi.string().required(),
    option_b: Joi.string().required(),
    option_c: Joi.string().required(),
    option_d: Joi.string().required(),
    option_e: Joi.string().allow('', null),
    correct_answer: Joi.string().valid('A', 'B', 'C', 'D', 'E').required(),
    explanation: Joi.string().allow('', null),
    tags: Joi.array().items(Joi.string()).default([])
});

// ── CREATE Question ────────────────────────────────────────────
router.post('/questions', async (req, res) => {
    try {
        const { error, value } = questionSchema.validate(req.body);
        if (error) return res.status(400).json({ error: error.details[0].message });

        const {
            subject_id, topic_id, difficulty, stem,
            option_a, option_b, option_c, option_d, option_e,
            correct_answer, explanation, tags
        } = value;

        const result = await db.query(
            `INSERT INTO questions
             (subject_id, topic_id, difficulty, stem, option_a, option_b, option_c, option_d, option_e, correct_answer, explanation, tags)
             VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12)
             RETURNING *`,
            [subject_id, topic_id, difficulty, stem, option_a, option_b, option_c, option_d, option_e, correct_answer, explanation, tags]
        );

        res.status(201).json(result.rows[0]);
    } catch (err) {
        console.error('[Admin] POST /questions error:', err);
        res.status(500).json({ error: 'Failed to create question' });
    }
});

// ── UPDATE Question ────────────────────────────────────────────
router.put('/questions/:id', async (req, res) => {
    try {
        const { error, value } = questionSchema.validate(req.body);
        if (error) return res.status(400).json({ error: error.details[0].message });

        const {
            subject_id, topic_id, difficulty, stem,
            option_a, option_b, option_c, option_d, option_e,
            correct_answer, explanation, tags
        } = value;

        const result = await db.query(
            `UPDATE questions SET
                subject_id=$1, topic_id=$2, difficulty=$3, stem=$4,
                option_a=$5, option_b=$6, option_c=$7, option_d=$8, option_e=$9,
                correct_answer=$10, explanation=$11, tags=$12
             WHERE id=$13
             RETURNING *`,
            [subject_id, topic_id, difficulty, stem, option_a, option_b, option_c, option_d, option_e, correct_answer, explanation, tags, req.params.id]
        );

        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Question not found' });
        }

        res.json(result.rows[0]);
    } catch (err) {
        console.error('[Admin] PUT /questions/:id error:', err);
        res.status(500).json({ error: 'Failed to update question' });
    }
});

// ── DELETE Question ────────────────────────────────────────────
router.delete('/questions/:id', async (req, res) => {
    try {
        const result = await db.query(
            'DELETE FROM questions WHERE id = $1 RETURNING id',
            [req.params.id]
        );
        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Question not found' });
        }
        res.json({ message: 'Question deleted', id: result.rows[0].id });
    } catch (err) {
        console.error('[Admin] DELETE /questions/:id error:', err);
        res.status(500).json({ error: 'Failed to delete question' });
    }
});

// ── CREATE Subject ─────────────────────────────────────────────
router.post('/subjects', async (req, res) => {
    try {
        const { name } = req.body;
        if (!name || name.trim().length < 2) {
            return res.status(400).json({ error: 'Subject name is required (min 2 chars)' });
        }
        const result = await db.query(
            'INSERT INTO subjects (name) VALUES ($1) RETURNING *',
            [name.trim()]
        );
        res.status(201).json(result.rows[0]);
    } catch (err) {
        if (err.code === '23505') { // unique violation
            return res.status(400).json({ error: 'Subject already exists' });
        }
        console.error('[Admin] POST /subjects error:', err);
        res.status(500).json({ error: 'Failed to create subject' });
    }
});

// ── CREATE Topic ───────────────────────────────────────────────
router.post('/topics', async (req, res) => {
    try {
        const { subject_id, name } = req.body;
        if (!subject_id || !name || name.trim().length < 2) {
            return res.status(400).json({ error: 'subject_id and name are required' });
        }
        const result = await db.query(
            'INSERT INTO topics (subject_id, name) VALUES ($1, $2) RETURNING *',
            [subject_id, name.trim()]
        );
        res.status(201).json(result.rows[0]);
    } catch (err) {
        console.error('[Admin] POST /topics error:', err);
        res.status(500).json({ error: 'Failed to create topic' });
    }
});

// ── GET all questions (paginated) ──────────────────────────────
router.get('/questions', async (req, res) => {
    try {
        const { limit = 50, offset = 0, subject_id, topic_id } = req.query;

        let query = `SELECT q.*, s.name AS subject_name, t.name AS topic_name
                     FROM questions q
                     LEFT JOIN subjects s ON q.subject_id = s.id
                     LEFT JOIN topics t ON q.topic_id = t.id`;
        const params = [];
        const conditions = [];

        if (subject_id) {
            params.push(subject_id);
            conditions.push(`q.subject_id = $${params.length}`);
        }
        if (topic_id) {
            params.push(topic_id);
            conditions.push(`q.topic_id = $${params.length}`);
        }

        if (conditions.length > 0) {
            query += ' WHERE ' + conditions.join(' AND ');
        }

        query += ' ORDER BY q.subject_id, q.topic_id';
        params.push(parseInt(limit));
        query += ` LIMIT $${params.length}`;
        params.push(parseInt(offset));
        query += ` OFFSET $${params.length}`;

        const result = await db.query(query, params);

        // Also get total count
        let countQuery = 'SELECT COUNT(*) FROM questions';
        if (conditions.length > 0) {
            const countParams = [];
            const countConditions = [];
            if (subject_id) {
                countParams.push(subject_id);
                countConditions.push(`subject_id = $${countParams.length}`);
            }
            if (topic_id) {
                countParams.push(topic_id);
                countConditions.push(`topic_id = $${countParams.length}`);
            }
            countQuery += ' WHERE ' + countConditions.join(' AND ');
            const countResult = await db.query(countQuery, countParams);
            res.json({ questions: result.rows, total: parseInt(countResult.rows[0].count) });
        } else {
            const countResult = await db.query(countQuery);
            res.json({ questions: result.rows, total: parseInt(countResult.rows[0].count) });
        }
    } catch (err) {
        console.error('[Admin] GET /questions error:', err);
        res.status(500).json({ error: 'Failed to fetch questions' });
    }
});

// ── Admin Statistics ───────────────────────────────────────────
router.get('/stats', async (req, res) => {
    try {
        const [usersCount, questionsCount, subjectsCount, topicsCount, attemptsCount] = await Promise.all([
            db.query('SELECT COUNT(*) FROM users'),
            db.query('SELECT COUNT(*) FROM questions'),
            db.query('SELECT COUNT(*) FROM subjects'),
            db.query('SELECT COUNT(*) FROM topics'),
            db.query('SELECT COUNT(*) FROM quiz_attempts'),
        ]);

        const recentUsers = await db.query(
            `SELECT id, name, email, role, subscription_type, created_at
             FROM users ORDER BY created_at DESC LIMIT 10`
        );

        res.json({
            totalUsers: parseInt(usersCount.rows[0].count),
            totalQuestions: parseInt(questionsCount.rows[0].count),
            totalSubjects: parseInt(subjectsCount.rows[0].count),
            totalTopics: parseInt(topicsCount.rows[0].count),
            totalAttempts: parseInt(attemptsCount.rows[0].count),
            recentUsers: recentUsers.rows
        });
    } catch (err) {
        console.error('[Admin] GET /stats error:', err);
        res.status(500).json({ error: 'Failed to fetch statistics' });
    }
});

module.exports = router;
