# NPSE Prep

This project consists of a React frontend and a Node.js/Express backend.

## Structure

- `npse_app/`: Frontend (Vite + React)
- `server/`: Backend (Node.js + Express + PostgreSQL)

## Setup Instructions

### Backend

1. Navigate to the server directory:
   ```bash
   cd server
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the `server` directory with the following variables:
   ```
   DATABASE_URL=postgres://user:password@localhost:5432/npse_db
   JWT_SECRET=your_jwt_secret_key
   PORT=5000
   ```
   (Replace with your actual database credentials)
4. Initialize the database schema:
   Running the schema file `schema.sql` against your PostgreSQL database.
   ```bash
   psql -d npse_db -f schema.sql
   ```
5. Start the server:
   ```bash
   npm start
   ```

### Frontend

1. Navigate to the frontend directory:
   ```bash
   cd npse_app
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

## Features Implemented

### Frontend
- **Authentication** – Redesigned Login & Register pages with proper validation and visual feedback
- **Dashboard** – Personal progress tracker with quiz history, subject breakdown, weak topics, and quick actions
- **Admin Panel** – Tabbed interface for overview stats, CRUD question management, subject/topic creation, and user listing
- **Quiz Engine** – Subject-based practice quizzes with scoring and explanations
- **Mock Exams** – Marketing/information page (exam engine coming soon)
- **Notes** – Detailed study notes for Mathematics, English Language, General Paper, Quantitative Aptitude, and Verbal Aptitude
- **Games** – Rapid Recall and Vocabulary Builder interactive learning games
- **Responsive Navbar** – Auto-hide on scroll, exam countdown notice, auth-aware menus (desktop + mobile)
- **Payments** – Donate and Store pages with Monime integration

### Backend API
- `POST /api/auth/register` – User registration with Joi validation
- `POST /api/auth/login` – JWT-based authentication
- `GET /api/subjects` – List all subjects
- `GET /api/subjects/:id` – Single subject with topics
- `GET /api/subjects/:subjectId/topics` – Topics for a subject
- `GET /api/questions/topic/:topicId` – Questions by topic
- `GET /api/questions/mock` – Generate 40-question mock exam
- `POST /api/quiz/submit` – Submit & grade quiz with score breakdown
- `GET /api/dashboard/summary` – User performance summary (auth required)
- `POST /api/admin/questions` – Create question (admin only)
- `PUT /api/admin/questions/:id` – Update question (admin only)
- `DELETE /api/admin/questions/:id` – Delete question (admin only)
- `GET /api/admin/questions` – List questions with filters (admin only)
- `POST /api/admin/subjects` – Create subject (admin only)
- `POST /api/admin/topics` – Create topic (admin only)
- `GET /api/admin/stats` – Platform statistics (admin only)

```markdown
## Technologies Used

### Frontend
- **React** (Vite)
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **Lucide React** for iconography
- **React Router** for navigation
- **Axios** for API requests

### Backend
- **Node.js & Express**
- **PostgreSQL** with `pg` pool
- **JSON Web Tokens (JWT)** for authentication
- **Joi** for schema validation
- **Bcrypt** for password hashing

## Future Roadmap
- [ ] **Timed Mock Exams** – Full-length simulated exam experience with automatic timing
- [ ] **Leaderboard** – Global ranking system for students
- [ ] **AI Tutor** – Integration for explaining difficult concepts
- [ ] **Mobile App** – Native mobile version using React Native or PWA support

## License

This project is licensed under the MIT License.
```
