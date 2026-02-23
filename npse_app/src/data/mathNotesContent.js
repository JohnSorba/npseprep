// Mathematics Notes Content - Combined (All 30 Units)
// Based on MBSSE Class 6 Syllabus with Examples and Diagrams

import { mathNotesContentPart2, getMathNotesContentPart2 } from './mathNotesContentPart2';
import { mathNotesContentPart3, getMathNotesContentPart3 } from './mathNotesContentPart3';

// Part 1: Units 1-10
export const mathNotesContent = {
    'math-unit-1': {
        title: 'Numbers and Numeration',
        subject: 'Numbers & Numeration',
        sections: [
            {
                heading: 'Understanding Place Value',
                type: 'text',
                content: 'Place value tells us the value of each digit in a number based on its position. The further left a digit is, the greater its value.'
            },
            {
                heading: 'Place Value Chart',
                type: 'diagram',
                diagramType: 'place-value',
                data: {
                    title: 'Place Value of 3,542,168',
                    positions: [
                        { label: 'Millions', value: '3', color: '#6366f1' },
                        { label: 'Hundred Thousands', value: '5', color: '#8b5cf6' },
                        { label: 'Ten Thousands', value: '4', color: '#a855f7' },
                        { label: 'Thousands', value: '2', color: '#d946ef' },
                        { label: 'Hundreds', value: '1', color: '#ec4899' },
                        { label: 'Tens', value: '6', color: '#f43f5e' },
                        { label: 'Ones', value: '8', color: '#f97316' }
                    ]
                }
            },
            {
                heading: 'The Abacus System',
                type: 'text',
                content: 'An abacus can show seven place values. Each column represents a different power of 10.'
            },
            {
                heading: 'Reading Large Numbers',
                type: 'steps',
                items: [
                    { step: '1', description: 'Start from the RIGHT and group digits in threes' },
                    { step: '2', description: 'Label groups: Ones, Thousands, Millions' },
                    { step: '3', description: 'Read from LEFT to RIGHT, adding group names' }
                ]
            },
            {
                heading: 'Writing Numbers in Expanded Form',
                type: 'definition',
                definitions: [
                    { term: '$2,324,567$', definition: '$= 2,000,000 + 300,000 + 20,000 + 4,000 + 500 + 60 + 7$' },
                    { term: '$62,504$', definition: '$= 60,000 + 2,000 + 500 + 4$' },
                    { term: '$1,050,200$', definition: '$= 1,000,000 + 50,000 + 200$' }
                ]
            },
            {
                heading: 'Writing Numbers in Words',
                type: 'definition',
                definitions: [
                    { term: '$6,000,000$', definition: 'Six million' },
                    { term: '$32,205,249$', definition: 'Thirty-two million, two hundred and five thousand, two hundred and forty-nine' },
                    { term: '$4,050,003$', definition: 'Four million, fifty thousand, and three' }
                ]
            },
            {
                heading: 'Comparing Numbers',
                type: 'diagram',
                diagramType: 'number-line',
                data: {
                    title: 'Number Line: Comparing 1,500,000, 2,000,000, and 2,500,000',
                    points: [
                        { value: 1500000, label: '1.5M' },
                        { value: 2000000, label: '2M' },
                        { value: 2500000, label: '2.5M' }
                    ],
                    min: 1000000,
                    max: 3000000
                }
            },
            {
                heading: 'Practice Examples',
                type: 'table',
                headers: ['Number', 'Expanded Form', 'Words'],
                rows: [
                    ['$45,678$', '$40,000 + 5,000 + 600 + 70 + 8$', 'Forty-five thousand, six hundred seventy-eight'],
                    ['$100,500$', '$100,000 + 500$', 'One hundred thousand, five hundred'],
                    ['$3,240,000$', '$3,000,000 + 240,000$', 'Three million, two hundred forty thousand']
                ]
            }
        ],
        keyPoints: [
            'Each position has a specific value (ones, tens, hundreds, etc.)',
            'Expanded form breaks numbers into place value components',
            'Read from left to right, grouping by thousands and millions'
        ]
    },
    'math-unit-2': {
        title: 'Even, Odd and Prime Numbers',
        subject: 'Numbers & Numeration',
        sections: [
            {
                heading: 'Even Numbers',
                type: 'text',
                content: 'Even numbers are divisible by 2 with no remainder. They end in 0, 2, 4, 6, or 8.'
            },
            {
                heading: 'Even Numbers Visual',
                type: 'diagram',
                diagramType: 'number-grid',
                data: {
                    title: 'Even Numbers from 2 to 20',
                    numbers: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20],
                    highlightColor: '#22c55e',
                    gridCols: 5
                }
            },
            {
                heading: 'Odd Numbers',
                type: 'text',
                content: 'Odd numbers are NOT divisible by 2. They end in 1, 3, 5, 7, or 9.'
            },
            {
                heading: 'Odd Numbers Visual',
                type: 'diagram',
                diagramType: 'number-grid',
                data: {
                    title: 'Odd Numbers from 1 to 19',
                    numbers: [1, 3, 5, 7, 9, 11, 13, 15, 17, 19],
                    highlightColor: '#f97316',
                    gridCols: 5
                }
            },
            {
                heading: 'Prime Numbers',
                type: 'text',
                content: 'Prime numbers have exactly TWO factors: 1 and themselves. Note: 1 is NOT prime (it only has one factor).'
            },
            {
                heading: 'Prime Numbers Chart (2 to 50)',
                type: 'diagram',
                diagramType: 'sieve',
                data: {
                    title: 'Sieve of Eratosthenes',
                    primes: [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47],
                    max: 50
                }
            },
            {
                heading: 'Composite Numbers',
                type: 'definition',
                definitions: [
                    { term: 'Composite', definition: 'A number with MORE than 2 factors. Examples: 4, 6, 8, 9, 10, 12...' },
                    { term: '4', definition: 'Factors: 1, 2, 4 (composite)' },
                    { term: '9', definition: 'Factors: 1, 3, 9 (composite)' }
                ]
            },
            {
                heading: 'HCF and LCM',
                type: 'definition',
                definitions: [
                    { term: 'HCF (Highest Common Factor)', definition: 'The largest number that divides evenly into given numbers' },
                    { term: 'LCM (Lowest Common Multiple)', definition: 'The smallest number that is a multiple of given numbers' }
                ]
            },
            {
                heading: 'Finding HCF - Example',
                type: 'steps',
                items: [
                    { step: '1', description: 'Find HCF of 12 and 18' },
                    { step: '2', description: 'Factors of 12: 1, 2, 3, 4, 6, 12' },
                    { step: '3', description: 'Factors of 18: 1, 2, 3, 6, 9, 18' },
                    { step: '4', description: 'Common factors: 1, 2, 3, 6' },
                    { step: '5', description: 'HCF = 6 (the highest)' }
                ]
            },
            {
                heading: 'Finding LCM - Example',
                type: 'steps',
                items: [
                    { step: '1', description: 'Find LCM of 4 and 6' },
                    { step: '2', description: 'Multiples of 4: 4, 8, 12, 16, 20, 24...' },
                    { step: '3', description: 'Multiples of 6: 6, 12, 18, 24, 30...' },
                    { step: '4', description: 'Common multiples: 12, 24...' },
                    { step: '5', description: 'LCM = 12 (the lowest)' }
                ]
            },
            {
                heading: 'Practice Problems',
                type: 'table',
                headers: ['Problem', 'Answer'],
                rows: [
                    ['Is 15 even or odd?', 'Odd (ends in 5)'],
                    ['Is 17 prime?', 'Yes (factors: 1, 17)'],
                    ['HCF of 20 and 30', '10'],
                    ['LCM of 5 and 7', '35']
                ]
            }
        ],
        keyPoints: [
            'Even numbers end in 0, 2, 4, 6, 8',
            'Odd numbers end in 1, 3, 5, 7, 9',
            'Prime has exactly 2 factors (1 is NOT prime)',
            '2 is the only even prime number'
        ]
    },
    'math-unit-3': {
        title: 'Approximations',
        subject: 'Numbers & Numeration',
        sections: [
            {
                heading: 'What is Approximation?',
                type: 'text',
                content: 'Approximation (rounding) gives us an estimate that is close to the actual value. We round numbers to make them easier to work with.'
            },
            {
                heading: 'Rounding Rules',
                type: 'diagram',
                diagramType: 'rounding-rule',
                data: {
                    title: 'The Rounding Rule',
                    rules: [
                        { condition: 'If digit is 5 or more (5, 6, 7, 8, 9)', action: 'Round UP', color: '#22c55e' },
                        { condition: 'If digit is less than 5 (0, 1, 2, 3, 4)', action: 'Round DOWN', color: '#ef4444' }
                    ]
                }
            },
            {
                heading: 'Rounding to the Nearest 10',
                type: 'steps',
                items: [
                    { step: '1', description: 'Look at the ONES digit' },
                    { step: '2', description: 'If 5 or more, round up. If less than 5, round down.' },
                    { step: '3', description: 'Example: 23 → 20 (3 < 5, round down)' },
                    { step: '4', description: 'Example: 78 → 80 (8 ≥ 5, round up)' }
                ]
            },
            {
                heading: 'Rounding Examples',
                type: 'table',
                headers: ['Number', 'Nearest 10', 'Nearest 100', 'Nearest 1000'],
                rows: [
                    ['23', '20', '-', '-'],
                    ['567', '570', '600', '1000'],
                    ['2,845', '2,850', '2,800', '3,000'],
                    ['45,678', '45,680', '45,700', '46,000']
                ]
            },
            {
                heading: 'Number Line Visualization',
                type: 'diagram',
                diagramType: 'number-line-rounding',
                data: {
                    title: 'Rounding 67 to Nearest 10',
                    number: 67,
                    lowerBound: 60,
                    upperBound: 70,
                    midpoint: 65,
                    result: 70
                }
            },
            {
                heading: 'More Examples',
                type: 'definition',
                definitions: [
                    { term: '$349$ to nearest 10', definition: '$= 350$ (9 ≥ 5, round up)' },
                    { term: '$2,456$ to nearest 100', definition: '$= 2,500$ (5 ≥ 5, round up)' },
                    { term: '$7,250$ to nearest 1000', definition: '$= 7,000$ (2 < 5, round down)' },
                    { term: '$123,567$ to nearest 10,000', definition: '$= 120,000$ (3 < 5, round down)' }
                ]
            },
            {
                heading: 'Using Approximation in Real Life',
                type: 'list',
                items: [
                    { title: 'Estimating costs', description: 'Le 2,980 ≈ Le 3,000 for quick calculation' },
                    { title: 'Population', description: '7,234,567 people ≈ 7.2 million' },
                    { title: 'Distance', description: '58 km ≈ 60 km' }
                ]
            },
            {
                heading: 'Practice Problems',
                type: 'table',
                headers: ['Round this number', 'To nearest 100'],
                rows: [
                    ['456', '500'],
                    ['2,341', '2,300'],
                    ['8,950', '9,000'],
                    ['15,749', '15,700']
                ]
            }
        ],
        keyPoints: [
            'Look at the digit to the right of the rounding place',
            '5 or more = round up, less than 5 = round down',
            'Approximation makes calculations easier'
        ]
    },
    'math-unit-4': {
        title: 'Fractions',
        subject: 'Fractions & Decimals',
        sections: [
            {
                heading: 'Parts of a Fraction',
                type: 'diagram',
                diagramType: 'fraction-parts',
                data: {
                    title: 'The Fraction 3/4',
                    numerator: 3,
                    denominator: 4,
                    description: 'Numerator = parts we have, Denominator = total parts'
                }
            },
            {
                heading: 'Parts of a Fraction',
                type: 'definition',
                definitions: [
                    { term: 'Numerator (top)', definition: 'The number of parts we HAVE' },
                    { term: 'Denominator (bottom)', definition: 'The TOTAL number of equal parts' }
                ]
            },
            {
                heading: 'Types of Fractions',
                type: 'cards',
                items: [
                    { title: 'Proper Fraction', icon: '✓', examples: 'Numerator < Denominator: $\\frac{2}{3}$, $\\frac{3}{4}$, $\\frac{5}{8}$', color: '#22c55e' },
                    { title: 'Improper Fraction', icon: '↑', examples: 'Numerator ≥ Denominator: $\\frac{5}{4}$, $\\frac{7}{3}$, $\\frac{9}{2}$', color: '#f97316' },
                    { title: 'Mixed Number', icon: '★', examples: 'Whole + fraction: $2\\frac{1}{2}$, $3\\frac{3}{4}$', color: '#8b5cf6' }
                ]
            },
            {
                heading: 'Visual: Fraction of a Whole',
                type: 'diagram',
                diagramType: 'fraction-circle',
                data: {
                    title: 'Showing 3/4 of a Circle',
                    numerator: 3,
                    denominator: 4,
                    shadedColor: '#3b82f6',
                    unshadedColor: '#e5e7eb'
                }
            },
            {
                heading: 'Equivalent Fractions',
                type: 'text',
                content: 'Equivalent fractions have the same value. Multiply or divide both numerator and denominator by the same number.'
            },
            {
                heading: 'Equivalent Fractions Visual',
                type: 'diagram',
                diagramType: 'equivalent-fractions',
                data: {
                    fractions: [
                        { num: 1, den: 2 },
                        { num: 2, den: 4 },
                        { num: 3, den: 6 },
                        { num: 4, den: 8 }
                    ],
                    title: 'All Equal to 1/2'
                }
            },
            {
                heading: 'Converting Mixed Numbers to Improper Fractions',
                type: 'steps',
                items: [
                    { step: '1', description: 'Multiply whole number by denominator' },
                    { step: '2', description: 'Add the numerator' },
                    { step: '3', description: 'Put over the same denominator' },
                    { step: '4', description: 'Example: $2\\frac{3}{4} = \\frac{(2×4)+3}{4} = \\frac{11}{4}$' }
                ]
            },
            {
                heading: 'Converting Improper to Mixed',
                type: 'steps',
                items: [
                    { step: '1', description: 'Divide numerator by denominator' },
                    { step: '2', description: 'Quotient = whole number, Remainder = new numerator' },
                    { step: '3', description: 'Example: $\\frac{11}{4} = 11 ÷ 4 = 2$ remainder $3 = 2\\frac{3}{4}$' }
                ]
            },
            {
                heading: 'Adding Fractions (Same Denominator)',
                type: 'definition',
                definitions: [
                    { term: '$\\frac{2}{5} + \\frac{1}{5}$', definition: '$= \\frac{2+1}{5} = \\frac{3}{5}$' },
                    { term: '$\\frac{3}{8} + \\frac{4}{8}$', definition: '$= \\frac{7}{8}$' }
                ]
            },
            {
                heading: 'Adding Fractions (Different Denominators)',
                type: 'steps',
                items: [
                    { step: '1', description: 'Find the LCM of denominators (common denominator)' },
                    { step: '2', description: 'Convert each fraction' },
                    { step: '3', description: 'Add the numerators' },
                    { step: '4', description: 'Example: $\\frac{1}{2} + \\frac{1}{3} = \\frac{3}{6} + \\frac{2}{6} = \\frac{5}{6}$' }
                ]
            },
            {
                heading: 'Multiplying Fractions',
                type: 'definition',
                definitions: [
                    { term: 'Rule', definition: 'Multiply numerators, multiply denominators' },
                    { term: '$\\frac{2}{3} × \\frac{4}{5}$', definition: '$= \\frac{2×4}{3×5} = \\frac{8}{15}$' },
                    { term: '$\\frac{3}{4} × \\frac{2}{7}$', definition: '$= \\frac{6}{28} = \\frac{3}{14}$' }
                ]
            },
            {
                heading: 'Practice Problems',
                type: 'table',
                headers: ['Problem', 'Solution'],
                rows: [
                    ['$\\frac{2}{3} + \\frac{2}{3}$', '$\\frac{4}{3} = 1\\frac{1}{3}$'],
                    ['$\\frac{1}{4} + \\frac{1}{2}$', '$\\frac{1}{4} + \\frac{2}{4} = \\frac{3}{4}$'],
                    ['$2\\frac{1}{2}$ as improper', '$\\frac{5}{2}$'],
                    ['$\\frac{3}{5} × \\frac{2}{3}$', '$\\frac{6}{15} = \\frac{2}{5}$']
                ]
            }
        ],
        keyPoints: [
            'Numerator = top (parts we have), Denominator = bottom (total parts)',
            'Find common denominator to add/subtract fractions',
            'Multiply numerators together, denominators together',
            'Always simplify your answer'
        ]
    },
    'math-unit-5': {
        title: 'Decimals',
        subject: 'Fractions & Decimals',
        sections: [
            {
                heading: 'What is a Decimal?',
                type: 'text',
                content: 'A decimal is another way to write a fraction. The decimal point separates whole numbers from parts less than one.'
            },
            {
                heading: 'Decimal Place Values',
                type: 'diagram',
                diagramType: 'decimal-places',
                data: {
                    title: 'Place Value of 25.347',
                    positions: [
                        { label: 'Tens', value: '2', color: '#3b82f6' },
                        { label: 'Ones', value: '5', color: '#6366f1' },
                        { label: 'Point', value: '.', color: '#000000' },
                        { label: 'Tenths', value: '3', color: '#22c55e' },
                        { label: 'Hundredths', value: '4', color: '#f97316' },
                        { label: 'Thousandths', value: '7', color: '#ec4899' }
                    ]
                }
            },
            {
                heading: 'Reading Decimals',
                type: 'definition',
                definitions: [
                    { term: '0.5', definition: 'Read as "zero point five" or "five tenths"' },
                    { term: '3.25', definition: 'Read as "three point two five" or "three and twenty-five hundredths"' },
                    { term: '0.125', definition: 'Read as "zero point one two five" or "one hundred twenty-five thousandths"' }
                ]
            },
            {
                heading: 'Converting Fractions to Decimals',
                type: 'table',
                headers: ['Fraction', 'Division', 'Decimal'],
                rows: [
                    ['$\\frac{1}{2}$', '$1 ÷ 2$', '0.5'],
                    ['$\\frac{1}{4}$', '$1 ÷ 4$', '0.25'],
                    ['$\\frac{3}{4}$', '$3 ÷ 4$', '0.75'],
                    ['$\\frac{2}{5}$', '$2 ÷ 5$', '0.4'],
                    ['$\\frac{1}{8}$', '$1 ÷ 8$', '0.125']
                ]
            },
            {
                heading: 'Comparing Decimals',
                type: 'diagram',
                diagramType: 'number-line',
                data: {
                    title: 'Ordering 0.3, 0.35, and 0.5',
                    points: [
                        { value: 0.3, label: '0.3' },
                        { value: 0.35, label: '0.35' },
                        { value: 0.5, label: '0.5' }
                    ],
                    min: 0,
                    max: 1
                }
            },
            {
                heading: 'Comparing Decimals Method',
                type: 'steps',
                items: [
                    { step: '1', description: 'Make decimals have same number of places (add zeros)' },
                    { step: '2', description: 'Compare from left to right' },
                    { step: '3', description: 'Example: 0.3 vs 0.25 → 0.30 vs 0.25 → 0.30 > 0.25' }
                ]
            },
            {
                heading: 'Adding Decimals',
                type: 'text',
                content: 'Line up the decimal points, then add as normal.'
            },
            {
                heading: 'Adding Decimals Example',
                type: 'definition',
                definitions: [
                    { term: '$3.5 + 2.75$', definition: 'Line up: 3.50 + 2.75 = 6.25' },
                    { term: '$12.4 + 0.85$', definition: 'Line up: 12.40 + 0.85 = 13.25' },
                    { term: '$4 + 2.5 + 0.25$', definition: '4.00 + 2.50 + 0.25 = 6.75' }
                ]
            },
            {
                heading: 'Subtracting Decimals',
                type: 'definition',
                definitions: [
                    { term: '$5.8 - 2.3$', definition: '$= 3.5$' },
                    { term: '$10 - 3.75$', definition: '$= 10.00 - 3.75 = 6.25$' },
                    { term: '$7.25 - 4.8$', definition: '$= 7.25 - 4.80 = 2.45$' }
                ]
            },
            {
                heading: 'Practice Problems',
                type: 'table',
                headers: ['Problem', 'Answer'],
                rows: [
                    ['$0.6 + 0.7$', '1.3'],
                    ['$2.5 - 0.8$', '1.7'],
                    ['Convert $\\frac{3}{5}$ to decimal', '0.6'],
                    ['Order: 0.45, 0.5, 0.405', '0.405, 0.45, 0.5']
                ]
            }
        ],
        keyPoints: [
            'Align decimal points when adding or subtracting',
            'Divide numerator by denominator to convert fraction to decimal',
            'Add zeros to compare decimals with different places'
        ]
    },
    'math-unit-6': {
        title: 'Addition and Subtraction',
        subject: 'Basic Operations',
        sections: [
            {
                heading: 'Addition Method',
                type: 'text',
                content: 'Line up numbers by place value, add from right to left, carry when sum is 10 or more.'
            },
            {
                heading: 'Column Addition',
                type: 'diagram',
                diagramType: 'column-addition',
                data: {
                    title: 'Adding 2,547 + 1,836',
                    numbers: [2547, 1836],
                    result: 4383,
                    carries: ['1', '', '', '']
                }
            },
            {
                heading: 'Carrying Example',
                type: 'steps',
                items: [
                    { step: '1', description: 'Add ones: $7 + 6 = 13$. Write 3, carry 1.' },
                    { step: '2', description: 'Add tens: $4 + 3 + 1 = 8$. Write 8.' },
                    { step: '3', description: 'Add hundreds: $5 + 8 = 13$. Write 3, carry 1.' },
                    { step: '4', description: 'Add thousands: $2 + 1 + 1 = 4$. Write 4.' },
                    { step: '5', description: 'Answer: $4,383$' }
                ]
            },
            {
                heading: 'Subtraction Method',
                type: 'text',
                content: 'Line up by place value, subtract from right to left, borrow when top digit is smaller.'
            },
            {
                heading: 'Borrowing Example',
                type: 'steps',
                items: [
                    { step: '1', description: 'Subtract: $503 - 287$' },
                    { step: '2', description: 'Ones: $3 - 7$? Cannot! Borrow from tens.' },
                    { step: '3', description: 'But tens is 0! Borrow from hundreds instead.' },
                    { step: '4', description: '5 becomes 4, 0 becomes 10, then 10 becomes 9, 3 becomes 13' },
                    { step: '5', description: '$13 - 7 = 6$, $9 - 8 = 1$, $4 - 2 = 2$. Answer: 216' }
                ]
            },
            {
                heading: 'Word Problem Examples',
                type: 'list',
                items: [
                    { title: 'Adding', description: 'A shop sold 1,234 items on Monday and 2,156 on Tuesday. Total = $1,234 + 2,156 = 3,390$ items' },
                    { title: 'Subtracting', description: 'John had Le 5,000 and spent Le 3,750. Remaining = $5,000 - 3,750 =$ Le 1,250' }
                ]
            },
            {
                heading: 'Practice Problems',
                type: 'table',
                headers: ['Problem', 'Answer'],
                rows: [
                    ['$456 + 289$', '745'],
                    ['$1,234 + 5,678$', '6,912'],
                    ['$800 - 256$', '544'],
                    ['$5,000 - 1,234$', '3,766']
                ]
            }
        ],
        keyPoints: [
            'Align numbers by place value',
            'Work from right to left',
            'Carry when sum ≥ 10, borrow when needed'
        ]
    },
    'math-unit-7': {
        title: 'Multiplication and Division',
        subject: 'Basic Operations',
        sections: [
            {
                heading: 'Multiplication by 10, 100, 1000',
                type: 'diagram',
                diagramType: 'decimal-shift',
                data: {
                    title: 'Moving the Decimal Point',
                    direction: 'right',
                    examples: [
                        { original: '5', multiplier: '× 10', result: '50' },
                        { original: '5', multiplier: '× 100', result: '500' },
                        { original: '5', multiplier: '× 1000', result: '5000' }
                    ]
                }
            },
            {
                heading: 'Division by 10, 100, 1000',
                type: 'definition',
                definitions: [
                    { term: '$50 ÷ 10$', definition: '$= 5$ (decimal moves LEFT 1 place)' },
                    { term: '$500 ÷ 100$', definition: '$= 5$ (decimal moves LEFT 2 places)' },
                    { term: '$5000 ÷ 1000$', definition: '$= 5$ (decimal moves LEFT 3 places)' }
                ]
            },
            {
                heading: 'Long Multiplication',
                type: 'steps',
                items: [
                    { step: '1', description: 'To multiply $234 × 56$:' },
                    { step: '2', description: '$234 × 6 = 1,404$' },
                    { step: '3', description: '$234 × 50 = 11,700$' },
                    { step: '4', description: 'Add: $1,404 + 11,700 = 13,104$' }
                ]
            },
            {
                heading: 'Long Division',
                type: 'steps',
                items: [
                    { step: '1', description: 'To divide $756 ÷ 12$:' },
                    { step: '2', description: 'How many 12s in 75? 6 (6 × 12 = 72)' },
                    { step: '3', description: 'Remainder: 75 - 72 = 3, bring down 6 → 36' },
                    { step: '4', description: 'How many 12s in 36? 3 (3 × 12 = 36)' },
                    { step: '5', description: 'Answer: 63' }
                ]
            },
            {
                heading: 'Practice Problems',
                type: 'table',
                headers: ['Problem', 'Answer'],
                rows: [
                    ['$23 × 45$', '1,035'],
                    ['$156 × 12$', '1,872'],
                    ['$864 ÷ 12$', '72'],
                    ['$1,440 ÷ 36$', '40']
                ]
            }
        ],
        keyPoints: [
            '× 10/100/1000: move decimal RIGHT (add zeros)',
            '÷ 10/100/1000: move decimal LEFT',
            'Count the zeros to know how many places to move'
        ]
    },
    'math-unit-8': {
        title: 'Operations on Fractions',
        subject: 'Fractions & Decimals',
        sections: [
            {
                heading: 'Simplifying Fractions',
                type: 'text',
                content: 'Divide both numerator and denominator by their HCF to get the simplest form.'
            },
            {
                heading: 'Simplifying Examples',
                type: 'definition',
                definitions: [
                    { term: '$\\frac{12}{18}$', definition: '$= \\frac{12÷6}{18÷6} = \\frac{2}{3}$' },
                    { term: '$\\frac{20}{25}$', definition: '$= \\frac{20÷5}{25÷5} = \\frac{4}{5}$' },
                    { term: '$\\frac{36}{48}$', definition: '$= \\frac{36÷12}{48÷12} = \\frac{3}{4}$' }
                ]
            },
            {
                heading: 'Dividing Fractions - Keep, Change, Flip',
                type: 'diagram',
                diagramType: 'kcf-method',
                data: {
                    title: 'Keep, Change, Flip Method',
                    steps: [
                        { label: 'KEEP', description: 'Keep the first fraction as is' },
                        { label: 'CHANGE', description: 'Change ÷ to ×' },
                        { label: 'FLIP', description: 'Flip (invert) the second fraction' }
                    ]
                }
            },
            {
                heading: 'Division Examples',
                type: 'definition',
                definitions: [
                    { term: '$\\frac{3}{4} ÷ \\frac{1}{2}$', definition: '$= \\frac{3}{4} × \\frac{2}{1} = \\frac{6}{4} = 1\\frac{1}{2}$' },
                    { term: '$\\frac{5}{6} ÷ \\frac{2}{3}$', definition: '$= \\frac{5}{6} × \\frac{3}{2} = \\frac{15}{12} = 1\\frac{1}{4}$' }
                ]
            },
            {
                heading: 'Mixed Number Operations',
                type: 'steps',
                items: [
                    { step: '1', description: 'Convert mixed numbers to improper fractions' },
                    { step: '2', description: 'Perform the operation' },
                    { step: '3', description: 'Convert back to mixed number if needed' },
                    { step: '4', description: 'Example: $2\\frac{1}{2} × 1\\frac{1}{3} = \\frac{5}{2} × \\frac{4}{3} = \\frac{20}{6} = 3\\frac{1}{3}$' }
                ]
            },
            {
                heading: 'Practice Problems',
                type: 'table',
                headers: ['Problem', 'Answer'],
                rows: [
                    ['Simplify $\\frac{15}{20}$', '$\\frac{3}{4}$'],
                    ['$\\frac{2}{3} ÷ \\frac{4}{5}$', '$\\frac{5}{6}$'],
                    ['$1\\frac{1}{2} × 2\\frac{2}{3}$', '4'],
                    ['$3\\frac{1}{4} ÷ 1\\frac{1}{2}$', '$2\\frac{1}{6}$']
                ]
            }
        ],
        keyPoints: [
            'Simplify by dividing by HCF',
            'Keep, Change, Flip for division',
            'Convert mixed numbers before operating'
        ]
    },
    'math-unit-9': {
        title: 'Decimal Operations',
        subject: 'Fractions & Decimals',
        sections: [
            {
                heading: 'Adding Decimals',
                type: 'text',
                content: 'Line up decimal points, add zeros if needed, then add normally.'
            },
            {
                heading: 'Adding Decimals Visual',
                type: 'diagram',
                diagramType: 'decimal-addition',
                data: {
                    title: 'Adding 3.45 + 2.7',
                    numbers: ['3.45', '2.70'],
                    result: '6.15'
                }
            },
            {
                heading: 'Subtracting Decimals',
                type: 'definition',
                definitions: [
                    { term: '$8.5 - 3.25$', definition: '$= 8.50 - 3.25 = 5.25$' },
                    { term: '$10 - 2.75$', definition: '$= 10.00 - 2.75 = 7.25$' },
                    { term: '$15.2 - 8.46$', definition: '$= 15.20 - 8.46 = 6.74$' }
                ]
            },
            {
                heading: 'Comparing Decimals',
                type: 'steps',
                items: [
                    { step: '1', description: 'Add zeros to make same length' },
                    { step: '2', description: 'Compare digit by digit from left' },
                    { step: '3', description: 'Example: 0.7 vs 0.65 → 0.70 vs 0.65 → 0.70 > 0.65' }
                ]
            },
            {
                heading: 'Ordering Decimals',
                type: 'table',
                headers: ['Decimals', 'Smallest to Largest'],
                rows: [
                    ['0.5, 0.45, 0.55', '0.45, 0.5, 0.55'],
                    ['1.2, 1.02, 1.22', '1.02, 1.2, 1.22'],
                    ['0.3, 0.33, 0.303', '0.3, 0.303, 0.33']
                ]
            },
            {
                heading: 'Practice Problems',
                type: 'table',
                headers: ['Problem', 'Answer'],
                rows: [
                    ['$4.56 + 2.8$', '7.36'],
                    ['$9.4 - 3.75$', '5.65'],
                    ['Order: 2.5, 2.05, 2.55', '2.05, 2.5, 2.55'],
                    ['$12.50 - 7.85$', '4.65']
                ]
            }
        ],
        keyPoints: [
            'Always align decimal points',
            'Add zeros to fill empty places',
            'Borrow and carry as with whole numbers'
        ]
    },
    'math-unit-10': {
        title: 'Area and Perimeter',
        subject: 'Measurement',
        sections: [
            {
                heading: 'What is Perimeter?',
                type: 'text',
                content: 'Perimeter is the distance AROUND a shape - add up all the sides.'
            },
            {
                heading: 'Rectangle Diagram',
                type: 'diagram',
                diagramType: 'rectangle',
                data: {
                    title: 'Rectangle: Length = 8cm, Width = 5cm',
                    length: 8,
                    width: 5,
                    showPerimeter: true,
                    showArea: true
                }
            },
            {
                heading: 'Perimeter Formulas',
                type: 'definition',
                definitions: [
                    { term: 'Rectangle', definition: '$P = 2 × (L + W)$ or $P = 2L + 2W$' },
                    { term: 'Square', definition: '$P = 4 × s$ (s = side length)' },
                    { term: 'Triangle', definition: '$P = a + b + c$ (sum of all sides)' }
                ]
            },
            {
                heading: 'Perimeter Example',
                type: 'steps',
                items: [
                    { step: '1', description: 'Rectangle with length 8cm and width 5cm' },
                    { step: '2', description: '$P = 2 × (8 + 5)$' },
                    { step: '3', description: '$P = 2 × 13 = 26$ cm' }
                ]
            },
            {
                heading: 'What is Area?',
                type: 'text',
                content: 'Area is the space INSIDE a shape - measured in square units (cm², m²).'
            },
            {
                heading: 'Area Formulas',
                type: 'definition',
                definitions: [
                    { term: 'Rectangle', definition: '$A = L × W$' },
                    { term: 'Square', definition: '$A = s × s = s²$' },
                    { term: 'Triangle', definition: '$A = \\frac{1}{2} × b × h$' }
                ]
            },
            {
                heading: 'Triangle Area Diagram',
                type: 'diagram',
                diagramType: 'triangle-area',
                data: {
                    title: 'Triangle: Base = 6cm, Height = 4cm',
                    base: 6,
                    height: 4,
                    area: 12
                }
            },
            {
                heading: 'Area Examples',
                type: 'definition',
                definitions: [
                    { term: 'Rectangle 8cm × 5cm', definition: '$A = 8 × 5 = 40$ cm²' },
                    { term: 'Square 6cm sides', definition: '$A = 6 × 6 = 36$ cm²' },
                    { term: 'Triangle b=10cm, h=6cm', definition: '$A = \\frac{1}{2} × 10 × 6 = 30$ cm²' }
                ]
            },
            {
                heading: 'Compound Shapes',
                type: 'text',
                content: 'For compound shapes, split into rectangles/triangles, calculate each area, then add.'
            },
            {
                heading: 'Practice Problems',
                type: 'table',
                headers: ['Shape', 'Perimeter', 'Area'],
                rows: [
                    ['Rectangle 12cm × 7cm', '38 cm', '84 cm²'],
                    ['Square 9cm', '36 cm', '81 cm²'],
                    ['Triangle 5,7,8 cm sides; h=4cm, b=8cm', '20 cm', '16 cm²']
                ]
            }
        ],
        keyPoints: [
            'Perimeter = distance around (add all sides)',
            'Area = space inside (square units)',
            'Rectangle: $A = L × W$, $P = 2(L + W)$',
            'Triangle: $A = \\frac{1}{2} × base × height$'
        ]
    }
};

// Combined getter function
export const getMathNotesContent = (unitId) => {
    // Check Part 1 (Units 1-10)
    if (mathNotesContent[unitId]) {
        return mathNotesContent[unitId];
    }
    // Check Part 2 (Units 11-20)
    const part2 = getMathNotesContentPart2(unitId);
    if (part2) return part2;
    // Check Part 3 (Units 21-30)
    const part3 = getMathNotesContentPart3(unitId);
    if (part3) return part3;
    return null;
};
