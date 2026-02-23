# TECHNICAL SPECIFICATION DOCUMENT (TSD)

## Product Name
NPSE Prep

## Document Version
1.0

## Related Document
PRD v1.0

## Date
15 February 2026

---

# 1. Overview

This document defines the technical architecture, system design, database structure, API contracts, security model, and deployment strategy for the NPSE Prep web platform.

This document focuses on implementation details and engineering decisions.

---

# 2. System Architecture

## 2.1 Architecture Style

The system will use a modular client-server architecture.

- Frontend: React.js (SPA)
- Backend: Node.js with Express
- Database: PostgreSQL
- Authentication: JWT
- Hosting: Cloud VPS (scalable)

Architecture Type:
- REST-based API
- Stateless backend
- Token-based authentication
- Modular service structure

---

# 3. High-Level Architecture

Client (Browser)
    ↓ HTTPS
React Frontend (SPA)
    ↓ REST API
Node.js / Express Server
    ↓
PostgreSQL Database

Optional (Phase 2):
Payment Gateway Integration (Mobile Money APIs)

---

# 4. Frontend Specification

## 4.1 Technology Stack

- React.js (Functional components)
- React Router (Routing)
- Axios (API requests)
- Context API or Redux (State management)
- Chart.js or Recharts (Dashboard visualisation)
- TailwindCSS or CSS Modules (Styling)

## 4.2 Folder Structure

/src
  /components
  /pages
  /layouts
  /hooks
  /context
  /services
  /utils

## 4.3 Key Pages

- Homepage
- Subjects Page
- Subject Detail Page
- Quiz Page
- Mock Exam Page
- Dashboard Page
- Admin Panel
- Login / Register

## 4.4 State Management Strategy

- Global auth state via Context
- Quiz session state stored temporarily in memory
- Persistent data retrieved from backend only

---

# 5. Backend Specification

## 5.1 Technology Stack

- Node.js
- Express.js
- PostgreSQL
- JWT Authentication
- bcrypt (password hashing)

## 5.2 Project Structure

/server
  /controllers
  /routes
  /services
  /middlewares
  /models
  /utils
  app.js

## 5.3 API Design Principles

- RESTful endpoints
- JSON responses only
- Standard HTTP status codes
- Centralised error handling middleware

---

# 6. Database Design

## 6.1 Core Tables

### 6.1.1 Users

| Field | Type | Notes |
|-------|------|-------|
| id | UUID | Primary Key |
| name | VARCHAR | Required |
| email | VARCHAR | Unique |
| password_hash | TEXT | Hashed |
| role | VARCHAR | pupil/admin |
| subscription_type | VARCHAR | free/premium |
| created_at | TIMESTAMP | |

---

### 6.1.2 Subjects

| Field | Type |
|-------|------|
| id | UUID |
| name | VARCHAR |

---

### 6.1.3 Topics

| Field | Type |
|-------|------|
| id | UUID |
| subject_id | UUID (FK) |
| name | VARCHAR |

---

### 6.1.4 Questions

| Field | Type |
|-------|------|
| id | UUID |
| subject_id | UUID |
| topic_id | UUID |
| difficulty | VARCHAR |
| stem | TEXT |
| option_a | TEXT |
| option_b | TEXT |
| option_c | TEXT |
| option_d | TEXT |
| option_e | TEXT |
| correct_answer | CHAR(1) |
| explanation | TEXT |
| tags | TEXT[] |

---

### 6.1.5 QuizAttempts

| Field | Type |
|-------|------|
| id | UUID |
| user_id | UUID |
| quiz_type | VARCHAR (topic/mock) |
| score | INTEGER |
| total_questions | INTEGER |
| created_at | TIMESTAMP |

---

### 6.1.6 AttemptAnswers

| Field | Type |
|-------|------|
| id | UUID |
| attempt_id | UUID |
| question_id | UUID |
| selected_answer | CHAR(1) |
| is_correct | BOOLEAN |

---

# 7. API Endpoints

## 7.1 Authentication

POST /api/auth/register  
POST /api/auth/login  

Response:
{
  "token": "JWT_TOKEN",
  "user": { user object }
}

---

## 7.2 Subjects

GET /api/subjects  
GET /api/subjects/:id  

---

## 7.3 Topics

GET /api/topics/:subjectId  

---

## 7.4 Questions

GET /api/questions/topic/:topicId  
GET /api/questions/mock  

---

## 7.5 Quiz Submission

POST /api/quiz/submit  

Request:
{
  "answers": [
    { "questionId": "...", "selected": "A" }
  ]
}

Response:
{
  "score": 32,
  "breakdown": {},
  "weakTopics": []
}

---

## 7.6 Dashboard

GET /api/dashboard/summary  

---

## 7.7 Admin

POST /api/admin/questions  
PUT /api/admin/questions/:id  
DELETE /api/admin/questions/:id  

---

# 8. Security Specification

- Password hashing via bcrypt (minimum 10 rounds)
- JWT expiration (24h)
- Role-based access middleware
- Input validation (Joi or similar)
- Rate limiting on auth endpoints
- HTTPS enforced
- SQL injection prevention (parameterised queries)

---

# 9. Performance Optimisation

- Database indexing on:
  - subject_id
  - topic_id
  - user_id
- Pagination on question fetch
- Lazy loading for dashboard charts
- Compression middleware (gzip)

---

# 10. Scalability Plan

Phase 1:
Single VPS deployment

Phase 2:
- Load balancer
- Horizontal scaling (multiple Node instances)
- Redis caching layer
- CDN for static assets

Target:
Support 10,000+ concurrent users

---

# 11. Deployment Strategy

Environment Separation:

- Development
- Staging
- Production

CI/CD:
- GitHub
- Automated build
- Environment variables for secrets

Hosting:
- VPS (Ubuntu)
- Nginx reverse proxy
- PM2 process manager

---

# 12. Backup & Recovery

- Daily PostgreSQL automated backup
- Weekly full snapshot
- Encrypted storage
- 7-day retention minimum

---

# 13. Monitoring & Logging

- Winston logging
- Error logging service
- Server resource monitoring
- Uptime monitoring tool

---

# 14. Future Technical Enhancements

- Mobile app (React Native)
- AI-based weak-topic detection
- SMS/WhatsApp integration
- School-level analytics dashboard
- Offline caching via PWA

---

# Conclusion

This Technical Specification Document defines the implementation blueprint for NPSE Prep.

The system is designed to be modular, scalable, secure, and optimised for low-bandwidth environments typical in Sierra Leone.

Further documents recommended:
- API Contracts (detailed schema)
- Database ER Diagram
- Infrastructure-as-Code setup
- Security Audit Checklist
