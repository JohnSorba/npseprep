/**
 * Quiz Submission API
 * POST /api/quiz/submit  – submit quiz answers, get score & breakdown
 */

const express = require('express');
const router = express.Router();
const db = require('../db');
const { authenticateToken, optionalAuth } = require('../middleware/auth');

// ── Submit a quiz attempt ──────────────────────────────────────
router.post('/submit', optionalAuth, async (req, res) => {
    try {
        const { answers, quizType = 'topic' } = req.body;

        if (!answers || !Array.isArray(answers) || answers.length === 0) {
            return res.status(400).json({ error: 'Answers array is required' });
        }

        // Fetch correct answers for all submitted questions
        const questionIds = answers.map(a => a.questionId);
        const questionsResult = await db.query(
            `SELECT id, correct_answer, subject_id, topic_id
             FROM questions
             WHERE id = ANY($1)`,
            [questionIds]
        );

        const questionsMap = {};
        questionsResult.rows.forEach(q => {
            questionsMap[q.id] = q;
        });

        // Grade each answer
        let score = 0;
        const gradedAnswers = [];
        const subjectScores = {};
        const topicScores = {};

        for (const answer of answers) {
            const question = questionsMap[answer.questionId];
            if (!question) continue;

            const isCorrect = answer.selected.toUpperCase() === question.correct_answer.toUpperCase();
            if (isCorrect) score++;

            gradedAnswers.push({
                questionId: answer.questionId,
                selected: answer.selected,
                correct: question.correct_answer,
                isCorrect
            });

            // Track per-subject scores
            const subId = question.subject_id;
            if (!subjectScores[subId]) subjectScores[subId] = { correct: 0, total: 0 };
            subjectScores[subId].total++;
            if (isCorrect) subjectScores[subId].correct++;

            // Track per-topic scores
            const topId = question.topic_id;
            if (!topicScores[topId]) topicScores[topId] = { correct: 0, total: 0 };
            topicScores[topId].total++;
            if (isCorrect) topicScores[topId].correct++;
        }

        // Identify weak topics (< 50% correct)
        const weakTopics = Object.entries(topicScores)
            .filter(([, data]) => (data.correct / data.total) < 0.5)
            .map(([topicId, data]) => ({
                topicId,
                correct: data.correct,
                total: data.total,
                percentage: Math.round((data.correct / data.total) * 100)
            }));

        // If user is authenticated, save the attempt
        let attemptId = null;
        if (req.user) {
            const attemptResult = await db.query(
                `INSERT INTO quiz_attempts (user_id, quiz_type, score, total_questions)
                 VALUES ($1, $2, $3, $4) RETURNING id`,
                [req.user.id, quizType, score, answers.length]
            );
            attemptId = attemptResult.rows[0].id;

            // Save individual answers
            for (const ga of gradedAnswers) {
                await db.query(
                    `INSERT INTO attempt_answers (attempt_id, question_id, selected_answer, is_correct)
                     VALUES ($1, $2, $3, $4)`,
                    [attemptId, ga.questionId, ga.selected, ga.isCorrect]
                );
            }
        }

        res.json({
            attemptId,
            score,
            totalQuestions: answers.length,
            percentage: Math.round((score / answers.length) * 100),
            breakdown: subjectScores,
            weakTopics,
            gradedAnswers
        });
    } catch (err) {
        console.error('[Quiz] POST /submit error:', err);
        res.status(500).json({ error: 'Failed to submit quiz' });
    }
});

module.exports = router;
