// Verbal Aptitude Quiz Questions – NPSE MBSSE Class 6 Syllabus
// 150 MCQs across Analogies, Word Groups, Sentence Skills, Word Patterns,
// Word Making, Reading & Comprehension, Vocabulary, and Special Skills

const verbalQuizQuestions = [

    // ================================================================
    //  ANALOGIES (20 Questions — 2 units)
    // ================================================================

    // ===== VA Unit 1: Analogies =====
    {
        id: 'va-q1', unit: 'va-unit-1', subject: 'Analogies',
        topic: 'Analogies', difficulty: 'easy',
        question: 'Bird is to fly as fish is to ______.',
        options: [
            { label: 'A', text: 'Walk' }, { label: 'B', text: 'Swim' },
            { label: 'C', text: 'Run' }, { label: 'D', text: 'Climb' },
            { label: 'E', text: 'Crawl' }
        ],
        correctOption: 'B',
        explanation: 'A bird moves by flying; a fish moves by swimming. Both show animal → movement.'
    },
    {
        id: 'va-q2', unit: 'va-unit-1', subject: 'Analogies',
        topic: 'Analogies', difficulty: 'easy',
        question: 'Hot is to cold as big is to ______.',
        options: [
            { label: 'A', text: 'Huge' }, { label: 'B', text: 'Large' },
            { label: 'C', text: 'Small' }, { label: 'D', text: 'Tall' },
            { label: 'E', text: 'Wide' }
        ],
        correctOption: 'C',
        explanation: 'Hot and cold are opposites. Big and small are also opposites.'
    },
    {
        id: 'va-q3', unit: 'va-unit-1', subject: 'Analogies',
        topic: 'Analogies', difficulty: 'easy',
        question: 'Dog is to puppy as cat is to ______.',
        options: [
            { label: 'A', text: 'Cub' }, { label: 'B', text: 'Calf' },
            { label: 'C', text: 'Kitten' }, { label: 'D', text: 'Chick' },
            { label: 'E', text: 'Lamb' }
        ],
        correctOption: 'C',
        explanation: 'A puppy is a baby dog; a kitten is a baby cat. Parent → baby relationship.'
    },
    {
        id: 'va-q4', unit: 'va-unit-1', subject: 'Analogies',
        topic: 'Analogies', difficulty: 'easy',
        question: 'Eye is to see as ear is to ______.',
        options: [
            { label: 'A', text: 'Smell' }, { label: 'B', text: 'Taste' },
            { label: 'C', text: 'Touch' }, { label: 'D', text: 'Hear' },
            { label: 'E', text: 'Feel' }
        ],
        correctOption: 'D',
        explanation: 'Eyes are for seeing; ears are for hearing. Organ → function relationship.'
    },
    {
        id: 'va-q5', unit: 'va-unit-1', subject: 'Analogies',
        topic: 'Analogies', difficulty: 'medium',
        question: 'Pen is to write as knife is to ______.',
        options: [
            { label: 'A', text: 'Eat' }, { label: 'B', text: 'Cook' },
            { label: 'C', text: 'Cut' }, { label: 'D', text: 'Sharpen' },
            { label: 'E', text: 'Wash' }
        ],
        correctOption: 'C',
        explanation: 'A pen is used to write; a knife is used to cut. Tool → action relationship.'
    },
    {
        id: 'va-q6', unit: 'va-unit-1', subject: 'Analogies',
        topic: 'Analogies', difficulty: 'medium',
        question: 'Freetown is to Sierra Leone as Accra is to ______.',
        options: [
            { label: 'A', text: 'Nigeria' }, { label: 'B', text: 'Ghana' },
            { label: 'C', text: 'Liberia' }, { label: 'D', text: 'Guinea' },
            { label: 'E', text: 'Gambia' }
        ],
        correctOption: 'B',
        explanation: 'Freetown is the capital of Sierra Leone; Accra is the capital of Ghana. Capital → country.'
    },
    {
        id: 'va-q7', unit: 'va-unit-1', subject: 'Analogies',
        topic: 'Analogies', difficulty: 'medium',
        question: 'Morning is to breakfast as evening is to ______.',
        options: [
            { label: 'A', text: 'Lunch' }, { label: 'B', text: 'Snack' },
            { label: 'C', text: 'Dinner' }, { label: 'D', text: 'Brunch' },
            { label: 'E', text: 'Tea' }
        ],
        correctOption: 'C',
        explanation: 'We eat breakfast in the morning and dinner in the evening. Time → meal.'
    },
    {
        id: 'va-q8', unit: 'va-unit-1', subject: 'Analogies',
        topic: 'Analogies', difficulty: 'medium',
        question: 'Doctor is to hospital as teacher is to ______.',
        options: [
            { label: 'A', text: 'Church' }, { label: 'B', text: 'Market' },
            { label: 'C', text: 'School' }, { label: 'D', text: 'Office' },
            { label: 'E', text: 'Farm' }
        ],
        correctOption: 'C',
        explanation: 'A doctor works in a hospital; a teacher works in a school. Worker → workplace.'
    },
    {
        id: 'va-q9', unit: 'va-unit-1', subject: 'Analogies',
        topic: 'Analogies', difficulty: 'hard',
        question: 'Book is to library as money is to ______.',
        options: [
            { label: 'A', text: 'Shop' }, { label: 'B', text: 'Bank' },
            { label: 'C', text: 'Wallet' }, { label: 'D', text: 'Pocket' },
            { label: 'E', text: 'Market' }
        ],
        correctOption: 'B',
        explanation: 'Books are kept in a library; money is kept in a bank. Item → storage place.'
    },
    {
        id: 'va-q10', unit: 'va-unit-1', subject: 'Analogies',
        topic: 'Analogies', difficulty: 'hard',
        question: 'Cow is to beef as pig is to ______.',
        options: [
            { label: 'A', text: 'Bacon' }, { label: 'B', text: 'Chicken' },
            { label: 'C', text: 'Pork' }, { label: 'D', text: 'Mutton' },
            { label: 'E', text: 'Fish' }
        ],
        correctOption: 'C',
        explanation: 'Meat from a cow is called beef; meat from a pig is called pork. Animal → meat.'
    },

    // ===== VA Unit 2: Analogies Pair Review =====
    {
        id: 'va-q11', unit: 'va-unit-2', subject: 'Analogies',
        topic: 'Analogies Pair Review', difficulty: 'easy',
        question: 'Shoe is to foot as hat is to ______.',
        options: [
            { label: 'A', text: 'Hand' }, { label: 'B', text: 'Head' },
            { label: 'C', text: 'Leg' }, { label: 'D', text: 'Arm' },
            { label: 'E', text: 'Neck' }
        ],
        correctOption: 'B',
        explanation: 'A shoe goes on a foot; a hat goes on a head. Clothing → body part.'
    },
    {
        id: 'va-q12', unit: 'va-unit-2', subject: 'Analogies',
        topic: 'Analogies Pair Review', difficulty: 'easy',
        question: 'Page is to book as room is to ______.',
        options: [
            { label: 'A', text: 'Door' }, { label: 'B', text: 'Window' },
            { label: 'C', text: 'House' }, { label: 'D', text: 'Floor' },
            { label: 'E', text: 'Wall' }
        ],
        correctOption: 'C',
        explanation: 'A page is part of a book; a room is part of a house. Part → whole.'
    },
    {
        id: 'va-q13', unit: 'va-unit-2', subject: 'Analogies',
        topic: 'Analogies Pair Review', difficulty: 'medium',
        question: 'Mango is to fruit as carrot is to ______.',
        options: [
            { label: 'A', text: 'Meat' }, { label: 'B', text: 'Grain' },
            { label: 'C', text: 'Vegetable' }, { label: 'D', text: 'Spice' },
            { label: 'E', text: 'Fruit' }
        ],
        correctOption: 'C',
        explanation: 'Mango belongs to the fruit category; carrot belongs to the vegetable category. Item → group.'
    },
    {
        id: 'va-q14', unit: 'va-unit-2', subject: 'Analogies',
        topic: 'Analogies Pair Review', difficulty: 'medium',
        question: 'Rain is to wet as sun is to ______.',
        options: [
            { label: 'A', text: 'Cold' }, { label: 'B', text: 'Dark' },
            { label: 'C', text: 'Dry' }, { label: 'D', text: 'Foggy' },
            { label: 'E', text: 'Windy' }
        ],
        correctOption: 'C',
        explanation: 'Rain makes things wet; the sun makes things dry. Weather → effect.'
    },
    {
        id: 'va-q15', unit: 'va-unit-2', subject: 'Analogies',
        topic: 'Analogies Pair Review', difficulty: 'medium',
        question: 'Nose is to smell as tongue is to ______.',
        options: [
            { label: 'A', text: 'See' }, { label: 'B', text: 'Hear' },
            { label: 'C', text: 'Feel' }, { label: 'D', text: 'Taste' },
            { label: 'E', text: 'Walk' }
        ],
        correctOption: 'D',
        explanation: 'The nose is used for smelling; the tongue is used for tasting. Organ → sense.'
    },
    {
        id: 'va-q16', unit: 'va-unit-2', subject: 'Analogies',
        topic: 'Analogies Pair Review', difficulty: 'hard',
        question: 'Carpenter is to wood as blacksmith is to ______.',
        options: [
            { label: 'A', text: 'Cloth' }, { label: 'B', text: 'Stone' },
            { label: 'C', text: 'Metal' }, { label: 'D', text: 'Plastic' },
            { label: 'E', text: 'Paper' }
        ],
        correctOption: 'C',
        explanation: 'A carpenter works with wood; a blacksmith works with metal. Worker → material.'
    },
    {
        id: 'va-q17', unit: 'va-unit-2', subject: 'Analogies',
        topic: 'Analogies Pair Review', difficulty: 'hard',
        question: 'Bark is to tree as skin is to ______.',
        options: [
            { label: 'A', text: 'Bone' }, { label: 'B', text: 'Hair' },
            { label: 'C', text: 'Human' }, { label: 'D', text: 'Blood' },
            { label: 'E', text: 'Muscle' }
        ],
        correctOption: 'C',
        explanation: 'Bark is the outer covering of a tree; skin is the outer covering of a human. Covering → thing.'
    },
    {
        id: 'va-q18', unit: 'va-unit-2', subject: 'Analogies',
        topic: 'Analogies Pair Review', difficulty: 'medium',
        question: 'Lion is to den as bird is to ______.',
        options: [
            { label: 'A', text: 'Sky' }, { label: 'B', text: 'Nest' },
            { label: 'C', text: 'Tree' }, { label: 'D', text: 'Farm' },
            { label: 'E', text: 'River' }
        ],
        correctOption: 'B',
        explanation: 'A lion lives in a den; a bird lives in a nest. Animal → home.'
    },
    {
        id: 'va-q19', unit: 'va-unit-2', subject: 'Analogies',
        topic: 'Analogies Pair Review', difficulty: 'hard',
        question: 'Seed is to plant as egg is to ______.',
        options: [
            { label: 'A', text: 'Hen' }, { label: 'B', text: 'Nest' },
            { label: 'C', text: 'Chick' }, { label: 'D', text: 'Food' },
            { label: 'E', text: 'Feather' }
        ],
        correctOption: 'C',
        explanation: 'A seed grows into a plant; an egg hatches into a chick. Beginning → result.'
    },
    {
        id: 'va-q20', unit: 'va-unit-2', subject: 'Analogies',
        topic: 'Analogies Pair Review', difficulty: 'hard',
        question: 'Tailor is to sew as farmer is to ______.',
        options: [
            { label: 'A', text: 'Teach' }, { label: 'B', text: 'Heal' },
            { label: 'C', text: 'Build' }, { label: 'D', text: 'Farm' },
            { label: 'E', text: 'Drive' }
        ],
        correctOption: 'D',
        explanation: 'A tailor sews; a farmer farms. Worker → activity.'
    },

    // ================================================================
    //  WORD GROUPS (20 Questions — Odd One Out / Categorization)
    // ================================================================

    // ===== VA Unit 3: Word Groups =====
    {
        id: 'va-q21', unit: 'va-unit-3', subject: 'Word Groups',
        topic: 'Word Groups', difficulty: 'easy',
        question: 'Which word does NOT belong in this group? Apple, Mango, Carrot, Orange, Banana',
        options: [
            { label: 'A', text: 'Apple' }, { label: 'B', text: 'Mango' },
            { label: 'C', text: 'Carrot' }, { label: 'D', text: 'Orange' },
            { label: 'E', text: 'Banana' }
        ],
        correctOption: 'C',
        explanation: 'Carrot is a vegetable. The rest (apple, mango, orange, banana) are all fruits.'
    },
    {
        id: 'va-q22', unit: 'va-unit-3', subject: 'Word Groups',
        topic: 'Word Groups', difficulty: 'easy',
        question: 'Find the odd one out: Cat, Dog, Lion, Chair, Goat',
        options: [
            { label: 'A', text: 'Cat' }, { label: 'B', text: 'Dog' },
            { label: 'C', text: 'Lion' }, { label: 'D', text: 'Chair' },
            { label: 'E', text: 'Goat' }
        ],
        correctOption: 'D',
        explanation: 'Chair is furniture. The rest are all animals.'
    },
    {
        id: 'va-q23', unit: 'va-unit-3', subject: 'Word Groups',
        topic: 'Word Groups', difficulty: 'easy',
        question: 'Which word does NOT belong? Red, Blue, Green, Table, Yellow',
        options: [
            { label: 'A', text: 'Red' }, { label: 'B', text: 'Blue' },
            { label: 'C', text: 'Green' }, { label: 'D', text: 'Table' },
            { label: 'E', text: 'Yellow' }
        ],
        correctOption: 'D',
        explanation: 'Table is a piece of furniture. The rest are all colours.'
    },
    {
        id: 'va-q24', unit: 'va-unit-3', subject: 'Word Groups',
        topic: 'Word Groups', difficulty: 'easy',
        question: 'Find the odd one out: Monday, Friday, March, Sunday, Wednesday',
        options: [
            { label: 'A', text: 'Monday' }, { label: 'B', text: 'Friday' },
            { label: 'C', text: 'March' }, { label: 'D', text: 'Sunday' },
            { label: 'E', text: 'Wednesday' }
        ],
        correctOption: 'C',
        explanation: 'March is a month. The rest are all days of the week.'
    },
    {
        id: 'va-q25', unit: 'va-unit-3', subject: 'Word Groups',
        topic: 'Word Groups', difficulty: 'medium',
        question: 'Which word does NOT belong? Shirt, Trousers, Shoes, Hat, Pencil',
        options: [
            { label: 'A', text: 'Shirt' }, { label: 'B', text: 'Trousers' },
            { label: 'C', text: 'Shoes' }, { label: 'D', text: 'Hat' },
            { label: 'E', text: 'Pencil' }
        ],
        correctOption: 'E',
        explanation: 'Pencil is a writing tool. The rest are all items of clothing.'
    },
    {
        id: 'va-q26', unit: 'va-unit-3', subject: 'Word Groups',
        topic: 'Word Groups', difficulty: 'medium',
        question: 'Find the odd one out: Hammer, Saw, Nail, Spoon, Drill',
        options: [
            { label: 'A', text: 'Hammer' }, { label: 'B', text: 'Saw' },
            { label: 'C', text: 'Nail' }, { label: 'D', text: 'Spoon' },
            { label: 'E', text: 'Drill' }
        ],
        correctOption: 'D',
        explanation: 'A spoon is a kitchen utensil. The rest are all tools used for building or woodwork.'
    },
    {
        id: 'va-q27', unit: 'va-unit-3', subject: 'Word Groups',
        topic: 'Word Groups', difficulty: 'medium',
        question: 'Which word does NOT belong? Guitar, Drum, Piano, Chair, Flute',
        options: [
            { label: 'A', text: 'Guitar' }, { label: 'B', text: 'Drum' },
            { label: 'C', text: 'Piano' }, { label: 'D', text: 'Chair' },
            { label: 'E', text: 'Flute' }
        ],
        correctOption: 'D',
        explanation: 'Chair is furniture. The rest are all musical instruments.'
    },
    {
        id: 'va-q28', unit: 'va-unit-3', subject: 'Word Groups',
        topic: 'Word Groups', difficulty: 'medium',
        question: 'Find the odd one out: Circle, Square, Triangle, Rectangle, Pencil',
        options: [
            { label: 'A', text: 'Circle' }, { label: 'B', text: 'Square' },
            { label: 'C', text: 'Triangle' }, { label: 'D', text: 'Rectangle' },
            { label: 'E', text: 'Pencil' }
        ],
        correctOption: 'E',
        explanation: 'Pencil is an object. The rest are all shapes.'
    },

    // ===== VA Unit 4: Word Groups (Animals & Nature) =====
    {
        id: 'va-q29', unit: 'va-unit-4', subject: 'Word Groups',
        topic: 'Word Groups', difficulty: 'medium',
        question: 'Which word does NOT belong? Eagle, Hawk, Penguin, Sparrow, Aeroplane',
        options: [
            { label: 'A', text: 'Eagle' }, { label: 'B', text: 'Hawk' },
            { label: 'C', text: 'Penguin' }, { label: 'D', text: 'Sparrow' },
            { label: 'E', text: 'Aeroplane' }
        ],
        correctOption: 'E',
        explanation: 'Aeroplane is a machine. The rest are all birds.'
    },
    {
        id: 'va-q30', unit: 'va-unit-4', subject: 'Word Groups',
        topic: 'Word Groups', difficulty: 'hard',
        question: 'Find the odd one out: Rose, Lily, Sunflower, Oak, Tulip',
        options: [
            { label: 'A', text: 'Rose' }, { label: 'B', text: 'Lily' },
            { label: 'C', text: 'Sunflower' }, { label: 'D', text: 'Oak' },
            { label: 'E', text: 'Tulip' }
        ],
        correctOption: 'D',
        explanation: 'Oak is a tree. The rest are all flowers.'
    },
    {
        id: 'va-q31', unit: 'va-unit-4', subject: 'Word Groups',
        topic: 'Word Groups', difficulty: 'medium',
        question: 'Which word does NOT belong? Rice, Cassava, Yam, Football, Potato',
        options: [
            { label: 'A', text: 'Rice' }, { label: 'B', text: 'Cassava' },
            { label: 'C', text: 'Yam' }, { label: 'D', text: 'Football' },
            { label: 'E', text: 'Potato' }
        ],
        correctOption: 'D',
        explanation: 'Football is a sport/ball. The rest are all foods/crops.'
    },
    {
        id: 'va-q32', unit: 'va-unit-4', subject: 'Word Groups',
        topic: 'Word Groups', difficulty: 'hard',
        question: 'Find the odd one out: Mercury, Venus, Earth, Moon, Mars',
        options: [
            { label: 'A', text: 'Mercury' }, { label: 'B', text: 'Venus' },
            { label: 'C', text: 'Earth' }, { label: 'D', text: 'Moon' },
            { label: 'E', text: 'Mars' }
        ],
        correctOption: 'D',
        explanation: 'The Moon is a natural satellite. The rest are all planets in our solar system.'
    },

    // ===== VA Unit 5: Word Groups (Actions & Abstract) =====
    {
        id: 'va-q33', unit: 'va-unit-5', subject: 'Word Groups',
        topic: 'Word Groups', difficulty: 'medium',
        question: 'Which word does NOT belong? Walk, Run, Jump, Sit, Swim',
        options: [
            { label: 'A', text: 'Walk' }, { label: 'B', text: 'Run' },
            { label: 'C', text: 'Jump' }, { label: 'D', text: 'Sit' },
            { label: 'E', text: 'Swim' }
        ],
        correctOption: 'D',
        explanation: 'Sit involves staying still. The rest all involve moving from one place to another.'
    },
    {
        id: 'va-q34', unit: 'va-unit-5', subject: 'Word Groups',
        topic: 'Word Groups', difficulty: 'hard',
        question: 'Find the odd one out: Happy, Sad, Angry, Tall, Excited',
        options: [
            { label: 'A', text: 'Happy' }, { label: 'B', text: 'Sad' },
            { label: 'C', text: 'Angry' }, { label: 'D', text: 'Tall' },
            { label: 'E', text: 'Excited' }
        ],
        correctOption: 'D',
        explanation: 'Tall describes physical size. The rest are all emotions or feelings.'
    },

    // ===== VA Unit 30: Revision of Word Groups =====
    {
        id: 'va-q35', unit: 'va-unit-30', subject: 'Word Groups',
        topic: 'Revision of Word Groups', difficulty: 'easy',
        question: 'Find the odd one out: One, Two, Three, Four, Blue',
        options: [
            { label: 'A', text: 'One' }, { label: 'B', text: 'Two' },
            { label: 'C', text: 'Three' }, { label: 'D', text: 'Four' },
            { label: 'E', text: 'Blue' }
        ],
        correctOption: 'E',
        explanation: 'Blue is a colour. The rest are all numbers.'
    },
    {
        id: 'va-q36', unit: 'va-unit-30', subject: 'Word Groups',
        topic: 'Revision of Word Groups', difficulty: 'hard',
        question: 'Which word does NOT belong? London, Paris, Tokyo, Africa, Berlin',
        options: [
            { label: 'A', text: 'London' }, { label: 'B', text: 'Paris' },
            { label: 'C', text: 'Tokyo' }, { label: 'D', text: 'Africa' },
            { label: 'E', text: 'Berlin' }
        ],
        correctOption: 'D',
        explanation: 'Africa is a continent. The rest are all cities (capitals of countries).'
    },
    {
        id: 'va-q37', unit: 'va-unit-30', subject: 'Word Groups',
        topic: 'Revision of Word Groups', difficulty: 'medium',
        question: 'Find the odd one out: Whale, Shark, Dolphin, Crocodile, Octopus',
        options: [
            { label: 'A', text: 'Whale' }, { label: 'B', text: 'Shark' },
            { label: 'C', text: 'Dolphin' }, { label: 'D', text: 'Crocodile' },
            { label: 'E', text: 'Octopus' }
        ],
        correctOption: 'D',
        explanation: 'Crocodile is a reptile that lives on land and in water. The rest live mainly in the sea.'
    },
    {
        id: 'va-q38', unit: 'va-unit-30', subject: 'Word Groups',
        topic: 'Revision of Word Groups', difficulty: 'hard',
        question: 'Which word does NOT belong? Doctor, Nurse, Teacher, Hospital, Pharmacist',
        options: [
            { label: 'A', text: 'Doctor' }, { label: 'B', text: 'Nurse' },
            { label: 'C', text: 'Teacher' }, { label: 'D', text: 'Hospital' },
            { label: 'E', text: 'Pharmacist' }
        ],
        correctOption: 'D',
        explanation: 'Hospital is a place. The rest are all people (professionals/job titles).'
    },
    {
        id: 'va-q39', unit: 'va-unit-30', subject: 'Word Groups',
        topic: 'Revision of Word Groups', difficulty: 'medium',
        question: 'Find the odd one out: January, February, Saturday, March, April',
        options: [
            { label: 'A', text: 'January' }, { label: 'B', text: 'February' },
            { label: 'C', text: 'Saturday' }, { label: 'D', text: 'March' },
            { label: 'E', text: 'April' }
        ],
        correctOption: 'C',
        explanation: 'Saturday is a day of the week. The rest are all months of the year.'
    },
    {
        id: 'va-q40', unit: 'va-unit-30', subject: 'Word Groups',
        topic: 'Revision of Word Groups', difficulty: 'hard',
        question: 'Which word does NOT belong? Bicycle, Car, Bus, Boat, Lorry',
        options: [
            { label: 'A', text: 'Bicycle' }, { label: 'B', text: 'Car' },
            { label: 'C', text: 'Bus' }, { label: 'D', text: 'Boat' },
            { label: 'E', text: 'Lorry' }
        ],
        correctOption: 'D',
        explanation: 'A boat travels on water. The rest all travel on roads (land vehicles).'
    },

    // ================================================================
    //  SENTENCE SKILLS (20 Questions — 3 units)
    // ================================================================

    // ===== VA Unit 22: Sentence Arrangement =====
    {
        id: 'va-q41', unit: 'va-unit-22', subject: 'Sentence Skills',
        topic: 'Sentence Arrangement', difficulty: 'easy',
        question: 'Arrange these words to make a sentence: "school / to / I / go / every day"',
        options: [
            { label: 'A', text: 'School I go to every day.' }, { label: 'B', text: 'I go to school every day.' },
            { label: 'C', text: 'Every day school go I to.' }, { label: 'D', text: 'Go I to school every day.' },
            { label: 'E', text: 'To school every day I go.' }
        ],
        correctOption: 'B',
        explanation: 'The correct sentence is: "I go to school every day." (Subject + verb + place + time)'
    },
    {
        id: 'va-q42', unit: 'va-unit-22', subject: 'Sentence Skills',
        topic: 'Sentence Arrangement', difficulty: 'easy',
        question: 'Arrange: "the / is / dog / barking"',
        options: [
            { label: 'A', text: 'Dog the is barking.' }, { label: 'B', text: 'Is the dog barking.' },
            { label: 'C', text: 'The dog is barking.' }, { label: 'D', text: 'Barking is the dog.' },
            { label: 'E', text: 'The is dog barking.' }
        ],
        correctOption: 'C',
        explanation: '"The dog is barking." follows correct sentence order: article + subject + verb.'
    },
    {
        id: 'va-q43', unit: 'va-unit-22', subject: 'Sentence Skills',
        topic: 'Sentence Arrangement', difficulty: 'medium',
        question: 'Arrange: "market / mother / went / my / the / to"',
        options: [
            { label: 'A', text: 'My mother went to the market.' }, { label: 'B', text: 'To the market my mother went.' },
            { label: 'C', text: 'Mother my went the market to.' }, { label: 'D', text: 'Went my mother to the market.' },
            { label: 'E', text: 'The market my mother went to.' }
        ],
        correctOption: 'A',
        explanation: '"My mother went to the market." is the most natural sentence order.'
    },
    {
        id: 'va-q44', unit: 'va-unit-22', subject: 'Sentence Skills',
        topic: 'Sentence Arrangement', difficulty: 'medium',
        question: 'Arrange: "very / the / cold / water / is"',
        options: [
            { label: 'A', text: 'Very cold is the water.' }, { label: 'B', text: 'The water is very cold.' },
            { label: 'C', text: 'Cold the water is very.' }, { label: 'D', text: 'Is the water very cold.' },
            { label: 'E', text: 'Water the is very cold.' }
        ],
        correctOption: 'B',
        explanation: '"The water is very cold." — subject (water) + verb (is) + description (very cold).'
    },
    {
        id: 'va-q45', unit: 'va-unit-22', subject: 'Sentence Skills',
        topic: 'Sentence Arrangement', difficulty: 'medium',
        question: 'Arrange: "playing / children / are / the / football"',
        options: [
            { label: 'A', text: 'Football the children are playing.' }, { label: 'B', text: 'Are the children playing football.' },
            { label: 'C', text: 'The children are playing football.' }, { label: 'D', text: 'Playing football are the children.' },
            { label: 'E', text: 'Children the are playing football.' }
        ],
        correctOption: 'C',
        explanation: '"The children are playing football." follows correct sentence structure.'
    },
    {
        id: 'va-q46', unit: 'va-unit-22', subject: 'Sentence Skills',
        topic: 'Sentence Arrangement', difficulty: 'hard',
        question: 'Arrange: "bought / at / a / she / new / dress / the / shop"',
        options: [
            { label: 'A', text: 'She bought a new dress at the shop.' }, { label: 'B', text: 'At the shop she bought a new dress.' },
            { label: 'C', text: 'A new dress she bought at the shop.' }, { label: 'D', text: 'The shop bought she a new dress at.' },
            { label: 'E', text: 'Bought she a new dress at the shop.' }
        ],
        correctOption: 'A',
        explanation: '"She bought a new dress at the shop." has natural English word order.'
    },
    {
        id: 'va-q47', unit: 'va-unit-22', subject: 'Sentence Skills',
        topic: 'Sentence Arrangement', difficulty: 'hard',
        question: 'Arrange: "Sierra Leone / lives / my / in / uncle / Freetown"',
        options: [
            { label: 'A', text: 'My uncle lives in Freetown, Sierra Leone.' }, { label: 'B', text: 'In Freetown Sierra Leone my uncle lives.' },
            { label: 'C', text: 'Lives my uncle in Sierra Leone Freetown.' }, { label: 'D', text: 'Sierra Leone my uncle lives in Freetown.' },
            { label: 'E', text: 'Uncle my lives Freetown in Sierra Leone.' }
        ],
        correctOption: 'A',
        explanation: '"My uncle lives in Freetown, Sierra Leone." — subject + verb + place.'
    },

    // ===== VA Unit 23: Sentence Order =====
    {
        id: 'va-q48', unit: 'va-unit-23', subject: 'Sentence Skills',
        topic: 'Sentence Order', difficulty: 'easy',
        question: 'Which sentence makes sense?',
        options: [
            { label: 'A', text: 'Ball the kicked boy the.' }, { label: 'B', text: 'The boy kicked the ball.' },
            { label: 'C', text: 'Kicked the boy ball the.' }, { label: 'D', text: 'The kicked boy the ball.' },
            { label: 'E', text: 'Boy the the ball kicked.' }
        ],
        correctOption: 'B',
        explanation: '"The boy kicked the ball." has proper subject-verb-object order.'
    },
    {
        id: 'va-q49', unit: 'va-unit-23', subject: 'Sentence Skills',
        topic: 'Sentence Order', difficulty: 'medium',
        question: 'Which is the correct order? 1. He ate it. 2. He peeled the banana. 3. He picked a banana.',
        options: [
            { label: 'A', text: '1, 2, 3' }, { label: 'B', text: '2, 1, 3' },
            { label: 'C', text: '3, 2, 1' }, { label: 'D', text: '1, 3, 2' },
            { label: 'E', text: '2, 3, 1' }
        ],
        correctOption: 'C',
        explanation: 'Logical order: First he picked a banana (3), then he peeled it (2), then he ate it (1).'
    },
    {
        id: 'va-q50', unit: 'va-unit-23', subject: 'Sentence Skills',
        topic: 'Sentence Order', difficulty: 'medium',
        question: 'Which is the correct order? 1. She got dressed. 2. She woke up. 3. She went to school. 4. She ate breakfast.',
        options: [
            { label: 'A', text: '2, 1, 4, 3' }, { label: 'B', text: '1, 2, 3, 4' },
            { label: 'C', text: '4, 3, 2, 1' }, { label: 'D', text: '3, 4, 1, 2' },
            { label: 'E', text: '2, 4, 1, 3' }
        ],
        correctOption: 'A',
        explanation: 'Morning routine: Woke up (2) → Got dressed (1) → Ate breakfast (4) → Went to school (3).'
    },

    // ===== VA Unit 23: Sentence Order (continued) =====
    {
        id: 'va-q51', unit: 'va-unit-23', subject: 'Sentence Skills',
        topic: 'Sentence Order', difficulty: 'hard',
        question: 'Which is the correct order? 1. The letter arrived. 2. She posted the letter. 3. She wrote a letter. 4. Her friend read it.',
        options: [
            { label: 'A', text: '3, 2, 1, 4' }, { label: 'B', text: '1, 2, 3, 4' },
            { label: 'C', text: '2, 3, 4, 1' }, { label: 'D', text: '4, 1, 2, 3' },
            { label: 'E', text: '3, 1, 2, 4' }
        ],
        correctOption: 'A',
        explanation: 'Wrote (3) → Posted (2) → Arrived (1) → Friend read it (4). Logical sequence.'
    },
    {
        id: 'va-q52', unit: 'va-unit-23', subject: 'Sentence Skills',
        topic: 'Sentence Order', difficulty: 'medium',
        question: 'Which sentence does NOT make sense?',
        options: [
            { label: 'A', text: 'The sun rises in the east.' }, { label: 'B', text: 'She went to the market.' },
            { label: 'C', text: 'Happy the boy is very school.' }, { label: 'D', text: 'Birds can fly in the sky.' },
            { label: 'E', text: 'I like to eat rice.' }
        ],
        correctOption: 'C',
        explanation: '"Happy the boy is very school" has jumbled words and makes no sense.'
    },
    {
        id: 'va-q53', unit: 'va-unit-23', subject: 'Sentence Skills',
        topic: 'Sentence Order', difficulty: 'medium',
        question: 'Complete the sentence: "The teacher ______ the students to sit down."',
        options: [
            { label: 'A', text: 'barked' }, { label: 'B', text: 'flew' },
            { label: 'C', text: 'asked' }, { label: 'D', text: 'cooked' },
            { label: 'E', text: 'planted' }
        ],
        correctOption: 'C',
        explanation: '"The teacher asked the students to sit down" makes logical sense.'
    },

    // ===== VA Unit 26: Revision of Sentence Arrangement =====
    {
        id: 'va-q54', unit: 'va-unit-26', subject: 'Sentence Skills',
        topic: 'Revision of Sentence Arrangement', difficulty: 'easy',
        question: 'Arrange: "eats / rice / she / every / day"',
        options: [
            { label: 'A', text: 'Rice she eats every day.' }, { label: 'B', text: 'She eats rice every day.' },
            { label: 'C', text: 'Every day rice she eats.' }, { label: 'D', text: 'Eats she rice every day.' },
            { label: 'E', text: 'Day every she eats rice.' }
        ],
        correctOption: 'B',
        explanation: '"She eats rice every day." — Subject + verb + object + time.'
    },
    {
        id: 'va-q55', unit: 'va-unit-26', subject: 'Sentence Skills',
        topic: 'Revision of Sentence Arrangement', difficulty: 'medium',
        question: 'Which sentence is in the correct order?',
        options: [
            { label: 'A', text: 'Quickly the very ran boy.' }, { label: 'B', text: 'The boy ran very quickly.' },
            { label: 'C', text: 'Ran the boy very quickly.' }, { label: 'D', text: 'Very quickly the ran boy.' },
            { label: 'E', text: 'Boy the quickly very ran.' }
        ],
        correctOption: 'B',
        explanation: '"The boy ran very quickly." has the correct English word order.'
    },
    {
        id: 'va-q56', unit: 'va-unit-26', subject: 'Sentence Skills',
        topic: 'Revision of Sentence Arrangement', difficulty: 'hard',
        question: 'Arrange: "beautiful / sang / the / girl / a / song / yesterday"',
        options: [
            { label: 'A', text: 'The beautiful girl sang a song yesterday.' }, { label: 'B', text: 'Yesterday the girl sang beautiful a song.' },
            { label: 'C', text: 'A song beautiful the girl sang yesterday.' }, { label: 'D', text: 'Sang the beautiful girl a song yesterday.' },
            { label: 'E', text: 'The girl beautiful a song sang yesterday.' }
        ],
        correctOption: 'A',
        explanation: '"The beautiful girl sang a song yesterday." — subject + verb + object + time.'
    },
    {
        id: 'va-q57', unit: 'va-unit-26', subject: 'Sentence Skills',
        topic: 'Revision of Sentence Arrangement', difficulty: 'medium',
        question: 'Complete: "The farmer ______ his crops early in the morning."',
        options: [
            { label: 'A', text: 'flew' }, { label: 'B', text: 'watered' },
            { label: 'C', text: 'painted' }, { label: 'D', text: 'sang' },
            { label: 'E', text: 'swam' }
        ],
        correctOption: 'B',
        explanation: 'A farmer waters crops — that is what farmers do. The other words don\'t fit logically.'
    },
    {
        id: 'va-q58', unit: 'va-unit-26', subject: 'Sentence Skills',
        topic: 'Revision of Sentence Arrangement', difficulty: 'hard',
        question: 'Which is the correct order? 1. He scored a goal. 2. They celebrated. 3. The match started. 4. He got the ball.',
        options: [
            { label: 'A', text: '3, 4, 1, 2' }, { label: 'B', text: '1, 2, 3, 4' },
            { label: 'C', text: '4, 3, 1, 2' }, { label: 'D', text: '2, 1, 4, 3' },
            { label: 'E', text: '3, 1, 4, 2' }
        ],
        correctOption: 'A',
        explanation: 'Match started (3) → Got ball (4) → Scored goal (1) → Celebrated (2).'
    },
    {
        id: 'va-q59', unit: 'va-unit-26', subject: 'Sentence Skills',
        topic: 'Revision of Sentence Arrangement', difficulty: 'medium',
        question: 'Choose the word that best completes: "The ______ shines brightly in the sky."',
        options: [
            { label: 'A', text: 'table' }, { label: 'B', text: 'sun' },
            { label: 'C', text: 'book' }, { label: 'D', text: 'chair' },
            { label: 'E', text: 'pen' }
        ],
        correctOption: 'B',
        explanation: '"The sun shines brightly in the sky" makes perfect sense.'
    },
    {
        id: 'va-q60', unit: 'va-unit-26', subject: 'Sentence Skills',
        topic: 'Revision of Sentence Arrangement', difficulty: 'hard',
        question: 'Arrange: "raining / because / stayed / it / home / was / he / at"',
        options: [
            { label: 'A', text: 'He stayed at home because it was raining.' }, { label: 'B', text: 'Because he stayed at home it was raining.' },
            { label: 'C', text: 'It was raining he stayed because at home.' }, { label: 'D', text: 'Raining it was because he stayed at home.' },
            { label: 'E', text: 'At home he was raining because stayed it.' }
        ],
        correctOption: 'A',
        explanation: '"He stayed at home because it was raining." — main clause + reason.'
    },

    // ================================================================
    //  WORD PATTERNS (15 Questions — 2 units)
    // ================================================================

    // ===== VA Unit 6: Word Patterns =====
    {
        id: 'va-q61', unit: 'va-unit-6', subject: 'Word Patterns',
        topic: 'Word Patterns', difficulty: 'easy',
        question: 'If CAT → DAT, BAT → CAT, then DOG → ?',
        options: [
            { label: 'A', text: 'FOG' }, { label: 'B', text: 'EOG' },
            { label: 'C', text: 'COG' }, { label: 'D', text: 'HOG' },
            { label: 'E', text: 'LOG' }
        ],
        correctOption: 'B',
        explanation: 'The pattern adds 1 to the first letter: C→D, B→C, so D→E. DOG becomes EOG.'
    },
    {
        id: 'va-q62', unit: 'va-unit-6', subject: 'Word Patterns',
        topic: 'Word Patterns', difficulty: 'easy',
        question: 'What comes next: AB, CD, EF, __?',
        options: [
            { label: 'A', text: 'GH' }, { label: 'B', text: 'HI' },
            { label: 'C', text: 'FG' }, { label: 'D', text: 'IJ' },
            { label: 'E', text: 'DE' }
        ],
        correctOption: 'A',
        explanation: 'The pattern is pairs of consecutive letters: AB, CD, EF, GH.'
    },
    {
        id: 'va-q63', unit: 'va-unit-6', subject: 'Word Patterns',
        topic: 'Word Patterns', difficulty: 'medium',
        question: 'Find the pattern: BIG → GIB, CAT → ?',
        options: [
            { label: 'A', text: 'ATC' }, { label: 'B', text: 'TAC' },
            { label: 'C', text: 'CTA' }, { label: 'D', text: 'ACT' },
            { label: 'E', text: 'TCA' }
        ],
        correctOption: 'B',
        explanation: 'The pattern reverses the letters: BIG → GIB, so CAT → TAC.'
    },
    {
        id: 'va-q64', unit: 'va-unit-6', subject: 'Word Patterns',
        topic: 'Word Patterns', difficulty: 'medium',
        question: 'If APPLE has 5 letters and BANANA has 6 letters, how many letters does ORANGE have?',
        options: [
            { label: 'A', text: '4' }, { label: 'B', text: '5' },
            { label: 'C', text: '6' }, { label: 'D', text: '7' },
            { label: 'E', text: '8' }
        ],
        correctOption: 'C',
        explanation: 'O-R-A-N-G-E has 6 letters.'
    },
    {
        id: 'va-q65', unit: 'va-unit-6', subject: 'Word Patterns',
        topic: 'Word Patterns', difficulty: 'medium',
        question: 'What comes next: AZ, BY, CX, __?',
        options: [
            { label: 'A', text: 'DW' }, { label: 'B', text: 'DV' },
            { label: 'C', text: 'EW' }, { label: 'D', text: 'EV' },
            { label: 'E', text: 'DX' }
        ],
        correctOption: 'A',
        explanation: 'First letter goes forward (A,B,C,D) and second letter goes backward (Z,Y,X,W). So DW.'
    },
    {
        id: 'va-q66', unit: 'va-unit-6', subject: 'Word Patterns',
        topic: 'Word Patterns', difficulty: 'hard',
        question: 'If 1=A, 2=B, 3=C..., what word does 3-1-20 spell?',
        options: [
            { label: 'A', text: 'BAT' }, { label: 'B', text: 'CAT' },
            { label: 'C', text: 'RAT' }, { label: 'D', text: 'HAT' },
            { label: 'E', text: 'MAT' }
        ],
        correctOption: 'B',
        explanation: '3=C, 1=A, 20=T → C-A-T = CAT.'
    },
    {
        id: 'va-q67', unit: 'va-unit-6', subject: 'Word Patterns',
        topic: 'Word Patterns', difficulty: 'hard',
        question: 'Complete the pattern: SUN → NUS, MOON → ?',
        options: [
            { label: 'A', text: 'NOOM' }, { label: 'B', text: 'MONO' },
            { label: 'C', text: 'OMNO' }, { label: 'D', text: 'NMOO' },
            { label: 'E', text: 'ONOM' }
        ],
        correctOption: 'A',
        explanation: 'The pattern reverses the word: SUN → NUS, so MOON → NOOM.'
    },

    // ===== VA Unit 7: Word Pattern Review =====
    {
        id: 'va-q68', unit: 'va-unit-7', subject: 'Word Patterns',
        topic: 'Word Pattern Review', difficulty: 'easy',
        question: 'What letter comes next: A, C, E, G, __?',
        options: [
            { label: 'A', text: 'H' }, { label: 'B', text: 'I' },
            { label: 'C', text: 'J' }, { label: 'D', text: 'K' },
            { label: 'E', text: 'F' }
        ],
        correctOption: 'B',
        explanation: 'The pattern skips every other letter: A, C, E, G, I (odd-numbered positions).'
    },
    {
        id: 'va-q69', unit: 'va-unit-7', subject: 'Word Patterns',
        topic: 'Word Pattern Review', difficulty: 'medium',
        question: 'If HAT → HBT, then PEN → ?',
        options: [
            { label: 'A', text: 'PFN' }, { label: 'B', text: 'QEN' },
            { label: 'C', text: 'PEO' }, { label: 'D', text: 'PEN' },
            { label: 'E', text: 'QFN' }
        ],
        correctOption: 'A',
        explanation: 'The middle letter moves forward by 1: A→B in HAT→HBT, so E→F in PEN→PFN.'
    },
    {
        id: 'va-q70', unit: 'va-unit-7', subject: 'Word Patterns',
        topic: 'Word Pattern Review', difficulty: 'medium',
        question: 'Complete: AA, BB, CC, DD, __?',
        options: [
            { label: 'A', text: 'EF' }, { label: 'B', text: 'EE' },
            { label: 'C', text: 'FF' }, { label: 'D', text: 'DE' },
            { label: 'E', text: 'ED' }
        ],
        correctOption: 'B',
        explanation: 'Each letter is doubled and moves to the next: AA, BB, CC, DD, EE.'
    },
    {
        id: 'va-q71', unit: 'va-unit-7', subject: 'Word Patterns',
        topic: 'Word Pattern Review', difficulty: 'hard',
        question: 'If RED = 27, BED = 11, then FED = ?',
        options: [
            { label: 'A', text: '13' }, { label: 'B', text: '15' },
            { label: 'C', text: '17' }, { label: 'D', text: '19' },
            { label: 'E', text: '21' }
        ],
        correctOption: 'B',
        explanation: 'R=18,E=5,D=4 → 27. B=2,E=5,D=4 → 11. F=6,E=5,D=4 → 15. Each word sums its letter positions.'
    },
    {
        id: 'va-q72', unit: 'va-unit-7', subject: 'Word Patterns',
        topic: 'Word Pattern Review', difficulty: 'medium',
        question: 'What comes next: ZA, YB, XC, __?',
        options: [
            { label: 'A', text: 'WD' }, { label: 'B', text: 'VE' },
            { label: 'C', text: 'WE' }, { label: 'D', text: 'VD' },
            { label: 'E', text: 'XD' }
        ],
        correctOption: 'A',
        explanation: 'First letter goes backward (Z,Y,X,W), second goes forward (A,B,C,D). Answer: WD.'
    },
    {
        id: 'va-q73', unit: 'va-unit-7', subject: 'Word Patterns',
        topic: 'Word Pattern Review', difficulty: 'hard',
        question: 'If BALL → CALL, BAND → CAND, then BITE → ?',
        options: [
            { label: 'A', text: 'DITE' }, { label: 'B', text: 'KITE' },
            { label: 'C', text: 'CITE' }, { label: 'D', text: 'LITE' },
            { label: 'E', text: 'MITE' }
        ],
        correctOption: 'C',
        explanation: 'The first letter moves forward by 1: B→C. So BITE → CITE.'
    },
    {
        id: 'va-q74', unit: 'va-unit-7', subject: 'Word Patterns',
        topic: 'Word Pattern Review', difficulty: 'hard',
        question: 'Find the hidden word: The letters P, L, A, N, T can be rearranged to make what word?',
        options: [
            { label: 'A', text: 'PETAL' }, { label: 'B', text: 'PLANT' },
            { label: 'C', text: 'PAINT' }, { label: 'D', text: 'PLAIN' },
            { label: 'E', text: 'PANEL' }
        ],
        correctOption: 'B',
        explanation: 'P-L-A-N-T rearranged gives PLANT. The other words need different letters.'
    },
    {
        id: 'va-q75', unit: 'va-unit-7', subject: 'Word Patterns',
        topic: 'Word Pattern Review', difficulty: 'medium',
        question: 'What is the missing pair? (cat, bat) (dog, log) (pen, __)',
        options: [
            { label: 'A', text: 'pin' }, { label: 'B', text: 'hen' },
            { label: 'C', text: 'pan' }, { label: 'D', text: 'pot' },
            { label: 'E', text: 'peg' }
        ],
        correctOption: 'B',
        explanation: 'Each pair rhymes: cat/bat, dog/log, pen/hen. The words share the same ending sound.'
    },

    // ================================================================
    //  WORD MAKING (25 Questions — 5 units)
    // ================================================================

    // ===== VA Unit 8: Word Making =====
    {
        id: 'va-q76', unit: 'va-unit-8', subject: 'Word Making',
        topic: 'Word Making', difficulty: 'easy',
        question: 'Which word can be made from the letters in STOP?',
        options: [
            { label: 'A', text: 'TOPS' }, { label: 'B', text: 'STEP' },
            { label: 'C', text: 'TAPE' }, { label: 'D', text: 'SHIP' },
            { label: 'E', text: 'STAR' }
        ],
        correctOption: 'A',
        explanation: 'S-T-O-P can be rearranged to T-O-P-S = TOPS. The other words need different letters.'
    },
    {
        id: 'va-q77', unit: 'va-unit-8', subject: 'Word Making',
        topic: 'Word Making', difficulty: 'easy',
        question: 'Add one letter to "at" to make a 3-letter word meaning a small flying mammal:',
        options: [
            { label: 'A', text: 'Cat' }, { label: 'B', text: 'Hat' },
            { label: 'C', text: 'Bat' }, { label: 'D', text: 'Mat' },
            { label: 'E', text: 'Sat' }
        ],
        correctOption: 'C',
        explanation: 'B + at = Bat. A bat is a small flying mammal.'
    },
    {
        id: 'va-q78', unit: 'va-unit-8', subject: 'Word Making',
        topic: 'Word Making', difficulty: 'easy',
        question: 'Which word can you make from H, O, S, E?',
        options: [
            { label: 'A', text: 'SHOE' }, { label: 'B', text: 'SHOP' },
            { label: 'C', text: 'SHOW' }, { label: 'D', text: 'SHOT' },
            { label: 'E', text: 'SHED' }
        ],
        correctOption: 'A',
        explanation: 'H-O-S-E rearranged gives S-H-O-E = SHOE.'
    },
    {
        id: 'va-q79', unit: 'va-unit-8', subject: 'Word Making',
        topic: 'Word Making', difficulty: 'medium',
        question: 'What word ends with "-and" and means ground or soil?',
        options: [
            { label: 'A', text: 'Band' }, { label: 'B', text: 'Hand' },
            { label: 'C', text: 'Land' }, { label: 'D', text: 'Sand' },
            { label: 'E', text: 'Wand' }
        ],
        correctOption: 'C',
        explanation: 'L + and = Land, which means ground or soil.'
    },
    {
        id: 'va-q80', unit: 'va-unit-8', subject: 'Word Making',
        topic: 'Word Making', difficulty: 'medium',
        question: 'Which word can be made from the letters in LISTEN?',
        options: [
            { label: 'A', text: 'STONE' }, { label: 'B', text: 'SILENT' },
            { label: 'C', text: 'STEAL' }, { label: 'D', text: 'STAIN' },
            { label: 'E', text: 'SLIDE' }
        ],
        correctOption: 'B',
        explanation: 'L-I-S-T-E-N rearranged gives S-I-L-E-N-T = SILENT.'
    },

    // ===== VA Unit 9: Word Making (Combining) =====
    {
        id: 'va-q81', unit: 'va-unit-9', subject: 'Word Making',
        topic: 'Word Making', difficulty: 'easy',
        question: 'Combine "rain" + "bow" to make a new word:',
        options: [
            { label: 'A', text: 'Rainbow' }, { label: 'B', text: 'Raincoat' },
            { label: 'C', text: 'Bowrain' }, { label: 'D', text: 'Downpour' },
            { label: 'E', text: 'Sunbow' }
        ],
        correctOption: 'A',
        explanation: 'Rain + bow = Rainbow — a compound word!'
    },
    {
        id: 'va-q82', unit: 'va-unit-9', subject: 'Word Making',
        topic: 'Word Making', difficulty: 'easy',
        question: 'Combine "sun" + "flower" to make:',
        options: [
            { label: 'A', text: 'Sunrise' }, { label: 'B', text: 'Sunflower' },
            { label: 'C', text: 'Flowersun' }, { label: 'D', text: 'Sunshine' },
            { label: 'E', text: 'Sunlight' }
        ],
        correctOption: 'B',
        explanation: 'Sun + flower = Sunflower — a beautiful compound word.'
    },
    {
        id: 'va-q83', unit: 'va-unit-9', subject: 'Word Making',
        topic: 'Word Making', difficulty: 'medium',
        question: 'Which two words combine to make "football"?',
        options: [
            { label: 'A', text: 'Foo + tball' }, { label: 'B', text: 'Foot + ball' },
            { label: 'C', text: 'Fo + otball' }, { label: 'D', text: 'Foot + all' },
            { label: 'E', text: 'F + ootball' }
        ],
        correctOption: 'B',
        explanation: 'Foot + ball = Football. Two complete words joined together.'
    },
    {
        id: 'va-q84', unit: 'va-unit-9', subject: 'Word Making',
        topic: 'Word Making', difficulty: 'medium',
        question: 'Which compound word means "a room for sleeping"?',
        options: [
            { label: 'A', text: 'Bathroom' }, { label: 'B', text: 'Bedroom' },
            { label: 'C', text: 'Classroom' }, { label: 'D', text: 'Livingroom' },
            { label: 'E', text: 'Storeroom' }
        ],
        correctOption: 'B',
        explanation: 'Bed + room = Bedroom — a room where you sleep.'
    },
    {
        id: 'va-q85', unit: 'va-unit-9', subject: 'Word Making',
        topic: 'Word Making', difficulty: 'medium',
        question: 'Combine "book" + "____" to make a word meaning a bag for books:',
        options: [
            { label: 'A', text: 'shelf' }, { label: 'B', text: 'worm' },
            { label: 'C', text: 'bag' }, { label: 'D', text: 'store' },
            { label: 'E', text: 'mark' }
        ],
        correctOption: 'C',
        explanation: 'Book + bag = Bookbag — a bag used to carry books.'
    },

    // ===== VA Unit 10: Word Making (Advanced) =====
    {
        id: 'va-q86', unit: 'va-unit-10', subject: 'Word Making',
        topic: 'Word Making', difficulty: 'medium',
        question: 'Which smaller word is hidden inside "together"?',
        options: [
            { label: 'A', text: 'Get' }, { label: 'B', text: 'To' },
            { label: 'C', text: 'Her' }, { label: 'D', text: 'All of the above' },
            { label: 'E', text: 'None' }
        ],
        correctOption: 'D',
        explanation: 'TO-GET-HER — the word "together" contains "to", "get", and "her" inside it!'
    },
    {
        id: 'va-q87', unit: 'va-unit-10', subject: 'Word Making',
        topic: 'Word Making', difficulty: 'medium',
        question: 'Find the hidden word inside "CAPTAIN":',
        options: [
            { label: 'A', text: 'CAP' }, { label: 'B', text: 'TAP' },
            { label: 'C', text: 'TIN' }, { label: 'D', text: 'All of the above' },
            { label: 'E', text: 'None' }
        ],
        correctOption: 'D',
        explanation: 'CAP-TAIN contains CAP, TAP (rearranged inside), and TIN (capTAIN → capTIN).'
    },
    {
        id: 'va-q88', unit: 'va-unit-10', subject: 'Word Making',
        topic: 'Word Making', difficulty: 'hard',
        question: 'If you take the first letter of each word "My Aunt Takes Hers", you get:',
        options: [
            { label: 'A', text: 'MATH' }, { label: 'B', text: 'MATE' },
            { label: 'C', text: 'MASH' }, { label: 'D', text: 'PATH' },
            { label: 'E', text: 'BATH' }
        ],
        correctOption: 'A',
        explanation: 'My (M) + Aunt (A) + Takes (T) + Hers (H) = MATH!'
    },
    {
        id: 'va-q89', unit: 'va-unit-10', subject: 'Word Making',
        topic: 'Word Making', difficulty: 'hard',
        question: 'Change one letter in "COLD" to make a word meaning told:',
        options: [
            { label: 'A', text: 'BOLD' }, { label: 'B', text: 'TOLD' },
            { label: 'C', text: 'GOLD' }, { label: 'D', text: 'FOLD' },
            { label: 'E', text: 'HOLD' }
        ],
        correctOption: 'B',
        explanation: 'Change C to T: COLD → TOLD. "Told" means said/informed.'
    },
    {
        id: 'va-q90', unit: 'va-unit-10', subject: 'Word Making',
        topic: 'Word Making', difficulty: 'medium',
        question: 'Which word can be made using ALL the letters in EARTH?',
        options: [
            { label: 'A', text: 'HEART' }, { label: 'B', text: 'HEARD' },
            { label: 'C', text: 'HEAT' }, { label: 'D', text: 'TEAR' },
            { label: 'E', text: 'REACH' }
        ],
        correctOption: 'A',
        explanation: 'E-A-R-T-H rearranged gives H-E-A-R-T = HEART. They use the exact same 5 letters!'
    },

    // ===== VA Unit 20: Compound Words =====
    {
        id: 'va-q91', unit: 'va-unit-20', subject: 'Word Making',
        topic: 'Compound Words', difficulty: 'easy',
        question: 'Which of these is a compound word?',
        options: [
            { label: 'A', text: 'Beautiful' }, { label: 'B', text: 'Quickly' },
            { label: 'C', text: 'Cupboard' }, { label: 'D', text: 'Running' },
            { label: 'E', text: 'Eating' }
        ],
        correctOption: 'C',
        explanation: 'Cup + board = Cupboard — it is made of two separate words joined together.'
    },
    {
        id: 'va-q92', unit: 'va-unit-20', subject: 'Word Making',
        topic: 'Compound Words', difficulty: 'easy',
        question: '"Waterfall" is made from:',
        options: [
            { label: 'A', text: 'Wat + erfall' }, { label: 'B', text: 'Water + fall' },
            { label: 'C', text: 'Wa + terfall' }, { label: 'D', text: 'Waterf + all' },
            { label: 'E', text: 'W + aterfall' }
        ],
        correctOption: 'B',
        explanation: 'Water + fall = Waterfall — two complete words joined together.'
    },
    {
        id: 'va-q93', unit: 'va-unit-20', subject: 'Word Making',
        topic: 'Compound Words', difficulty: 'medium',
        question: 'Which pair of words makes "blackboard"?',
        options: [
            { label: 'A', text: 'Blac + kboard' }, { label: 'B', text: 'Black + board' },
            { label: 'C', text: 'Blackb + oard' }, { label: 'D', text: 'B + lackboard' },
            { label: 'E', text: 'Bl + ackboard' }
        ],
        correctOption: 'B',
        explanation: 'Black + board = Blackboard.'
    },

    // ===== VA Unit 21: Word Making with Prefixes & Suffixes =====
    {
        id: 'va-q94', unit: 'va-unit-21', subject: 'Word Making',
        topic: 'Word Making with Prefixes and Suffixes', difficulty: 'easy',
        question: 'Add "un-" to "happy" to make a word meaning:',
        options: [
            { label: 'A', text: 'Very happy' }, { label: 'B', text: 'Not happy' },
            { label: 'C', text: 'Happy again' }, { label: 'D', text: 'Almost happy' },
            { label: 'E', text: 'Always happy' }
        ],
        correctOption: 'B',
        explanation: 'Un + happy = Unhappy, meaning not happy. "Un-" means not or opposite.'
    },
    {
        id: 'va-q95', unit: 'va-unit-21', subject: 'Word Making',
        topic: 'Word Making with Prefixes and Suffixes', difficulty: 'medium',
        question: 'Add "-er" to "teach" to make a word meaning:',
        options: [
            { label: 'A', text: 'A person who teaches' }, { label: 'B', text: 'Teaching again' },
            { label: 'C', text: 'Not teaching' }, { label: 'D', text: 'Teaching slowly' },
            { label: 'E', text: 'Before teaching' }
        ],
        correctOption: 'A',
        explanation: 'Teach + er = Teacher — a person who teaches. "-er" means one who does.'
    },
    {
        id: 'va-q96', unit: 'va-unit-21', subject: 'Word Making',
        topic: 'Word Making with Prefixes and Suffixes', difficulty: 'medium',
        question: 'Add "re-" to "play" to make a word meaning:',
        options: [
            { label: 'A', text: 'Not playing' }, { label: 'B', text: 'Play again' },
            { label: 'C', text: 'Playing slowly' }, { label: 'D', text: 'Before playing' },
            { label: 'E', text: 'Stop playing' }
        ],
        correctOption: 'B',
        explanation: 'Re + play = Replay, meaning to play again. "Re-" means again.'
    },
    {
        id: 'va-q97', unit: 'va-unit-21', subject: 'Word Making',
        topic: 'Word Making with Prefixes and Suffixes', difficulty: 'medium',
        question: 'What does "careless" mean? (care + less)',
        options: [
            { label: 'A', text: 'Full of care' }, { label: 'B', text: 'Without care' },
            { label: 'C', text: 'Care again' }, { label: 'D', text: 'Before care' },
            { label: 'E', text: 'Very careful' }
        ],
        correctOption: 'B',
        explanation: 'Care + less = Careless, meaning without care. "-less" means without.'
    },
    {
        id: 'va-q98', unit: 'va-unit-21', subject: 'Word Making',
        topic: 'Word Making with Prefixes and Suffixes', difficulty: 'hard',
        question: '"Disagree" uses the prefix "dis-" which means:',
        options: [
            { label: 'A', text: 'Again' }, { label: 'B', text: 'Before' },
            { label: 'C', text: 'Not / opposite of' }, { label: 'D', text: 'After' },
            { label: 'E', text: 'Very' }
        ],
        correctOption: 'C',
        explanation: 'Dis + agree = Disagree (not agree). "Dis-" means not or opposite of.'
    },
    {
        id: 'va-q99', unit: 'va-unit-21', subject: 'Word Making',
        topic: 'Word Making with Prefixes and Suffixes', difficulty: 'hard',
        question: 'Which word uses BOTH a prefix and a suffix?',
        options: [
            { label: 'A', text: 'Unhappy' }, { label: 'B', text: 'Teacher' },
            { label: 'C', text: 'Unkindly' }, { label: 'D', text: 'Replay' },
            { label: 'E', text: 'Careful' }
        ],
        correctOption: 'C',
        explanation: 'Un-kind-ly has prefix "un-" AND suffix "-ly". The root word is "kind".'
    },
    {
        id: 'va-q100', unit: 'va-unit-21', subject: 'Word Making',
        topic: 'Word Making with Prefixes and Suffixes', difficulty: 'hard',
        question: 'Add a prefix to "possible" to make its opposite:',
        options: [
            { label: 'A', text: 'Unpossible' }, { label: 'B', text: 'Dispossible' },
            { label: 'C', text: 'Impossible' }, { label: 'D', text: 'Repossible' },
            { label: 'E', text: 'Mispossible' }
        ],
        correctOption: 'C',
        explanation: 'Im + possible = Impossible (not possible). "Im-" is a form of "in-" meaning not.'
    },

    // ================================================================
    //  READING & COMPREHENSION (15 Questions — 3 units)
    // ================================================================

    // ===== VA Unit 12: Reading and Comprehension =====
    {
        id: 'va-q101', unit: 'va-unit-12', subject: 'Reading & Comprehension',
        topic: 'Reading and Comprehension', difficulty: 'easy',
        question: 'Read: "The boy ran to the shop. He bought bread and milk." What did the boy buy?',
        options: [
            { label: 'A', text: 'Rice and fish' }, { label: 'B', text: 'Bread and milk' },
            { label: 'C', text: 'Shoes and socks' }, { label: 'D', text: 'Bread and butter' },
            { label: 'E', text: 'Milk and eggs' }
        ],
        correctOption: 'B',
        explanation: 'The passage clearly states he bought bread and milk.'
    },
    {
        id: 'va-q102', unit: 'va-unit-12', subject: 'Reading & Comprehension',
        topic: 'Reading and Comprehension', difficulty: 'easy',
        question: 'Read: "Aminata has a pet cat called Whiskers. She feeds it every morning." Who feeds Whiskers?',
        options: [
            { label: 'A', text: 'Whiskers' }, { label: 'B', text: 'The teacher' },
            { label: 'C', text: 'Aminata' }, { label: 'D', text: 'Nobody' },
            { label: 'E', text: 'Her mother' }
        ],
        correctOption: 'C',
        explanation: '"She" refers to Aminata — she is the one who feeds Whiskers.'
    },
    {
        id: 'va-q103', unit: 'va-unit-12', subject: 'Reading & Comprehension',
        topic: 'Reading and Comprehension', difficulty: 'medium',
        question: 'Read: "The weather was too hot, so the children stayed indoors and played games." Why did the children stay indoors?',
        options: [
            { label: 'A', text: 'It was raining' }, { label: 'B', text: 'It was too cold' },
            { label: 'C', text: 'It was too hot' }, { label: 'D', text: 'School was closed' },
            { label: 'E', text: 'They were sleeping' }
        ],
        correctOption: 'C',
        explanation: 'The passage says "the weather was too hot" — that was the reason.'
    },
    {
        id: 'va-q104', unit: 'va-unit-12', subject: 'Reading & Comprehension',
        topic: 'Reading and Comprehension', difficulty: 'medium',
        question: 'Read: "Freetown is the capital city of Sierra Leone. It is located on the coast." Where is Freetown located?',
        options: [
            { label: 'A', text: 'In the mountains' }, { label: 'B', text: 'In the desert' },
            { label: 'C', text: 'On the coast' }, { label: 'D', text: 'In the forest' },
            { label: 'E', text: 'On an island' }
        ],
        correctOption: 'C',
        explanation: 'The passage states Freetown "is located on the coast".'
    },
    {
        id: 'va-q105', unit: 'va-unit-12', subject: 'Reading & Comprehension',
        topic: 'Reading and Comprehension', difficulty: 'medium',
        question: 'Read: "Foday woke up late. He missed the school bus and had to walk to school." What happened because Foday woke up late?',
        options: [
            { label: 'A', text: 'He ate breakfast' }, { label: 'B', text: 'He took a taxi' },
            { label: 'C', text: 'He missed the bus' }, { label: 'D', text: 'He went back to bed' },
            { label: 'E', text: 'He drove a car' }
        ],
        correctOption: 'C',
        explanation: 'Because he woke up late, he missed the school bus and had to walk.'
    },

    // ===== VA Unit 13: Reading and Comprehension (Longer Passages) =====
    {
        id: 'va-q106', unit: 'va-unit-13', subject: 'Reading & Comprehension',
        topic: 'Reading and Comprehension', difficulty: 'medium',
        question: 'Read: "The tortoise and the hare had a race. The hare was fast but lazy. The tortoise was slow but steady. The tortoise won the race." What is the lesson of this story?',
        options: [
            { label: 'A', text: 'Speed always wins' }, { label: 'B', text: 'Being lazy is good' },
            { label: 'C', text: 'Slow and steady wins the race' }, { label: 'D', text: 'Never try hard' },
            { label: 'E', text: 'Tortoises are faster than hares' }
        ],
        correctOption: 'C',
        explanation: 'The lesson is: slow and steady wins the race — being consistent beats being fast but lazy.'
    },
    {
        id: 'va-q107', unit: 'va-unit-13', subject: 'Reading & Comprehension',
        topic: 'Reading and Comprehension', difficulty: 'hard',
        question: 'Read: "Mariama planted seeds in her garden. She watered them daily. After two weeks, small green shoots appeared." What happened after two weeks?',
        options: [
            { label: 'A', text: 'The seeds died' }, { label: 'B', text: 'Flowers bloomed' },
            { label: 'C', text: 'Small green shoots appeared' }, { label: 'D', text: 'She stopped watering' },
            { label: 'E', text: 'She harvested food' }
        ],
        correctOption: 'C',
        explanation: 'The passage says "small green shoots appeared" after two weeks of watering.'
    },
    {
        id: 'va-q108', unit: 'va-unit-13', subject: 'Reading & Comprehension',
        topic: 'Reading and Comprehension', difficulty: 'hard',
        question: 'Read: "The market was crowded. People were buying food for the holiday. Prices were high because everyone wanted the same things." Why were prices high?',
        options: [
            { label: 'A', text: 'The food was rotten' }, { label: 'B', text: 'No one was buying' },
            { label: 'C', text: 'Everyone wanted the same things' }, { label: 'D', text: 'The market was closed' },
            { label: 'E', text: 'It was very cold' }
        ],
        correctOption: 'C',
        explanation: 'Prices were high because of high demand — "everyone wanted the same things".'
    },

    // ===== VA Unit 14: Reading and Comprehension Review =====
    {
        id: 'va-q109', unit: 'va-unit-14', subject: 'Reading & Comprehension',
        topic: 'Reading and Comprehension Review', difficulty: 'easy',
        question: 'Read: "There are seven days in a week and twelve months in a year." How many months are in a year?',
        options: [
            { label: 'A', text: '7' }, { label: 'B', text: '10' },
            { label: 'C', text: '12' }, { label: 'D', text: '14' },
            { label: 'E', text: '52' }
        ],
        correctOption: 'C',
        explanation: 'The passage directly states there are twelve months in a year.'
    },
    {
        id: 'va-q110', unit: 'va-unit-14', subject: 'Reading & Comprehension',
        topic: 'Reading and Comprehension Review', difficulty: 'medium',
        question: 'Read: "Ibrahim is taller than Sorie but shorter than Mohamed." Who is the tallest?',
        options: [
            { label: 'A', text: 'Ibrahim' }, { label: 'B', text: 'Sorie' },
            { label: 'C', text: 'Mohamed' }, { label: 'D', text: 'They are all the same height' },
            { label: 'E', text: 'Cannot be determined' }
        ],
        correctOption: 'C',
        explanation: 'Ibrahim is shorter than Mohamed, and taller than Sorie. So: Mohamed > Ibrahim > Sorie.'
    },
    {
        id: 'va-q111', unit: 'va-unit-14', subject: 'Reading & Comprehension',
        topic: 'Reading and Comprehension Review', difficulty: 'hard',
        question: 'Read: "Kadi loves reading. She reads two books every week. Her favourite subject is English." How many books does Kadi read in a month (4 weeks)?',
        options: [
            { label: 'A', text: '2' }, { label: 'B', text: '4' },
            { label: 'C', text: '6' }, { label: 'D', text: '8' },
            { label: 'E', text: '10' }
        ],
        correctOption: 'D',
        explanation: '2 books per week × 4 weeks = 8 books per month.'
    },
    {
        id: 'va-q112', unit: 'va-unit-14', subject: 'Reading & Comprehension',
        topic: 'Reading and Comprehension Review', difficulty: 'medium',
        question: 'Read: "The teacher said that all homework must be submitted by Friday." When must homework be submitted?',
        options: [
            { label: 'A', text: 'Monday' }, { label: 'B', text: 'Wednesday' },
            { label: 'C', text: 'Thursday' }, { label: 'D', text: 'Friday' },
            { label: 'E', text: 'Saturday' }
        ],
        correctOption: 'D',
        explanation: 'The passage says homework must be submitted by Friday.'
    },
    {
        id: 'va-q113', unit: 'va-unit-14', subject: 'Reading & Comprehension',
        topic: 'Reading and Comprehension Review', difficulty: 'hard',
        question: 'Read: "Although it rained heavily that morning, the football match went ahead as planned." Did the match take place?',
        options: [
            { label: 'A', text: 'No, it was cancelled' }, { label: 'B', text: 'Yes, it went ahead' },
            { label: 'C', text: 'It was postponed' }, { label: 'D', text: 'Only the first half was played' },
            { label: 'E', text: 'The passage does not say' }
        ],
        correctOption: 'B',
        explanation: '"The match went ahead as planned" — despite the rain, the match still happened.'
    },
    {
        id: 'va-q114', unit: 'va-unit-14', subject: 'Reading & Comprehension',
        topic: 'Reading and Comprehension Review', difficulty: 'hard',
        question: 'Read: "Fatmata arrived at school at 8:00am. Her class starts at 8:30am. She uses the extra time to review her notes." Fatmata arrives how many minutes early?',
        options: [
            { label: 'A', text: '10 minutes' }, { label: 'B', text: '20 minutes' },
            { label: 'C', text: '30 minutes' }, { label: 'D', text: '45 minutes' },
            { label: 'E', text: '60 minutes' }
        ],
        correctOption: 'C',
        explanation: 'From 8:00am to 8:30am = 30 minutes early.'
    },
    {
        id: 'va-q115', unit: 'va-unit-14', subject: 'Reading & Comprehension',
        topic: 'Reading and Comprehension Review', difficulty: 'medium',
        question: 'Read: "Lions live in groups called prides. The female lions do most of the hunting." What is a group of lions called?',
        options: [
            { label: 'A', text: 'A flock' }, { label: 'B', text: 'A herd' },
            { label: 'C', text: 'A pack' }, { label: 'D', text: 'A pride' },
            { label: 'E', text: 'A swarm' }
        ],
        correctOption: 'D',
        explanation: 'The passage tells us lions live in groups called prides.'
    },

    // ================================================================
    //  VOCABULARY — Synonyms, Antonyms, Rhymes (15 Questions — 3 units)
    // ================================================================

    // ===== VA Unit 16: Synonyms =====
    {
        id: 'va-q116', unit: 'va-unit-16', subject: 'Vocabulary',
        topic: 'Synonyms', difficulty: 'easy',
        question: 'Which word means the same as "big"?',
        options: [
            { label: 'A', text: 'Small' }, { label: 'B', text: 'Tiny' },
            { label: 'C', text: 'Large' }, { label: 'D', text: 'Short' },
            { label: 'E', text: 'Thin' }
        ],
        correctOption: 'C',
        explanation: 'Big and large have the same meaning — they are synonyms.'
    },
    {
        id: 'va-q117', unit: 'va-unit-16', subject: 'Vocabulary',
        topic: 'Synonyms', difficulty: 'easy',
        question: 'Which word means the same as "fast"?',
        options: [
            { label: 'A', text: 'Slow' }, { label: 'B', text: 'Quick' },
            { label: 'C', text: 'Heavy' }, { label: 'D', text: 'Lazy' },
            { label: 'E', text: 'Late' }
        ],
        correctOption: 'B',
        explanation: 'Fast = quick. They both mean moving with speed.'
    },
    {
        id: 'va-q118', unit: 'va-unit-16', subject: 'Vocabulary',
        topic: 'Synonyms', difficulty: 'medium',
        question: 'Choose the synonym of "clever":',
        options: [
            { label: 'A', text: 'Stupid' }, { label: 'B', text: 'Lazy' },
            { label: 'C', text: 'Intelligent' }, { label: 'D', text: 'Slow' },
            { label: 'E', text: 'Weak' }
        ],
        correctOption: 'C',
        explanation: 'Clever = intelligent = smart. They all mean having good mental ability.'
    },
    {
        id: 'va-q119', unit: 'va-unit-16', subject: 'Vocabulary',
        topic: 'Synonyms', difficulty: 'medium',
        question: '"Start" and "begin" are:',
        options: [
            { label: 'A', text: 'Antonyms' }, { label: 'B', text: 'Homophones' },
            { label: 'C', text: 'Synonyms' }, { label: 'D', text: 'Rhyming words' },
            { label: 'E', text: 'Compound words' }
        ],
        correctOption: 'C',
        explanation: 'Start and begin mean the same thing — they are synonyms.'
    },
    {
        id: 'va-q120', unit: 'va-unit-16', subject: 'Vocabulary',
        topic: 'Synonyms', difficulty: 'hard',
        question: 'Which word is a synonym of "ancient"?',
        options: [
            { label: 'A', text: 'New' }, { label: 'B', text: 'Modern' },
            { label: 'C', text: 'Young' }, { label: 'D', text: 'Old' },
            { label: 'E', text: 'Fresh' }
        ],
        correctOption: 'D',
        explanation: 'Ancient means very old. Ancient and old are synonyms.'
    },

    // ===== VA Unit 17: Antonyms =====
    {
        id: 'va-q121', unit: 'va-unit-17', subject: 'Vocabulary',
        topic: 'Antonyms', difficulty: 'easy',
        question: 'What is the opposite of "up"?',
        options: [
            { label: 'A', text: 'Over' }, { label: 'B', text: 'Down' },
            { label: 'C', text: 'Above' }, { label: 'D', text: 'High' },
            { label: 'E', text: 'Top' }
        ],
        correctOption: 'B',
        explanation: 'Up ↔ down. They are opposite directions.'
    },
    {
        id: 'va-q122', unit: 'va-unit-17', subject: 'Vocabulary',
        topic: 'Antonyms', difficulty: 'easy',
        question: 'What is the opposite of "old"?',
        options: [
            { label: 'A', text: 'Young' }, { label: 'B', text: 'Big' },
            { label: 'C', text: 'Ancient' }, { label: 'D', text: 'Aged' },
            { label: 'E', text: 'Tall' }
        ],
        correctOption: 'A',
        explanation: 'Old ↔ young. They are antonyms.'
    },
    {
        id: 'va-q123', unit: 'va-unit-17', subject: 'Vocabulary',
        topic: 'Antonyms', difficulty: 'medium',
        question: 'What is the opposite of "brave"?',
        options: [
            { label: 'A', text: 'Strong' }, { label: 'B', text: 'Bold' },
            { label: 'C', text: 'Cowardly' }, { label: 'D', text: 'Kind' },
            { label: 'E', text: 'Wise' }
        ],
        correctOption: 'C',
        explanation: 'Brave ↔ cowardly. A coward is afraid; a brave person is fearless.'
    },
    {
        id: 'va-q124', unit: 'va-unit-17', subject: 'Vocabulary',
        topic: 'Antonyms', difficulty: 'medium',
        question: 'What is the opposite of "empty"?',
        options: [
            { label: 'A', text: 'Hollow' }, { label: 'B', text: 'Open' },
            { label: 'C', text: 'Full' }, { label: 'D', text: 'Blank' },
            { label: 'E', text: 'Light' }
        ],
        correctOption: 'C',
        explanation: 'Empty ↔ full. They are opposites.'
    },
    {
        id: 'va-q125', unit: 'va-unit-17', subject: 'Vocabulary',
        topic: 'Antonyms', difficulty: 'hard',
        question: 'What is the opposite of "increase"?',
        options: [
            { label: 'A', text: 'Grow' }, { label: 'B', text: 'Expand' },
            { label: 'C', text: 'Multiply' }, { label: 'D', text: 'Decrease' },
            { label: 'E', text: 'Rise' }
        ],
        correctOption: 'D',
        explanation: 'Increase ↔ decrease. Increase means getting more; decrease means getting less.'
    },

    // ===== VA Unit 27: Rhymes =====
    {
        id: 'va-q126', unit: 'va-unit-27', subject: 'Vocabulary',
        topic: 'Rhymes', difficulty: 'easy',
        question: 'Which word rhymes with "cake"?',
        options: [
            { label: 'A', text: 'Book' }, { label: 'B', text: 'Lake' },
            { label: 'C', text: 'Cup' }, { label: 'D', text: 'Car' },
            { label: 'E', text: 'Dog' }
        ],
        correctOption: 'B',
        explanation: 'Cake and lake rhyme — they both end with the "-ake" sound.'
    },
    {
        id: 'va-q127', unit: 'va-unit-27', subject: 'Vocabulary',
        topic: 'Rhymes', difficulty: 'easy',
        question: 'Which word rhymes with "star"?',
        options: [
            { label: 'A', text: 'Car' }, { label: 'B', text: 'Sun' },
            { label: 'C', text: 'Ship' }, { label: 'D', text: 'Tree' },
            { label: 'E', text: 'Book' }
        ],
        correctOption: 'A',
        explanation: 'Star and car rhyme — they both end with the "-ar" sound.'
    },
    {
        id: 'va-q128', unit: 'va-unit-27', subject: 'Vocabulary',
        topic: 'Rhymes', difficulty: 'medium',
        question: 'Which word does NOT rhyme with "cat"?',
        options: [
            { label: 'A', text: 'Bat' }, { label: 'B', text: 'Hat' },
            { label: 'C', text: 'Mat' }, { label: 'D', text: 'Cup' },
            { label: 'E', text: 'Rat' }
        ],
        correctOption: 'D',
        explanation: 'Cup does not rhyme with cat. Bat, hat, mat, and rat all end in "-at".'
    },
    {
        id: 'va-q129', unit: 'va-unit-27', subject: 'Vocabulary',
        topic: 'Rhymes', difficulty: 'medium',
        question: 'Find the rhyming pair:',
        options: [
            { label: 'A', text: 'House and mouse' }, { label: 'B', text: 'Table and chair' },
            { label: 'C', text: 'Dog and bird' }, { label: 'D', text: 'Pen and book' },
            { label: 'E', text: 'Tree and car' }
        ],
        correctOption: 'A',
        explanation: 'House and mouse rhyme — they share the "-ouse" sound.'
    },
    {
        id: 'va-q130', unit: 'va-unit-27', subject: 'Vocabulary',
        topic: 'Rhymes', difficulty: 'hard',
        question: 'Which word rhymes with "blue"?',
        options: [
            { label: 'A', text: 'Blood' }, { label: 'B', text: 'Blow' },
            { label: 'C', text: 'Shoe' }, { label: 'D', text: 'Bus' },
            { label: 'E', text: 'Blob' }
        ],
        correctOption: 'C',
        explanation: 'Blue and shoe rhyme — they both end with the "-oo" sound, even though spelled differently!'
    },

    // ================================================================
    //  SPECIAL SKILLS (20 Questions — 6 units)
    // ================================================================

    // ===== VA Unit 15: General Knowledge =====
    {
        id: 'va-q131', unit: 'va-unit-15', subject: 'Special Skills',
        topic: 'General Knowledge', difficulty: 'easy',
        question: 'Which animal says "moo"?',
        options: [
            { label: 'A', text: 'Dog' }, { label: 'B', text: 'Cat' },
            { label: 'C', text: 'Cow' }, { label: 'D', text: 'Sheep' },
            { label: 'E', text: 'Chicken' }
        ],
        correctOption: 'C',
        explanation: 'A cow says "moo". Dogs bark, cats meow, sheep bleat, and chickens cluck.'
    },
    {
        id: 'va-q132', unit: 'va-unit-15', subject: 'Special Skills',
        topic: 'General Knowledge', difficulty: 'easy',
        question: 'How many days are there in a week?',
        options: [
            { label: 'A', text: '5' }, { label: 'B', text: '6' },
            { label: 'C', text: '7' }, { label: 'D', text: '10' },
            { label: 'E', text: '12' }
        ],
        correctOption: 'C',
        explanation: 'There are 7 days: Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday.'
    },
    {
        id: 'va-q133', unit: 'va-unit-15', subject: 'Special Skills',
        topic: 'General Knowledge', difficulty: 'medium',
        question: 'Which is the largest continent?',
        options: [
            { label: 'A', text: 'Africa' }, { label: 'B', text: 'Europe' },
            { label: 'C', text: 'Asia' }, { label: 'D', text: 'Australia' },
            { label: 'E', text: 'Antarctica' }
        ],
        correctOption: 'C',
        explanation: 'Asia is the largest continent by both area and population.'
    },

    // ===== VA Unit 18: Alphabetical Order =====
    {
        id: 'va-q134', unit: 'va-unit-18', subject: 'Special Skills',
        topic: 'Alphabetical Order', difficulty: 'easy',
        question: 'Which word comes FIRST in alphabetical order?',
        options: [
            { label: 'A', text: 'Dog' }, { label: 'B', text: 'Cat' },
            { label: 'C', text: 'Apple' }, { label: 'D', text: 'Ball' },
            { label: 'E', text: 'Egg' }
        ],
        correctOption: 'C',
        explanation: 'In alphabetical order: Apple, Ball, Cat, Dog, Egg. A comes before B.'
    },
    {
        id: 'va-q135', unit: 'va-unit-18', subject: 'Special Skills',
        topic: 'Alphabetical Order', difficulty: 'easy',
        question: 'Which word comes LAST in alphabetical order?',
        options: [
            { label: 'A', text: 'Man' }, { label: 'B', text: 'Pen' },
            { label: 'C', text: 'Ant' }, { label: 'D', text: 'Zip' },
            { label: 'E', text: 'Key' }
        ],
        correctOption: 'D',
        explanation: 'In alphabetical order: Ant, Key, Man, Pen, Zip. Z comes last.'
    },
    {
        id: 'va-q136', unit: 'va-unit-18', subject: 'Special Skills',
        topic: 'Alphabetical Order', difficulty: 'medium',
        question: 'Arrange in alphabetical order: Fish, Duck, Eagle, Cow, Bear. Which comes 3rd?',
        options: [
            { label: 'A', text: 'Bear' }, { label: 'B', text: 'Cow' },
            { label: 'C', text: 'Duck' }, { label: 'D', text: 'Eagle' },
            { label: 'E', text: 'Fish' }
        ],
        correctOption: 'C',
        explanation: 'Alphabetical order: Bear, Cow, Duck, Eagle, Fish. Duck is 3rd.'
    },
    {
        id: 'va-q137', unit: 'va-unit-18', subject: 'Special Skills',
        topic: 'Alphabetical Order', difficulty: 'medium',
        question: 'Arrange: School, Market, Library, Hospital, Park. Which comes 2nd?',
        options: [
            { label: 'A', text: 'Hospital' }, { label: 'B', text: 'Library' },
            { label: 'C', text: 'Market' }, { label: 'D', text: 'Park' },
            { label: 'E', text: 'School' }
        ],
        correctOption: 'B',
        explanation: 'Alphabetical: Hospital, Library, Market, Park, School. Library is 2nd.'
    },

    // ===== VA Unit 19: Order by Size and Shape =====
    {
        id: 'va-q138', unit: 'va-unit-19', subject: 'Special Skills',
        topic: 'Order by Size and Shape', difficulty: 'easy',
        question: 'Arrange from SMALLEST to LARGEST: Elephant, Ant, Dog, Cat',
        options: [
            { label: 'A', text: 'Elephant, Dog, Cat, Ant' }, { label: 'B', text: 'Ant, Cat, Dog, Elephant' },
            { label: 'C', text: 'Dog, Cat, Ant, Elephant' }, { label: 'D', text: 'Cat, Ant, Dog, Elephant' },
            { label: 'E', text: 'Ant, Dog, Cat, Elephant' }
        ],
        correctOption: 'B',
        explanation: 'From smallest to largest: Ant → Cat → Dog → Elephant.'
    },
    {
        id: 'va-q139', unit: 'va-unit-19', subject: 'Special Skills',
        topic: 'Order by Size and Shape', difficulty: 'medium',
        question: 'Arrange from SHORTEST to TALLEST: Tree, Bush, Grass, Building',
        options: [
            { label: 'A', text: 'Building, Tree, Bush, Grass' }, { label: 'B', text: 'Tree, Building, Bush, Grass' },
            { label: 'C', text: 'Grass, Bush, Tree, Building' }, { label: 'D', text: 'Bush, Grass, Tree, Building' },
            { label: 'E', text: 'Grass, Tree, Bush, Building' }
        ],
        correctOption: 'C',
        explanation: 'From shortest to tallest: Grass → Bush → Tree → Building.'
    },
    {
        id: 'va-q140', unit: 'va-unit-19', subject: 'Special Skills',
        topic: 'Order by Size and Shape', difficulty: 'medium',
        question: 'Which is the LIGHTEST?',
        options: [
            { label: 'A', text: 'A stone' }, { label: 'B', text: 'A feather' },
            { label: 'C', text: 'A book' }, { label: 'D', text: 'A brick' },
            { label: 'E', text: 'A bag of rice' }
        ],
        correctOption: 'B',
        explanation: 'A feather is the lightest of all these items — it is as light as air!'
    },

    // ===== VA Unit 28: True Sentences =====
    {
        id: 'va-q141', unit: 'va-unit-28', subject: 'Special Skills',
        topic: 'True Sentences', difficulty: 'easy',
        question: 'Which sentence is TRUE?',
        options: [
            { label: 'A', text: 'The sun rises in the west.' }, { label: 'B', text: 'Fish can fly.' },
            { label: 'C', text: 'Water is wet.' }, { label: 'D', text: 'Cats can talk.' },
            { label: 'E', text: 'Ice is hot.' }
        ],
        correctOption: 'C',
        explanation: '"Water is wet" is a true fact. The other statements are false.'
    },
    {
        id: 'va-q142', unit: 'va-unit-28', subject: 'Special Skills',
        topic: 'True Sentences', difficulty: 'easy',
        question: 'Which sentence is FALSE?',
        options: [
            { label: 'A', text: 'A triangle has 3 sides.' }, { label: 'B', text: 'The sky is blue.' },
            { label: 'C', text: 'Fire is cold.' }, { label: 'D', text: 'Humans breathe air.' },
            { label: 'E', text: 'Plants need water.' }
        ],
        correctOption: 'C',
        explanation: '"Fire is cold" is false — fire is hot! All other sentences are true.'
    },
    {
        id: 'va-q143', unit: 'va-unit-28', subject: 'Special Skills',
        topic: 'True Sentences', difficulty: 'medium',
        question: 'Which sentence is TRUE?',
        options: [
            { label: 'A', text: 'A square has 5 sides.' }, { label: 'B', text: 'December is the first month.' },
            { label: 'C', text: 'An hour has 60 minutes.' }, { label: 'D', text: 'Humans have 3 legs.' },
            { label: 'E', text: 'Sunday comes after Monday.' }
        ],
        correctOption: 'C',
        explanation: '"An hour has 60 minutes" is true. Squares have 4 sides, December is the 12th month.'
    },
    {
        id: 'va-q144', unit: 'va-unit-28', subject: 'Special Skills',
        topic: 'True Sentences', difficulty: 'medium',
        question: 'Which of these facts is TRUE?',
        options: [
            { label: 'A', text: 'Freetown is in Nigeria.' }, { label: 'B', text: 'The moon gives off its own light.' },
            { label: 'C', text: 'Sierra Leone is in West Africa.' }, { label: 'D', text: 'Elephants are smaller than mice.' },
            { label: 'E', text: 'The Earth is flat.' }
        ],
        correctOption: 'C',
        explanation: '"Sierra Leone is in West Africa" is a true fact.'
    },

    // ===== VA Unit 25: Code and Decoding =====
    {
        id: 'va-q145', unit: 'va-unit-25', subject: 'Special Skills',
        topic: 'Code and Decoding', difficulty: 'easy',
        question: 'If A=1, B=2, C=3, what number is D?',
        options: [
            { label: 'A', text: '3' }, { label: 'B', text: '4' },
            { label: 'C', text: '5' }, { label: 'D', text: '6' },
            { label: 'E', text: '7' }
        ],
        correctOption: 'B',
        explanation: 'A=1, B=2, C=3, D=4. Each letter gets the next number.'
    },
    {
        id: 'va-q146', unit: 'va-unit-25', subject: 'Special Skills',
        topic: 'Code and Decoding', difficulty: 'medium',
        question: 'If A=1, B=2, C=3..., what does 8-5-12-12-15 spell?',
        options: [
            { label: 'A', text: 'WORLD' }, { label: 'B', text: 'HOUSE' },
            { label: 'C', text: 'HELLO' }, { label: 'D', text: 'HAPPY' },
            { label: 'E', text: 'WATER' }
        ],
        correctOption: 'C',
        explanation: '8=H, 5=E, 12=L, 12=L, 15=O → HELLO!'
    },
    {
        id: 'va-q147', unit: 'va-unit-25', subject: 'Special Skills',
        topic: 'Code and Decoding', difficulty: 'medium',
        question: 'In a code, each letter is replaced by the NEXT letter (A→B, B→C...). If CAT is coded as DBU, what is DOG coded as?',
        options: [
            { label: 'A', text: 'EPH' }, { label: 'B', text: 'COF' },
            { label: 'C', text: 'EPG' }, { label: 'D', text: 'DOH' },
            { label: 'E', text: 'FOG' }
        ],
        correctOption: 'A',
        explanation: 'D→E, O→P, G→H. DOG becomes EPH.'
    },
    {
        id: 'va-q148', unit: 'va-unit-25', subject: 'Special Skills',
        topic: 'Code and Decoding', difficulty: 'hard',
        question: 'In a code, A=Z, B=Y, C=X (reversed alphabet). What does "GSV" decode to?',
        options: [
            { label: 'A', text: 'CAT' }, { label: 'B', text: 'THE' },
            { label: 'C', text: 'DOG' }, { label: 'D', text: 'BIG' },
            { label: 'E', text: 'SUN' }
        ],
        correctOption: 'B',
        explanation: 'G=T, S=H, V=E (counting backwards from Z=A). GSV = THE.'
    },
    {
        id: 'va-q149', unit: 'va-unit-25', subject: 'Special Skills',
        topic: 'Code and Decoding', difficulty: 'hard',
        question: 'If BOOK = 2+15+15+11 = 43, what does FOOD equal?',
        options: [
            { label: 'A', text: '30' }, { label: 'B', text: '35' },
            { label: 'C', text: '38' }, { label: 'D', text: '40' },
            { label: 'E', text: '42' }
        ],
        correctOption: 'D',
        explanation: 'F=6, O=15, O=15, D=4. So 6+15+15+4 = 40.'
    },
    {
        id: 'va-q150', unit: 'va-unit-25', subject: 'Special Skills',
        topic: 'Code and Decoding', difficulty: 'medium',
        question: 'If ♣=S, ♦=U, ♥=N, what does ♣♦♥ spell?',
        options: [
            { label: 'A', text: 'NUS' }, { label: 'B', text: 'SUN' },
            { label: 'C', text: 'UNS' }, { label: 'D', text: 'FUN' },
            { label: 'E', text: 'RUN' }
        ],
        correctOption: 'B',
        explanation: '♣=S, ♦=U, ♥=N → S-U-N = SUN!'
    },
];

export default verbalQuizQuestions;
