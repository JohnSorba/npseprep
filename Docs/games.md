# games.md — Interactive Game Specifications (NPSE Prep)

## Overview
This document defines the functional specification for three mobile-first educational games to be added to the NPSE Prep website. The games must:
- Improve retention through retrieval practice, concept association, and error-spotting.
- Reuse the same content repository as quizzes/notes (single source of truth).
- Provide immediate feedback and short sessions (1–3 minutes).
- Work smoothly on low-end Android devices and variable network conditions.

### Target Users
- Primary: NPSE Prep 6 pupils (approx. ages 10–12)
- Secondary: Parents/teachers monitoring progress

### Global Requirements (All Games)
**Mobile-first UI**
- Large tap targets (minimum 44px).
- Minimal typing; prefer tapping/dragging.
- Offline-friendly: cache current session content; allow submission when online.

**Feedback & Learning**
- Every question interaction yields feedback:
  - Correct/Incorrect
  - Short explanation (1–3 sentences minimum)
  - Optional hint on retry (where relevant)

**Progress & Mastery**
- Track per-topic mastery using a simple model:
  - `mastery_score` increases on correct answers, decreases on repeated errors.
  - Display “Mastered / Improving / Needs Work”.

**Fairness**
- Avoid punishing slow readers: “timed” is optional or adjustable.
- Do not overemphasise leaderboards; use personal bests by default.

**Accessibility**
- Colour-independent indicators (icons + text).
- Screen reader-friendly labels for key actions.
- Reduced motion option.

**Instrumentation (Analytics)**
Capture:
- session_start / session_end
- question_shown
- answer_submitted
- answer_result
- hint_used
- retry_count
- time_to_answer
- topic_id / subtopic_id
- difficulty
- device_type (basic)
- outcome: pass/fail for session goal

---

## Shared Content Model (Recommended)
All three games should pull from a unified question bank.

### Core Entities
- `Subject` (e.g., Mathematics, English, General Paper)
- `Topic` (e.g., Fractions, Parts of Speech)
- `Subtopic`
- `Question`
- `Option` (for MCQ-like interactions)
- `Explanation`
- `Tag` (skills: “multiplication”, “punctuation”, “evaporation”, etc.)
- `GameVariantMapping` (links a question to suitable game formats)

### Question Fields (Minimum)
- `id`
- `subject_id`
- `topic_id`
- `subtopic_id`
- `stem` (question text)
- `options[]` (where applicable)
- `correct_answer` (option id / value / indices)
- `explanation` (detailed)
- `difficulty` (1–5)
- `tags[]`
- `curriculum_ref` (optional)
- `media` (optional: image/audio)
- `game_modes[]` (e.g., ["rapid_recall", "match_link", "spot_mistake"])
- `time_limit_sec` (optional; used by Rapid Recall)

### Session Output (All Games)
- `session_id`
- `user_id`
- `game_id`
- `topic_id`
- `questions_presented[]`
- `answers[]` (per item: answer, correctness, time, hint_used, retries)
- `score`
- `accuracy`
- `duration_sec`
- `mastery_delta`
- `completed_at`

---

# Game 1: Rapid Recall (Timed Micro-Drills)

## Purpose
Build fast retrieval and confidence through short question bursts with immediate feedback.

## Core Loop
1. User selects Subject → Topic → (optional) Difficulty.
2. System generates a set of 10–15 items.
3. User answers quickly (tap-based).
4. Instant feedback after each answer (lightweight).
5. End-of-session summary + recommended next action.

## Content Types Supported
- MCQ (best for speed)
- True/False
- Short numeric input (optional; keep minimal typing)

## Session Rules
- Default: 10 questions
- Optional: 15 questions for “Challenge Mode”
- Time settings:
  - Standard: 60 seconds total
  - Relaxed: no timer (for accessibility/new learners)
- Question difficulty mixing:
  - 60% difficulty 1–2
  - 30% difficulty 3
  - 10% difficulty 4–5 (optional “stretch”)

## Scoring & Motivation
- Score = Correct answers + speed bonus (only if timer mode enabled)
- Streak indicator:
  - Show current streak count
  - Small reward on streak milestones (e.g., 5 in a row)
- Personal best per topic:
  - best accuracy
  - best score (timed)
  - longest streak

## Feedback
- Correct: show a brief reinforcement + optional “why”
- Incorrect: show the correct answer + explanation snippet
- Allow “Review” button to see full explanation after the session

## UX Screens
1. **Rapid Recall Setup**
   - Topic picker
   - Difficulty selector (optional)
   - Timer toggle (Standard / Relaxed)
2. **Gameplay**
   - Progress: “3/10”
   - Timer bar (if enabled)
   - Question + options
   - Feedback toast (correct/incorrect)
3. **Summary**
   - Accuracy, correct count, time used
   - Top missed concepts (tags)
   - “Retry Missed” + “Study Topic” buttons

## Failure Handling
- If network drops mid-session: continue using cached questions, queue results for upload.
- If user exits early: mark session as “partial”, still store answers.

## Admin/Authoring Requirements
- For Rapid Recall eligibility:
  - Must have clear stem
  - Must have unambiguous correct answer
  - Explanation must be at least 2 sentences (rule enforced)

---

# Game 2: Match & Link (Concept Pairing)

