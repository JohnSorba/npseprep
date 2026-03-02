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
- Responsive layout for all screen sizes.
- All elements of the games including buttons should be within the mobile screen size.

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


---

# Game 4: Pattern Completion (Matrix Logic)

## Purpose
Train logical and spatial reasoning by finding the piece that completes a 3×3 pattern matrix — the classic IQ-style matrix question adapted for NPSE pupils.

## Core Loop
1. User selects difficulty (Starter / Explorer / Champion).
2. A 3×3 grid of shapes is displayed with the bottom-right cell hidden.
3. User examines rows, columns and diagonals to deduce the missing piece.
4. User taps one of 4 answer options.
5. Feedback and explanation are shown; user advances.

## Rule Types (8 total)
| # | Rule | Description |
|---|------|-------------|
| 1 | Shape by Row | Each row cycles through 3 shapes; colour is constant per row. |
| 2 | Color by Column | Each column cycles through 3 colours; shape is constant per column. |
| 3 | Counting Dots | Dot count increases +1 per cell reading left→right and top→bottom. |
| 4 | Diagonal | Each diagonal uses the same shape. |
| 5 | Rotating Colors | All cells share a shape; colour sequence rotates by one each row. |
| 6 | Latin Square | Every row contains each shape exactly once (mini-Sudoku). |
| 7 | Growing Quantity | Same shape appears 1, 2 then 3 times across each row. |
| 8 | Filled vs. Outline | Cells alternate filled and outlined in a checkerboard pattern. |

## Rendering
- Shapes rendered as live SVG elements: circle, square, triangle, diamond, star, hexagon, cross, arrow.
- Count dots rendered as dice-style SVG dot patterns.
- Colour palette: red, blue, green, purple, orange, teal.

## Difficulty Configuration
| Level | Questions | Rule Types Available |
|-------|-----------|---------------------|
| Starter | 6 | Rules 1, 2, 3, 5 |
| Explorer | 8 | Rules 1–6 |
| Champion | 10 | All 8 rules |

## Scoring
- Correct on first try: full points.
- Streak bonus shown (🔥) after 2+ consecutive correct.
- Stars awarded: 3 (≥90%), 2 (≥60%), 1 (<60%).

## UX Screens
1. **Setup** — Difficulty selector with rule-type count preview.
2. **Gameplay** — 3×3 matrix, pulsing "?" cell, 4-option choice grid.
3. **Results** — Stars, accuracy, streak, per-question dots.

---

# Game 5: Number Sequences

## Purpose
Reinforce pattern recognition and arithmetic reasoning by finding a number hidden mid-sequence across 6 different sequence types.

## Core Loop
1. User picks difficulty.
2. A sequence of 6–7 numbers is shown with one position replaced by "?".
3. The hidden number is always buried in the middle (positions 1–5) — not at either end.
4. User selects the correct value from 4 options.
5. Colour-coded reveal and rule explanation shown; user advances.

## Sequence Types (6 total)
| # | Type | Description |
|---|------|-------------|
| 1 | Arithmetic | Common difference added/subtracted each step. |
| 2 | Geometric | Each term multiplied by a constant ratio (×2, ×3, ×4, ×½). |
| 3 | Perfect Squares | n² terms in consecutive order. |
| 4 | Fibonacci | Each term = sum of the two before it. |
| 5 | Growing Steps | The difference itself grows by 1 each time. |
| 6 | Alternating | Two interleaved arithmetic sequences. |

## Difficulty Configuration
| Level | Questions | Sequence Types |
|-------|-----------|---------------|
| Starter | 6 | Arithmetic, Geometric, Squares |
| Explorer | 8 | Types 1–5 |
| Champion | 10 | All 6 types |

## Distractors
- 3 plausible wrong answers generated by adding ±1 to ±6 offsets to the correct answer.
- All answers guaranteed positive and non-equal.

## UX Screens
1. **Setup** — Difficulty selector with type-count preview; animated number strip teaser.
2. **Gameplay** — Horizontal scrollable sequence strip; hidden cell pulses; 2×2 answer grid.
3. **Results** — Stars, accuracy, streak.

---

# Game 6: Clock Angles

## Purpose
Build time-reading and geometry skills simultaneously with three rotating challenge types using fully interactive SVG clocks.

## Core Loop
1. User picks difficulty.
2. A challenge is presented (one of three types below).
3. User selects from 4 options (or 3 for symbol mode).
4. On reveal: arc between hands is drawn on the clock face; explanation shown.
5. User advances.

## Challenge Types (3 total)
| # | Type | Description |
|---|------|-------------|
| A | Find the Angle | A time is given; calculate the angle between hour and minute hands. |
| B | Read the Clock | A time string is given; pick which of 4 SVG clocks shows it. |
| C | Name the Time | A single clock is shown; pick the correct time string from 4 options. |

## Clock SVG Specification
- Circular face with 12 hour marks (bold at 3/6/9/12).
- Hour numbers rendered as SVG text.
- Hour hand: dark (#1e293b), thick, 55% radius.
- Minute hand: indigo (#6366f1), thinner, 75% radius.
- On reveal: filled sector arc drawn between the two hands.

## Difficulty Configuration
| Level | Questions | Challenge Types |
|-------|-----------|----------------|
| Starter | 6 | Read Clock, Name Time |
| Explorer | 8 | All 3 types |
| Champion | 10 | All 3 types |

## UX Screens
1. **Setup** — Difficulty picker; animated floating clock in hero.
2. **Gameplay — Type A** — Single large clock + 2×2 degree option grid.
3. **Gameplay — Type B** — 2×2 grid of 4 clocks, each labelled A–D.
4. **Gameplay — Type C** — Single clock + 2×2 time-string option grid.
5. **Results** — Stars, accuracy, streak.

---

# Game 7: Fraction Visualizer

## Purpose
Deepen understanding of fractions through visual models — pie charts and bar models — covering identification, comparison, and equivalence.

## Core Loop
1. User picks difficulty.
2. A visual (pie chart or bar model) is displayed alternating each question.
3. User performs one of three activities (based on difficulty).
4. Feedback and explanation shown; user advances.

## Activity Types (3 total)
| # | Type | Description |
|---|------|-------------|
| 1 | Identify | A shaded pie/bar is shown; pick the fraction it represents from 4 options. |
| 2 | Compare | Two visuals side-by-side; choose the correct symbol (<, >, =). |
| 3 | Equivalent | A simple fraction is shown; find an equivalent fraction from 4 options. |

## Visual Modes
- **Pie Chart**: SVG circle divided into `d` equal sectors; `n` sectors filled. Division lines rendered as white radial lines.
- **Bar Model**: SVG rectangle divided into `d` equal cells; first `n` cells filled.
- Mode alternates every question (even → pie, odd → bar).

## Difficulty Configuration
| Level | Questions | Activity Types |
|-------|-----------|---------------|
| Starter | 6 | Identify only |
| Explorer | 8 | Identify, Compare |
| Champion | 10 | All 3 activity types |

## Answer Options
- Fraction buttons display numerator and denominator in a typeset fraction layout (n over rule over d).
- Symbol buttons (Compare mode) display <, > and = at large font size.

## UX Screens
1. **Setup** — Difficulty picker; two animated pie charts in hero.
2. **Gameplay — Identify** — Single pie/bar visual + 4 fraction buttons.
3. **Gameplay — Compare** — Two visuals side-by-side + 3 symbol buttons.
4. **Gameplay — Equivalent** — Pie/bar of base fraction + 4 fraction buttons.
5. **Results** — Stars, accuracy, streak.

---

End of file.

