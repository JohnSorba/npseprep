import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import '../styles/PupilDashboard.css';

/* ─── Subject data by slug ─── */
const SUBJECTS_MAP = {
  'english': {
    id: 'english',
    name: 'English Language',
    subtitle: 'Comprehensive roadmap for the Sierra Leone NPSE Exam.',
    icon: '📖',
    color: '#9333ea',
    bgColor: '#f3e8ff',
    completion: 45,
    resumeTopic: 'Verb Tenses',
  },
  'mathematics': {
    id: 'mathematics',
    name: 'Mathematics',
    subtitle: 'Master numbers, shapes, and problem-solving for the NPSE.',
    icon: '📐',
    color: '#0c8ce9',
    bgColor: '#e0efff',
    completion: 60,
    resumeTopic: 'Geometry',
  },
  'quantitative': {
    id: 'quantitative',
    name: 'Quantitative Aptitude',
    subtitle: 'Sharpen your numerical reasoning and mental math.',
    icon: '🔢',
    color: '#f97316',
    bgColor: '#fff7ed',
    completion: 25,
    resumeTopic: 'Sets & Venn Diagrams',
  },
  'verbal': {
    id: 'verbal',
    name: 'Verbal Aptitude',
    subtitle: 'Build vocabulary, analogies, and verbal reasoning skills.',
    icon: '💬',
    color: '#10b981',
    bgColor: '#ecfdf5',
    completion: 30,
    resumeTopic: 'Analogies',
  },
  'general': {
    id: 'general',
    name: 'General Paper',
    subtitle: 'Explore knowledge about Sierra Leone, Africa, and the world.',
    icon: '🌍',
    color: '#ec4899',
    bgColor: '#fce7f3',
    completion: 20,
    resumeTopic: 'Food & Nutrition',
  },
};

