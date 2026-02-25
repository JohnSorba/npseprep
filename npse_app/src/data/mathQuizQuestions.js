// Mathematics Quiz Questions – NPSE MBSSE Class 6 Syllabus
// 5 questions per unit × 30 units = 150 MCQs

const mathQuizQuestions = [

    // ===== UNIT 1: Numbers and Numeration =====
    {
        id: 'math-q1', unit: 'math-unit-1', topic: 'Numbers and Numeration', difficulty: 'easy',
        question: 'What is the place value of the digit 4 in 3,542,168?',
        options: [
            { label: 'A', text: 'Thousands' }, { label: 'B', text: 'Ten Thousands' },
            { label: 'C', text: 'Hundreds' }, { label: 'D', text: 'Hundred Thousands' },
            { label: 'E', text: 'Millions' }
        ],
        correctOption: 'B',
        explanation: 'In 3,542,168 the digit 4 sits in the ten-thousands position.'
    },
    {
        id: 'math-q2', unit: 'math-unit-1', topic: 'Numbers and Numeration', difficulty: 'easy',
        question: 'What is 62,504 in expanded form?',
        options: [
            { label: 'A', text: '60,000 + 2,000 + 500 + 4' },
            { label: 'B', text: '62,000 + 500 + 4' },
            { label: 'C', text: '60,000 + 2,000 + 50 + 4' },
            { label: 'D', text: '6,000 + 2,000 + 500 + 4' },
            { label: 'E', text: '60,000 + 2,500 + 4' }
        ],
        correctOption: 'A',
        explanation: '62,504 = 60,000 + 2,000 + 500 + 0 + 4.'
    },
    {
        id: 'math-q3', unit: 'math-unit-1', topic: 'Numbers and Numeration', difficulty: 'medium',
        question: 'Which number is "Four million, fifty thousand and three"?',
        options: [
            { label: 'A', text: '4,500,003' }, { label: 'B', text: '4,050,003' },
            { label: 'C', text: '4,050,300' }, { label: 'D', text: '450,003' },
            { label: 'E', text: '4,050,030' }
        ],
        correctOption: 'B',
        explanation: 'Four million = 4,000,000; fifty thousand = 50,000; three = 3. Total = 4,050,003.'
    },
    {
        id: 'math-q4', unit: 'math-unit-1', topic: 'Numbers and Numeration', difficulty: 'easy',
        question: 'Which of these numbers is the largest?',
        options: [
            { label: 'A', text: '1,500,000' }, { label: 'B', text: '2,000,000' },
            { label: 'C', text: '999,999' }, { label: 'D', text: '2,500,000' },
            { label: 'E', text: '1,999,999' }
        ],
        correctOption: 'D',
        explanation: '2,500,000 is the greatest. Compare the millions digit first, then hundred thousands.'
    },
    {
        id: 'math-q5', unit: 'math-unit-1', topic: 'Numbers and Numeration', difficulty: 'medium',
        question: 'When reading a large number, you group digits in threes starting from the:',
        options: [
            { label: 'A', text: 'Left' }, { label: 'B', text: 'Middle' },
            { label: 'C', text: 'Right' }, { label: 'D', text: 'Top' },
            { label: 'E', text: 'Decimal point' }
        ],
        correctOption: 'C',
        explanation: 'You start from the RIGHT and group digits in threes (ones, thousands, millions).'
    },

    // ===== UNIT 2: Even, Odd and Prime Numbers =====
    {
        id: 'math-q6', unit: 'math-unit-2', topic: 'Even, Odd and Prime Numbers', difficulty: 'easy',
        question: 'Which of these numbers is a prime number?',
        options: [
            { label: 'A', text: '9' }, { label: 'B', text: '15' },
            { label: 'C', text: '21' }, { label: 'D', text: '23' },
            { label: 'E', text: '25' }
        ],
        correctOption: 'D',
        explanation: '23 has only two factors: 1 and 23. The others (9, 15, 21, 25) have more than two factors.'
    },
    {
        id: 'math-q7', unit: 'math-unit-2', topic: 'Even, Odd and Prime Numbers', difficulty: 'easy',
        question: 'Which number is NOT even?',
        options: [
            { label: 'A', text: '14' }, { label: 'B', text: '28' },
            { label: 'C', text: '37' }, { label: 'D', text: '46' },
            { label: 'E', text: '50' }
        ],
        correctOption: 'C',
        explanation: '37 ends in 7, so it is odd. Even numbers end in 0, 2, 4, 6, or 8.'
    },
    {
        id: 'math-q8', unit: 'math-unit-2', topic: 'Even, Odd and Prime Numbers', difficulty: 'medium',
        question: 'What is the HCF of 12 and 18?',
        options: [
            { label: 'A', text: '2' }, { label: 'B', text: '3' },
            { label: 'C', text: '6' }, { label: 'D', text: '12' },
            { label: 'E', text: '36' }
        ],
        correctOption: 'C',
        explanation: 'Factors of 12: 1,2,3,4,6,12. Factors of 18: 1,2,3,6,9,18. Highest common factor = 6.'
    },
    {
        id: 'math-q9', unit: 'math-unit-2', topic: 'Even, Odd and Prime Numbers', difficulty: 'medium',
        question: 'What is the LCM of 4 and 6?',
        options: [
            { label: 'A', text: '2' }, { label: 'B', text: '6' },
            { label: 'C', text: '12' }, { label: 'D', text: '24' },
            { label: 'E', text: '48' }
        ],
        correctOption: 'C',
        explanation: 'Multiples of 4: 4,8,12… Multiples of 6: 6,12… The lowest common multiple is 12.'
    },
    {
        id: 'math-q10', unit: 'math-unit-2', topic: 'Even, Odd and Prime Numbers', difficulty: 'easy',
        question: 'The number 1 is:',
        options: [
            { label: 'A', text: 'Prime' }, { label: 'B', text: 'Composite' },
            { label: 'C', text: 'Even' }, { label: 'D', text: 'Neither prime nor composite' },
            { label: 'E', text: 'A factor of nothing' }
        ],
        correctOption: 'D',
        explanation: '1 has only one factor (itself), so it is neither prime (needs exactly 2 factors) nor composite.'
    },

    // ===== UNIT 3: Approximations =====
    {
        id: 'math-q11', unit: 'math-unit-3', topic: 'Approximations', difficulty: 'easy',
        question: 'What is 567 rounded to the nearest 10?',
        options: [
            { label: 'A', text: '560' }, { label: 'B', text: '570' },
            { label: 'C', text: '500' }, { label: 'D', text: '600' },
            { label: 'E', text: '565' }
        ],
        correctOption: 'B',
        explanation: 'The ones digit is 7 (≥ 5), so we round up: 567 → 570.'
    },
    {
        id: 'math-q12', unit: 'math-unit-3', topic: 'Approximations', difficulty: 'easy',
        question: 'What is 2,456 rounded to the nearest 100?',
        options: [
            { label: 'A', text: '2,400' }, { label: 'B', text: '2,460' },
            { label: 'C', text: '2,500' }, { label: 'D', text: '2,000' },
            { label: 'E', text: '3,000' }
        ],
        correctOption: 'C',
        explanation: 'The tens digit is 5 (≥ 5), so we round up: 2,456 → 2,500.'
    },
    {
        id: 'math-q13', unit: 'math-unit-3', topic: 'Approximations', difficulty: 'medium',
        question: 'What is 7,250 rounded to the nearest 1,000?',
        options: [
            { label: 'A', text: '7,000' }, { label: 'B', text: '7,300' },
            { label: 'C', text: '7,200' }, { label: 'D', text: '8,000' },
            { label: 'E', text: '7,500' }
        ],
        correctOption: 'A',
        explanation: 'The hundreds digit is 2 (< 5), so we round down: 7,250 → 7,000.'
    },
    {
        id: 'math-q14', unit: 'math-unit-3', topic: 'Approximations', difficulty: 'easy',
        question: 'When rounding, if the key digit is 5 or more, you should:',
        options: [
            { label: 'A', text: 'Round down' }, { label: 'B', text: 'Keep it the same' },
            { label: 'C', text: 'Round up' }, { label: 'D', text: 'Remove it' },
            { label: 'E', text: 'Double it' }
        ],
        correctOption: 'C',
        explanation: 'The rounding rule: digit ≥ 5 means round UP; digit < 5 means round DOWN.'
    },
    {
        id: 'math-q15', unit: 'math-unit-3', topic: 'Approximations', difficulty: 'medium',
        question: 'What is 45,678 rounded to the nearest 1,000?',
        options: [
            { label: 'A', text: '45,000' }, { label: 'B', text: '45,700' },
            { label: 'C', text: '46,000' }, { label: 'D', text: '50,000' },
            { label: 'E', text: '45,680' }
        ],
        correctOption: 'C',
        explanation: 'The hundreds digit is 6 (≥ 5), so round up: 45,678 → 46,000.'
    },

    // ===== UNIT 4: Fractions =====
    {
        id: 'math-q16', unit: 'math-unit-4', topic: 'Fractions', difficulty: 'easy',
        question: 'In the fraction 3/4, what is the number 3 called?',
        options: [
            { label: 'A', text: 'Denominator' }, { label: 'B', text: 'Numerator' },
            { label: 'C', text: 'Whole number' }, { label: 'D', text: 'Remainder' },
            { label: 'E', text: 'Factor' }
        ],
        correctOption: 'B',
        explanation: 'The top number in a fraction is the numerator (parts we have). The bottom is the denominator.'
    },
    {
        id: 'math-q17', unit: 'math-unit-4', topic: 'Fractions', difficulty: 'easy',
        question: 'Which of these is an improper fraction?',
        options: [
            { label: 'A', text: '2/3' }, { label: 'B', text: '3/4' },
            { label: 'C', text: '7/3' }, { label: 'D', text: '1/2' },
            { label: 'E', text: '5/8' }
        ],
        correctOption: 'C',
        explanation: 'An improper fraction has a numerator greater than or equal to the denominator. 7 > 3.'
    },
    {
        id: 'math-q18', unit: 'math-unit-4', topic: 'Fractions', difficulty: 'medium',
        question: 'What is 2 3/4 as an improper fraction?',
        options: [
            { label: 'A', text: '8/4' }, { label: 'B', text: '9/4' },
            { label: 'C', text: '10/4' }, { label: 'D', text: '11/4' },
            { label: 'E', text: '7/4' }
        ],
        correctOption: 'D',
        explanation: '(2 × 4) + 3 = 11, so 2 3/4 = 11/4.'
    },
    {
        id: 'math-q19', unit: 'math-unit-4', topic: 'Fractions', difficulty: 'medium',
        question: 'What is 1/2 + 1/3?',
        options: [
            { label: 'A', text: '2/5' }, { label: 'B', text: '1/5' },
            { label: 'C', text: '5/6' }, { label: 'D', text: '3/6' },
            { label: 'E', text: '2/6' }
        ],
        correctOption: 'C',
        explanation: 'Common denominator is 6. 1/2 = 3/6, 1/3 = 2/6. So 3/6 + 2/6 = 5/6.'
    },
    {
        id: 'math-q20', unit: 'math-unit-4', topic: 'Fractions', difficulty: 'medium',
        question: 'What is 2/3 × 4/5?',
        options: [
            { label: 'A', text: '6/8' }, { label: 'B', text: '8/15' },
            { label: 'C', text: '6/15' }, { label: 'D', text: '8/8' },
            { label: 'E', text: '2/15' }
        ],
        correctOption: 'B',
        explanation: 'Multiply numerators: 2×4 = 8. Multiply denominators: 3×5 = 15. Answer: 8/15.'
    },

    // ===== UNIT 5: Decimals =====
    {
        id: 'math-q21', unit: 'math-unit-5', topic: 'Decimals', difficulty: 'easy',
        question: 'What is 3/4 as a decimal?',
        options: [
            { label: 'A', text: '0.25' }, { label: 'B', text: '0.34' },
            { label: 'C', text: '0.5' }, { label: 'D', text: '0.75' },
            { label: 'E', text: '0.7' }
        ],
        correctOption: 'D',
        explanation: '3 ÷ 4 = 0.75.'
    },
    {
        id: 'math-q22', unit: 'math-unit-5', topic: 'Decimals', difficulty: 'easy',
        question: 'Which is larger: 0.3 or 0.25?',
        options: [
            { label: 'A', text: '0.25' }, { label: 'B', text: '0.3' },
            { label: 'C', text: 'They are equal' }, { label: 'D', text: 'Cannot compare' },
            { label: 'E', text: '0.025' }
        ],
        correctOption: 'B',
        explanation: '0.3 = 0.30 which is greater than 0.25.'
    },
    {
        id: 'math-q23', unit: 'math-unit-5', topic: 'Decimals', difficulty: 'medium',
        question: 'What is 3.5 + 2.75?',
        options: [
            { label: 'A', text: '5.25' }, { label: 'B', text: '6.25' },
            { label: 'C', text: '5.75' }, { label: 'D', text: '6.75' },
            { label: 'E', text: '6.00' }
        ],
        correctOption: 'B',
        explanation: 'Line up decimals: 3.50 + 2.75 = 6.25.'
    },
    {
        id: 'math-q24', unit: 'math-unit-5', topic: 'Decimals', difficulty: 'medium',
        question: 'What is 10 − 3.75?',
        options: [
            { label: 'A', text: '6.25' }, { label: 'B', text: '7.25' },
            { label: 'C', text: '6.75' }, { label: 'D', text: '7.75' },
            { label: 'E', text: '6.35' }
        ],
        correctOption: 'A',
        explanation: '10.00 − 3.75 = 6.25.'
    },
    {
        id: 'math-q25', unit: 'math-unit-5', topic: 'Decimals', difficulty: 'easy',
        question: 'In the number 25.347, what is the place value of the digit 4?',
        options: [
            { label: 'A', text: 'Tenths' }, { label: 'B', text: 'Hundredths' },
            { label: 'C', text: 'Thousandths' }, { label: 'D', text: 'Ones' },
            { label: 'E', text: 'Tens' }
        ],
        correctOption: 'B',
        explanation: 'After the decimal: 3 is tenths, 4 is hundredths, 7 is thousandths.'
    },

    // ===== UNIT 6: Addition and Subtraction =====
    {
        id: 'math-q26', unit: 'math-unit-6', topic: 'Addition and Subtraction', difficulty: 'easy',
        question: 'What is 456 + 289?',
        options: [
            { label: 'A', text: '735' }, { label: 'B', text: '745' },
            { label: 'C', text: '755' }, { label: 'D', text: '645' },
            { label: 'E', text: '845' }
        ],
        correctOption: 'B',
        explanation: '456 + 289 = 745. Add ones (6+9=15, carry 1), tens (5+8+1=14, carry 1), hundreds (4+2+1=7).'
    },
    {
        id: 'math-q27', unit: 'math-unit-6', topic: 'Addition and Subtraction', difficulty: 'easy',
        question: 'What is 800 − 256?',
        options: [
            { label: 'A', text: '544' }, { label: 'B', text: '554' },
            { label: 'C', text: '646' }, { label: 'D', text: '454' },
            { label: 'E', text: '564' }
        ],
        correctOption: 'A',
        explanation: '800 − 256 = 544. Borrow from hundreds since ones and tens are 0.'
    },
    {
        id: 'math-q28', unit: 'math-unit-6', topic: 'Addition and Subtraction', difficulty: 'medium',
        question: 'A shop sold 1,234 items on Monday and 2,156 on Tuesday. What is the total?',
        options: [
            { label: 'A', text: '3,290' }, { label: 'B', text: '3,380' },
            { label: 'C', text: '3,390' }, { label: 'D', text: '3,490' },
            { label: 'E', text: '3,400' }
        ],
        correctOption: 'C',
        explanation: '1,234 + 2,156 = 3,390.'
    },
    {
        id: 'math-q29', unit: 'math-unit-6', topic: 'Addition and Subtraction', difficulty: 'medium',
        question: 'John had Le 5,000 and spent Le 3,750. How much does he have left?',
        options: [
            { label: 'A', text: 'Le 1,150' }, { label: 'B', text: 'Le 1,250' },
            { label: 'C', text: 'Le 1,350' }, { label: 'D', text: 'Le 2,250' },
            { label: 'E', text: 'Le 1,750' }
        ],
        correctOption: 'B',
        explanation: '5,000 − 3,750 = 1,250.'
    },
    {
        id: 'math-q30', unit: 'math-unit-6', topic: 'Addition and Subtraction', difficulty: 'easy',
        question: 'What is 2,547 + 1,836?',
        options: [
            { label: 'A', text: '4,383' }, { label: 'B', text: '4,373' },
            { label: 'C', text: '4,283' }, { label: 'D', text: '3,383' },
            { label: 'E', text: '4,483' }
        ],
        correctOption: 'A',
        explanation: '2,547 + 1,836 = 4,383.'
    },

    // ===== UNIT 7: Multiplication and Division =====
    {
        id: 'math-q31', unit: 'math-unit-7', topic: 'Multiplication and Division', difficulty: 'easy',
        question: 'What is 5 × 1,000?',
        options: [
            { label: 'A', text: '50' }, { label: 'B', text: '500' },
            { label: 'C', text: '5,000' }, { label: 'D', text: '50,000' },
            { label: 'E', text: '5,500' }
        ],
        correctOption: 'C',
        explanation: 'Multiplying by 1,000 adds three zeros: 5 × 1,000 = 5,000.'
    },
    {
        id: 'math-q32', unit: 'math-unit-7', topic: 'Multiplication and Division', difficulty: 'easy',
        question: 'What is 500 ÷ 100?',
        options: [
            { label: 'A', text: '0.5' }, { label: 'B', text: '5' },
            { label: 'C', text: '50' }, { label: 'D', text: '500' },
            { label: 'E', text: '0.05' }
        ],
        correctOption: 'B',
        explanation: 'Dividing by 100 moves the decimal 2 places left: 500 ÷ 100 = 5.'
    },
    {
        id: 'math-q33', unit: 'math-unit-7', topic: 'Multiplication and Division', difficulty: 'medium',
        question: 'What is 23 × 45?',
        options: [
            { label: 'A', text: '1,025' }, { label: 'B', text: '1,035' },
            { label: 'C', text: '1,045' }, { label: 'D', text: '1,135' },
            { label: 'E', text: '935' }
        ],
        correctOption: 'B',
        explanation: '23 × 5 = 115, 23 × 40 = 920. Total = 115 + 920 = 1,035.'
    },
    {
        id: 'math-q34', unit: 'math-unit-7', topic: 'Multiplication and Division', difficulty: 'medium',
        question: 'What is 864 ÷ 12?',
        options: [
            { label: 'A', text: '62' }, { label: 'B', text: '70' },
            { label: 'C', text: '72' }, { label: 'D', text: '82' },
            { label: 'E', text: '74' }
        ],
        correctOption: 'C',
        explanation: '12 × 72 = 864, so 864 ÷ 12 = 72.'
    },
    {
        id: 'math-q35', unit: 'math-unit-7', topic: 'Multiplication and Division', difficulty: 'easy',
        question: 'When you multiply a number by 100, the decimal point moves:',
        options: [
            { label: 'A', text: '1 place left' }, { label: 'B', text: '2 places left' },
            { label: 'C', text: '1 place right' }, { label: 'D', text: '2 places right' },
            { label: 'E', text: '3 places right' }
        ],
        correctOption: 'D',
        explanation: 'Multiplying by 100 moves the decimal 2 places to the RIGHT.'
    },

    // ===== UNIT 8: Operations on Fractions =====
    {
        id: 'math-q36', unit: 'math-unit-8', topic: 'Operations on Fractions', difficulty: 'easy',
        question: 'What is 12/18 in its simplest form?',
        options: [
            { label: 'A', text: '3/4' }, { label: 'B', text: '2/3' },
            { label: 'C', text: '4/6' }, { label: 'D', text: '6/9' },
            { label: 'E', text: '1/2' }
        ],
        correctOption: 'B',
        explanation: 'HCF of 12 and 18 is 6. 12÷6 = 2, 18÷6 = 3. So 12/18 = 2/3.'
    },
    {
        id: 'math-q37', unit: 'math-unit-8', topic: 'Operations on Fractions', difficulty: 'medium',
        question: 'What is 3/4 ÷ 1/2?',
        options: [
            { label: 'A', text: '3/8' }, { label: 'B', text: '3/2' },
            { label: 'C', text: '1/2' }, { label: 'D', text: '2/3' },
            { label: 'E', text: '6/4' }
        ],
        correctOption: 'B',
        explanation: 'Keep, Change, Flip: 3/4 × 2/1 = 6/4 = 3/2 = 1 1/2.'
    },
    {
        id: 'math-q38', unit: 'math-unit-8', topic: 'Operations on Fractions', difficulty: 'easy',
        question: 'The "Keep, Change, Flip" method is used for:',
        options: [
            { label: 'A', text: 'Adding fractions' }, { label: 'B', text: 'Subtracting fractions' },
            { label: 'C', text: 'Multiplying fractions' }, { label: 'D', text: 'Dividing fractions' },
            { label: 'E', text: 'Simplifying fractions' }
        ],
        correctOption: 'D',
        explanation: 'Keep the first fraction, Change ÷ to ×, Flip the second fraction.'
    },
    {
        id: 'math-q39', unit: 'math-unit-8', topic: 'Operations on Fractions', difficulty: 'easy',
        question: 'What is 20/25 in its simplest form?',
        options: [
            { label: 'A', text: '2/5' }, { label: 'B', text: '4/5' },
            { label: 'C', text: '5/5' }, { label: 'D', text: '10/15' },
            { label: 'E', text: '3/4' }
        ],
        correctOption: 'B',
        explanation: 'HCF of 20 and 25 is 5. 20÷5 = 4, 25÷5 = 5. So 20/25 = 4/5.'
    },
    {
        id: 'math-q40', unit: 'math-unit-8', topic: 'Operations on Fractions', difficulty: 'hard',
        question: 'What is 5/6 ÷ 2/3?',
        options: [
            { label: 'A', text: '10/18' }, { label: 'B', text: '5/4' },
            { label: 'C', text: '3/4' }, { label: 'D', text: '15/12' },
            { label: 'E', text: '7/6' }
        ],
        correctOption: 'B',
        explanation: 'Keep, Change, Flip: 5/6 × 3/2 = 15/12 = 5/4 = 1 1/4.'
    },

    // ===== UNIT 9: Decimal Operations =====
    {
        id: 'math-q41', unit: 'math-unit-9', topic: 'Decimal Operations', difficulty: 'easy',
        question: 'What is 4.56 + 2.8?',
        options: [
            { label: 'A', text: '7.36' }, { label: 'B', text: '6.36' },
            { label: 'C', text: '7.64' }, { label: 'D', text: '6.64' },
            { label: 'E', text: '7.44' }
        ],
        correctOption: 'A',
        explanation: 'Line up decimals: 4.56 + 2.80 = 7.36.'
    },
    {
        id: 'math-q42', unit: 'math-unit-9', topic: 'Decimal Operations', difficulty: 'medium',
        question: 'What is 9.4 − 3.75?',
        options: [
            { label: 'A', text: '5.35' }, { label: 'B', text: '5.65' },
            { label: 'C', text: '6.65' }, { label: 'D', text: '5.75' },
            { label: 'E', text: '6.35' }
        ],
        correctOption: 'B',
        explanation: '9.40 − 3.75 = 5.65.'
    },
    {
        id: 'math-q43', unit: 'math-unit-9', topic: 'Decimal Operations', difficulty: 'easy',
        question: 'Which is the smallest: 0.5, 0.45, 0.55?',
        options: [
            { label: 'A', text: '0.5' }, { label: 'B', text: '0.45' },
            { label: 'C', text: '0.55' }, { label: 'D', text: 'They are all equal' },
            { label: 'E', text: '0.50' }
        ],
        correctOption: 'B',
        explanation: '0.45 < 0.50 < 0.55. So 0.45 is the smallest.'
    },
    {
        id: 'math-q44', unit: 'math-unit-9', topic: 'Decimal Operations', difficulty: 'medium',
        question: 'What is 8.5 − 3.25?',
        options: [
            { label: 'A', text: '5.75' }, { label: 'B', text: '5.25' },
            { label: 'C', text: '5.35' }, { label: 'D', text: '4.25' },
            { label: 'E', text: '4.75' }
        ],
        correctOption: 'B',
        explanation: '8.50 − 3.25 = 5.25.'
    },
    {
        id: 'math-q45', unit: 'math-unit-9', topic: 'Decimal Operations', difficulty: 'medium',
        question: 'What is 12.50 − 7.85?',
        options: [
            { label: 'A', text: '4.75' }, { label: 'B', text: '5.65' },
            { label: 'C', text: '4.65' }, { label: 'D', text: '5.35' },
            { label: 'E', text: '4.35' }
        ],
        correctOption: 'C',
        explanation: '12.50 − 7.85 = 4.65.'
    },

    // ===== UNIT 10: Area and Perimeter =====
    {
        id: 'math-q46', unit: 'math-unit-10', topic: 'Area and Perimeter', difficulty: 'easy',
        question: 'What is the area of a rectangle with length 8 cm and width 5 cm?',
        options: [
            { label: 'A', text: '13 cm²' }, { label: 'B', text: '26 cm²' },
            { label: 'C', text: '40 cm²' }, { label: 'D', text: '80 cm²' },
            { label: 'E', text: '35 cm²' }
        ],
        correctOption: 'C',
        explanation: 'Area = L × W = 8 × 5 = 40 cm².'
    },
    {
        id: 'math-q47', unit: 'math-unit-10', topic: 'Area and Perimeter', difficulty: 'easy',
        question: 'What is the perimeter of the same rectangle (8 cm × 5 cm)?',
        options: [
            { label: 'A', text: '13 cm' }, { label: 'B', text: '26 cm' },
            { label: 'C', text: '40 cm' }, { label: 'D', text: '30 cm' },
            { label: 'E', text: '32 cm' }
        ],
        correctOption: 'B',
        explanation: 'Perimeter = 2 × (L + W) = 2 × (8 + 5) = 2 × 13 = 26 cm.'
    },
    {
        id: 'math-q48', unit: 'math-unit-10', topic: 'Area and Perimeter', difficulty: 'easy',
        question: 'What is the area of a square with side 6 cm?',
        options: [
            { label: 'A', text: '12 cm²' }, { label: 'B', text: '24 cm²' },
            { label: 'C', text: '36 cm²' }, { label: 'D', text: '30 cm²' },
            { label: 'E', text: '18 cm²' }
        ],
        correctOption: 'C',
        explanation: 'Area of square = s × s = 6 × 6 = 36 cm².'
    },
    {
        id: 'math-q49', unit: 'math-unit-10', topic: 'Area and Perimeter', difficulty: 'medium',
        question: 'What is the area of a triangle with base 10 cm and height 6 cm?',
        options: [
            { label: 'A', text: '60 cm²' }, { label: 'B', text: '16 cm²' },
            { label: 'C', text: '30 cm²' }, { label: 'D', text: '20 cm²' },
            { label: 'E', text: '40 cm²' }
        ],
        correctOption: 'C',
        explanation: 'Area = 1/2 × base × height = 1/2 × 10 × 6 = 30 cm².'
    },
    {
        id: 'math-q50', unit: 'math-unit-10', topic: 'Area and Perimeter', difficulty: 'medium',
        question: 'A rectangle has an area of 84 cm² and a length of 12 cm. What is the width?',
        options: [
            { label: 'A', text: '6 cm' }, { label: 'B', text: '7 cm' },
            { label: 'C', text: '8 cm' }, { label: 'D', text: '9 cm' },
            { label: 'E', text: '10 cm' }
        ],
        correctOption: 'B',
        explanation: 'Area = L × W, so W = Area ÷ L = 84 ÷ 12 = 7 cm.'
    },

    // ===== UNIT 11: Time and Speed =====
    {
        id: 'math-q51', unit: 'math-unit-11', topic: 'Time and Speed', difficulty: 'easy',
        question: 'A car travels 240 km in 4 hours. What is its speed?',
        options: [
            { label: 'A', text: '40 km/h' }, { label: 'B', text: '50 km/h' },
            { label: 'C', text: '60 km/h' }, { label: 'D', text: '80 km/h' },
            { label: 'E', text: '120 km/h' }
        ],
        correctOption: 'C',
        explanation: 'Speed = Distance ÷ Time = 240 ÷ 4 = 60 km/h.'
    },
    {
        id: 'math-q52', unit: 'math-unit-11', topic: 'Time and Speed', difficulty: 'easy',
        question: 'A bus travels at 50 km/h for 3 hours. How far does it go?',
        options: [
            { label: 'A', text: '100 km' }, { label: 'B', text: '130 km' },
            { label: 'C', text: '150 km' }, { label: 'D', text: '200 km' },
            { label: 'E', text: '250 km' }
        ],
        correctOption: 'C',
        explanation: 'Distance = Speed × Time = 50 × 3 = 150 km.'
    },
    {
        id: 'math-q53', unit: 'math-unit-11', topic: 'Time and Speed', difficulty: 'medium',
        question: 'A bicycle covers 30 km at 15 km/h. How long does it take?',
        options: [
            { label: 'A', text: '1 hour' }, { label: 'B', text: '1.5 hours' },
            { label: 'C', text: '2 hours' }, { label: 'D', text: '3 hours' },
            { label: 'E', text: '2.5 hours' }
        ],
        correctOption: 'C',
        explanation: 'Time = Distance ÷ Speed = 30 ÷ 15 = 2 hours.'
    },
    {
        id: 'math-q54', unit: 'math-unit-11', topic: 'Time and Speed', difficulty: 'medium',
        question: 'Which formula is correct for finding distance?',
        options: [
            { label: 'A', text: 'Distance = Speed ÷ Time' }, { label: 'B', text: 'Distance = Speed × Time' },
            { label: 'C', text: 'Distance = Time ÷ Speed' }, { label: 'D', text: 'Distance = Speed + Time' },
            { label: 'E', text: 'Distance = Speed − Time' }
        ],
        correctOption: 'B',
        explanation: 'D = S × T. Speed multiplied by Time gives Distance.'
    },
    {
        id: 'math-q55', unit: 'math-unit-11', topic: 'Time and Speed', difficulty: 'hard',
        question: 'How many minutes are in 2.5 hours?',
        options: [
            { label: 'A', text: '120' }, { label: 'B', text: '130' },
            { label: 'C', text: '150' }, { label: 'D', text: '160' },
            { label: 'E', text: '200' }
        ],
        correctOption: 'C',
        explanation: '2.5 hours = 2 hours 30 minutes = 150 minutes (2.5 × 60).'
    },

    // ===== UNIT 12: Polygons =====
    {
        id: 'math-q56', unit: 'math-unit-12', topic: 'Polygons', difficulty: 'easy',
        question: 'How many sides does a hexagon have?',
        options: [
            { label: 'A', text: '4' }, { label: 'B', text: '5' },
            { label: 'C', text: '6' }, { label: 'D', text: '7' },
            { label: 'E', text: '8' }
        ],
        correctOption: 'C',
        explanation: 'A hexagon is a polygon with 6 sides.'
    },
    {
        id: 'math-q57', unit: 'math-unit-12', topic: 'Polygons', difficulty: 'medium',
        question: 'What is the sum of interior angles of a pentagon (5 sides)?',
        options: [
            { label: 'A', text: '360°' }, { label: 'B', text: '450°' },
            { label: 'C', text: '540°' }, { label: 'D', text: '720°' },
            { label: 'E', text: '180°' }
        ],
        correctOption: 'C',
        explanation: 'Sum = 180° × (n − 2) = 180° × 3 = 540°.'
    },
    {
        id: 'math-q58', unit: 'math-unit-12', topic: 'Polygons', difficulty: 'medium',
        question: 'Each interior angle of a regular hexagon is:',
        options: [
            { label: 'A', text: '90°' }, { label: 'B', text: '108°' },
            { label: 'C', text: '120°' }, { label: 'D', text: '135°' },
            { label: 'E', text: '150°' }
        ],
        correctOption: 'C',
        explanation: 'Sum = 720°. Each angle = 720° ÷ 6 = 120°.'
    },
    {
        id: 'math-q59', unit: 'math-unit-12', topic: 'Polygons', difficulty: 'easy',
        question: 'The sum of exterior angles of any convex polygon is:',
        options: [
            { label: 'A', text: '180°' }, { label: 'B', text: '270°' },
            { label: 'C', text: '360°' }, { label: 'D', text: '540°' },
            { label: 'E', text: 'It depends on the polygon' }
        ],
        correctOption: 'C',
        explanation: 'The sum of exterior angles of any convex polygon is always 360°.'
    },
    {
        id: 'math-q60', unit: 'math-unit-12', topic: 'Polygons', difficulty: 'hard',
        question: 'A polygon has an interior angle sum of 1,080°. How many sides does it have?',
        options: [
            { label: 'A', text: '6' }, { label: 'B', text: '7' },
            { label: 'C', text: '8' }, { label: 'D', text: '9' },
            { label: 'E', text: '10' }
        ],
        correctOption: 'C',
        explanation: '180° × (n − 2) = 1,080°. n − 2 = 6, so n = 8 sides (octagon).'
    },

    // ===== UNIT 13: Ratio and Proportions =====
    {
        id: 'math-q61', unit: 'math-unit-13', topic: 'Ratio and Proportions', difficulty: 'easy',
        question: 'Simplify the ratio 24 : 36.',
        options: [
            { label: 'A', text: '3 : 4' }, { label: 'B', text: '2 : 3' },
            { label: 'C', text: '4 : 6' }, { label: 'D', text: '6 : 8' },
            { label: 'E', text: '12 : 18' }
        ],
        correctOption: 'B',
        explanation: 'HCF of 24 and 36 is 12. 24÷12 = 2, 36÷12 = 3. Ratio = 2 : 3.'
    },
    {
        id: 'math-q62', unit: 'math-unit-13', topic: 'Ratio and Proportions', difficulty: 'medium',
        question: 'Share Le 2,000 in the ratio 3 : 2. What is the larger share?',
        options: [
            { label: 'A', text: 'Le 600' }, { label: 'B', text: 'Le 800' },
            { label: 'C', text: 'Le 1,000' }, { label: 'D', text: 'Le 1,200' },
            { label: 'E', text: 'Le 1,500' }
        ],
        correctOption: 'D',
        explanation: 'Total parts = 5. One part = 2,000 ÷ 5 = Le 400. Larger share = 3 × 400 = Le 1,200.'
    },
    {
        id: 'math-q63', unit: 'math-unit-13', topic: 'Ratio and Proportions', difficulty: 'medium',
        question: 'If 3 : 5 = 12 : x, what is x?',
        options: [
            { label: 'A', text: '10' }, { label: 'B', text: '15' },
            { label: 'C', text: '20' }, { label: 'D', text: '25' },
            { label: 'E', text: '30' }
        ],
        correctOption: 'C',
        explanation: 'Cross multiply: 3 × x = 5 × 12 → 3x = 60 → x = 20.'
    },
    {
        id: 'math-q64', unit: 'math-unit-13', topic: 'Ratio and Proportions', difficulty: 'easy',
        question: 'There are 20 boys and 15 girls. What is the ratio of boys to girls in simplest form?',
        options: [
            { label: 'A', text: '20 : 15' }, { label: 'B', text: '4 : 3' },
            { label: 'C', text: '3 : 4' }, { label: 'D', text: '5 : 3' },
            { label: 'E', text: '2 : 1' }
        ],
        correctOption: 'B',
        explanation: 'HCF of 20 and 15 is 5. 20÷5 = 4, 15÷5 = 3. Ratio = 4 : 3.'
    },
    {
        id: 'math-q65', unit: 'math-unit-13', topic: 'Ratio and Proportions', difficulty: 'medium',
        question: 'Share Le 900 in ratio 2 : 1. What is the smaller share?',
        options: [
            { label: 'A', text: 'Le 200' }, { label: 'B', text: 'Le 300' },
            { label: 'C', text: 'Le 400' }, { label: 'D', text: 'Le 450' },
            { label: 'E', text: 'Le 600' }
        ],
        correctOption: 'B',
        explanation: 'Total parts = 3. One part = 900 ÷ 3 = Le 300. Smaller share = 1 × 300 = Le 300.'
    },

    // ===== UNIT 14: Percentages =====
    {
        id: 'math-q66', unit: 'math-unit-14', topic: 'Percentages', difficulty: 'easy',
        question: 'What is 25% of 80?',
        options: [
            { label: 'A', text: '15' }, { label: 'B', text: '20' },
            { label: 'C', text: '25' }, { label: 'D', text: '40' },
            { label: 'E', text: '16' }
        ],
        correctOption: 'B',
        explanation: '25/100 × 80 = 20.'
    },
    {
        id: 'math-q67', unit: 'math-unit-14', topic: 'Percentages', difficulty: 'medium',
        question: 'What percentage is 15 out of 60?',
        options: [
            { label: 'A', text: '15%' }, { label: 'B', text: '20%' },
            { label: 'C', text: '25%' }, { label: 'D', text: '30%' },
            { label: 'E', text: '10%' }
        ],
        correctOption: 'C',
        explanation: '(15 ÷ 60) × 100 = 25%.'
    },
    {
        id: 'math-q68', unit: 'math-unit-14', topic: 'Percentages', difficulty: 'easy',
        question: 'Convert 3/5 to a percentage.',
        options: [
            { label: 'A', text: '35%' }, { label: 'B', text: '50%' },
            { label: 'C', text: '55%' }, { label: 'D', text: '60%' },
            { label: 'E', text: '65%' }
        ],
        correctOption: 'D',
        explanation: '3/5 × 100% = 60%.'
    },
    {
        id: 'math-q69', unit: 'math-unit-14', topic: 'Percentages', difficulty: 'medium',
        question: 'A price rose from Le 80 to Le 100. What is the percentage increase?',
        options: [
            { label: 'A', text: '20%' }, { label: 'B', text: '25%' },
            { label: 'C', text: '30%' }, { label: 'D', text: '15%' },
            { label: 'E', text: '80%' }
        ],
        correctOption: 'B',
        explanation: 'Increase = 20. % increase = (20 ÷ 80) × 100 = 25%.'
    },
    {
        id: 'math-q70', unit: 'math-unit-14', topic: 'Percentages', difficulty: 'medium',
        question: 'What is 30% of 150?',
        options: [
            { label: 'A', text: '35' }, { label: 'B', text: '40' },
            { label: 'C', text: '45' }, { label: 'D', text: '50' },
            { label: 'E', text: '55' }
        ],
        correctOption: 'C',
        explanation: '30/100 × 150 = 45.'
    },

    // ===== UNIT 15: Multiplying & Dividing by 10, 100, 1000 =====
    {
        id: 'math-q71', unit: 'math-unit-15', topic: 'Multiplying and Dividing by Powers of 10', difficulty: 'easy',
        question: 'What is 4.5 × 100?',
        options: [
            { label: 'A', text: '45' }, { label: 'B', text: '450' },
            { label: 'C', text: '4,500' }, { label: 'D', text: '0.45' },
            { label: 'E', text: '4.50' }
        ],
        correctOption: 'B',
        explanation: 'Move decimal 2 places right: 4.5 → 450.'
    },
    {
        id: 'math-q72', unit: 'math-unit-15', topic: 'Multiplying and Dividing by Powers of 10', difficulty: 'easy',
        question: 'What is 340 ÷ 100?',
        options: [
            { label: 'A', text: '34' }, { label: 'B', text: '3.4' },
            { label: 'C', text: '0.34' }, { label: 'D', text: '3,400' },
            { label: 'E', text: '34,000' }
        ],
        correctOption: 'B',
        explanation: 'Move decimal 2 places left: 340 → 3.4.'
    },
    {
        id: 'math-q73', unit: 'math-unit-15', topic: 'Multiplying and Dividing by Powers of 10', difficulty: 'easy',
        question: 'What is 0.7 × 100?',
        options: [
            { label: 'A', text: '7' }, { label: 'B', text: '70' },
            { label: 'C', text: '700' }, { label: 'D', text: '0.07' },
            { label: 'E', text: '0.007' }
        ],
        correctOption: 'B',
        explanation: 'Move decimal 2 places right: 0.7 → 70.'
    },
    {
        id: 'math-q74', unit: 'math-unit-15', topic: 'Multiplying and Dividing by Powers of 10', difficulty: 'medium',
        question: 'What is 5 ÷ 1,000?',
        options: [
            { label: 'A', text: '0.5' }, { label: 'B', text: '0.05' },
            { label: 'C', text: '0.005' }, { label: 'D', text: '5,000' },
            { label: 'E', text: '50' }
        ],
        correctOption: 'C',
        explanation: 'Move decimal 3 places left: 5 → 0.005.'
    },
    {
        id: 'math-q75', unit: 'math-unit-15', topic: 'Multiplying and Dividing by Powers of 10', difficulty: 'easy',
        question: 'When dividing by 10, the decimal point moves:',
        options: [
            { label: 'A', text: '1 place right' }, { label: 'B', text: '1 place left' },
            { label: 'C', text: '2 places left' }, { label: 'D', text: '2 places right' },
            { label: 'E', text: 'It stays the same' }
        ],
        correctOption: 'B',
        explanation: 'Dividing by 10 moves the decimal 1 place to the LEFT.'
    },

    // ===== UNIT 16: Multiplying and Dividing Decimals =====
    {
        id: 'math-q76', unit: 'math-unit-16', topic: 'Multiplying and Dividing Decimals', difficulty: 'easy',
        question: 'What is 3.2 × 4?',
        options: [
            { label: 'A', text: '12.8' }, { label: 'B', text: '12.2' },
            { label: 'C', text: '7.2' }, { label: 'D', text: '128' },
            { label: 'E', text: '1.28' }
        ],
        correctOption: 'A',
        explanation: '32 × 4 = 128. One decimal place → 12.8.'
    },
    {
        id: 'math-q77', unit: 'math-unit-16', topic: 'Multiplying and Dividing Decimals', difficulty: 'medium',
        question: 'What is 0.5 × 0.5?',
        options: [
            { label: 'A', text: '2.5' }, { label: 'B', text: '0.25' },
            { label: 'C', text: '0.10' }, { label: 'D', text: '1.0' },
            { label: 'E', text: '25' }
        ],
        correctOption: 'B',
        explanation: '5 × 5 = 25. Two decimal places total → 0.25.'
    },
    {
        id: 'math-q78', unit: 'math-unit-16', topic: 'Multiplying and Dividing Decimals', difficulty: 'easy',
        question: 'What is 8.4 ÷ 4?',
        options: [
            { label: 'A', text: '2.4' }, { label: 'B', text: '2.1' },
            { label: 'C', text: '4.2' }, { label: 'D', text: '1.2' },
            { label: 'E', text: '21' }
        ],
        correctOption: 'B',
        explanation: '8.4 ÷ 4 = 2.1.'
    },
    {
        id: 'math-q79', unit: 'math-unit-16', topic: 'Multiplying and Dividing Decimals', difficulty: 'medium',
        question: 'What is 6 ÷ 0.2?',
        options: [
            { label: 'A', text: '3' }, { label: 'B', text: '12' },
            { label: 'C', text: '30' }, { label: 'D', text: '1.2' },
            { label: 'E', text: '0.3' }
        ],
        correctOption: 'C',
        explanation: 'Make divisor whole: 60 ÷ 2 = 30.'
    },
    {
        id: 'math-q80', unit: 'math-unit-16', topic: 'Multiplying and Dividing Decimals', difficulty: 'medium',
        question: 'What is 2.5 × 1.2?',
        options: [
            { label: 'A', text: '3.0' }, { label: 'B', text: '3.7' },
            { label: 'C', text: '2.7' }, { label: 'D', text: '30' },
            { label: 'E', text: '3.12' }
        ],
        correctOption: 'A',
        explanation: '25 × 12 = 300. Two decimal places → 3.00 = 3.'
    },

    // ===== UNIT 17: Volume and Capacity =====
    {
        id: 'math-q81', unit: 'math-unit-17', topic: 'Volume and Capacity', difficulty: 'easy',
        question: 'What is the volume of a cube with side 5 cm?',
        options: [
            { label: 'A', text: '15 cm³' }, { label: 'B', text: '25 cm³' },
            { label: 'C', text: '100 cm³' }, { label: 'D', text: '125 cm³' },
            { label: 'E', text: '150 cm³' }
        ],
        correctOption: 'D',
        explanation: 'V = s³ = 5 × 5 × 5 = 125 cm³.'
    },
    {
        id: 'math-q82', unit: 'math-unit-17', topic: 'Volume and Capacity', difficulty: 'medium',
        question: 'A cuboid is 8 cm × 5 cm × 4 cm. What is its volume?',
        image: 'https://i.postimg.cc/vH77918K/image.png',
        options: [
            { label: 'A', text: '100 cm³' }, { label: 'B', text: '120 cm³' },
            { label: 'C', text: '140 cm³' }, { label: 'D', text: '160 cm³' },
            { label: 'E', text: '200 cm³' }
        ],
        correctOption: 'D',
        explanation: 'V = L × W × H = 8 × 5 × 4 = 160 cm³.'
    },
    {
        id: 'math-q83', unit: 'math-unit-17', topic: 'Volume and Capacity', difficulty: 'easy',
        question: 'How many millilitres are in 2 litres?',
        options: [
            { label: 'A', text: '20 ml' }, { label: 'B', text: '200 ml' },
            { label: 'C', text: '2,000 ml' }, { label: 'D', text: '20,000 ml' },
            { label: 'E', text: '2 ml' }
        ],
        correctOption: 'C',
        explanation: '1 litre = 1,000 ml. So 2 litres = 2,000 ml.'
    },
    {
        id: 'math-q84', unit: 'math-unit-17', topic: 'Volume and Capacity', difficulty: 'medium',
        question: 'A cuboid has volume 560 cm³, length 10 cm and width 8 cm. What is the height?',
        options: [
            { label: 'A', text: '5 cm' }, { label: 'B', text: '6 cm' },
            { label: 'C', text: '7 cm' }, { label: 'D', text: '8 cm' },
            { label: 'E', text: '9 cm' }
        ],
        correctOption: 'C',
        explanation: 'V = L × W × H → H = 560 ÷ (10 × 8) = 560 ÷ 80 = 7 cm.'
    },
    {
        id: 'math-q85', unit: 'math-unit-17', topic: 'Volume and Capacity', difficulty: 'easy',
        question: 'How many cm³ are in 1 litre?',
        options: [
            { label: 'A', text: '10' }, { label: 'B', text: '100' },
            { label: 'C', text: '1,000' }, { label: 'D', text: '10,000' },
            { label: 'E', text: '500' }
        ],
        correctOption: 'C',
        explanation: '1 litre = 1,000 ml = 1,000 cm³.'
    },

    // ===== UNIT 18: Angles =====
    {
        id: 'math-q86', unit: 'math-unit-18', topic: 'Angles', difficulty: 'easy',
        question: 'An angle of 45° is called:',
        options: [
            { label: 'A', text: 'Right angle' }, { label: 'B', text: 'Obtuse angle' },
            { label: 'C', text: 'Acute angle' }, { label: 'D', text: 'Straight angle' },
            { label: 'E', text: 'Reflex angle' }
        ],
        correctOption: 'C',
        explanation: 'An acute angle is less than 90°. 45° < 90°, so it is acute.'
    },
    {
        id: 'math-q87', unit: 'math-unit-18', topic: 'Angles', difficulty: 'easy',
        question: 'Angles on a straight line add up to:',
        options: [
            { label: 'A', text: '90°' }, { label: 'B', text: '180°' },
            { label: 'C', text: '270°' }, { label: 'D', text: '360°' },
            { label: 'E', text: '45°' }
        ],
        correctOption: 'B',
        explanation: 'Angles on a straight line always sum to 180°.'
    },
    {
        id: 'math-q88', unit: 'math-unit-18', topic: 'Angles', difficulty: 'medium',
        question: 'Two angles on a straight line are x and 130°. What is x?',
        options: [
            { label: 'A', text: '30°' }, { label: 'B', text: '40°' },
            { label: 'C', text: '50°' }, { label: 'D', text: '60°' },
            { label: 'E', text: '130°' }
        ],
        correctOption: 'C',
        explanation: 'x + 130° = 180° → x = 50°.'
    },
    {
        id: 'math-q89', unit: 'math-unit-18', topic: 'Angles', difficulty: 'medium',
        question: 'What is the complement of 35°?',
        options: [
            { label: 'A', text: '45°' }, { label: 'B', text: '55°' },
            { label: 'C', text: '65°' }, { label: 'D', text: '145°' },
            { label: 'E', text: '125°' }
        ],
        correctOption: 'B',
        explanation: 'Complementary angles add up to 90°. 90° − 35° = 55°.'
    },
    {
        id: 'math-q90', unit: 'math-unit-18', topic: 'Angles', difficulty: 'medium',
        question: 'Angles around a point add up to:',
        options: [
            { label: 'A', text: '90°' }, { label: 'B', text: '180°' },
            { label: 'C', text: '270°' }, { label: 'D', text: '360°' },
            { label: 'E', text: '720°' }
        ],
        correctOption: 'D',
        explanation: 'Angles around a full point always sum to 360°.'
    },

    // ===== UNIT 19: Weight and Mass =====
    {
        id: 'math-q91', unit: 'math-unit-19', topic: 'Weight and Mass', difficulty: 'easy',
        question: 'How many grams are in 3.5 kg?',
        options: [
            { label: 'A', text: '35 g' }, { label: 'B', text: '350 g' },
            { label: 'C', text: '3,500 g' }, { label: 'D', text: '35,000 g' },
            { label: 'E', text: '305 g' }
        ],
        correctOption: 'C',
        explanation: '1 kg = 1,000 g. So 3.5 × 1,000 = 3,500 g.'
    },
    {
        id: 'math-q92', unit: 'math-unit-19', topic: 'Weight and Mass', difficulty: 'easy',
        question: '750 g is equal to how many kg?',
        options: [
            { label: 'A', text: '7.5 kg' }, { label: 'B', text: '0.75 kg' },
            { label: 'C', text: '75 kg' }, { label: 'D', text: '0.075 kg' },
            { label: 'E', text: '7,500 kg' }
        ],
        correctOption: 'B',
        explanation: '750 ÷ 1,000 = 0.75 kg.'
    },
    {
        id: 'math-q93', unit: 'math-unit-19', topic: 'Weight and Mass', difficulty: 'easy',
        question: 'How many kilograms are in 1 tonne?',
        options: [
            { label: 'A', text: '10' }, { label: 'B', text: '100' },
            { label: 'C', text: '1,000' }, { label: 'D', text: '10,000' },
            { label: 'E', text: '500' }
        ],
        correctOption: 'C',
        explanation: '1 tonne = 1,000 kg.'
    },
    {
        id: 'math-q94', unit: 'math-unit-19', topic: 'Weight and Mass', difficulty: 'medium',
        question: '8 packets weigh 200 g each. What is the total weight in kg?',
        options: [
            { label: 'A', text: '0.8 kg' }, { label: 'B', text: '1.2 kg' },
            { label: 'C', text: '1.6 kg' }, { label: 'D', text: '2.0 kg' },
            { label: 'E', text: '16 kg' }
        ],
        correctOption: 'C',
        explanation: 'Total = 8 × 200 = 1,600 g = 1.6 kg.'
    },
    {
        id: 'math-q95', unit: 'math-unit-19', topic: 'Weight and Mass', difficulty: 'medium',
        question: 'To convert grams to kilograms, you should:',
        options: [
            { label: 'A', text: 'Multiply by 1,000' }, { label: 'B', text: 'Divide by 1,000' },
            { label: 'C', text: 'Multiply by 100' }, { label: 'D', text: 'Divide by 100' },
            { label: 'E', text: 'Add 1,000' }
        ],
        correctOption: 'B',
        explanation: 'Grams to kilograms: divide by 1,000 (going to a bigger unit).'
    },

    // ===== UNIT 20: Triangles and Quadrilaterals =====
    {
        id: 'math-q96', unit: 'math-unit-20', topic: 'Triangles and Quadrilaterals', difficulty: 'easy',
        question: 'The three angles in any triangle add up to:',
        options: [
            { label: 'A', text: '90°' }, { label: 'B', text: '180°' },
            { label: 'C', text: '270°' }, { label: 'D', text: '360°' },
            { label: 'E', text: '120°' }
        ],
        correctOption: 'B',
        explanation: 'The angle sum of any triangle is always 180°.'
    },
    {
        id: 'math-q97', unit: 'math-unit-20', topic: 'Triangles and Quadrilaterals', difficulty: 'medium',
        question: 'A triangle has angles 70° and 55°. What is the third angle?',
        options: [
            { label: 'A', text: '45°' }, { label: 'B', text: '55°' },
            { label: 'C', text: '65°' }, { label: 'D', text: '75°' },
            { label: 'E', text: '125°' }
        ],
        correctOption: 'B',
        explanation: '180° − 70° − 55° = 55°.'
    },
    {
        id: 'math-q98', unit: 'math-unit-20', topic: 'Triangles and Quadrilaterals', difficulty: 'easy',
        question: 'A triangle with all three sides equal is called:',
        options: [
            { label: 'A', text: 'Isosceles' }, { label: 'B', text: 'Scalene' },
            { label: 'C', text: 'Equilateral' }, { label: 'D', text: 'Right-angled' },
            { label: 'E', text: 'Obtuse' }
        ],
        correctOption: 'C',
        explanation: 'Equilateral = all 3 sides equal. Isosceles = 2 equal. Scalene = no sides equal.'
    },
    {
        id: 'math-q99', unit: 'math-unit-20', topic: 'Triangles and Quadrilaterals', difficulty: 'easy',
        question: 'The four angles in any quadrilateral add up to:',
        options: [
            { label: 'A', text: '180°' }, { label: 'B', text: '270°' },
            { label: 'C', text: '360°' }, { label: 'D', text: '540°' },
            { label: 'E', text: '720°' }
        ],
        correctOption: 'C',
        explanation: 'The angle sum of any quadrilateral is 360°.'
    },
    {
        id: 'math-q100', unit: 'math-unit-20', topic: 'Triangles and Quadrilaterals', difficulty: 'medium',
        question: 'Which quadrilateral has 4 equal sides but NOT all right angles?',
        options: [
            { label: 'A', text: 'Square' }, { label: 'B', text: 'Rectangle' },
            { label: 'C', text: 'Rhombus' }, { label: 'D', text: 'Trapezium' },
            { label: 'E', text: 'Parallelogram' }
        ],
        correctOption: 'C',
        explanation: 'A rhombus has 4 equal sides but its angles are not necessarily 90°.'
    },

    // ===== UNIT 21: Circles =====
    {
        id: 'math-q101', unit: 'math-unit-21', topic: 'Circles', difficulty: 'easy',
        question: 'If the radius of a circle is 7 cm, what is the diameter?',
        options: [
            { label: 'A', text: '3.5 cm' }, { label: 'B', text: '7 cm' },
            { label: 'C', text: '14 cm' }, { label: 'D', text: '21 cm' },
            { label: 'E', text: '49 cm' }
        ],
        correctOption: 'C',
        explanation: 'Diameter = 2 × radius = 2 × 7 = 14 cm.'
    },
    {
        id: 'math-q102', unit: 'math-unit-21', topic: 'Circles', difficulty: 'easy',
        question: 'If the diameter is 20 cm, what is the radius?',
        options: [
            { label: 'A', text: '5 cm' }, { label: 'B', text: '10 cm' },
            { label: 'C', text: '20 cm' }, { label: 'D', text: '40 cm' },
            { label: 'E', text: '15 cm' }
        ],
        correctOption: 'B',
        explanation: 'Radius = diameter ÷ 2 = 20 ÷ 2 = 10 cm.'
    },
    {
        id: 'math-q103', unit: 'math-unit-21', topic: 'Circles', difficulty: 'medium',
        question: 'What is the circumference of a circle with diameter 14 cm? (Use π = 22/7)',
        options: [
            { label: 'A', text: '22 cm' }, { label: 'B', text: '33 cm' },
            { label: 'C', text: '44 cm' }, { label: 'D', text: '66 cm' },
            { label: 'E', text: '88 cm' }
        ],
        correctOption: 'C',
        explanation: 'C = π × d = 22/7 × 14 = 44 cm.'
    },
    {
        id: 'math-q104', unit: 'math-unit-21', topic: 'Circles', difficulty: 'medium',
        question: 'What is the area of a circle with radius 7 cm? (Use π = 22/7)',
        options: [
            { label: 'A', text: '44 cm²' }, { label: 'B', text: '88 cm²' },
            { label: 'C', text: '154 cm²' }, { label: 'D', text: '308 cm²' },
            { label: 'E', text: '616 cm²' }
        ],
        correctOption: 'C',
        explanation: 'A = πr² = 22/7 × 7 × 7 = 154 cm².'
    },
    {
        id: 'math-q105', unit: 'math-unit-21', topic: 'Circles', difficulty: 'easy',
        question: 'A line connecting two points on a circle is called a:',
        options: [
            { label: 'A', text: 'Radius' }, { label: 'B', text: 'Diameter' },
            { label: 'C', text: 'Chord' }, { label: 'D', text: 'Arc' },
            { label: 'E', text: 'Circumference' }
        ],
        correctOption: 'C',
        explanation: 'A chord is a line segment connecting two points on the circle.'
    },

    // ===== UNIT 22: Graphs and Data Display =====
    {
        id: 'math-q106', unit: 'math-unit-22', topic: 'Graphs and Data Display', difficulty: 'easy',
        question: 'In a pictogram, 🌟 = 5 items. If 4 stars are shown, the total is:',
        options: [
            { label: 'A', text: '4' }, { label: 'B', text: '9' },
            { label: 'C', text: '15' }, { label: 'D', text: '20' },
            { label: 'E', text: '25' }
        ],
        correctOption: 'D',
        explanation: '4 × 5 = 20 items.'
    },
    {
        id: 'math-q107', unit: 'math-unit-22', topic: 'Graphs and Data Display', difficulty: 'medium',
        question: 'A pie chart has a total of 360°. If 1/4 of the chart shows "Maths", the angle is:',
        options: [
            { label: 'A', text: '45°' }, { label: 'B', text: '60°' },
            { label: 'C', text: '72°' }, { label: 'D', text: '90°' },
            { label: 'E', text: '120°' }
        ],
        correctOption: 'D',
        explanation: '1/4 × 360° = 90°.'
    },
    {
        id: 'math-q108', unit: 'math-unit-22', topic: 'Graphs and Data Display', difficulty: 'medium',
        question: 'Out of 40 students, 10 like maths. What angle represents maths on a pie chart?',
        options: [
            { label: 'A', text: '36°' }, { label: 'B', text: '72°' },
            { label: 'C', text: '90°' }, { label: 'D', text: '100°' },
            { label: 'E', text: '120°' }
        ],
        correctOption: 'C',
        explanation: '(10 ÷ 40) × 360° = 0.25 × 360° = 90°.'
    },
    {
        id: 'math-q109', unit: 'math-unit-22', topic: 'Graphs and Data Display', difficulty: 'easy',
        question: 'Which type of graph uses bars to compare quantities?',
        options: [
            { label: 'A', text: 'Pie chart' }, { label: 'B', text: 'Pictogram' },
            { label: 'C', text: 'Bar graph' }, { label: 'D', text: 'Line graph' },
            { label: 'E', text: 'Number line' }
        ],
        correctOption: 'C',
        explanation: 'A bar graph uses rectangular bars to compare quantities.'
    },
    {
        id: 'math-q110', unit: 'math-unit-22', topic: 'Graphs and Data Display', difficulty: 'easy',
        question: 'In a pie chart, all the angles must add up to:',
        options: [
            { label: 'A', text: '100°' }, { label: 'B', text: '180°' },
            { label: 'C', text: '270°' }, { label: 'D', text: '360°' },
            { label: 'E', text: '720°' }
        ],
        correctOption: 'D',
        explanation: 'A full circle (pie chart) = 360°.'
    },

    // ===== UNIT 23: Profit and Loss =====
    {
        id: 'math-q111', unit: 'math-unit-23', topic: 'Profit and Loss', difficulty: 'easy',
        question: 'A trader bought a bag for Le 5,000 and sold it for Le 6,500. What is the profit?',
        options: [
            { label: 'A', text: 'Le 500' }, { label: 'B', text: 'Le 1,000' },
            { label: 'C', text: 'Le 1,500' }, { label: 'D', text: 'Le 2,000' },
            { label: 'E', text: 'Le 6,500' }
        ],
        correctOption: 'C',
        explanation: 'Profit = SP − CP = 6,500 − 5,000 = Le 1,500.'
    },
    {
        id: 'math-q112', unit: 'math-unit-23', topic: 'Profit and Loss', difficulty: 'easy',
        question: 'A phone was bought for Le 500,000 and sold for Le 450,000. What happened?',
        options: [
            { label: 'A', text: 'Profit of Le 50,000' }, { label: 'B', text: 'Loss of Le 50,000' },
            { label: 'C', text: 'Profit of Le 450,000' }, { label: 'D', text: 'No profit, no loss' },
            { label: 'E', text: 'Loss of Le 500,000' }
        ],
        correctOption: 'B',
        explanation: 'CP > SP, so it is a loss. Loss = 500,000 − 450,000 = Le 50,000.'
    },
    {
        id: 'math-q113', unit: 'math-unit-23', topic: 'Profit and Loss', difficulty: 'medium',
        question: 'CP = Le 2,000, SP = Le 2,400. What is the percentage profit?',
        options: [
            { label: 'A', text: '10%' }, { label: 'B', text: '15%' },
            { label: 'C', text: '20%' }, { label: 'D', text: '25%' },
            { label: 'E', text: '40%' }
        ],
        correctOption: 'C',
        explanation: 'Profit = 400. % Profit = (400 ÷ 2,000) × 100 = 20%.'
    },
    {
        id: 'math-q114', unit: 'math-unit-23', topic: 'Profit and Loss', difficulty: 'medium',
        question: 'CP = Le 800, sold at 25% profit. What is the selling price?',
        options: [
            { label: 'A', text: 'Le 900' }, { label: 'B', text: 'Le 950' },
            { label: 'C', text: 'Le 1,000' }, { label: 'D', text: 'Le 1,050' },
            { label: 'E', text: 'Le 1,200' }
        ],
        correctOption: 'C',
        explanation: 'Profit = 25% of 800 = Le 200. SP = 800 + 200 = Le 1,000.'
    },
    {
        id: 'math-q115', unit: 'math-unit-23', topic: 'Profit and Loss', difficulty: 'hard',
        question: 'CP = Le 800, SP = Le 600. What is the percentage loss?',
        options: [
            { label: 'A', text: '15%' }, { label: 'B', text: '20%' },
            { label: 'C', text: '25%' }, { label: 'D', text: '30%' },
            { label: 'E', text: '33%' }
        ],
        correctOption: 'C',
        explanation: 'Loss = 200. % Loss = (200 ÷ 800) × 100 = 25%.'
    },

    // ===== UNIT 24: BODMAS =====
    {
        id: 'math-q116', unit: 'math-unit-24', topic: 'Order of Operations (BODMAS)', difficulty: 'easy',
        question: 'What is 3 + 4 × 2?',
        options: [
            { label: 'A', text: '14' }, { label: 'B', text: '11' },
            { label: 'C', text: '10' }, { label: 'D', text: '9' },
            { label: 'E', text: '15' }
        ],
        correctOption: 'B',
        explanation: 'Do multiplication first: 4 × 2 = 8. Then 3 + 8 = 11.'
    },
    {
        id: 'math-q117', unit: 'math-unit-24', topic: 'Order of Operations (BODMAS)', difficulty: 'easy',
        question: 'What is (3 + 4) × 2?',
        options: [
            { label: 'A', text: '11' }, { label: 'B', text: '14' },
            { label: 'C', text: '10' }, { label: 'D', text: '9' },
            { label: 'E', text: '12' }
        ],
        correctOption: 'B',
        explanation: 'Brackets first: 3 + 4 = 7. Then 7 × 2 = 14.'
    },
    {
        id: 'math-q118', unit: 'math-unit-24', topic: 'Order of Operations (BODMAS)', difficulty: 'medium',
        question: 'What does the B in BODMAS stand for?',
        options: [
            { label: 'A', text: 'Before' }, { label: 'B', text: 'Brackets' },
            { label: 'C', text: 'Basic' }, { label: 'D', text: 'Bottom' },
            { label: 'E', text: 'Between' }
        ],
        correctOption: 'B',
        explanation: 'B = Brackets, O = Orders, D = Division, M = Multiplication, A = Addition, S = Subtraction.'
    },
    {
        id: 'math-q119', unit: 'math-unit-24', topic: 'Order of Operations (BODMAS)', difficulty: 'medium',
        question: 'What is 24 ÷ 4 + 2 × 3?',
        options: [
            { label: 'A', text: '10' }, { label: 'B', text: '12' },
            { label: 'C', text: '24' }, { label: 'D', text: '18' },
            { label: 'E', text: '15' }
        ],
        correctOption: 'B',
        explanation: '24 ÷ 4 = 6 and 2 × 3 = 6. Then 6 + 6 = 12.'
    },
    {
        id: 'math-q120', unit: 'math-unit-24', topic: 'Order of Operations (BODMAS)', difficulty: 'hard',
        question: 'What is 100 − 4 × (3 + 2)?',
        options: [
            { label: 'A', text: '60' }, { label: 'B', text: '70' },
            { label: 'C', text: '80' }, { label: 'D', text: '90' },
            { label: 'E', text: '480' }
        ],
        correctOption: 'C',
        explanation: 'Brackets: 3 + 2 = 5. Multiply: 4 × 5 = 20. Subtract: 100 − 20 = 80.'
    },

    // ===== UNIT 25: Roman Numerals =====
    {
        id: 'math-q121', unit: 'math-unit-25', topic: 'Roman Numerals', difficulty: 'easy',
        question: 'What is the value of the Roman numeral XIV?',
        options: [
            { label: 'A', text: '4' }, { label: 'B', text: '11' },
            { label: 'C', text: '14' }, { label: 'D', text: '16' },
            { label: 'E', text: '24' }
        ],
        correctOption: 'C',
        explanation: 'X = 10, IV = 4. So XIV = 10 + 4 = 14.'
    },
    {
        id: 'math-q122', unit: 'math-unit-25', topic: 'Roman Numerals', difficulty: 'easy',
        question: 'Write 24 in Roman numerals.',
        options: [
            { label: 'A', text: 'XXVI' }, { label: 'B', text: 'XXIV' },
            { label: 'C', text: 'XXIIII' }, { label: 'D', text: 'XIXV' },
            { label: 'E', text: 'IVXX' }
        ],
        correctOption: 'B',
        explanation: '20 = XX, 4 = IV. So 24 = XXIV.'
    },
    {
        id: 'math-q123', unit: 'math-unit-25', topic: 'Roman Numerals', difficulty: 'medium',
        question: 'What is the value of LXXV?',
        options: [
            { label: 'A', text: '55' }, { label: 'B', text: '65' },
            { label: 'C', text: '75' }, { label: 'D', text: '85' },
            { label: 'E', text: '175' }
        ],
        correctOption: 'C',
        explanation: 'L = 50, XX = 20, V = 5. Total = 50 + 20 + 5 = 75.'
    },
    {
        id: 'math-q124', unit: 'math-unit-25', topic: 'Roman Numerals', difficulty: 'easy',
        question: 'What does the Roman numeral C represent?',
        options: [
            { label: 'A', text: '10' }, { label: 'B', text: '50' },
            { label: 'C', text: '100' }, { label: 'D', text: '500' },
            { label: 'E', text: '1000' }
        ],
        correctOption: 'C',
        explanation: 'C = 100 (I=1, V=5, X=10, L=50, C=100, D=500, M=1000).'
    },
    {
        id: 'math-q125', unit: 'math-unit-25', topic: 'Roman Numerals', difficulty: 'hard',
        question: 'What is XCIX in numbers?',
        options: [
            { label: 'A', text: '89' }, { label: 'B', text: '91' },
            { label: 'C', text: '99' }, { label: 'D', text: '109' },
            { label: 'E', text: '111' }
        ],
        correctOption: 'C',
        explanation: 'XC = 90 (100 − 10), IX = 9 (10 − 1). Total = 90 + 9 = 99.'
    },

    // ===== UNIT 26: Temperature =====
    {
        id: 'math-q126', unit: 'math-unit-26', topic: 'Temperature', difficulty: 'easy',
        question: 'At what temperature does water freeze in Celsius?',
        options: [
            { label: 'A', text: '-10°C' }, { label: 'B', text: '0°C' },
            { label: 'C', text: '32°C' }, { label: 'D', text: '100°C' },
            { label: 'E', text: '10°C' }
        ],
        correctOption: 'B',
        explanation: 'Water freezes at 0°C (and 32°F).'
    },
    {
        id: 'math-q127', unit: 'math-unit-26', topic: 'Temperature', difficulty: 'easy',
        question: 'Normal human body temperature is about:',
        options: [
            { label: 'A', text: '25°C' }, { label: 'B', text: '30°C' },
            { label: 'C', text: '37°C' }, { label: 'D', text: '42°C' },
            { label: 'E', text: '100°C' }
        ],
        correctOption: 'C',
        explanation: 'Normal body temperature is about 36–37°C.'
    },
    {
        id: 'math-q128', unit: 'math-unit-26', topic: 'Temperature', difficulty: 'medium',
        question: 'The morning temperature was 22°C and afternoon was 34°C. What is the rise?',
        options: [
            { label: 'A', text: '8°C' }, { label: 'B', text: '10°C' },
            { label: 'C', text: '12°C' }, { label: 'D', text: '14°C' },
            { label: 'E', text: '56°C' }
        ],
        correctOption: 'C',
        explanation: 'Rise = 34 − 22 = 12°C.'
    },
    {
        id: 'math-q129', unit: 'math-unit-26', topic: 'Temperature', difficulty: 'easy',
        question: 'Which is colder: −3°C or 2°C?',
        options: [
            { label: 'A', text: '2°C' }, { label: 'B', text: '−3°C' },
            { label: 'C', text: 'They are the same' }, { label: 'D', text: 'Cannot tell' },
            { label: 'E', text: '0°C' }
        ],
        correctOption: 'B',
        explanation: '−3°C is below zero, so it is colder than 2°C.'
    },
    {
        id: 'math-q130', unit: 'math-unit-26', topic: 'Temperature', difficulty: 'easy',
        question: 'At what temperature does water boil in Celsius?',
        options: [
            { label: 'A', text: '50°C' }, { label: 'B', text: '80°C' },
            { label: 'C', text: '100°C' }, { label: 'D', text: '212°C' },
            { label: 'E', text: '150°C' }
        ],
        correctOption: 'C',
        explanation: 'Water boils at 100°C (and 212°F).'
    },

    // ===== UNIT 27: Mean, Mode and Median =====
    {
        id: 'math-q131', unit: 'math-unit-27', topic: 'Mean, Mode and Median', difficulty: 'easy',
        question: 'What is the mean of 4, 7, 8, 9, 12?',
        options: [
            { label: 'A', text: '7' }, { label: 'B', text: '8' },
            { label: 'C', text: '9' }, { label: 'D', text: '10' },
            { label: 'E', text: '12' }
        ],
        correctOption: 'B',
        explanation: 'Sum = 40. Count = 5. Mean = 40 ÷ 5 = 8.'
    },
    {
        id: 'math-q132', unit: 'math-unit-27', topic: 'Mean, Mode and Median', difficulty: 'easy',
        question: 'What is the mode of 3, 5, 5, 7, 8, 5, 9?',
        options: [
            { label: 'A', text: '3' }, { label: 'B', text: '5' },
            { label: 'C', text: '7' }, { label: 'D', text: '8' },
            { label: 'E', text: '9' }
        ],
        correctOption: 'B',
        explanation: '5 appears 3 times, more than any other value. Mode = 5.'
    },
    {
        id: 'math-q133', unit: 'math-unit-27', topic: 'Mean, Mode and Median', difficulty: 'medium',
        question: 'What is the median of 7, 3, 9, 1, 5?',
        options: [
            { label: 'A', text: '3' }, { label: 'B', text: '5' },
            { label: 'C', text: '7' }, { label: 'D', text: '9' },
            { label: 'E', text: '1' }
        ],
        correctOption: 'B',
        explanation: 'Order: 1, 3, 5, 7, 9. Middle value (3rd of 5) = 5.'
    },
    {
        id: 'math-q134', unit: 'math-unit-27', topic: 'Mean, Mode and Median', difficulty: 'medium',
        question: 'The data set 2, 4, 6, 8 has an even count. What is the median?',
        options: [
            { label: 'A', text: '4' }, { label: 'B', text: '5' },
            { label: 'C', text: '6' }, { label: 'D', text: '7' },
            { label: 'E', text: '3' }
        ],
        correctOption: 'B',
        explanation: 'Middle two values: 4 and 6. Median = (4 + 6) ÷ 2 = 5.'
    },
    {
        id: 'math-q135', unit: 'math-unit-27', topic: 'Mean, Mode and Median', difficulty: 'hard',
        question: 'Five test scores have a mean of 70. The sum of all scores is:',
        options: [
            { label: 'A', text: '140' }, { label: 'B', text: '280' },
            { label: 'C', text: '350' }, { label: 'D', text: '700' },
            { label: 'E', text: '14' }
        ],
        correctOption: 'C',
        explanation: 'Mean = Sum ÷ Count, so Sum = Mean × Count = 70 × 5 = 350.'
    },

    // ===== UNIT 28: Simple Interest =====
    {
        id: 'math-q136', unit: 'math-unit-28', topic: 'Simple Interest', difficulty: 'easy',
        question: 'Find the interest on Le 5,000 for 2 years at 10% per year.',
        options: [
            { label: 'A', text: 'Le 500' }, { label: 'B', text: 'Le 1,000' },
            { label: 'C', text: 'Le 1,500' }, { label: 'D', text: 'Le 2,000' },
            { label: 'E', text: 'Le 5,000' }
        ],
        correctOption: 'B',
        explanation: 'I = (P × R × T) ÷ 100 = (5,000 × 10 × 2) ÷ 100 = Le 1,000.'
    },
    {
        id: 'math-q137', unit: 'math-unit-28', topic: 'Simple Interest', difficulty: 'medium',
        question: 'Le 8,000 saved for 3 years at 5%. What is the total amount?',
        options: [
            { label: 'A', text: 'Le 8,200' }, { label: 'B', text: 'Le 8,800' },
            { label: 'C', text: 'Le 9,000' }, { label: 'D', text: 'Le 9,200' },
            { label: 'E', text: 'Le 9,500' }
        ],
        correctOption: 'D',
        explanation: 'I = (8,000 × 5 × 3) ÷ 100 = Le 1,200. Total = 8,000 + 1,200 = Le 9,200.'
    },
    {
        id: 'math-q138', unit: 'math-unit-28', topic: 'Simple Interest', difficulty: 'hard',
        question: 'Le 2,000 earned Le 400 interest in 4 years. What is the rate?',
        options: [
            { label: 'A', text: '3%' }, { label: 'B', text: '4%' },
            { label: 'C', text: '5%' }, { label: 'D', text: '8%' },
            { label: 'E', text: '10%' }
        ],
        correctOption: 'C',
        explanation: 'R = (I × 100) ÷ (P × T) = (400 × 100) ÷ (2,000 × 4) = 40,000 ÷ 8,000 = 5%.'
    },
    {
        id: 'math-q139', unit: 'math-unit-28', topic: 'Simple Interest', difficulty: 'hard',
        question: 'Interest of Le 250 was earned at 5% over 2 years. What was the principal?',
        options: [
            { label: 'A', text: 'Le 1,500' }, { label: 'B', text: 'Le 2,000' },
            { label: 'C', text: 'Le 2,500' }, { label: 'D', text: 'Le 3,000' },
            { label: 'E', text: 'Le 5,000' }
        ],
        correctOption: 'C',
        explanation: 'P = (I × 100) ÷ (R × T) = (250 × 100) ÷ (5 × 2) = 25,000 ÷ 10 = Le 2,500.'
    },
    {
        id: 'math-q140', unit: 'math-unit-28', topic: 'Simple Interest', difficulty: 'medium',
        question: 'What is the interest on Le 1,000 for 2 years at 8%?',
        options: [
            { label: 'A', text: 'Le 80' }, { label: 'B', text: 'Le 120' },
            { label: 'C', text: 'Le 160' }, { label: 'D', text: 'Le 200' },
            { label: 'E', text: 'Le 800' }
        ],
        correctOption: 'C',
        explanation: 'I = (1,000 × 8 × 2) ÷ 100 = 16,000 ÷ 100 = Le 160.'
    },

    // ===== UNIT 29: Parallel and Perpendicular Lines =====
    {
        id: 'math-q141', unit: 'math-unit-29', topic: 'Lines: Parallel and Perpendicular', difficulty: 'easy',
        question: 'Parallel lines:',
        options: [
            { label: 'A', text: 'Meet at 90°' }, { label: 'B', text: 'Cross each other' },
            { label: 'C', text: 'Never meet' }, { label: 'D', text: 'Are curved' },
            { label: 'E', text: 'Touch at one point' }
        ],
        correctOption: 'C',
        explanation: 'Parallel lines are always the same distance apart and never meet.'
    },
    {
        id: 'math-q142', unit: 'math-unit-29', topic: 'Lines: Parallel and Perpendicular', difficulty: 'easy',
        question: 'Perpendicular lines meet at an angle of:',
        options: [
            { label: 'A', text: '45°' }, { label: 'B', text: '60°' },
            { label: 'C', text: '90°' }, { label: 'D', text: '120°' },
            { label: 'E', text: '180°' }
        ],
        correctOption: 'C',
        explanation: 'Perpendicular lines meet at a right angle (90°).'
    },
    {
        id: 'math-q143', unit: 'math-unit-29', topic: 'Lines: Parallel and Perpendicular', difficulty: 'easy',
        question: 'Which is a real-life example of parallel lines?',
        options: [
            { label: 'A', text: 'Letter X' }, { label: 'B', text: 'Railway tracks' },
            { label: 'C', text: 'Corner of a room' }, { label: 'D', text: 'Plus sign' },
            { label: 'E', text: 'Letter T' }
        ],
        correctOption: 'B',
        explanation: 'Railway tracks run side by side and never meet — they are parallel.'
    },
    {
        id: 'math-q144', unit: 'math-unit-29', topic: 'Lines: Parallel and Perpendicular', difficulty: 'medium',
        question: 'In a rectangle, opposite sides are:',
        options: [
            { label: 'A', text: 'Perpendicular' }, { label: 'B', text: 'Intersecting' },
            { label: 'C', text: 'Parallel' }, { label: 'D', text: 'Curved' },
            { label: 'E', text: 'Diagonal' }
        ],
        correctOption: 'C',
        explanation: 'In a rectangle, opposite sides are parallel (and adjacent sides are perpendicular).'
    },
    {
        id: 'math-q145', unit: 'math-unit-29', topic: 'Lines: Parallel and Perpendicular', difficulty: 'easy',
        question: 'The symbol for parallel lines is:',
        options: [
            { label: 'A', text: '⊥' }, { label: 'B', text: '∥' },
            { label: 'C', text: '×' }, { label: 'D', text: '=' },
            { label: 'E', text: '≈' }
        ],
        correctOption: 'B',
        explanation: '∥ means parallel. ⊥ means perpendicular.'
    },

    // ===== UNIT 30: Number Patterns and Puzzles =====
    {
        id: 'math-q146', unit: 'math-unit-30', topic: 'Number Patterns and Puzzles', difficulty: 'easy',
        question: 'What is the next number: 3, 7, 11, 15, ?',
        options: [
            { label: 'A', text: '17' }, { label: 'B', text: '18' },
            { label: 'C', text: '19' }, { label: 'D', text: '20' },
            { label: 'E', text: '21' }
        ],
        correctOption: 'C',
        explanation: 'Rule: add 4 each time. 15 + 4 = 19.'
    },
    {
        id: 'math-q147', unit: 'math-unit-30', topic: 'Number Patterns and Puzzles', difficulty: 'medium',
        question: 'What is the next number: 2, 6, 18, 54, ?',
        options: [
            { label: 'A', text: '72' }, { label: 'B', text: '108' },
            { label: 'C', text: '162' }, { label: 'D', text: '216' },
            { label: 'E', text: '150' }
        ],
        correctOption: 'C',
        explanation: 'Rule: multiply by 3 each time. 54 × 3 = 162.'
    },
    {
        id: 'math-q148', unit: 'math-unit-30', topic: 'Number Patterns and Puzzles', difficulty: 'easy',
        question: 'Which are the first four square numbers?',
        options: [
            { label: 'A', text: '1, 2, 3, 4' }, { label: 'B', text: '2, 4, 6, 8' },
            { label: 'C', text: '1, 4, 9, 16' }, { label: 'D', text: '1, 3, 6, 10' },
            { label: 'E', text: '4, 8, 12, 16' }
        ],
        correctOption: 'C',
        explanation: 'Square numbers: 1² = 1, 2² = 4, 3² = 9, 4² = 16.'
    },
    {
        id: 'math-q149', unit: 'math-unit-30', topic: 'Number Patterns and Puzzles', difficulty: 'medium',
        question: 'What is the next triangular number: 1, 3, 6, 10, ?',
        options: [
            { label: 'A', text: '12' }, { label: 'B', text: '13' },
            { label: 'C', text: '14' }, { label: 'D', text: '15' },
            { label: 'E', text: '16' }
        ],
        correctOption: 'D',
        explanation: 'Add 5 to the previous: 10 + 5 = 15. Pattern: +2, +3, +4, +5…'
    },
    {
        id: 'math-q150', unit: 'math-unit-30', topic: 'Number Patterns and Puzzles', difficulty: 'medium',
        question: 'In a 3×3 magic square using 1–9, every row, column, and diagonal adds up to:',
        options: [
            { label: 'A', text: '9' }, { label: 'B', text: '12' },
            { label: 'C', text: '15' }, { label: 'D', text: '18' },
            { label: 'E', text: '21' }
        ],
        correctOption: 'C',
        explanation: 'Sum of 1–9 = 45. Divided into 3 rows: 45 ÷ 3 = 15 (the magic constant).'
    },
];

export default mathQuizQuestions;
