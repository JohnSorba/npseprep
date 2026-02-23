import { useState, useEffect } from 'react';

/**
 * Floating Mascot Helper - A tiny Nessi that appears in the corner
 * with occasional helpful tips and encouragement
 */
const MascotHelper = () => {
    const [isVisible, setIsVisible] = useState(true);
    const [isMinimized, setIsMinimized] = useState(false);
    const [currentTip, setCurrentTip] = useState(0);

    const tips = [
        "Keep practising! Every question helps you learn! 📚",
        "Take your time with each question! 🎯",
        "You're doing great! Keep it up! ⭐",
        "Remember to take breaks! 😊",
        "Mistakes help you learn! 💪",
        "Believe in yourself! You can do it! 🏆",
        "Read each question carefully! 👀",
        "Practice makes perfect! 🌟"
    ];

    // Rotate tips every 30 seconds
    useEffect(() => {
        if (isMinimized) return;

        const interval = setInterval(() => {
            setCurrentTip((prev) => (prev + 1) % tips.length);
        }, 30000);

        return () => clearInterval(interval);
    }, [isMinimized, tips.length]);

    if (!isVisible) return null;

    return (
        <div className={`mascot-helper ${isMinimized ? 'minimized' : ''}`}>
            {!isMinimized && (
                <div className="mascot-helper-bubble">
                    <button
                        className="mascot-helper-close"
                        onClick={() => setIsMinimized(true)}
                        aria-label="Minimize mascot"
                    >
                        −
                    </button>
                    <p>{tips[currentTip]}</p>
                </div>
            )}

            <button
                className="mascot-helper-avatar"
                onClick={() => setIsMinimized(!isMinimized)}
                aria-label={isMinimized ? "Show Nessi's tip" : "Hide Nessi's tip"}
            >
                <img
                    src="/nessi_mascot.png"
                    alt="Nessi - Your Study Buddy"
                    className="mascot-helper-image"
                />
            </button>

            {isMinimized && (
                <button
                    className="mascot-helper-dismiss"
                    onClick={() => setIsVisible(false)}
                    aria-label="Hide mascot"
                >
                    ✕
                </button>
            )}
        </div>
    );
};

export default MascotHelper;
