/**
 * Questions API Routes
 * GET /api/questions/topic/:topicId  – questions by topic
 * GET /api/questions/mock            – generate a mock exam (40 random questions)
 */

const express = require('express');
const router = express.Router();
const db = require('../db');

// ── Get questions by topic ─────────────────────────────────────
router.get('/topic/:topicId', async (req, res) => {
    try {
        const { limit = 20, offset = 0 } = req.query;
        const result = await db.query(
            `SELECT id, subject_id, topic_id, difficulty, stem,
                    option_a, option_b, option_c, option_d, option_e,
                    correct_answer, explanation, tags
             FROM questions
             WHERE topic_id = $1
             ORDER BY RANDOM()
             LIMIT $2 OFFSET $3`,
            [req.params.topicId, parseInt(limit), parseInt(offset)]
        );
        res.json(result.rows);
    } catch (err) {
        console.error('[Questions] GET /topic/:topicId error:', err);
        res.status(500).json({ error: 'Failed to fetch questions' });
    }
});

// ── Generate mock exam (40 questions, weighted by subject) ─────
router.get('/mock', async (req, res) => {
    try {
        // Get all subjects
        const subjectsResult = await db.query('SELECT id FROM subjects');
        const subjectIds = subjectsResult.rows.map(s => s.id);

        if (subjectIds.length === 0) {
            return res.json([]);
        }

        // Distribute 40 questions evenly across subjects
        const questionsPerSubject = Math.floor(40 / subjectIds.length);
        const remainder = 40 % subjectIds.length;

        let allQuestions = [];

        for (let i = 0; i < subjectIds.length; i++) {
            const count = questionsPerSubject + (i < remainder ? 1 : 0);
            const result = await db.query(
                `SELECT id, subject_id, topic_id, difficulty, stem,
                        option_a, option_b, option_c, option_d, option_e,
                        correct_answer, explanation, tags
                 FROM questions
                 WHERE subject_id = $1
                 ORDER BY RANDOM()
                 LIMIT $2`,
                [subjectIds[i], count]
            );
            allQuestions = allQuestions.concat(result.rows);
        }

        // Shuffle the combined array
        for (let i = allQuestions.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [allQuestions[i], allQuestions[j]] = [allQuestions[j], allQuestions[i]];
        }

        res.json(allQuestions);
    } catch (err) {
        console.error('[Questions] GET /mock error:', err);
        res.status(500).json({ error: 'Failed to generate mock exam' });
    }
});

module.exports = router;
