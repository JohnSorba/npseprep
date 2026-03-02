import { Link } from 'react-router-dom';

const Games = () => {
    const gameList = [
        { id: 'rapid-recall', name: 'Rapid Recall', description: 'Timed micro-drills to build fast retrieval and confidence.', icon: '⚡', color: '#F59E0B', path: '/games/rapid-recall', ready: true },
        { id: 'brain-tug', name: 'Brain Tug', description: 'Two-player tug-of-war! Answer questions faster to pull your opponent across the line.', icon: '🪢', color: '#E74C3C', path: '/games/brain-tug', ready: true },
        { id: 'match-link', name: 'Match & Link', description: 'Improve understanding by matching definitions, examples, and processes.', icon: '🔗', color: '#3B82F6', path: '/games/match-link', ready: true },
        { id: 'spot-mistake', name: 'Spot the Mistake', description: 'Train deeper understanding by identifying errors in worked solutions.', icon: '🔍', color: '#EF4444', path: '/games/spot-mistake', ready: true },
        { id: 'vocabulary-builder', name: 'Vocabulary Builder', description: 'Master 180 essential words from Schonell\'s Spelling List to boost your English scores.', icon: '📖', color: '#8B5CF6', path: '/games/vocabulary-builder', ready: true },
        { id: 'word-scramble', name: 'Word Scramble', description: 'Untangle the letters to find the correct spelling of essential words.', icon: '🧩', color: '#10B981', path: '/games/word-scramble', ready: true },
        { id: 'fill-blank', name: 'Fill in the Blank', description: 'Complete the spelling by filling in the missing letters.', icon: '✍️', color: '#6366f1', path: '/games/fill-blank', ready: true },
        { id: 'shape-match', name: 'Shape Match', description: 'Rotate, mirror and flip — test your spatial reasoning with shape transformation challenges.', icon: '🔷', color: '#0ea5e9', path: '/games/shape-match', ready: true },
        // { id: 'pattern-completion', name: 'Pattern Completion', description: 'Study a 3×3 matrix and find the missing piece — shape, colour and count rules await!', icon: '🔲', color: '#a855f7', path: '/games/pattern-completion', ready: true },
        { id: 'number-sequences', name: 'Number Sequences', description: 'Spot the rule and find the hidden number in arithmetic, Fibonacci, square and alternating sequences.', icon: '🔢', color: '#06b6d4', path: '/games/number-sequences', ready: true },
        { id: 'clock-angles', name: 'Clock Angles', description: 'Calculate angles between clock hands, read times and identify clocks — geometry meets timekeeping!', icon: '🕐', color: '#f43f5e', path: '/games/clock-angles', ready: true },
        { id: 'fraction-visualizer', name: 'Fraction Visualizer', description: 'Identify fractions from pie charts and bar models, compare them and find equivalent ones.', icon: '🥧', color: '#f97316', path: '/games/fraction-visualizer', ready: true },
    ];

    return (
        <>
            <section className="page-hero">
                <div className="container">
                    <p className="platform-section__eyebrow" style={{ color: 'rgba(255,255,255,0.5)' }}>Games</p>
                    <h1>Educational Games</h1>
                    <p className="page-hero__subtitle">Fun, interactive ways to master your NPSE subjects and boost your scores</p>
                </div>
            </section>

            <section className="platform-section">
                <div className="container">
                    <div className="platform-section__header">
                        <p className="platform-section__eyebrow">Choose a Game</p>
                        <h2>Learn through play</h2>
                    </div>

                    <div className="practise-grid" style={{ maxWidth: '900px', margin: '0 auto' }}>
                        {gameList.map((game) => (
                            <div key={game.id} className="practise-card">
                                <div className="practise-card__icon" style={{ color: game.color }}>{game.icon}</div>
                                <h3>{game.name}</h3>
                                <p>{game.description}</p>
                                {game.ready ? (
                                    <Link to={game.path} className="access-card__cta access-card__cta--primary">Play Now →</Link>
                                ) : (
                                    <span className="practise-card__soon">Coming Soon</span>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="platform-section platform-section--alt">
                <div className="container">
                    <div className="platform-section__header">
                        <p className="platform-section__eyebrow">Benefits</p>
                        <h2>Why games help you learn</h2>
                    </div>
                    <div className="process-steps">
                        <div className="process-step">
                            <span className="process-step__number">01</span>
                            <div className="process-step__icon">
                                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M18 20V10" /><path d="M12 20V4" /><path d="M6 20v-6" /></svg>
                            </div>
                            <h3>Track Progress</h3>
                            <p>Every game improves your mastery score for that topic.</p>
                        </div>
                        <div className="process-step">
                            <span className="process-step__number">02</span>
                            <div className="process-step__icon">
                                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M23 12a11.05 11.05 0 0 0-22 0zm0 0a11.05 11.05 0 0 1-22 0" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>
                            </div>
                            <h3>Build Recall</h3>
                            <p>Fast-paced drills move information into long-term memory.</p>
                        </div>
                        <div className="process-step">
                            <span className="process-step__number">03</span>
                            <div className="process-step__icon">
                                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M6 9l6 6 6-6" /></svg>
                            </div>
                            <h3>Beat Your Best</h3>
                            <p>Challenge yourself to improve your high scores and streaks.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="support-section">
                <div className="container">
                    <div className="support-section__inner" style={{ textAlign: 'center', maxWidth: '600px' }}>
                        <div className="support-section__content">
                            <h2>Want a deeper challenge?</h2>
                            <p>Take a full subject quiz or try a timed mock exam.</p>
                            <div style={{ display: 'flex', gap: 'var(--space-3)', justifyContent: 'center', flexWrap: 'wrap', marginTop: 'var(--space-6)' }}>
                                <Link to="/quiz" className="hero-cta hero-cta--primary">Take a Quiz</Link>
                                <Link to="/mock-exams" className="hero-cta hero-cta--secondary">Mock Exams</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Games;