const TOPICS_MAP = {
  'english': [
    { id: 1, title: 'Nouns & Pronouns', status: 'mastered', notesStatus: 'Notes Read', quizStatus: 'Score: 100%', difficulty: 'Basics' },
    { id: 2, title: 'Verb Tenses & Usage', status: 'in-progress', notesStatus: 'Reading…', quizStatus: 'Quiz Pending', difficulty: 'Intermediate' },
    { id: 3, title: 'Adjectives & Adverbs', status: 'locked', notesStatus: 'Notes Unread', quizStatus: 'Locked', difficulty: 'Intermediate' },
    { id: 4, title: 'Reading Comprehension', status: 'locked', notesStatus: 'Notes Unread', quizStatus: 'Locked', difficulty: 'Exam Ready (Hard)', difficultyClass: 'difficulty--hard' },
    { id: 5, title: 'Letter Writing', status: 'locked', notesStatus: 'Notes Unread', quizStatus: 'Locked', difficulty: 'Intermediate' },
    { id: 6, title: 'Composition', status: 'locked', notesStatus: 'Notes Unread', quizStatus: 'Locked', difficulty: 'Exam Ready (Hard)', difficultyClass: 'difficulty--hard' },
  ],
  'mathematics': [
    { id: 1, title: 'Numbers & Numeration', status: 'mastered', notesStatus: 'Notes Read', quizStatus: 'Score: 95%', difficulty: 'Basics' },
    { id: 2, title: 'Fractions & Decimals', status: 'mastered', notesStatus: 'Notes Read', quizStatus: 'Score: 88%', difficulty: 'Intermediate' },
    { id: 3, title: 'BODMAS', status: 'mastered', notesStatus: 'Notes Read', quizStatus: 'Score: 91%', difficulty: 'Intermediate' },
    { id: 4, title: 'Percentages & Ratios', status: 'mastered', notesStatus: 'Notes Read', quizStatus: 'Score: 78%', difficulty: 'Intermediate' },
    { id: 5, title: 'Algebra Basics', status: 'mastered', notesStatus: 'Notes Read', quizStatus: 'Score: 72%', difficulty: 'Intermediate' },
    { id: 6, title: 'Geometry (Lines & Angles)', status: 'in-progress', notesStatus: 'Reading…', quizStatus: 'Quiz Pending', difficulty: 'Intermediate' },
    { id: 7, title: 'Area, Perimeter & Volume', status: 'locked', notesStatus: 'Notes Unread', quizStatus: 'Locked', difficulty: 'Exam Ready (Hard)', difficultyClass: 'difficulty--hard' },
    { id: 8, title: 'Data Handling', status: 'locked', notesStatus: 'Notes Unread', quizStatus: 'Locked', difficulty: 'Exam Ready (Hard)', difficultyClass: 'difficulty--hard' },
  ],
  'quantitative': [
    { id: 1, title: 'Code Representation', status: 'mastered', notesStatus: 'Notes Read', quizStatus: 'Score: 80%', difficulty: 'Basics' },
    { id: 2, title: 'Number Patterns', status: 'mastered', notesStatus: 'Notes Read', quizStatus: 'Score: 70%', difficulty: 'Intermediate' },
    { id: 3, title: 'Sets & Venn Diagrams', status: 'in-progress', notesStatus: 'Reading…', quizStatus: 'Quiz Pending', difficulty: 'Intermediate' },
    { id: 4, title: 'Mathematical Puzzles', status: 'locked', notesStatus: 'Notes Unread', quizStatus: 'Locked', difficulty: 'Intermediate' },
    { id: 5, title: 'Ages & Money Problems', status: 'locked', notesStatus: 'Notes Unread', quizStatus: 'Locked', difficulty: 'Exam Ready (Hard)', difficultyClass: 'difficulty--hard' },
    { id: 6, title: 'Weight & Measurement', status: 'locked', notesStatus: 'Notes Unread', quizStatus: 'Locked', difficulty: 'Intermediate' },
    { id: 7, title: 'Roman Numerals', status: 'locked', notesStatus: 'Notes Unread', quizStatus: 'Locked', difficulty: 'Basics' },
  ],
  'verbal': [
    { id: 1, title: 'Analogies', status: 'mastered', notesStatus: 'Notes Read', quizStatus: 'Score: 85%', difficulty: 'Basics' },
    { id: 2, title: 'Word Groups (Odd One Out)', status: 'mastered', notesStatus: 'Notes Read', quizStatus: 'Score: 75%', difficulty: 'Basics' },
    { id: 3, title: 'Sentence Arrangement', status: 'in-progress', notesStatus: 'Reading…', quizStatus: 'Quiz Pending', difficulty: 'Intermediate' },
    { id: 4, title: 'Synonyms & Antonyms', status: 'locked', notesStatus: 'Notes Unread', quizStatus: 'Locked', difficulty: 'Intermediate' },
    { id: 5, title: 'Proverbs & Idioms', status: 'locked', notesStatus: 'Notes Unread', quizStatus: 'Locked', difficulty: 'Exam Ready (Hard)', difficultyClass: 'difficulty--hard' },
    { id: 6, title: 'Word Patterns', status: 'locked', notesStatus: 'Notes Unread', quizStatus: 'Locked', difficulty: 'Intermediate' },
    { id: 7, title: 'Alphabetical Position', status: 'locked', notesStatus: 'Notes Unread', quizStatus: 'Locked', difficulty: 'Basics' },
  ],
  'general': [
    { id: 1, title: 'Food & Nutrition', status: 'mastered', notesStatus: 'Notes Read', quizStatus: 'Score: 90%', difficulty: 'Basics' },
    { id: 2, title: 'Family Life Education', status: 'mastered', notesStatus: 'Notes Read', quizStatus: 'Score: 82%', difficulty: 'Basics' },
    { id: 3, title: 'Accidents & First Aid', status: 'in-progress', notesStatus: 'Reading…', quizStatus: 'Quiz Pending', difficulty: 'Intermediate' },
    { id: 4, title: 'The Human Body', status: 'locked', notesStatus: 'Notes Unread', quizStatus: 'Locked', difficulty: 'Intermediate' },
    { id: 5, title: 'Environmental Health', status: 'locked', notesStatus: 'Notes Unread', quizStatus: 'Locked', difficulty: 'Intermediate' },
    { id: 6, title: 'Soil Science & Crops', status: 'locked', notesStatus: 'Notes Unread', quizStatus: 'Locked', difficulty: 'Intermediate' },
    { id: 7, title: 'National Symbols', status: 'locked', notesStatus: 'Notes Unread', quizStatus: 'Locked', difficulty: 'Basics' },
    { id: 8, title: 'Citizenship & Ethics', status: 'locked', notesStatus: 'Notes Unread', quizStatus: 'Locked', difficulty: 'Exam Ready (Hard)', difficultyClass: 'difficulty--hard' },
    { id: 9, title: 'Local Governance', status: 'locked', notesStatus: 'Notes Unread', quizStatus: 'Locked', difficulty: 'Intermediate' },
    { id: 10, title: 'Drug Abuse Awareness', status: 'locked', notesStatus: 'Notes Unread', quizStatus: 'Locked', difficulty: 'Basics' },
  ],
};