## Purpose
Improve understanding by matching definitions, examples, processes, or equivalents.

## Core Loop
1. User selects Topic.
2. System loads a matching set of pairs (or groups).
3. User matches by drag-and-drop or tap-to-pair.
4. Instant validation and corrections.
5. Summary + review of mismatches.

## Match Formats
- **Pair Matching (2-column)**
  - Term ↔ Definition
  - Cause ↔ Effect
  - Word ↔ Synonym/Antonym
  - Fraction ↔ Decimal/Percentage
- **Category Matching (grouping)**
  - Drag items into categories (e.g., “Solid / Liquid / Gas”)

## Session Rules
- Default: 6 pairs (or 8 for advanced)
- Shuffle both sides; prevent pattern learning.
- Optional “Hint”:
  - reveal one correct pair
  - reduces max score

## Scoring
- Base points for each correct match.
- Penalise excessive moves:
  - e.g., -1 point after 2 incorrect attempts on the same item
- Accuracy still tracked as primary metric.

## Feedback
- On wrong match:
  - Brief explanation: why it doesn’t fit
  - Keep learning tone; do not shame the pupil
- On completion:
  - Show “Key takeaways” list (auto-generated from explanations)

## UX Screens
1. **Match Setup**
   - Topic selection
   - Mode selection: “Pairs” or “Categories” (depending on content availability)
2. **Gameplay**
   - Two columns with cards
   - Drag-and-drop or tap-to-select-left then tap-right
   - “Check” button or auto-check on match (configurable)
3. **Summary**
   - Correct matches
   - Items to revisit (links to notes)
   - “Play Another Set” button

## Content Requirements
A question must include:
- `match_pairs`: array of `{left_text, right_text, explanation}`
- Optional media per card (image for Science/Agriculture diagrams)

## Admin/Authoring Requirements
- Pair sets must be reviewed for:
  - Similar wording collisions (avoid two definitions that look nearly identical)
  - Appropriate reading level
  - Clear explanations for common misconceptions

---

# Game 3: Spot the Mistake (Error Detection)

## Purpose
Train deeper understanding by identifying errors in worked solutions, statements, or sentences.

## Core Loop
1. User selects Topic (e.g., Fractions, Punctuation, Simple Science Facts).
2. System shows a “worked example” or “sentence”.
3. User taps the incorrect part (or selects from highlighted segments).
4. System explains the mistake and shows the corrected version.
5. Summary: common error types + targeted practice.

## Content Types Supported
- **Mathematics worked solution**
  - Example: long division steps
  - Fractions simplification
  - Percent calculations
- **English grammar**
  - Sentence with punctuation/tense error
  - Wrong word choice
- **Science/Social Studies statements**
  - Incorrect fact or wrong conclusion

## Interaction Design (Important)
To avoid precision issues on small screens:
- Split the content into tappable segments:
  - Word-level for sentences
  - Step-level for maths (Step 1, Step 2, Step 3)
- Provide “I can’t find it” button:
  - reveals the error after a short delay
  - counts as hint usage

## Session Rules
- Default: 8 items
- Allow 1–2 retries per item:
  - First incorrect tap: gentle hint (“Look at step 2…”)
  - Second incorrect tap: reveal correct segment + explain

## Scoring
- Correct on first try: full points
- Correct on retry: reduced points
- Hint used: minimal points, but still counted for learning completion

## Feedback Requirements
Each item must provide:
- **What is wrong** (plain language)
- **Why it is wrong** (concept reference)
- **Correct version** (show corrected step/sentence)
- **Rule** (short rule statement, e.g., “A verb must agree with its subject.”)

## UX Screens
1. **Spot the Mistake Setup**
   - Topic selection
   - Toggle: “Math / English / Mixed” (if topic supports)
2. **Gameplay**
   - Display content in segments
   - User taps segment
   - Feedback panel opens with explanation and corrected version
3. **Summary**
   - Error categories (e.g., “place value”, “subject-verb agreement”)
   - Recommended practice: “Rapid Recall (Weak Tags)” button

## Authoring Format
Store error-detection items as:
- `prompt_display` (renderable content)
- `segments[]` (each segment has `id`, `text`, `type`)
- `wrong_segment_ids[]`
- `explanation`
- `correction_display`
- `rule_summary`
- `tags[]`

---

## Cross-Game Integration

### Topic Pages
Each topic page should surface:
- “Play Rapid Recall”
- “Play Match & Link”
- “Play Spot the Mistake”
Only show a game if content exists for that topic.

### Progress Dashboard (Pupil)
Show:
- Mastery per topic (colour + label)
- Last played games
- “Weak areas” (tags) with direct “Play” buttons

### Teacher/Parent View (Optional)
- Weekly accuracy trend
- Topics attempted vs. mastered
- Common mistake tags

---

## Non-Functional Requirements
- Performance: gameplay screen should load in under 2 seconds on average mobile networks once cached.
- Security: validate all submissions server-side; prevent score tampering.
- Data integrity: store raw answers and computed scores separately.
- Content moderation: admin role required to publish game content.

---

## MVP Delivery Recommendation
Build in this order:
1. Rapid Recall (fastest to deliver, reuses MCQ bank immediately)
2. Spot the Mistake (strong learning value; requires authoring tooling)
3. Match & Link (needs careful content creation to avoid ambiguity)

End of file.
