// ─────────────────────────────────────────────────────────────
// Word Scramble — Schonell's Essential Spelling List
// 180 items • 3 Sections (Junior / Master / Elite)
// Each section: 60 words (Level 1: 10, Level 2: 20, Level 3: 30)
// ─────────────────────────────────────────────────────────────

const wordScrambleData = {
    sections: [
        {
            id: "junior",
            title: "Junior",
            description: "Simple everyday words from Schonell Groups 1–2",
            icon: "🐣",
            color: "#10B981",
            levels: [
                {
                    id: "junior-1",
                    title: "Level 1",
                    words: ["happy", "small", "fast", "begin", "pretty", "cold", "throw", "sleep", "brave", "near"]
                },
                {
                    id: "junior-2",
                    title: "Level 2",
                    words: [
                        "dark", "strong", "funny", "dinner", "sorry", "clever", "round", "clean", "friend", "follow",
                        "money", "school", "water", "window", "garden", "sister", "winter", "market", "bottle", "kettle"
                    ]
                },
                {
                    id: "junior-3",
                    title: "Level 3",
                    words: [
                        "letter", "teach", "spend", "before", "fresh", "loud", "belong", "early", "number", "true",
                        "country", "people", "thought", "morning", "together", "children", "another", "animal", "mountain", "village",
                        "forest", "summer", "weather", "middle", "kitchen", "flower", "ground", "yellow", "cried", "street"
                    ]
                }
            ]
        },
        {
            id: "master",
            title: "Master",
            description: "More complex words from Schonell Groups 3–4",
            icon: "🎓",
            color: "#3B82F6",
            levels: [
                {
                    id: "master-1",
                    title: "Level 1",
                    words: ["curious", "danger", "punish", "gather", "journey", "polite", "remain", "prevent", "silent", "destroy"]
                },
                {
                    id: "master-2",
                    title: "Level 2",
                    words: [
                        "stranger", "capture", "distant", "vanish", "comfort", "admire", "difficult", "honest", "discover", "escape",
                        "forgive", "moment", "gentle", "useful", "quickly", "pardon", "obtain", "obtain", "rainbow", "fright"
                    ]
                },
                {
                    id: "master-3",
                    title: "Level 3",
                    words: [
                        "brilliant", "serious", "merchant", "wealthy", "prepare", "ancient", "obey", "famous", "protect", "certain",
                        "explain", "expect", "island", "twelve", "hundred", "thousand", "language", "English", "message", "victory",
                        "adventure", "holiday", "beautiful", "distance", "correct", "discuss", "delay", "breath", "thought", "understand"
                    ]
                }
            ]
        },
        {
            id: "elite",
            title: "Elite",
            description: "Advanced vocabulary from Schonell Groups 5–6",
            icon: "👑",
            color: "#8B5CF6",
            levels: [
                {
                    id: "elite-1",
                    title: "Level 1",
                    words: ["courage", "generous", "obstacle", "persuade", "sufficient", "temporary", "neglect", "fortunate", "surrender", "peculiar"]
                },
                {
                    id: "elite-2",
                    title: "Level 2",
                    words: [
                        "possess", "ridiculous", "innocent", "immediately", "complain", "reliable", "triumph", "abundant", "deliberate", "succeed",
                        "industry", "increase", "gradual", "separate", "regular", "popular", "vinegar", "flourish", "victim", "calendar"
                    ]
                },
                {
                    id: "elite-3",
                    title: "Level 3",
                    words: [
                        "appreciate", "prejudice", "suspicious", "extraordinary", "recommend", "permanent", "conceited", "persevere", "essential", "responsibility",
                        "inquisitive", "gorgeous", "immediate", "individual", "interfere", "interpret", "muscle", "neighbor", "occupy", "occur",
                        "opportunity", "parliament", "physical", "privilege", "rhythm", "secretary", "sufficient", "temperature", "variety", "witness"
                    ]
                }
            ]
        }
    ]
};

export default wordScrambleData;