const PAPERS_MAP = {
  'english': 'English Paper I & II',
  'mathematics': 'Mathematics Paper I & II',
  'quantitative': 'Quantitative Aptitude Paper',
  'verbal': 'Verbal Aptitude Paper',
  'general': 'General Paper I & II',
};

const LEADERBOARD = [
  { rank: 1, name: 'Amadu S.', points: 1240, trend: 'up' },
  { rank: 2, name: 'Fatu K.', points: 1185, trend: 'up' },
  { rank: 3, name: 'Mohamed B.', points: 950, trend: 'neutral' },
];

const EXAM_DAYS_LEFT = 42;
const EXAM_WEEKS_LEFT = 6;

const STUDY_TIPS = {
  'english': '"Try reading comprehension passages twice: once for the main idea, and a second time to find specific details for the questions."',
  'mathematics': '"Write out each step of your working clearly. Examiners award marks for method, not just the final answer."',
  'quantitative': '"When you see a number sequence, calculate the differences between terms first — patterns often hide there."',
  'verbal': '"Group synonyms and antonyms by theme when revising — it is easier to remember words in clusters."',
  'general': '"Connect facts to real life in Sierra Leone. Contextual memory makes recall much easier in an exam."',
};


/* ─── Component ─── */
const PupilDashboard = () => {
  const { subjectId = 'english' } = useParams();
  const SUBJECT = SUBJECTS_MAP[subjectId] || SUBJECTS_MAP['english'];
  const TOPICS = TOPICS_MAP[subjectId] || TOPICS_MAP['english'];
  const paperTitle = PAPERS_MAP[subjectId] || 'Exam Paper I & II';
  const STUDY_TIP = STUDY_TIPS[subjectId] || STUDY_TIPS['english'];

  const PAST_PAPERS = [
    { year: 2023, title: paperTitle, questions: 60, mins: 90, completed: false },
    { year: 2022, title: paperTitle, questions: 60, mins: 90, completed: true, score: 85 },
    { year: 2021, title: paperTitle, questions: 60, mins: 90, completed: false },
    { year: 2020, title: paperTitle, questions: 60, mins: 90, completed: false },
  ];

  const [filter, setFilter] = useState('all');
  const [search, setSearch] = useState('');

  const filteredTopics = TOPICS.filter((t) => {
    if (filter === 'todo') return t.status === 'locked' || t.status === 'in-progress';
    if (filter === 'completed') return t.status === 'mastered';
    return true;
  });

  const ctaLabel = (status) => {
    if (status === 'mastered') return 'Review';
    if (status === 'in-progress') return 'Continue';
    return 'Start';
  };

  const ctaClass = (status) => {
    if (status === 'mastered') return 'pd-topic-btn pd-topic-btn--review';
    if (status === 'in-progress') return 'pd-topic-btn pd-topic-btn--continue';
    return 'pd-topic-btn pd-topic-btn--start';
  };

  const trendIcon = (trend) => {
    if (trend === 'up') return <span className="lb-trend lb-trend--up">↗</span>;
    if (trend === 'down') return <span className="lb-trend lb-trend--down">↘</span>;
    return <span className="lb-trend lb-trend--neutral">—</span>;
  };


  return (
    <div className="pd-root">
      {/* ══════════ TOP NAV ══════════ */}
      <header className="pd-nav">
        <div className="pd-nav__inner">
          {/* Logo */}
          <Link to="/" className="pd-nav__logo">
            <span className="pd-nav__logo-icon">🟡</span>
            <span className="pd-nav__logo-text">NPSE Prep</span>
          </Link>

          {/* Nav links */}
          <nav className="pd-nav__links">
            <Link to="/subjects" className="pd-nav__link">Subjects</Link>
            <Link to="/quiz" className="pd-nav__link">Quizzes</Link>
            <Link to="/study-tips" className="pd-nav__link">Study Tips</Link>
            <Link to="/leaderboard" className="pd-nav__link">Leaderboard</Link>
          </nav>

          {/* Right: search + streak + avatar */}
          <div className="pd-nav__right">
            <div className="pd-search">
              <span className="pd-search__icon">🔍</span>
              <input
                type="text"
                placeholder="Search topics…"
                className="pd-search__input"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                id="pd-search-input"
              />
            </div>
            <div className="pd-streak">
              <span className="pd-streak__label">CURRENT STREAK</span>
              <span className="pd-streak__value">🔥 5 Days</span>
            </div>
            <div className="pd-avatar" aria-label="Profile">
              <span>👤</span>
            </div>
          </div>
        </div>
      </header>

      {/* ══════════ BODY ══════════ */}
      <div className="pd-body">
        {/* ── Main Column ── */}
        <main className="pd-main">

          {/* Breadcrumbs */}
          <nav className="pd-breadcrumbs" aria-label="breadcrumb">
            <Link to="/dashboard/pupil" className="pd-breadcrumbs__link">Home</Link>
            <span className="pd-breadcrumbs__sep">›</span>
            <span className="pd-breadcrumbs__current">{SUBJECT.name}</span>
          </nav>

          {/* Subject Header */}
          <div className="pd-subject-header">
            <div
              className="pd-subject-header__icon"
              style={{ background: SUBJECT.bgColor, color: SUBJECT.color }}
            >
              {SUBJECT.icon}
            </div>
            <div>
              <h1 className="pd-subject-header__title">{SUBJECT.name}</h1>
              <p className="pd-subject-header__subtitle">{SUBJECT.subtitle}</p>
            </div>
          </div>

          {/* ── Curriculum Topics ── */}
          <section className="pd-topics">
            <div className="pd-topics__header">
              <h2 className="pd-topics__title">Curriculum Topics</h2>
              <div className="pd-filter-tabs" role="group" aria-label="Filter topics">
                {['all', 'todo', 'completed'].map((f) => (
                  <button
                    key={f}
                    id={`pd-filter-${f}`}
                    className={`pd-filter-tab ${filter === f ? 'pd-filter-tab--active' : ''}`}
                    onClick={() => setFilter(f)}
                  >
                    {f === 'all' ? 'All' : f === 'todo' ? 'To-Do' : 'Completed'}
                  </button>
                ))}
              </div>
            </div>

            <div className="pd-topic-list">
              {filteredTopics.map((topic, i) => (
                <div
                  key={topic.id}
                  className={`pd-topic-row pd-topic-row--${topic.status}`}
                >
                  <div className="pd-topic-row__left">
                    <div className="pd-topic-row__num-wrap">
                      <span className={`pd-topic-icon pd-topic-icon--${topic.status}`}>
                        {topic.status === 'mastered' ? '✓' : topic.status === 'in-progress' ? '⟳' : '🔒'}
                      </span>
                    </div>
                    <div className="pd-topic-row__info">
                      <div className="pd-topic-row__name-row">
                        <span className="pd-topic-row__num">{i + 1}.</span>
                        <span className="pd-topic-row__name">{topic.title}</span>
                        {topic.status === 'mastered' && (
                          <span className="pd-badge pd-badge--mastered">MASTERED</span>
                        )}
                        {topic.status === 'in-progress' && (
                          <span className="pd-badge pd-badge--progress">IN PROGRESS</span>
                        )}
                      </div>
                      <div className="pd-topic-row__meta">
                        <span className="pd-meta-item">
                          <span className="pd-meta-item__icon">📄</span> {topic.notesStatus}
                        </span>
                        <span className="pd-meta-item">
                          <span className="pd-meta-item__icon">🎯</span> {topic.quizStatus}
                        </span>
                        <span className={`pd-meta-item pd-meta-difficulty ${topic.difficultyClass || ''}`}>
                          <span className="pd-meta-item__icon">📶</span> {topic.difficulty}
                        </span>
                      </div>
                    </div>
                  </div>
                  <button
                    id={`pd-topic-cta-${topic.id}`}
                    className={ctaClass(topic.status)}
                    disabled={topic.status === 'locked'}
                  >
                    {ctaLabel(topic.status)}
                  </button>
                </div>
              ))}
            </div>
          </section>

          {/* ── NPSE Past Papers ── */}
          <section className="pd-past-papers">
            <div className="pd-past-papers__header">
              <div>
                <h2 className="pd-past-papers__title">NPSE Past Papers</h2>
                <p className="pd-past-papers__sub">Practice with real exam questions from previous years.</p>
              </div>
              <Link to="/mock-exams" className="pd-past-papers__view-all" id="pd-view-all-papers">
                View All →
              </Link>
            </div>
            <div className="pd-papers-grid">
              {PAST_PAPERS.map((paper) => (
                <div
                  key={paper.year}
                  className={`pd-paper-card ${paper.completed ? 'pd-paper-card--completed' : ''}`}
                  id={`pd-paper-${paper.year}`}
                >
                  <div className="pd-paper-card__top">
                    <span className="pd-paper-card__icon">🗒️</span>
                    <span className="pd-paper-card__year">{paper.year}</span>
                  </div>
                  <div className="pd-paper-card__title">{paper.title}</div>
                  {paper.completed ? (
                    <>
                      <div className="pd-paper-card__score-label">COMPLETED: {paper.score}% SCORE</div>
                      <div className="pd-paper-card__progress-bar">
                        <div
                          className="pd-paper-card__progress-fill"
                          style={{ width: `${paper.score}%` }}
                        />
                      </div>
                    </>
                  ) : (
                    <div className="pd-paper-card__meta">
                      {paper.questions} QUESTIONS · {paper.mins} MINS
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        </main>

        {/* ── Sidebar ── */}
        <aside className="pd-sidebar">

          {/* Subject Completion */}
          <div className="pd-sidebar-card">
            <div className="pd-completion">
              <span className="pd-completion__label">Subject Completion</span>
              <span className="pd-completion__pct">{SUBJECT.completion}%</span>
            </div>
            <div className="pd-progress-bar">
              <div
                className="pd-progress-bar__fill"
                style={{ width: `${SUBJECT.completion}%` }}
              />
            </div>
            <div className="pd-resume-row">
              <button className="pd-resume-btn" id="pd-resume-btn">
                <span>▶</span> Resume: {SUBJECT.resumeTopic}
              </button>
              <button className="pd-share-btn" id="pd-share-btn" aria-label="Share progress">
                ↗
              </button>
            </div>
          </div>

          {/* Exam Countdown */}
          <div className="pd-sidebar-card pd-exam-card">
            <div className="pd-exam-card__header">
              <span className="pd-exam-card__title">NPSE Exam Date</span>
              <span className="pd-exam-card__icon">📅</span>
            </div>
            <div className="pd-exam-card__countdown">
              <div className="pd-exam-tile">
                <span className="pd-exam-tile__num">{String(EXAM_DAYS_LEFT).padStart(2, '0')}</span>
                <span className="pd-exam-tile__unit">DAYS LEFT</span>
              </div>
              <div className="pd-exam-tile">
                <span className="pd-exam-tile__num">{String(EXAM_WEEKS_LEFT).padStart(2, '0')}</span>
                <span className="pd-exam-tile__unit">WEEKS</span>
              </div>
            </div>
            <p className="pd-exam-card__quote">
              "Education is the most powerful weapon which you can use to change the world."
            </p>
          </div>

          {/* Top Students */}
          <div className="pd-sidebar-card">
            <div className="pd-lb-header">
              <span className="pd-lb-header__icon">🏆</span>
              <span className="pd-lb-header__title">Top Students ({SUBJECT.name.split(' ')[0]})</span>
            </div>
            <ol className="pd-lb-list">
              {LEADERBOARD.map((entry) => (
                <li key={entry.rank} className="pd-lb-row">
                  <span className="pd-lb-rank">{entry.rank}</span>
                  <div className="pd-lb-avatar" aria-hidden="true">👤</div>
                  <div className="pd-lb-info">
                    <span className="pd-lb-name">{entry.name}</span>
                    <span className="pd-lb-pts">{entry.points.toLocaleString()} pts</span>
                  </div>
                  {trendIcon(entry.trend)}
                </li>
              ))}
            </ol>
            <Link to="/leaderboard" id="pd-full-leaderboard-link" className="pd-lb-full-link">
              FULL LEADERBOARD
            </Link>
          </div>

          {/* Study Tip */}
          <div className="pd-sidebar-card pd-tip-card">
            <div className="pd-tip-card__header">
              <span className="pd-tip-card__icon">💡</span>
              <span className="pd-tip-card__title">Study Tip</span>
            </div>
            <p className="pd-tip-card__text">{STUDY_TIP}</p>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default PupilDashboard;
