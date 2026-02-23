/**
 * Dashboard API Routes
 * GET /api/dashboard/summary – aggregate stats for the logged-in user
 */

const express = require('express');
const router = express.Router();
const db = require('../db');
const { authenticateToken } = require('../middleware/auth');

// ── Dashboard summary ──────────────────────────────────────────
router.get('/summary', authenticateToken, async (req, res) => {
    try {
        const userId = req.user.id;

        // Total quizzes taken
        const totalQuizzesResult = await db.query(
            'SELECT COUNT(*) AS count FROM quiz_attempts WHERE user_id = $1',
            [userId]
        );

        // Average score (percentage)
        const avgScoreResult = await db.query(
            `SELECT COALESCE(
                ROUND(AVG(score::decimal / NULLIF(total_questions, 0) * 100), 1),
                0
             ) AS avg_percentage
             FROM quiz_attempts WHERE user_id = $1`,
            [userId]
        );

        // Recent attempts (last 10)
        const recentResult = await db.query(
            `SELECT qa.id, qa.quiz_type, qa.score, qa.total_questions, qa.created_at,
                    ROUND(qa.score::decimal / NULLIF(qa.total_questions, 0) * 100, 1) AS percentage
             FROM quiz_attempts qa
             WHERE qa.user_id = $1
             ORDER BY qa.created_at DESC
             LIMIT 10`,
            [userId]
        );

        // Mock exam results
        const mockResults = await db.query(
            `SELECT qa.id, qa.score, qa.total_questions, qa.created_at,
                    ROUND(qa.score::decimal / NULLIF(qa.total_questions, 0) * 100, 1) AS percentage
             FROM quiz_attempts qa
             WHERE qa.user_id = $1 AND qa.quiz_type = 'mock'
             ORDER BY qa.created_at DESC
             LIMIT 5`,
            [userId]
        );

        // Weakest topics (aggregate from all attempts)
        const weakTopicsResult = await db.query(
            `SELECT t.id, t.name AS topic_name, s.name AS subject_name,
                    COUNT(aa.id) AS total_answers,
                    SUM(CASE WHEN aa.is_correct THEN 1 ELSE 0 END) AS correct_answers,
                    ROUND(
                        SUM(CASE WHEN aa.is_correct THEN 1 ELSE 0 END)::decimal /
                        NULLIF(COUNT(aa.id), 0) * 100, 1
                    ) AS accuracy
             FROM attempt_answers aa
             JOIN quiz_attempts qa ON aa.attempt_id = qa.id
             JOIN questions q ON aa.question_id = q.id
             JOIN topics t ON q.topic_id = t.id
             JOIN subjects s ON q.subject_id = s.id
             WHERE qa.user_id = $1
             GROUP BY t.id, t.name, s.name
             HAVING COUNT(aa.id) >= 3
             ORDER BY accuracy ASC
             LIMIT 5`,
            [userId]
        );

        // Subject performance
        const subjectPerf = await db.query(
            `SELECT s.id, s.name,
                    COUNT(aa.id) AS total_answers,
                    SUM(CASE WHEN aa.is_correct THEN 1 ELSE 0 END) AS correct_answers,
                    ROUND(
                        SUM(CASE WHEN aa.is_correct THEN 1 ELSE 0 END)::decimal /
                        NULLIF(COUNT(aa.id), 0) * 100, 1
                    ) AS accuracy
             FROM attempt_answers aa
             JOIN quiz_attempts qa ON aa.attempt_id = qa.id
             JOIN questions q ON aa.question_id = q.id
             JOIN subjects s ON q.subject_id = s.id
             WHERE qa.user_id = $1
             GROUP BY s.id, s.name
             ORDER BY s.name`,
            [userId]
        );

        res.json({
            totalQuizzes: parseInt(totalQuizzesResult.rows[0].count),
            averageScore: parseFloat(avgScoreResult.rows[0].avg_percentage),
            recentAttempts: recentResult.rows,
            mockExamResults: mockResults.rows,
            weakestTopics: weakTopicsResult.rows,
            subjectPerformance: subjectPerf.rows
        });
    } catch (err) {
        console.error('[Dashboard] GET /summary error:', err);
        res.status(500).json({ error: 'Failed to fetch dashboard data' });
    }
});

module.exports = router;
