// Quantitative Aptitude Quiz Questions – NPSE MBSSE Class 6 Syllabus
// 150 MCQs across Codes & Patterns, Number Relations, Number Series,
// Shape Patterns, Arithmetic Operations, Squares & Roots, Special Topics

const quantitativeQuizQuestions = [

    // ================================================================
    //  CODES & PATTERNS (25 Questions — 5 units)
    // ================================================================

    // ===== QA Unit 1: Letter and Number Code Representation =====
    {
        id: 'qa-q1', unit: 'qa-unit-1', subject: 'Codes & Patterns',
        topic: 'Letter and Number Code Representation', difficulty: 'easy',
        question: 'If A = 1, B = 2, C = 3, what is the value of A + B + C?',
        options: [
            { label: 'A', text: '3' }, { label: 'B', text: '5' },
            { label: 'C', text: '6' }, { label: 'D', text: '7' },
            { label: 'E', text: '9' }
        ],
        correctOption: 'C',
        explanation: 'A = 1, B = 2, C = 3. So A + B + C = 1 + 2 + 3 = 6.'
    },
    {
        id: 'qa-q2', unit: 'qa-unit-1', subject: 'Codes & Patterns',
        topic: 'Letter and Number Code Representation', difficulty: 'easy',
        question: 'If A = 2, B = 4, C = 6, what is the value of D?',
        options: [
            { label: 'A', text: '7' }, { label: 'B', text: '8' },
            { label: 'C', text: '9' }, { label: 'D', text: '10' },
            { label: 'E', text: '12' }
        ],
        correctOption: 'B',
        explanation: 'The pattern is: each letter equals its position × 2. D is the 4th letter, so D = 4 × 2 = 8.'
    },
    {
        id: 'qa-q3', unit: 'qa-unit-1', subject: 'Codes & Patterns',
        topic: 'Letter and Number Code Representation', difficulty: 'medium',
        question: 'If △ = 5 and □ = 3, what is △ + □ + △?',
        options: [
            { label: 'A', text: '11' }, { label: 'B', text: '13' },
            { label: 'C', text: '15' }, { label: 'D', text: '8' },
            { label: 'E', text: '10' }
        ],
        correctOption: 'B',
        explanation: '△ + □ + △ = 5 + 3 + 5 = 13.'
    },
    {
        id: 'qa-q4', unit: 'qa-unit-1', subject: 'Codes & Patterns',
        topic: 'Letter and Number Code Representation', difficulty: 'medium',
        question: 'If ★ = 7 and ● = 4, find ★ × ● − ★.',
        options: [
            { label: 'A', text: '14' }, { label: 'B', text: '21' },
            { label: 'C', text: '28' }, { label: 'D', text: '24' },
            { label: 'E', text: '11' }
        ],
        correctOption: 'B',
        explanation: '★ × ● − ★ = 7 × 4 − 7 = 28 − 7 = 21.'
    },
    {
        id: 'qa-q5', unit: 'qa-unit-1', subject: 'Codes & Patterns',
        topic: 'Letter and Number Code Representation', difficulty: 'hard',
        question: 'If A = 1, B = 2, ..., Z = 26, what is the value of CAT? (C + A + T)',
        options: [
            { label: 'A', text: '22' }, { label: 'B', text: '24' },
            { label: 'C', text: '26' }, { label: 'D', text: '28' },
            { label: 'E', text: '30' }
        ],
        correctOption: 'B',
        explanation: 'C = 3, A = 1, T = 20. So C + A + T = 3 + 1 + 20 = 24.'
    },

    // ===== QA Unit 2: Operation on Codes =====
    {
        id: 'qa-q6', unit: 'qa-unit-2', subject: 'Codes & Patterns',
        topic: 'Operation on Codes', difficulty: 'easy',
        question: 'If ♣ = 6 and ♦ = 2, what is ♣ ÷ ♦?',
        options: [
            { label: 'A', text: '2' }, { label: 'B', text: '3' },
            { label: 'C', text: '4' }, { label: 'D', text: '8' },
            { label: 'E', text: '12' }
        ],
        correctOption: 'B',
        explanation: '♣ ÷ ♦ = 6 ÷ 2 = 3.'
    },
    {
        id: 'qa-q7', unit: 'qa-unit-2', subject: 'Codes & Patterns',
        topic: 'Operation on Codes', difficulty: 'medium',
        question: 'If P = 8, Q = 3, R = 5, find (P − Q) × R.',
        options: [
            { label: 'A', text: '15' }, { label: 'B', text: '20' },
            { label: 'C', text: '25' }, { label: 'D', text: '30' },
            { label: 'E', text: '40' }
        ],
        correctOption: 'C',
        explanation: '(P − Q) × R = (8 − 3) × 5 = 5 × 5 = 25.'
    },
    {
        id: 'qa-q8', unit: 'qa-unit-2', subject: 'Codes & Patterns',
        topic: 'Operation on Codes', difficulty: 'medium',
        question: 'If X ⊕ Y means X + Y + 1, what is 4 ⊕ 6?',
        options: [
            { label: 'A', text: '10' }, { label: 'B', text: '11' },
            { label: 'C', text: '12' }, { label: 'D', text: '13' },
            { label: 'E', text: '24' }
        ],
        correctOption: 'B',
        explanation: '4 ⊕ 6 = 4 + 6 + 1 = 11.'
    },
    {
        id: 'qa-q9', unit: 'qa-unit-2', subject: 'Codes & Patterns',
        topic: 'Operation on Codes', difficulty: 'hard',
        question: 'If A ★ B means (A × B) − A, what is 5 ★ 3?',
        options: [
            { label: 'A', text: '8' }, { label: 'B', text: '10' },
            { label: 'C', text: '12' }, { label: 'D', text: '15' },
            { label: 'E', text: '20' }
        ],
        correctOption: 'B',
        explanation: '5 ★ 3 = (5 × 3) − 5 = 15 − 5 = 10.'
    },
    {
        id: 'qa-q10', unit: 'qa-unit-2', subject: 'Codes & Patterns',
        topic: 'Operation on Codes', difficulty: 'hard',
        question: 'If a ◆ b means (a + b) ÷ 2, what is 10 ◆ 14?',
        options: [
            { label: 'A', text: '10' }, { label: 'B', text: '12' },
            { label: 'C', text: '14' }, { label: 'D', text: '24' },
            { label: 'E', text: '7' }
        ],
        correctOption: 'B',
        explanation: '10 ◆ 14 = (10 + 14) ÷ 2 = 24 ÷ 2 = 12.'
    },

    // ===== QA Unit 3: Decoding Patterns =====
    {
        id: 'qa-q11', unit: 'qa-unit-3', subject: 'Codes & Patterns',
        topic: 'Decoding Patterns', difficulty: 'easy',
        question: 'What is the next number in the pattern: 2, 4, 6, 8, __?',
        options: [
            { label: 'A', text: '9' }, { label: 'B', text: '10' },
            { label: 'C', text: '11' }, { label: 'D', text: '12' },
            { label: 'E', text: '14' }
        ],
        correctOption: 'B',
        explanation: 'The pattern adds 2 each time: 2, 4, 6, 8, 10.'
    },
    {
        id: 'qa-q12', unit: 'qa-unit-3', subject: 'Codes & Patterns',
        topic: 'Decoding Patterns', difficulty: 'easy',
        question: 'What is the next number: 5, 10, 15, 20, __?',
        options: [
            { label: 'A', text: '22' }, { label: 'B', text: '24' },
            { label: 'C', text: '25' }, { label: 'D', text: '30' },
            { label: 'E', text: '35' }
        ],
        correctOption: 'C',
        explanation: 'The pattern adds 5 each time: 5, 10, 15, 20, 25.'
    },
    {
        id: 'qa-q13', unit: 'qa-unit-3', subject: 'Codes & Patterns',
        topic: 'Decoding Patterns', difficulty: 'medium',
        question: 'Find the missing number: 3, 6, 12, 24, __',
        options: [
            { label: 'A', text: '30' }, { label: 'B', text: '36' },
            { label: 'C', text: '48' }, { label: 'D', text: '72' },
            { label: 'E', text: '96' }
        ],
        correctOption: 'C',
        explanation: 'Each number doubles: 3 × 2 = 6, 6 × 2 = 12, 12 × 2 = 24, 24 × 2 = 48.'
    },
    {
        id: 'qa-q14', unit: 'qa-unit-3', subject: 'Codes & Patterns',
        topic: 'Decoding Patterns', difficulty: 'medium',
        question: 'What is the next number: 1, 4, 9, 16, __?',
        options: [
            { label: 'A', text: '20' }, { label: 'B', text: '24' },
            { label: 'C', text: '25' }, { label: 'D', text: '32' },
            { label: 'E', text: '36' }
        ],
        correctOption: 'C',
        explanation: 'These are square numbers: 1², 2², 3², 4², 5² = 1, 4, 9, 16, 25.'
    },
    {
        id: 'qa-q15', unit: 'qa-unit-3', subject: 'Codes & Patterns',
        topic: 'Decoding Patterns', difficulty: 'hard',
        question: 'Find the missing number: 2, 6, 18, 54, __',
        options: [
            { label: 'A', text: '72' }, { label: 'B', text: '108' },
            { label: 'C', text: '162' }, { label: 'D', text: '216' },
            { label: 'E', text: '270' }
        ],
        correctOption: 'C',
        explanation: 'Each number is multiplied by 3: 2 × 3 = 6, 6 × 3 = 18, 18 × 3 = 54, 54 × 3 = 162.'
    },

    // ===== QA Unit 4: Pattern Recognition =====
    {
        id: 'qa-q16', unit: 'qa-unit-4', subject: 'Codes & Patterns',
        topic: 'Pattern Recognition', difficulty: 'easy',
        question: 'What comes next: 1, 3, 5, 7, __?',
        options: [
            { label: 'A', text: '8' }, { label: 'B', text: '9' },
            { label: 'C', text: '10' }, { label: 'D', text: '11' },
            { label: 'E', text: '12' }
        ],
        correctOption: 'B',
        explanation: 'Odd numbers: add 2 each time. 7 + 2 = 9.'
    },
    {
        id: 'qa-q17', unit: 'qa-unit-4', subject: 'Codes & Patterns',
        topic: 'Pattern Recognition', difficulty: 'medium',
        question: 'Find the pattern: 1, 2, 4, 7, 11, __',
        options: [
            { label: 'A', text: '14' }, { label: 'B', text: '15' },
            { label: 'C', text: '16' }, { label: 'D', text: '18' },
            { label: 'E', text: '22' }
        ],
        correctOption: 'C',
        explanation: 'The differences increase by 1: +1, +2, +3, +4, +5. So 11 + 5 = 16.'
    },
    {
        id: 'qa-q18', unit: 'qa-unit-4', subject: 'Codes & Patterns',
        topic: 'Pattern Recognition', difficulty: 'medium',
        question: 'What comes next: 100, 90, 80, 70, __?',
        options: [
            { label: 'A', text: '50' }, { label: 'B', text: '55' },
            { label: 'C', text: '60' }, { label: 'D', text: '65' },
            { label: 'E', text: '75' }
        ],
        correctOption: 'C',
        explanation: 'The pattern subtracts 10 each time: 100, 90, 80, 70, 60.'
    },
    {
        id: 'qa-q19', unit: 'qa-unit-4', subject: 'Codes & Patterns',
        topic: 'Pattern Recognition', difficulty: 'hard',
        question: 'Find the next number: 1, 1, 2, 3, 5, 8, __',
        options: [
            { label: 'A', text: '10' }, { label: 'B', text: '11' },
            { label: 'C', text: '12' }, { label: 'D', text: '13' },
            { label: 'E', text: '15' }
        ],
        correctOption: 'D',
        explanation: 'Fibonacci sequence: each number is the sum of the two before it. 5 + 8 = 13.'
    },

    // ===== QA Unit 22: Values and Products =====
    {
        id: 'qa-q20', unit: 'qa-unit-22', subject: 'Codes & Patterns',
        topic: 'Values and Products', difficulty: 'easy',
        question: 'If ○ = 3, what is ○ × ○?',
        options: [
            { label: 'A', text: '6' }, { label: 'B', text: '9' },
            { label: 'C', text: '12' }, { label: 'D', text: '15' },
            { label: 'E', text: '27' }
        ],
        correctOption: 'B',
        explanation: '○ × ○ = 3 × 3 = 9.'
    },
    {
        id: 'qa-q21', unit: 'qa-unit-22', subject: 'Codes & Patterns',
        topic: 'Values and Products', difficulty: 'medium',
        question: 'In a table: when input is 2, output is 6; when input is 3, output is 9; when input is 5, output is __?',
        options: [
            { label: 'A', text: '10' }, { label: 'B', text: '12' },
            { label: 'C', text: '15' }, { label: 'D', text: '20' },
            { label: 'E', text: '25' }
        ],
        correctOption: 'C',
        explanation: 'The rule is: output = input × 3. So 5 × 3 = 15.'
    },
    {
        id: 'qa-q22', unit: 'qa-unit-22', subject: 'Codes & Patterns',
        topic: 'Values and Products', difficulty: 'medium',
        question: 'If ◆ × ◆ = 16, what is the value of ◆?',
        options: [
            { label: 'A', text: '2' }, { label: 'B', text: '3' },
            { label: 'C', text: '4' }, { label: 'D', text: '8' },
            { label: 'E', text: '16' }
        ],
        correctOption: 'C',
        explanation: '◆ × ◆ = 16, so ◆ = 4 because 4 × 4 = 16.'
    },
    {
        id: 'qa-q23', unit: 'qa-unit-22', subject: 'Codes & Patterns',
        topic: 'Values and Products', difficulty: 'hard',
        question: 'In a pattern table: (2, 5) → 7, (3, 4) → 7, (6, 1) → 7. The rule is:',
        options: [
            { label: 'A', text: 'Multiply the two numbers' }, { label: 'B', text: 'Add the two numbers' },
            { label: 'C', text: 'Subtract the two numbers' }, { label: 'D', text: 'Divide the two numbers' },
            { label: 'E', text: 'Square the first number' }
        ],
        correctOption: 'B',
        explanation: '2 + 5 = 7, 3 + 4 = 7, 6 + 1 = 7. The rule is addition.'
    },
    {
        id: 'qa-q24', unit: 'qa-unit-22', subject: 'Codes & Patterns',
        topic: 'Values and Products', difficulty: 'hard',
        question: 'In a pattern: (2, 3) → 8, (4, 1) → 9, (3, 2) → 8. The rule is: first number + (first number × second number) − second number. What is (5, 2)?',
        options: [
            { label: 'A', text: '10' }, { label: 'B', text: '12' },
            { label: 'C', text: '13' }, { label: 'D', text: '15' },
            { label: 'E', text: '17' }
        ],
        correctOption: 'C',
        explanation: '5 + (5 × 2) − 2 = 5 + 10 − 2 = 13.'
    },
    {
        id: 'qa-q25', unit: 'qa-unit-22', subject: 'Codes & Patterns',
        topic: 'Values and Products', difficulty: 'medium',
        question: 'If ▲ + ▲ + ▲ = 15, what is ▲?',
        options: [
            { label: 'A', text: '3' }, { label: 'B', text: '4' },
            { label: 'C', text: '5' }, { label: 'D', text: '6' },
            { label: 'E', text: '7' }
        ],
        correctOption: 'C',
        explanation: '▲ + ▲ + ▲ = 3 × ▲ = 15, so ▲ = 15 ÷ 3 = 5.'
    },

    // ================================================================
    //  NUMBER RELATIONS (25 Questions — 5 units)
    // ================================================================

    // ===== QA Unit 5: Relations Involving Addition =====
    {
        id: 'qa-q26', unit: 'qa-unit-5', subject: 'Number Relations',
        topic: 'Relations Involving Addition', difficulty: 'easy',
        question: 'If the rule is "add 3", and the input is 7, what is the output?',
        options: [
            { label: 'A', text: '3' }, { label: 'B', text: '4' },
            { label: 'C', text: '10' }, { label: 'D', text: '21' },
            { label: 'E', text: '37' }
        ],
        correctOption: 'C',
        explanation: '7 + 3 = 10. The rule adds 3 to the input.'
    },
    {
        id: 'qa-q27', unit: 'qa-unit-5', subject: 'Number Relations',
        topic: 'Relations Involving Addition', difficulty: 'easy',
        question: 'Look at this pattern: (1, 4), (2, 5), (3, 6), (4, ?). What is ?',
        options: [
            { label: 'A', text: '5' }, { label: 'B', text: '6' },
            { label: 'C', text: '7' }, { label: 'D', text: '8' },
            { label: 'E', text: '10' }
        ],
        correctOption: 'C',
        explanation: 'The second number is always first + 3. So 4 + 3 = 7.'
    },
    {
        id: 'qa-q28', unit: 'qa-unit-5', subject: 'Number Relations',
        topic: 'Relations Involving Addition', difficulty: 'medium',
        question: 'The pairs follow a rule: (5, 12), (8, 15), (3, 10). The rule is:',
        options: [
            { label: 'A', text: 'Add 5' }, { label: 'B', text: 'Add 6' },
            { label: 'C', text: 'Add 7' }, { label: 'D', text: 'Add 8' },
            { label: 'E', text: 'Multiply by 2' }
        ],
        correctOption: 'C',
        explanation: '5 + 7 = 12, 8 + 7 = 15, 3 + 7 = 10. The rule is add 7.'
    },
    {
        id: 'qa-q29', unit: 'qa-unit-5', subject: 'Number Relations',
        topic: 'Relations Involving Addition', difficulty: 'medium',
        question: 'Find the missing number: (10, 15), (20, 25), (30, ?)',
        options: [
            { label: 'A', text: '33' }, { label: 'B', text: '35' },
            { label: 'C', text: '40' }, { label: 'D', text: '45' },
            { label: 'E', text: '50' }
        ],
        correctOption: 'B',
        explanation: 'The rule is: second = first + 5. So 30 + 5 = 35.'
    },
    {
        id: 'qa-q30', unit: 'qa-unit-5', subject: 'Number Relations',
        topic: 'Relations Involving Addition', difficulty: 'hard',
        question: 'If X + 8 = Y, and X = 15, what is Y + X?',
        options: [
            { label: 'A', text: '23' }, { label: 'B', text: '30' },
            { label: 'C', text: '38' }, { label: 'D', text: '46' },
            { label: 'E', text: '53' }
        ],
        correctOption: 'C',
        explanation: 'Y = X + 8 = 15 + 8 = 23. Y + X = 23 + 15 = 38.'
    },

    // ===== QA Unit 6: Relations Involving Subtraction =====
    {
        id: 'qa-q31', unit: 'qa-unit-6', subject: 'Number Relations',
        topic: 'Relations Involving Subtraction', difficulty: 'easy',
        question: 'If the rule is "subtract 4", and the input is 12, what is the output?',
        options: [
            { label: 'A', text: '4' }, { label: 'B', text: '6' },
            { label: 'C', text: '8' }, { label: 'D', text: '16' },
            { label: 'E', text: '48' }
        ],
        correctOption: 'C',
        explanation: '12 − 4 = 8.'
    },
    {
        id: 'qa-q32', unit: 'qa-unit-6', subject: 'Number Relations',
        topic: 'Relations Involving Subtraction', difficulty: 'easy',
        question: 'Pattern: (10, 6), (15, 11), (20, 16). The rule is:',
        options: [
            { label: 'A', text: 'Subtract 3' }, { label: 'B', text: 'Subtract 4' },
            { label: 'C', text: 'Subtract 5' }, { label: 'D', text: 'Subtract 6' },
            { label: 'E', text: 'Divide by 2' }
        ],
        correctOption: 'B',
        explanation: '10 − 4 = 6, 15 − 4 = 11, 20 − 4 = 16. The rule is subtract 4.'
    },
    {
        id: 'qa-q33', unit: 'qa-unit-6', subject: 'Number Relations',
        topic: 'Relations Involving Subtraction', difficulty: 'medium',
        question: 'Find the missing number: (25, 18), (30, 23), (40, ?)',
        options: [
            { label: 'A', text: '30' }, { label: 'B', text: '32' },
            { label: 'C', text: '33' }, { label: 'D', text: '35' },
            { label: 'E', text: '47' }
        ],
        correctOption: 'C',
        explanation: 'The rule is: second = first − 7. So 40 − 7 = 33.'
    },
    {
        id: 'qa-q34', unit: 'qa-unit-6', subject: 'Number Relations',
        topic: 'Relations Involving Subtraction', difficulty: 'medium',
        question: 'If Y = X − 9, and Y = 6, what is X?',
        options: [
            { label: 'A', text: '3' }, { label: 'B', text: '12' },
            { label: 'C', text: '15' }, { label: 'D', text: '54' },
            { label: 'E', text: '96' }
        ],
        correctOption: 'C',
        explanation: 'Y = X − 9, so 6 = X − 9. Therefore X = 6 + 9 = 15.'
    },
    {
        id: 'qa-q35', unit: 'qa-unit-6', subject: 'Number Relations',
        topic: 'Relations Involving Subtraction', difficulty: 'hard',
        question: 'In the pattern: (50, 35), (38, 23), (46, ?), the rule is subtract 15. What is ?',
        options: [
            { label: 'A', text: '21' }, { label: 'B', text: '26' },
            { label: 'C', text: '31' }, { label: 'D', text: '36' },
            { label: 'E', text: '61' }
        ],
        correctOption: 'C',
        explanation: '46 − 15 = 31.'
    },

    // ===== QA Unit 7: Relations Involving Multiplication =====
    {
        id: 'qa-q36', unit: 'qa-unit-7', subject: 'Number Relations',
        topic: 'Relations Involving Multiplication', difficulty: 'easy',
        question: 'If the rule is "multiply by 2", and the input is 6, what is the output?',
        options: [
            { label: 'A', text: '8' }, { label: 'B', text: '10' },
            { label: 'C', text: '12' }, { label: 'D', text: '14' },
            { label: 'E', text: '36' }
        ],
        correctOption: 'C',
        explanation: '6 × 2 = 12.'
    },
    {
        id: 'qa-q37', unit: 'qa-unit-7', subject: 'Number Relations',
        topic: 'Relations Involving Multiplication', difficulty: 'easy',
        question: 'Pattern: (2, 8), (3, 12), (5, 20). The rule is:',
        options: [
            { label: 'A', text: 'Multiply by 2' }, { label: 'B', text: 'Multiply by 3' },
            { label: 'C', text: 'Multiply by 4' }, { label: 'D', text: 'Add 6' },
            { label: 'E', text: 'Add 10' }
        ],
        correctOption: 'C',
        explanation: '2 × 4 = 8, 3 × 4 = 12, 5 × 4 = 20. The rule is multiply by 4.'
    },
    {
        id: 'qa-q38', unit: 'qa-unit-7', subject: 'Number Relations',
        topic: 'Relations Involving Multiplication', difficulty: 'medium',
        question: 'Find the missing number: (4, 12), (7, 21), (9, ?)',
        options: [
            { label: 'A', text: '18' }, { label: 'B', text: '21' },
            { label: 'C', text: '24' }, { label: 'D', text: '27' },
            { label: 'E', text: '36' }
        ],
        correctOption: 'D',
        explanation: 'The rule is: second = first × 3. So 9 × 3 = 27.'
    },
    {
        id: 'qa-q39', unit: 'qa-unit-7', subject: 'Number Relations',
        topic: 'Relations Involving Multiplication', difficulty: 'hard',
        question: 'If Y = X × 5, and Y = 45, what is X?',
        options: [
            { label: 'A', text: '5' }, { label: 'B', text: '7' },
            { label: 'C', text: '8' }, { label: 'D', text: '9' },
            { label: 'E', text: '40' }
        ],
        correctOption: 'D',
        explanation: 'Y = X × 5, so 45 = X × 5. Therefore X = 45 ÷ 5 = 9.'
    },
    {
        id: 'qa-q40', unit: 'qa-unit-7', subject: 'Number Relations',
        topic: 'Relations Involving Multiplication', difficulty: 'hard',
        question: 'In the pattern: (3, 18), (5, 50), (4, 32). The rule is:',
        options: [
            { label: 'A', text: 'X × 6' }, { label: 'B', text: 'X × X × 2' },
            { label: 'C', text: 'X + 15' }, { label: 'D', text: 'X × 5 + 3' },
            { label: 'E', text: 'X × X + X' }
        ],
        correctOption: 'B',
        explanation: '3 × 3 × 2 = 18, 5 × 5 × 2 = 50, 4 × 4 × 2 = 32. Rule = X² × 2.'
    },

    // ===== QA Unit 8: Relations Involving Division =====
    {
        id: 'qa-q41', unit: 'qa-unit-8', subject: 'Number Relations',
        topic: 'Relations Involving Division', difficulty: 'easy',
        question: 'If the rule is "divide by 2", and the input is 18, what is the output?',
        options: [
            { label: 'A', text: '6' }, { label: 'B', text: '8' },
            { label: 'C', text: '9' }, { label: 'D', text: '16' },
            { label: 'E', text: '36' }
        ],
        correctOption: 'C',
        explanation: '18 ÷ 2 = 9.'
    },
    {
        id: 'qa-q42', unit: 'qa-unit-8', subject: 'Number Relations',
        topic: 'Relations Involving Division', difficulty: 'easy',
        question: 'Pattern: (12, 4), (18, 6), (24, 8). The rule is:',
        options: [
            { label: 'A', text: 'Divide by 2' }, { label: 'B', text: 'Divide by 3' },
            { label: 'C', text: 'Divide by 4' }, { label: 'D', text: 'Subtract 8' },
            { label: 'E', text: 'Subtract 10' }
        ],
        correctOption: 'B',
        explanation: '12 ÷ 3 = 4, 18 ÷ 3 = 6, 24 ÷ 3 = 8. The rule is divide by 3.'
    },
    {
        id: 'qa-q43', unit: 'qa-unit-8', subject: 'Number Relations',
        topic: 'Relations Involving Division', difficulty: 'medium',
        question: 'Find the missing number: (20, 4), (35, 7), (50, ?)',
        options: [
            { label: 'A', text: '5' }, { label: 'B', text: '8' },
            { label: 'C', text: '10' }, { label: 'D', text: '25' },
            { label: 'E', text: '45' }
        ],
        correctOption: 'C',
        explanation: 'The rule is: second = first ÷ 5. So 50 ÷ 5 = 10.'
    },
    {
        id: 'qa-q44', unit: 'qa-unit-8', subject: 'Number Relations',
        topic: 'Relations Involving Division', difficulty: 'medium',
        question: 'If Y = X ÷ 4, and X = 36, what is Y?',
        options: [
            { label: 'A', text: '6' }, { label: 'B', text: '8' },
            { label: 'C', text: '9' }, { label: 'D', text: '12' },
            { label: 'E', text: '32' }
        ],
        correctOption: 'C',
        explanation: 'Y = 36 ÷ 4 = 9.'
    },
    {
        id: 'qa-q45', unit: 'qa-unit-8', subject: 'Number Relations',
        topic: 'Relations Involving Division', difficulty: 'hard',
        question: 'If Y = X ÷ 6, and Y = 7, what is X?',
        options: [
            { label: 'A', text: '1' }, { label: 'B', text: '13' },
            { label: 'C', text: '36' }, { label: 'D', text: '42' },
            { label: 'E', text: '48' }
        ],
        correctOption: 'D',
        explanation: 'Y = X ÷ 6, so 7 = X ÷ 6. Therefore X = 7 × 6 = 42.'
    },

    // ===== QA Unit 9: Relations Involving Four Operations =====
    {
        id: 'qa-q46', unit: 'qa-unit-9', subject: 'Number Relations',
        topic: 'Relations Involving Four Operations', difficulty: 'easy',
        question: 'Pattern: (3, 7), (5, 11), (6, 13). The rule is:',
        options: [
            { label: 'A', text: 'X + 3' }, { label: 'B', text: 'X × 2 + 1' },
            { label: 'C', text: 'X + 4' }, { label: 'D', text: 'X × 2 − 1' },
            { label: 'E', text: 'X × 3' }
        ],
        correctOption: 'B',
        explanation: '3 × 2 + 1 = 7, 5 × 2 + 1 = 11, 6 × 2 + 1 = 13. Rule = X × 2 + 1.'
    },
    {
        id: 'qa-q47', unit: 'qa-unit-9', subject: 'Number Relations',
        topic: 'Relations Involving Four Operations', difficulty: 'medium',
        question: 'If Y = X × 3 − 2, and X = 4, what is Y?',
        options: [
            { label: 'A', text: '8' }, { label: 'B', text: '10' },
            { label: 'C', text: '12' }, { label: 'D', text: '14' },
            { label: 'E', text: '6' }
        ],
        correctOption: 'B',
        explanation: 'Y = 4 × 3 − 2 = 12 − 2 = 10.'
    },
    {
        id: 'qa-q48', unit: 'qa-unit-9', subject: 'Number Relations',
        topic: 'Relations Involving Four Operations', difficulty: 'medium',
        question: 'Pattern: (2, 5), (4, 9), (6, 13). What is the output for input 8?',
        options: [
            { label: 'A', text: '15' }, { label: 'B', text: '16' },
            { label: 'C', text: '17' }, { label: 'D', text: '19' },
            { label: 'E', text: '21' }
        ],
        correctOption: 'C',
        explanation: 'Rule: Y = X × 2 + 1. So 8 × 2 + 1 = 17.'
    },
    {
        id: 'qa-q49', unit: 'qa-unit-9', subject: 'Number Relations',
        topic: 'Relations Involving Four Operations', difficulty: 'hard',
        question: 'Pattern: (1, 2), (2, 6), (3, 12), (4, 20). The rule is:',
        options: [
            { label: 'A', text: 'X × (X + 1)' }, { label: 'B', text: 'X × X + 1' },
            { label: 'C', text: 'X × 2' }, { label: 'D', text: 'X + X²' },
            { label: 'E', text: 'X × 3 − 1' }
        ],
        correctOption: 'A',
        explanation: '1 × 2 = 2, 2 × 3 = 6, 3 × 4 = 12, 4 × 5 = 20. Rule = X × (X + 1).'
    },
    {
        id: 'qa-q50', unit: 'qa-unit-9', subject: 'Number Relations',
        topic: 'Relations Involving Four Operations', difficulty: 'hard',
        question: 'If Y = (X + 3) × 2, and Y = 20, what is X?',
        options: [
            { label: 'A', text: '5' }, { label: 'B', text: '7' },
            { label: 'C', text: '8' }, { label: 'D', text: '10' },
            { label: 'E', text: '17' }
        ],
        correctOption: 'B',
        explanation: '(X + 3) × 2 = 20, so X + 3 = 10, therefore X = 7.'
    },

    // ================================================================
    //  NUMBER SERIES (20 Questions — 3 units)
    // ================================================================

    // ===== QA Unit 10: Number Series Basics =====
    {
        id: 'qa-q51', unit: 'qa-unit-10', subject: 'Number Series',
        topic: 'Number Series Basics', difficulty: 'easy',
        question: 'What comes next: 3, 6, 9, 12, __?',
        options: [
            { label: 'A', text: '13' }, { label: 'B', text: '14' },
            { label: 'C', text: '15' }, { label: 'D', text: '16' },
            { label: 'E', text: '18' }
        ],
        correctOption: 'C',
        explanation: 'Adding 3 each time: 3, 6, 9, 12, 15.'
    },
    {
        id: 'qa-q52', unit: 'qa-unit-10', subject: 'Number Series',
        topic: 'Number Series Basics', difficulty: 'easy',
        question: 'Find the next number: 10, 20, 30, 40, __',
        options: [
            { label: 'A', text: '45' }, { label: 'B', text: '50' },
            { label: 'C', text: '55' }, { label: 'D', text: '60' },
            { label: 'E', text: '80' }
        ],
        correctOption: 'B',
        explanation: 'Adding 10 each time: 10, 20, 30, 40, 50.'
    },
    {
        id: 'qa-q53', unit: 'qa-unit-10', subject: 'Number Series',
        topic: 'Number Series Basics', difficulty: 'easy',
        question: 'What comes next: 50, 45, 40, 35, __?',
        options: [
            { label: 'A', text: '25' }, { label: 'B', text: '28' },
            { label: 'C', text: '30' }, { label: 'D', text: '32' },
            { label: 'E', text: '34' }
        ],
        correctOption: 'C',
        explanation: 'Subtracting 5 each time: 50, 45, 40, 35, 30.'
    },
    {
        id: 'qa-q54', unit: 'qa-unit-10', subject: 'Number Series',
        topic: 'Number Series Basics', difficulty: 'medium',
        question: 'Find the missing number: 4, 8, __, 16, 20',
        options: [
            { label: 'A', text: '10' }, { label: 'B', text: '11' },
            { label: 'C', text: '12' }, { label: 'D', text: '13' },
            { label: 'E', text: '14' }
        ],
        correctOption: 'C',
        explanation: 'Adding 4 each time: 4, 8, 12, 16, 20.'
    },
    {
        id: 'qa-q55', unit: 'qa-unit-10', subject: 'Number Series',
        topic: 'Number Series Basics', difficulty: 'medium',
        question: 'What comes next: 7, 14, 21, 28, __?',
        options: [
            { label: 'A', text: '30' }, { label: 'B', text: '32' },
            { label: 'C', text: '35' }, { label: 'D', text: '42' },
            { label: 'E', text: '49' }
        ],
        correctOption: 'C',
        explanation: 'Multiples of 7: 7, 14, 21, 28, 35.'
    },
    {
        id: 'qa-q56', unit: 'qa-unit-10', subject: 'Number Series',
        topic: 'Number Series Basics', difficulty: 'medium',
        question: 'Find the missing number: 2, 5, __, 11, 14',
        options: [
            { label: 'A', text: '7' }, { label: 'B', text: '8' },
            { label: 'C', text: '9' }, { label: 'D', text: '10' },
            { label: 'E', text: '6' }
        ],
        correctOption: 'B',
        explanation: 'Adding 3 each time: 2, 5, 8, 11, 14.'
    },
    {
        id: 'qa-q57', unit: 'qa-unit-10', subject: 'Number Series',
        topic: 'Number Series Basics', difficulty: 'hard',
        question: 'Find the next number: 1, 3, 6, 10, 15, __',
        options: [
            { label: 'A', text: '18' }, { label: 'B', text: '20' },
            { label: 'C', text: '21' }, { label: 'D', text: '25' },
            { label: 'E', text: '28' }
        ],
        correctOption: 'C',
        explanation: 'Triangle numbers — differences increase by 1: +2, +3, +4, +5, +6. So 15 + 6 = 21.'
    },

    // ===== QA Unit 11: Number Series with Fractions and Decimals =====
    {
        id: 'qa-q58', unit: 'qa-unit-11', subject: 'Number Series',
        topic: 'Number Series with Fractions and Decimals', difficulty: 'easy',
        question: 'What comes next: 0.5, 1.0, 1.5, 2.0, __?',
        options: [
            { label: 'A', text: '2.2' }, { label: 'B', text: '2.3' },
            { label: 'C', text: '2.5' }, { label: 'D', text: '3.0' },
            { label: 'E', text: '3.5' }
        ],
        correctOption: 'C',
        explanation: 'Adding 0.5 each time: 0.5, 1.0, 1.5, 2.0, 2.5.'
    },
    {
        id: 'qa-q59', unit: 'qa-unit-11', subject: 'Number Series',
        topic: 'Number Series with Fractions and Decimals', difficulty: 'medium',
        question: 'What comes next: ½, 1, 1½, 2, __?',
        options: [
            { label: 'A', text: '2¼' }, { label: 'B', text: '2½' },
            { label: 'C', text: '3' }, { label: 'D', text: '3½' },
            { label: 'E', text: '4' }
        ],
        correctOption: 'B',
        explanation: 'Adding ½ each time: ½, 1, 1½, 2, 2½.'
    },
    {
        id: 'qa-q60', unit: 'qa-unit-11', subject: 'Number Series',
        topic: 'Number Series with Fractions and Decimals', difficulty: 'medium',
        question: 'What is the next number: 0.2, 0.4, 0.6, 0.8, __?',
        options: [
            { label: 'A', text: '0.9' }, { label: 'B', text: '1.0' },
            { label: 'C', text: '1.2' }, { label: 'D', text: '1.6' },
            { label: 'E', text: '2.0' }
        ],
        correctOption: 'B',
        explanation: 'Adding 0.2 each time: 0.2, 0.4, 0.6, 0.8, 1.0.'
    },
    {
        id: 'qa-q61', unit: 'qa-unit-11', subject: 'Number Series',
        topic: 'Number Series with Fractions and Decimals', difficulty: 'hard',
        question: 'Find the next: ¼, ½, ¾, 1, __',
        options: [
            { label: 'A', text: '1⅛' }, { label: 'B', text: '1¼' },
            { label: 'C', text: '1½' }, { label: 'D', text: '1¾' },
            { label: 'E', text: '2' }
        ],
        correctOption: 'B',
        explanation: 'Adding ¼ each time: ¼, ½, ¾, 1, 1¼.'
    },
    {
        id: 'qa-q62', unit: 'qa-unit-11', subject: 'Number Series',
        topic: 'Number Series with Fractions and Decimals', difficulty: 'hard',
        question: 'What comes next: 0.1, 0.3, 0.9, 2.7, __?',
        options: [
            { label: 'A', text: '3.6' }, { label: 'B', text: '5.4' },
            { label: 'C', text: '8.1' }, { label: 'D', text: '10.8' },
            { label: 'E', text: '27' }
        ],
        correctOption: 'C',
        explanation: 'Each number is multiplied by 3: 0.1 × 3 = 0.3, 0.3 × 3 = 0.9, 0.9 × 3 = 2.7, 2.7 × 3 = 8.1.'
    },

    // ===== QA Unit 12: Patterns with Addition and Multiplication =====
    {
        id: 'qa-q63', unit: 'qa-unit-12', subject: 'Number Series',
        topic: 'Patterns with Addition and Multiplication', difficulty: 'easy',
        question: 'In a number triangle, the top row has 3 and 5. If the rule is addition, what goes below them?',
        options: [
            { label: 'A', text: '2' }, { label: 'B', text: '8' },
            { label: 'C', text: '10' }, { label: 'D', text: '15' },
            { label: 'E', text: '35' }
        ],
        correctOption: 'B',
        explanation: '3 + 5 = 8. The number below is the sum of the two numbers above.'
    },
    {
        id: 'qa-q64', unit: 'qa-unit-12', subject: 'Number Series',
        topic: 'Patterns with Addition and Multiplication', difficulty: 'medium',
        question: 'In a grid: Row 1 has 2, 3, 5. Row 2 has 4, ?, 10. Each number doubles. What is ?',
        options: [
            { label: 'A', text: '4' }, { label: 'B', text: '5' },
            { label: 'C', text: '6' }, { label: 'D', text: '8' },
            { label: 'E', text: '9' }
        ],
        correctOption: 'C',
        explanation: 'Each number doubles: 2→4, 3→6, 5→10. The missing number is 6.'
    },
    {
        id: 'qa-q65', unit: 'qa-unit-12', subject: 'Number Series',
        topic: 'Patterns with Addition and Multiplication', difficulty: 'medium',
        question: 'In a number wall: bottom row is 2, 3, 4. Each brick above = sum of two below. Middle row is 5, 7. Top is:',
        options: [
            { label: 'A', text: '9' }, { label: 'B', text: '10' },
            { label: 'C', text: '11' }, { label: 'D', text: '12' },
            { label: 'E', text: '14' }
        ],
        correctOption: 'D',
        explanation: 'Bottom: 2, 3, 4. Middle: 2+3=5, 3+4=7. Top: 5+7 = 12.'
    },
    {
        id: 'qa-q66', unit: 'qa-unit-12', subject: 'Number Series',
        topic: 'Patterns with Addition and Multiplication', difficulty: 'hard',
        question: 'In a cross pattern: top = 4, left = 3, right = 5, bottom = 6. Centre = top + bottom − left. What is the centre?',
        options: [
            { label: 'A', text: '5' }, { label: 'B', text: '7' },
            { label: 'C', text: '8' }, { label: 'D', text: '10' },
            { label: 'E', text: '12' }
        ],
        correctOption: 'B',
        explanation: 'Centre = top + bottom − left = 4 + 6 − 3 = 7.'
    },
    {
        id: 'qa-q67', unit: 'qa-unit-12', subject: 'Number Series',
        topic: 'Patterns with Addition and Multiplication', difficulty: 'medium',
        question: 'Row sums: Row A = 2, 4, 6 (sum = 12). Row B = 3, 5, ? (sum = 15). What is ?',
        options: [
            { label: 'A', text: '5' }, { label: 'B', text: '6' },
            { label: 'C', text: '7' }, { label: 'D', text: '8' },
            { label: 'E', text: '10' }
        ],
        correctOption: 'C',
        explanation: '3 + 5 + ? = 15, so ? = 15 − 8 = 7.'
    },
    {
        id: 'qa-q68', unit: 'qa-unit-12', subject: 'Number Series',
        topic: 'Patterns with Addition and Multiplication', difficulty: 'hard',
        question: 'In a grid, each column product is 24. Column 1: 2, 3, 4 (product = 24). Column 2: 6, ?, 2. What is ?',
        options: [
            { label: 'A', text: '2' }, { label: 'B', text: '3' },
            { label: 'C', text: '4' }, { label: 'D', text: '6' },
            { label: 'E', text: '8' }
        ],
        correctOption: 'A',
        explanation: '6 × ? × 2 = 24, so 12 × ? = 24, therefore ? = 2.'
    },
    {
        id: 'qa-q69', unit: 'qa-unit-12', subject: 'Number Series',
        topic: 'Patterns with Addition and Multiplication', difficulty: 'hard',
        question: 'In a number pyramid: base row is 1, 2, 3, 4. Each number above = sum of two below. What is the top number?',
        options: [
            { label: 'A', text: '8' }, { label: 'B', text: '10' },
            { label: 'C', text: '16' }, { label: 'D', text: '20' },
            { label: 'E', text: '24' }
        ],
        correctOption: 'D',
        explanation: 'Base: 1,2,3,4. Row 2: 3,5,7. Row 3: 8,12. Top: 20.'
    },
    {
        id: 'qa-q70', unit: 'qa-unit-12', subject: 'Number Series',
        topic: 'Patterns with Addition and Multiplication', difficulty: 'medium',
        question: 'What comes next: 2, 4, 8, 16, 32, __?',
        options: [
            { label: 'A', text: '36' }, { label: 'B', text: '48' },
            { label: 'C', text: '64' }, { label: 'D', text: '96' },
            { label: 'E', text: '128' }
        ],
        correctOption: 'C',
        explanation: 'Each number doubles: 32 × 2 = 64.'
    },

    // ================================================================
    //  SHAPE PATTERNS (20 Questions — 5 units)
    // ================================================================

    // ===== QA Unit 13: Shape Patterns =====
    {
        id: 'qa-q71', unit: 'qa-unit-13', subject: 'Shape Patterns',
        topic: 'Shape Patterns', difficulty: 'easy',
        question: 'A triangle has 3 sides. A square has 4 sides. How many sides does a pentagon have?',
        options: [
            { label: 'A', text: '3' }, { label: 'B', text: '4' },
            { label: 'C', text: '5' }, { label: 'D', text: '6' },
            { label: 'E', text: '8' }
        ],
        correctOption: 'C',
        explanation: 'The pattern: tri=3, quad/square=4, penta=5. A pentagon has 5 sides.'
    },
    {
        id: 'qa-q72', unit: 'qa-unit-13', subject: 'Shape Patterns',
        topic: 'Shape Patterns', difficulty: 'easy',
        question: 'If the pattern is: ○ □ △ ○ □ △ ○ □ __, what comes next?',
        options: [
            { label: 'A', text: '○' }, { label: 'B', text: '□' },
            { label: 'C', text: '△' }, { label: 'D', text: '◇' },
            { label: 'E', text: '☆' }
        ],
        correctOption: 'C',
        explanation: 'The pattern repeats every 3: ○ □ △. After □ comes △.'
    },
    {
        id: 'qa-q73', unit: 'qa-unit-13', subject: 'Shape Patterns',
        topic: 'Shape Patterns', difficulty: 'easy',
        question: 'How many corners does a rectangle have?',
        options: [
            { label: 'A', text: '2' }, { label: 'B', text: '3' },
            { label: 'C', text: '4' }, { label: 'D', text: '5' },
            { label: 'E', text: '6' }
        ],
        correctOption: 'C',
        explanation: 'A rectangle has 4 corners (vertices).'
    },
    {
        id: 'qa-q74', unit: 'qa-unit-13', subject: 'Shape Patterns',
        topic: 'Shape Patterns', difficulty: 'medium',
        question: 'Pattern: 1 triangle, 2 squares, 3 triangles, 4 squares, __. What comes next?',
        options: [
            { label: 'A', text: '4 triangles' }, { label: 'B', text: '5 triangles' },
            { label: 'C', text: '5 squares' }, { label: 'D', text: '6 squares' },
            { label: 'E', text: '3 circles' }
        ],
        correctOption: 'B',
        explanation: 'Odd positions = triangles (1,3,5...), even = squares (2,4...). Next: 5 triangles.'
    },

    // ===== QA Unit 14: Shape Sequences =====
    {
        id: 'qa-q75', unit: 'qa-unit-14', subject: 'Shape Patterns',
        topic: 'Shape Sequences', difficulty: 'easy',
        question: 'A shape has 6 sides. What is it called?',
        options: [
            { label: 'A', text: 'Pentagon' }, { label: 'B', text: 'Hexagon' },
            { label: 'C', text: 'Octagon' }, { label: 'D', text: 'Heptagon' },
            { label: 'E', text: 'Decagon' }
        ],
        correctOption: 'B',
        explanation: 'A hexagon has 6 sides. Hex = 6.'
    },
    {
        id: 'qa-q76', unit: 'qa-unit-14', subject: 'Shape Patterns',
        topic: 'Shape Sequences', difficulty: 'medium',
        question: 'Shapes: 3 sides, 4 sides, 5 sides, 6 sides, __. How many sides does the next shape have?',
        options: [
            { label: 'A', text: '6' }, { label: 'B', text: '7' },
            { label: 'C', text: '8' }, { label: 'D', text: '9' },
            { label: 'E', text: '10' }
        ],
        correctOption: 'B',
        explanation: 'Adding 1 side each time: 3, 4, 5, 6, 7. The next shape has 7 sides (heptagon).'
    },
    {
        id: 'qa-q77', unit: 'qa-unit-14', subject: 'Shape Patterns',
        topic: 'Shape Sequences', difficulty: 'medium',
        question: 'A circle has 0 corners, a triangle has 3, a square has 4. How many corners does a hexagon have?',
        options: [
            { label: 'A', text: '4' }, { label: 'B', text: '5' },
            { label: 'C', text: '6' }, { label: 'D', text: '7' },
            { label: 'E', text: '8' }
        ],
        correctOption: 'C',
        explanation: 'A hexagon has 6 sides and 6 corners. The number of sides = number of corners for polygons.'
    },
    {
        id: 'qa-q78', unit: 'qa-unit-14', subject: 'Shape Patterns',
        topic: 'Shape Sequences', difficulty: 'medium',
        question: 'How many lines of symmetry does a square have?',
        options: [
            { label: 'A', text: '1' }, { label: 'B', text: '2' },
            { label: 'C', text: '3' }, { label: 'D', text: '4' },
            { label: 'E', text: '8' }
        ],
        correctOption: 'D',
        explanation: 'A square has 4 lines of symmetry: 2 diagonal and 2 through the midpoints of opposite sides.'
    },

    // ===== QA Unit 23: Shapes and Spatial Patterns =====
    {
        id: 'qa-q79', unit: 'qa-unit-23', subject: 'Shape Patterns',
        topic: 'Shapes and Spatial Patterns', difficulty: 'easy',
        question: 'If you cut a square diagonally, how many triangles do you get?',
        options: [
            { label: 'A', text: '1' }, { label: 'B', text: '2' },
            { label: 'C', text: '3' }, { label: 'D', text: '4' },
            { label: 'E', text: '6' }
        ],
        correctOption: 'B',
        explanation: 'Cutting a square diagonally gives 2 triangles.'
    },
    {
        id: 'qa-q80', unit: 'qa-unit-23', subject: 'Shape Patterns',
        topic: 'Shapes and Spatial Patterns', difficulty: 'medium',
        question: 'How many squares can you see in a 2×2 grid? (Count ALL squares, including the big one)',
        options: [
            { label: 'A', text: '4' }, { label: 'B', text: '5' },
            { label: 'C', text: '6' }, { label: 'D', text: '8' },
            { label: 'E', text: '9' }
        ],
        correctOption: 'B',
        explanation: '4 small squares + 1 large square = 5 squares total.'
    },
    {
        id: 'qa-q81', unit: 'qa-unit-23', subject: 'Shape Patterns',
        topic: 'Shapes and Spatial Patterns', difficulty: 'medium',
        question: 'A cube has how many faces?',
        options: [
            { label: 'A', text: '4' }, { label: 'B', text: '5' },
            { label: 'C', text: '6' }, { label: 'D', text: '8' },
            { label: 'E', text: '12' }
        ],
        correctOption: 'C',
        explanation: 'A cube has 6 faces (top, bottom, front, back, left, right).'
    },
    {
        id: 'qa-q82', unit: 'qa-unit-23', subject: 'Shape Patterns',
        topic: 'Shapes and Spatial Patterns', difficulty: 'hard',
        question: 'Pattern: 1st shape has 1 dot, 2nd has 3 dots, 3rd has 6 dots, 4th has 10 dots. How many dots in the 5th?',
        options: [
            { label: 'A', text: '12' }, { label: 'B', text: '14' },
            { label: 'C', text: '15' }, { label: 'D', text: '16' },
            { label: 'E', text: '20' }
        ],
        correctOption: 'C',
        explanation: 'Triangle numbers: 1, 3, 6, 10, 15. The differences are +2, +3, +4, +5.'
    },

    // ===== QA Unit 24: Inversion =====
    {
        id: 'qa-q83', unit: 'qa-unit-24', subject: 'Shape Patterns',
        topic: 'Inversion', difficulty: 'easy',
        question: 'If you flip the letter "b" upside down, what does it look like?',
        options: [
            { label: 'A', text: 'd' }, { label: 'B', text: 'p' },
            { label: 'C', text: 'q' }, { label: 'D', text: 'b' },
            { label: 'E', text: 'g' }
        ],
        correctOption: 'B',
        explanation: 'Flipping "b" upside down gives "p" — the shape is inverted vertically.'
    },
    {
        id: 'qa-q84', unit: 'qa-unit-24', subject: 'Shape Patterns',
        topic: 'Inversion', difficulty: 'medium',
        question: 'If a triangle is pointing UP (△), what does it look like when inverted?',
        options: [
            { label: 'A', text: 'Still pointing up △' }, { label: 'B', text: 'Pointing down ▽' },
            { label: 'C', text: 'Becomes a square □' }, { label: 'D', text: 'Becomes a circle ○' },
            { label: 'E', text: 'Disappears' }
        ],
        correctOption: 'B',
        explanation: 'When inverted (flipped), an upward triangle △ becomes a downward triangle ▽.'
    },
    {
        id: 'qa-q85', unit: 'qa-unit-24', subject: 'Shape Patterns',
        topic: 'Inversion', difficulty: 'medium',
        question: 'Which letter looks the SAME when turned upside down?',
        options: [
            { label: 'A', text: 'A' }, { label: 'B', text: 'B' },
            { label: 'C', text: 'H' }, { label: 'D', text: 'R' },
            { label: 'E', text: 'L' }
        ],
        correctOption: 'C',
        explanation: 'H looks the same when turned upside down — it has horizontal symmetry.'
    },
    {
        id: 'qa-q86', unit: 'qa-unit-24', subject: 'Shape Patterns',
        topic: 'Inversion', difficulty: 'medium',
        question: 'If you look at the number "6" in a mirror held below it, what does it look like?',
        options: [
            { label: 'A', text: '6' }, { label: 'B', text: '9' },
            { label: 'C', text: '8' }, { label: 'D', text: '0' },
            { label: 'E', text: '3' }
        ],
        correctOption: 'B',
        explanation: 'When flipped vertically, "6" becomes "9".'
    },
    {
        id: 'qa-q87', unit: 'qa-unit-24', subject: 'Shape Patterns',
        topic: 'Inversion', difficulty: 'hard',
        question: 'Which number reads the SAME when turned upside down?',
        options: [
            { label: 'A', text: '96' }, { label: 'B', text: '18' },
            { label: 'C', text: '69' }, { label: 'D', text: '86' },
            { label: 'E', text: '12' }
        ],
        correctOption: 'C',
        explanation: '69 reads 69 when turned upside down (6 becomes 9 and 9 becomes 6).'
    },
    {
        id: 'qa-q88', unit: 'qa-unit-24', subject: 'Shape Patterns',
        topic: 'Inversion', difficulty: 'hard',
        question: 'If you fold a piece of paper in half and cut a half-circle on the fold, what shape do you get when unfolded?',
        options: [
            { label: 'A', text: 'A half circle' }, { label: 'B', text: 'A full circle' },
            { label: 'C', text: 'A square' }, { label: 'D', text: 'A triangle' },
            { label: 'E', text: 'An oval' }
        ],
        correctOption: 'B',
        explanation: 'A half circle on a fold unfolds into a full circle — symmetry!'
    },
    {
        id: 'qa-q89', unit: 'qa-unit-24', subject: 'Shape Patterns',
        topic: 'Inversion', difficulty: 'hard',
        question: 'An arrow points RIGHT →. If it is rotated 180°, which direction does it point?',
        options: [
            { label: 'A', text: 'Up ↑' }, { label: 'B', text: 'Down ↓' },
            { label: 'C', text: 'Left ←' }, { label: 'D', text: 'Right →' },
            { label: 'E', text: 'Diagonal ↗' }
        ],
        correctOption: 'C',
        explanation: 'Rotating 180° reverses direction. Right → becomes Left ←.'
    },
    {
        id: 'qa-q90', unit: 'qa-unit-24', subject: 'Shape Patterns',
        topic: 'Inversion', difficulty: 'medium',
        question: 'Which shape looks the SAME no matter how you rotate it?',
        options: [
            { label: 'A', text: 'Triangle' }, { label: 'B', text: 'Rectangle' },
            { label: 'C', text: 'Circle' }, { label: 'D', text: 'Arrow' },
            { label: 'E', text: 'Letter L' }
        ],
        correctOption: 'C',
        explanation: 'A circle looks the same from every angle — it has infinite rotational symmetry.'
    },

    // ================================================================
    //  ARITHMETIC OPERATIONS (25 Questions — starts here)
    // ================================================================

    // ===== QA Unit 15: Addition, Subtraction, and Multiplication =====
    {
        id: 'qa-q91', unit: 'qa-unit-15', subject: 'Arithmetic Operations',
        topic: 'Addition, Subtraction, and Multiplication', difficulty: 'easy',
        question: 'What is 15 + 27?',
        options: [
            { label: 'A', text: '32' }, { label: 'B', text: '42' },
            { label: 'C', text: '52' }, { label: 'D', text: '40' },
            { label: 'E', text: '35' }
        ],
        correctOption: 'B',
        explanation: '15 + 27 = 42.'
    },
    {
        id: 'qa-q92', unit: 'qa-unit-15', subject: 'Arithmetic Operations',
        topic: 'Addition, Subtraction, and Multiplication', difficulty: 'easy',
        question: 'What is 48 − 19?',
        options: [
            { label: 'A', text: '27' }, { label: 'B', text: '28' },
            { label: 'C', text: '29' }, { label: 'D', text: '30' },
            { label: 'E', text: '31' }
        ],
        correctOption: 'C',
        explanation: '48 − 19 = 29.'
    },
    {
        id: 'qa-q93', unit: 'qa-unit-15', subject: 'Arithmetic Operations',
        topic: 'Addition, Subtraction, and Multiplication', difficulty: 'easy',
        question: 'What is 7 × 8?',
        options: [
            { label: 'A', text: '48' }, { label: 'B', text: '54' },
            { label: 'C', text: '56' }, { label: 'D', text: '63' },
            { label: 'E', text: '64' }
        ],
        correctOption: 'C',
        explanation: '7 × 8 = 56.'
    },
    {
        id: 'qa-q94', unit: 'qa-unit-15', subject: 'Arithmetic Operations',
        topic: 'Addition, Subtraction, and Multiplication', difficulty: 'medium',
        question: 'Find the missing number: __ + 25 = 61',
        options: [
            { label: 'A', text: '34' }, { label: 'B', text: '36' },
            { label: 'C', text: '38' }, { label: 'D', text: '46' },
            { label: 'E', text: '86' }
        ],
        correctOption: 'B',
        explanation: '? + 25 = 61, so ? = 61 − 25 = 36.'
    },
    {
        id: 'qa-q95', unit: 'qa-unit-15', subject: 'Arithmetic Operations',
        topic: 'Addition, Subtraction, and Multiplication', difficulty: 'medium',
        question: 'Find the missing number: 9 × __ = 72',
        options: [
            { label: 'A', text: '6' }, { label: 'B', text: '7' },
            { label: 'C', text: '8' }, { label: 'D', text: '9' },
            { label: 'E', text: '10' }
        ],
        correctOption: 'C',
        explanation: '9 × ? = 72, so ? = 72 ÷ 9 = 8.'
    },

    // ===== QA Unit 16: Division Patterns =====
    {
        id: 'qa-q96', unit: 'qa-unit-16', subject: 'Arithmetic Operations',
        topic: 'Division Patterns', difficulty: 'easy',
        question: 'What is 63 ÷ 7?',
        options: [
            { label: 'A', text: '7' }, { label: 'B', text: '8' },
            { label: 'C', text: '9' }, { label: 'D', text: '10' },
            { label: 'E', text: '11' }
        ],
        correctOption: 'C',
        explanation: '63 ÷ 7 = 9.'
    },
    {
        id: 'qa-q97', unit: 'qa-unit-16', subject: 'Arithmetic Operations',
        topic: 'Division Patterns', difficulty: 'easy',
        question: 'What is 100 ÷ 4?',
        options: [
            { label: 'A', text: '20' }, { label: 'B', text: '25' },
            { label: 'C', text: '30' }, { label: 'D', text: '40' },
            { label: 'E', text: '50' }
        ],
        correctOption: 'B',
        explanation: '100 ÷ 4 = 25.'
    },
    {
        id: 'qa-q98', unit: 'qa-unit-16', subject: 'Arithmetic Operations',
        topic: 'Division Patterns', difficulty: 'medium',
        question: 'Find the missing number: 84 ÷ __ = 12',
        options: [
            { label: 'A', text: '5' }, { label: 'B', text: '6' },
            { label: 'C', text: '7' }, { label: 'D', text: '8' },
            { label: 'E', text: '9' }
        ],
        correctOption: 'C',
        explanation: '84 ÷ ? = 12, so ? = 84 ÷ 12 = 7.'
    },
    {
        id: 'qa-q99', unit: 'qa-unit-16', subject: 'Arithmetic Operations',
        topic: 'Division Patterns', difficulty: 'medium',
        question: 'If 144 sweets are shared equally among 12 children, how many does each child get?',
        options: [
            { label: 'A', text: '10' }, { label: 'B', text: '11' },
            { label: 'C', text: '12' }, { label: 'D', text: '14' },
            { label: 'E', text: '15' }
        ],
        correctOption: 'C',
        explanation: '144 ÷ 12 = 12 sweets each.'
    },
    {
        id: 'qa-q100', unit: 'qa-unit-16', subject: 'Arithmetic Operations',
        topic: 'Division Patterns', difficulty: 'hard',
        question: 'What is 225 ÷ 15?',
        options: [
            { label: 'A', text: '12' }, { label: 'B', text: '13' },
            { label: 'C', text: '14' }, { label: 'D', text: '15' },
            { label: 'E', text: '16' }
        ],
        correctOption: 'D',
        explanation: '225 ÷ 15 = 15.'
    },

    // ===== QA Unit 17: Mixed Operations =====
    {
        id: 'qa-q101', unit: 'qa-unit-17', subject: 'Arithmetic Operations',
        topic: 'Mixed Operations', difficulty: 'easy',
        question: 'What is (3 + 5) × 2?',
        options: [
            { label: 'A', text: '11' }, { label: 'B', text: '13' },
            { label: 'C', text: '16' }, { label: 'D', text: '20' },
            { label: 'E', text: '30' }
        ],
        correctOption: 'C',
        explanation: '(3 + 5) × 2 = 8 × 2 = 16. Brackets first!'
    },
    {
        id: 'qa-q102', unit: 'qa-unit-17', subject: 'Arithmetic Operations',
        topic: 'Mixed Operations', difficulty: 'medium',
        question: 'What is 4 × 5 + 3 × 2?',
        options: [
            { label: 'A', text: '22' }, { label: 'B', text: '26' },
            { label: 'C', text: '46' }, { label: 'D', text: '34' },
            { label: 'E', text: '28' }
        ],
        correctOption: 'B',
        explanation: '4 × 5 = 20, 3 × 2 = 6. So 20 + 6 = 26. Multiply before adding.'
    },
    {
        id: 'qa-q103', unit: 'qa-unit-17', subject: 'Arithmetic Operations',
        topic: 'Mixed Operations', difficulty: 'hard',
        question: 'What is (20 − 8) ÷ 4 + 7?',
        options: [
            { label: 'A', text: '8' }, { label: 'B', text: '9' },
            { label: 'C', text: '10' }, { label: 'D', text: '11' },
            { label: 'E', text: '12' }
        ],
        correctOption: 'C',
        explanation: '(20 − 8) = 12, 12 ÷ 4 = 3, 3 + 7 = 10.'
    },

    // ===== QA Unit 18: Even and Odd Patterns =====
    {
        id: 'qa-q104', unit: 'qa-unit-18', subject: 'Arithmetic Operations',
        topic: 'Even and Odd Patterns', difficulty: 'easy',
        question: 'Which of these numbers is even?',
        options: [
            { label: 'A', text: '7' }, { label: 'B', text: '13' },
            { label: 'C', text: '21' }, { label: 'D', text: '36' },
            { label: 'E', text: '45' }
        ],
        correctOption: 'D',
        explanation: '36 is even because it can be divided by 2 with no remainder.'
    },
    {
        id: 'qa-q105', unit: 'qa-unit-18', subject: 'Arithmetic Operations',
        topic: 'Even and Odd Patterns', difficulty: 'easy',
        question: 'What is the next even number after 14?',
        options: [
            { label: 'A', text: '15' }, { label: 'B', text: '16' },
            { label: 'C', text: '17' }, { label: 'D', text: '18' },
            { label: 'E', text: '20' }
        ],
        correctOption: 'B',
        explanation: 'Even numbers: 14, 16, 18... The next even number after 14 is 16.'
    },
    {
        id: 'qa-q106', unit: 'qa-unit-18', subject: 'Arithmetic Operations',
        topic: 'Even and Odd Patterns', difficulty: 'medium',
        question: 'What is the sum of the first 3 odd numbers (1 + 3 + 5)?',
        options: [
            { label: 'A', text: '7' }, { label: 'B', text: '8' },
            { label: 'C', text: '9' }, { label: 'D', text: '10' },
            { label: 'E', text: '12' }
        ],
        correctOption: 'C',
        explanation: '1 + 3 + 5 = 9. (Fun fact: the sum of first n odd numbers = n².)'
    },

    // ===== QA Unit 19: Multiples and Factors =====
    {
        id: 'qa-q107', unit: 'qa-unit-19', subject: 'Arithmetic Operations',
        topic: 'Multiples and Factors', difficulty: 'easy',
        question: 'Which of these is a multiple of 5?',
        options: [
            { label: 'A', text: '12' }, { label: 'B', text: '17' },
            { label: 'C', text: '23' }, { label: 'D', text: '30' },
            { label: 'E', text: '31' }
        ],
        correctOption: 'D',
        explanation: '30 ÷ 5 = 6 (no remainder). So 30 is a multiple of 5.'
    },
    {
        id: 'qa-q108', unit: 'qa-unit-19', subject: 'Arithmetic Operations',
        topic: 'Multiples and Factors', difficulty: 'medium',
        question: 'How many factors does 12 have?',
        options: [
            { label: 'A', text: '4' }, { label: 'B', text: '5' },
            { label: 'C', text: '6' }, { label: 'D', text: '8' },
            { label: 'E', text: '12' }
        ],
        correctOption: 'C',
        explanation: 'Factors of 12: 1, 2, 3, 4, 6, 12. That is 6 factors.'
    },

    // ===== QA Unit 20: Continuous Addition Patterns =====
    {
        id: 'qa-q109', unit: 'qa-unit-20', subject: 'Arithmetic Operations',
        topic: 'Continuous Addition Patterns', difficulty: 'easy',
        question: 'Start at 4 and keep adding 3. What is the 5th number?',
        options: [
            { label: 'A', text: '13' }, { label: 'B', text: '14' },
            { label: 'C', text: '15' }, { label: 'D', text: '16' },
            { label: 'E', text: '19' }
        ],
        correctOption: 'D',
        explanation: '4, 7, 10, 13, 16. The 5th number is 16.'
    },
    {
        id: 'qa-q110', unit: 'qa-unit-20', subject: 'Arithmetic Operations',
        topic: 'Continuous Addition Patterns', difficulty: 'medium',
        question: 'Start at 100 and keep subtracting 8. What is the 4th number?',
        options: [
            { label: 'A', text: '68' }, { label: 'B', text: '72' },
            { label: 'C', text: '76' }, { label: 'D', text: '80' },
            { label: 'E', text: '84' }
        ],
        correctOption: 'C',
        explanation: '100, 92, 84, 76. The 4th number is 76.'
    },

    // ===== QA Unit 25: Corresponding Addition =====
    {
        id: 'qa-q111', unit: 'qa-unit-25', subject: 'Arithmetic Operations',
        topic: 'Corresponding Addition of Numbers', difficulty: 'medium',
        question: 'If ○ + △ = 10, and ○ = 4, what is △?',
        options: [
            { label: 'A', text: '4' }, { label: 'B', text: '5' },
            { label: 'C', text: '6' }, { label: 'D', text: '7' },
            { label: 'E', text: '14' }
        ],
        correctOption: 'C',
        explanation: '○ + △ = 10, 4 + △ = 10, so △ = 6.'
    },

    // ===== QA Unit 26: Picking the Odd =====
    {
        id: 'qa-q112', unit: 'qa-unit-26', subject: 'Arithmetic Operations',
        topic: 'Picking the Odd', difficulty: 'easy',
        question: 'Which number does NOT belong: 2, 4, 7, 8, 10?',
        options: [
            { label: 'A', text: '2' }, { label: 'B', text: '4' },
            { label: 'C', text: '7' }, { label: 'D', text: '8' },
            { label: 'E', text: '10' }
        ],
        correctOption: 'C',
        explanation: '7 is the odd one out — it is the only odd number. The rest are all even.'
    },
    {
        id: 'qa-q113', unit: 'qa-unit-26', subject: 'Arithmetic Operations',
        topic: 'Picking the Odd', difficulty: 'medium',
        question: 'Which does not belong: 3, 6, 9, 14, 15?',
        options: [
            { label: 'A', text: '3' }, { label: 'B', text: '6' },
            { label: 'C', text: '9' }, { label: 'D', text: '14' },
            { label: 'E', text: '15' }
        ],
        correctOption: 'D',
        explanation: '14 is not a multiple of 3. The others (3, 6, 9, 15) are all multiples of 3.'
    },
    {
        id: 'qa-q114', unit: 'qa-unit-26', subject: 'Arithmetic Operations',
        topic: 'Picking the Odd', difficulty: 'hard',
        question: 'Which does not belong: 1, 4, 9, 15, 25?',
        options: [
            { label: 'A', text: '1' }, { label: 'B', text: '4' },
            { label: 'C', text: '9' }, { label: 'D', text: '15' },
            { label: 'E', text: '25' }
        ],
        correctOption: 'D',
        explanation: '15 is not a perfect square. The others (1, 4, 9, 25) are all square numbers (1², 2², 3², 5²).'
    },
    {
        id: 'qa-q115', unit: 'qa-unit-26', subject: 'Arithmetic Operations',
        topic: 'Picking the Odd', difficulty: 'hard',
        question: 'Which does not belong: 2, 3, 5, 7, 9?',
        options: [
            { label: 'A', text: '2' }, { label: 'B', text: '3' },
            { label: 'C', text: '5' }, { label: 'D', text: '7' },
            { label: 'E', text: '9' }
        ],
        correctOption: 'E',
        explanation: '9 is not a prime number (9 = 3 × 3). The others (2, 3, 5, 7) are all prime.'
    },

    // ================================================================
    //  SQUARES & ROOTS (15 Questions — 3 units)
    // ================================================================

    // ===== QA Unit 27: Exponents and Squares of Numbers =====
    {
        id: 'qa-q116', unit: 'qa-unit-27', subject: 'Squares & Roots',
        topic: 'Exponents and Squares of Numbers', difficulty: 'easy',
        question: 'What is 3²?',
        options: [
            { label: 'A', text: '6' }, { label: 'B', text: '9' },
            { label: 'C', text: '12' }, { label: 'D', text: '27' },
            { label: 'E', text: '33' }
        ],
        correctOption: 'B',
        explanation: '3² = 3 × 3 = 9.'
    },
    {
        id: 'qa-q117', unit: 'qa-unit-27', subject: 'Squares & Roots',
        topic: 'Exponents and Squares of Numbers', difficulty: 'easy',
        question: 'What is 5²?',
        options: [
            { label: 'A', text: '10' }, { label: 'B', text: '15' },
            { label: 'C', text: '20' }, { label: 'D', text: '25' },
            { label: 'E', text: '50' }
        ],
        correctOption: 'D',
        explanation: '5² = 5 × 5 = 25.'
    },
    {
        id: 'qa-q118', unit: 'qa-unit-27', subject: 'Squares & Roots',
        topic: 'Exponents and Squares of Numbers', difficulty: 'easy',
        question: 'What is 10²?',
        options: [
            { label: 'A', text: '20' }, { label: 'B', text: '50' },
            { label: 'C', text: '100' }, { label: 'D', text: '200' },
            { label: 'E', text: '1000' }
        ],
        correctOption: 'C',
        explanation: '10² = 10 × 10 = 100.'
    },
    {
        id: 'qa-q119', unit: 'qa-unit-27', subject: 'Squares & Roots',
        topic: 'Exponents and Squares of Numbers', difficulty: 'medium',
        question: 'What is 2³?',
        options: [
            { label: 'A', text: '4' }, { label: 'B', text: '6' },
            { label: 'C', text: '8' }, { label: 'D', text: '16' },
            { label: 'E', text: '32' }
        ],
        correctOption: 'C',
        explanation: '2³ = 2 × 2 × 2 = 8.'
    },
    {
        id: 'qa-q120', unit: 'qa-unit-27', subject: 'Squares & Roots',
        topic: 'Exponents and Squares of Numbers', difficulty: 'medium',
        question: 'What is 12²?',
        options: [
            { label: 'A', text: '24' }, { label: 'B', text: '120' },
            { label: 'C', text: '124' }, { label: 'D', text: '144' },
            { label: 'E', text: '288' }
        ],
        correctOption: 'D',
        explanation: '12² = 12 × 12 = 144.'
    },
    {
        id: 'qa-q121', unit: 'qa-unit-27', subject: 'Squares & Roots',
        topic: 'Exponents and Squares of Numbers', difficulty: 'medium',
        question: 'What is √49?',
        options: [
            { label: 'A', text: '5' }, { label: 'B', text: '6' },
            { label: 'C', text: '7' }, { label: 'D', text: '8' },
            { label: 'E', text: '9' }
        ],
        correctOption: 'C',
        explanation: '√49 = 7 because 7 × 7 = 49.'
    },
    {
        id: 'qa-q122', unit: 'qa-unit-27', subject: 'Squares & Roots',
        topic: 'Exponents and Squares of Numbers', difficulty: 'medium',
        question: 'What is √81?',
        options: [
            { label: 'A', text: '7' }, { label: 'B', text: '8' },
            { label: 'C', text: '9' }, { label: 'D', text: '10' },
            { label: 'E', text: '11' }
        ],
        correctOption: 'C',
        explanation: '√81 = 9 because 9 × 9 = 81.'
    },
    {
        id: 'qa-q123', unit: 'qa-unit-27', subject: 'Squares & Roots',
        topic: 'Exponents and Squares of Numbers', difficulty: 'hard',
        question: 'What is √144?',
        options: [
            { label: 'A', text: '10' }, { label: 'B', text: '11' },
            { label: 'C', text: '12' }, { label: 'D', text: '13' },
            { label: 'E', text: '14' }
        ],
        correctOption: 'C',
        explanation: '√144 = 12 because 12 × 12 = 144.'
    },
    {
        id: 'qa-q124', unit: 'qa-unit-27', subject: 'Squares & Roots',
        topic: 'Exponents and Squares of Numbers', difficulty: 'medium',
        question: 'Which of these is a perfect square?',
        options: [
            { label: 'A', text: '15' }, { label: 'B', text: '18' },
            { label: 'C', text: '24' }, { label: 'D', text: '36' },
            { label: 'E', text: '48' }
        ],
        correctOption: 'D',
        explanation: '36 = 6 × 6. It is a perfect square. The others are not.'
    },
    {
        id: 'qa-q125', unit: 'qa-unit-27', subject: 'Squares & Roots',
        topic: 'Exponents and Squares of Numbers', difficulty: 'hard',
        question: 'What is 4² + 3²?',
        options: [
            { label: 'A', text: '7' }, { label: 'B', text: '14' },
            { label: 'C', text: '24' }, { label: 'D', text: '25' },
            { label: 'E', text: '49' }
        ],
        correctOption: 'D',
        explanation: '4² + 3² = 16 + 9 = 25.'
    },
    {
        id: 'qa-q126', unit: 'qa-unit-27', subject: 'Squares & Roots',
        topic: 'Exponents and Squares of Numbers', difficulty: 'hard',
        question: 'If x² = 64, what is x?',
        options: [
            { label: 'A', text: '6' }, { label: 'B', text: '7' },
            { label: 'C', text: '8' }, { label: 'D', text: '9' },
            { label: 'E', text: '32' }
        ],
        correctOption: 'C',
        explanation: 'x² = 64, so x = √64 = 8 (because 8 × 8 = 64).'
    },
    {
        id: 'qa-q127', unit: 'qa-unit-27', subject: 'Squares & Roots',
        topic: 'Exponents and Squares of Numbers', difficulty: 'medium',
        question: 'What is 3³?',
        options: [
            { label: 'A', text: '9' }, { label: 'B', text: '12' },
            { label: 'C', text: '27' }, { label: 'D', text: '81' },
            { label: 'E', text: '243' }
        ],
        correctOption: 'C',
        explanation: '3³ = 3 × 3 × 3 = 27.'
    },
    {
        id: 'qa-q128', unit: 'qa-unit-27', subject: 'Squares & Roots',
        topic: 'Exponents and Squares of Numbers', difficulty: 'hard',
        question: 'What is √100 + √25?',
        options: [
            { label: 'A', text: '10' }, { label: 'B', text: '12' },
            { label: 'C', text: '15' }, { label: 'D', text: '25' },
            { label: 'E', text: '125' }
        ],
        correctOption: 'C',
        explanation: '√100 = 10, √25 = 5. So 10 + 5 = 15.'
    },
    {
        id: 'qa-q129', unit: 'qa-unit-27', subject: 'Squares & Roots',
        topic: 'Exponents and Squares of Numbers', difficulty: 'hard',
        question: 'What is 2⁴?',
        options: [
            { label: 'A', text: '8' }, { label: 'B', text: '12' },
            { label: 'C', text: '16' }, { label: 'D', text: '24' },
            { label: 'E', text: '32' }
        ],
        correctOption: 'C',
        explanation: '2⁴ = 2 × 2 × 2 × 2 = 16.'
    },
    {
        id: 'qa-q130', unit: 'qa-unit-27', subject: 'Squares & Roots',
        topic: 'Exponents and Squares of Numbers', difficulty: 'hard',
        question: 'Arrange from smallest to largest: √16, √9, √25, √4',
        options: [
            { label: 'A', text: '√4, √9, √16, √25' }, { label: 'B', text: '√9, √4, √16, √25' },
            { label: 'C', text: '√25, √16, √9, √4' }, { label: 'D', text: '√4, √16, √9, √25' },
            { label: 'E', text: '√9, √16, √4, √25' }
        ],
        correctOption: 'A',
        explanation: '√4=2, √9=3, √16=4, √25=5. Smallest to largest: 2, 3, 4, 5.'
    },

    // ================================================================
    //  SPECIAL TOPICS (20 Questions — 3 units)
    // ================================================================

    // ===== QA Unit 28: Operation Machines =====
    {
        id: 'qa-q131', unit: 'qa-unit-28', subject: 'Special Topics',
        topic: 'Operation Machines', difficulty: 'easy',
        question: 'A machine adds 5 to any number put in. If you put in 8, what comes out?',
        options: [
            { label: 'A', text: '3' }, { label: 'B', text: '8' },
            { label: 'C', text: '13' }, { label: 'D', text: '40' },
            { label: 'E', text: '85' }
        ],
        correctOption: 'C',
        explanation: 'The machine adds 5: 8 + 5 = 13.'
    },
    {
        id: 'qa-q132', unit: 'qa-unit-28', subject: 'Special Topics',
        topic: 'Operation Machines', difficulty: 'easy',
        question: 'A machine doubles any number. If you put in 7, what comes out?',
        options: [
            { label: 'A', text: '9' }, { label: 'B', text: '12' },
            { label: 'C', text: '14' }, { label: 'D', text: '21' },
            { label: 'E', text: '49' }
        ],
        correctOption: 'C',
        explanation: 'The machine doubles: 7 × 2 = 14.'
    },
    {
        id: 'qa-q133', unit: 'qa-unit-28', subject: 'Special Topics',
        topic: 'Operation Machines', difficulty: 'medium',
        question: 'A machine does: input × 3 + 1 = output. If input = 4, output = ?',
        options: [
            { label: 'A', text: '7' }, { label: 'B', text: '12' },
            { label: 'C', text: '13' }, { label: 'D', text: '15' },
            { label: 'E', text: '16' }
        ],
        correctOption: 'C',
        explanation: '4 × 3 + 1 = 12 + 1 = 13.'
    },
    {
        id: 'qa-q134', unit: 'qa-unit-28', subject: 'Special Topics',
        topic: 'Operation Machines', difficulty: 'medium',
        question: 'A machine subtracts 3 then multiplies by 2. Input = 10. Output = ?',
        options: [
            { label: 'A', text: '7' }, { label: 'B', text: '14' },
            { label: 'C', text: '17' }, { label: 'D', text: '20' },
            { label: 'E', text: '26' }
        ],
        correctOption: 'B',
        explanation: '10 − 3 = 7, then 7 × 2 = 14.'
    },
    {
        id: 'qa-q135', unit: 'qa-unit-28', subject: 'Special Topics',
        topic: 'Operation Machines', difficulty: 'hard',
        question: 'A machine gives output 25. The rule is: input × 5. What was the input?',
        options: [
            { label: 'A', text: '3' }, { label: 'B', text: '4' },
            { label: 'C', text: '5' }, { label: 'D', text: '20' },
            { label: 'E', text: '125' }
        ],
        correctOption: 'C',
        explanation: 'input × 5 = 25, so input = 25 ÷ 5 = 5. Working backwards!'
    },
    {
        id: 'qa-q136', unit: 'qa-unit-28', subject: 'Special Topics',
        topic: 'Operation Machines', difficulty: 'hard',
        question: 'Two machines are connected. Machine 1: add 2. Machine 2: multiply by 3. Input = 4. Final output = ?',
        options: [
            { label: 'A', text: '12' }, { label: 'B', text: '14' },
            { label: 'C', text: '18' }, { label: 'D', text: '20' },
            { label: 'E', text: '24' }
        ],
        correctOption: 'C',
        explanation: 'Machine 1: 4 + 2 = 6. Machine 2: 6 × 3 = 18.'
    },

    // ===== QA Unit 29: Magic Squares =====
    {
        id: 'qa-q137', unit: 'qa-unit-29', subject: 'Special Topics',
        topic: 'Magic Squares', difficulty: 'easy',
        question: 'In a magic square, all rows, columns, and diagonals have the same ______.',
        options: [
            { label: 'A', text: 'Product' }, { label: 'B', text: 'Sum' },
            { label: 'C', text: 'Difference' }, { label: 'D', text: 'Quotient' },
            { label: 'E', text: 'Number' }
        ],
        correctOption: 'B',
        explanation: 'In a magic square, all rows, columns, and diagonals add up to the same sum.'
    },
    {
        id: 'qa-q138', unit: 'qa-unit-29', subject: 'Special Topics',
        topic: 'Magic Squares', difficulty: 'medium',
        question: 'In a 3×3 magic square using numbers 1-9, what is the magic sum?',
        options: [
            { label: 'A', text: '9' }, { label: 'B', text: '12' },
            { label: 'C', text: '15' }, { label: 'D', text: '18' },
            { label: 'E', text: '45' }
        ],
        correctOption: 'C',
        explanation: 'Sum of 1-9 = 45. Divided by 3 rows = 15. The magic sum is 15.'
    },
    {
        id: 'qa-q139', unit: 'qa-unit-29', subject: 'Special Topics',
        topic: 'Magic Squares', difficulty: 'medium',
        question: 'In a 3×3 magic square (sum = 15), the first row is: 2, 7, 6. The second row is: 9, 5, __. What is __?',
        options: [
            { label: 'A', text: '1' }, { label: 'B', text: '3' },
            { label: 'C', text: '4' }, { label: 'D', text: '8' },
            { label: 'E', text: '10' }
        ],
        correctOption: 'A',
        explanation: '9 + 5 + ? = 15, so ? = 15 − 14 = 1.'
    },
    {
        id: 'qa-q140', unit: 'qa-unit-29', subject: 'Special Topics',
        topic: 'Magic Squares', difficulty: 'hard',
        question: 'In a magic square (sum = 15), the middle number is always:',
        options: [
            { label: 'A', text: '3' }, { label: 'B', text: '4' },
            { label: 'C', text: '5' }, { label: 'D', text: '6' },
            { label: 'E', text: '7' }
        ],
        correctOption: 'C',
        explanation: 'In a 3×3 magic square using 1-9, the centre number is always 5 (the middle value).'
    },
    {
        id: 'qa-q141', unit: 'qa-unit-29', subject: 'Special Topics',
        topic: 'Magic Squares', difficulty: 'hard',
        question: 'In a 3×3 magic square with sum 12, one row has: 5, ?, 3. What is ?',
        options: [
            { label: 'A', text: '2' }, { label: 'B', text: '3' },
            { label: 'C', text: '4' }, { label: 'D', text: '5' },
            { label: 'E', text: '6' }
        ],
        correctOption: 'C',
        explanation: '5 + ? + 3 = 12, so ? = 12 − 8 = 4.'
    },
    {
        id: 'qa-q142', unit: 'qa-unit-29', subject: 'Special Topics',
        topic: 'Magic Squares', difficulty: 'medium',
        question: 'In a simple 2×2 grid, if the sum of each row is 10: Row 1 is 3, 7. Row 2 is 6, __. What is __?',
        options: [
            { label: 'A', text: '3' }, { label: 'B', text: '4' },
            { label: 'C', text: '5' }, { label: 'D', text: '7' },
            { label: 'E', text: '10' }
        ],
        correctOption: 'B',
        explanation: '6 + ? = 10, so ? = 4.'
    },

    // ===== QA Unit 30: Roman Numbers =====
    {
        id: 'qa-q143', unit: 'qa-unit-30', subject: 'Special Topics',
        topic: 'Roman Numbers', difficulty: 'easy',
        question: 'What is the Roman numeral for 5?',
        options: [
            { label: 'A', text: 'I' }, { label: 'B', text: 'V' },
            { label: 'C', text: 'X' }, { label: 'D', text: 'L' },
            { label: 'E', text: 'C' }
        ],
        correctOption: 'B',
        explanation: 'V = 5 in Roman numerals. I=1, X=10, L=50, C=100.'
    },
    {
        id: 'qa-q144', unit: 'qa-unit-30', subject: 'Special Topics',
        topic: 'Roman Numbers', difficulty: 'easy',
        question: 'What number does XII represent?',
        options: [
            { label: 'A', text: '7' }, { label: 'B', text: '10' },
            { label: 'C', text: '11' }, { label: 'D', text: '12' },
            { label: 'E', text: '20' }
        ],
        correctOption: 'D',
        explanation: 'XII = X + I + I = 10 + 1 + 1 = 12.'
    },
    {
        id: 'qa-q145', unit: 'qa-unit-30', subject: 'Special Topics',
        topic: 'Roman Numbers', difficulty: 'easy',
        question: 'What is the Roman numeral for 50?',
        options: [
            { label: 'A', text: 'V' }, { label: 'B', text: 'X' },
            { label: 'C', text: 'L' }, { label: 'D', text: 'C' },
            { label: 'E', text: 'D' }
        ],
        correctOption: 'C',
        explanation: 'L = 50. V=5, X=10, C=100, D=500.'
    },
    {
        id: 'qa-q146', unit: 'qa-unit-30', subject: 'Special Topics',
        topic: 'Roman Numbers', difficulty: 'medium',
        question: 'What number does IX represent?',
        options: [
            { label: 'A', text: '4' }, { label: 'B', text: '6' },
            { label: 'C', text: '9' }, { label: 'D', text: '11' },
            { label: 'E', text: '19' }
        ],
        correctOption: 'C',
        explanation: 'IX = 10 − 1 = 9. When I comes before X, you subtract.'
    },
    {
        id: 'qa-q147', unit: 'qa-unit-30', subject: 'Special Topics',
        topic: 'Roman Numbers', difficulty: 'medium',
        question: 'Write 14 in Roman numerals:',
        options: [
            { label: 'A', text: 'XVI' }, { label: 'B', text: 'XIV' },
            { label: 'C', text: 'IVX' }, { label: 'D', text: 'XIIII' },
            { label: 'E', text: 'VIX' }
        ],
        correctOption: 'B',
        explanation: '14 = 10 + 4 = X + IV = XIV.'
    },
    {
        id: 'qa-q148', unit: 'qa-unit-30', subject: 'Special Topics',
        topic: 'Roman Numbers', difficulty: 'medium',
        question: 'What is XXV in normal numbers?',
        options: [
            { label: 'A', text: '15' }, { label: 'B', text: '20' },
            { label: 'C', text: '25' }, { label: 'D', text: '35' },
            { label: 'E', text: '55' }
        ],
        correctOption: 'C',
        explanation: 'XXV = X + X + V = 10 + 10 + 5 = 25.'
    },
    {
        id: 'qa-q149', unit: 'qa-unit-30', subject: 'Special Topics',
        topic: 'Roman Numbers', difficulty: 'hard',
        question: 'What is XLIV in normal numbers?',
        options: [
            { label: 'A', text: '34' }, { label: 'B', text: '44' },
            { label: 'C', text: '46' }, { label: 'D', text: '54' },
            { label: 'E', text: '64' }
        ],
        correctOption: 'B',
        explanation: 'XL = 40, IV = 4. XLIV = 40 + 4 = 44.'
    },
    {
        id: 'qa-q150', unit: 'qa-unit-30', subject: 'Special Topics',
        topic: 'Roman Numbers', difficulty: 'hard',
        question: 'Write 99 in Roman numerals:',
        options: [
            { label: 'A', text: 'IC' }, { label: 'B', text: 'XCIX' },
            { label: 'C', text: 'LXLIX' }, { label: 'D', text: 'IXXI' },
            { label: 'E', text: 'XCVIIII' }
        ],
        correctOption: 'B',
        explanation: '99 = 90 + 9 = XC + IX = XCIX.'
    },
];

export default quantitativeQuizQuestions;
