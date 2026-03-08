# NPSE Prep Platform --- Dashboard System PRD

Date: 7 March 2026

## 1. Product Overview

The NPSE Prep Dashboard System is the authenticated core of the NPSE
Prep learning platform. It provides three independent interfaces
designed for different users:

-   Parent Dashboard
-   Pupil Learning Dashboard
-   Admin Control Panel

Each dashboard serves a different role in the platform ecosystem.

  User     Primary Role        Core Purpose
  -------- ------------------- --------------------------------------
  Parent   Account owner       Manage children and monitor learning
  Pupil    Learner             Study NPSE subjects
  Admin    Platform operator   Manage system content and users

The dashboards share the same backend system but operate as separate
product experiences.

------------------------------------------------------------------------

## 2. Product Goals

### Primary Goal

Provide a structured and personalised learning environment that prepares
pupils for the NPSE exam.

### Secondary Goals

1.  Give parents clear visibility into their child's progress.
2.  Provide adaptive learning experiences for pupils.
3.  Allow administrators to manage educational content and system
    operations efficiently.

------------------------------------------------------------------------

## 3. Key Success Metrics

  Metric                    Target
  ------------------------- --------------------------
  Daily active pupils       30% of registered pupils
  Quiz completion rate      70%
  Subscription conversion   8--12%
  Weekly parent logins      40%
  Retention rate            \>60%

------------------------------------------------------------------------

## 4. User Types

### Parent

The parent is the primary customer.

Responsibilities: - Create pupil accounts - Manage subscription -
Monitor progress - Download worksheets

Parents do not interact directly with quizzes or learning tools.

### Pupil

The pupil is the learning user.

Responsibilities: - Complete quizzes - Take mock exams - Review
mistakes - Practise topics - Use educational games

### Admin

The admin manages the platform.

Responsibilities: - Manage question bank - Manage users - Upload
content - Monitor analytics - Manage subscriptions

------------------------------------------------------------------------

## 5. User Flows

### Parent Flow

Sign Up → Create Child Profile → Diagnostic Quiz → Parent Dashboard →
Subscribe → Monitor Progress

### Pupil Flow

Login → View Daily Mission → Practice → Review Mistakes → Play Games →
Track Progress

### Admin Flow

Login → Manage Questions → Monitor Analytics → Manage Users → Upload
Content

------------------------------------------------------------------------

## 6. Parent Dashboard

### Purpose

Allow parents to manage children, monitor progress, and control
subscriptions.

### Layout

-   Overview
-   Children
-   Progress Reports
-   Worksheets
-   Subscription
-   Notifications
-   Account Settings

### Overview Page

Displays high-level information: - Children summary - Latest activity -
Subject mastery summary - Subscription status

### Children Management

Parents can: - Add child - Edit child - Delete child - View progress

Fields: - Name - Age - School - Class - Target Exam Year

### Progress Reports

Metrics include: - Subject mastery - Topic mastery - Quiz performance -
Activity history

Charts: - Weekly progress - Accuracy rate - Quiz history

### Worksheets

Parents can download printable resources: - Daily worksheet - Previous
worksheets - Subject worksheets Format: PDF

### Subscription

Parents manage billing: - View plan - Upgrade plan - Renew
subscription - Payment history

Payment integration: Monime

### Notifications

Examples: - Child completed quizzes - Progress improvements -
Subscription expiry reminders

------------------------------------------------------------------------

## 7. Pupil Learning Dashboard

### Purpose

Provide a simple, engaging learning environment.

### Layout

-   Today's Mission
-   Practice
-   Mock Exams
-   Subjects
-   Games
-   Worksheets
-   Progress

### Today's Mission

Daily recommended activities such as: - Review mistakes - Practice a
weak topic - Play a learning game

### Practice Mode

Options: - Adaptive Practice - Topic Practice - Review Mistakes

### Mock Exams

Simulates real NPSE exam papers: - Select year - Timed exam - Results
summary

### Subjects

-   Mathematics
-   English
-   Quantitative Reasoning
-   Verbal Reasoning
-   General Paper

Each contains topics, subtopics, lessons, and practice questions.

### Educational Games

Examples: - Word builder - Anagrams - Number patterns - Vocabulary
quizzes

### Progress

Displays: - Subject mastery - Topics mastered - Areas needing
improvement

------------------------------------------------------------------------

## 8. Admin Dashboard

### Purpose

Allow administrators to manage the platform.

### Layout

-   Dashboard
-   Users
-   Pupils
-   Questions
-   Subjects
-   Worksheets
-   Subscriptions
-   Analytics
-   Settings

### User Management

Admin can: - View parents - Suspend accounts - Reset passwords

### Question Bank Management

Fields: - Question - Options - Correct answer - Subject - Topic -
Subtopic - Difficulty - Year - Explanation

### Content Management

Admin manages: - Lessons - Topics - Subtopics - Worksheets - Game
question pools

### Subscription Management

Admin can: - View active subscriptions - Manage plans - Track revenue

### Analytics

Displays: - Total users - Active pupils - Revenue - Quiz completion
rate - Popular topics - Difficult questions

------------------------------------------------------------------------

## 9. Technical Requirements

Frontend: - React (Vite)

Suggested routing: - /dashboard/parent - /dashboard/pupil - /admin

Backend: - Node.js - PostgreSQL - REST API

------------------------------------------------------------------------

## 10. Database Overview

Core tables: - users - parents - pupils - subscriptions - subjects -
topics - subtopics - questions - question_attempts - quiz_sessions -
worksheets - progress_records

------------------------------------------------------------------------

## 11. Security Requirements

Role-based access control:

  Role     Access
  -------- ------------------
  Parent   child management
  Pupil    learning content
  Admin    full system

------------------------------------------------------------------------

## 12. Future Enhancements

-   Teacher dashboards
-   Classroom analytics
-   AI tutoring
-   Performance prediction
-   Leaderboards

------------------------------------------------------------------------

## 13. Development Phases

Phase 1: Authentication + Pupil Dashboard

Phase 2: Parent Dashboard

Phase 3: Admin Panel

Phase 4: Analytics + Recommendation Engine

------------------------------------------------------------------------

## 14. Product Vision

By the time a pupil sits the NPSE exam: - All high-frequency topics have
been practised - Weak areas have been corrected - Multiple mock exams
have been completed - Parents have clear insight into progress

The platform becomes a structured preparation system rather than simply
a quiz repository.
