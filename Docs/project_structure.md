# NPSE Prep Project Structure

## Root Directory
- `design/`: Design assets and mockups.
- `englishlanguage.md`: Source content for English Language.
- `englishsyllabus.md`: Detailed syllabus for English.
- `games.md`: Specifications for educational games.
- `generalpaper.md`: Source content for General Paper.
- `mathematics.md`, `mathematics2.md`: Source content for Mathematics.
- `quantitative.md`: Source content for Quantitative Aptitude.
- `spec.md`: Project specification and technical requirements.
- `verbal.md`: Source content for Verbal Aptitude.
- `npse_app/`: Main React application folder.

## NPSE App (`npse_app/`)
- `public/`: Static assets (images, icons, etc.)
- `src/`: Application source code.
  - `assets/`: Image assets and static files.
  - `components/`: Reusable React components.
    - `Footer.jsx`: Site-wide footer.
    - `Math.jsx`: KaTeX wrapper for math rendering.
    - `Navbar.jsx`: Main navigation bar with desktop/mobile views.
    - `ScrollToTop.jsx`: Utility to reset scroll on route change.
  - `data/`: JavaScript data files and content repositories.
    - `subjects.js`: Core subject definitions and sample questions.
    - `*NotesContent.js`: Extensive study notes content for all subjects.
    - `*Notes.js`: Structural data for the notes navigation.
  - `pages/`: Page-level React components.
    - `Home.jsx`: Landing page.
    - `Subjects.jsx` & `SubjectDetail.jsx`: Subject browsing and detail view.
    - `Quiz.jsx`: Practice quiz interface.
    - `MockExams.jsx`: Mock exam platform interface.
    - `Games.jsx`: Games hub.
    - `RapidRecall.jsx`: Timed retrieval practice game.
    - `Notes Group`: Comprehensive set of components for browsing notes by subject and unit (e.g., `MathNotes.jsx`, `MathUnitNotes.jsx`).
    - `About.jsx`, `StudyTips.jsx`: Informational pages.
  - `App.jsx`: Root component with routing configuration.
  - `main.jsx`: Entry point for React.
  - `index.css`: Main design system and global styles.
  - `games.css`: Styling for the interactive games.
- `package.json`: Project dependencies and scripts.
- `vite.config.js`: Configuration for the Vite build tool.
- `index.html`: Main HTML entry point.
