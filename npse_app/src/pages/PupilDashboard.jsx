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
  'social-studies': {
    id: 'social-studies',
    name: 'Social Studies',
    subtitle: 'History, geography, and citizenship for Sierra Leone.',
    icon: '🌍',
    color: '#ec4899',
    bgColor: '#fce7f3',
    completion: 35,
    resumeTopic: 'Sierra Leone History',
  },
  'science': {
    id: 'science',
    name: 'Integrated Science',
    subtitle: 'Life, physical, and environmental science basics.',
    icon: '🔬',
    color: '#0ea5e9',
    bgColor: '#e0f2fe',
    completion: 20,
    resumeTopic: 'Human Systems',
  },
  'health-ed': {
    id: 'health-ed',
    name: 'Health Education',
    subtitle: 'Personal health, hygiene, and community wellness.',
    icon: '🏥',
    color: '#10b981',
    bgColor: '#ecfdf5',
    completion: 40,
    resumeTopic: 'Balanced Diets',
  },
  'home-economics': {
    id: 'home-economics',
    name: 'Home Economics',
    subtitle: 'Managing resources and learning essential life skills.',
    icon: '🍳',
    color: '#f59e0b',
    bgColor: '#fffbeb',
    completion: 15,
    resumeTopic: 'Home Management',
  },
  'ag-science': {
    id: 'ag-science',
    name: 'Agricultural Science',
    subtitle: 'The foundation of food supply and farming in Sierra Leone.',
    icon: '🌱',
    color: '#84cc16',
    bgColor: '#f7fee7',
    completion: 10,
    resumeTopic: 'Farm Tools',
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
  'social-studies': [
    { id: 1, title: 'Sierra Leone: Geography', status: 'mastered', notesStatus: 'Read', quizStatus: '92%', resources: 3, worksheets: 2, difficulty: 'Basics' },
    { id: 2, title: 'History of Independence', status: 'mastered', notesStatus: 'Read', quizStatus: '85%', resources: 4, worksheets: 1, difficulty: 'Intermediate' },
    { id: 3, title: 'National Symbols & Flag', status: 'in-progress', notesStatus: 'Reading…', quizStatus: 'Pending', resources: 2, worksheets: 1, difficulty: 'Basics' },
    { id: 4, title: 'Civic Responsibilities', status: 'locked', notesStatus: 'Unread', quizStatus: 'Locked', resources: 5, worksheets: 2, difficulty: 'Intermediate' },
    { id: 5, title: 'Governance & Leadership', status: 'locked', notesStatus: 'Unread', quizStatus: 'Locked', resources: 3, worksheets: 1, difficulty: 'Hard' },
    { id: 6, title: 'Regional Cooperation (MRU)', status: 'locked', notesStatus: 'Unread', quizStatus: 'Locked', resources: 2, worksheets: 1, difficulty: 'Hard' },
  ],
  'science': [
    { id: 1, title: 'The Human Body Systems', status: 'mastered', notesStatus: 'Read', quizStatus: '88%', resources: 6, worksheets: 3, difficulty: 'Intermediate' },
    { id: 2, title: 'Plant & Animal Life', status: 'in-progress', notesStatus: 'Reading…', quizStatus: 'Pending', resources: 4, worksheets: 2, difficulty: 'Basics' },
    { id: 3, title: 'Matter & Properties', status: 'locked', notesStatus: 'Unread', quizStatus: 'Locked', resources: 3, worksheets: 1, difficulty: 'Intermediate' },
    { id: 4, title: 'Work, Energy & Power', status: 'locked', notesStatus: 'Unread', quizStatus: 'Locked', resources: 5, worksheets: 2, difficulty: 'Hard' },
    { id: 5, title: 'Atmosphere & Weather', status: 'locked', notesStatus: 'Unread', quizStatus: 'Locked', resources: 3, worksheets: 1, difficulty: 'Basics' },
    { id: 6, title: 'Rocks & Minerals', status: 'locked', notesStatus: 'Unread', quizStatus: 'Locked', resources: 2, worksheets: 1, difficulty: 'Intermediate' },
  ],
  'health-ed': [
    { id: 1, title: 'Personal Hygiene', status: 'mastered', notesStatus: 'Read', quizStatus: '95%', resources: 4, worksheets: 2, difficulty: 'Basics' },
    { id: 2, title: 'Nutrition & Balanced Diet', status: 'mastered', notesStatus: 'Read', quizStatus: '88%', resources: 5, worksheets: 3, difficulty: 'Intermediate' },
    { id: 3, title: 'Communicable Diseases', status: 'in-progress', notesStatus: 'Reading…', quizStatus: 'Pending', resources: 6, worksheets: 2, difficulty: 'Hard' },
    { id: 4, title: 'First Aid Procedures', status: 'locked', notesStatus: 'Unread', quizStatus: 'Locked', resources: 3, worksheets: 1, difficulty: 'Intermediate' },
    { id: 5, title: 'Safety in the Home', status: 'locked', notesStatus: 'Unread', quizStatus: 'Locked', resources: 2, worksheets: 1, difficulty: 'Basics' },
  ],
  'home-economics': [
    { id: 1, title: 'The Family & Home', status: 'mastered', notesStatus: 'Read', quizStatus: '90%', resources: 3, worksheets: 1, difficulty: 'Basics' },
    { id: 2, title: 'Home Management Skills', status: 'in-progress', notesStatus: 'Reading…', quizStatus: 'Pending', resources: 4, worksheets: 2, difficulty: 'Intermediate' },
    { id: 3, title: 'Clothing & Textiles', status: 'locked', notesStatus: 'Unread', quizStatus: 'Locked', resources: 5, worksheets: 3, difficulty: 'Hard' },
    { id: 4, title: 'Principles of Food Prep', status: 'locked', notesStatus: 'Unread', quizStatus: 'Locked', resources: 6, worksheets: 2, difficulty: 'Intermediate' },
    { id: 5, title: 'Consumer Education', status: 'locked', notesStatus: 'Unread', quizStatus: 'Locked', resources: 3, worksheets: 1, difficulty: 'Hard' },
  ],
  'ag-science': [
    { id: 1, title: 'Importance of Agriculture', status: 'in-progress', notesStatus: 'Reading…', quizStatus: 'Pending', resources: 3, worksheets: 1, difficulty: 'Basics' },
    { id: 2, title: 'Garden Tools & Storage', status: 'locked', notesStatus: 'Unread', quizStatus: 'Locked', resources: 4, worksheets: 2, difficulty: 'Basics' },
    { id: 3, title: 'Soil Fertility & Erosion', status: 'locked', notesStatus: 'Unread', quizStatus: 'Locked', resources: 5, worksheets: 2, difficulty: 'Intermediate' },
    { id: 4, title: 'Crop Maintenance', status: 'locked', notesStatus: 'Unread', quizStatus: 'Locked', resources: 3, worksheets: 1, difficulty: 'Intermediate' },
    { id: 5, title: 'Livestock Care', status: 'locked', notesStatus: 'Unread', quizStatus: 'Locked', resources: 2, worksheets: 1, difficulty: 'Hard' },
  ],
};

