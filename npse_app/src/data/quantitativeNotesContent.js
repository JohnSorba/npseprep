// Quantitative Aptitude Notes Content with KaTeX math notation
// Use $...$ for inline math and $$...$$ for block math

export const quantitativeNotesContent = {
    'qa-unit-1': {
        title: 'Letter and Number Code Representation',
        subject: 'Codes & Patterns',
        sections: [
            {
                heading: 'What is Code Representation?',
                type: 'text',
                content: 'In code representation, a group of letters forms a word that corresponds to a certain group of numbers. Each letter aligns with a specific digit, allowing you to decode words from numbers and encode words into numbers.'
            },
            {
                heading: 'How to Align Letters and Numbers',
                type: 'steps',
                items: [
                    { step: 1, description: 'Write out the code word with spaces between each letter' },
                    { step: 2, description: 'Write the corresponding number beneath each letter' },
                    { step: 3, description: 'Use this alignment table to decode or encode' }
                ]
            },
            {
                heading: 'Example: TREMENDOUS = 123456789',
                type: 'table',
                headers: ['T', 'R', 'E', 'M', 'E', 'N', 'D', 'O', 'U', 'S'],
                rows: [['1', '2', '3', '4', '3', '5', '6', '7', '8', '9']]
            },
            {
                heading: 'Decoding Examples',
                type: 'definition',
                definitions: [
                    { term: '12339', definition: 'TREES (T=1, R=2, E=3, E=3, S=9)' },
                    { term: '97856', definition: 'SOUND (S=9, O=7, U=8, N=5, D=6)' },
                    { term: '6751', definition: "DON'T (D=6, O=7, N=5, T=1)" }
                ]
            },
            {
                heading: 'Tips for Success',
                type: 'checklist',
                items: [
                    'Always write out the letter-number alignment first',
                    'Check that each letter matches its correct number',
                    'Watch for repeated letters with the same number',
                    'Practice with different code words'
                ]
            }
        ],
        keyPoints: [
            'Align letters with digits in order',
            'Same letter = same number',
            'Practice decoding and encoding',
            'Check your work by reversing the process'
        ]
    },
    'qa-unit-2': {
        title: 'Sets and Venn Diagrams',
        subject: 'Codes & Patterns',
        sections: [
            {
                heading: 'What is a Set?',
                type: 'text',
                content: 'A set is a collection of objects put together. Examples include: set of even numbers, set of odd numbers, a set of football players, or a set of basketball players.'
            },
            {
                heading: 'What is a Venn Diagram?',
                type: 'text',
                content: 'A Venn diagram shows two or more sets drawn together using shapes like circles, triangles, or rectangles. The overlapping areas show elements that belong to multiple sets.'
            },
            {
                heading: 'Understanding Regions',
                type: 'comparison',
                items: [
                    { title: 'Only One Set', description: 'Elements in the non-overlapping part of a shape', examples: ['Benz only', 'Mazda only'] },
                    { title: 'Two Sets', description: 'Elements in the overlapping part of two shapes', examples: ['Benz AND Mazda'] },
                    { title: 'All Sets', description: 'Elements in the center where all shapes overlap', examples: ['All three cars'] }
                ]
            },
            {
                heading: 'Reading Venn Diagrams',
                type: 'steps',
                items: [
                    { step: 1, description: 'Identify what each shape represents (circle, triangle, rectangle)' },
                    { step: 2, description: 'Look at where shapes overlap for shared elements' },
                    { step: 3, description: 'For "only" questions, look at non-overlapping regions' },
                    { step: 4, description: 'For "and" questions, look at overlapping regions' }
                ]
            }
        ],
        keyPoints: [
            'A set is a collection of objects',
            'Venn diagrams show relationships between sets',
            'Overlapping regions show shared elements',
            '"Only" means non-overlapping parts'
        ]
    },
    'qa-unit-3': {
        title: 'Games and Puzzles',
        subject: 'Codes & Patterns',
        sections: [
            {
                heading: 'Introduction',
                type: 'text',
                content: 'Mathematical puzzles require you to identify which operation (addition, subtraction, multiplication, or division) is being used to connect numbers in a pattern.'
            },
            {
                heading: 'Finding the Operation',
                type: 'steps',
                items: [
                    { step: 1, description: 'Look at the relationship between given numbers' },
                    { step: 2, description: 'Try each operation to see which one works' },
                    { step: 3, description: 'Apply the same operation to find missing values' }
                ]
            },
            {
                heading: 'Common Operations',
                type: 'cards',
                items: [
                    { icon: '➕', title: 'Addition', examples: '$3 + 5 = 8$', color: '#10b981' },
                    { icon: '➖', title: 'Subtraction', examples: '$10 - 4 = 6$', color: '#ef4444' },
                    { icon: '✖️', title: 'Multiplication', examples: '$4 \\times 3 = 12$', color: '#6366f1' },
                    { icon: '➗', title: 'Division', examples: '$18 \\div 6 = 3$', color: '#f59e0b' }
                ]
            }
        ],
        keyPoints: [
            'Identify the operation used in examples',
            'Apply the same pattern to solve puzzles',
            'Check your answer by working backwards'
        ]
    },
    'qa-unit-4': {
        title: 'Number Codes with Geometric Shapes',
        subject: 'Codes & Patterns',
        sections: [
            {
                heading: 'Introduction',
                type: 'text',
                content: 'Geometric shapes like squares, circles, and triangles may have numbers at their vertices. Your task is to find the pattern and calculate the number at the center.'
            },
            {
                heading: 'Common Pattern: Multiply Opposite Corners, Then Add',
                type: 'steps',
                items: [
                    { step: 1, description: 'Multiply numbers at opposite vertices' },
                    { step: 2, description: 'Do the same for the other pair of opposite vertices' },
                    { step: 3, description: 'Add the two products to get the center number' }
                ]
            },
            {
                heading: 'Example Calculation',
                type: 'numbered-list',
                items: [
                    'First pair: $2 \\times 7 = 14$',
                    'Second pair: $5 \\times 6 = 30$',
                    'Center: $14 + 30 = 44$'
                ]
            }
        ],
        keyPoints: [
            'Look at numbers at vertices of shapes',
            'Multiply opposite corners',
            'Add the products for the center value'
        ]
    },
    'qa-unit-5': {
        title: 'Relations Involving Addition',
        subject: 'Number Relations',
        sections: [
            {
                heading: 'What Are Number Relations?',
                type: 'text',
                content: 'When given two or more sets of numbers, we can find connections between them. Numbers that go up by a constant amount are related by addition.'
            },
            {
                heading: 'Examples of Addition Relations',
                type: 'table',
                headers: ['Set', 'Numbers', 'Relation'],
                rows: [
                    ['A', '1, 2, 3', 'Add 1'],
                    ['B', '3, 5, 7', 'Add 2'],
                    ['C', '4, 7, 10', 'Add 3'],
                    ['D', '10, 20, 30', 'Add 10']
                ]
            },
            {
                heading: 'Finding the Pattern',
                type: 'steps',
                items: [
                    { step: 1, description: 'Find the difference between the first two numbers' },
                    { step: 2, description: 'Check if the same difference applies to other pairs' },
                    { step: 3, description: 'If yes, the set is related by adding that number' }
                ]
            }
        ],
        keyPoints: [
            'Add a constant to get the next term',
            'The constant is called the common difference',
            'All pairs must have the same difference'
        ]
    },
    'qa-unit-6': {
        title: 'Relations Involving Subtraction',
        subject: 'Number Relations',
        sections: [
            {
                heading: 'Introduction',
                type: 'text',
                content: 'Numbers can be related by subtracting a constant from each term to get the next term. This creates a decreasing sequence.'
            },
            {
                heading: 'Examples',
                type: 'table',
                headers: ['Set', 'Numbers', 'Relation'],
                rows: [
                    ['A', '10, 8, 6', 'Subtract 2'],
                    ['B', '8, 5, 2', 'Subtract 3'],
                    ['C', '30, 20, 10', 'Subtract 10']
                ]
            },
            {
                heading: 'Unrelated Sets',
                type: 'text',
                content: 'Set C: 10, 6, 4 is NOT related by subtraction because $10 - 6 = 4$ but $6 - 4 = 2$ (different differences).'
            }
        ],
        keyPoints: [
            'Subtract a constant to get the next term',
            'The difference must be the same throughout',
            'Creates a decreasing sequence'
        ]
    },
    'qa-unit-7': {
        title: 'Relations Involving Multiplication',
        subject: 'Number Relations',
        sections: [
            {
                heading: 'Introduction',
                type: 'text',
                content: 'In multiplication relations, you multiply each term by a constant number (common multiplier) to get the next term.'
            },
            {
                heading: 'Examples',
                type: 'table',
                headers: ['Set', 'Numbers', 'Common Multiplier'],
                rows: [
                    ['A', '1, 2, 4, 8', 'Multiply by 2'],
                    ['B', '1, 3, 9', 'Multiply by 3'],
                    ['C', '1, 4, 16', 'Multiply by 4']
                ]
            },
            {
                heading: 'Finding Next Terms',
                type: 'text',
                content: 'For the set 1, 2, 4, 8: The next terms are $8 \\times 2 = 16$ and $16 \\times 2 = 32$.'
            }
        ],
        keyPoints: [
            'Multiply by a constant to get next term',
            'Creates a geometric sequence',
            'The multiplier is the common ratio'
        ]
    },
    'qa-unit-8': {
        title: 'Relations Involving Division',
        subject: 'Number Relations',
        sections: [
            {
                heading: 'Introduction',
                type: 'text',
                content: 'In division relations, each term is divided by a constant number to get the next term, creating a decreasing sequence.'
            },
            {
                heading: 'Examples',
                type: 'table',
                headers: ['Set', 'Numbers', 'Relation'],
                rows: [
                    ['A', '12, 6, 3', 'Divide by 2'],
                    ['B', '9, 3, 1', 'Divide by 3'],
                    ['C', '48, 24, 12', 'Divide by 2']
                ]
            },
            {
                heading: 'Unrelated Example',
                type: 'text',
                content: 'Set: 32, 8, 4 is NOT related by division. $32 \\div 4 = 8$, but $8 \\div 4 = 2$ (not 4).'
            }
        ],
        keyPoints: [
            'Divide by a constant to get next term',
            'The divisor must be consistent',
            'Creates a decreasing sequence'
        ]
    },
    'qa-unit-9': {
        title: 'Relations Involving Four Operations',
        subject: 'Number Relations',
        sections: [
            {
                heading: 'Ordered Pairs',
                type: 'text',
                content: 'Ordered pairs are written as $(x, y)$. When comparing two pairs like A(3, 4) and B(6, 3), we find separate rules for x-values and y-values.'
            },
            {
                heading: 'Finding Rules',
                type: 'comparison',
                items: [
                    { title: 'X-values', description: 'Compare first numbers of each pair', examples: ['3 to 6: multiply by 2'] },
                    { title: 'Y-values', description: 'Compare second numbers of each pair', examples: ['4 to 3: subtract 1'] }
                ]
            },
            {
                heading: 'Example Rule',
                type: 'text',
                content: 'For $(2, 7)$ and $(3, 5)$: Rule is $x + 1$, $y - 2$. So $(2 + 1 = 3, 7 - 2 = 5)$.'
            }
        ],
        keyPoints: [
            'Ordered pairs have form $(x, y)$',
            'X and Y can follow different rules',
            'Find the operation that connects the pairs'
        ]
    },
    'qa-unit-10': {
        title: 'Number Series Patterns',
        subject: 'Number Series',
        sections: [
            {
                heading: 'What is a Series?',
                type: 'text',
                content: 'A series is a set pattern of numbers appearing in a chosen order. Series can involve squares, multiples, fractions, or decimals.'
            },
            {
                heading: 'Types of Series',
                type: 'list',
                items: [
                    { title: 'Number and Square', description: '$(2,4), (3,9), (4,16)$ - second number is square of first' },
                    { title: 'Multiples', description: '$2, 4, 8, 16$ - each multiplied by 2' },
                    { title: 'Fractions', description: 'Pattern in numerator and denominator' },
                    { title: 'Decimals', description: '$150, 15, 1.5, 0.15$ - divide by 10' }
                ]
            },
            {
                heading: 'Solving Strategy',
                type: 'text',
                content: 'Always study the first three numbers to identify the pattern before finding subsequent numbers.'
            }
        ],
        keyPoints: [
            'Study the first few numbers carefully',
            'Look for multiplication, division, or squares',
            'Apply the pattern to find missing terms'
        ]
    },
    'qa-unit-30': {
        title: 'Roman Numbers',
        subject: 'Special Topics',
        sections: [
            {
                heading: 'Basic Roman Numerals',
                type: 'table',
                headers: ['Roman', 'Arabic'],
                rows: [
                    ['I', '1'],
                    ['V', '5'],
                    ['X', '10'],
                    ['L', '50'],
                    ['C', '100'],
                    ['D', '500'],
                    ['M', '1000']
                ]
            },
            {
                heading: 'Rules for Roman Numbers',
                type: 'numbered-list',
                items: [
                    'A letter after a larger numeral adds to it: $VI = 5 + 1 = 6$',
                    'A letter before a larger numeral subtracts: $IV = 5 - 1 = 4$',
                    'I can come before V (5) and X (10): $IV = 4$, $IX = 9$',
                    'X can come before L (50) and C (100): $XL = 40$, $XC = 90$'
                ]
            },
            {
                heading: 'Examples',
                type: 'definition',
                definitions: [
                    { term: 'XV', definition: '$= 10 + 5 = 15$' },
                    { term: 'XXIX', definition: '$= 10 + 10 + 9 = 29$' },
                    { term: 'XLIV', definition: '$= 40 + 4 = 44$' },
                    { term: 'LXXV', definition: '$= 50 + 25 = 75$' }
                ]
            }
        ],
        keyPoints: [
            'I, V, X, L, C, D, M are basic symbols',
            'Small before large = subtraction',
            'Small after large = addition'
        ]
    }
};

// Helper function
export const getQuantitativeNotesContent = (unitId) => {
    return quantitativeNotesContent[unitId] || null;
};
