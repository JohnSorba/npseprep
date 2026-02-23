import { useState, useEffect } from 'react';
import { vocabularyData } from '../../data/vocabulary';
import '../../styles/VocabularyBuilder.css';

const VocabularyBuilder = () => {
    const [words, setWords] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isFlipped, setIsFlipped] = useState(false);
    const [masteredCount, setMasteredCount] = useState(0);
    const [showResults, setShowResults] = useState(false);

    useEffect(() => {
        // In a real app, we'd fetch from API or local storage
        // For now, use local data and shuffle it
        const shuffled = [...vocabularyData].sort(() => Math.random() - 0.5);
        setWords(shuffled);
    }, []);

    const currentWord = words[currentIndex];

    const handleFlip = () => {
        setIsFlipped(!isFlipped);
    };

    const handleMastery = (mastered) => {
        if (mastered) {
            setMasteredCount(prev => prev + 1);
        }

        if (currentIndex < words.length - 1) {
            setCurrentIndex(prev => prev + 1);
            setIsFlipped(false);
        } else {
            setShowResults(true);
        }
    };

    const resetSession = () => {
        setCurrentIndex(0);
        setMasteredCount(0);
        setShowResults(false);
        setIsFlipped(false);
        setWords([...vocabularyData].sort(() => Math.random() - 0.5));
    };

    if (words.length === 0) return <div className="loading">Loading...</div>;

    if (showResults) {
        return (
            <div className="vocabulary-builder">
                <div className="container">
                    <div className="results-card">
                        <h2>Session Complete!</h2>
                        <div className="score-badge">
                            <span className="score">{masteredCount}</span>
                            <span className="total">/ {words.length}</span>
                        </div>
                        <p>You've mastered {Math.round((masteredCount / words.length) * 100)}% of the words in this session.</p>
                        <button className="btn-primary" onClick={resetSession}>Try Again</button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="vocabulary-builder">
            <div className="container">
                <div className="builder-header">
                    <h1>Vocabulary Builder</h1>
                    <p>Master key terms for the NPSE English curriculum</p>
                    <div className="progress-container">
                        <div className="progress-bar">
                            <div
                                className="progress-fill"
                                style={{ width: `${((currentIndex) / words.length) * 100}%` }}
                            ></div>
                        </div>
                        <span className="progress-text">Word {currentIndex + 1} of {words.length}</span>
                    </div>
                </div>

                <div className={`flashcard ${isFlipped ? 'flipped' : ''}`} onClick={handleFlip}>
                    <div className="flashcard-inner">
                        <div className="flashcard-front">
                            <div className="card-content">
                                <span className="label">Word</span>
                                <h2 className="word-term">{currentWord.term}</h2>
                                <p className="hint">Click to see definition</p>
                            </div>
                        </div>
                        <div className="flashcard-back">
                            <div className="card-content">
                                <span className="label">Definition</span>
                                <p className="definition-text">{currentWord.definition}</p>
                                <div className="example-box">
                                    <span className="label">Example</span>
                                    <p className="example-text">"{currentWord.example}"</p>
                                </div>
                                <div className="pronunciation">
                                    <span className="label">Pronunciation</span>
                                    <code>{currentWord.pronunciation}</code>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="controls">
                    <button
                        className="btn-secondary"
                        onClick={(e) => {
                            e.stopPropagation();
                            handleMastery(false);
                        }}
                    >
                        Need Review
                    </button>
                    <button
                        className="btn-primary"
                        onClick={(e) => {
                            e.stopPropagation();
                            handleMastery(true);
                        }}
                    >
                        I Know This!
                    </button>
                </div>
            </div>
        </div>
    );
};

export default VocabularyBuilder;
