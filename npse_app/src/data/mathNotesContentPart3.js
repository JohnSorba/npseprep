// Mathematics Notes Content Part 3 (Units 21-30)
// Based on MBSSE Class 6 Syllabus with Examples and Diagrams

export const mathNotesContentPart3 = {
    'math-unit-21': {
        title: 'Circles',
        subject: 'Geometry',
        sections: [
            {
                heading: 'Parts of a Circle',
                type: 'diagram',
                diagramType: 'circle-parts',
                data: {
                    title: 'Parts of a Circle',
                    parts: [
                        { name: 'Centre', description: 'The middle point' },
                        { name: 'Radius', description: 'Distance from centre to edge' },
                        { name: 'Diameter', description: 'Distance across through centre' },
                        { name: 'Circumference', description: 'Distance around the circle' },
                        { name: 'Chord', description: 'Line connecting two points on circle' },
                        { name: 'Arc', description: 'Part of the circumference' }
                    ]
                }
            },
            {
                heading: 'Key Circle Terms',
                type: 'definition',
                definitions: [
                    { term: 'Radius (r)', definition: 'Distance from centre to any point on the circle' },
                    { term: 'Diameter (d)', definition: 'Distance across the circle through the centre = 2 × radius' },
                    { term: 'Circumference (C)', definition: 'The perimeter (distance around) of the circle' },
                    { term: 'Chord', definition: 'A line segment connecting two points on the circle' },
                    { term: 'Semicircle', definition: 'Half of a circle' }
                ]
            },
            {
                heading: 'Key Relationships',
                type: 'definition',
                definitions: [
                    { term: 'Diameter = 2 × Radius', definition: '$d = 2r$' },
                    { term: 'Radius = Diameter ÷ 2', definition: '$r = \\frac{d}{2}$' },
                    { term: 'Circumference', definition: '$C = π × d = 2πr$ (π ≈ 3.14 or $\\frac{22}{7}$)' },
                    { term: 'Area', definition: '$A = πr²$' }
                ]
            },
            {
                heading: 'Example 1: Finding Diameter',
                type: 'steps',
                items: [
                    { step: '1', description: 'If radius = 7 cm, find diameter' },
                    { step: '2', description: 'Diameter = 2 × radius' },
                    { step: '3', description: 'Diameter = 2 × 7 = 14 cm' }
                ]
            },
            {
                heading: 'Example 2: Finding Circumference',
                type: 'steps',
                items: [
                    { step: '1', description: 'Find circumference if diameter = 14 cm (use π = $\\frac{22}{7}$)' },
                    { step: '2', description: 'C = π × d' },
                    { step: '3', description: 'C = $\\frac{22}{7}$ × 14' },
                    { step: '4', description: 'C = 44 cm' }
                ]
            },
            {
                heading: 'Example 3: Finding Area',
                type: 'steps',
                items: [
                    { step: '1', description: 'Find area if radius = 7 cm (use π = $\\frac{22}{7}$)' },
                    { step: '2', description: 'A = πr²' },
                    { step: '3', description: 'A = $\\frac{22}{7}$ × 7 × 7' },
                    { step: '4', description: 'A = 154 cm²' }
                ]
            },
            {
                heading: 'Practice Problems',
                type: 'table',
                headers: ['Problem', 'Answer'],
                rows: [
                    ['Diameter if radius = 9 cm', '18 cm'],
                    ['Radius if diameter = 20 cm', '10 cm'],
                    ['Circumference if d = 21 cm (π = 22/7)', '66 cm'],
                    ['Area if r = 14 cm', '616 cm²']
                ]
            }
        ],
        keyPoints: [
            'Diameter = 2 × Radius',
            'Circumference = πd = 2πr',
            'Area = πr²',
            'π ≈ 3.14 or 22/7'
        ]
    },
    'math-unit-22': {
        title: 'Graphs and Data Display',
        subject: 'Data Handling',
        sections: [
            {
                heading: 'Types of Graphs',
                type: 'text',
                content: 'Graphs help us display and understand data visually. Different types of graphs are suited for different data.'
            },
            {
                heading: 'Pictograms',
                type: 'diagram',
                diagramType: 'pictogram',
                data: {
                    title: 'Books Read by Students',
                    key: '📚 = 4 books',
                    data: [
                        { label: 'Amara', symbols: 3 },
                        { label: 'Binta', symbols: 5 },
                        { label: 'Cherno', symbols: 2 }
                    ]
                }
            },
            {
                heading: 'Reading Pictograms',
                type: 'steps',
                items: [
                    { step: '1', description: 'Check the KEY to see what each symbol represents' },
                    { step: '2', description: 'Count the symbols for each category' },
                    { step: '3', description: 'Multiply: number of symbols × value of each symbol' },
                    { step: '4', description: 'Example: If 📚 = 4 books and Amara has 3 symbols: 3 × 4 = 12 books' }
                ]
            },
            {
                heading: 'Bar Graphs',
                type: 'diagram',
                diagramType: 'bar-chart',
                data: {
                    title: 'Favourite Fruits of Class 6',
                    xLabel: 'Fruit',
                    yLabel: 'Number of Students',
                    data: [
                        { label: 'Mango', value: 15 },
                        { label: 'Orange', value: 10 },
                        { label: 'Banana', value: 8 },
                        { label: 'Pineapple', value: 12 }
                    ]
                }
            },
            {
                heading: 'Reading Bar Graphs',
                type: 'definition',
                definitions: [
                    { term: 'Height/Length of bar', definition: 'Shows the value or frequency' },
                    { term: 'X-axis', definition: 'Usually shows categories' },
                    { term: 'Y-axis', definition: 'Usually shows values/numbers' }
                ]
            },
            {
                heading: 'Pie Charts',
                type: 'diagram',
                diagramType: 'pie-chart',
                data: {
                    title: 'How Amina Spends Her Day',
                    total: 24,
                    slices: [
                        { label: 'Sleep', value: 8, color: '#6366f1' },
                        { label: 'School', value: 7, color: '#22c55e' },
                        { label: 'Homework', value: 3, color: '#f97316' },
                        { label: 'Play', value: 4, color: '#ec4899' },
                        { label: 'Other', value: 2, color: '#8b5cf6' }
                    ]
                }
            },
            {
                heading: 'Pie Chart Calculations',
                type: 'steps',
                items: [
                    { step: '1', description: 'Total of pie chart = 360°' },
                    { step: '2', description: 'To find angle: $\\frac{value}{total} × 360°$' },
                    { step: '3', description: 'Example: 8 hours sleep out of 24 hours' },
                    { step: '4', description: 'Angle = $\\frac{8}{24} × 360° = 120°$' }
                ]
            },
            {
                heading: 'Pie Chart Example',
                type: 'table',
                headers: ['Activity', 'Hours', 'Fraction', 'Angle'],
                rows: [
                    ['Sleep', '8', '$\\frac{8}{24} = \\frac{1}{3}$', '120°'],
                    ['School', '7', '$\\frac{7}{24}$', '105°'],
                    ['Homework', '3', '$\\frac{3}{24} = \\frac{1}{8}$', '45°'],
                    ['Play', '4', '$\\frac{4}{24} = \\frac{1}{6}$', '60°'],
                    ['Other', '2', '$\\frac{2}{24} = \\frac{1}{12}$', '30°']
                ]
            },
            {
                heading: 'Practice Problems',
                type: 'table',
                headers: ['Problem', 'Answer'],
                rows: [
                    ['Pictogram: 🌟 = 5. If 4 stars shown, total = ?', '20'],
                    ['Bar chart shows 25 for category A, 15 for B. Difference?', '10'],
                    ['Pie chart angle for $\\frac{1}{4}$ of total', '90°'],
                    ['Total 40 students. 10 like math. Angle?', '90°']
                ]
            }
        ],
        keyPoints: [
            'Pictograms use symbols with a key',
            'Bar graphs compare quantities with bars',
            'Pie charts show parts of a whole (total = 360°)',
            'Angle = (value ÷ total) × 360°'
        ]
    },
    'math-unit-23': {
        title: 'Profit and Loss',
        subject: 'Money & Commerce',
        sections: [
            {
                heading: 'Key Terms',
                type: 'definition',
                definitions: [
                    { term: 'Cost Price (CP)', definition: 'The price at which an item is BOUGHT' },
                    { term: 'Selling Price (SP)', definition: 'The price at which an item is SOLD' },
                    { term: 'Profit', definition: 'When SP > CP. Money GAINED.' },
                    { term: 'Loss', definition: 'When CP > SP. Money LOST.' }
                ]
            },
            {
                heading: 'Profit and Loss Diagram',
                type: 'diagram',
                diagramType: 'profit-loss-visual',
                data: {
                    title: 'Understanding Profit and Loss',
                    scenarios: [
                        { type: 'Profit', cp: 100, sp: 120, difference: 20, color: '#22c55e' },
                        { type: 'Loss', cp: 100, sp: 80, difference: 20, color: '#ef4444' }
                    ]
                }
            },
            {
                heading: 'Formulas',
                type: 'definition',
                definitions: [
                    { term: 'Profit', definition: '$= SP - CP$ (when SP > CP)' },
                    { term: 'Loss', definition: '$= CP - SP$ (when CP > SP)' },
                    { term: '% Profit', definition: '$= \\frac{Profit}{CP} × 100\\%$' },
                    { term: '% Loss', definition: '$= \\frac{Loss}{CP} × 100\\%$' }
                ]
            },
            {
                heading: 'Example 1: Finding Profit',
                type: 'steps',
                items: [
                    { step: '1', description: 'A trader bought a bag for Le 5,000 and sold it for Le 6,500' },
                    { step: '2', description: 'Profit = SP - CP' },
                    { step: '3', description: 'Profit = 6,500 - 5,000' },
                    { step: '4', description: 'Profit = Le 1,500' }
                ]
            },
            {
                heading: 'Example 2: Finding Loss',
                type: 'steps',
                items: [
                    { step: '1', description: 'A phone was bought for Le 500,000 and sold for Le 450,000' },
                    { step: '2', description: 'Loss = CP - SP' },
                    { step: '3', description: 'Loss = 500,000 - 450,000' },
                    { step: '4', description: 'Loss = Le 50,000' }
                ]
            },
            {
                heading: 'Example 3: Percentage Profit',
                type: 'steps',
                items: [
                    { step: '1', description: 'CP = Le 2,000, SP = Le 2,400. Find % profit.' },
                    { step: '2', description: 'Profit = 2,400 - 2,000 = Le 400' },
                    { step: '3', description: '% Profit = $\\frac{400}{2000} × 100\\%$' },
                    { step: '4', description: '% Profit = 20%' }
                ]
            },
            {
                heading: 'Example 4: Percentage Loss',
                type: 'steps',
                items: [
                    { step: '1', description: 'CP = Le 800, SP = Le 600. Find % loss.' },
                    { step: '2', description: 'Loss = 800 - 600 = Le 200' },
                    { step: '3', description: '% Loss = $\\frac{200}{800} × 100\\%$' },
                    { step: '4', description: '% Loss = 25%' }
                ]
            },
            {
                heading: 'Word Problems',
                type: 'list',
                items: [
                    { title: 'Problem 1', description: 'A book was bought for Le 15,000 and sold at 40% profit. What was the SP?' },
                    { title: 'Solution', description: 'Profit = 40% of 15,000 = Le 6,000. SP = 15,000 + 6,000 = Le 21,000' }
                ]
            },
            {
                heading: 'Practice Problems',
                type: 'table',
                headers: ['Problem', 'Answer'],
                rows: [
                    ['CP = Le 400, SP = Le 500. Profit?', 'Le 100'],
                    ['CP = Le 1,000, SP = Le 750. Loss?', 'Le 250'],
                    ['CP = Le 500, Profit = Le 100. % Profit?', '20%'],
                    ['CP = Le 800, 25% profit. SP?', 'Le 1,000']
                ]
            }
        ],
        keyPoints: [
            'Profit = SP - CP (when selling price is higher)',
            'Loss = CP - SP (when cost price is higher)',
            '% Profit or Loss = (Difference ÷ CP) × 100',
            'Always calculate percentage from COST PRICE'
        ]
    },
    'math-unit-24': {
        title: 'Order of Operations (BODMAS)',
        subject: 'Basic Operations',
        sections: [
            {
                heading: 'What is BODMAS?',
                type: 'text',
                content: 'BODMAS is the rule that tells us the order to do calculations when there is more than one operation.'
            },
            {
                heading: 'BODMAS Explained',
                type: 'diagram',
                diagramType: 'bodmas-steps',
                data: {
                    title: 'BODMAS Order',
                    steps: [
                        { letter: 'B', word: 'Brackets', example: '(2 + 3)', priority: 1, color: '#ef4444' },
                        { letter: 'O', word: 'Orders (Powers/Roots)', example: '2²', priority: 2, color: '#f97316' },
                        { letter: 'D', word: 'Division', example: '÷', priority: 3, color: '#eab308' },
                        { letter: 'M', word: 'Multiplication', example: '×', priority: 3, color: '#22c55e' },
                        { letter: 'A', word: 'Addition', example: '+', priority: 4, color: '#3b82f6' },
                        { letter: 'S', word: 'Subtraction', example: '-', priority: 4, color: '#8b5cf6' }
                    ]
                }
            },
            {
                heading: 'Important Notes',
                type: 'list',
                items: [
                    { title: 'Division and Multiplication', description: 'Have equal priority - work left to right' },
                    { title: 'Addition and Subtraction', description: 'Have equal priority - work left to right' }
                ]
            },
            {
                heading: 'Example 1: Simple BODMAS',
                type: 'steps',
                items: [
                    { step: '1', description: 'Calculate: $3 + 4 × 2$' },
                    { step: '2', description: 'Do multiplication first: $4 × 2 = 8$' },
                    { step: '3', description: 'Then add: $3 + 8 = 11$' }
                ]
            },
            {
                heading: 'Example 2: With Brackets',
                type: 'steps',
                items: [
                    { step: '1', description: 'Calculate: $(3 + 4) × 2$' },
                    { step: '2', description: 'Do brackets first: $3 + 4 = 7$' },
                    { step: '3', description: 'Then multiply: $7 × 2 = 14$' }
                ]
            },
            {
                heading: 'Example 3: Complex',
                type: 'steps',
                items: [
                    { step: '1', description: 'Calculate: $20 - 3 × 4 + 8 ÷ 2$' },
                    { step: '2', description: 'First, × and ÷ (left to right): $3 × 4 = 12$, $8 ÷ 2 = 4$' },
                    { step: '3', description: 'Now: $20 - 12 + 4$' },
                    { step: '4', description: 'Then, + and - (left to right): $20 - 12 = 8$, $8 + 4 = 12$' }
                ]
            },
            {
                heading: 'Mental Math Shortcuts',
                type: 'definition',
                definitions: [
                    { term: 'Multiply by 5', definition: 'Multiply by 10, then divide by 2. (32 × 5 = 320 ÷ 2 = 160)' },
                    { term: 'Multiply by 9', definition: 'Multiply by 10, then subtract the number. (7 × 9 = 70 - 7 = 63)' },
                    { term: 'Multiply by 11', definition: 'Multiply by 10, then add the number. (6 × 11 = 60 + 6 = 66)' },
                    { term: 'Multiply by 25', definition: 'Multiply by 100, then divide by 4. (8 × 25 = 800 ÷ 4 = 200)' }
                ]
            },
            {
                heading: 'Divisibility Rules',
                type: 'table',
                headers: ['Divisible by', 'Rule'],
                rows: [
                    ['2', 'Last digit is even (0, 2, 4, 6, 8)'],
                    ['3', 'Sum of digits divisible by 3'],
                    ['4', 'Last 2 digits form number divisible by 4'],
                    ['5', 'Last digit is 0 or 5'],
                    ['9', 'Sum of digits divisible by 9'],
                    ['10', 'Last digit is 0']
                ]
            },
            {
                heading: 'Practice Problems',
                type: 'table',
                headers: ['Problem', 'Answer'],
                rows: [
                    ['$5 + 3 × 2$', '11'],
                    ['$(5 + 3) × 2$', '16'],
                    ['$24 ÷ 4 + 2 × 3$', '12'],
                    ['$100 - 4 × (3 + 2)$', '80']
                ]
            }
        ],
        keyPoints: [
            'BODMAS: Brackets, Orders, Division, Multiplication, Addition, Subtraction',
            'Division and Multiplication: equal priority, left to right',
            'Addition and Subtraction: equal priority, left to right',
            'Always do brackets first!'
        ]
    },
    'math-unit-25': {
        title: 'Roman Numerals',
        subject: 'Special Topics',
        sections: [
            {
                heading: 'Roman Numeral System',
                type: 'text',
                content: 'Roman numerals use letters to represent numbers. This system was used by the ancient Romans and is still used today for clocks, book chapters, and more.'
            },
            {
                heading: 'Basic Roman Numerals',
                type: 'diagram',
                diagramType: 'roman-numeral-chart',
                data: {
                    title: 'Roman Numeral Values',
                    numerals: [
                        { roman: 'I', value: 1, color: '#ef4444' },
                        { roman: 'V', value: 5, color: '#f97316' },
                        { roman: 'X', value: 10, color: '#eab308' },
                        { roman: 'L', value: 50, color: '#22c55e' },
                        { roman: 'C', value: 100, color: '#3b82f6' },
                        { roman: 'D', value: 500, color: '#8b5cf6' },
                        { roman: 'M', value: 1000, color: '#ec4899' }
                    ]
                }
            },
            {
                heading: 'Roman Numeral Values',
                type: 'table',
                headers: ['Roman', 'Value'],
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
                heading: 'Rules for Reading',
                type: 'numbered-list',
                items: [
                    'If a smaller numeral comes AFTER a larger one, ADD them: VI = 5 + 1 = 6',
                    'If a smaller numeral comes BEFORE a larger one, SUBTRACT it: IV = 5 - 1 = 4',
                    'Same numerals in a row are added: III = 1 + 1 + 1 = 3',
                    'Never use more than three of the same numeral in a row'
                ]
            },
            {
                heading: 'Common Patterns',
                type: 'table',
                headers: ['Pattern', 'Meaning', 'Example'],
                rows: [
                    ['IV', '5 - 1 = 4', 'Four'],
                    ['IX', '10 - 1 = 9', 'Nine'],
                    ['XL', '50 - 10 = 40', 'Forty'],
                    ['XC', '100 - 10 = 90', 'Ninety'],
                    ['CD', '500 - 100 = 400', 'Four hundred'],
                    ['CM', '1000 - 100 = 900', 'Nine hundred']
                ]
            },
            {
                heading: 'Converting Arabic to Roman',
                type: 'steps',
                items: [
                    { step: '1', description: 'Write 47 in Roman numerals' },
                    { step: '2', description: '47 = 40 + 7' },
                    { step: '3', description: '40 = XL' },
                    { step: '4', description: '7 = VII' },
                    { step: '5', description: 'Answer: XLVII' }
                ]
            },
            {
                heading: 'Converting Roman to Arabic',
                type: 'steps',
                items: [
                    { step: '1', description: 'What is MCMLIV in numbers?' },
                    { step: '2', description: 'M = 1000' },
                    { step: '3', description: 'CM = 900 (1000 - 100)' },
                    { step: '4', description: 'L = 50' },
                    { step: '5', description: 'IV = 4' },
                    { step: '6', description: 'Total: 1000 + 900 + 50 + 4 = 1954' }
                ]
            },
            {
                heading: 'Numbers 1 to 10',
                type: 'table',
                headers: ['Arabic', 'Roman'],
                rows: [
                    ['1', 'I'],
                    ['2', 'II'],
                    ['3', 'III'],
                    ['4', 'IV'],
                    ['5', 'V'],
                    ['6', 'VI'],
                    ['7', 'VII'],
                    ['8', 'VIII'],
                    ['9', 'IX'],
                    ['10', 'X']
                ]
            },
            {
                heading: 'Practice Problems',
                type: 'table',
                headers: ['Problem', 'Answer'],
                rows: [
                    ['Write 24 in Roman', 'XXIV'],
                    ['Write 99 in Roman', 'XCIX'],
                    ['What is LXXV?', '75'],
                    ['What is CDXLIV?', '444']
                ]
            }
        ],
        keyPoints: [
            'I=1, V=5, X=10, L=50, C=100, D=500, M=1000',
            'Smaller BEFORE larger = subtract (IV = 4)',
            'Smaller AFTER larger = add (VI = 6)',
            'No more than 3 of the same in a row'
        ]
    },
    'math-unit-26': {
        title: 'Temperature',
        subject: 'Measurement',
        sections: [
            {
                heading: 'What is Temperature?',
                type: 'text',
                content: 'Temperature measures how hot or cold something is. We use thermometers to measure temperature.'
            },
            {
                heading: 'Temperature Scales',
                type: 'diagram',
                diagramType: 'thermometer-comparison',
                data: {
                    title: 'Celsius vs Fahrenheit',
                    scales: [
                        { name: 'Celsius (°C)', boiling: 100, freezing: 0, body: 37 },
                        { name: 'Fahrenheit (°F)', boiling: 212, freezing: 32, body: 98.6 }
                    ]
                }
            },
            {
                heading: 'Temperature Units',
                type: 'definition',
                definitions: [
                    { term: 'Celsius (°C)', definition: 'Metric system, used in most countries including Sierra Leone' },
                    { term: 'Fahrenheit (°F)', definition: 'Imperial system, used in USA' },
                    { term: 'Kelvin (K)', definition: 'Scientific unit (0 K = absolute zero)' }
                ]
            },
            {
                heading: 'Important Temperatures',
                type: 'table',
                headers: ['Description', 'Celsius', 'Fahrenheit'],
                rows: [
                    ['Water freezes', '0°C', '32°F'],
                    ['Room temperature', '20-25°C', '68-77°F'],
                    ['Normal body temperature', '36-37°C', '96.8-98.6°F'],
                    ['Water boils', '100°C', '212°F'],
                    ['Hot day in Freetown', '32-35°C', '90-95°F']
                ]
            },
            {
                heading: 'Reading Thermometers',
                type: 'steps',
                items: [
                    { step: '1', description: 'Look at the scale markings' },
                    { step: '2', description: 'Identify what each small mark represents' },
                    { step: '3', description: 'Read the level of the liquid (mercury or alcohol)' },
                    { step: '4', description: 'Include the unit (°C or °F)' }
                ]
            },
            {
                heading: 'Temperature Changes',
                type: 'definition',
                definitions: [
                    { term: 'Rise', definition: 'Temperature goes UP (warmer)' },
                    { term: 'Fall/Drop', definition: 'Temperature goes DOWN (cooler)' },
                    { term: 'Example', description: 'From 25°C to 30°C is a rise of 5°C' }
                ]
            },
            {
                heading: 'Example Problem',
                type: 'steps',
                items: [
                    { step: '1', description: 'Morning temperature: 22°C. Afternoon: 34°C. What is the rise?' },
                    { step: '2', description: 'Rise = 34 - 22 = 12°C' }
                ]
            },
            {
                heading: 'Negative Temperatures',
                type: 'text',
                content: 'Temperatures below zero are negative. -5°C means 5 degrees below zero (very cold!).'
            },
            {
                heading: 'Practice Problems',
                type: 'table',
                headers: ['Problem', 'Answer'],
                rows: [
                    ['Rise from 15°C to 28°C', '13°C'],
                    ['Drop from 30°C to 18°C', '12°C'],
                    ['What is colder: -3°C or 2°C?', '-3°C'],
                    ['Normal body temp in °C?', 'About 37°C']
                ]
            }
        ],
        keyPoints: [
            'Celsius is the common temperature scale in Sierra Leone',
            'Water freezes at 0°C, boils at 100°C',
            'Normal body temperature: about 37°C',
            'Negative temperatures are below zero (cold!)'
        ]
    },
    'math-unit-27': {
        title: 'Mean, Mode and Median',
        subject: 'Data Handling',
        sections: [
            {
                heading: 'Measures of Central Tendency',
                type: 'text',
                content: 'Mean, mode, and median are three different ways to find the "middle" or "average" of a set of data.'
            },
            {
                heading: 'The Three Averages',
                type: 'diagram',
                diagramType: 'averages-comparison',
                data: {
                    title: 'Mean, Mode, and Median',
                    data: [3, 5, 5, 7, 10],
                    mean: 6,
                    mode: 5,
                    median: 5
                }
            },
            {
                heading: 'Definitions',
                type: 'definition',
                definitions: [
                    { term: 'Mean', definition: 'The total divided by the count (the "average")' },
                    { term: 'Mode', definition: 'The most common value (appears most often)' },
                    { term: 'Median', definition: 'The middle value when data is ordered' }
                ]
            },
            {
                heading: 'Finding the Mean',
                type: 'steps',
                items: [
                    { step: '1', description: 'Data: 4, 7, 8, 9, 12' },
                    { step: '2', description: 'Add all values: 4 + 7 + 8 + 9 + 12 = 40' },
                    { step: '3', description: 'Count the values: 5' },
                    { step: '4', description: 'Divide: Mean = 40 ÷ 5 = 8' }
                ]
            },
            {
                heading: 'Mean Formula',
                type: 'text',
                content: 'Mean = $\\frac{Sum of all values}{Number of values}$'
            },
            {
                heading: 'Finding the Mode',
                type: 'steps',
                items: [
                    { step: '1', description: 'Data: 3, 5, 5, 7, 8, 5, 9' },
                    { step: '2', description: 'Look for the number that appears most often' },
                    { step: '3', description: '5 appears 3 times (more than any other)' },
                    { step: '4', description: 'Mode = 5' }
                ]
            },
            {
                heading: 'Mode Notes',
                type: 'list',
                items: [
                    { title: 'No Mode', description: 'If all values appear the same number of times, there is no mode' },
                    { title: 'Bimodal', description: 'If two values appear the same number of times (and more than others), there are two modes' }
                ]
            },
            {
                heading: 'Finding the Median (Odd Count)',
                type: 'steps',
                items: [
                    { step: '1', description: 'Data: 7, 3, 9, 1, 5' },
                    { step: '2', description: 'Order the data: 1, 3, 5, 7, 9' },
                    { step: '3', description: '5 values, so middle is the 3rd value' },
                    { step: '4', description: 'Median = 5' }
                ]
            },
            {
                heading: 'Finding the Median (Even Count)',
                type: 'steps',
                items: [
                    { step: '1', description: 'Data: 2, 4, 6, 8' },
                    { step: '2', description: '4 values, so find middle two (2nd and 3rd)' },
                    { step: '3', description: 'Middle values: 4 and 6' },
                    { step: '4', description: 'Median = (4 + 6) ÷ 2 = 5' }
                ]
            },
            {
                heading: 'Practice Problems',
                type: 'table',
                headers: ['Data Set', 'Mean', 'Mode', 'Median'],
                rows: [
                    ['2, 4, 4, 6, 9', '5', '4', '4'],
                    ['10, 20, 30, 40, 50', '30', 'No mode', '30'],
                    ['3, 3, 5, 7, 7, 9', '5.67', '3 and 7', '6'],
                    ['5, 10, 15, 20', '12.5', 'No mode', '12.5']
                ]
            }
        ],
        keyPoints: [
            'Mean = sum ÷ count ("average")',
            'Mode = most frequent value',
            'Median = middle value when ordered',
            'For even count: median = average of two middle values'
        ]
    },
    'math-unit-28': {
        title: 'Simple Interest',
        subject: 'Money & Commerce',
        sections: [
            {
                heading: 'What is Interest?',
                type: 'text',
                content: 'Interest is money paid for borrowing or earned for saving. Simple interest is calculated only on the original amount (principal).'
            },
            {
                heading: 'Key Terms',
                type: 'definition',
                definitions: [
                    { term: 'Principal (P)', definition: 'The original amount of money borrowed or saved' },
                    { term: 'Rate (R)', definition: 'The percentage charged or paid per year' },
                    { term: 'Time (T)', definition: 'How long the money is borrowed/saved (usually in years)' },
                    { term: 'Interest (I)', definition: 'The extra money paid or earned' }
                ]
            },
            {
                heading: 'Simple Interest Formula',
                type: 'diagram',
                diagramType: 'formula-box',
                data: {
                    title: 'Simple Interest',
                    formula: 'I = \\frac{P × R × T}{100}',
                    variables: [
                        { symbol: 'I', meaning: 'Interest' },
                        { symbol: 'P', meaning: 'Principal' },
                        { symbol: 'R', meaning: 'Rate (% per year)' },
                        { symbol: 'T', meaning: 'Time (years)' }
                    ]
                }
            },
            {
                heading: 'Example 1: Finding Interest',
                type: 'steps',
                items: [
                    { step: '1', description: 'Find interest on Le 5,000 for 2 years at 10% per year' },
                    { step: '2', description: 'P = 5,000, R = 10, T = 2' },
                    { step: '3', description: '$I = \\frac{5000 × 10 × 2}{100}$' },
                    { step: '4', description: '$I = \\frac{100,000}{100} =$ Le 1,000' }
                ]
            },
            {
                heading: 'Example 2: Finding Total Amount',
                type: 'steps',
                items: [
                    { step: '1', description: 'Le 8,000 is saved for 3 years at 5% per year. Find total.' },
                    { step: '2', description: '$I = \\frac{8000 × 5 × 3}{100} = \\frac{120,000}{100} =$ Le 1,200' },
                    { step: '3', description: 'Total Amount = Principal + Interest' },
                    { step: '4', description: 'Total = 8,000 + 1,200 = Le 9,200' }
                ]
            },
            {
                heading: 'Rearranged Formulas',
                type: 'definition',
                definitions: [
                    { term: 'To find Principal', definition: '$P = \\frac{I × 100}{R × T}$' },
                    { term: 'To find Rate', definition: '$R = \\frac{I × 100}{P × T}$' },
                    { term: 'To find Time', definition: '$T = \\frac{I × 100}{P × R}$' }
                ]
            },
            {
                heading: 'Example 3: Finding Rate',
                type: 'steps',
                items: [
                    { step: '1', description: 'Le 2,000 earned Le 400 interest in 4 years. Find rate.' },
                    { step: '2', description: '$R = \\frac{I × 100}{P × T}$' },
                    { step: '3', description: '$R = \\frac{400 × 100}{2000 × 4}$' },
                    { step: '4', description: '$R = \\frac{40,000}{8,000} = 5\\%$' }
                ]
            },
            {
                heading: 'Practice Problems',
                type: 'table',
                headers: ['Problem', 'Answer'],
                rows: [
                    ['Interest on Le 1,000 for 2 years at 8%', 'Le 160'],
                    ['Interest on Le 6,000 for 3 years at 5%', 'Le 900'],
                    ['Total if Le 4,000 saved for 5 years at 6%', 'Le 5,200'],
                    ['What rate if Le 2,500 gives Le 250 interest in 2 years?', '5%']
                ]
            }
        ],
        keyPoints: [
            '$I = \\frac{P × R × T}{100}$',
            'Total Amount = Principal + Interest',
            'Rate is always per year (per annum)',
            'Time must be in years'
        ]
    },
    'math-unit-29': {
        title: 'Lines: Parallel and Perpendicular',
        subject: 'Geometry',
        sections: [
            {
                heading: 'Types of Lines',
                type: 'text',
                content: 'Lines can have special relationships with each other based on how they meet or don\'t meet.'
            },
            {
                heading: 'Line Relationships',
                type: 'diagram',
                diagramType: 'line-types',
                data: {
                    title: 'Parallel and Perpendicular Lines',
                    types: [
                        { name: 'Parallel', symbol: '∥', description: 'Never meet, same direction' },
                        { name: 'Perpendicular', symbol: '⊥', description: 'Meet at 90°' },
                        { name: 'Intersecting', symbol: '×', description: 'Cross at any angle' }
                    ]
                }
            },
            {
                heading: 'Parallel Lines',
                type: 'definition',
                definitions: [
                    { term: 'Definition', definition: 'Lines that are always the same distance apart and NEVER meet' },
                    { term: 'Symbol', definition: 'AB ∥ CD means "line AB is parallel to line CD"' },
                    { term: 'Examples', definition: 'Railway tracks, opposite sides of a rectangle, ruled lines in a notebook' }
                ]
            },
            {
                heading: 'Parallel Lines in Shapes',
                type: 'list',
                items: [
                    { title: 'Rectangle/Square', description: 'Opposite sides are parallel' },
                    { title: 'Parallelogram', description: 'Both pairs of opposite sides are parallel' },
                    { title: 'Trapezium', description: 'One pair of parallel sides' }
                ]
            },
            {
                heading: 'Perpendicular Lines',
                type: 'definition',
                definitions: [
                    { term: 'Definition', definition: 'Lines that meet at a RIGHT ANGLE (90°)' },
                    { term: 'Symbol', definition: 'AB ⊥ CD means "line AB is perpendicular to line CD"' },
                    { term: 'Examples', definition: 'Corner of a book, plus sign (+), corner of a room' }
                ]
            },
            {
                heading: 'Identifying Perpendicular Lines',
                type: 'steps',
                items: [
                    { step: '1', description: 'Look for the right angle symbol (small square) at intersection' },
                    { step: '2', description: 'Use a protractor to measure - should be exactly 90°' },
                    { step: '3', description: 'Use a set square to check' }
                ]
            },
            {
                heading: 'Real-Life Examples',
                type: 'table',
                headers: ['Type', 'Example'],
                rows: [
                    ['Parallel', 'Railway tracks'],
                    ['Parallel', 'Lines on ruled paper'],
                    ['Parallel', 'Opposite edges of a door'],
                    ['Perpendicular', 'Floor and wall'],
                    ['Perpendicular', 'Hands of clock at 3:00'],
                    ['Perpendicular', 'Letter L']
                ]
            },
            {
                heading: 'Practice Problems',
                type: 'table',
                headers: ['Question', 'Answer'],
                rows: [
                    ['Name two parallel lines in a rectangle', 'Top and bottom sides'],
                    ['Are the hands at 12:00 parallel or perpendicular?', 'Neither (they overlap)'],
                    ['What angle do perpendicular lines make?', '90°'],
                    ['Name something with perpendicular lines', 'Corner of a table, plus sign']
                ]
            }
        ],
        keyPoints: [
            'Parallel lines never meet (symbol: ∥)',
            'Perpendicular lines meet at 90° (symbol: ⊥)',
            'Railway tracks are parallel',
            'Corner of a room shows perpendicular lines'
        ]
    },
    'math-unit-30': {
        title: 'Number Patterns and Puzzles',
        subject: 'Special Topics',
        sections: [
            {
                heading: 'What are Number Patterns?',
                type: 'text',
                content: 'Number patterns are sequences of numbers that follow a rule. Finding the rule helps us predict what comes next.'
            },
            {
                heading: 'Common Pattern Types',
                type: 'diagram',
                diagramType: 'pattern-types',
                data: {
                    title: 'Types of Number Patterns',
                    patterns: [
                        { type: 'Arithmetic', rule: 'Add/subtract same number', example: '2, 5, 8, 11...', color: '#22c55e' },
                        { type: 'Geometric', rule: 'Multiply/divide by same number', example: '3, 6, 12, 24...', color: '#3b82f6' },
                        { type: 'Square Numbers', rule: '1², 2², 3², 4²...', example: '1, 4, 9, 16, 25...', color: '#f97316' },
                        { type: 'Triangular', rule: '1, 1+2, 1+2+3...', example: '1, 3, 6, 10, 15...', color: '#8b5cf6' }
                    ]
                }
            },
            {
                heading: 'Finding the Rule',
                type: 'steps',
                items: [
                    { step: '1', description: 'Look at differences between consecutive terms' },
                    { step: '2', description: 'If differences are constant → arithmetic sequence (add/subtract)' },
                    { step: '3', description: 'If ratios are constant → geometric sequence (multiply/divide)' },
                    { step: '4', description: 'Example: 5, 10, 15, 20... (Rule: add 5)' }
                ]
            },
            {
                heading: 'Square Numbers',
                type: 'diagram',
                diagramType: 'square-numbers',
                data: {
                    title: 'First 10 Square Numbers',
                    squares: [
                        { n: 1, square: 1 },
                        { n: 2, square: 4 },
                        { n: 3, square: 9 },
                        { n: 4, square: 16 },
                        { n: 5, square: 25 },
                        { n: 6, square: 36 },
                        { n: 7, square: 49 },
                        { n: 8, square: 64 },
                        { n: 9, square: 81 },
                        { n: 10, square: 100 }
                    ]
                }
            },
            {
                heading: 'Triangular Numbers',
                type: 'definition',
                definitions: [
                    { term: 'Pattern', definition: '1, 3, 6, 10, 15, 21, 28, 36...' },
                    { term: 'Rule', definition: 'Each term = previous term + position number' },
                    { term: 'Formula', definition: 'nth triangular number = $\\frac{n(n+1)}{2}$' }
                ]
            },
            {
                heading: 'Magic Squares',
                type: 'text',
                content: 'A magic square is a grid where every row, column, and diagonal add up to the same number (the "magic constant").'
            },
            {
                heading: '3×3 Magic Square',
                type: 'table',
                headers: ['', '', ''],
                rows: [
                    ['2', '7', '6'],
                    ['9', '5', '1'],
                    ['4', '3', '8']
                ]
            },
            {
                heading: 'Magic Square Properties',
                type: 'list',
                items: [
                    { title: 'Magic constant', description: 'For 3×3 with 1-9: sum = 15' },
                    { title: 'Rows sum to 15', description: '2+7+6=15, 9+5+1=15, 4+3+8=15' },
                    { title: 'Columns sum to 15', description: '2+9+4=15, 7+5+3=15, 6+1+8=15' },
                    { title: 'Diagonals sum to 15', description: '2+5+8=15, 6+5+4=15' }
                ]
            },
            {
                heading: 'Number Puzzles',
                type: 'definition',
                definitions: [
                    { term: 'Letter puzzles', description: 'Find A: A23 + 456 = 679. Answer: A = 2' },
                    { term: 'Missing numbers', description: 'Find ?: 2, 6, ?, 18. Answer: 12 (pattern: ×2, or +4,+6,+8)' }
                ]
            },
            {
                heading: 'Practice Problems',
                type: 'table',
                headers: ['Sequence', 'Next Number'],
                rows: [
                    ['3, 7, 11, 15, ?', '19 (add 4)'],
                    ['2, 6, 18, 54, ?', '162 (×3)'],
                    ['1, 4, 9, 16, ?', '25 (square numbers)'],
                    ['1, 3, 6, 10, ?', '15 (triangular)']
                ]
            }
        ],
        keyPoints: [
            'Arithmetic: add/subtract same amount each time',
            'Geometric: multiply/divide by same amount',
            'Square numbers: 1, 4, 9, 16, 25... (n²)',
            'Triangular numbers: 1, 3, 6, 10, 15... (add 1, 2, 3, 4...)'
        ]
    }
};

export const getMathNotesContentPart3 = (unitId) => {
    return mathNotesContentPart3[unitId] || null;
};
