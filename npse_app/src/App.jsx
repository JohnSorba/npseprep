import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Layout components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import MascotHelper from './components/MascotHelper';

// Top-level pages
import Home from './pages/Home';
// Subjects landing page removed — users navigate via Navbar, Home, or Footer
import SubjectDetail from './pages/SubjectDetail';
import Quiz from './pages/Quiz';
import MockExams from './pages/MockExams';
import StudyTips from './pages/StudyTips';
import About from './pages/About';
import CurriculumResources from './pages/CurriculumResources';
import Blog from './pages/Blog';
import Donate from './pages/Donate';
// import Store from './pages/Store';
import PaymentStatus from './pages/PaymentStatus';
import Dashboard from './pages/Dashboard';
import AdminPanel from './pages/AdminPanel';

// Auth pages
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';

// Notes pages
import Notes from './pages/notes/Notes';
import GeneralPaperNotes from './pages/notes/GeneralPaperNotes';
import EnglishLanguageNotes from './pages/notes/EnglishLanguageNotes';
import QuantitativeNotes from './pages/notes/QuantitativeNotes';
import VerbalNotes from './pages/notes/VerbalNotes';
import MathNotes from './pages/notes/MathNotes';
import GPSubjectNotes from './pages/notes/GPSubjectNotes';
import ELSubjectNotes from './pages/notes/ELSubjectNotes';
import QASubjectNotes from './pages/notes/QASubjectNotes';
import VASubjectNotes from './pages/notes/VASubjectNotes';
import MathSubjectNotes from './pages/notes/MathSubjectNotes';
import GPUnitNotes from './pages/notes/GPUnitNotes';
import ELUnitNotes from './pages/notes/ELUnitNotes';
import QAUnitNotes from './pages/notes/QAUnitNotes';
import VAUnitNotes from './pages/notes/VAUnitNotes';
import MathUnitNotes from './pages/notes/MathUnitNotes';

// Game pages
import Games from './pages/games/Games';
import RapidRecall from './pages/games/RapidRecall';
import TugOfWar from './pages/games/TugOfWar';
import MatchAndLink from './pages/games/MatchAndLink';
import SpotTheMistake from './pages/games/SpotTheMistake';
import VocabularyBuilder from './pages/games/VocabularyBuilder';
import WordScramble from './pages/games/WordScramble';
import FillInTheBlank from './pages/games/FillInTheBlank';

// Styles
import './styles/index.css';
import './styles/games.css';
import './styles/Payments.css';
import './styles/Quiz.css';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="app">
        <Navbar />
        <main>
          <Routes>
            {/* Auth Routes */}
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/admin" element={<AdminPanel />} />

            {/* Core Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/subjects/:subjectId" element={<SubjectDetail />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/quiz/:subjectId" element={<Quiz />} />
            <Route path="/mock-exams" element={<MockExams />} />
            <Route path="/study-tips" element={<StudyTips />} />
            <Route path="/about" element={<About />} />
            <Route path="/curriculum-resources" element={<CurriculumResources />} />
            <Route path="/blog" element={<Blog />} />

            {/* Games Routes */}
            <Route path="/games" element={<Games />} />
            <Route path="/games/rapid-recall" element={<RapidRecall />} />
            <Route path="/games/brain-tug" element={<TugOfWar />} />
            <Route path="/games/match-link" element={<MatchAndLink />} />
            <Route path="/games/spot-mistake" element={<SpotTheMistake />} />
            <Route path="/games/vocabulary-builder" element={<VocabularyBuilder />} />
            <Route path="/games/word-scramble" element={<WordScramble />} />
            <Route path="/games/fill-blank" element={<FillInTheBlank />} />

            {/* Payment & Store Routes */}
            <Route path="/donate" element={<Donate />} />
            {/* <Route path="/store" element={<Store />} /> */}
            <Route path="/payment/success" element={<PaymentStatus />} />
            <Route path="/payment/pending" element={<PaymentStatus />} />
            <Route path="/payment/failed" element={<PaymentStatus />} />

            {/* Notes Routes */}
            <Route path="/notes" element={<Notes />} />

            {/* General Paper Notes */}
            <Route path="/notes/general-paper" element={<GeneralPaperNotes />} />
            <Route path="/notes/general-paper/:subjectId" element={<GPSubjectNotes />} />
            <Route path="/notes/general-paper/:subjectId/:unitId" element={<GPUnitNotes />} />

            {/* English Language Notes */}
            <Route path="/notes/english-language" element={<EnglishLanguageNotes />} />
            <Route path="/notes/english-language/:subjectId" element={<ELSubjectNotes />} />
            <Route path="/notes/english-language/:subjectId/:unitId" element={<ELUnitNotes />} />

            {/* Quantitative Aptitude Notes */}
            <Route path="/notes/quantitative" element={<QuantitativeNotes />} />
            <Route path="/notes/quantitative/:subjectId" element={<QASubjectNotes />} />
            <Route path="/notes/quantitative/:subjectId/:unitId" element={<QAUnitNotes />} />

            {/* Verbal Aptitude Notes */}
            <Route path="/notes/verbal" element={<VerbalNotes />} />
            <Route path="/notes/verbal/:subjectId" element={<VASubjectNotes />} />
            <Route path="/notes/verbal/:subjectId/:unitId" element={<VAUnitNotes />} />

            {/* Mathematics Notes */}
            <Route path="/notes/mathematics" element={<MathNotes />} />
            <Route path="/notes/mathematics/:subjectId" element={<MathSubjectNotes />} />
            <Route path="/notes/mathematics/:subjectId/:unitId" element={<MathUnitNotes />} />
          </Routes>
        </main>
        <Footer />
        <MascotHelper />
      </div>
    </Router>
  );
}

export default App;
