// Detailed Notes Content for English Language Units

export const englishNotesContent = {
    // ==================== GRAMMAR BASICS ====================
    'el-unit-1': {
        title: 'Introducing Parts of Speech',
        subject: 'Grammar Basics',
        sections: [
            {
                heading: 'What is Grammar?',
                type: 'definition',
                definitions: [
                    { term: 'Grammar', definition: 'The art of putting the right words in their right places in a sentence, to make it intelligible.' }
                ]
            },
            {
                heading: 'The Eight Parts of Speech',
                type: 'cards',
                items: [
                    { title: '1. Nouns', icon: '📦', examples: 'Names of persons, animals, places, things', color: '#6366f1' },
                    { title: '2. Pronouns', icon: '👤', examples: 'Words that replace nouns (he, she, it)', color: '#8b5cf6' },
                    { title: '3. Verbs', icon: '🏃', examples: 'Action words (run, eat, sleep)', color: '#ec4899' },
                    { title: '4. Adverbs', icon: '⚡', examples: 'Modify verbs (quickly, slowly)', color: '#f97316' },
                    { title: '5. Adjectives', icon: '🎨', examples: 'Describe nouns (big, small, red)', color: '#10b981' },
                    { title: '6. Prepositions', icon: '📍', examples: 'Show position (on, in, under)', color: '#0ea5e9' },
                    { title: '7. Conjunctions', icon: '🔗', examples: 'Join words (and, but, or)', color: '#eab308' },
                    { title: '8. Interjections', icon: '❗', examples: 'Express emotion (Wow! Ouch!)', color: '#ef4444' }
                ]
            },
            {
                heading: 'Why Learn Parts of Speech?',
                type: 'text',
                content: 'For one to speak and write correct English, it is good that one understands the eight parts of speech. They help you construct proper sentences and communicate clearly.'
            }
        ],
        keyPoints: ['Grammar helps us communicate clearly', 'There are 8 parts of speech', 'Each part has a specific function']
    },

    'el-unit-2': {
        title: 'Nouns',
        subject: 'Grammar Basics',
        sections: [
            {
                heading: 'What are Nouns?',
                type: 'definition',
                definitions: [
                    { term: 'Nouns', definition: 'Names of persons, animals, places, things and ideas.' }
                ]
            },
            {
                heading: 'Categories of Nouns',
                type: 'cards',
                items: [
                    { title: 'Persons', icon: '👨‍👩‍👧', examples: 'Abu, Mariama, Emmanuel', color: '#6366f1' },
                    { title: 'Animals', icon: '🐕', examples: 'cow, goat, cat, dog', color: '#10b981' },
                    { title: 'Places', icon: '🏙️', examples: 'Kenema, Rotifunk, Makeni', color: '#0ea5e9' },
                    { title: 'Things', icon: '📚', examples: 'pen, book, bus', color: '#f97316' },
                    { title: 'Ideas', icon: '💡', examples: 'justice, democracy, patience', color: '#8b5cf6' }
                ]
            },
            {
                heading: 'Proper Nouns',
                type: 'definition',
                definitions: [
                    { term: 'Proper Nouns', definition: 'Names of particular persons, places or things. All proper nouns begin with capital letters.' }
                ]
            },
            {
                heading: 'Examples of Proper Nouns',
                type: 'grid',
                items: ['John', 'Brima', 'Mary', 'January', 'Tuesday', 'Freetown', 'Sierra Leone', 'Allen Town']
            },
            {
                heading: 'Common Nouns',
                type: 'definition',
                definitions: [
                    { term: 'Common Nouns', definition: 'Names given to all people, places, things and ideas of the same class or kind. Common nouns don\'t start with capital letters unless they begin a sentence.' }
                ]
            },
            {
                heading: 'Examples of Common Nouns',
                type: 'grid',
                items: ['man', 'boy', 'teacher', 'doctor', 'pastor', 'driver', 'country', 'town', 'village', 'month']
            }
        ],
        keyPoints: ['Nouns name persons, animals, places, things and ideas', 'Proper nouns start with capital letters', 'Common nouns are general names']
    },

    'el-unit-3': {
        title: 'Types of Nouns',
        subject: 'Grammar Basics',
        sections: [
            {
                heading: 'Countable Nouns',
                type: 'definition',
                definitions: [
                    { term: 'Countable Nouns', definition: 'Nouns that can be counted in units.' }
                ]
            },
            {
                heading: 'Examples of Countable Nouns',
                type: 'grid',
                items: ['Stones', 'Books', 'Tables', 'Animals', 'Pens', 'People', 'Houses', 'Cars']
            },
            {
                heading: 'Uncountable Nouns',
                type: 'definition',
                definitions: [
                    { term: 'Uncountable Nouns', definition: 'Nouns that cannot be counted in units but can be counted in bulk.' }
                ]
            },
            {
                heading: 'Examples of Uncountable Nouns',
                type: 'grid',
                items: ['Oil', 'Water', 'Salt', 'Sand', 'Soil', 'Air', 'Paint', 'Milk', 'Honey']
            },
            {
                heading: 'Important Note',
                type: 'text',
                content: '"Grains of Sugar" for instance cannot be counted in unit form. Example: "give me some sugar to prepare tea" (here sugar grains cannot be counted) but if you say "give me a cup of sugar", then sugar can be counted in a bulk form.'
            },
            {
                heading: 'Collective Nouns',
                type: 'definition',
                definitions: [
                    { term: 'Collective Nouns', definition: 'Nouns that are singular in form but name a group.' }
                ]
            },
            {
                heading: 'Examples of Collective Nouns',
                type: 'grid',
                items: ['Family', 'Class', 'Crew', 'Band', 'Committee', 'Troop', 'Jury', 'Flock', 'Swarm', 'Audience']
            }
        ],
        keyPoints: ['Countable nouns can be counted', 'Uncountable nouns are measured in bulk', 'Collective nouns name groups']
    },

    'el-unit-4': {
        title: 'Nouns - Numbers',
        subject: 'Grammar Basics',
        sections: [
            {
                heading: 'Singular and Plural',
                type: 'comparison',
                items: [
                    { title: 'Singular Nouns', description: 'Mean only ONE thing', examples: ['boy', 'chair', 'book'] },
                    { title: 'Plural Nouns', description: 'Mean MORE THAN ONE thing', examples: ['boys', 'chairs', 'books'] }
                ]
            },
            {
                heading: 'Rule 1: Adding -s',
                type: 'table',
                headers: ['Singular', 'Plural'],
                rows: [
                    ['Boy', 'Boys'],
                    ['Chair', 'Chairs'],
                    ['Book', 'Books']
                ]
            },
            {
                heading: 'Rule 2: Words ending in s, x, z, ch, sh → add -es',
                type: 'table',
                headers: ['Singular', 'Plural'],
                rows: [
                    ['Box', 'Boxes'],
                    ['Match', 'Matches'],
                    ['Brush', 'Brushes']
                ]
            },
            {
                heading: 'Rule 3: Consonant + y → drop y, add -ies',
                type: 'table',
                headers: ['Singular', 'Plural'],
                rows: [
                    ['City', 'Cities'],
                    ['Country', 'Countries'],
                    ['Lady', 'Ladies']
                ]
            },
            {
                heading: 'Rule 4: Words ending in f/fe → drop f/fe, add -ves',
                type: 'table',
                headers: ['Singular', 'Plural'],
                rows: [
                    ['Thief', 'Thieves'],
                    ['Knife', 'Knives'],
                    ['Wife', 'Wives']
                ]
            },
            {
                heading: 'Rule 5: Irregular Plurals',
                type: 'table',
                headers: ['Singular', 'Plural'],
                rows: [
                    ['Man', 'Men'],
                    ['Foot', 'Feet'],
                    ['Person', 'People'],
                    ['Tooth', 'Teeth'],
                    ['Child', 'Children']
                ]
            },
            {
                heading: 'Rule 6: Same Singular and Plural',
                type: 'table',
                headers: ['Singular', 'Plural'],
                rows: [
                    ['Sheep', 'Sheep'],
                    ['Fish', 'Fish'],
                    ['Deer', 'Deer']
                ]
            }
        ],
        keyPoints: ['Most nouns add -s for plural', 'Some nouns have special rules', 'Some nouns stay the same']
    },

    'el-unit-5': {
        title: 'Pronouns',
        subject: 'Grammar Basics',
        sections: [
            {
                heading: 'What are Pronouns?',
                type: 'definition',
                definitions: [
                    { term: 'Pronouns', definition: 'Words used to replace nouns to avoid repetition.' }
                ]
            },
            {
                heading: 'Example of Pronoun Use',
                type: 'text',
                content: 'When Moses gave me the money, HE told me to go and see a medical doctor. (The pronoun "he" takes the place of the noun Moses).'
            },
            {
                heading: 'Personal Pronouns',
                type: 'definition',
                definitions: [
                    { term: 'Personal Pronouns', definition: 'Refer to specific persons, places, things or ideas.' }
                ]
            },
            {
                heading: 'Personal Pronoun Types',
                type: 'comparison',
                items: [
                    { title: 'First Person', description: 'The person speaking', examples: ['I', 'me', 'we', 'us'] },
                    { title: 'Second Person', description: 'The person being spoken to', examples: ['you'] },
                    { title: 'Third Person', description: 'Person/thing being talked about', examples: ['he', 'she', 'it', 'they'] }
                ]
            },
            {
                heading: 'Possessive Pronouns',
                type: 'definition',
                definitions: [
                    { term: 'Possessive Pronouns', definition: 'Take the place of possessive forms of nouns.' }
                ]
            },
            {
                heading: 'Examples of Possessive Pronouns',
                type: 'grid',
                items: ['my', 'mine', 'our', 'ours', 'your', 'yours', 'his', 'her', 'hers', 'their', 'theirs', 'its']
            },
            {
                heading: 'Demonstrative Pronouns',
                type: 'definition',
                definitions: [
                    { term: 'Demonstrative Pronouns', definition: 'Point out specific persons, places, things or ideas.' }
                ]
            },
            {
                heading: 'Examples of Demonstrative Pronouns',
                type: 'grid',
                items: ['this', 'that', 'these', 'those']
            }
        ],
        keyPoints: ['Pronouns replace nouns', 'Personal pronouns show person', 'Possessive pronouns show ownership']
    },

    'el-unit-6': {
        title: 'Functions of Pronouns',
        subject: 'Grammar Basics',
        sections: [
            {
                heading: 'Interrogative Pronouns',
                type: 'definition',
                definitions: [
                    { term: 'Interrogative Pronouns', definition: 'Used to ask questions.' }
                ]
            },
            {
                heading: 'Examples of Interrogative Pronouns',
                type: 'list',
                items: [
                    { title: 'Who', description: 'Who took the book?' },
                    { title: 'Whom', description: 'Whom did you give the pen?' },
                    { title: 'What', description: 'What is your name?' },
                    { title: 'Where', description: 'Where are you going?' }
                ]
            },
            {
                heading: 'Relative Pronouns',
                type: 'definition',
                definitions: [
                    { term: 'Relative Pronouns', definition: 'Used to begin a subordinate clause.' }
                ]
            },
            {
                heading: 'Examples of Relative Pronouns',
                type: 'grid',
                items: ['who', 'whom', 'whoever', 'whomever', 'whichever', 'which', 'whose', 'whatever', 'that', 'what']
            },
            {
                heading: 'Indefinite Pronouns',
                type: 'definition',
                definitions: [
                    { term: 'Indefinite Pronouns', definition: 'Refer to a person, place, thing, or idea in a general way.' }
                ]
            },
            {
                heading: 'Examples of Indefinite Pronouns',
                type: 'grid',
                items: ['all', 'another', 'any', 'anybody', 'anyone', 'anything', 'both', 'each', 'either', 'enough', 'everybody', 'everyone', 'few', 'many', 'most', 'much', 'neither', 'nobody', 'none', 'no one', 'nothing', 'one', 'other', 'several', 'some', 'something']
            }
        ],
        keyPoints: ['Interrogative pronouns ask questions', 'Relative pronouns connect clauses', 'Indefinite pronouns are general']
    },

    // ==================== VERBS & TENSES ====================
    'el-unit-7': {
        title: 'Verbs',
        subject: 'Verbs & Tenses',
        sections: [
            {
                heading: 'What are Verbs?',
                type: 'definition',
                definitions: [
                    { term: 'Verb', definition: 'A word or group of words that denotes an action or a state of being (experience).' }
                ]
            },
            {
                heading: 'Examples',
                type: 'list',
                items: [
                    { title: 'Mary is reading her book', description: '"Reading" is the main verb (action)' },
                    { title: 'Abdulai was late for school', description: '"Was" is the verb (state of being)' }
                ]
            },
            {
                heading: 'Regular Verbs',
                type: 'definition',
                definitions: [
                    { term: 'Regular Verbs', definition: 'Verbs whose past and past participle are formed by adding d or ed to the base word.' }
                ]
            },
            {
                heading: 'Examples of Regular Verbs',
                type: 'table',
                headers: ['Base Form', 'Past Tense'],
                rows: [
                    ['dance', 'danced'],
                    ['play', 'played'],
                    ['carry', 'carried'],
                    ['mix', 'mixed'],
                    ['kill', 'killed'],
                    ['arrive', 'arrived']
                ]
            },
            {
                heading: 'Irregular Verbs',
                type: 'definition',
                definitions: [
                    { term: 'Irregular Verbs', definition: 'Verbs whose past and past participle are formed differently (not by adding -ed).' }
                ]
            },
            {
                heading: 'Examples of Irregular Verbs',
                type: 'table',
                headers: ['Base Form', 'Past', 'Past Participle'],
                rows: [
                    ['Begin', 'began', 'begun'],
                    ['Eat', 'ate', 'eaten'],
                    ['Go', 'went', 'gone'],
                    ['Blow', 'blew', 'blown'],
                    ['Choose', 'chose', 'chosen'],
                    ['Fly', 'flew', 'flown']
                ]
            }
        ],
        keyPoints: ['Verbs show action or state of being', 'Regular verbs add -d or -ed', 'Irregular verbs have special forms']
    },

    'el-unit-8': {
        title: 'Subject-Verb Agreement',
        subject: 'Verbs & Tenses',
        sections: [
            {
                heading: 'What is Subject-Verb Agreement?',
                type: 'definition',
                definitions: [
                    { term: 'Subject-Verb Agreement', definition: 'The subject in a sentence must agree with the verb to make a complete thought.' }
                ]
            },
            {
                heading: 'The Rule',
                type: 'comparison',
                items: [
                    { title: 'Singular Subject', description: 'Must have a singular verb', examples: ['Mary plays volleyball'] },
                    { title: 'Plural Subject', description: 'Must have a plural verb', examples: ['John and Mary are in school'] }
                ]
            },
            {
                heading: 'Examples',
                type: 'table',
                headers: ['Sentence', 'Subject', 'Verb'],
                rows: [
                    ['Mary plays volleyball', 'Mary (singular)', 'plays (singular)'],
                    ['The boys play football', 'boys (plural)', 'play (plural)'],
                    ['He walks to school', 'He (singular)', 'walks (singular)'],
                    ['They walk to school', 'They (plural)', 'walk (plural)']
                ]
            }
        ],
        keyPoints: ['Singular subjects need singular verbs', 'Plural subjects need plural verbs', 'Subject and verb must match']
    },

    'el-unit-9': {
        title: 'Present Tense',
        subject: 'Verbs & Tenses',
        sections: [
            {
                heading: 'Simple Present Tense',
                type: 'definition',
                definitions: [
                    { term: 'Simple Present', definition: 'Used to talk about general facts, repeated actions, wishes and emotions.' }
                ]
            },
            {
                heading: 'Simple Present Examples',
                type: 'list',
                items: [
                    { title: 'I live at Wellington', description: 'General fact' },
                    { title: 'Kadiatu plays volleyball', description: '3rd person singular takes -s' },
                    { title: 'Mosquitoes suck blood', description: '3rd person plural - no -s' },
                    { title: 'The sun shines from the East', description: 'General fact' }
                ]
            },
            {
                heading: 'Present Continuous Tense',
                type: 'definition',
                definitions: [
                    { term: 'Present Continuous', definition: 'Talks about action happening right now. Form: am/is/are + verb + ing' }
                ]
            },
            {
                heading: 'Present Continuous Examples',
                type: 'grid',
                items: ['I am reading my notes', 'He is sleeping now', 'We are leaving the town']
            },
            {
                heading: 'Present Perfect Tense',
                type: 'definition',
                definitions: [
                    { term: 'Present Perfect', definition: 'Used to talk about past action when time is not specific. Form: has/have + past participle' }
                ]
            },
            {
                heading: 'Present Perfect Examples',
                type: 'grid',
                items: ['I have worn my suit three times', 'They have seen him', 'She has written a letter']
            },
            {
                heading: 'Present Perfect Continuous Tense',
                type: 'definition',
                definitions: [
                    { term: 'Present Perfect Continuous', definition: 'Shows action that began in the past but is still ongoing. Form: have/has + been + verb + ing' }
                ]
            },
            {
                heading: 'Present Perfect Continuous Examples',
                type: 'grid',
                items: ['He has been talking for an hour', 'We have been playing football', 'She has been eating since morning']
            }
        ],
        keyPoints: ['Simple Present for facts and habits', 'Present Continuous for current actions', 'Present Perfect for completed actions']
    },

    'el-unit-10': {
        title: 'Past Tense',
        subject: 'Verbs & Tenses',
        sections: [
            {
                heading: 'Simple Past Tense',
                type: 'definition',
                definitions: [
                    { term: 'Simple Past', definition: 'Talks about an action that was completed in the past. Regular verbs add -ed or -d.' }
                ]
            },
            {
                heading: 'Simple Past Examples',
                type: 'table',
                headers: ['Regular Verbs', 'Irregular Verbs'],
                rows: [
                    ['climb → climbed', 'drink → drank'],
                    ['play → played', 'take → took'],
                    ['dance → danced', 'eat → ate']
                ]
            },
            {
                heading: 'Past Continuous Tense',
                type: 'definition',
                definitions: [
                    { term: 'Past Continuous', definition: 'Indicates action during a certain time or interrupted action. Form: was/were + verb + ing' }
                ]
            },
            {
                heading: 'Past Continuous Examples',
                type: 'grid',
                items: ['I was watching the show when it began to rain', 'We were eating when the news came', 'I was sleeping when the snake entered']
            },
            {
                heading: 'Past Perfect Tense',
                type: 'definition',
                definitions: [
                    { term: 'Past Perfect', definition: 'Talks about something completed before another past action. Form: had + past participle' }
                ]
            },
            {
                heading: 'Past Perfect Examples',
                type: 'grid',
                items: ['I had written to the newspaper, but did not receive a reply', 'The school had sent me the money before the term ended']
            },
            {
                heading: 'Past Perfect Continuous Tense',
                type: 'definition',
                definitions: [
                    { term: 'Past Perfect Continuous', definition: 'Action that began in the past and continued until another point in the past. Form: had been + verb + ing' }
                ]
            },
            {
                heading: 'Past Perfect Continuous Examples',
                type: 'grid',
                items: ['They had been living in Sierra Leone for four years', 'I had been struggling to keep up, so the manager took me out']
            }
        ],
        keyPoints: ['Simple Past for completed actions', 'Past Continuous for ongoing past actions', 'Past Perfect for actions before other past actions']
    },

    'el-unit-11': {
        title: 'Future Tense',
        subject: 'Verbs & Tenses',
        sections: [
            {
                heading: 'Simple Future Tense',
                type: 'definition',
                definitions: [
                    { term: 'Simple Future', definition: 'Talks about something that will happen. Form: will/shall + verb OR is/am/are going to + verb' }
                ]
            },
            {
                heading: 'Simple Future Examples',
                type: 'comparison',
                items: [
                    { title: 'Using will/shall', examples: ['We will complain', 'I shall complain', 'They will come'] },
                    { title: 'Using going to', examples: ['The house is going to collapse', 'We are going to eat our food'] }
                ]
            },
            {
                heading: 'Future Continuous Tense',
                type: 'definition',
                definitions: [
                    { term: 'Future Continuous', definition: 'Something happening at a specific time in the future. Form: will/shall be + verb + ing' }
                ]
            },
            {
                heading: 'Future Continuous Examples',
                type: 'grid',
                items: ['I will be driving when the match starts', 'We shall be travelling by bus', 'We will be walking when it starts to rain']
            },
            {
                heading: 'Future Perfect Tense',
                type: 'definition',
                definitions: [
                    { term: 'Future Perfect', definition: 'Action that will happen before another future action. Form: will have + past participle' }
                ]
            },
            {
                heading: 'Future Perfect Examples',
                type: 'grid',
                items: ['By the time you get here, I will have watched every show', 'By the time you sit in the car, they will have eaten']
            },
            {
                heading: 'Future Perfect Continuous Tense',
                type: 'definition',
                definitions: [
                    { term: 'Future Perfect Continuous', definition: 'Action beginning in future and continuing to another future point. Form: will/shall have been + verb + ing' }
                ]
            },
            {
                heading: 'Future Perfect Continuous Examples',
                type: 'grid',
                items: ['They will have been drinking water for 30 days', 'I will have been playing football for one month by then']
            }
        ],
        keyPoints: ['Simple Future uses will/shall or going to', 'Future Continuous for specific future times', 'Future Perfect for actions before future events']
    },

    // ==================== OTHER PARTS OF SPEECH ====================
    'el-unit-12': {
        title: 'Adverbs and Adjectives',
        subject: 'Other Parts of Speech',
        sections: [
            {
                heading: 'What are Adverbs?',
                type: 'definition',
                definitions: [
                    { term: 'Adverbs', definition: 'Modify verbs, telling how, where, when or why an action is done.' }
                ]
            },
            {
                heading: 'Examples of Adverbs',
                type: 'grid',
                items: ['quickly', 'yesterday', 'today', 'almost', 'softly', 'beautifully', 'early', 'carelessly', 'poorly', 'quietly']
            },
            {
                heading: 'What are Adjectives?',
                type: 'definition',
                definitions: [
                    { term: 'Adjectives', definition: 'Words that describe nouns or pronouns.' }
                ]
            },
            {
                heading: 'Examples of Adjectives',
                type: 'grid',
                items: ['blue', 'red', 'green', 'three', 'my', 'big', 'small', 'short', 'tall', 'long']
            },
            {
                heading: 'Possessive Nouns Used as Adjectives',
                type: 'comparison',
                items: [
                    { title: 'Singular Nouns', description: 'Add apostrophe + s', examples: ["Gloria's car", "Morris's phone", "The boy's pen"] },
                    { title: 'Plural Nouns ending in S', description: 'Add just apostrophe', examples: ["The Contehs' house", "The boys' pet", "The girls' hair"] }
                ]
            }
        ],
        keyPoints: ['Adverbs modify verbs and tell how/when/where', 'Adjectives describe nouns', 'Possessive nouns show ownership']
    },

    'el-unit-13': {
        title: 'Preposition, Conjunction and Interjection',
        subject: 'Other Parts of Speech',
        sections: [
            {
                heading: 'Prepositions',
                type: 'definition',
                definitions: [
                    { term: 'Preposition', definition: 'Shows the relationship of a noun or pronoun to another word in a sentence.' }
                ]
            },
            {
                heading: 'Examples of Prepositions',
                type: 'grid',
                items: ['of', 'in', 'after', 'above', 'among', 'behind', 'between', 'for', 'on', 'into']
            },
            {
                heading: 'Conjunctions',
                type: 'definition',
                definitions: [
                    { term: 'Conjunction', definition: 'A word that joins single words or groups of words.' }
                ]
            },
            {
                heading: 'Examples of Conjunctions',
                type: 'grid',
                items: ['and', 'but', 'or', 'so', 'nor', 'for', 'yet']
            },
            {
                heading: 'Interjections',
                type: 'definition',
                definitions: [
                    { term: 'Interjection', definition: 'A word or phrase that expresses emotion or exclamation. Usually ends with an exclamation mark (!).' }
                ]
            },
            {
                heading: 'Examples of Interjections',
                type: 'grid',
                items: ['Oh!', 'Ouch!', 'Wow!', 'Ah!', 'Hey!', 'Alas!', 'Whew!', 'Ha!']
            }
        ],
        keyPoints: ['Prepositions show relationships', 'Conjunctions join words or clauses', 'Interjections express strong emotion']
    },

    // ==================== VOCABULARY ====================
    'el-unit-14': {
        title: 'Synonyms',
        subject: 'Vocabulary',
        sections: [
            {
                heading: 'What are Synonyms?',
                type: 'definition',
                definitions: [
                    { term: 'Synonyms', definition: 'Words with similar meaning or almost the same meaning.' }
                ]
            },
            {
                heading: 'Example',
                type: 'text',
                content: 'Think about these two words: "big" and "large". They are the same. If you say something is big, it is large. So, big and large are synonyms.'
            },
            {
                heading: 'Common Synonyms',
                type: 'table',
                headers: ['Word', 'Synonym'],
                rows: [
                    ['Afraid', 'scared'],
                    ['Big', 'large'],
                    ['Automobile', 'car'],
                    ['Able', 'capable'],
                    ['Admit', 'confess'],
                    ['Agree', 'consent'],
                    ['Aim', 'goal'],
                    ['Belly', 'stomach'],
                    ['Blank', 'empty'],
                    ['Daybreak', 'dawn/sunrise'],
                    ['Delicious', 'yummy'],
                    ['Lucrative', 'profitable'],
                    ['Adamant', 'stubborn'],
                    ['Frank', 'honest'],
                    ['Love', 'affection'],
                    ['Harmful', 'dangerous']
                ]
            }
        ],
        keyPoints: ['Synonyms have similar meanings', 'Use synonyms to avoid repetition', 'They make writing more interesting']
    },

    'el-unit-15': {
        title: 'Antonyms',
        subject: 'Vocabulary',
        sections: [
            {
                heading: 'What are Antonyms?',
                type: 'definition',
                definitions: [
                    { term: 'Antonyms', definition: 'Words that are opposite in meaning.' }
                ]
            },
            {
                heading: 'Example',
                type: 'text',
                content: 'Let us look at these two words: "pass" and "fail". In school when you are promoted to a new class, you pass, but when you repeat the same class, you fail. Therefore, "pass" and "fail" are opposite words, also called antonyms.'
            },
            {
                heading: 'Common Antonyms',
                type: 'table',
                headers: ['Word', 'Opposite'],
                rows: [
                    ['Flexible', 'rigid'],
                    ['Narrow', 'wide'],
                    ['Bright', 'dull'],
                    ['Present', 'absent'],
                    ['Fail', 'pass'],
                    ['Truthful', 'insincere'],
                    ['Clever', 'stupid'],
                    ['Late', 'early'],
                    ['Kind', 'wicked'],
                    ['Love', 'hate'],
                    ['Enemy', 'friend'],
                    ['Sad', 'happy'],
                    ['Beautiful', 'ugly'],
                    ['Construct', 'demolish'],
                    ['Ascend', 'descend'],
                    ['Coward', 'brave'],
                    ['Long', 'short']
                ]
            }
        ],
        keyPoints: ['Antonyms have opposite meanings', 'They help express contrast', 'Important for comprehension']
    },

    'el-unit-22': {
        title: 'Prefixes and Suffixes',
        subject: 'Vocabulary',
        sections: [
            {
                heading: 'What is a Prefix?',
                type: 'definition',
                definitions: [
                    { term: 'Prefix', definition: 'A letter or group of letters placed at the BEGINNING of a word to modify or change its meaning.' }
                ]
            },
            {
                heading: 'Common Prefixes',
                type: 'table',
                headers: ['Prefix', 'Root Word', 'New Word'],
                rows: [
                    ['Anti-', 'social', 'Antisocial'],
                    ['Dis-', 'like', 'Dislike'],
                    ['Dis-', 'agree', 'Disagree'],
                    ['In-', 'correct', 'Incorrect'],
                    ['In-', 'complete', 'Incomplete'],
                    ['Mis-', 'understand', 'Misunderstand'],
                    ['Mis-', 'take', 'Mistake'],
                    ['Co-', 'worker', 'Coworker'],
                    ['Co-', 'operation', 'Cooperation'],
                    ['Inter-', 'national', 'International'],
                    ['Extra-', 'ordinary', 'Extraordinary']
                ]
            },
            {
                heading: 'What is a Suffix?',
                type: 'definition',
                definitions: [
                    { term: 'Suffix', definition: 'A letter or group of letters placed at the END of a word to make new words.' }
                ]
            },
            {
                heading: 'Common Suffixes',
                type: 'table',
                headers: ['Root Word', 'Suffix', 'New Word'],
                rows: [
                    ['Read', '-er', 'Reader'],
                    ['Teach', '-er', 'Teacher'],
                    ['Happy', '-ness', 'Happiness'],
                    ['Sick', '-ness', 'Sickness'],
                    ['Peace', '-ful', 'Peaceful'],
                    ['Hope', '-ful', 'Hopeful'],
                    ['Quick', '-ly', 'Quickly'],
                    ['Beautiful', '-ly', 'Beautifully'],
                    ['Employ', '-ee', 'Employee'],
                    ['Child', '-hood', 'Childhood']
                ]
            }
        ],
        keyPoints: ['Prefixes go at the beginning', 'Suffixes go at the end', 'They change word meanings']
    },

    'el-unit-24': {
        title: 'Idiomatic Expressions',
        subject: 'Vocabulary',
        sections: [
            {
                heading: 'What are Idioms?',
                type: 'definition',
                definitions: [
                    { term: 'Idiom', definition: 'An expression whose meaning is different from the literal meaning of its individual words.' }
                ]
            },
            {
                heading: 'Examples Explained',
                type: 'list',
                items: [
                    { title: 'Kick the bucket', description: 'Means: to die (not actually kicking a bucket!)' },
                    { title: 'Spill the beans', description: 'Means: to tell people secret information' }
                ]
            },
            {
                heading: 'Common Idioms and Their Meanings',
                type: 'table',
                headers: ['Idiom', 'Meaning'],
                rows: [
                    ['Back to the drawing board', 'Start all over again'],
                    ['Ball is in your court', 'It\'s your decision to make'],
                    ['Beat around the bush', 'Avoiding the main topic'],
                    ['Best of both worlds', 'All the advantages'],
                    ['Blessing in disguise', 'Good thing not recognized at first'],
                    ['Burn the midnight oil', 'Work late into the night'],
                    ['Cross the bridge when you come to it', 'Deal with problems when they arise'],
                    ['Cut corners', 'Do something badly to save money'],
                    ['Every cloud has a silver lining', 'Every difficulty has a comforting end'],
                    ['Hit the nail on the head', 'Say or do something exactly right']
                ]
            }
        ],
        keyPoints: ['Idioms have figurative meanings', 'Don\'t interpret them literally', 'They make language colorful']
    },

    'el-unit-25': {
        title: 'Homophones and Homonyms',
        subject: 'Vocabulary',
        sections: [
            {
                heading: 'What are Homophones?',
                type: 'definition',
                definitions: [
                    { term: 'Homophones', definition: 'Words that are pronounced the same but have different meanings and often different spellings.' }
                ]
            },
            {
                heading: 'Examples of Homophones',
                type: 'table',
                headers: ['Word 1', 'Word 2'],
                rows: [
                    ['bare', 'bear'],
                    ['air', 'heir'],
                    ['buy', 'by'],
                    ['flour', 'flower'],
                    ['hear', 'here'],
                    ['hole', 'whole'],
                    ['knight', 'night'],
                    ['know', 'no'],
                    ['peace', 'piece'],
                    ['there', 'their'],
                    ['where', 'were'],
                    ['mail', 'male']
                ]
            },
            {
                heading: 'What are Homonyms?',
                type: 'definition',
                definitions: [
                    { term: 'Homonyms', definition: 'Words that share the same spelling or pronunciation but have different meanings.' }
                ]
            },
            {
                heading: 'Examples of Homonyms',
                type: 'table',
                headers: ['Word', 'Meaning 1', 'Meaning 2'],
                rows: [
                    ['can', 'to be able', 'a metal container'],
                    ['row', 'propel with oars', 'a linear arrangement'],
                    ['week', 'seven days', ''],
                    ['weak', '', 'not strong'],
                    ['soul', 'spirit', ''],
                    ['sole', '', 'alone']
                ]
            }
        ],
        keyPoints: ['Homophones sound the same', 'Homonyms share spelling or pronunciation', 'Context helps determine meaning']
    },

    // ==================== PUNCTUATION & SPELLING ====================
    'el-unit-16': {
        title: 'Punctuation Marks',
        subject: 'Punctuation & Spelling',
        sections: [
            {
                heading: 'What are Punctuation Marks?',
                type: 'definition',
                definitions: [
                    { term: 'Punctuation Marks', definition: 'Signals we use in communication. They can be compared to traffic signs on the road.' }
                ]
            },
            {
                heading: 'Types of Punctuation Marks',
                type: 'grid',
                items: ['Capital Letters (A-Z)', 'Full Stop (.)', 'Question Mark (?)', 'Comma (,)', 'Quotation Marks (" ")', "Apostrophe (')", 'Colon (:)', 'Semi-colon (;)', 'Hyphen (-)', 'Dash (—)', 'Exclamation Mark (!)']
            },
            {
                heading: 'Capital Letters',
                type: 'list',
                items: [
                    { title: 'First word in a sentence', description: 'My name is Gloria.' },
                    { title: 'First word of direct speech', description: 'The teacher said: "Go away."' },
                    { title: 'Proper nouns', description: 'Abdul, Gloria, January, Monday, Freetown' },
                    { title: 'Pronoun I', description: 'I will see you when I come back.' }
                ]
            },
            {
                heading: 'Full Stop (.)',
                type: 'list',
                items: [
                    { title: 'End of a declarative sentence', description: 'John is a boy.' },
                    { title: 'Abbreviations', description: 'E.C.O.W.A.S, S.L.R.S.A.' }
                ]
            },
            {
                heading: 'Comma (,)',
                type: 'list',
                items: [
                    { title: 'Show reader pause', description: '' },
                    { title: 'Separate items in a list', description: 'The woman sells pens, books, chalks, and food.' },
                    { title: 'Separate direct speech', description: 'Reverend Nicol said, "I want to go home."' }
                ]
            },
            {
                heading: 'Apostrophe (\')',
                type: 'list',
                items: [
                    { title: 'Show possession', description: "This is Mr. Massaquoi's car." },
                    { title: 'Contractions', description: "don't, can't, shouldn't" }
                ]
            }
        ],
        keyPoints: ['Punctuation helps readers understand', 'Capital letters have specific uses', 'Different marks serve different purposes']
    },

    'el-unit-26': {
        title: 'Spelling Using Conjugation',
        subject: 'Punctuation & Spelling',
        sections: [
            {
                heading: 'What is Conjugation?',
                type: 'definition',
                definitions: [
                    { term: 'Conjugation', definition: 'Changing a verb\'s form to express person, number, tense, or aspect.' }
                ]
            },
            {
                heading: 'Simple Present Conjugation',
                type: 'table',
                headers: ['Person', 'Conjugation'],
                rows: [
                    ['I', 'cook'],
                    ['You', 'cook'],
                    ['He/She/It', 'cooks'],
                    ['We', 'cook'],
                    ['They', 'cook']
                ]
            },
            {
                heading: 'Simple Past Conjugation',
                type: 'table',
                headers: ['Person', 'Conjugation'],
                rows: [
                    ['I', 'cooked'],
                    ['You', 'cooked'],
                    ['He/She/It', 'cooked'],
                    ['We', 'cooked'],
                    ['They', 'cooked']
                ]
            },
            {
                heading: 'Progressive Conjugation',
                type: 'table',
                headers: ['Person', 'Conjugation'],
                rows: [
                    ['I', 'am cooking'],
                    ['You', 'are cooking'],
                    ['He/She/It', 'is cooking'],
                    ['We', 'are cooking'],
                    ['They', 'are cooking']
                ]
            },
            {
                heading: 'Regular vs Irregular',
                type: 'comparison',
                items: [
                    { title: 'Regular Verbs', description: "Add 'd', 'ed', or 'ied' for past tense", examples: ['soothe → soothed', 'jump → jumped', 'carry → carried'] },
                    { title: 'Irregular Verbs', description: 'Do not follow regular patterns', examples: ['sing → sang', 'bring → brought', 'go → went'] }
                ]
            }
        ],
        keyPoints: ['Conjugation changes verb forms', 'Third person singular adds -s', 'Irregular verbs have special forms']
    },

    'el-unit-30': {
        title: 'Spelling and Vocabulary',
        subject: 'Punctuation & Spelling',
        sections: [
            {
                heading: 'Rule 1: Spelling with ie and ei',
                type: 'text',
                content: 'The rule says "i" always comes before "e" (achieve, believe, chief, field). Exception: "e" comes before "i" in words like either, foreign, neither, heir.'
            },
            {
                heading: 'Rule 2: Verbs ending in -eed and -ede',
                type: 'comparison',
                items: [
                    { title: '-eed words', description: 'Double ee goes with suc, ex, pro', examples: ['succeed', 'exceed', 'proceed'] },
                    { title: '-ede words', description: 'All others use -cede', examples: ['concede', 'intercede', 'precede', 'recede'] }
                ]
            },
            {
                heading: 'Rule 3: Noun (c) vs Verb (s)',
                type: 'table',
                headers: ['Noun', 'Verb'],
                rows: [
                    ['a practice', 'to practise'],
                    ['a prophecy', 'to prophesy'],
                    ['a license', 'to license'],
                    ['advice', 'to advise']
                ]
            },
            {
                heading: 'Rule 4: -our → -orous',
                type: 'table',
                headers: ['Noun', 'Adjective'],
                rows: [
                    ['Humour', 'Humorous'],
                    ['Vigor', 'Vigorous'],
                    ['Glamour', 'Glamorous']
                ]
            },
            {
                heading: 'Tips to Expand Vocabulary',
                type: 'numbered-list',
                items: [
                    'Write new words in a notebook',
                    'Look for meaning and pronunciation in a dictionary',
                    'Relate new words to words you know',
                    'Verify understanding with someone else',
                    'Practice using new words in writing'
                ]
            }
        ],
        keyPoints: ['i before e except after c', 'Nouns often use c, verbs use s', 'Practice new vocabulary regularly']
    },

    // ==================== READING & COMPREHENSION ====================
    'el-unit-17': {
        title: 'Reading and Comprehension I',
        subject: 'Reading & Comprehension',
        sections: [
            {
                heading: 'Why is Reading Comprehension Important?',
                type: 'text',
                content: 'The purpose of reading comprehension is to get the meaning from the reading text. A major goal is to help pupils develop the knowledge, skills and experiences to become competent readers.'
            },
            {
                heading: 'What are Comprehension Passages?',
                type: 'definition',
                definitions: [
                    { term: 'Comprehension', definition: 'Understanding a given passage. Questions are answered using information given in the passage, even if it differs from real life.' }
                ]
            },
            {
                heading: 'Tips for Answering Comprehension Questions',
                type: 'checklist',
                items: [
                    'Read the passage carefully first',
                    'Look for keywords in questions',
                    'Find answers within the passage',
                    'Re-read the passage before attempting questions',
                    'Use your own words when required'
                ]
            }
        ],
        keyPoints: ['Read passages carefully', 'Find answers in the text', 'Re-read before answering']
    },

    'el-unit-18': {
        title: 'Reading and Comprehension II',
        subject: 'Reading & Comprehension',
        sections: [
            {
                heading: 'Answer Types',
                type: 'comparison',
                items: [
                    { title: 'Direct Answers', description: 'Answers taken directly from the paragraph', examples: ['Who', 'What', 'Where questions'] },
                    { title: 'Interpreted Answers', description: 'Answers interpreted from paragraph meaning', examples: ['Why', 'How questions'] }
                ]
            },
            {
                heading: 'Multiple Choice Tips',
                type: 'checklist',
                items: [
                    'Read all options before choosing',
                    'Eliminate obviously wrong answers',
                    'Look for evidence in the passage',
                    'Choose the BEST answer, not just a correct one',
                    'Check your answer makes sense'
                ]
            }
        ],
        keyPoints: ['Some answers are direct', 'Some require interpretation', 'Always support with evidence']
    },

    // ==================== WRITING SKILLS ====================
    'el-unit-19': {
        title: 'Letter Writing',
        subject: 'Writing Skills',
        sections: [
            {
                heading: 'What is a Letter?',
                type: 'definition',
                definitions: [
                    { term: 'Letter', definition: 'A written, typed or printed form of communication sent from one person to another.' }
                ]
            },
            {
                heading: 'Types of Letters',
                type: 'cards',
                items: [
                    { title: 'Formal Letters', icon: '📄', examples: 'To Presidents, Ministers, Managers, Directors', color: '#6366f1' },
                    { title: 'Semi-Formal Letters', icon: '📝', examples: 'To teachers, parents, acquaintances', color: '#10b981' },
                    { title: 'Informal Letters', icon: '💌', examples: 'To friends, family, relatives', color: '#ec4899' }
                ]
            },
            {
                heading: 'Formal Letter Format',
                type: 'steps',
                items: [
                    { step: '1', description: "Sender's address (right side) and date" },
                    { step: '2', description: "Recipient's name and address (left side)" },
                    { step: '3', description: 'Salutation/Greeting (Dear Sir/Madam)' },
                    { step: '4', description: 'Subject/Purpose (underlined)' },
                    { step: '5', description: 'Body (introduction, content, conclusion)' },
                    { step: '6', description: 'Complimentary close (Yours sincerely/faithfully)' },
                    { step: '7', description: 'Signature and name' }
                ]
            }
        ],
        keyPoints: ['Three types of letters', 'Formal letters follow strict format', 'Use appropriate language for each type']
    },

    'el-unit-20': {
        title: 'Semi-Formal and Informal Letters',
        subject: 'Writing Skills',
        sections: [
            {
                heading: 'Semi-Formal Letters',
                type: 'definition',
                definitions: [
                    { term: 'Semi-Formal Letters', definition: 'Letters sent to someone you know but don\'t share a close relationship with (teachers, parents, acquaintances).' }
                ]
            },
            {
                heading: 'Semi-Formal Letter Features',
                type: 'checklist',
                items: [
                    'Neither too formal nor too informal',
                    "Requires sender's address, salutation, body, closing",
                    'Simple and straightforward language',
                    'No slang or contractions',
                    'End with "Yours sincerely" and full name'
                ]
            },
            {
                heading: 'Informal Letters',
                type: 'definition',
                definitions: [
                    { term: 'Informal Letters', definition: 'Letters sent to close relations with an informal and personal tone. Casual language is used.' }
                ]
            },
            {
                heading: 'Informal Letter Features',
                type: 'checklist',
                items: [
                    'Personal and friendly tone',
                    'Can use casual greetings (Hello, Hi)',
                    'Can include personal opinions and feelings',
                    'More relaxed structure',
                    'Close with friendly endings'
                ]
            }
        ],
        keyPoints: ['Semi-formal is moderately formal', 'Informal letters are casual', 'Match tone to your relationship']
    },

    'el-unit-21': {
        title: 'Composition/Essay Writing',
        subject: 'Writing Skills',
        sections: [
            {
                heading: 'What is a Composition?',
                type: 'definition',
                definitions: [
                    { term: 'Composition/Essay', definition: 'A piece of writing that describes/narrates a person, place or thing.' }
                ]
            },
            {
                heading: 'The 5Ws and 1H Questions',
                type: 'cards',
                items: [
                    { title: 'Who?', icon: '👤', examples: 'Main character of your story', color: '#6366f1' },
                    { title: 'Where?', icon: '📍', examples: 'Where events take place', color: '#10b981' },
                    { title: 'When?', icon: '⏰', examples: 'When they happen', color: '#0ea5e9' },
                    { title: 'What?', icon: '❓', examples: 'What happens', color: '#f97316' },
                    { title: 'Why?', icon: '🤔', examples: 'Why they occurred', color: '#8b5cf6' },
                    { title: 'How?', icon: '🔧', examples: 'How was everything solved', color: '#ec4899' }
                ]
            },
            {
                heading: 'Composition Structure',
                type: 'steps',
                items: [
                    { step: '1', description: 'HEADING - Short, attention-grabbing title' },
                    { step: '2', description: 'INTRODUCTION - Gets reader\'s attention, prepares for what follows' },
                    { step: '3', description: 'MAIN BODY - Where the main story develops' },
                    { step: '4', description: 'CONCLUSION - Summary of main idea, no new points' }
                ]
            },
            {
                heading: 'Important Tips',
                type: 'checklist',
                items: [
                    'Write straight to the point',
                    'Never use slang unless required',
                    "Don't use words you're not sure about",
                    'Keep sentences short',
                    'Express a clear point of view'
                ]
            }
        ],
        keyPoints: ['Use 5Ws and 1H for planning', 'Follow structure: Heading, Intro, Body, Conclusion', 'Keep writing clear and simple']
    },

    'el-unit-29': {
        title: 'Sentences',
        subject: 'Writing Skills',
        sections: [
            {
                heading: 'What is a Sentence?',
                type: 'definition',
                definitions: [
                    { term: 'Sentence', definition: 'A group of words that express a complete thought or idea. Every sentence has a subject and a predicate.' }
                ]
            },
            {
                heading: 'Parts of a Sentence',
                type: 'comparison',
                items: [
                    { title: 'Subject', description: 'The person or thing performing the action', examples: ['Jombla is singing (Jombla = subject)'] },
                    { title: 'Predicate', description: 'The rest of the sentence, begins with a verb', examples: ['Jombla is singing (is singing = predicate)'] }
                ]
            },
            {
                heading: 'Types of Sentences',
                type: 'cards',
                items: [
                    { title: 'Simple Sentence', icon: '1️⃣', examples: 'One independent clause. E.g. John is a boy.', color: '#10b981' },
                    { title: 'Compound Sentence', icon: '2️⃣', examples: 'Two+ sentences joined by conjunction. E.g. I work, but I am tired.', color: '#6366f1' },
                    { title: 'Complex Sentence', icon: '3️⃣', examples: 'One main + one subordinate clause. E.g. Because it rained, I stayed home.', color: '#ec4899' }
                ]
            },
            {
                heading: 'Simple Sentence Examples',
                type: 'grid',
                items: ['John is a boy.', 'He is a teacher.', 'They are all dancing.', 'We are reading.']
            },
            {
                heading: 'Compound Sentence Examples',
                type: 'list',
                items: [
                    { title: 'This house is too expensive, and that house is too small', description: '' },
                    { title: 'I really need to work, but I am too sick to drive', description: '' }
                ]
            },
            {
                heading: 'Complex Sentence Examples',
                type: 'list',
                items: [
                    { title: 'Because my coffee was too cold, I waited for an hour', description: '' },
                    { title: 'Although he was wealthy, he was still unhappy', description: '' }
                ]
            }
        ],
        keyPoints: ['Every sentence needs subject and predicate', 'Simple sentences have one clause', 'Complex sentences have main and subordinate clauses']
    },

    // ==================== ADVANCED GRAMMAR ====================
    'el-unit-31': {
        title: 'Active & Passive Voice',
        subject: 'Advanced Grammar',
        sections: [
            {
                heading: 'What is Voice?',
                type: 'definition',
                definitions: [
                    { term: 'Voice', definition: 'Voice shows whether the subject of a sentence performs the action or receives the action.' }
                ]
            },
            {
                heading: 'Active Voice vs Passive Voice',
                type: 'comparison',
                items: [
                    { title: 'Active Voice', description: 'The subject performs the action', examples: ['The boy kicked the ball', 'Mary wrote the letter'] },
                    { title: 'Passive Voice', description: 'The subject receives the action', examples: ['The ball was kicked by the boy', 'The letter was written by Mary'] }
                ]
            },
            {
                heading: 'How to Change Active to Passive',
                type: 'steps',
                items: [
                    { step: '1', description: 'Move the object to the subject position' },
                    { step: '2', description: 'Add the appropriate form of "be" (is, am, are, was, were)' },
                    { step: '3', description: 'Change the main verb to past participle' },
                    { step: '4', description: 'Add "by" + the original subject (optional)' }
                ]
            },
            {
                heading: 'Examples by Tense',
                type: 'table',
                headers: ['Tense', 'Active', 'Passive'],
                rows: [
                    ['Simple Present', 'She writes a letter', 'A letter is written by her'],
                    ['Simple Past', 'She wrote a letter', 'A letter was written by her'],
                    ['Present Continuous', 'She is writing a letter', 'A letter is being written by her'],
                    ['Past Continuous', 'She was writing a letter', 'A letter was being written by her'],
                    ['Present Perfect', 'She has written a letter', 'A letter has been written by her'],
                    ['Future', 'She will write a letter', 'A letter will be written by her']
                ]
            }
        ],
        keyPoints: ['Active: subject does the action', 'Passive: subject receives the action', 'Use "be" + past participle for passive']
    },

    'el-unit-32': {
        title: 'Direct & Indirect Speech',
        subject: 'Advanced Grammar',
        sections: [
            {
                heading: 'What is Direct Speech?',
                type: 'definition',
                definitions: [
                    { term: 'Direct Speech', definition: 'The exact words spoken by someone, enclosed in quotation marks.' }
                ]
            },
            {
                heading: 'What is Indirect Speech?',
                type: 'definition',
                definitions: [
                    { term: 'Indirect Speech', definition: 'Reporting what someone said without using their exact words. Also called Reported Speech.' }
                ]
            },
            {
                heading: 'Examples',
                type: 'comparison',
                items: [
                    { title: 'Direct Speech', description: 'Uses quotation marks', examples: ['John said, "I am hungry."', 'She said, "I will come tomorrow."'] },
                    { title: 'Indirect Speech', description: 'No quotation marks, changes tense', examples: ['John said that he was hungry.', 'She said that she would come the next day.'] }
                ]
            },
            {
                heading: 'Tense Changes',
                type: 'table',
                headers: ['Direct Speech', 'Indirect Speech'],
                rows: [
                    ['Simple Present (is/am/are)', 'Simple Past (was/were)'],
                    ['Present Continuous (is going)', 'Past Continuous (was going)'],
                    ['Simple Past (went)', 'Past Perfect (had gone)'],
                    ['Will', 'Would'],
                    ['Can', 'Could'],
                    ['May', 'Might']
                ]
            },
            {
                heading: 'Time and Place Changes',
                type: 'table',
                headers: ['Direct', 'Indirect'],
                rows: [
                    ['today', 'that day'],
                    ['tomorrow', 'the next day'],
                    ['yesterday', 'the previous day'],
                    ['now', 'then'],
                    ['here', 'there'],
                    ['this', 'that']
                ]
            }
        ],
        keyPoints: ['Direct speech uses exact words in quotes', 'Indirect speech reports without quotes', 'Change tense and time words when converting']
    },

    'el-unit-33': {
        title: 'Sentence Types',
        subject: 'Advanced Grammar',
        sections: [
            {
                heading: 'Four Types of Sentences',
                type: 'cards',
                items: [
                    { title: 'Assertive (Declarative)', icon: '📢', examples: 'Makes a statement. E.g. The sun rises in the east.', color: '#6366f1' },
                    { title: 'Interrogative', icon: '❓', examples: 'Asks a question. E.g. Where do you live?', color: '#10b981' },
                    { title: 'Imperative', icon: '👆', examples: 'Gives a command or request. E.g. Close the door.', color: '#f97316' },
                    { title: 'Exclamatory', icon: '❗', examples: 'Expresses strong emotion. E.g. What a beautiful day!', color: '#ec4899' }
                ]
            },
            {
                heading: 'Assertive Sentences',
                type: 'list',
                items: [
                    { title: 'Affirmative', description: 'I like mangoes. She is a teacher.' },
                    { title: 'Negative', description: 'I do not like mangoes. She is not a teacher.' }
                ]
            },
            {
                heading: 'Interrogative Sentences',
                type: 'list',
                items: [
                    { title: 'Yes/No Questions', description: 'Do you like music? Is she coming?' },
                    { title: 'Wh-Questions', description: 'What is your name? Where do you live?' }
                ]
            },
            {
                heading: 'Imperative Sentences',
                type: 'grid',
                items: ['Sit down.', 'Please help me.', 'Do not run.', 'Let us go.', 'Be quiet!', 'Open your books.']
            },
            {
                heading: 'Exclamatory Sentences',
                type: 'grid',
                items: ['What a lovely flower!', 'How beautiful she is!', 'Hurray! We won!', 'Alas! He is dead.', 'Oh no!']
            }
        ],
        keyPoints: ['Assertive sentences make statements', 'Interrogative sentences ask questions', 'Imperative gives commands', 'Exclamatory expresses emotions']
    },

    'el-unit-34': {
        title: 'Question Forms & Question Tags',
        subject: 'Advanced Grammar',
        sections: [
            {
                heading: 'Types of Questions',
                type: 'comparison',
                items: [
                    { title: 'Yes/No Questions', description: 'Can be answered with yes or no', examples: ['Are you a student?', 'Do you like rice?'] },
                    { title: 'Wh-Questions', description: 'Use question words', examples: ['What is your name?', 'Where do you live?'] }
                ]
            },
            {
                heading: 'Question Words (Wh-Words)',
                type: 'table',
                headers: ['Word', 'Asks About', 'Example'],
                rows: [
                    ['What', 'Things/Actions', 'What is this?'],
                    ['Who', 'People (subject)', 'Who is that man?'],
                    ['Whom', 'People (object)', 'Whom did you see?'],
                    ['Where', 'Place', 'Where is the school?'],
                    ['When', 'Time', 'When is your birthday?'],
                    ['Why', 'Reason', 'Why are you late?'],
                    ['How', 'Manner/Way', 'How do you cook rice?'],
                    ['Which', 'Choice', 'Which bag is yours?']
                ]
            },
            {
                heading: 'What are Question Tags?',
                type: 'definition',
                definitions: [
                    { term: 'Question Tag', definition: 'A short question added at the end of a statement to confirm or check information.' }
                ]
            },
            {
                heading: 'Rules for Question Tags',
                type: 'numbered-list',
                items: [
                    'Positive statement → Negative tag',
                    'Negative statement → Positive tag',
                    'Use the same auxiliary verb or "do/does/did"',
                    'Use a pronoun in the tag, not a noun'
                ]
            },
            {
                heading: 'Question Tag Examples',
                type: 'table',
                headers: ['Statement', 'Question Tag'],
                rows: [
                    ['You are a student,', "aren't you?"],
                    ['She is not coming,', 'is she?'],
                    ['They can swim,', "can't they?"],
                    ['He works hard,', "doesn't he?"],
                    ['We went to school,', "didn't we?"]
                ]
            }
        ],
        keyPoints: ['Yes/No questions need yes or no answers', 'Wh-questions need information', 'Question tags confirm information']
    },

    'el-unit-35': {
        title: 'Noun Clauses',
        subject: 'Advanced Grammar',
        sections: [
            {
                heading: 'What is a Clause?',
                type: 'definition',
                definitions: [
                    { term: 'Clause', definition: 'A group of words containing a subject and a verb. It may or may not form a complete sentence.' }
                ]
            },
            {
                heading: 'Types of Clauses',
                type: 'comparison',
                items: [
                    { title: 'Independent Clause', description: 'Can stand alone as a sentence', examples: ['She reads books.'] },
                    { title: 'Dependent Clause', description: 'Cannot stand alone, needs a main clause', examples: ['...that she reads books.'] }
                ]
            },
            {
                heading: 'What is a Noun Clause?',
                type: 'definition',
                definitions: [
                    { term: 'Noun Clause', definition: 'A dependent clause that functions as a noun in a sentence. It can be a subject, object, or complement.' }
                ]
            },
            {
                heading: 'Noun Clause Starters',
                type: 'grid',
                items: ['that', 'what', 'who', 'whom', 'which', 'where', 'when', 'why', 'how', 'whether', 'if']
            },
            {
                heading: 'Functions of Noun Clauses',
                type: 'list',
                items: [
                    { title: 'As Subject', description: 'What she said surprised me.' },
                    { title: 'As Object', description: 'I know that he is honest.' },
                    { title: 'As Complement', description: 'The truth is that she lied.' }
                ]
            }
        ],
        keyPoints: ['Clauses have a subject and verb', 'Noun clauses function as nouns', 'They can be subjects, objects, or complements']
    }
};

export const getEnglishNotesContent = (unitId) => {
    return englishNotesContent[unitId] || null;
};
