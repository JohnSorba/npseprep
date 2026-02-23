// Mathematics Notes Content Part 2 (Units 11-20)
// Based on MBSSE Class 6 Syllabus with Examples and Diagrams

export const mathNotesContentPart2 = {
    'math-unit-11': {
        title: 'Time and Speed',
        subject: 'Measurement',
        sections: [
            {
                heading: 'Understanding Speed',
                type: 'text',
                content: 'Speed tells us how fast something is moving. It is the distance covered in a unit of time.'
            },
            {
                heading: 'Speed, Distance, Time Triangle',
                type: 'diagram',
                diagramType: 'speed-triangle',
                data: {
                    title: 'The Speed Triangle',
                    formula: 'Cover what you want to find',
                    positions: {
                        top: 'Distance (D)',
                        bottomLeft: 'Speed (S)',
                        bottomRight: 'Time (T)'
                    }
                }
            },
            {
                heading: 'Key Formulas',
                type: 'definition',
                definitions: [
                    { term: 'Speed', definition: '$S = \\frac{D}{T}$ (Distance ÷ Time)' },
                    { term: 'Distance', definition: '$D = S × T$ (Speed × Time)' },
                    { term: 'Time', definition: '$T = \\frac{D}{S}$ (Distance ÷ Speed)' }
                ]
            },
            {
                heading: 'Units of Measurement',
                type: 'table',
                headers: ['Quantity', 'Common Units'],
                rows: [
                    ['Distance', 'km, m, miles'],
                    ['Time', 'hours (h), minutes (min), seconds (s)'],
                    ['Speed', 'km/h, m/s, mph']
                ]
            },
            {
                heading: 'Example 1: Finding Speed',
                type: 'steps',
                items: [
                    { step: '1', description: 'A car travels 240 km in 4 hours. Find the speed.' },
                    { step: '2', description: 'Speed = Distance ÷ Time' },
                    { step: '3', description: 'Speed = 240 ÷ 4' },
                    { step: '4', description: 'Speed = 60 km/h' }
                ]
            },
            {
                heading: 'Example 2: Finding Distance',
                type: 'steps',
                items: [
                    { step: '1', description: 'A bus travels at 50 km/h for 3 hours. How far does it go?' },
                    { step: '2', description: 'Distance = Speed × Time' },
                    { step: '3', description: 'Distance = 50 × 3' },
                    { step: '4', description: 'Distance = 150 km' }
                ]
            },
            {
                heading: 'Example 3: Finding Time',
                type: 'steps',
                items: [
                    { step: '1', description: 'A bicycle covers 30 km at 15 km/h. How long does it take?' },
                    { step: '2', description: 'Time = Distance ÷ Speed' },
                    { step: '3', description: 'Time = 30 ÷ 15' },
                    { step: '4', description: 'Time = 2 hours' }
                ]
            },
            {
                heading: 'Converting Units',
                type: 'definition',
                definitions: [
                    { term: 'km/h to m/s', definition: 'Multiply by $\\frac{1000}{3600} = \\frac{5}{18}$' },
                    { term: 'm/s to km/h', definition: 'Multiply by $\\frac{3600}{1000} = \\frac{18}{5}$' },
                    { term: 'Example', definition: '$72$ km/h $= 72 × \\frac{5}{18} = 20$ m/s' }
                ]
            },
            {
                heading: 'Time Calculations',
                type: 'definition',
                definitions: [
                    { term: '1 hour', definition: '= 60 minutes = 3600 seconds' },
                    { term: '1 day', definition: '= 24 hours' },
                    { term: '1 week', definition: '= 7 days' }
                ]
            },
            {
                heading: 'Practice Problems',
                type: 'table',
                headers: ['Problem', 'Answer'],
                rows: [
                    ['Speed for 180 km in 3 hours', '60 km/h'],
                    ['Distance at 80 km/h for 2.5 hours', '200 km'],
                    ['Time for 125 km at 25 km/h', '5 hours'],
                    ['Convert 36 km/h to m/s', '10 m/s']
                ]
            }
        ],
        keyPoints: [
            'Speed = Distance ÷ Time',
            'Distance = Speed × Time',
            'Time = Distance ÷ Speed',
            'To convert km/h to m/s, multiply by 5/18'
        ]
    },
    'math-unit-12': {
        title: 'Polygons',
        subject: 'Geometry',
        sections: [
            {
                heading: 'What is a Polygon?',
                type: 'text',
                content: 'A polygon is a closed 2D shape with straight sides. The word comes from Greek: "poly" (many) and "gon" (angle).'
            },
            {
                heading: 'Types of Polygons',
                type: 'diagram',
                diagramType: 'polygon-gallery',
                data: {
                    title: 'Common Polygons',
                    polygons: [
                        { name: 'Triangle', sides: 3, color: '#ef4444' },
                        { name: 'Quadrilateral', sides: 4, color: '#f97316' },
                        { name: 'Pentagon', sides: 5, color: '#eab308' },
                        { name: 'Hexagon', sides: 6, color: '#22c55e' },
                        { name: 'Heptagon', sides: 7, color: '#3b82f6' },
                        { name: 'Octagon', sides: 8, color: '#8b5cf6' }
                    ]
                }
            },
            {
                heading: 'Polygon Names and Angles',
                type: 'table',
                headers: ['Name', 'Sides', 'Sum of Interior Angles'],
                rows: [
                    ['Triangle', '3', '$180°$'],
                    ['Quadrilateral', '4', '$360°$'],
                    ['Pentagon', '5', '$540°$'],
                    ['Hexagon', '6', '$720°$'],
                    ['Heptagon', '7', '$900°$'],
                    ['Octagon', '8', '$1080°$'],
                    ['Nonagon', '9', '$1260°$'],
                    ['Decagon', '10', '$1440°$']
                ]
            },
            {
                heading: 'Interior Angle Sum Formula',
                type: 'text',
                content: 'Sum of interior angles = $180° × (n - 2)$, where n = number of sides'
            },
            {
                heading: 'Example: Pentagon Angles',
                type: 'steps',
                items: [
                    { step: '1', description: 'Pentagon has 5 sides (n = 5)' },
                    { step: '2', description: 'Sum = 180° × (5 - 2)' },
                    { step: '3', description: 'Sum = 180° × 3' },
                    { step: '4', description: 'Sum = 540°' }
                ]
            },
            {
                heading: 'Regular Polygons',
                type: 'text',
                content: 'In a REGULAR polygon, all sides and all angles are equal.'
            },
            {
                heading: 'Each Angle in a Regular Polygon',
                type: 'definition',
                definitions: [
                    { term: 'Formula', definition: 'Each interior angle = $\\frac{180° × (n-2)}{n}$' },
                    { term: 'Regular Pentagon', definition: '$\\frac{540°}{5} = 108°$ each' },
                    { term: 'Regular Hexagon', definition: '$\\frac{720°}{6} = 120°$ each' },
                    { term: 'Regular Octagon', definition: '$\\frac{1080°}{8} = 135°$ each' }
                ]
            },
            {
                heading: 'Exterior Angles',
                type: 'definition',
                definitions: [
                    { term: 'Key Fact', definition: 'Sum of exterior angles = $360°$ (for any convex polygon)' },
                    { term: 'Each exterior angle', definition: '$= \\frac{360°}{n}$' },
                    { term: 'Regular Hexagon', definition: 'Each exterior = $\\frac{360°}{6} = 60°$' }
                ]
            },
            {
                heading: 'Practice Problems',
                type: 'table',
                headers: ['Problem', 'Answer'],
                rows: [
                    ['Sum of angles in a heptagon (7 sides)', '$900°$'],
                    ['Each interior angle in regular octagon', '$135°$'],
                    ['Each exterior angle in regular pentagon', '$72°$'],
                    ['How many sides if sum of angles = $1800°$?', '12 sides']
                ]
            }
        ],
        keyPoints: [
            'Sum of interior angles = $180° × (n - 2)$',
            'Sum of exterior angles = $360°$',
            'Regular polygon: all sides and angles equal',
            'Interior + Exterior angle = $180°$'
        ]
    },
    'math-unit-13': {
        title: 'Ratio and Proportions',
        subject: 'Ratio & Percentages',
        sections: [
            {
                heading: 'What is Ratio?',
                type: 'text',
                content: 'A ratio compares two or more quantities of the same kind. We write it as a:b or a/b.'
            },
            {
                heading: 'Ratio Visual',
                type: 'diagram',
                diagramType: 'ratio-blocks',
                data: {
                    title: 'Ratio 3:2 (Red to Blue)',
                    parts: [
                        { color: '#ef4444', count: 3 },
                        { color: '#3b82f6', count: 2 }
                    ]
                }
            },
            {
                heading: 'Writing Ratios',
                type: 'definition',
                definitions: [
                    { term: '20 boys, 15 girls', definition: 'Boys : Girls = 20 : 15 = 4 : 3' },
                    { term: '6 cats, 9 dogs', definition: 'Cats : Dogs = 6 : 9 = 2 : 3' },
                    { term: 'Le 500 to Le 750', definition: '500 : 750 = 2 : 3' }
                ]
            },
            {
                heading: 'Simplifying Ratios',
                type: 'steps',
                items: [
                    { step: '1', description: 'Find the HCF of both numbers' },
                    { step: '2', description: 'Divide both by the HCF' },
                    { step: '3', description: 'Example: 24 : 36 → HCF = 12 → 2 : 3' }
                ]
            },
            {
                heading: 'Sharing in a Given Ratio',
                type: 'steps',
                items: [
                    { step: '1', description: 'Share Le 2,000 in ratio 3 : 2' },
                    { step: '2', description: 'Total parts = 3 + 2 = 5' },
                    { step: '3', description: 'Value of 1 part = 2,000 ÷ 5 = Le 400' },
                    { step: '4', description: 'First share = 3 × 400 = Le 1,200' },
                    { step: '5', description: 'Second share = 2 × 400 = Le 800' }
                ]
            },
            {
                heading: 'Proportion',
                type: 'text',
                content: 'Two ratios are in proportion if they are equal. a : b = c : d means $\\frac{a}{b} = \\frac{c}{d}$'
            },
            {
                heading: 'Example: Checking Proportion',
                type: 'steps',
                items: [
                    { step: '1', description: 'Are 6 : 9 and 8 : 12 in proportion?' },
                    { step: '2', description: '6 : 9 = 2 : 3 (divide by 3)' },
                    { step: '3', description: '8 : 12 = 2 : 3 (divide by 4)' },
                    { step: '4', description: 'Yes! Both equal 2 : 3' }
                ]
            },
            {
                heading: 'Finding Missing Values',
                type: 'steps',
                items: [
                    { step: '1', description: 'If 3 : 5 = 12 : x, find x' },
                    { step: '2', description: 'Cross multiply: 3 × x = 5 × 12' },
                    { step: '3', description: '3x = 60' },
                    { step: '4', description: 'x = 20' }
                ]
            },
            {
                heading: 'Word Problem Example',
                type: 'list',
                items: [
                    { title: 'Problem', description: 'A recipe uses 2 cups flour for every 3 cups water. How much flour for 9 cups water?' },
                    { title: 'Solution', description: '2 : 3 = x : 9. Cross multiply: 3x = 18, so x = 6 cups flour' }
                ]
            },
            {
                heading: 'Practice Problems',
                type: 'table',
                headers: ['Problem', 'Answer'],
                rows: [
                    ['Simplify 35 : 21', '5 : 3'],
                    ['Share Le 900 in ratio 2 : 1', 'Le 600 and Le 300'],
                    ['If 4 : 7 = 20 : x, find x', '35'],
                    ['Are 5:8 and 15:24 in proportion?', 'Yes']
                ]
            }
        ],
        keyPoints: [
            'Ratio compares quantities of the same kind',
            'Simplify by dividing by HCF',
            'To share: add parts, find value of 1 part, multiply',
            'Cross multiply to find missing values in proportions'
        ]
    },
    'math-unit-14': {
        title: 'Percentages',
        subject: 'Ratio & Percentages',
        sections: [
            {
                heading: 'What is Percentage?',
                type: 'text',
                content: 'Percentage means "out of 100". The symbol % represents per hundred. 50% means 50 out of 100.'
            },
            {
                heading: 'Percentage Visual',
                type: 'diagram',
                diagramType: 'percentage-bar',
                data: {
                    title: '75% Shaded',
                    percentage: 75,
                    shadedColor: '#22c55e',
                    totalBlocks: 10
                }
            },
            {
                heading: 'Converting to Percentages',
                type: 'table',
                headers: ['Fraction', 'Decimal', 'Percentage'],
                rows: [
                    ['$\\frac{1}{2}$', '0.5', '50%'],
                    ['$\\frac{1}{4}$', '0.25', '25%'],
                    ['$\\frac{3}{4}$', '0.75', '75%'],
                    ['$\\frac{1}{5}$', '0.2', '20%'],
                    ['$\\frac{1}{10}$', '0.1', '10%']
                ]
            },
            {
                heading: 'Fraction to Percentage',
                type: 'steps',
                items: [
                    { step: '1', description: 'Method: Multiply by 100%' },
                    { step: '2', description: 'Example: $\\frac{3}{5}$ to percentage' },
                    { step: '3', description: '$\\frac{3}{5} × 100\\% = \\frac{300}{5}\\% = 60\\%$' }
                ]
            },
            {
                heading: 'Percentage of a Number',
                type: 'definition',
                definitions: [
                    { term: '25% of 80', definition: '$= \\frac{25}{100} × 80 = 20$' },
                    { term: '15% of 200', definition: '$= \\frac{15}{100} × 200 = 30$' },
                    { term: '8% of 150', definition: '$= \\frac{8}{100} × 150 = 12$' }
                ]
            },
            {
                heading: 'Finding What Percentage',
                type: 'steps',
                items: [
                    { step: '1', description: 'What percentage is 15 of 60?' },
                    { step: '2', description: 'Formula: $\\frac{part}{whole} × 100\\%$' },
                    { step: '3', description: '$\\frac{15}{60} × 100\\% = 25\\%$' }
                ]
            },
            {
                heading: 'Percentage Increase',
                type: 'steps',
                items: [
                    { step: '1', description: 'Price rose from Le 80 to Le 100' },
                    { step: '2', description: 'Increase = 100 - 80 = Le 20' },
                    { step: '3', description: '% Increase = $\\frac{20}{80} × 100\\% = 25\\%$' }
                ]
            },
            {
                heading: 'Percentage Decrease',
                type: 'steps',
                items: [
                    { step: '1', description: 'Price dropped from Le 500 to Le 400' },
                    { step: '2', description: 'Decrease = 500 - 400 = Le 100' },
                    { step: '3', description: '% Decrease = $\\frac{100}{500} × 100\\% = 20\\%$' }
                ]
            },
            {
                heading: 'Practice Problems',
                type: 'table',
                headers: ['Problem', 'Answer'],
                rows: [
                    ['30% of 150', '45'],
                    ['What % is 24 of 80?', '30%'],
                    ['Convert $\\frac{2}{5}$ to %', '40%'],
                    ['% increase from 50 to 65', '30%']
                ]
            }
        ],
        keyPoints: [
            'Percentage means out of 100',
            'To find % of number: multiply by percentage/100',
            '% change = (change ÷ original) × 100',
            'Fraction to %: multiply by 100'
        ]
    },
    'math-unit-15': {
        title: 'Multiplying and Dividing by 10, 100, 1000',
        subject: 'Basic Operations',
        sections: [
            {
                heading: 'The Pattern',
                type: 'text',
                content: 'When multiplying by powers of 10, the decimal point moves RIGHT. When dividing, it moves LEFT.'
            },
            {
                heading: 'Decimal Movement - Multiplication',
                type: 'diagram',
                diagramType: 'decimal-shift',
                data: {
                    title: 'Multiplying Moves Decimal Right',
                    direction: 'right',
                    examples: [
                        { original: '4.5', operation: '× 10', result: '45' },
                        { original: '4.5', operation: '× 100', result: '450' },
                        { original: '4.5', operation: '× 1000', result: '4500' }
                    ]
                }
            },
            {
                heading: 'Multiplication Examples',
                type: 'table',
                headers: ['Number', '× 10', '× 100', '× 1000'],
                rows: [
                    ['3.7', '37', '370', '3700'],
                    ['0.45', '4.5', '45', '450'],
                    ['12.5', '125', '1250', '12500'],
                    ['0.008', '0.08', '0.8', '8']
                ]
            },
            {
                heading: 'Decimal Movement - Division',
                type: 'diagram',
                diagramType: 'decimal-shift',
                data: {
                    title: 'Dividing Moves Decimal Left',
                    direction: 'left',
                    examples: [
                        { original: '450', operation: '÷ 10', result: '45' },
                        { original: '450', operation: '÷ 100', result: '4.5' },
                        { original: '450', operation: '÷ 1000', result: '0.45' }
                    ]
                }
            },
            {
                heading: 'Division Examples',
                type: 'table',
                headers: ['Number', '÷ 10', '÷ 100', '÷ 1000'],
                rows: [
                    ['570', '57', '5.7', '0.57'],
                    ['8400', '840', '84', '8.4'],
                    ['25', '2.5', '0.25', '0.025'],
                    ['3', '0.3', '0.03', '0.003']
                ]
            },
            {
                heading: 'The Rule',
                type: 'definition',
                definitions: [
                    { term: '× 10', definition: 'Move decimal 1 place RIGHT' },
                    { term: '× 100', definition: 'Move decimal 2 places RIGHT' },
                    { term: '× 1000', definition: 'Move decimal 3 places RIGHT' },
                    { term: '÷ 10', definition: 'Move decimal 1 place LEFT' },
                    { term: '÷ 100', definition: 'Move decimal 2 places LEFT' },
                    { term: '÷ 1000', definition: 'Move decimal 3 places LEFT' }
                ]
            },
            {
                heading: 'Practice Problems',
                type: 'table',
                headers: ['Problem', 'Answer'],
                rows: [
                    ['$6.25 × 10$', '62.5'],
                    ['$0.7 × 100$', '70'],
                    ['$340 ÷ 100$', '3.4'],
                    ['$5 ÷ 1000$', '0.005']
                ]
            }
        ],
        keyPoints: [
            'Multiplying: decimal moves RIGHT',
            'Dividing: decimal moves LEFT',
            'Count zeros to know places to move',
            'Add zeros when needed'
        ]
    },
    'math-unit-16': {
        title: 'Multiplying and Dividing Decimals',
        subject: 'Fractions & Decimals',
        sections: [
            {
                heading: 'Multiplying Decimals Method',
                type: 'text',
                content: 'Multiply as whole numbers, then count total decimal places in both numbers and put the decimal point that many places from the right.'
            },
            {
                heading: 'Multiplying Decimals Example',
                type: 'steps',
                items: [
                    { step: '1', description: 'Calculate $2.5 × 1.2$' },
                    { step: '2', description: 'Multiply: 25 × 12 = 300' },
                    { step: '3', description: 'Count decimal places: 1 + 1 = 2' },
                    { step: '4', description: 'Place decimal 2 places from right: 3.00 = 3' }
                ]
            },
            {
                heading: 'More Examples',
                type: 'definition',
                definitions: [
                    { term: '$0.3 × 0.4$', definition: '3 × 4 = 12, 2 decimal places → 0.12' },
                    { term: '$1.5 × 0.6$', definition: '15 × 6 = 90, 2 decimal places → 0.90 = 0.9' },
                    { term: '$2.25 × 4$', definition: '225 × 4 = 900, 2 decimal places → 9.00 = 9' }
                ]
            },
            {
                heading: 'Dividing Decimals by Whole Numbers',
                type: 'steps',
                items: [
                    { step: '1', description: 'Calculate $7.5 ÷ 5$' },
                    { step: '2', description: 'Divide as usual, keeping decimal in same position' },
                    { step: '3', description: '$7.5 ÷ 5 = 1.5$' }
                ]
            },
            {
                heading: 'Dividing by Decimals',
                type: 'steps',
                items: [
                    { step: '1', description: 'Calculate $6 ÷ 0.2$' },
                    { step: '2', description: 'Make divisor whole: multiply both by 10' },
                    { step: '3', description: '$= 60 ÷ 2 = 30$' }
                ]
            },
            {
                heading: 'Practice Problems',
                type: 'table',
                headers: ['Problem', 'Answer'],
                rows: [
                    ['$3.2 × 4$', '12.8'],
                    ['$0.5 × 0.5$', '0.25'],
                    ['$8.4 ÷ 4$', '2.1'],
                    ['$12 ÷ 0.3$', '40']
                ]
            }
        ],
        keyPoints: [
            'For multiplication: add decimal places of both numbers',
            'For division: make divisor a whole number first',
            'Count places carefully',
            'Check your answer makes sense'
        ]
    },
    'math-unit-17': {
        title: 'Volume and Capacity',
        subject: 'Measurement',
        sections: [
            {
                heading: 'What is Volume?',
                type: 'text',
                content: 'Volume is the amount of 3D space an object takes up, measured in cubic units (cm³, m³).'
            },
            {
                heading: 'Cuboid Diagram',
                type: 'diagram',
                diagramType: 'cuboid',
                data: {
                    title: 'Cuboid: 5cm × 4cm × 3cm',
                    length: 5,
                    width: 4,
                    height: 3,
                    showFormula: true
                }
            },
            {
                heading: 'Volume Formulas',
                type: 'definition',
                definitions: [
                    { term: 'Cube', definition: '$V = s³$ (side × side × side)' },
                    { term: 'Cuboid', definition: '$V = L × W × H$ (length × width × height)' },
                    { term: 'Cylinder', definition: '$V = πr²h$' }
                ]
            },
            {
                heading: 'Example 1: Volume of Cuboid',
                type: 'steps',
                items: [
                    { step: '1', description: 'Find volume: L = 8cm, W = 5cm, H = 4cm' },
                    { step: '2', description: 'V = L × W × H' },
                    { step: '3', description: 'V = 8 × 5 × 4' },
                    { step: '4', description: 'V = 160 cm³' }
                ]
            },
            {
                heading: 'Example 2: Volume of Cube',
                type: 'steps',
                items: [
                    { step: '1', description: 'Find volume of cube with side 6cm' },
                    { step: '2', description: 'V = s³ = 6³' },
                    { step: '3', description: 'V = 6 × 6 × 6 = 216 cm³' }
                ]
            },
            {
                heading: 'Capacity',
                type: 'text',
                content: 'Capacity is how much liquid a container can hold. 1 litre = 1000 ml = 1000 cm³'
            },
            {
                heading: 'Capacity Conversions',
                type: 'table',
                headers: ['From', 'To', 'Example'],
                rows: [
                    ['Litres', 'Millilitres', '× 1000 (2 L = 2000 ml)'],
                    ['Millilitres', 'Litres', '÷ 1000 (500 ml = 0.5 L)'],
                    ['cm³', 'Litres', '÷ 1000 (3000 cm³ = 3 L)']
                ]
            },
            {
                heading: 'Word Problem',
                type: 'steps',
                items: [
                    { step: '1', description: 'A fish tank is 50cm × 30cm × 40cm. How many litres of water can it hold?' },
                    { step: '2', description: 'Volume = 50 × 30 × 40 = 60,000 cm³' },
                    { step: '3', description: 'In litres = 60,000 ÷ 1000 = 60 L' }
                ]
            },
            {
                heading: 'Practice Problems',
                type: 'table',
                headers: ['Problem', 'Answer'],
                rows: [
                    ['Volume: cube side 5cm', '125 cm³'],
                    ['Volume: 10×8×7 cm', '560 cm³'],
                    ['4500 ml to litres', '4.5 L'],
                    ['How many cm³ in 2.5 L?', '2500 cm³']
                ]
            }
        ],
        keyPoints: [
            'Volume = L × W × H for cuboids',
            'Cube volume = s³',
            '1 litre = 1000 ml = 1000 cm³',
            'Volume uses cubic units (cm³, m³)'
        ]
    },
    'math-unit-18': {
        title: 'Angles',
        subject: 'Geometry',
        sections: [
            {
                heading: 'What is an Angle?',
                type: 'text',
                content: 'An angle is formed when two lines meet at a point. The point is called the vertex. We measure angles in degrees (°).'
            },
            {
                heading: 'Interactive Angle Explorer',
                type: 'interactive',
                component: 'angle-explorer'
            },
            {
                heading: 'Types of Angles',
                type: 'diagram',
                diagramType: 'angle-types',
                data: {
                    title: 'Types of Angles',
                    angles: [
                        { type: 'Acute', range: '0° - 90°', example: 45, color: '#22c55e' },
                        { type: 'Right', range: '= 90°', example: 90, color: '#3b82f6' },
                        { type: 'Obtuse', range: '90° - 180°', example: 120, color: '#f97316' },
                        { type: 'Straight', range: '= 180°', example: 180, color: '#8b5cf6' },
                        { type: 'Reflex', range: '180° - 360°', example: 270, color: '#ef4444' }
                    ]
                }
            },
            {
                heading: 'Angle Types',
                type: 'table',
                headers: ['Type', 'Measure', 'Example'],
                rows: [
                    ['Acute', 'Less than 90°', '30°, 45°, 60°'],
                    ['Right', 'Exactly 90°', '90°'],
                    ['Obtuse', 'Between 90° and 180°', '100°, 120°, 150°'],
                    ['Straight', 'Exactly 180°', '180°'],
                    ['Reflex', 'Between 180° and 360°', '200°, 270°, 300°'],
                    ['Full turn', 'Exactly 360°', '360°']
                ]
            },
            {
                heading: 'Angles on a Straight Line',
                type: 'diagram',
                diagramType: 'straight-line-angles',
                data: {
                    title: 'Angles on a Straight Line = 180°',
                    angles: [{ value: 'a' }, { value: 'b' }],
                    sum: '180°'
                }
            },
            {
                heading: 'Angle Rules',
                type: 'definition',
                definitions: [
                    { term: 'Straight line', definition: 'Angles add up to 180°' },
                    { term: 'Around a point', definition: 'Angles add up to 360°' },
                    { term: 'In a triangle', definition: 'Angles add up to 180°' },
                    { term: 'In a quadrilateral', definition: 'Angles add up to 360°' }
                ]
            },
            {
                heading: 'Example: Finding Unknown Angles',
                type: 'steps',
                items: [
                    { step: '1', description: 'Angles on a straight line: x and 130°' },
                    { step: '2', description: 'x + 130° = 180°' },
                    { step: '3', description: 'x = 180° - 130°' },
                    { step: '4', description: 'x = 50°' }
                ]
            },
            {
                heading: 'Complementary and Supplementary',
                type: 'definition',
                definitions: [
                    { term: 'Complementary', definition: 'Two angles that add up to 90°' },
                    { term: 'Supplementary', definition: 'Two angles that add up to 180°' },
                    { term: 'Example', definition: '30° and 60° are complementary; 70° and 110° are supplementary' }
                ]
            },
            {
                heading: 'Practice Problems',
                type: 'table',
                headers: ['Problem', 'Answer'],
                rows: [
                    ['Find x if x + 75° = 180° (straight line)', '105°'],
                    ['Complement of 35°', '55°'],
                    ['Supplement of 110°', '70°'],
                    ['Angles around point: a + 120° + 90° + 80° = 360°', 'a = 70°']
                ]
            }
        ],
        keyPoints: [
            'Acute < 90°, Right = 90°, Obtuse > 90° and < 180°',
            'Angles on straight line = 180°',
            'Angles around a point = 360°',
            'Complementary = 90°, Supplementary = 180°'
        ]
    },
    'math-unit-19': {
        title: 'Weight and Mass',
        subject: 'Measurement',
        sections: [
            {
                heading: 'Mass vs Weight',
                type: 'definition',
                definitions: [
                    { term: 'Mass', definition: 'The amount of matter in an object (measured in kg, g)' },
                    { term: 'Weight', definition: 'The force of gravity on an object (measured in Newtons)' }
                ]
            },
            {
                heading: 'Metric Units of Mass',
                type: 'diagram',
                diagramType: 'unit-ladder',
                data: {
                    title: 'Mass Conversion Ladder',
                    units: [
                        { name: 'Tonne (t)', value: 1 },
                        { name: 'Kilogram (kg)', value: 1000 },
                        { name: 'Gram (g)', value: 1000000 },
                        { name: 'Milligram (mg)', value: 1000000000 }
                    ]
                }
            },
            {
                heading: 'Conversion Facts',
                type: 'table',
                headers: ['From', 'To', 'Multiply/Divide'],
                rows: [
                    ['1 kg', 'g', '× 1000 (1 kg = 1000 g)'],
                    ['g', 'kg', '÷ 1000 (500 g = 0.5 kg)'],
                    ['1 tonne', 'kg', '× 1000 (1 t = 1000 kg)'],
                    ['1 g', 'mg', '× 1000 (1 g = 1000 mg)']
                ]
            },
            {
                heading: 'Example Conversions',
                type: 'definition',
                definitions: [
                    { term: '3.5 kg to grams', definition: '3.5 × 1000 = 3500 g' },
                    { term: '750 g to kg', definition: '750 ÷ 1000 = 0.75 kg' },
                    { term: '2.5 tonnes to kg', definition: '2.5 × 1000 = 2500 kg' },
                    { term: '4500 kg to tonnes', definition: '4500 ÷ 1000 = 4.5 tonnes' }
                ]
            },
            {
                heading: 'Word Problem 1',
                type: 'steps',
                items: [
                    { step: '1', description: 'A bag of rice weighs 25 kg. How many grams is that?' },
                    { step: '2', description: '25 × 1000 = 25,000 g' }
                ]
            },
            {
                heading: 'Word Problem 2',
                type: 'steps',
                items: [
                    { step: '1', description: '8 packets weigh 200g each. Total weight in kg?' },
                    { step: '2', description: 'Total = 8 × 200 = 1600 g' },
                    { step: '3', description: 'In kg = 1600 ÷ 1000 = 1.6 kg' }
                ]
            },
            {
                heading: 'Practice Problems',
                type: 'table',
                headers: ['Problem', 'Answer'],
                rows: [
                    ['5.2 kg to grams', '5200 g'],
                    ['3250 g to kg', '3.25 kg'],
                    ['0.5 tonne to kg', '500 kg'],
                    ['7500 mg to grams', '7.5 g']
                ]
            }
        ],
        keyPoints: [
            '1 kg = 1000 g',
            '1 tonne = 1000 kg',
            '1 g = 1000 mg',
            'Multiply to go smaller, divide to go bigger'
        ]
    },
    'math-unit-20': {
        title: 'Triangles and Quadrilaterals',
        subject: 'Geometry',
        sections: [
            {
                heading: 'Types of Triangles by Sides',
                type: 'diagram',
                diagramType: 'triangle-types',
                data: {
                    title: 'Triangle Classification by Sides',
                    triangles: [
                        { name: 'Equilateral', description: 'All 3 sides equal', color: '#22c55e' },
                        { name: 'Isosceles', description: '2 sides equal', color: '#3b82f6' },
                        { name: 'Scalene', description: 'No sides equal', color: '#f97316' }
                    ]
                }
            },
            {
                heading: 'Types of Triangles by Angles',
                type: 'table',
                headers: ['Type', 'Description', 'Example Angles'],
                rows: [
                    ['Acute', 'All angles < 90°', '60°, 60°, 60°'],
                    ['Right', 'One angle = 90°', '90°, 45°, 45°'],
                    ['Obtuse', 'One angle > 90°', '120°, 30°, 30°']
                ]
            },
            {
                heading: 'Triangle Angle Sum',
                type: 'text',
                content: 'The three angles in ANY triangle always add up to 180°.'
            },
            {
                heading: 'Example: Finding a Triangle Angle',
                type: 'steps',
                items: [
                    { step: '1', description: 'Triangle has angles 70° and 55°. Find the third.' },
                    { step: '2', description: 'Sum = 180°' },
                    { step: '3', description: '70° + 55° + x = 180°' },
                    { step: '4', description: 'x = 180° - 125° = 55°' }
                ]
            },
            {
                heading: 'Quadrilaterals',
                type: 'diagram',
                diagramType: 'quadrilateral-gallery',
                data: {
                    title: 'Types of Quadrilaterals',
                    shapes: [
                        { name: 'Square', properties: 'All sides equal, all angles 90°', color: '#6366f1' },
                        { name: 'Rectangle', properties: 'Opposite sides equal, all angles 90°', color: '#8b5cf6' },
                        { name: 'Parallelogram', properties: 'Opposite sides parallel and equal', color: '#ec4899' },
                        { name: 'Rhombus', properties: 'All sides equal, opposite angles equal', color: '#f97316' },
                        { name: 'Trapezium', properties: 'One pair of parallel sides', color: '#eab308' },
                        { name: 'Kite', properties: 'Two pairs of adjacent equal sides', color: '#22c55e' }
                    ]
                }
            },
            {
                heading: 'Quadrilateral Properties',
                type: 'table',
                headers: ['Shape', 'Equal Sides', 'All 90° angles', 'Parallel Sides'],
                rows: [
                    ['Square', '4', 'Yes', '2 pairs'],
                    ['Rectangle', '2 pairs', 'Yes', '2 pairs'],
                    ['Parallelogram', '2 pairs', 'No', '2 pairs'],
                    ['Rhombus', '4', 'No', '2 pairs'],
                    ['Trapezium', 'Varies', 'No', '1 pair']
                ]
            },
            {
                heading: 'Quadrilateral Angle Sum',
                type: 'text',
                content: 'The four angles in ANY quadrilateral always add up to 360°.'
            },
            {
                heading: 'Example: Finding Quadrilateral Angle',
                type: 'steps',
                items: [
                    { step: '1', description: 'Quadrilateral angles: 80°, 90°, 100°, x' },
                    { step: '2', description: '80 + 90 + 100 + x = 360' },
                    { step: '3', description: '270 + x = 360' },
                    { step: '4', description: 'x = 90°' }
                ]
            },
            {
                heading: 'Practice Problems',
                type: 'table',
                headers: ['Problem', 'Answer'],
                rows: [
                    ['Triangle angles 40°, 60°, x', 'x = 80°'],
                    ['Isosceles triangle: 50°, 50°, x', 'x = 80°'],
                    ['Quadrilateral: 70°, 110°, 80°, x', 'x = 100°'],
                    ['Name quadrilateral with all equal sides, no 90° angles', 'Rhombus']
                ]
            }
        ],
        keyPoints: [
            'Triangle angles sum to 180°',
            'Equilateral: 3 equal sides; Isosceles: 2 equal; Scalene: 0 equal',
            'Quadrilateral angles sum to 360°',
            'Square has 4 equal sides AND 4 right angles'
        ]
    }
};

export const getMathNotesContentPart2 = (unitId) => {
    return mathNotesContentPart2[unitId] || null;
};