const PAPERS_MAP = {
  'english': 'English Paper I & II',
  'mathematics': 'Mathematics Paper I & II',
  'quantitative': 'Quantitative Aptitude Paper',
  'verbal': 'Verbal Aptitude Paper',
  'social-studies': 'General Paper (Social Studies)',
  'science': 'General Paper (Integrated Science)',
  'health-ed': 'General Paper (Health Education)',
  'home-economics': 'General Paper (Home Economics)',
  'ag-science': 'General Paper (Ag Science)',
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
  'social-studies': '"Think about how your local community operates. Connecting these concepts to your daily life makes them much easier to remember during the exam."',
  'science': '"Pay close attention to diagrams. In Integrated Science, being able to label systems or recognize plant parts is just as important as knowing the facts."',
  'health-ed': '"Stay healthy while you study! Understanding hygiene isn\'t just for marks — it is a life skill. Link diseases to their causes for better recall."',
  'home-economics': '"Imagine yourself managing a real home. Practical application of management and nutrition topics will clarify the theory."',
  'ag-science': '"Visualize a farm in Sierra Leone. Identifying tools and understanding soil types through mental images helps you understand the foundation of our agriculture."',
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
                          <span className="pd-meta-item__icon">📖</span> {topic.notesStatus}
                        </span>
                        <span className="pd-meta-item">
                          <span className="pd-meta-item__icon">🎯</span> {topic.quizStatus}
                        </span>
                        {topic.resources > 0 && (
                          <span className="pd-meta-item">
                            <span className="pd-meta-item__icon">📎</span> {topic.resources} Resources
                          </span>
                        )}
                        {topic.worksheets > 0 && (
                          <span className="pd-meta-item">
                            <span className="pd-meta-item__icon">✏️</span> {topic.worksheets} Worksheets
                          </span>
                        )}
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
