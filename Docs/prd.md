# PRODUCT REQUIREMENTS DOCUMENT (PRD)

## Product Name
**NPSE Prep**

## Document Version
1.0

## Product Owner
Daniel Ndanema

## Date
14 February 2026

---

# 1. Purpose

This document defines the functional and non-functional requirements for the NPSE Prep web platform.

The product will provide structured digital exam preparation resources for pupils preparing for the National Primary School Examination (NPSE) in Sierra Leone.

---

# 2. Product Vision

To create a scalable, structured, and accessible digital exam preparation platform that improves pupil performance and provides measurable academic insight.

---

# 3. Objectives

1. Provide curriculum-aligned notes across all NPSE subjects.
2. Deliver interactive quizzes with automated marking.
3. Simulate real NPSE mock examinations.
4. Provide performance tracking dashboards.
5. Enable freemium and paid subscription models.

---

# 4. Target Users

## 4.1 Primary Users
- Prep 6 pupils (ages 10–12)

## 4.2 Secondary Users
- Parents  
- Teachers  
- School administrators  

---

# 5. Scope

## 5.1 In Scope (MVP)

- Public marketing website
- Subject notes (structured by topic)
- Topic-based quizzes
- Full mock NPSE simulation
- User authentication
- Basic performance dashboard
- Admin content management panel

## 5.2 Out of Scope (Phase 1)

- BECE/WASSCE modules
- WhatsApp/SMS integration
- School-level analytics dashboard
- Offline mobile application

---

# 6. Functional Requirements

---

## 6.1 Public Website

### 6.1.1 Homepage

The homepage shall include:

- Clear value proposition
- Subject overview grid
- Call-to-action buttons
- Featured quizzes
- Pricing summary
- Support/Donate section

### 6.1.2 Subjects Page

**Goal:** Demonstrate curriculum coverage and quality

Subjects included in MVP:

* Mathematics
* English Language (Grammar & Writing)
* Quantitative Aptitude
* Verbal Aptitude
* General Paper (Science, Agriculture, Home Economics, Physical Health Education and Social Stuides)

The system shall:

- Display all NPSE subjects
- Allow navigation to subject detail pages

### 6.1.3 Subject Detail Page

Each subject page shall:

- Display topic list
- Provide structured notes per topic
- Provide quiz per topic
- Indicate premium vs free content

---

## 6.2 User Authentication

The system shall:

- Allow user registration (email + password)
- Allow login/logout
- Hash passwords securely
- Store user role (pupil/admin)

**Optional (Phase 1.1):**
- Parent account linked to pupil

---

## 6.3 Quiz Engine

The system shall:

1. Present multiple-choice questions (A–E).
2. Allow selection of one answer per question.
3. Support timed quizzes.
4. Auto-grade upon submission.
5. Display:
   - Score
   - Correct answers
   - Explanations
6. Store attempt history.

---

## 6.4 Mock Exam Module

The system shall:

1. Generate 40-question mock exams.
2. Randomly select questions by subject weight.
3. Enforce time limit.
4. Auto-submit when time expires.
5. Provide breakdown:
   - Overall score
   - Score per subject
   - Weak topic identification

---

## 6.5 User Dashboard

The pupil dashboard shall display:

- Total quizzes taken
- Average score
- Recent attempts
- Weakest topics
- Mock exam results

---

## 6.6 Admin Panel

The system shall provide an admin interface to:

- Create/edit/delete questions
- Create/edit/delete topics
- Upload notes
- Assign questions to topics
- View user statistics
- Manage premium access flags

---

# 7. Content Requirements

Each question must include:

- Question ID
- Subject
- Topic
- Difficulty level
- Question stem
- Five options
- Correct answer
- Detailed explanation
- Tags

Notes must:

- Follow curriculum structure
- Use clear headings
- Include examples
- Be structured for readability

---

# 8. Non-Functional Requirements

## 8.1 Performance

- Page load under 3 seconds on 3G network.
- Optimised for low-bandwidth environments.
- Mobile-first responsive design.

## 8.2 Scalability

- Support at least 10,000 concurrent users.
- Modular backend architecture.
- Database indexing for fast question retrieval.

## 8.3 Security

- Password hashing (bcrypt or equivalent).
- JWT-based authentication.
- Role-based access control.
- Input validation and sanitisation.

## 8.4 Availability

- 99% uptime target.
- Daily database backup.

---

# 9. Technical Constraints

- Frontend: React.js
- Backend: Node.js (Express)
- Database: PostgreSQL
- Hosting: Cloud/VPS compatible
- Payment Integration (Phase 2): Mobile Money APIs

---

# 10. Monetisation Model

## 10.1 Free Tier

- Limited quizzes
- Limited notes
- Limited mock exams

## 10.2 Premium Tier

- Unlimited quizzes
- Full mock access
- Detailed analytics
- Downloadable PDFs

---

# 11. KPIs

Initial Success Metrics:

- 1,000 registered users in first 6 months
- 25% weekly active users
- 15% premium conversion rate
- Average quiz completion rate above 60%

---

# 12. Risks & Dependencies

| Risk | Mitigation |
|------|------------|
| Poor internet access | Optimise for low data |
| Low digital literacy | Simple UX |
| Content creation overload | Structured tagging system |
| Payment friction | Mobile money integration |

---

# 13. Acceptance Criteria (MVP Release)

The product will be considered MVP-ready when:

- Users can register and log in.
- Users can take topic-based quizzes.
- Users can take full mock exams.
- Scores are automatically calculated.
- Results are stored in dashboard.
- Admin can manage content.
- Premium gating works.

---

# Closing Note

This PRD defines what the product must do — not how it is implemented internally.

Engineering specifications, database schemas, and API contracts should be developed in a separate Technical Specification Document (TSD).
