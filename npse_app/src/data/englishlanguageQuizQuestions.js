// English Language Quiz Questions – NPSE MBSSE Class 6 Syllabus
// 150 MCQs across Grammar Basics, Verbs & Tenses, Vocabulary, Advanced Grammar,
// Other Parts of Speech, and Punctuation & Spelling

const englishLanguageQuizQuestions = [

    // ================================================================
    //  GRAMMAR BASICS (25 Questions — 6 units)
    // ================================================================

    // ===== EL Unit 1: Introducing Parts of Speech =====
    {
        id: 'el-q1', unit: 'el-unit-1', subject: 'Grammar Basics',
        topic: 'Introducing Parts of Speech', difficulty: 'easy',
        question: 'How many parts of speech are there in the English language?',
        options: [
            { label: 'A', text: '4' }, { label: 'B', text: '6' },
            { label: 'C', text: '8' }, { label: 'D', text: '10' },
            { label: 'E', text: '12' }
        ],
        correctOption: 'C',
        explanation: 'The 8 parts of speech are: noun, pronoun, verb, adjective, adverb, preposition, conjunction, and interjection.'
    },
    {
        id: 'el-q2', unit: 'el-unit-1', subject: 'Grammar Basics',
        topic: 'Introducing Parts of Speech', difficulty: 'easy',
        question: 'Which part of speech names a person, place, or thing?',
        options: [
            { label: 'A', text: 'Verb' }, { label: 'B', text: 'Adjective' },
            { label: 'C', text: 'Noun' }, { label: 'D', text: 'Adverb' },
            { label: 'E', text: 'Preposition' }
        ],
        correctOption: 'C',
        explanation: 'A noun is a word that names a person (teacher), place (school), thing (book), or idea (happiness).'
    },
    {
        id: 'el-q3', unit: 'el-unit-1', subject: 'Grammar Basics',
        topic: 'Introducing Parts of Speech', difficulty: 'medium',
        question: 'In the sentence "Wow! That was amazing!", the word "Wow" is a/an:',
        options: [
            { label: 'A', text: 'Noun' }, { label: 'B', text: 'Adjective' },
            { label: 'C', text: 'Adverb' }, { label: 'D', text: 'Interjection' },
            { label: 'E', text: 'Conjunction' }
        ],
        correctOption: 'D',
        explanation: 'An interjection is a word that expresses strong feeling or surprise (Wow!, Oh!, Ouch!).'
    },
    {
        id: 'el-q4', unit: 'el-unit-1', subject: 'Grammar Basics',
        topic: 'Introducing Parts of Speech', difficulty: 'medium',
        question: 'Which part of speech joins words, phrases, or sentences together?',
        options: [
            { label: 'A', text: 'Pronoun' }, { label: 'B', text: 'Conjunction' },
            { label: 'C', text: 'Preposition' }, { label: 'D', text: 'Interjection' },
            { label: 'E', text: 'Adverb' }
        ],
        correctOption: 'B',
        explanation: 'Conjunctions (and, but, or, because) join words, phrases, or clauses together.'
    },

    // ===== EL Unit 2: Nouns =====
    {
        id: 'el-q5', unit: 'el-unit-2', subject: 'Grammar Basics',
        topic: 'Nouns', difficulty: 'easy',
        question: 'Which of these is a proper noun?',
        options: [
            { label: 'A', text: 'city' }, { label: 'B', text: 'river' },
            { label: 'C', text: 'Freetown' }, { label: 'D', text: 'school' },
            { label: 'E', text: 'country' }
        ],
        correctOption: 'C',
        explanation: 'Proper nouns name specific people, places, or things and start with a capital letter. Freetown is the name of a specific city.'
    },
    {
        id: 'el-q6', unit: 'el-unit-2', subject: 'Grammar Basics',
        topic: 'Nouns', difficulty: 'easy',
        question: 'The word "happiness" is an example of a/an:',
        options: [
            { label: 'A', text: 'Common noun' }, { label: 'B', text: 'Proper noun' },
            { label: 'C', text: 'Abstract noun' }, { label: 'D', text: 'Collective noun' },
            { label: 'E', text: 'Countable noun' }
        ],
        correctOption: 'C',
        explanation: 'Abstract nouns name ideas, qualities, or feelings you cannot see or touch (happiness, love, courage).'
    },
    {
        id: 'el-q7', unit: 'el-unit-2', subject: 'Grammar Basics',
        topic: 'Nouns', difficulty: 'medium',
        question: '"A flock of birds flew over the house." The word "flock" is a:',
        options: [
            { label: 'A', text: 'Proper noun' }, { label: 'B', text: 'Abstract noun' },
            { label: 'C', text: 'Collective noun' }, { label: 'D', text: 'Common noun' },
            { label: 'E', text: 'Material noun' }
        ],
        correctOption: 'C',
        explanation: 'A collective noun names a group (flock of birds, herd of cattle, class of students).'
    },
    {
        id: 'el-q8', unit: 'el-unit-2', subject: 'Grammar Basics',
        topic: 'Nouns', difficulty: 'medium',
        question: 'What is the plural of "child"?',
        options: [
            { label: 'A', text: 'Childs' }, { label: 'B', text: 'Childen' },
            { label: 'C', text: 'Children' }, { label: 'D', text: 'Childes' },
            { label: 'E', text: 'Child\'s' }
        ],
        correctOption: 'C',
        explanation: '"Child" has an irregular plural — "children", not "childs".'
    },

    // ===== EL Unit 3: Adjectives =====
    {
        id: 'el-q9', unit: 'el-unit-3', subject: 'Grammar Basics',
        topic: 'Adjectives', difficulty: 'easy',
        question: 'An adjective is a word that:',
        options: [
            { label: 'A', text: 'Shows action' }, { label: 'B', text: 'Describes a noun' },
            { label: 'C', text: 'Replaces a noun' }, { label: 'D', text: 'Joins sentences' },
            { label: 'E', text: 'Describes a verb' }
        ],
        correctOption: 'B',
        explanation: 'Adjectives describe or modify nouns — they tell us what kind, how many, or which one.'
    },
    {
        id: 'el-q10', unit: 'el-unit-3', subject: 'Grammar Basics',
        topic: 'Adjectives', difficulty: 'easy',
        question: 'In "The tall boy ran fast", which word is the adjective?',
        options: [
            { label: 'A', text: 'The' }, { label: 'B', text: 'tall' },
            { label: 'C', text: 'boy' }, { label: 'D', text: 'ran' },
            { label: 'E', text: 'fast' }
        ],
        correctOption: 'B',
        explanation: '"Tall" describes the noun "boy", so it is an adjective.'
    },
    {
        id: 'el-q11', unit: 'el-unit-3', subject: 'Grammar Basics',
        topic: 'Adjectives', difficulty: 'medium',
        question: 'What is the superlative form of "good"?',
        options: [
            { label: 'A', text: 'Gooder' }, { label: 'B', text: 'More good' },
            { label: 'C', text: 'Better' }, { label: 'D', text: 'Best' },
            { label: 'E', text: 'Most good' }
        ],
        correctOption: 'D',
        explanation: 'Good → better (comparative) → best (superlative). It is an irregular adjective.'
    },
    {
        id: 'el-q12', unit: 'el-unit-3', subject: 'Grammar Basics',
        topic: 'Adjectives', difficulty: 'medium',
        question: 'Which sentence uses an adjective correctly?',
        options: [
            { label: 'A', text: 'She sings beautiful.' }, { label: 'B', text: 'The beautiful girl sings.' },
            { label: 'C', text: 'She beautiful sings.' }, { label: 'D', text: 'Beautiful she sings.' },
            { label: 'E', text: 'Sings she beautiful.' }
        ],
        correctOption: 'B',
        explanation: '"Beautiful" describes the noun "girl" and is placed before it — correct adjective usage.'
    },

    // ===== EL Unit 4: Adverbs =====
    {
        id: 'el-q13', unit: 'el-unit-4', subject: 'Grammar Basics',
        topic: 'Adverbs', difficulty: 'easy',
        question: 'An adverb describes a:',
        options: [
            { label: 'A', text: 'Noun' }, { label: 'B', text: 'Pronoun' },
            { label: 'C', text: 'Verb, adjective, or another adverb' }, { label: 'D', text: 'Preposition' },
            { label: 'E', text: 'Conjunction' }
        ],
        correctOption: 'C',
        explanation: 'Adverbs modify verbs (run quickly), adjectives (very tall), or other adverbs (too slowly).'
    },
    {
        id: 'el-q14', unit: 'el-unit-4', subject: 'Grammar Basics',
        topic: 'Adverbs', difficulty: 'easy',
        question: 'In "She ran quickly", the adverb is:',
        options: [
            { label: 'A', text: 'She' }, { label: 'B', text: 'ran' },
            { label: 'C', text: 'quickly' }, { label: 'D', text: 'She ran' },
            { label: 'E', text: 'ran quickly' }
        ],
        correctOption: 'C',
        explanation: '"Quickly" tells us HOW she ran — it modifies the verb "ran".'
    },
    {
        id: 'el-q15', unit: 'el-unit-4', subject: 'Grammar Basics',
        topic: 'Adverbs', difficulty: 'medium',
        question: 'Which word is an adverb of time?',
        options: [
            { label: 'A', text: 'Slowly' }, { label: 'B', text: 'Here' },
            { label: 'C', text: 'Yesterday' }, { label: 'D', text: 'Loudly' },
            { label: 'E', text: 'Carefully' }
        ],
        correctOption: 'C',
        explanation: '"Yesterday" tells WHEN something happened. "Slowly" and "loudly" tell HOW. "Here" tells WHERE.'
    },
    {
        id: 'el-q16', unit: 'el-unit-4', subject: 'Grammar Basics',
        topic: 'Adverbs', difficulty: 'medium',
        question: 'Most adverbs are formed by adding ______ to an adjective.',
        options: [
            { label: 'A', text: '-ness' }, { label: 'B', text: '-ful' },
            { label: 'C', text: '-ly' }, { label: 'D', text: '-ing' },
            { label: 'E', text: '-er' }
        ],
        correctOption: 'C',
        explanation: 'Most adverbs are made by adding -ly to an adjective: quick → quickly, slow → slowly.'
    },

    // ===== EL Unit 5: Pronouns =====
    {
        id: 'el-q17', unit: 'el-unit-5', subject: 'Grammar Basics',
        topic: 'Pronouns', difficulty: 'easy',
        question: 'A pronoun is a word that:',
        options: [
            { label: 'A', text: 'Describes a noun' }, { label: 'B', text: 'Shows action' },
            { label: 'C', text: 'Takes the place of a noun' }, { label: 'D', text: 'Joins sentences' },
            { label: 'E', text: 'Shows position' }
        ],
        correctOption: 'C',
        explanation: 'Pronouns replace nouns to avoid repetition: "John is tall. He plays football." (He = John)'
    },
    {
        id: 'el-q18', unit: 'el-unit-5', subject: 'Grammar Basics',
        topic: 'Pronouns', difficulty: 'easy',
        question: 'Which of these is a personal pronoun?',
        options: [
            { label: 'A', text: 'This' }, { label: 'B', text: 'Who' },
            { label: 'C', text: 'They' }, { label: 'D', text: 'Whose' },
            { label: 'E', text: 'Which' }
        ],
        correctOption: 'C',
        explanation: 'Personal pronouns include I, you, he, she, it, we, they. "This" is demonstrative; "who" is interrogative.'
    },
    {
        id: 'el-q19', unit: 'el-unit-5', subject: 'Grammar Basics',
        topic: 'Pronouns', difficulty: 'medium',
        question: '"That is my book. It is mine." The word "mine" is a:',
        options: [
            { label: 'A', text: 'Personal pronoun' }, { label: 'B', text: 'Possessive pronoun' },
            { label: 'C', text: 'Demonstrative pronoun' }, { label: 'D', text: 'Relative pronoun' },
            { label: 'E', text: 'Interrogative pronoun' }
        ],
        correctOption: 'B',
        explanation: 'Possessive pronouns show ownership without a noun: mine, yours, his, hers, ours, theirs.'
    },
    {
        id: 'el-q20', unit: 'el-unit-5', subject: 'Grammar Basics',
        topic: 'Pronouns', difficulty: 'medium',
        question: '"Those mangoes are sweet." The word "Those" is a:',
        options: [
            { label: 'A', text: 'Personal pronoun' }, { label: 'B', text: 'Relative pronoun' },
            { label: 'C', text: 'Interrogative pronoun' }, { label: 'D', text: 'Demonstrative pronoun' },
            { label: 'E', text: 'Possessive pronoun' }
        ],
        correctOption: 'D',
        explanation: 'Demonstrative pronouns point to specific things: this, that, these, those.'
    },

    // ===== EL Unit 6: Functions of Pronouns =====
    {
        id: 'el-q21', unit: 'el-unit-6', subject: 'Grammar Basics',
        topic: 'Functions of Pronouns', difficulty: 'medium',
        question: '"Who broke the window?" The word "Who" is a/an:',
        options: [
            { label: 'A', text: 'Relative pronoun' }, { label: 'B', text: 'Possessive pronoun' },
            { label: 'C', text: 'Interrogative pronoun' }, { label: 'D', text: 'Personal pronoun' },
            { label: 'E', text: 'Demonstrative pronoun' }
        ],
        correctOption: 'C',
        explanation: 'Interrogative pronouns are used to ask questions: who, whom, whose, which, what.'
    },
    {
        id: 'el-q22', unit: 'el-unit-6', subject: 'Grammar Basics',
        topic: 'Functions of Pronouns', difficulty: 'medium',
        question: '"The boy who won the race is my friend." The word "who" here is a:',
        options: [
            { label: 'A', text: 'Interrogative pronoun' }, { label: 'B', text: 'Personal pronoun' },
            { label: 'C', text: 'Relative pronoun' }, { label: 'D', text: 'Demonstrative pronoun' },
            { label: 'E', text: 'Possessive pronoun' }
        ],
        correctOption: 'C',
        explanation: 'Relative pronouns (who, which, that, whom, whose) connect a clause to a noun. Here "who" relates to "the boy".'
    },
    {
        id: 'el-q23', unit: 'el-unit-6', subject: 'Grammar Basics',
        topic: 'Functions of Pronouns', difficulty: 'hard',
        question: '"Someone left their bag." The word "Someone" is a/an:',
        options: [
            { label: 'A', text: 'Personal pronoun' }, { label: 'B', text: 'Indefinite pronoun' },
            { label: 'C', text: 'Relative pronoun' }, { label: 'D', text: 'Demonstrative pronoun' },
            { label: 'E', text: 'Interrogative pronoun' }
        ],
        correctOption: 'B',
        explanation: 'Indefinite pronouns refer to non-specific people or things: someone, everybody, anything, nobody.'
    },
    {
        id: 'el-q24', unit: 'el-unit-6', subject: 'Grammar Basics',
        topic: 'Functions of Pronouns', difficulty: 'medium',
        question: 'Which sentence uses a pronoun as the OBJECT?',
        options: [
            { label: 'A', text: 'She is tall.' }, { label: 'B', text: 'He likes her.' },
            { label: 'C', text: 'They are students.' }, { label: 'D', text: 'We go to school.' },
            { label: 'E', text: 'I am happy.' }
        ],
        correctOption: 'B',
        explanation: 'In "He likes her", the pronoun "her" is the object (receives the action). "He" is the subject.'
    },
    {
        id: 'el-q25', unit: 'el-unit-1', subject: 'Grammar Basics',
        topic: 'Introducing Parts of Speech', difficulty: 'hard',
        question: 'In "She quickly ate the delicious rice", which word is a VERB?',
        options: [
            { label: 'A', text: 'She' }, { label: 'B', text: 'quickly' },
            { label: 'C', text: 'ate' }, { label: 'D', text: 'delicious' },
            { label: 'E', text: 'rice' }
        ],
        correctOption: 'C',
        explanation: '"Ate" is the verb (action word). "Quickly" is an adverb, "delicious" is an adjective, "rice" is a noun.'
    },

    // ================================================================
    //  VERBS & TENSES (25 Questions — 5 units)
    // ================================================================

    // ===== EL Unit 7: Verbs =====
    {
        id: 'el-q26', unit: 'el-unit-7', subject: 'Verbs & Tenses',
        topic: 'Verbs', difficulty: 'easy',
        question: 'A verb is a word that shows:',
        options: [
            { label: 'A', text: 'A name' }, { label: 'B', text: 'A description' },
            { label: 'C', text: 'An action or state of being' }, { label: 'D', text: 'A position' },
            { label: 'E', text: 'A feeling only' }
        ],
        correctOption: 'C',
        explanation: 'Verbs show action (run, eat, write) or state of being (is, am, are, was).'
    },
    {
        id: 'el-q27', unit: 'el-unit-7', subject: 'Verbs & Tenses',
        topic: 'Verbs', difficulty: 'easy',
        question: 'Which of these is an irregular verb?',
        options: [
            { label: 'A', text: 'Walk' }, { label: 'B', text: 'Play' },
            { label: 'C', text: 'Go' }, { label: 'D', text: 'Jump' },
            { label: 'E', text: 'Talk' }
        ],
        correctOption: 'C',
        explanation: '"Go" is irregular because its past tense is "went" (not "goed"). Walk → walked, play → played are regular.'
    },
    {
        id: 'el-q28', unit: 'el-unit-7', subject: 'Verbs & Tenses',
        topic: 'Verbs', difficulty: 'medium',
        question: 'What is the past tense of "eat"?',
        options: [
            { label: 'A', text: 'Eated' }, { label: 'B', text: 'Eating' },
            { label: 'C', text: 'Ate' }, { label: 'D', text: 'Eaten' },
            { label: 'E', text: 'Eats' }
        ],
        correctOption: 'C',
        explanation: 'Eat → ate (past tense) → eaten (past participle). "Eated" is not a word.'
    },
    {
        id: 'el-q29', unit: 'el-unit-7', subject: 'Verbs & Tenses',
        topic: 'Verbs', difficulty: 'medium',
        question: '"She is a teacher." The verb "is" is called a:',
        options: [
            { label: 'A', text: 'Action verb' }, { label: 'B', text: 'Helping verb' },
            { label: 'C', text: 'Linking verb' }, { label: 'D', text: 'Modal verb' },
            { label: 'E', text: 'Transitive verb' }
        ],
        correctOption: 'C',
        explanation: 'Linking verbs (is, am, are, was, were) connect the subject to more information — they show a state of being.'
    },
    {
        id: 'el-q30', unit: 'el-unit-7', subject: 'Verbs & Tenses',
        topic: 'Verbs', difficulty: 'medium',
        question: 'Which of these is a helping (auxiliary) verb?',
        options: [
            { label: 'A', text: 'Run' }, { label: 'B', text: 'Has' },
            { label: 'C', text: 'Eat' }, { label: 'D', text: 'Jump' },
            { label: 'E', text: 'Write' }
        ],
        correctOption: 'B',
        explanation: 'Helping verbs (has, have, had, is, are, was, were, do, does, did) help the main verb form tenses.'
    },

    // ===== EL Unit 8: Present Tense =====
    {
        id: 'el-q31', unit: 'el-unit-8', subject: 'Verbs & Tenses',
        topic: 'Present Tense', difficulty: 'easy',
        question: 'Which sentence is in the simple present tense?',
        options: [
            { label: 'A', text: 'She went to school.' }, { label: 'B', text: 'She is going to school.' },
            { label: 'C', text: 'She goes to school every day.' }, { label: 'D', text: 'She will go to school.' },
            { label: 'E', text: 'She has gone to school.' }
        ],
        correctOption: 'C',
        explanation: 'Simple present tense describes habits or facts: "She goes to school every day."'
    },
    {
        id: 'el-q32', unit: 'el-unit-8', subject: 'Verbs & Tenses',
        topic: 'Present Tense', difficulty: 'easy',
        question: '"The children are playing in the yard." This sentence is in the:',
        options: [
            { label: 'A', text: 'Simple present' }, { label: 'B', text: 'Present continuous' },
            { label: 'C', text: 'Past tense' }, { label: 'D', text: 'Future tense' },
            { label: 'E', text: 'Past continuous' }
        ],
        correctOption: 'B',
        explanation: 'Present continuous uses "am/is/are + verb-ing" to show something happening right now.'
    },
    {
        id: 'el-q33', unit: 'el-unit-8', subject: 'Verbs & Tenses',
        topic: 'Present Tense', difficulty: 'medium',
        question: 'Complete: "He ______ to school every morning."',
        options: [
            { label: 'A', text: 'walk' }, { label: 'B', text: 'walks' },
            { label: 'C', text: 'walking' }, { label: 'D', text: 'walked' },
            { label: 'E', text: 'has walked' }
        ],
        correctOption: 'B',
        explanation: 'In simple present, third person singular (he/she/it) adds -s or -es: he walks, she plays.'
    },
    {
        id: 'el-q34', unit: 'el-unit-8', subject: 'Verbs & Tenses',
        topic: 'Present Tense', difficulty: 'medium',
        question: 'Which signal word tells you a sentence is in the present continuous?',
        options: [
            { label: 'A', text: 'Yesterday' }, { label: 'B', text: 'Tomorrow' },
            { label: 'C', text: 'Right now' }, { label: 'D', text: 'Last week' },
            { label: 'E', text: 'Next year' }
        ],
        correctOption: 'C',
        explanation: '"Right now", "at the moment", and "currently" signal present continuous tense.'
    },
    {
        id: 'el-q35', unit: 'el-unit-8', subject: 'Verbs & Tenses',
        topic: 'Present Tense', difficulty: 'hard',
        question: '"Water ______ at 100°C." Choose the correct form:',
        options: [
            { label: 'A', text: 'is boiling' }, { label: 'B', text: 'boils' },
            { label: 'C', text: 'boiled' }, { label: 'D', text: 'will boil' },
            { label: 'E', text: 'has boiled' }
        ],
        correctOption: 'B',
        explanation: 'Scientific facts and general truths use simple present tense: "Water boils at 100°C."'
    },

    // ===== EL Unit 9: Past Tense =====
    {
        id: 'el-q36', unit: 'el-unit-9', subject: 'Verbs & Tenses',
        topic: 'Past Tense', difficulty: 'easy',
        question: 'Which sentence is in the simple past tense?',
        options: [
            { label: 'A', text: 'She is dancing.' }, { label: 'B', text: 'She danced yesterday.' },
            { label: 'C', text: 'She dances every day.' }, { label: 'D', text: 'She will dance.' },
            { label: 'E', text: 'She has danced.' }
        ],
        correctOption: 'B',
        explanation: 'Simple past describes actions completed in the past: "She danced yesterday."'
    },
    {
        id: 'el-q37', unit: 'el-unit-9', subject: 'Verbs & Tenses',
        topic: 'Past Tense', difficulty: 'easy',
        question: 'What is the past tense of "run"?',
        options: [
            { label: 'A', text: 'Runned' }, { label: 'B', text: 'Running' },
            { label: 'C', text: 'Ran' }, { label: 'D', text: 'Runs' },
            { label: 'E', text: 'Runed' }
        ],
        correctOption: 'C',
        explanation: '"Run" is irregular: run → ran (past) → run (past participle).'
    },
    {
        id: 'el-q38', unit: 'el-unit-9', subject: 'Verbs & Tenses',
        topic: 'Past Tense', difficulty: 'medium',
        question: '"I was reading when the phone rang." The past continuous verb is:',
        options: [
            { label: 'A', text: 'I' }, { label: 'B', text: 'was reading' },
            { label: 'C', text: 'when' }, { label: 'D', text: 'the phone' },
            { label: 'E', text: 'rang' }
        ],
        correctOption: 'B',
        explanation: 'Past continuous uses "was/were + verb-ing": "was reading" shows an ongoing past action.'
    },
    {
        id: 'el-q39', unit: 'el-unit-9', subject: 'Verbs & Tenses',
        topic: 'Past Tense', difficulty: 'medium',
        question: 'Regular verbs form their past tense by adding:',
        options: [
            { label: 'A', text: '-ing' }, { label: 'B', text: '-ly' },
            { label: 'C', text: '-ed' }, { label: 'D', text: '-er' },
            { label: 'E', text: '-ness' }
        ],
        correctOption: 'C',
        explanation: 'Regular verbs add -ed: walk → walked, play → played, jump → jumped.'
    },
    {
        id: 'el-q40', unit: 'el-unit-9', subject: 'Verbs & Tenses',
        topic: 'Past Tense', difficulty: 'hard',
        question: 'Which sentence correctly uses the past tense?',
        options: [
            { label: 'A', text: 'She goed to the market.' }, { label: 'B', text: 'She go to the market yesterday.' },
            { label: 'C', text: 'She gone to the market.' }, { label: 'D', text: 'She went to the market.' },
            { label: 'E', text: 'She going to the market.' }
        ],
        correctOption: 'D',
        explanation: '"Go" is irregular: go → went → gone. "Goed" does not exist.'
    },

    // ===== EL Unit 10: Present Perfect =====
    {
        id: 'el-q41', unit: 'el-unit-10', subject: 'Verbs & Tenses',
        topic: 'Present Perfect', difficulty: 'medium',
        question: 'The present perfect tense is formed with:',
        options: [
            { label: 'A', text: 'was/were + verb-ing' }, { label: 'B', text: 'will + verb' },
            { label: 'C', text: 'has/have + past participle' }, { label: 'D', text: 'did + verb' },
            { label: 'E', text: 'is/am/are + verb-ing' }
        ],
        correctOption: 'C',
        explanation: 'Present perfect = has/have + past participle: "She has eaten", "They have finished".'
    },
    {
        id: 'el-q42', unit: 'el-unit-10', subject: 'Verbs & Tenses',
        topic: 'Present Perfect', difficulty: 'medium',
        question: '"I have already eaten." This sentence is in the:',
        options: [
            { label: 'A', text: 'Simple past' }, { label: 'B', text: 'Present continuous' },
            { label: 'C', text: 'Present perfect' }, { label: 'D', text: 'Future tense' },
            { label: 'E', text: 'Past continuous' }
        ],
        correctOption: 'C',
        explanation: '"Have eaten" = have + past participle = present perfect tense.'
    },
    {
        id: 'el-q43', unit: 'el-unit-10', subject: 'Verbs & Tenses',
        topic: 'Present Perfect', difficulty: 'hard',
        question: 'Complete: "She ______ in Freetown since 2020."',
        options: [
            { label: 'A', text: 'lives' }, { label: 'B', text: 'lived' },
            { label: 'C', text: 'is living' }, { label: 'D', text: 'has lived' },
            { label: 'E', text: 'will live' }
        ],
        correctOption: 'D',
        explanation: '"Since 2020" signals present perfect: "She has lived in Freetown since 2020."'
    },
    {
        id: 'el-q44', unit: 'el-unit-10', subject: 'Verbs & Tenses',
        topic: 'Present Perfect', difficulty: 'medium',
        question: 'Which signal word is commonly used with the present perfect?',
        options: [
            { label: 'A', text: 'Yesterday' }, { label: 'B', text: 'Tomorrow' },
            { label: 'C', text: 'Last year' }, { label: 'D', text: 'Already' },
            { label: 'E', text: 'Next week' }
        ],
        correctOption: 'D',
        explanation: '"Already", "yet", "just", "ever", "never", and "since" are common present perfect signal words.'
    },
    {
        id: 'el-q45', unit: 'el-unit-10', subject: 'Verbs & Tenses',
        topic: 'Present Perfect', difficulty: 'hard',
        question: '"They have been friends for ten years." The tense is:',
        options: [
            { label: 'A', text: 'Simple present' }, { label: 'B', text: 'Past continuous' },
            { label: 'C', text: 'Present perfect' }, { label: 'D', text: 'Past perfect' },
            { label: 'E', text: 'Simple past' }
        ],
        correctOption: 'C',
        explanation: '"Have been" = have + past participle of "be". "For ten years" confirms an ongoing duration.'
    },

    // ===== EL Unit 11: Future Tense =====
    {
        id: 'el-q46', unit: 'el-unit-11', subject: 'Verbs & Tenses',
        topic: 'Future Tense', difficulty: 'easy',
        question: 'Which sentence is in the future tense?',
        options: [
            { label: 'A', text: 'She went to school.' }, { label: 'B', text: 'She goes to school.' },
            { label: 'C', text: 'She is going to school.' }, { label: 'D', text: 'She will go to school tomorrow.' },
            { label: 'E', text: 'She has gone to school.' }
        ],
        correctOption: 'D',
        explanation: '"Will + verb" makes the simple future tense: "She will go to school tomorrow."'
    },
    {
        id: 'el-q47', unit: 'el-unit-11', subject: 'Verbs & Tenses',
        topic: 'Future Tense', difficulty: 'easy',
        question: 'Complete: "We ______ visit our grandmother next week."',
        options: [
            { label: 'A', text: 'visited' }, { label: 'B', text: 'visiting' },
            { label: 'C', text: 'will' }, { label: 'D', text: 'visits' },
            { label: 'E', text: 'have visited' }
        ],
        correctOption: 'C',
        explanation: '"Next week" indicates the future: "We will visit our grandmother next week."'
    },
    {
        id: 'el-q48', unit: 'el-unit-11', subject: 'Verbs & Tenses',
        topic: 'Future Tense', difficulty: 'medium',
        question: '"I am going to study hard." The phrase "am going to" expresses:',
        options: [
            { label: 'A', text: 'Past action' }, { label: 'B', text: 'A plan or intention for the future' },
            { label: 'C', text: 'A present habit' }, { label: 'D', text: 'Something that already happened' },
            { label: 'E', text: 'A command' }
        ],
        correctOption: 'B',
        explanation: '"Am/is/are going to + verb" is used for planned future actions or strong intentions.'
    },
    {
        id: 'el-q49', unit: 'el-unit-11', subject: 'Verbs & Tenses',
        topic: 'Future Tense', difficulty: 'medium',
        question: 'Which word signals the future tense?',
        options: [
            { label: 'A', text: 'Yesterday' }, { label: 'B', text: 'Already' },
            { label: 'C', text: 'Last night' }, { label: 'D', text: 'Tomorrow' },
            { label: 'E', text: 'Just now' }
        ],
        correctOption: 'D',
        explanation: '"Tomorrow", "next week", "soon", and "later" are common future tense signal words.'
    },
    {
        id: 'el-q50', unit: 'el-unit-11', subject: 'Verbs & Tenses',
        topic: 'Future Tense', difficulty: 'hard',
        question: '"By 3 o\'clock, she will have finished the exam." This is the:',
        options: [
            { label: 'A', text: 'Simple future' }, { label: 'B', text: 'Future continuous' },
            { label: 'C', text: 'Future perfect' }, { label: 'D', text: 'Present perfect' },
            { label: 'E', text: 'Past perfect' }
        ],
        correctOption: 'C',
        explanation: 'Future perfect (will have + past participle) shows something completed before a future time.'
    },

    // ================================================================
    //  VOCABULARY (35 Questions — 7 units × 5 each)
    // ================================================================

    // ===== EL Unit 14: Synonyms =====
    {
        id: 'el-q51', unit: 'el-unit-14', subject: 'Vocabulary',
        topic: 'Synonyms', difficulty: 'easy',
        question: 'A synonym is a word that has the:',
        options: [
            { label: 'A', text: 'Opposite meaning' }, { label: 'B', text: 'Same or similar meaning' },
            { label: 'C', text: 'Same spelling' }, { label: 'D', text: 'Same sound' },
            { label: 'E', text: 'No meaning' }
        ],
        correctOption: 'B',
        explanation: 'Synonyms have the same or similar meaning: big = large, happy = joyful.'
    },
    {
        id: 'el-q52', unit: 'el-unit-14', subject: 'Vocabulary',
        topic: 'Synonyms', difficulty: 'easy',
        question: 'Which word is a synonym of "happy"?',
        options: [
            { label: 'A', text: 'Sad' }, { label: 'B', text: 'Angry' },
            { label: 'C', text: 'Joyful' }, { label: 'D', text: 'Tired' },
            { label: 'E', text: 'Hungry' }
        ],
        correctOption: 'C',
        explanation: 'Joyful means full of joy — the same as happy.'
    },
    {
        id: 'el-q53', unit: 'el-unit-14', subject: 'Vocabulary',
        topic: 'Synonyms', difficulty: 'medium',
        question: 'Choose the synonym of "enormous":',
        options: [
            { label: 'A', text: 'Tiny' }, { label: 'B', text: 'Small' },
            { label: 'C', text: 'Huge' }, { label: 'D', text: 'Short' },
            { label: 'E', text: 'Thin' }
        ],
        correctOption: 'C',
        explanation: 'Enormous and huge both mean very large in size.'
    },
    {
        id: 'el-q54', unit: 'el-unit-14', subject: 'Vocabulary',
        topic: 'Synonyms', difficulty: 'medium',
        question: 'Which word is a synonym of "courageous"?',
        options: [
            { label: 'A', text: 'Cowardly' }, { label: 'B', text: 'Brave' },
            { label: 'C', text: 'Lazy' }, { label: 'D', text: 'Weak' },
            { label: 'E', text: 'Fearful' }
        ],
        correctOption: 'B',
        explanation: 'Courageous = brave = having the strength to face danger or difficulty.'
    },
    {
        id: 'el-q55', unit: 'el-unit-14', subject: 'Vocabulary',
        topic: 'Synonyms', difficulty: 'hard',
        question: '"The wealthy man donated to the school." A synonym of "wealthy" is:',
        options: [
            { label: 'A', text: 'Poor' }, { label: 'B', text: 'Healthy' },
            { label: 'C', text: 'Affluent' }, { label: 'D', text: 'Stealthy' },
            { label: 'E', text: 'Elderly' }
        ],
        correctOption: 'C',
        explanation: 'Affluent means having a lot of money or wealth — same as wealthy or rich.'
    },

    // ===== EL Unit 15: Antonyms =====
    {
        id: 'el-q56', unit: 'el-unit-15', subject: 'Vocabulary',
        topic: 'Antonyms', difficulty: 'easy',
        question: 'An antonym is a word that has the:',
        options: [
            { label: 'A', text: 'Same meaning' }, { label: 'B', text: 'Similar sound' },
            { label: 'C', text: 'Opposite meaning' }, { label: 'D', text: 'Same spelling' },
            { label: 'E', text: 'No meaning' }
        ],
        correctOption: 'C',
        explanation: 'Antonyms are words with opposite meanings: hot ↔ cold, big ↔ small.'
    },
    {
        id: 'el-q57', unit: 'el-unit-15', subject: 'Vocabulary',
        topic: 'Antonyms', difficulty: 'easy',
        question: 'What is the antonym of "dark"?',
        options: [
            { label: 'A', text: 'Black' }, { label: 'B', text: 'Dim' },
            { label: 'C', text: 'Bright' }, { label: 'D', text: 'Night' },
            { label: 'E', text: 'Shadow' }
        ],
        correctOption: 'C',
        explanation: 'Dark ↔ bright/light. They are opposite in meaning.'
    },
    {
        id: 'el-q58', unit: 'el-unit-15', subject: 'Vocabulary',
        topic: 'Antonyms', difficulty: 'medium',
        question: 'The antonym of "generous" is:',
        options: [
            { label: 'A', text: 'Kind' }, { label: 'B', text: 'Stingy' },
            { label: 'C', text: 'Gentle' }, { label: 'D', text: 'Brave' },
            { label: 'E', text: 'Honest' }
        ],
        correctOption: 'B',
        explanation: 'Generous (willing to give) ↔ stingy (unwilling to share or spend).'
    },
    {
        id: 'el-q59', unit: 'el-unit-15', subject: 'Vocabulary',
        topic: 'Antonyms', difficulty: 'medium',
        question: 'Which pair are antonyms?',
        options: [
            { label: 'A', text: 'Big and large' }, { label: 'B', text: 'Fast and quick' },
            { label: 'C', text: 'Beautiful and ugly' }, { label: 'D', text: 'Happy and glad' },
            { label: 'E', text: 'Start and begin' }
        ],
        correctOption: 'C',
        explanation: 'Beautiful ↔ ugly are antonyms. The other pairs are synonyms.'
    },
    {
        id: 'el-q60', unit: 'el-unit-15', subject: 'Vocabulary',
        topic: 'Antonyms', difficulty: 'hard',
        question: 'The antonym of "temporary" is:',
        options: [
            { label: 'A', text: 'Short' }, { label: 'B', text: 'Quick' },
            { label: 'C', text: 'Permanent' }, { label: 'D', text: 'Modern' },
            { label: 'E', text: 'Flexible' }
        ],
        correctOption: 'C',
        explanation: 'Temporary (lasting a short time) ↔ permanent (lasting forever).'
    },

    // ===== EL Unit 16: Idioms =====
    {
        id: 'el-q61', unit: 'el-unit-16', subject: 'Vocabulary',
        topic: 'Idioms', difficulty: 'easy',
        question: 'An idiom is a phrase whose meaning is:',
        options: [
            { label: 'A', text: 'The same as its individual words' }, { label: 'B', text: 'Different from the literal meaning of its words' },
            { label: 'C', text: 'Always about animals' }, { label: 'D', text: 'Always a command' },
            { label: 'E', text: 'A type of verb' }
        ],
        correctOption: 'B',
        explanation: 'Idioms have figurative meanings that differ from the literal words: "kick the bucket" = to die.'
    },
    {
        id: 'el-q62', unit: 'el-unit-16', subject: 'Vocabulary',
        topic: 'Idioms', difficulty: 'medium',
        question: '"It\'s raining cats and dogs" means:',
        options: [
            { label: 'A', text: 'Animals are falling from the sky' }, { label: 'B', text: 'It is raining very heavily' },
            { label: 'C', text: 'The pets are outside' }, { label: 'D', text: 'The sun is shining' },
            { label: 'E', text: 'There is a storm coming' }
        ],
        correctOption: 'B',
        explanation: 'This idiom means it is raining very heavily — not literally about cats and dogs!'
    },
    {
        id: 'el-q63', unit: 'el-unit-16', subject: 'Vocabulary',
        topic: 'Idioms', difficulty: 'medium',
        question: '"Break a leg" means:',
        options: [
            { label: 'A', text: 'Get injured' }, { label: 'B', text: 'Go to the hospital' },
            { label: 'C', text: 'Good luck!' }, { label: 'D', text: 'Run away' },
            { label: 'E', text: 'Stop trying' }
        ],
        correctOption: 'C',
        explanation: '"Break a leg" is an idiom used to wish someone good luck, especially performers.'
    },
    {
        id: 'el-q64', unit: 'el-unit-16', subject: 'Vocabulary',
        topic: 'Idioms', difficulty: 'hard',
        question: '"He let the cat out of the bag" means he:',
        options: [
            { label: 'A', text: 'Released his pet' }, { label: 'B', text: 'Went shopping' },
            { label: 'C', text: 'Revealed a secret' }, { label: 'D', text: 'Packed his bag' },
            { label: 'E', text: 'Caught a cat' }
        ],
        correctOption: 'C',
        explanation: '"Let the cat out of the bag" means to accidentally reveal a secret.'
    },
    {
        id: 'el-q65', unit: 'el-unit-16', subject: 'Vocabulary',
        topic: 'Idioms', difficulty: 'medium',
        question: '"A piece of cake" means something is:',
        options: [
            { label: 'A', text: 'Delicious' }, { label: 'B', text: 'Very easy' },
            { label: 'C', text: 'Expensive' }, { label: 'D', text: 'Sweet' },
            { label: 'E', text: 'Broken into pieces' }
        ],
        correctOption: 'B',
        explanation: '"A piece of cake" means something is very easy to do.'
    },

    // ===== EL Unit 17: Prefixes and Suffixes =====
    {
        id: 'el-q66', unit: 'el-unit-17', subject: 'Vocabulary',
        topic: 'Prefixes and Suffixes', difficulty: 'easy',
        question: 'A prefix is added to the ______ of a word.',
        options: [
            { label: 'A', text: 'End' }, { label: 'B', text: 'Middle' },
            { label: 'C', text: 'Beginning' }, { label: 'D', text: 'Bottom' },
            { label: 'E', text: 'Side' }
        ],
        correctOption: 'C',
        explanation: 'Prefixes go at the beginning: un + happy = unhappy, re + write = rewrite.'
    },
    {
        id: 'el-q67', unit: 'el-unit-17', subject: 'Vocabulary',
        topic: 'Prefixes and Suffixes', difficulty: 'easy',
        question: 'What does the prefix "un-" mean?',
        options: [
            { label: 'A', text: 'Again' }, { label: 'B', text: 'Before' },
            { label: 'C', text: 'Not / opposite' }, { label: 'D', text: 'After' },
            { label: 'E', text: 'Half' }
        ],
        correctOption: 'C',
        explanation: '"Un-" means not or the opposite: unhappy = not happy, unkind = not kind.'
    },
    {
        id: 'el-q68', unit: 'el-unit-17', subject: 'Vocabulary',
        topic: 'Prefixes and Suffixes', difficulty: 'medium',
        question: 'Adding the suffix "-ful" to "care" makes:',
        options: [
            { label: 'A', text: 'Careless' }, { label: 'B', text: 'Careful' },
            { label: 'C', text: 'Caring' }, { label: 'D', text: 'Cared' },
            { label: 'E', text: 'Carer' }
        ],
        correctOption: 'B',
        explanation: 'Care + ful = careful (full of care). The suffix -ful means "full of".'
    },
    {
        id: 'el-q69', unit: 'el-unit-17', subject: 'Vocabulary',
        topic: 'Prefixes and Suffixes', difficulty: 'medium',
        question: 'The prefix "re-" means:',
        options: [
            { label: 'A', text: 'Not' }, { label: 'B', text: 'Before' },
            { label: 'C', text: 'Again' }, { label: 'D', text: 'After' },
            { label: 'E', text: 'Under' }
        ],
        correctOption: 'C',
        explanation: '"Re-" means again: rewrite = write again, replay = play again, redo = do again.'
    },
    {
        id: 'el-q70', unit: 'el-unit-17', subject: 'Vocabulary',
        topic: 'Prefixes and Suffixes', difficulty: 'hard',
        question: 'Which word uses a suffix that means "without"?',
        options: [
            { label: 'A', text: 'Hopeful' }, { label: 'B', text: 'Hopeless' },
            { label: 'C', text: 'Hoping' }, { label: 'D', text: 'Hoped' },
            { label: 'E', text: 'Unhappy' }
        ],
        correctOption: 'B',
        explanation: 'The suffix "-less" means without: hopeless = without hope, careless = without care.'
    },

    // ===== EL Unit 25: Homophones and Homonyms =====
    {
        id: 'el-q71', unit: 'el-unit-25', subject: 'Vocabulary',
        topic: 'Homophones and Homonyms', difficulty: 'easy',
        question: 'Homophones are words that:',
        options: [
            { label: 'A', text: 'Have the same spelling' }, { label: 'B', text: 'Sound the same but have different meanings and spellings' },
            { label: 'C', text: 'Mean the same thing' }, { label: 'D', text: 'Are always verbs' },
            { label: 'E', text: 'Rhyme with each other' }
        ],
        correctOption: 'B',
        explanation: 'Homophones sound the same but differ in meaning and often spelling: their/there/they\'re.'
    },
    {
        id: 'el-q72', unit: 'el-unit-25', subject: 'Vocabulary',
        topic: 'Homophones and Homonyms', difficulty: 'easy',
        question: 'Which pair are homophones?',
        options: [
            { label: 'A', text: 'Cat and bat' }, { label: 'B', text: 'Read and red' },
            { label: 'C', text: 'See and sea' }, { label: 'D', text: 'Big and small' },
            { label: 'E', text: 'Run and ran' }
        ],
        correctOption: 'C',
        explanation: '"See" (to look) and "sea" (the ocean) sound the same but have different meanings and spellings.'
    },
    {
        id: 'el-q73', unit: 'el-unit-25', subject: 'Vocabulary',
        topic: 'Homophones and Homonyms', difficulty: 'medium',
        question: 'Choose the correct word: "They went ______ the park."',
        options: [
            { label: 'A', text: 'to' }, { label: 'B', text: 'too' },
            { label: 'C', text: 'two' }, { label: 'D', text: 'tow' },
            { label: 'E', text: 'threw' }
        ],
        correctOption: 'A',
        explanation: '"To" shows direction. "Too" means also or excessively. "Two" is the number 2.'
    },
    {
        id: 'el-q74', unit: 'el-unit-25', subject: 'Vocabulary',
        topic: 'Homophones and Homonyms', difficulty: 'medium',
        question: '"_______ pen is this?" Choose the correct word:',
        options: [
            { label: 'A', text: 'Who\'s' }, { label: 'B', text: 'Whose' },
            { label: 'C', text: 'Whos' }, { label: 'D', text: 'Who' },
            { label: 'E', text: 'Whom' }
        ],
        correctOption: 'B',
        explanation: '"Whose" asks about ownership. "Who\'s" = who is. "Whose pen is this?" is correct.'
    },
    {
        id: 'el-q75', unit: 'el-unit-25', subject: 'Vocabulary',
        topic: 'Homophones and Homonyms', difficulty: 'hard',
        question: '"I need to ______ a letter." Choose the correct word:',
        options: [
            { label: 'A', text: 'Right' }, { label: 'B', text: 'Rite' },
            { label: 'C', text: 'Write' }, { label: 'D', text: 'Wright' },
            { label: 'E', text: 'Writ' }
        ],
        correctOption: 'C',
        explanation: '"Write" means to put words on paper. "Right" = correct/direction. "Rite" = ceremony.'
    },

    // ===== EL Unit 36: Proverbs =====
    {
        id: 'el-q76', unit: 'el-unit-36', subject: 'Vocabulary',
        topic: 'Proverbs', difficulty: 'easy',
        question: 'A proverb is a:',
        options: [
            { label: 'A', text: 'Long story' }, { label: 'B', text: 'Short wise saying' },
            { label: 'C', text: 'Type of verb' }, { label: 'D', text: 'Mathematical formula' },
            { label: 'E', text: 'Kind of adjective' }
        ],
        correctOption: 'B',
        explanation: 'Proverbs are short, well-known sayings that express general truths or advice.'
    },
    {
        id: 'el-q77', unit: 'el-unit-36', subject: 'Vocabulary',
        topic: 'Proverbs', difficulty: 'medium',
        question: '"A stitch in time saves nine" means:',
        options: [
            { label: 'A', text: 'Sewing is important' }, { label: 'B', text: 'Learn to count' },
            { label: 'C', text: 'Fixing a problem early prevents bigger problems later' },
            { label: 'D', text: 'Time flies fast' }, { label: 'E', text: 'Nine is a lucky number' }
        ],
        correctOption: 'C',
        explanation: 'This proverb means deal with problems early before they grow bigger.'
    },
    {
        id: 'el-q78', unit: 'el-unit-36', subject: 'Vocabulary',
        topic: 'Proverbs', difficulty: 'medium',
        question: '"Don\'t count your chickens before they hatch" means:',
        options: [
            { label: 'A', text: 'Chickens are hard to count' }, { label: 'B', text: 'Don\'t assume success before it happens' },
            { label: 'C', text: 'Always eat chicken' }, { label: 'D', text: 'Chickens lay eggs' },
            { label: 'E', text: 'Farming is difficult' }
        ],
        correctOption: 'B',
        explanation: 'Don\'t rely on something that has not yet happened or been confirmed.'
    },
    {
        id: 'el-q79', unit: 'el-unit-36', subject: 'Vocabulary',
        topic: 'Proverbs', difficulty: 'medium',
        question: 'Complete: "Practice makes ______."',
        options: [
            { label: 'A', text: 'Money' }, { label: 'B', text: 'Perfect' },
            { label: 'C', text: 'Sense' }, { label: 'D', text: 'Friends' },
            { label: 'E', text: 'Problems' }
        ],
        correctOption: 'B',
        explanation: '"Practice makes perfect" — the more you practise, the better you become.'
    },
    {
        id: 'el-q80', unit: 'el-unit-36', subject: 'Vocabulary',
        topic: 'Proverbs', difficulty: 'hard',
        question: '"The pen is mightier than the sword" means:',
        options: [
            { label: 'A', text: 'Pens are dangerous weapons' }, { label: 'B', text: 'Writing and ideas are more powerful than force' },
            { label: 'C', text: 'Swords are useless' }, { label: 'D', text: 'Writers are stronger than soldiers' },
            { label: 'E', text: 'Pens cost more than swords' }
        ],
        correctOption: 'B',
        explanation: 'Words, education, and communication are more powerful than violence.'
    },

    // ===== EL Unit 52: Word Games & Puzzles =====
    {
        id: 'el-q81', unit: 'el-unit-52', subject: 'Vocabulary',
        topic: 'Word Games and Puzzles', difficulty: 'easy',
        question: 'An anagram rearranges the letters of a word to form:',
        options: [
            { label: 'A', text: 'A sentence' }, { label: 'B', text: 'A new word' },
            { label: 'C', text: 'A number' }, { label: 'D', text: 'A drawing' },
            { label: 'E', text: 'A song' }
        ],
        correctOption: 'B',
        explanation: 'Anagrams rearrange letters: "listen" → "silent", "race" → "care".'
    },
    {
        id: 'el-q82', unit: 'el-unit-52', subject: 'Vocabulary',
        topic: 'Word Games and Puzzles', difficulty: 'medium',
        question: 'Which word is a palindrome (reads the same forwards and backwards)?',
        options: [
            { label: 'A', text: 'Book' }, { label: 'B', text: 'Level' },
            { label: 'C', text: 'Table' }, { label: 'D', text: 'Chair' },
            { label: 'E', text: 'House' }
        ],
        correctOption: 'B',
        explanation: '"Level" reads the same forwards (L-E-V-E-L) and backwards. Other palindromes: madam, noon, kayak.'
    },
    {
        id: 'el-q83', unit: 'el-unit-52', subject: 'Vocabulary',
        topic: 'Word Games and Puzzles', difficulty: 'medium',
        question: 'Rearrange "TCEA" to form a word:',
        options: [
            { label: 'A', text: 'RACE' }, { label: 'B', text: 'CART' },
            { label: 'C', text: 'EACH' }, { label: 'D', text: 'ACHE' },
            { label: 'E', text: 'CARE' }
        ],
        correctOption: 'D',
        explanation: 'T-C-E-A rearranged gives A-C-H-E = ACHE (a pain).'
    },
    {
        id: 'el-q84', unit: 'el-unit-52', subject: 'Vocabulary',
        topic: 'Word Games and Puzzles', difficulty: 'hard',
        question: 'Which word can be made from the letters in "SILENT"?',
        options: [
            { label: 'A', text: 'LINES' }, { label: 'B', text: 'STONE' },
            { label: 'C', text: 'LISTEN' }, { label: 'D', text: 'TRAIN' },
            { label: 'E', text: 'SMILE' }
        ],
        correctOption: 'C',
        explanation: 'SILENT and LISTEN use the exact same letters — they are anagrams of each other!'
    },
    {
        id: 'el-q85', unit: 'el-unit-52', subject: 'Vocabulary',
        topic: 'Word Games and Puzzles', difficulty: 'medium',
        question: 'What 5-letter word becomes shorter when you add two letters to it?',
        options: [
            { label: 'A', text: 'Taller' }, { label: 'B', text: 'Short' },
            { label: 'C', text: 'Longer' }, { label: 'D', text: 'Wider' },
            { label: 'E', text: 'Small' }
        ],
        correctOption: 'B',
        explanation: '"Short" + "er" = "Shorter" — the word literally becomes "shorter" by adding letters!'
    },

    // ================================================================
    //  ADVANCED GRAMMAR (25 Questions — 5 units × 5 each)
    // ================================================================

    // ===== EL Unit 31: Active & Passive Voice =====
    {
        id: 'el-q86', unit: 'el-unit-31', subject: 'Advanced Grammar',
        topic: 'Active and Passive Voice', difficulty: 'easy',
        question: 'In "The cat chased the mouse", the sentence is in the:',
        options: [
            { label: 'A', text: 'Passive voice' }, { label: 'B', text: 'Active voice' },
            { label: 'C', text: 'Future tense' }, { label: 'D', text: 'Present tense' },
            { label: 'E', text: 'Continuous tense' }
        ],
        correctOption: 'B',
        explanation: 'Active voice: the subject (cat) performs the action (chased) on the object (mouse).'
    },
    {
        id: 'el-q87', unit: 'el-unit-31', subject: 'Advanced Grammar',
        topic: 'Active and Passive Voice', difficulty: 'medium',
        question: '"The cake was baked by my mother." This sentence is in the:',
        options: [
            { label: 'A', text: 'Active voice' }, { label: 'B', text: 'Passive voice' },
            { label: 'C', text: 'Future tense' }, { label: 'D', text: 'Present continuous' },
            { label: 'E', text: 'Past continuous' }
        ],
        correctOption: 'B',
        explanation: 'Passive voice: the subject (cake) receives the action. The doer (mother) comes after "by".'
    },
    {
        id: 'el-q88', unit: 'el-unit-31', subject: 'Advanced Grammar',
        topic: 'Active and Passive Voice', difficulty: 'medium',
        question: 'Change to passive: "She wrote a letter."',
        options: [
            { label: 'A', text: 'A letter wrote she.' }, { label: 'B', text: 'A letter was written by her.' },
            { label: 'C', text: 'She was written a letter.' }, { label: 'D', text: 'A letter is written by her.' },
            { label: 'E', text: 'By her a letter was written.' }
        ],
        correctOption: 'B',
        explanation: 'Active: She wrote a letter. Passive: A letter was written by her.'
    },
    {
        id: 'el-q89', unit: 'el-unit-31', subject: 'Advanced Grammar',
        topic: 'Active and Passive Voice', difficulty: 'hard',
        question: 'Which word usually signals passive voice?',
        options: [
            { label: 'A', text: 'Will' }, { label: 'B', text: 'By' },
            { label: 'C', text: 'And' }, { label: 'D', text: 'Very' },
            { label: 'E', text: 'Also' }
        ],
        correctOption: 'B',
        explanation: '"By" often appears in passive sentences to show who did the action: "done by someone".'
    },
    {
        id: 'el-q90', unit: 'el-unit-31', subject: 'Advanced Grammar',
        topic: 'Active and Passive Voice', difficulty: 'hard',
        question: 'Change to active: "The ball was kicked by the boy."',
        options: [
            { label: 'A', text: 'The boy kicked the ball.' }, { label: 'B', text: 'The ball kicked the boy.' },
            { label: 'C', text: 'The boy was kicked by the ball.' }, { label: 'D', text: 'By the boy the ball kicked.' },
            { label: 'E', text: 'Kicked the ball by the boy.' }
        ],
        correctOption: 'A',
        explanation: 'In active voice, the doer (boy) becomes the subject: "The boy kicked the ball."'
    },

    // ===== EL Unit 32: Direct & Indirect Speech =====
    {
        id: 'el-q91', unit: 'el-unit-32', subject: 'Advanced Grammar',
        topic: 'Direct and Indirect Speech', difficulty: 'easy',
        question: 'Direct speech uses:',
        options: [
            { label: 'A', text: 'No punctuation' }, { label: 'B', text: 'Quotation marks to show exact words' },
            { label: 'C', text: 'Only full stops' }, { label: 'D', text: 'Only commas' },
            { label: 'E', text: 'Question marks only' }
        ],
        correctOption: 'B',
        explanation: 'Direct speech uses quotation marks: She said, "I am happy."'
    },
    {
        id: 'el-q92', unit: 'el-unit-32', subject: 'Advanced Grammar',
        topic: 'Direct and Indirect Speech', difficulty: 'medium',
        question: 'Change to indirect speech: He said, "I am tired."',
        options: [
            { label: 'A', text: 'He said that he is tired.' }, { label: 'B', text: 'He said that he was tired.' },
            { label: 'C', text: 'He says he is tired.' }, { label: 'D', text: 'He said he will be tired.' },
            { label: 'E', text: 'He said "I was tired."' }
        ],
        correctOption: 'B',
        explanation: 'In indirect speech, "am" changes to "was" and "I" changes to "he": He said that he was tired.'
    },
    {
        id: 'el-q93', unit: 'el-unit-32', subject: 'Advanced Grammar',
        topic: 'Direct and Indirect Speech', difficulty: 'medium',
        question: 'In indirect speech, "today" changes to:',
        options: [
            { label: 'A', text: 'Tomorrow' }, { label: 'B', text: 'Yesterday' },
            { label: 'C', text: 'That day' }, { label: 'D', text: 'This day' },
            { label: 'E', text: 'Next day' }
        ],
        correctOption: 'C',
        explanation: 'Time words change in indirect speech: today → that day, tomorrow → the next day, yesterday → the day before.'
    },
    {
        id: 'el-q94', unit: 'el-unit-32', subject: 'Advanced Grammar',
        topic: 'Direct and Indirect Speech', difficulty: 'hard',
        question: 'Which is the correct indirect form of: She asked, "Where do you live?"',
        options: [
            { label: 'A', text: 'She asked where do I live.' }, { label: 'B', text: 'She asked where she lived.' },
            { label: 'C', text: 'She asked where I lived.' }, { label: 'D', text: 'She asked "where I lived."' },
            { label: 'E', text: 'She asked where did I live.' }
        ],
        correctOption: 'C',
        explanation: 'Indirect questions drop the question mark and use normal word order: She asked where I lived.'
    },
    {
        id: 'el-q95', unit: 'el-unit-32', subject: 'Advanced Grammar',
        topic: 'Direct and Indirect Speech', difficulty: 'medium',
        question: 'In indirect speech, "will" usually changes to:',
        options: [
            { label: 'A', text: 'Shall' }, { label: 'B', text: 'Can' },
            { label: 'C', text: 'Would' }, { label: 'D', text: 'May' },
            { label: 'E', text: 'Must' }
        ],
        correctOption: 'C',
        explanation: '"Will" changes to "would" in indirect speech: "I will go" → He said he would go.'
    },

    // ===== EL Unit 33: Sentence Types =====
    {
        id: 'el-q96', unit: 'el-unit-33', subject: 'Advanced Grammar',
        topic: 'Sentence Types', difficulty: 'easy',
        question: '"Close the door!" is an example of a/an:',
        options: [
            { label: 'A', text: 'Declarative sentence' }, { label: 'B', text: 'Interrogative sentence' },
            { label: 'C', text: 'Exclamatory sentence' }, { label: 'D', text: 'Imperative sentence' },
            { label: 'E', text: 'Complex sentence' }
        ],
        correctOption: 'D',
        explanation: 'Imperative sentences give commands or instructions: "Close the door!", "Sit down."'
    },
    {
        id: 'el-q97', unit: 'el-unit-33', subject: 'Advanced Grammar',
        topic: 'Sentence Types', difficulty: 'easy',
        question: '"Where are you going?" is a/an:',
        options: [
            { label: 'A', text: 'Imperative sentence' }, { label: 'B', text: 'Interrogative sentence' },
            { label: 'C', text: 'Declarative sentence' }, { label: 'D', text: 'Exclamatory sentence' },
            { label: 'E', text: 'Simple sentence' }
        ],
        correctOption: 'B',
        explanation: 'Interrogative sentences ask questions and end with a question mark (?).'
    },
    {
        id: 'el-q98', unit: 'el-unit-33', subject: 'Advanced Grammar',
        topic: 'Sentence Types', difficulty: 'medium',
        question: '"The sun rises in the east." This is a:',
        options: [
            { label: 'A', text: 'Imperative sentence' }, { label: 'B', text: 'Interrogative sentence' },
            { label: 'C', text: 'Declarative sentence' }, { label: 'D', text: 'Exclamatory sentence' },
            { label: 'E', text: 'Complex sentence' }
        ],
        correctOption: 'C',
        explanation: 'Declarative sentences make statements or share information and end with a full stop.'
    },
    {
        id: 'el-q99', unit: 'el-unit-33', subject: 'Advanced Grammar',
        topic: 'Sentence Types', difficulty: 'medium',
        question: '"What a beautiful day!" is a/an:',
        options: [
            { label: 'A', text: 'Declarative sentence' }, { label: 'B', text: 'Interrogative sentence' },
            { label: 'C', text: 'Imperative sentence' }, { label: 'D', text: 'Exclamatory sentence' },
            { label: 'E', text: 'Conditional sentence' }
        ],
        correctOption: 'D',
        explanation: 'Exclamatory sentences express strong emotion and end with an exclamation mark (!).'
    },
    {
        id: 'el-q100', unit: 'el-unit-33', subject: 'Advanced Grammar',
        topic: 'Sentence Types', difficulty: 'hard',
        question: 'A compound sentence contains:',
        options: [
            { label: 'A', text: 'One independent clause' }, { label: 'B', text: 'One dependent clause only' },
            { label: 'C', text: 'Two or more independent clauses joined by a conjunction' },
            { label: 'D', text: 'No subject' }, { label: 'E', text: 'Only adjectives' }
        ],
        correctOption: 'C',
        explanation: 'Compound sentences join two independent clauses with a conjunction: "I ran AND she walked."'
    },

    // ===== EL Unit 34: Conditionals =====
    {
        id: 'el-q101', unit: 'el-unit-34', subject: 'Advanced Grammar',
        topic: 'Conditionals', difficulty: 'easy',
        question: 'Conditional sentences often begin with the word:',
        options: [
            { label: 'A', text: 'Because' }, { label: 'B', text: 'If' },
            { label: 'C', text: 'And' }, { label: 'D', text: 'But' },
            { label: 'E', text: 'So' }
        ],
        correctOption: 'B',
        explanation: 'Conditional sentences use "if" to set a condition: "If it rains, we will stay inside."'
    },
    {
        id: 'el-q102', unit: 'el-unit-34', subject: 'Advanced Grammar',
        topic: 'Conditionals', difficulty: 'medium',
        question: '"If you study hard, you will pass." This is a:',
        options: [
            { label: 'A', text: 'Zero conditional' }, { label: 'B', text: 'First conditional' },
            { label: 'C', text: 'Second conditional' }, { label: 'D', text: 'Third conditional' },
            { label: 'E', text: 'Past conditional' }
        ],
        correctOption: 'B',
        explanation: 'First conditional (If + present, will + verb) describes real/possible future situations.'
    },
    {
        id: 'el-q103', unit: 'el-unit-34', subject: 'Advanced Grammar',
        topic: 'Conditionals', difficulty: 'medium',
        question: '"If you heat water, it boils." This is a:',
        options: [
            { label: 'A', text: 'Zero conditional' }, { label: 'B', text: 'First conditional' },
            { label: 'C', text: 'Second conditional' }, { label: 'D', text: 'Third conditional' },
            { label: 'E', text: 'Mixed conditional' }
        ],
        correctOption: 'A',
        explanation: 'Zero conditional (If + present, present) describes facts and things always true.'
    },
    {
        id: 'el-q104', unit: 'el-unit-34', subject: 'Advanced Grammar',
        topic: 'Conditionals', difficulty: 'hard',
        question: '"If I were rich, I would build a school." This is a:',
        options: [
            { label: 'A', text: 'Zero conditional' }, { label: 'B', text: 'First conditional' },
            { label: 'C', text: 'Second conditional' }, { label: 'D', text: 'Third conditional' },
            { label: 'E', text: 'Imperative' }
        ],
        correctOption: 'C',
        explanation: 'Second conditional (If + past, would + verb) describes unreal/hypothetical situations.'
    },
    {
        id: 'el-q105', unit: 'el-unit-34', subject: 'Advanced Grammar',
        topic: 'Conditionals', difficulty: 'medium',
        question: 'Complete: "If it rains, I ______ an umbrella."',
        options: [
            { label: 'A', text: 'take' }, { label: 'B', text: 'took' },
            { label: 'C', text: 'will take' }, { label: 'D', text: 'had taken' },
            { label: 'E', text: 'taking' }
        ],
        correctOption: 'C',
        explanation: 'First conditional: If + present simple, will + verb. "If it rains, I will take an umbrella."'
    },

    // ===== EL Unit 35: Noun Clauses =====
    {
        id: 'el-q106', unit: 'el-unit-35', subject: 'Advanced Grammar',
        topic: 'Noun Clauses', difficulty: 'medium',
        question: 'A clause is a group of words that contains:',
        options: [
            { label: 'A', text: 'Only nouns' }, { label: 'B', text: 'A subject and a verb' },
            { label: 'C', text: 'Only adjectives' }, { label: 'D', text: 'Only prepositions' },
            { label: 'E', text: 'No verbs' }
        ],
        correctOption: 'B',
        explanation: 'A clause must have a subject and a verb. "The boy runs" is a clause.'
    },
    {
        id: 'el-q107', unit: 'el-unit-35', subject: 'Advanced Grammar',
        topic: 'Noun Clauses', difficulty: 'medium',
        question: '"I know that she is kind." The noun clause is:',
        options: [
            { label: 'A', text: 'I know' }, { label: 'B', text: 'that she is kind' },
            { label: 'C', text: 'she is' }, { label: 'D', text: 'is kind' },
            { label: 'E', text: 'I know that' }
        ],
        correctOption: 'B',
        explanation: '"That she is kind" acts as the object (a noun) of the verb "know" — it is the noun clause.'
    },
    {
        id: 'el-q108', unit: 'el-unit-35', subject: 'Advanced Grammar',
        topic: 'Noun Clauses', difficulty: 'hard',
        question: 'A noun clause can function as the ______ of a sentence.',
        options: [
            { label: 'A', text: 'Punctuation' }, { label: 'B', text: 'Conjunction only' },
            { label: 'C', text: 'Subject or object' }, { label: 'D', text: 'Adverb only' },
            { label: 'E', text: 'Preposition' }
        ],
        correctOption: 'C',
        explanation: 'Noun clauses act like nouns — as subjects ("What he said was true") or objects ("I know what you mean").'
    },
    {
        id: 'el-q109', unit: 'el-unit-35', subject: 'Advanced Grammar',
        topic: 'Noun Clauses', difficulty: 'hard',
        question: '"Where she lives is a secret." The noun clause is:',
        options: [
            { label: 'A', text: 'is a secret' }, { label: 'B', text: 'a secret' },
            { label: 'C', text: 'Where she lives' }, { label: 'D', text: 'she lives' },
            { label: 'E', text: 'Where she' }
        ],
        correctOption: 'C',
        explanation: '"Where she lives" is the subject of the sentence (a noun clause acting as the subject).'
    },
    {
        id: 'el-q110', unit: 'el-unit-35', subject: 'Advanced Grammar',
        topic: 'Noun Clauses', difficulty: 'medium',
        question: 'Noun clauses often begin with words like:',
        options: [
            { label: 'A', text: 'And, but, or' }, { label: 'B', text: 'In, on, at' },
            { label: 'C', text: 'That, what, where, how, whether' }, { label: 'D', text: 'Very, too, so' },
            { label: 'E', text: 'The, a, an' }
        ],
        correctOption: 'C',
        explanation: 'Noun clauses begin with that, what, where, who, how, whether, if, etc.'
    },

    // ================================================================
    //  OTHER PARTS OF SPEECH (20 Questions — 3 units)
    // ================================================================

    // ===== EL Unit 45: Prepositions =====
    {
        id: 'el-q111', unit: 'el-unit-45', subject: 'Other Parts of Speech',
        topic: 'Prepositions', difficulty: 'easy',
        question: 'A preposition shows the ______ between a noun/pronoun and other words.',
        options: [
            { label: 'A', text: 'Colour' }, { label: 'B', text: 'Sound' },
            { label: 'C', text: 'Relationship (position, time, direction)' }, { label: 'D', text: 'Spelling' },
            { label: 'E', text: 'Plural form' }
        ],
        correctOption: 'C',
        explanation: 'Prepositions show relationships of place (in, on), time (at, during), and direction (to, from).'
    },
    {
        id: 'el-q112', unit: 'el-unit-45', subject: 'Other Parts of Speech',
        topic: 'Prepositions', difficulty: 'easy',
        question: '"The book is ______ the table." Choose the correct preposition.',
        options: [
            { label: 'A', text: 'is' }, { label: 'B', text: 'and' },
            { label: 'C', text: 'on' }, { label: 'D', text: 'but' },
            { label: 'E', text: 'the' }
        ],
        correctOption: 'C',
        explanation: '"On" shows the position of the book — it is on top of the table.'
    },
    {
        id: 'el-q113', unit: 'el-unit-45', subject: 'Other Parts of Speech',
        topic: 'Prepositions', difficulty: 'medium',
        question: 'Which sentence uses a preposition of TIME?',
        options: [
            { label: 'A', text: 'The cat is under the chair.' }, { label: 'B', text: 'She arrived at 3 o\'clock.' },
            { label: 'C', text: 'He walked to school.' }, { label: 'D', text: 'The ball is in the box.' },
            { label: 'E', text: 'She sat beside me.' }
        ],
        correctOption: 'B',
        explanation: '"At 3 o\'clock" uses "at" as a preposition of time. The others show position or direction.'
    },
    {
        id: 'el-q114', unit: 'el-unit-45', subject: 'Other Parts of Speech',
        topic: 'Prepositions', difficulty: 'medium',
        question: '"We played ______ school and home." Choose the correct preposition.',
        options: [
            { label: 'A', text: 'among' }, { label: 'B', text: 'between' },
            { label: 'C', text: 'beside' }, { label: 'D', text: 'above' },
            { label: 'E', text: 'under' }
        ],
        correctOption: 'B',
        explanation: '"Between" is used for two items: "between school and home". "Among" is for three or more.'
    },
    {
        id: 'el-q115', unit: 'el-unit-45', subject: 'Other Parts of Speech',
        topic: 'Prepositions', difficulty: 'medium',
        question: 'In "She jumped into the pool", the preposition is:',
        options: [
            { label: 'A', text: 'She' }, { label: 'B', text: 'jumped' },
            { label: 'C', text: 'into' }, { label: 'D', text: 'the' },
            { label: 'E', text: 'pool' }
        ],
        correctOption: 'C',
        explanation: '"Into" is a preposition showing direction — she moved from outside into the pool.'
    },
    {
        id: 'el-q116', unit: 'el-unit-45', subject: 'Other Parts of Speech',
        topic: 'Prepositions', difficulty: 'hard',
        question: 'Which preposition is correct? "I have been waiting ______ Monday."',
        options: [
            { label: 'A', text: 'for' }, { label: 'B', text: 'since' },
            { label: 'C', text: 'from' }, { label: 'D', text: 'at' },
            { label: 'E', text: 'in' }
        ],
        correctOption: 'B',
        explanation: '"Since" is used with a point in time (Monday, 2020). "For" is used with a duration (three days).'
    },
    {
        id: 'el-q117', unit: 'el-unit-45', subject: 'Other Parts of Speech',
        topic: 'Prepositions', difficulty: 'easy',
        question: '"The bird flew ______ the tree." Choose the preposition showing position.',
        options: [
            { label: 'A', text: 'and' }, { label: 'B', text: 'but' },
            { label: 'C', text: 'over' }, { label: 'D', text: 'or' },
            { label: 'E', text: 'very' }
        ],
        correctOption: 'C',
        explanation: '"Over" shows the bird\'s position — it flew above the tree.'
    },

    // ===== EL Unit 46: Conjunctions =====
    {
        id: 'el-q118', unit: 'el-unit-46', subject: 'Other Parts of Speech',
        topic: 'Conjunctions', difficulty: 'easy',
        question: 'A conjunction joins:',
        options: [
            { label: 'A', text: 'Only nouns' }, { label: 'B', text: 'Words, phrases, or clauses' },
            { label: 'C', text: 'Only adjectives' }, { label: 'D', text: 'Only verbs' },
            { label: 'E', text: 'Only numbers' }
        ],
        correctOption: 'B',
        explanation: 'Conjunctions join words (red and blue), phrases, or clauses (I ran but she walked).'
    },
    {
        id: 'el-q119', unit: 'el-unit-46', subject: 'Other Parts of Speech',
        topic: 'Conjunctions', difficulty: 'easy',
        question: '"I like rice ______ beans." Which conjunction fits?',
        options: [
            { label: 'A', text: 'but' }, { label: 'B', text: 'or' },
            { label: 'C', text: 'so' }, { label: 'D', text: 'and' },
            { label: 'E', text: 'yet' }
        ],
        correctOption: 'D',
        explanation: '"And" adds things together: "I like rice and beans."'
    },
    {
        id: 'el-q120', unit: 'el-unit-46', subject: 'Other Parts of Speech',
        topic: 'Conjunctions', difficulty: 'medium',
        question: '"She was tired, ______ she kept working." Which conjunction shows contrast?',
        options: [
            { label: 'A', text: 'and' }, { label: 'B', text: 'so' },
            { label: 'C', text: 'but' }, { label: 'D', text: 'or' },
            { label: 'E', text: 'then' }
        ],
        correctOption: 'C',
        explanation: '"But" shows contrast — the two ideas are opposite: she was tired BUT she kept working.'
    },
    {
        id: 'el-q121', unit: 'el-unit-46', subject: 'Other Parts of Speech',
        topic: 'Conjunctions', difficulty: 'medium',
        question: '"I will study ______ I can pass the exam." Choose the correct conjunction.',
        options: [
            { label: 'A', text: 'but' }, { label: 'B', text: 'or' },
            { label: 'C', text: 'so that' }, { label: 'D', text: 'and' },
            { label: 'E', text: 'yet' }
        ],
        correctOption: 'C',
        explanation: '"So that" shows purpose: I study SO THAT I can pass.'
    },
    {
        id: 'el-q122', unit: 'el-unit-46', subject: 'Other Parts of Speech',
        topic: 'Conjunctions', difficulty: 'medium',
        question: '"Would you like tea ______ coffee?" The conjunction is:',
        options: [
            { label: 'A', text: 'and' }, { label: 'B', text: 'but' },
            { label: 'C', text: 'so' }, { label: 'D', text: 'or' },
            { label: 'E', text: 'yet' }
        ],
        correctOption: 'D',
        explanation: '"Or" gives a choice between two options: tea OR coffee.'
    },
    {
        id: 'el-q123', unit: 'el-unit-46', subject: 'Other Parts of Speech',
        topic: 'Conjunctions', difficulty: 'hard',
        question: '"Although it rained, we still played." The word "Although" is a ______ conjunction.',
        options: [
            { label: 'A', text: 'Coordinating' }, { label: 'B', text: 'Correlative' },
            { label: 'C', text: 'Subordinating' }, { label: 'D', text: 'Simple' },
            { label: 'E', text: 'Joining' }
        ],
        correctOption: 'C',
        explanation: 'Subordinating conjunctions (although, because, while, if, when) join a dependent clause to a main clause.'
    },
    {
        id: 'el-q124', unit: 'el-unit-46', subject: 'Other Parts of Speech',
        topic: 'Conjunctions', difficulty: 'easy',
        question: '"I went home ______ I was tired." Choose the conjunction showing reason.',
        options: [
            { label: 'A', text: 'but' }, { label: 'B', text: 'or' },
            { label: 'C', text: 'because' }, { label: 'D', text: 'and' },
            { label: 'E', text: 'so' }
        ],
        correctOption: 'C',
        explanation: '"Because" shows the reason: I went home BECAUSE I was tired.'
    },

    // ===== EL Unit 47: Articles =====
    {
        id: 'el-q125', unit: 'el-unit-47', subject: 'Other Parts of Speech',
        topic: 'Articles', difficulty: 'easy',
        question: 'The three articles in English are:',
        options: [
            { label: 'A', text: 'Is, am, are' }, { label: 'B', text: 'A, an, the' },
            { label: 'C', text: 'He, she, it' }, { label: 'D', text: 'In, on, at' },
            { label: 'E', text: 'And, but, or' }
        ],
        correctOption: 'B',
        explanation: '"A", "an", and "the" are the three English articles.'
    },
    {
        id: 'el-q126', unit: 'el-unit-47', subject: 'Other Parts of Speech',
        topic: 'Articles', difficulty: 'easy',
        question: 'We use "an" before a word that starts with a:',
        options: [
            { label: 'A', text: 'Consonant sound' }, { label: 'B', text: 'Vowel sound' },
            { label: 'C', text: 'Capital letter' }, { label: 'D', text: 'Number' },
            { label: 'E', text: 'Pronoun' }
        ],
        correctOption: 'B',
        explanation: '"An" goes before vowel sounds: an apple, an egg, an hour (silent h). "A" goes before consonant sounds.'
    },
    {
        id: 'el-q127', unit: 'el-unit-47', subject: 'Other Parts of Speech',
        topic: 'Articles', difficulty: 'medium',
        question: 'Which is correct?',
        options: [
            { label: 'A', text: 'A umbrella' }, { label: 'B', text: 'An umbrella' },
            { label: 'C', text: 'The a umbrella' }, { label: 'D', text: 'A an umbrella' },
            { label: 'E', text: 'An a umbrella' }
        ],
        correctOption: 'B',
        explanation: '"Umbrella" starts with a vowel sound (uh-), so we use "an": an umbrella.'
    },
    {
        id: 'el-q128', unit: 'el-unit-47', subject: 'Other Parts of Speech',
        topic: 'Articles', difficulty: 'medium',
        question: '"The" is called the ______ article because it refers to a specific thing.',
        options: [
            { label: 'A', text: 'Indefinite' }, { label: 'B', text: 'Unknown' },
            { label: 'C', text: 'Definite' }, { label: 'D', text: 'General' },
            { label: 'E', text: 'Abstract' }
        ],
        correctOption: 'C',
        explanation: '"The" is the definite article — it points to a specific person or thing: "the book on the table".'
    },
    {
        id: 'el-q129', unit: 'el-unit-47', subject: 'Other Parts of Speech',
        topic: 'Articles', difficulty: 'hard',
        question: 'Which sentence uses articles correctly?',
        options: [
            { label: 'A', text: 'She is a honest girl.' }, { label: 'B', text: 'She is an honest girl.' },
            { label: 'C', text: 'She is the a honest girl.' }, { label: 'D', text: 'She is honest an girl.' },
            { label: 'E', text: 'She is a an honest girl.' }
        ],
        correctOption: 'B',
        explanation: '"Honest" starts with a vowel sound (the "h" is silent), so we use "an": an honest girl.'
    },
    {
        id: 'el-q130', unit: 'el-unit-47', subject: 'Other Parts of Speech',
        topic: 'Articles', difficulty: 'medium',
        question: '"A" and "an" are called ______ articles.',
        options: [
            { label: 'A', text: 'Definite' }, { label: 'B', text: 'Specific' },
            { label: 'C', text: 'Indefinite' }, { label: 'D', text: 'Proper' },
            { label: 'E', text: 'Abstract' }
        ],
        correctOption: 'C',
        explanation: '"A" and "an" are indefinite articles — they refer to any (non-specific) thing: "a cat" = any cat.'
    },

    // ================================================================
    //  PUNCTUATION & SPELLING (20 Questions — 5 units × 4 each)
    // ================================================================

    // ===== EL Unit 26: Punctuation Marks =====
    {
        id: 'el-q131', unit: 'el-unit-26', subject: 'Punctuation & Spelling',
        topic: 'Punctuation Marks', difficulty: 'easy',
        question: 'A sentence that makes a statement ends with a:',
        options: [
            { label: 'A', text: 'Question mark (?)' }, { label: 'B', text: 'Exclamation mark (!)' },
            { label: 'C', text: 'Full stop (.)' }, { label: 'D', text: 'Comma (,)' },
            { label: 'E', text: 'Colon (:)' }
        ],
        correctOption: 'C',
        explanation: 'Declarative sentences (statements) always end with a full stop (period).'
    },
    {
        id: 'el-q132', unit: 'el-unit-26', subject: 'Punctuation & Spelling',
        topic: 'Punctuation Marks', difficulty: 'easy',
        question: 'A question always ends with a:',
        options: [
            { label: 'A', text: 'Full stop (.)' }, { label: 'B', text: 'Question mark (?)' },
            { label: 'C', text: 'Comma (,)' }, { label: 'D', text: 'Semicolon (;)' },
            { label: 'E', text: 'Dash (—)' }
        ],
        correctOption: 'B',
        explanation: 'Questions always end with a question mark: "Where are you going?"'
    },
    {
        id: 'el-q133', unit: 'el-unit-26', subject: 'Punctuation & Spelling',
        topic: 'Punctuation Marks', difficulty: 'medium',
        question: 'Which sentence is punctuated correctly?',
        options: [
            { label: 'A', text: 'where are you going' }, { label: 'B', text: 'Where are you going.' },
            { label: 'C', text: 'Where are you going?' }, { label: 'D', text: 'where are you going!' },
            { label: 'E', text: 'Where are. You going?' }
        ],
        correctOption: 'C',
        explanation: 'Questions need a capital letter at the start and a question mark at the end.'
    },
    {
        id: 'el-q134', unit: 'el-unit-26', subject: 'Punctuation & Spelling',
        topic: 'Punctuation Marks', difficulty: 'medium',
        question: 'Quotation marks are used to show:',
        options: [
            { label: 'A', text: 'The end of a sentence' }, { label: 'B', text: 'A pause' },
            { label: 'C', text: 'Someone\'s exact words' }, { label: 'D', text: 'A question' },
            { label: 'E', text: 'A list' }
        ],
        correctOption: 'C',
        explanation: 'Quotation marks enclose direct speech: He said, "I am happy."'
    },

    // ===== EL Unit 27: Comma Usage =====
    {
        id: 'el-q135', unit: 'el-unit-27', subject: 'Punctuation & Spelling',
        topic: 'Comma Usage', difficulty: 'easy',
        question: 'A comma is used to:',
        options: [
            { label: 'A', text: 'End a sentence' }, { label: 'B', text: 'Ask a question' },
            { label: 'C', text: 'Separate items in a list' }, { label: 'D', text: 'Show ownership' },
            { label: 'E', text: 'Shout' }
        ],
        correctOption: 'C',
        explanation: 'Commas separate items in a list: "I bought rice, beans, fish, and oil."'
    },
    {
        id: 'el-q136', unit: 'el-unit-27', subject: 'Punctuation & Spelling',
        topic: 'Comma Usage', difficulty: 'medium',
        question: 'Which sentence uses commas correctly?',
        options: [
            { label: 'A', text: 'I ate rice beans and fish.' }, { label: 'B', text: 'I ate rice, beans, and fish.' },
            { label: 'C', text: 'I, ate rice beans and fish.' }, { label: 'D', text: 'I ate, rice beans and, fish.' },
            { label: 'E', text: ',I ate rice beans and fish.' }
        ],
        correctOption: 'B',
        explanation: 'Commas separate each item in a list: "I ate rice, beans, and fish."'
    },
    {
        id: 'el-q137', unit: 'el-unit-27', subject: 'Punctuation & Spelling',
        topic: 'Comma Usage', difficulty: 'medium',
        question: '"Yes, I am coming." The comma is used after:',
        options: [
            { label: 'A', text: 'A verb' }, { label: 'B', text: 'An introductory word' },
            { label: 'C', text: 'A noun' }, { label: 'D', text: 'An adjective' },
            { label: 'E', text: 'A full stop' }
        ],
        correctOption: 'B',
        explanation: 'A comma follows introductory words like Yes, No, Well, However at the start of a sentence.'
    },
    {
        id: 'el-q138', unit: 'el-unit-27', subject: 'Punctuation & Spelling',
        topic: 'Comma Usage', difficulty: 'hard',
        question: '"After eating, she washed her hands." The comma comes after:',
        options: [
            { label: 'A', text: 'The subject' }, { label: 'B', text: 'An introductory phrase' },
            { label: 'C', text: 'The object' }, { label: 'D', text: 'A conjunction' },
            { label: 'E', text: 'The last word' }
        ],
        correctOption: 'B',
        explanation: 'A comma follows an introductory phrase that starts a sentence: "After eating, she..."'
    },

    // ===== EL Unit 28: Apostrophe =====
    {
        id: 'el-q139', unit: 'el-unit-28', subject: 'Punctuation & Spelling',
        topic: 'Apostrophe', difficulty: 'easy',
        question: 'An apostrophe (\'s) is used to show:',
        options: [
            { label: 'A', text: 'A question' }, { label: 'B', text: 'Ownership (possession)' },
            { label: 'C', text: 'A command' }, { label: 'D', text: 'A colour' },
            { label: 'E', text: 'A number' }
        ],
        correctOption: 'B',
        explanation: 'Apostrophe shows possession: John\'s book = the book belonging to John.'
    },
    {
        id: 'el-q140', unit: 'el-unit-28', subject: 'Punctuation & Spelling',
        topic: 'Apostrophe', difficulty: 'easy',
        question: '"The girl\'s bag" means:',
        options: [
            { label: 'A', text: 'The bag is a girl' }, { label: 'B', text: 'The bag belonging to the girl' },
            { label: 'C', text: 'The girls are in the bag' }, { label: 'D', text: 'There are many girls' },
            { label: 'E', text: 'The bag is pretty' }
        ],
        correctOption: 'B',
        explanation: '"Girl\'s bag" = the bag that belongs to the girl. The apostrophe shows ownership.'
    },
    {
        id: 'el-q141', unit: 'el-unit-28', subject: 'Punctuation & Spelling',
        topic: 'Apostrophe', difficulty: 'medium',
        question: '"Don\'t" is a contraction of:',
        options: [
            { label: 'A', text: 'Does not' }, { label: 'B', text: 'Do not' },
            { label: 'C', text: 'Did not' }, { label: 'D', text: 'Done not' },
            { label: 'E', text: 'Doing not' }
        ],
        correctOption: 'B',
        explanation: 'Don\'t = do + not. The apostrophe replaces the missing "o" in "not".'
    },
    {
        id: 'el-q142', unit: 'el-unit-28', subject: 'Punctuation & Spelling',
        topic: 'Apostrophe', difficulty: 'hard',
        question: '"It\'s" means "it is", but "its" (no apostrophe) means:',
        options: [
            { label: 'A', text: 'It is' }, { label: 'B', text: 'It was' },
            { label: 'C', text: 'Belonging to it' }, { label: 'D', text: 'It has' },
            { label: 'E', text: 'A mistake' }
        ],
        correctOption: 'C',
        explanation: '"It\'s" = it is/it has. "Its" (no apostrophe) = belonging to it: "The dog wagged its tail."'
    },

    // ===== EL Unit 29: Capitalisation =====
    {
        id: 'el-q143', unit: 'el-unit-29', subject: 'Punctuation & Spelling',
        topic: 'Capitalisation', difficulty: 'easy',
        question: 'The first word of every sentence must begin with a:',
        options: [
            { label: 'A', text: 'Small letter' }, { label: 'B', text: 'Number' },
            { label: 'C', text: 'Capital letter' }, { label: 'D', text: 'Comma' },
            { label: 'E', text: 'Full stop' }
        ],
        correctOption: 'C',
        explanation: 'Every sentence must begin with a capital (uppercase) letter.'
    },
    {
        id: 'el-q144', unit: 'el-unit-29', subject: 'Punctuation & Spelling',
        topic: 'Capitalisation', difficulty: 'easy',
        question: 'Which word should ALWAYS be capitalised?',
        options: [
            { label: 'A', text: 'table' }, { label: 'B', text: 'she' },
            { label: 'C', text: 'run' }, { label: 'D', text: 'I' },
            { label: 'E', text: 'happy' }
        ],
        correctOption: 'D',
        explanation: 'The pronoun "I" is always written as a capital letter, no matter where it appears.'
    },
    {
        id: 'el-q145', unit: 'el-unit-29', subject: 'Punctuation & Spelling',
        topic: 'Capitalisation', difficulty: 'medium',
        question: 'Which sentence uses capitalisation correctly?',
        options: [
            { label: 'A', text: 'i went to freetown on monday.' }, { label: 'B', text: 'I Went To Freetown On monday.' },
            { label: 'C', text: 'I went to Freetown on Monday.' }, { label: 'D', text: 'i Went to freetown on Monday.' },
            { label: 'E', text: 'i went to Freetown on Monday.' }
        ],
        correctOption: 'C',
        explanation: 'Capitalise: first word (I), proper nouns (Freetown), days (Monday), and the pronoun "I".'
    },
    {
        id: 'el-q146', unit: 'el-unit-29', subject: 'Punctuation & Spelling',
        topic: 'Capitalisation', difficulty: 'medium',
        question: 'Which of these needs a capital letter?',
        options: [
            { label: 'A', text: 'A tall boy' }, { label: 'B', text: 'Very fast' },
            { label: 'C', text: 'january' }, { label: 'D', text: 'Small dog' },
            { label: 'E', text: 'Red car' }
        ],
        correctOption: 'C',
        explanation: 'Months of the year are proper nouns and must be capitalised: January, not january.'
    },

    // ===== EL Unit 30: Spelling and Vocabulary =====
    {
        id: 'el-q147', unit: 'el-unit-30', subject: 'Punctuation & Spelling',
        topic: 'Spelling and Vocabulary', difficulty: 'easy',
        question: 'Which word is spelled correctly?',
        options: [
            { label: 'A', text: 'Becuase' }, { label: 'B', text: 'Becaus' },
            { label: 'C', text: 'Because' }, { label: 'D', text: 'Becose' },
            { label: 'E', text: 'Becuze' }
        ],
        correctOption: 'C',
        explanation: 'The correct spelling is B-E-C-A-U-S-E.'
    },
    {
        id: 'el-q148', unit: 'el-unit-30', subject: 'Punctuation & Spelling',
        topic: 'Spelling and Vocabulary', difficulty: 'medium',
        question: 'Which word is spelled correctly?',
        options: [
            { label: 'A', text: 'Recieve' }, { label: 'B', text: 'Receeve' },
            { label: 'C', text: 'Receive' }, { label: 'D', text: 'Receve' },
            { label: 'E', text: 'Resieve' }
        ],
        correctOption: 'C',
        explanation: 'Remember the rule: "i before e, except after c" — so it\'s R-E-C-E-I-V-E.'
    },
    {
        id: 'el-q149', unit: 'el-unit-30', subject: 'Punctuation & Spelling',
        topic: 'Spelling and Vocabulary', difficulty: 'medium',
        question: 'When adding -ing to "write", you:',
        options: [
            { label: 'A', text: 'Write + ing = writeing' }, { label: 'B', text: 'Drop the "e" and add -ing = writing' },
            { label: 'C', text: 'Double the "t" = writting' }, { label: 'D', text: 'Add -eing = writeeing' },
            { label: 'E', text: 'No change = write' }
        ],
        correctOption: 'B',
        explanation: 'When a word ends in silent "e", drop the "e" before adding -ing: write → writing.'
    },
    {
        id: 'el-q150', unit: 'el-unit-30', subject: 'Punctuation & Spelling',
        topic: 'Spelling and Vocabulary', difficulty: 'hard',
        question: 'Which word is spelled correctly?',
        options: [
            { label: 'A', text: 'Neccessary' }, { label: 'B', text: 'Necesary' },
            { label: 'C', text: 'Necessary' }, { label: 'D', text: 'Neccesary' },
            { label: 'E', text: 'Necessery' }
        ],
        correctOption: 'C',
        explanation: 'N-E-C-E-S-S-A-R-Y — one "c", two "s"s. A tricky but important word to spell correctly!'
    },
];

export default englishLanguageQuizQuestions;
