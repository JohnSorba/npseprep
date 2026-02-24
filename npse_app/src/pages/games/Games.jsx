import { Link } from 'react-router-dom';

const Games = () => {
    const gameList = [
        { id: 'rapid-recall', name: 'Rapid Recall', description: 'Timed micro-drills to build fast retrieval and confidence.', icon: '⚡', color: '#F59E0B', path: '/games/rapid-recall', ready: true },
        { id: 'brain-tug', name: 'Brain Tug', description: 'Two-player tug-of-war! Answer questions faster to pull your opponent across the line.', icon: '🪢', color: '#E74C3C', path: '/games/brain-tug', ready: true },
        { id: 'match-link', name: 'Match & Link', description: 'Improve understanding by matching definitions, examples, and processes.', icon: '🔗', color: '#3B82F6', path: '/games/match-link', ready: true },
        { id: 'spot-mistake', name: 'Spot the Mistake', description: 'Train deeper understanding by identifying errors in worked solutions.', icon: '🔍', color: '#EF4444', path: '/games/spot-mistake', ready: true },
        { id: 'vocabulary-builder', name: 'Vocabulary Builder', description: 'Master 180 essential words from Schonell\'s Spelling List to boost your English scores.', icon: '📖', color: '#8B5CF6', path: '/vocabulary-builder', ready: true },
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
