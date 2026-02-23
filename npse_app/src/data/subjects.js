// NPSE Subject Data
export const subjects = [
    {
        id: 'mathematics',
        name: 'Mathematics',
        icon: '📐',
        color: '#0c8ce9',
        bgColor: '#e0efff',
        description: 'Master numbers, shapes, and problem-solving skills essential for NPSE success.',
        topics: [
            'Number Operations',
            'Fractions & Decimals',
            'Geometry & Measurements',
            'Word Problems',
            'Data Handling',
            'Ratio & Proportion'
        ],
        sampleQuestions: [
            {
                id: 1,
                question: 'What is 3/4 + 1/2?',
                options: ['1 1/4', '1 1/2', '5/6', '1'],
                correctAnswer: 0,
                explanation: 'First, find a common denominator. 1/2 = 2/4. So 3/4 + 2/4 = 5/4 = 1 1/4'
            },
            {
                id: 2,
                question: 'A rectangle has length 12cm and width 5cm. What is its perimeter?',
                options: ['17cm', '34cm', '60cm', '24cm'],
                correctAnswer: 1,
                explanation: 'Perimeter = 2(length + width) = 2(12 + 5) = 2 × 17 = 34cm'
            },
            {
                id: 3,
                question: 'If 5 pencils cost Le 2,500, how much do 8 pencils cost?',
                options: ['Le 3,000', 'Le 3,500', 'Le 4,000', 'Le 4,500'],
                correctAnswer: 2,
                explanation: 'Cost of 1 pencil = 2,500 ÷ 5 = Le 500. Cost of 8 pencils = 500 × 8 = Le 4,000'
            }
        ],
        quizQuestions: [
            {
                id: 1,
                question: 'What is 156 + 287?',
                options: ['443', '433', '343', '453'],
                correctAnswer: 0,
                explanation: 'Add the ones: 6 + 7 = 13. Add the tens: 5 + 8 + 1 = 14. Add the hundreds: 1 + 2 + 1 = 4. So 156 + 287 = 443'
            },
            {
                id: 2,
                question: 'Simplify: 24 ÷ 6 × 2',
                options: ['2', '8', '6', '4'],
                correctAnswer: 1,
                explanation: 'Work from left to right: 24 ÷ 6 = 4, then 4 × 2 = 8'
            },
            {
                id: 3,
                question: 'What fraction of 1 hour is 15 minutes?',
                options: ['1/2', '1/3', '1/4', '1/5'],
                correctAnswer: 2,
                explanation: '15 minutes out of 60 minutes = 15/60 = 1/4'
            },
            {
                id: 4,
                question: 'The area of a square is 49 cm². What is its side length?',
                options: ['6 cm', '7 cm', '8 cm', '9 cm'],
                correctAnswer: 1,
                explanation: 'Area = side × side. So side = √49 = 7 cm'
            },
            {
                id: 5,
                question: 'What is 25% of 80?',
                options: ['15', '20', '25', '30'],
                correctAnswer: 1,
                explanation: '25% = 25/100 = 1/4. So 25% of 80 = 80 ÷ 4 = 20'
            }
        ]
    },
    {
        id: 'english',
        name: 'English Language',
        icon: '📚',
        color: '#9333ea',
        bgColor: '#f3e8ff',
        description: 'Develop strong reading, writing, and grammar skills for clear communication.',
        topics: [
            'Parts of Speech',
            'Sentence Structure',
            'Comprehension',
            'Essay Writing',
            'Vocabulary',
            'Punctuation'
        ],
        sampleQuestions: [
            {
                id: 1,
                question: 'Which word is a noun in this sentence: "The clever boy solved the problem quickly."',
                options: ['clever', 'solved', 'boy', 'quickly'],
                correctAnswer: 2,
                explanation: 'A noun is a person, place, thing, or idea. "Boy" is a person, so it\'s a noun.'
            },
            {
                id: 2,
                question: 'Choose the correct form: "She ___ to school every day."',
                options: ['go', 'goes', 'going', 'gone'],
                correctAnswer: 1,
                explanation: 'With third person singular (she), we use "goes" in simple present tense.'
            },
            {
                id: 3,
                question: 'What is the plural of "child"?',
                options: ['childs', 'childes', 'children', 'child\'s'],
                correctAnswer: 2,
                explanation: '"Child" has an irregular plural form: "children"'
            }
        ],
        quizQuestions: [
            {
                id: 1,
                question: 'Which sentence is correct?',
                options: [
                    'Me and him went to the shop.',
                    'Him and me went to the shop.',
                    'He and I went to the shop.',
                    'I and he went to the shop.'
                ],
                correctAnswer: 2,
                explanation: 'Use subject pronouns (he, I) when they are the subject of the sentence.'
            },
            {
                id: 2,
                question: 'Choose the correct punctuation: "What time is it__"',
                options: ['.', '!', '?', ','],
                correctAnswer: 2,
                explanation: 'This is a question, so it needs a question mark (?)'
            },
            {
                id: 3,
                question: 'Which word is an adjective in: "The beautiful garden has many flowers."',
                options: ['garden', 'beautiful', 'many', 'flowers'],
                correctAnswer: 1,
                explanation: '"Beautiful" describes the noun "garden", so it\'s an adjective.'
            },
            {
                id: 4,
                question: 'What is the opposite of "generous"?',
                options: ['kind', 'selfish', 'happy', 'brave'],
                correctAnswer: 1,
                explanation: 'Generous means giving freely. The opposite is selfish - unwilling to share.'
            },
            {
                id: 5,
                question: 'Complete: "Neither the teacher ___ the students were late."',
                options: ['or', 'and', 'but', 'nor'],
                correctAnswer: 3,
                explanation: '"Neither" is always paired with "nor" in English grammar.'
            }
        ]
    },
    {
        id: 'quantitative',
        name: 'Quantitative Aptitude',
        icon: '🔢',
        color: '#f97316',
        bgColor: '#fff7ed',
        description: 'Sharpen your numerical reasoning and mental math abilities.',
        topics: [
            'Number Series',
            'Mental Arithmetic',
            'Tables & Graphs',
            'Speed & Distance',
            'Profit & Loss',
            'Patterns'
        ],
        sampleQuestions: [
            {
                id: 1,
                question: 'What comes next in the sequence: 2, 6, 12, 20, 30, ?',
                options: ['40', '42', '44', '46'],
                correctAnswer: 1,
                explanation: 'The differences are 4, 6, 8, 10, ... so the next difference is 12. 30 + 12 = 42'
            },
            {
                id: 2,
                question: 'If a shirt costs Le 5,000 and is sold at a 20% profit, what is the selling price?',
                options: ['Le 5,500', 'Le 6,000', 'Le 5,200', 'Le 6,500'],
                correctAnswer: 1,
                explanation: 'Profit = 20% of 5,000 = 1,000. Selling price = 5,000 + 1,000 = Le 6,000'
            },
            {
                id: 3,
                question: 'A car travels 120 km in 2 hours. What is its speed?',
                options: ['50 km/h', '55 km/h', '60 km/h', '65 km/h'],
                correctAnswer: 2,
                explanation: 'Speed = Distance ÷ Time = 120 ÷ 2 = 60 km/h'
            }
        ],
        quizQuestions: [
            {
                id: 1,
                question: 'Find the missing number: 3, 9, 27, 81, ?',
                options: ['162', '243', '169', '256'],
                correctAnswer: 1,
                explanation: 'Each number is multiplied by 3. 81 × 3 = 243'
            },
            {
                id: 2,
                question: 'If 6 workers can finish a job in 12 days, how many days will 9 workers take?',
                options: ['8 days', '10 days', '6 days', '18 days'],
                correctAnswer: 0,
                explanation: 'More workers = less time. 6 × 12 = 72 worker-days. 72 ÷ 9 = 8 days'
            },
            {
                id: 3,
                question: 'What is 15% of 400?',
                options: ['50', '60', '70', '80'],
                correctAnswer: 1,
                explanation: '15% of 400 = (15/100) × 400 = 60'
            },
            {
                id: 4,
                question: 'A book was bought for Le 800 and sold for Le 1,000. What is the profit percentage?',
                options: ['20%', '25%', '30%', '15%'],
                correctAnswer: 1,
                explanation: 'Profit = 1,000 - 800 = 200. Profit % = (200/800) × 100 = 25%'
            },
            {
                id: 5,
                question: 'What is the average of 12, 18, 24, and 30?',
                options: ['20', '21', '22', '23'],
                correctAnswer: 1,
                explanation: 'Sum = 12 + 18 + 24 + 30 = 84. Average = 84 ÷ 4 = 21'
            }
        ]
    },
    {
        id: 'verbal',
        name: 'Verbal Aptitude',
        icon: '💬',
        color: '#10b981',
        bgColor: '#ecfdf5',
        description: 'Enhance your vocabulary, word relationships, and verbal reasoning skills.',
        topics: [
            'Synonyms & Antonyms',
            'Analogies',
            'Word Meanings',
            'Sentence Completion',
            'Logical Reasoning',
            'Idioms & Proverbs'
        ],
        sampleQuestions: [
            {
                id: 1,
                question: 'HAPPY is to SAD as TALL is to:',
                options: ['high', 'short', 'long', 'big'],
                correctAnswer: 1,
                explanation: 'Happy and sad are opposites. The opposite of tall is short.'
            },
            {
                id: 2,
                question: 'Which word means the same as "courageous"?',
                options: ['cowardly', 'brave', 'weak', 'scared'],
                correctAnswer: 1,
                explanation: 'Courageous and brave both mean showing no fear.'
            },
            {
                id: 3,
                question: 'Complete the proverb: "A stitch in time saves ___"',
                options: ['seven', 'eight', 'nine', 'ten'],
                correctAnswer: 2,
                explanation: 'The proverb is "A stitch in time saves nine" - meaning early action prevents bigger problems.'
            }
        ],
        quizQuestions: [
            {
                id: 1,
                question: 'Choose the word that is most similar to "ANCIENT":',
                options: ['modern', 'old', 'new', 'young'],
                correctAnswer: 1,
                explanation: 'Ancient means very old, from a long time ago.'
            },
            {
                id: 2,
                question: 'BIRD is to NEST as BEE is to:',
                options: ['honey', 'flower', 'hive', 'sting'],
                correctAnswer: 2,
                explanation: 'A bird lives in a nest. A bee lives in a hive.'
            },
            {
                id: 3,
                question: 'What is the opposite of "ACCEPT"?',
                options: ['receive', 'reject', 'agree', 'take'],
                correctAnswer: 1,
                explanation: 'Accept means to say yes to something. Reject means to say no.'
            },
            {
                id: 4,
                question: 'Complete: "Don\'t put all your eggs in one ___"',
                options: ['box', 'basket', 'bag', 'bowl'],
                correctAnswer: 1,
                explanation: 'The idiom is "Don\'t put all your eggs in one basket" - meaning don\'t risk everything on one thing.'
            },
            {
                id: 5,
                question: 'DOCTOR is to HOSPITAL as TEACHER is to:',
                options: ['student', 'book', 'school', 'class'],
                correctAnswer: 2,
                explanation: 'A doctor works in a hospital. A teacher works in a school.'
            }
        ]
    },
    {
        id: 'general',
        name: 'General Paper',
        icon: '🌍',
        color: '#ec4899',
        bgColor: '#fce7f3',
        description: 'Explore general knowledge about Sierra Leone, Africa, and the world.',
        topics: [
            'Sierra Leone History',
            'African Geography',
            'World Cultures',
            'Current Affairs',
            'Science & Nature',
            'Civic Education'
        ],
        sampleQuestions: [
            {
                id: 1,
                question: 'What is the capital city of Sierra Leone?',
                options: ['Bo', 'Kenema', 'Freetown', 'Makeni'],
                correctAnswer: 2,
                explanation: 'Freetown is the capital and largest city of Sierra Leone.'
            },
            {
                id: 2,
                question: 'Which river is the longest in Africa?',
                options: ['Congo River', 'Niger River', 'Nile River', 'Zambezi River'],
                correctAnswer: 2,
                explanation: 'The Nile River is approximately 6,650 km long, making it the longest river in Africa.'
            },
            {
                id: 3,
                question: 'When did Sierra Leone gain independence?',
                options: ['1960', '1961', '1962', '1963'],
                correctAnswer: 1,
                explanation: 'Sierra Leone gained independence from Britain on April 27, 1961.'
            }
        ],
        quizQuestions: [
            {
                id: 1,
                question: 'What is the national currency of Sierra Leone?',
                options: ['Dollar', 'Leone', 'Naira', 'Cedi'],
                correctAnswer: 1,
                explanation: 'The Leone (Le) is the official currency of Sierra Leone.'
            },
            {
                id: 2,
                question: 'How many provinces does Sierra Leone have?',
                options: ['3', '4', '5', '6'],
                correctAnswer: 1,
                explanation: 'Sierra Leone has 4 provinces: Eastern, Northern, Southern, and Western Area.'
            },
            {
                id: 3,
                question: 'Which ocean borders Sierra Leone?',
                options: ['Indian Ocean', 'Pacific Ocean', 'Atlantic Ocean', 'Arctic Ocean'],
                correctAnswer: 2,
                explanation: 'Sierra Leone is located on the west coast of Africa, bordered by the Atlantic Ocean.'
            },
            {
                id: 4,
                question: 'What is the largest continent in the world?',
                options: ['Africa', 'Europe', 'Asia', 'North America'],
                correctAnswer: 2,
                explanation: 'Asia is the largest continent, covering about 30% of Earth\'s land area.'
            },
            {
                id: 5,
                question: 'Which planet is closest to the Sun?',
                options: ['Venus', 'Earth', 'Mercury', 'Mars'],
                correctAnswer: 2,
                explanation: 'Mercury is the closest planet to the Sun in our solar system.'
            }
        ]
    }
];

export const getSubjectById = (id) => {
    return subjects.find(subject => subject.id === id);
};

export const getAllSubjects = () => {
    return subjects;
};
