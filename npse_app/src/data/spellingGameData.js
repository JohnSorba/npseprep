// ─────────────────────────────────────────────────────────────
// Vocabulary Builder — Schonell's Essential Spelling List
// 180 items  •  3 Sections (Basic / Intermediate / Advanced)
// Each section: 60 words (Level 1: 10, Level 2: 20, Level 3: 30)
// Question types: synonym | antonym | definition | fill-blank
// ─────────────────────────────────────────────────────────────

const spellingGameData = {
    sections: [
        // ═══════════════════════════════════════════════════════
        //  SECTION 1 — BASIC  (Groups 1–2, Ages 7–8)
        // ═══════════════════════════════════════════════════════
        {
            id: "basic",
            title: "Basic",
            description: "Everyday words from Schonell Groups 1–2",
            icon: "🌱",
            color: "#1B8A5A",
            levels: [
                {
                    id: "basic-1",
                    title: "Level 1",
                    words: [
                        {
                            word: "happy",
                            question_type: "synonym",
                            question: "Which word means the same as 'happy'?",
                            distractors: ["sad", "angry", "tired"],
                            correct_answer: "glad",
                            example_sentence: "She was very happy when she found her lost puppy."
                        },
                        {
                            word: "small",
                            question_type: "antonym",
                            question: "What is the opposite of 'small'?",
                            distractors: ["tiny", "short", "thin"],
                            correct_answer: "large",
                            example_sentence: "The mouse was too small to reach the cheese on the table."
                        },
                        {
                            word: "fast",
                            question_type: "synonym",
                            question: "Which word means the same as 'fast'?",
                            distractors: ["slow", "last", "past"],
                            correct_answer: "quick",
                            example_sentence: "The rabbit ran fast across the open field."
                        },
                        {
                            word: "begin",
                            question_type: "synonym",
                            question: "Which word means the same as 'begin'?",
                            distractors: ["finish", "stop", "wait"],
                            correct_answer: "start",
                            example_sentence: "Let us begin our spelling lesson now."
                        },
                        {
                            word: "pretty",
                            question_type: "definition",
                            question: "What does the word 'pretty' mean?",
                            distractors: ["ugly", "plain", "dull"],
                            correct_answer: "attractive or pleasing to look at",
                            example_sentence: "She wore a pretty dress to the party."
                        },
                        {
                            word: "cold",
                            question_type: "antonym",
                            question: "What is the opposite of 'cold'?",
                            distractors: ["cool", "freeze", "winter"],
                            correct_answer: "hot",
                            example_sentence: "The weather turned cold as winter drew near."
                        },
                        {
                            word: "throw",
                            question_type: "fill-blank",
                            question: "Please _____ the ball to your friend.",
                            distractors: ["grow", "show", "blow"],
                            correct_answer: "throw",
                            example_sentence: "He learned to throw the ball with great accuracy."
                        },
                        {
                            word: "sleep",
                            question_type: "definition",
                            question: "What does 'sleep' mean?",
                            distractors: ["to eat food", "to run around", "to talk loudly"],
                            correct_answer: "to rest with your eyes closed",
                            example_sentence: "The baby needs to sleep for at least ten hours."
                        },
                        {
                            word: "brave",
                            question_type: "synonym",
                            question: "Which word means the same as 'brave'?",
                            distractors: ["scared", "weak", "shy"],
                            correct_answer: "bold",
                            example_sentence: "The brave firefighter rushed into the burning building."
                        },
                        {
                            word: "near",
                            question_type: "antonym",
                            question: "What is the opposite of 'near'?",
                            distractors: ["here", "beside", "next"],
                            correct_answer: "far",
                            example_sentence: "The shop is very near to our school."
                        }
                    ]
                },
                {
                    id: "basic-2",
                    title: "Level 2",
                    words: [
                        {
                            word: "dark",
                            question_type: "antonym",
                            question: "What is the opposite of 'dark'?",
                            distractors: ["dim", "shade", "night"],
                            correct_answer: "bright",
                            example_sentence: "It was too dark to see without a torch."
                        },
                        {
                            word: "strong",
                            question_type: "antonym",
                            question: "What is the opposite of 'strong'?",
                            distractors: ["heavy", "tall", "big"],
                            correct_answer: "weak",
                            example_sentence: "The strong wind blew the washing off the line."
                        },
                        {
                            word: "funny",
                            question_type: "synonym",
                            question: "Which word means the same as 'funny'?",
                            distractors: ["sad", "boring", "scary"],
                            correct_answer: "amusing",
                            example_sentence: "The clown told a very funny joke."
                        },
                        {
                            word: "dinner",
                            question_type: "fill-blank",
                            question: "We always eat _____ at six o'clock in the evening.",
                            distractors: ["breakfast", "lunch", "snack"],
                            correct_answer: "dinner",
                            example_sentence: "Mother cooked a delicious dinner for the family."
                        },
                        {
                            word: "sorry",
                            question_type: "definition",
                            question: "What does 'sorry' mean?",
                            distractors: ["feeling happy", "feeling hungry", "feeling sleepy"],
                            correct_answer: "feeling sadness or regret",
                            example_sentence: "She said sorry for breaking the glass."
                        },
                        {
                            word: "clever",
                            question_type: "synonym",
                            question: "Which word means the same as 'clever'?",
                            distractors: ["silly", "lazy", "slow"],
                            correct_answer: "smart",
                            example_sentence: "The clever boy solved the puzzle in seconds."
                        },
                        {
                            word: "round",
                            question_type: "fill-blank",
                            question: "The ball is _____ like the moon.",
                            distractors: ["square", "flat", "long"],
                            correct_answer: "round",
                            example_sentence: "They sat in a round circle on the grass."
                        },
                        {
                            word: "clean",
                            question_type: "antonym",
                            question: "What is the opposite of 'clean'?",
                            distractors: ["neat", "tidy", "bright"],
                            correct_answer: "dirty",
                            example_sentence: "Please keep your uniform clean and tidy."
                        },
                        {
                            word: "friend",
                            question_type: "definition",
                            question: "What is a 'friend'?",
                            distractors: ["a teacher", "a stranger", "an enemy"],
                            correct_answer: "a person you like and trust",
                            example_sentence: "My best friend and I walk to school together."
                        },
                        {
                            word: "follow",
                            question_type: "fill-blank",
                            question: "The children _____ the teacher into the classroom.",
                            distractors: ["lead", "push", "carry"],
                            correct_answer: "follow",
                            example_sentence: "The children follow the teacher into the classroom."
                        },
                        {
                            word: "money",
                            question_type: "definition",
                            question: "What is 'money'?",
                            distractors: ["a type of book", "a kind of shirt", "a piece of fruit"],
                            correct_answer: "coins or notes used to buy things",
                            example_sentence: "He saved all his pocket money to buy a new bicycle."
                        },
                        {
                            word: "school",
                            question_type: "fill-blank",
                            question: "We go to _____ every morning to learn.",
                            distractors: ["market", "church", "hospital"],
                            correct_answer: "school",
                            example_sentence: "Our school has a big playground for football."
                        },
                        {
                            word: "water",
                            question_type: "definition",
                            question: "What is 'water'?",
                            distractors: ["a solid rock", "a hot fire", "a thick bread"],
                            correct_answer: "a clear liquid that we drink",
                            example_sentence: "Always drink clean water to stay healthy."
                        },
                        {
                            word: "window",
                            question_type: "fill-blank",
                            question: "Please open the _____ to let in some fresh air.",
                            distractors: ["floor", "wall", "roof"],
                            correct_answer: "window",
                            example_sentence: "The bird flew through the open window."
                        },
                        {
                            word: "garden",
                            question_type: "definition",
                            question: "What is a 'garden'?",
                            distractors: ["a dark cave", "a deep river", "a busy street"],
                            correct_answer: "an area around a house where plants grow",
                            example_sentence: "Father grows tomatoes and onions in our garden."
                        },
                        {
                            word: "sister",
                            question_type: "synonym",
                            question: "A 'sister' is a female _____.",
                            distractors: ["friend", "teacher", "stranger"],
                            correct_answer: "sibling",
                            example_sentence: "My elder sister helps me with my homework."
                        },
                        {
                            word: "winter",
                            question_type: "antonym",
                            question: "What is the opposite of 'winter' (the cold season)?",
                            distractors: ["autumn", "spring", "morning"],
                            correct_answer: "summer",
                            example_sentence: "In winter, we wear warm sweaters and hats."
                        },
                        {
                            word: "market",
                            question_type: "definition",
                            question: "What is a 'market'?",
                            distractors: ["a place for sleeping", "a place for swimming", "a place for reading"],
                            correct_answer: "a place where people buy and sell goods",
                            example_sentence: "We buy fresh vegetables at the market every Saturday."
                        },
                        {
                            word: "bottle",
                            question_type: "fill-blank",
                            question: "Fill the _____ with cool water.",
                            distractors: ["plate", "spoon", "fork"],
                            correct_answer: "bottle",
                            example_sentence: "The baby drank all the milk in her bottle."
                        },
                        {
                            word: "kettle",
                            question_type: "definition",
                            question: "What is a 'kettle' used for?",
                            distractors: ["washing clothes", "sweeping the floor", "digging the ground"],
                            correct_answer: "boiling water for tea or coffee",
                            example_sentence: "The kettle began to whistle when the water boiled."
                        }
                    ]
                },
                {
                    id: "basic-3",
                    title: "Level 3",
                    words: [
                        {
                            word: "letter",
                            question_type: "definition",
                            question: "What is a 'letter'?",
                            distractors: ["a type of food", "a kind of game", "a school subject"],
                            correct_answer: "a written message sent to someone",
                            example_sentence: "She wrote a letter to her grandmother in the village."
                        },
                        {
                            word: "teach",
                            question_type: "synonym",
                            question: "Which word means the same as 'teach'?",
                            distractors: ["learn", "study", "read"],
                            correct_answer: "instruct",
                            example_sentence: "Our teacher will teach us about fractions today."
                        },
                        {
                            word: "spend",
                            question_type: "fill-blank",
                            question: "Do not _____ all your pocket money at once.",
                            distractors: ["save", "earn", "lend"],
                            correct_answer: "spend",
                            example_sentence: "She likes to spend time reading in the library."
                        },
                        {
                            word: "before",
                            question_type: "antonym",
                            question: "What is the opposite of 'before'?",
                            distractors: ["during", "while", "until"],
                            correct_answer: "after",
                            example_sentence: "Wash your hands before you eat your meal."
                        },
                        {
                            word: "fresh",
                            question_type: "definition",
                            question: "What does 'fresh' mean?",
                            distractors: ["old and stale", "warm and cooked", "hard and broken"],
                            correct_answer: "new, clean, or recently produced",
                            example_sentence: "We bought fresh fish from the market this morning."
                        },
                        {
                            word: "loud",
                            question_type: "antonym",
                            question: "What is the opposite of 'loud'?",
                            distractors: ["noisy", "clear", "sharp"],
                            correct_answer: "quiet",
                            example_sentence: "The loud music could be heard from outside."
                        },
                        {
                            word: "belong",
                            question_type: "fill-blank",
                            question: "These books _____ to the school library.",
                            distractors: ["become", "below", "behind"],
                            correct_answer: "belong",
                            example_sentence: "The toys belong to the nursery school children."
                        },
                        {
                            word: "early",
                            question_type: "antonym",
                            question: "What is the opposite of 'early'?",
                            distractors: ["morning", "quick", "fast"],
                            correct_answer: "late",
                            example_sentence: "She wakes up early every morning to study."
                        },
                        {
                            word: "number",
                            question_type: "definition",
                            question: "What is a 'number'?",
                            distractors: ["a type of colour", "a musical note", "a kind of shape"],
                            correct_answer: "a figure used for counting or measuring",
                            example_sentence: "The number seven is considered lucky."
                        },
                        {
                            word: "true",
                            question_type: "antonym",
                            question: "What is the opposite of 'true'?",
                            distractors: ["real", "sure", "right"],
                            correct_answer: "false",
                            example_sentence: "Is it true that school closes early on Fridays?"
                        },
                        {
                            word: "country",
                            question_type: "definition",
                            question: "What is a 'country'?",
                            distractors: ["a small house", "a single person", "a type of fruit"],
                            correct_answer: "a nation with its own government and land",
                            example_sentence: "Sierra Leone is a beautiful country in West Africa."
                        },
                        {
                            word: "people",
                            question_type: "fill-blank",
                            question: "Many _____ gathered at the town hall.",
                            distractors: ["animal", "water", "stone"],
                            correct_answer: "people",
                            example_sentence: "The people were happy to hear the good news."
                        },
                        {
                            word: "thought",
                            question_type: "definition",
                            question: "What is a 'thought'?",
                            distractors: ["a kind of food", "a heavy rock", "a fast car"],
                            correct_answer: "an idea or opinion in your mind",
                            example_sentence: "The thought of the holiday made him smile."
                        },
                        {
                            word: "morning",
                            question_type: "antonym",
                            question: "What is the opposite of 'morning'?",
                            distractors: ["afternoon", "sunrise", "today"],
                            correct_answer: "evening",
                            example_sentence: "We study in the morning and play in the evening."
                        },
                        {
                            word: "together",
                            question_type: "antonym",
                            question: "What is the opposite of 'together'?",
                            distractors: ["beside", "along", "with"],
                            correct_answer: "apart",
                            example_sentence: "They worked together to finish the project."
                        },
                        {
                            word: "children",
                            question_type: "antonym",
                            question: "What is the opposite of 'children'?",
                            distractors: ["babies", "students", "pupils"],
                            correct_answer: "adults",
                            example_sentence: "The children played while the adults talked."
                        },
                        {
                            word: "another",
                            question_type: "fill-blank",
                            question: "Please give me _____ piece of bread.",
                            distractors: ["about", "again", "among"],
                            correct_answer: "another",
                            example_sentence: "One bird flew away, but another stayed behind."
                        },
                        {
                            word: "animal",
                            question_type: "definition",
                            question: "What is an 'animal'?",
                            distractors: ["a green plant", "a solid rock", "a falling rain"],
                            correct_answer: "a living creature like a dog, cat, or lion",
                            example_sentence: "The lion is a very strong and brave animal."
                        },
                        {
                            word: "mountain",
                            question_type: "antonym",
                            question: "What is the opposite of a 'mountain'?",
                            distractors: ["hill", "rock", "forest"],
                            correct_answer: "valley",
                            example_sentence: "The hikers climbed to the top of the mountain."
                        },
                        {
                            word: "village",
                            question_type: "definition",
                            question: "What is a 'village'?",
                            distractors: ["a big city", "a single house", "a deep ocean"],
                            correct_answer: "a small group of houses in the country",
                            example_sentence: "My grandmother lives in a quiet village near the river."
                        },
                        {
                            word: "forest",
                            question_type: "definition",
                            question: "What is a 'forest'?",
                            distractors: ["a sandy beach", "a busy city", "a wide ocean"],
                            correct_answer: "a large area covered with trees",
                            example_sentence: "Many wild animals live deep inside the forest."
                        },
                        {
                            word: "summer",
                            question_type: "antonym",
                            question: "What is the opposite of 'summer'?",
                            distractors: ["spring", "autumn", "morning"],
                            correct_answer: "winter",
                            example_sentence: "We usually go to the beach during the summer."
                        },
                        {
                            word: "weather",
                            question_type: "definition",
                            question: "What is the 'weather'?",
                            distractors: ["the type of food we eat", "the money we use", "the name of a person"],
                            correct_answer: "the state of the sky and air (sun, rain, wind)",
                            example_sentence: "The weather was very rainy and cold yesterday."
                        },
                        {
                            word: "middle",
                            question_type: "antonym",
                            question: "What is the opposite of 'middle'?",
                            distractors: ["center", "inside", "half"],
                            correct_answer: "edge",
                            example_sentence: "The teacher stood in the middle of the classroom."
                        },
                        {
                            word: "kitchen",
                            question_type: "definition",
                            question: "What is a 'kitchen' used for?",
                            distractors: ["sleeping", "bathing", "playing"],
                            correct_answer: "cooking and preparing food",
                            example_sentence: "Mother is in the kitchen making lunch."
                        },
                        {
                            word: "flower",
                            question_type: "definition",
                            question: "What is a 'flower'?",
                            distractors: ["a type of fruit", "a part of a book", "a kind of animal"],
                            correct_answer: "the colourful part of a plant",
                            example_sentence: "There is a beautiful red flower in the garden."
                        },
                        {
                            word: "ground",
                            question_type: "antonym",
                            question: "What is the opposite of the 'ground'?",
                            distractors: ["floor", "earth", "field"],
                            correct_answer: "sky",
                            example_sentence: "The plane took off and left the ground."
                        },
                        {
                            word: "yellow",
                            question_type: "fill-blank",
                            question: "The sun is bright _____ in the sky.",
                            distractors: ["blue", "green", "red"],
                            correct_answer: "yellow",
                            example_sentence: "She has a pretty yellow dress for the party."
                        },
                        {
                            word: "cried",
                            question_type: "antonym",
                            question: "What is the opposite of 'cried'?",
                            distractors: ["yelled", "shouted", "called"],
                            correct_answer: "laughed",
                            example_sentence: "The baby cried because she was hungry."
                        },
                        {
                            word: "street",
                            question_type: "fill-blank",
                            question: "Wait for the car to pass before you cross the _____.",
                            distractors: ["roof", "wall", "gate"],
                            correct_answer: "street",
                            example_sentence: "Our house is on a very quiet street."
                        }
                    ]
                }
            ]
        },

        // ═══════════════════════════════════════════════════════
        //  SECTION 2 — INTERMEDIATE  (Groups 3–4, Ages 9–10)
        // ═══════════════════════════════════════════════════════
        {
            id: "intermediate",
            title: "Intermediate",
            description: "Building-block words from Schonell Groups 3–4",
            icon: "📚",
            color: "#1E6FB8",
            levels: [
                {
                    id: "inter-1",
                    title: "Level 1",
                    words: [
                        {
                            word: "curious",
                            question_type: "definition",
                            question: "What does 'curious' mean?",
                            distractors: ["frightened", "careless", "impolite"],
                            correct_answer: "eager to know or learn something",
                            example_sentence: "The curious child kept asking questions about the stars."
                        },
                        {
                            word: "danger",
                            question_type: "synonym",
                            question: "Which word means the same as 'danger'?",
                            distractors: ["safety", "comfort", "joy"],
                            correct_answer: "risk",
                            example_sentence: "The sign warned of danger ahead on the mountain path."
                        },
                        {
                            word: "punish",
                            question_type: "antonym",
                            question: "What is the opposite of 'punish'?",
                            distractors: ["scold", "blame", "hurt"],
                            correct_answer: "reward",
                            example_sentence: "The teacher decided to punish the students who cheated."
                        },
                        {
                            word: "gather",
                            question_type: "synonym",
                            question: "Which word means the same as 'gather'?",
                            distractors: ["scatter", "throw", "drop"],
                            correct_answer: "collect",
                            example_sentence: "The villagers gather firewood before the rainy season."
                        },
                        {
                            word: "journey",
                            question_type: "fill-blank",
                            question: "The _____ from Freetown to Bo takes about three hours.",
                            distractors: ["holiday", "visit", "stay"],
                            correct_answer: "journey",
                            example_sentence: "They enjoyed every moment of their long journey."
                        },
                        {
                            word: "polite",
                            question_type: "antonym",
                            question: "What is the opposite of 'polite'?",
                            distractors: ["kind", "gentle", "friendly"],
                            correct_answer: "rude",
                            example_sentence: "It is polite to say 'thank you' when someone helps you."
                        },
                        {
                            word: "remain",
                            question_type: "synonym",
                            question: "Which word means the same as 'remain'?",
                            distractors: ["leave", "go", "move"],
                            correct_answer: "stay",
                            example_sentence: "Please remain seated until the bell rings."
                        },
                        {
                            word: "prevent",
                            question_type: "definition",
                            question: "What does 'prevent' mean?",
                            distractors: ["to cause something", "to repeat something", "to enjoy something"],
                            correct_answer: "to stop something from happening",
                            example_sentence: "Washing your hands can help prevent illness."
                        },
                        {
                            word: "silent",
                            question_type: "synonym",
                            question: "Which word means the same as 'silent'?",
                            distractors: ["loud", "noisy", "busy"],
                            correct_answer: "quiet",
                            example_sentence: "The library was completely silent during the exam."
                        },
                        {
                            word: "destroy",
                            question_type: "fill-blank",
                            question: "The fire could _____ the entire forest.",
                            distractors: ["create", "protect", "build"],
                            correct_answer: "destroy",
                            example_sentence: "Heavy storms can destroy crops and homes."
                        }
                    ]
                },
                {
                    id: "inter-2",
                    title: "Level 2",
                    words: [
                        {
                            word: "stranger",
                            question_type: "definition",
                            question: "What is a 'stranger'?",
                            distractors: ["a close friend", "a family member", "a classmate"],
                            correct_answer: "a person you do not know",
                            example_sentence: "Never follow a stranger, even if they seem friendly."
                        },
                        {
                            word: "capture",
                            question_type: "synonym",
                            question: "Which word means the same as 'capture'?",
                            distractors: ["release", "free", "escape"],
                            correct_answer: "catch",
                            example_sentence: "The police managed to capture the thief."
                        },
                        {
                            word: "distant",
                            question_type: "antonym",
                            question: "What is the opposite of 'distant'?",
                            distractors: ["separate", "apart", "absent"],
                            correct_answer: "close",
                            example_sentence: "The distant mountains looked blue in the morning haze."
                        },
                        {
                            word: "vanish",
                            question_type: "synonym",
                            question: "Which word means the same as 'vanish'?",
                            distractors: ["appear", "arrive", "return"],
                            correct_answer: "disappear",
                            example_sentence: "The magician made the rabbit vanish from the hat."
                        },
                        {
                            word: "comfort",
                            question_type: "fill-blank",
                            question: "She tried to _____ the crying child.",
                            distractors: ["frighten", "ignore", "scold"],
                            correct_answer: "comfort",
                            example_sentence: "A warm blanket can bring comfort on a cold night."
                        },
                        {
                            word: "admire",
                            question_type: "definition",
                            question: "What does 'admire' mean?",
                            distractors: ["to dislike strongly", "to forget about", "to argue with"],
                            correct_answer: "to look at with respect and approval",
                            example_sentence: "I admire people who work hard to help their community."
                        },
                        {
                            word: "difficult",
                            question_type: "antonym",
                            question: "What is the opposite of 'difficult'?",
                            distractors: ["hard", "tough", "tricky"],
                            correct_answer: "easy",
                            example_sentence: "The maths problem was too difficult for most pupils."
                        },
                        {
                            word: "honest",
                            question_type: "antonym",
                            question: "What is the opposite of 'honest'?",
                            distractors: ["truthful", "fair", "open"],
                            correct_answer: "dishonest",
                            example_sentence: "An honest person always tells the truth."
                        },
                        {
                            word: "discover",
                            question_type: "synonym",
                            question: "Which word means the same as 'discover'?",
                            distractors: ["lose", "hide", "cover"],
                            correct_answer: "find",
                            example_sentence: "Scientists discover new things about the world every day."
                        },
                        {
                            word: "escape",
                            question_type: "fill-blank",
                            question: "The bird managed to _____ from the cage.",
                            distractors: ["enter", "remain", "arrive"],
                            correct_answer: "escape",
                            example_sentence: "The prisoners planned their escape for weeks."
                        },
                        {
                            word: "prevent",
                            question_type: "synonym",
                            question: "Which word means the same as 'prevent'?",
                            distractors: ["cause", "start", "allow"],
                            correct_answer: "stop",
                            example_sentence: "Seatbelts help prevent injuries in car accidents."
                        },
                        {
                            word: "silent",
                            question_type: "antonym",
                            question: "What is the opposite of 'silent'?",
                            distractors: ["quiet", "still", "calm"],
                            correct_answer: "noisy",
                            example_sentence: "The classroom was silent while the children were writing."
                        },
                        {
                            word: "destroy",
                            question_type: "antonym",
                            question: "What is the opposite of 'destroy'?",
                            distractors: ["break", "damage", "ruin"],
                            correct_answer: "create",
                            example_sentence: "Fire can destroy a house in a very short time."
                        },
                        {
                            word: "forgive",
                            question_type: "synonym",
                            question: "Which word means the same as 'forgive'?",
                            distractors: ["blame", "punish", "scold"],
                            correct_answer: "pardon",
                            example_sentence: "It is good to forgive those who have hurt you."
                        },
                        {
                            word: "punish",
                            question_type: "antonym",
                            question: "What is the opposite of 'punish'?",
                            distractors: ["scold", "correct", "hurt"],
                            correct_answer: "reward",
                            example_sentence: "The teacher decided to punish the boy for being late."
                        },
                        {
                            word: "moment",
                            question_type: "definition",
                            question: "What is a 'moment'?",
                            distractors: ["a long year", "a whole day", "a full hour"],
                            correct_answer: "a very short period of time",
                            example_sentence: "Please wait a moment while I find my keys."
                        },
                        {
                            word: "gentle",
                            question_type: "antonym",
                            question: "What is the opposite of 'gentle'?",
                            distractors: ["kind", "soft", "mild"],
                            correct_answer: "rough",
                            example_sentence: "He was very gentle with the tiny kitten."
                        },
                        {
                            word: "useful",
                            question_type: "antonym",
                            question: "What is the opposite of 'useful'?",
                            distractors: ["helpful", "handy", "valuable"],
                            correct_answer: "useless",
                            example_sentence: "A dictionary is a very useful book to have."
                        },
                        {
                            word: "quickly",
                            question_type: "antonym",
                            question: "What is the opposite of 'quickly'?",
                            distractors: ["fast", "soon", "early"],
                            correct_answer: "slowly",
                            example_sentence: "The rabbit ran quickly across the road."
                        },
                        {
                            word: "pardon",
                            question_type: "synonym",
                            question: "Which word means the same as 'pardon'?",
                            distractors: ["accuse", "attack", "ignore"],
                            correct_answer: "forgive",
                            example_sentence: "The governor decided to pardon the prisoner."
                        }
                    ]
                },
                {
                    id: "inter-3",
                    title: "Level 3",
                    words: [
                        {
                            word: "brilliant",
                            question_type: "synonym",
                            question: "Which word means the same as 'brilliant'?",
                            distractors: ["dull", "dim", "dark"],
                            correct_answer: "bright",
                            example_sentence: "The student gave a brilliant answer in class."
                        },
                        {
                            word: "serious",
                            question_type: "antonym",
                            question: "What is the opposite of 'serious'?",
                            distractors: ["important", "grave", "stern"],
                            correct_answer: "playful",
                            example_sentence: "This is a serious matter that requires our attention."
                        },
                        {
                            word: "merchant",
                            question_type: "definition",
                            question: "What is a 'merchant'?",
                            distractors: ["a soldier", "a farmer", "a doctor"],
                            correct_answer: "a person who buys and sells goods",
                            example_sentence: "The merchant sold beautiful cloth at the weekly market."
                        },
                        {
                            word: "wealthy",
                            question_type: "antonym",
                            question: "What is the opposite of 'wealthy'?",
                            distractors: ["rich", "prosperous", "comfortable"],
                            correct_answer: "poor",
                            example_sentence: "The wealthy businessman donated money to the school."
                        },
                        {
                            word: "prepare",
                            question_type: "fill-blank",
                            question: "We must _____ well for the NPSE examination.",
                            distractors: ["forget", "ignore", "waste"],
                            correct_answer: "prepare",
                            example_sentence: "Mother asked us to prepare the table for dinner."
                        },
                        {
                            word: "ancient",
                            question_type: "antonym",
                            question: "What is the opposite of 'ancient'?",
                            distractors: ["old", "historical", "classic"],
                            correct_answer: "modern",
                            example_sentence: "The ancient castle has stood for over five hundred years."
                        },
                        {
                            word: "obey",
                            question_type: "antonym",
                            question: "What is the opposite of 'obey'?",
                            distractors: ["follow", "listen", "agree"],
                            correct_answer: "disobey",
                            example_sentence: "Good children obey their parents and teachers."
                        },
                        {
                            word: "famous",
                            question_type: "synonym",
                            question: "Which word means the same as 'famous'?",
                            distractors: ["unknown", "hidden", "ordinary"],
                            correct_answer: "well-known",
                            example_sentence: "Sierra Leone is famous for its beautiful beaches."
                        },
                        {
                            word: "protect",
                            question_type: "fill-blank",
                            question: "The mother bird will _____ her eggs from predators.",
                            distractors: ["attack", "abandon", "harm"],
                            correct_answer: "protect",
                            example_sentence: "We must protect the environment for future generations."
                        },
                        {
                            word: "certain",
                            question_type: "synonym",
                            question: "Which word means the same as 'certain'?",
                            distractors: ["unsure", "doubtful", "confused"],
                            correct_answer: "sure",
                            example_sentence: "I am certain that the answer is correct."
                        },
                        {
                            word: "explain",
                            question_type: "definition",
                            question: "What does it mean to 'explain'?",
                            distractors: ["to hide something", "to forget something", "to argue about something"],
                            correct_answer: "to make something clear and easy to understand",
                            example_sentence: "The teacher will explain how to solve the problem."
                        },
                        {
                            word: "expect",
                            question_type: "synonym",
                            question: "Which word means the same as 'expect'?",
                            distractors: ["doubt", "fear", "ignore"],
                            correct_answer: "anticipate",
                            example_sentence: "We expect our visitors to arrive at noon."
                        },
                        {
                            word: "island",
                            question_type: "definition",
                            question: "What is an 'island'?",
                            distractors: ["a large forest", "a high mountain", "a dry desert"],
                            correct_answer: "a piece of land surrounded by water",
                            example_sentence: "Bonthe is located on a beautiful island."
                        },
                        {
                            word: "twelve",
                            question_type: "fill-blank",
                            question: "There are _____ months in one year.",
                            distractors: ["seven", "ten", "twenty"],
                            correct_answer: "twelve",
                            example_sentence: "She is twelve years old today."
                        },
                        {
                            word: "hundred",
                            question_type: "fill-blank",
                            question: "Ten times ten is equal to one _____.",
                            distractors: ["thousand", "million", "dozen"],
                            correct_answer: "hundred",
                            example_sentence: "There were over a hundred people at the party."
                        },
                        {
                            word: "thousand",
                            question_type: "fill-blank",
                            question: "Ten times one hundred is one _____.",
                            distractors: ["million", "billion", "trillion"],
                            correct_answer: "thousand",
                            example_sentence: "The stadium can hold ten thousand people."
                        },
                        {
                            word: "language",
                            question_type: "definition",
                            question: "What is a 'language'?",
                            distractors: ["a type of food", "a kind of dance", "a school uniform"],
                            correct_answer: "the system of words used by a country",
                            example_sentence: "English is the official language of Sierra Leone."
                        },
                        {
                            word: "English",
                            question_type: "fill-blank",
                            question: "We study _____ to improve our speaking and writing.",
                            distractors: ["Maths", "Science", "History"],
                            correct_answer: "English",
                            example_sentence: "He is learning to speak English very well."
                        },
                        {
                            word: "message",
                            question_type: "definition",
                            question: "What is a 'message'?",
                            distractors: ["a heavy bag", "a long road", "a large building"],
                            correct_answer: "a piece of information sent to someone",
                            example_sentence: "I left a message for my father on the table."
                        },
                        {
                            word: "victory",
                            question_type: "antonym",
                            question: "What is the opposite of 'victory'?",
                            distractors: ["success", "triumph", "win"],
                            correct_answer: "defeat",
                            example_sentence: "The team celebrated their victory with a party."
                        },
                        {
                            word: "adventure",
                            question_type: "definition",
                            question: "What is an 'adventure'?",
                            distractors: ["a boring day", "a quiet sleep", "a normal walk"],
                            correct_answer: "an exciting or unusual experience",
                            example_sentence: "The children had a great adventure in the woods."
                        },
                        {
                            word: "holiday",
                            question_type: "fill-blank",
                            question: "We are going on _____ to visit our grandmother.",
                            distractors: ["school", "work", "hospital"],
                            correct_answer: "holiday",
                            example_sentence: "Christmas is a very happy holiday for many families."
                        },
                        {
                            word: "beautiful",
                            question_type: "antonym",
                            question: "What is the opposite of 'beautiful'?",
                            distractors: ["pretty", "lovely", "attractive"],
                            correct_answer: "ugly",
                            example_sentence: "The sunset over the ocean was beautiful."
                        },
                        {
                            word: "distance",
                            question_type: "definition",
                            question: "What is 'distance'?",
                            distractors: ["the weight of an object", "the price of something", "the color of the sky"],
                            correct_answer: "the amount of space between two places",
                            example_sentence: "The distance between the two towns is ten miles."
                        },
                        {
                            word: "correct",
                            question_type: "antonym",
                            question: "What is the opposite of 'correct'?",
                            distractors: ["right", "true", "accurate"],
                            correct_answer: "incorrect",
                            example_sentence: "Please make sure your answers are correct."
                        },
                        {
                            word: "discuss",
                            question_type: "definition",
                            question: "What does it mean to 'discuss'?",
                            distractors: ["to fight about something", "to forget something", "to ignore someone"],
                            correct_answer: "to talk about something with others",
                            example_sentence: "We will discuss the new rules in our next meeting."
                        },
                        {
                            word: "delay",
                            question_type: "antonym",
                            question: "What is the opposite of 'delay'?",
                            distractors: ["wait", "stop", "rest"],
                            correct_answer: "hurry",
                            example_sentence: "Heavy rain caused a delay in the start of the match."
                        },
                        {
                            word: "breath",
                            question_type: "fill-blank",
                            question: "Take a deep _____ before you start your race.",
                            distractors: ["step", "jump", "walk"],
                            correct_answer: "breath",
                            example_sentence: "He was out of breath after running up the hill."
                        },
                        {
                            word: "thought",
                            question_type: "synonym",
                            question: "Which word means the same as 'thought'?",
                            distractors: ["dream", "wish", "hope"],
                            correct_answer: "idea",
                            example_sentence: "An interesting thought came into his mind."
                        },
                        {
                            word: "understand",
                            question_type: "definition",
                            question: "What does it mean to 'understand'?",
                            distractors: ["to be confused", "to forget quickly", "to dislike strongly"],
                            correct_answer: "to know the meaning of something",
                            example_sentence: "Do you understand the lesson the teacher gave?"
                        }
                    ]
                }
            ]
        },

        // ═══════════════════════════════════════════════════════
        //  SECTION 3 — ADVANCED  (Groups 5–6, Ages 11–12)
        // ═══════════════════════════════════════════════════════
        {
            id: "advanced",
            title: "Advanced",
            description: "Challenging words from Schonell Groups 5–6",
            icon: "🏆",
            color: "#9333ea",
            levels: [
                {
                    id: "adv-1",
                    title: "Level 1",
                    words: [
                        {
                            word: "courage",
                            question_type: "synonym",
                            question: "Which word means the same as 'courage'?",
                            distractors: ["cowardice", "fear", "worry"],
                            correct_answer: "bravery",
                            example_sentence: "It takes great courage to stand up for what is right."
                        },
                        {
                            word: "generous",
                            question_type: "antonym",
                            question: "What is the opposite of 'generous'?",
                            distractors: ["kind", "giving", "helpful"],
                            correct_answer: "selfish",
                            example_sentence: "The generous woman shared her food with the hungry children."
                        },
                        {
                            word: "obstacle",
                            question_type: "definition",
                            question: "What is an 'obstacle'?",
                            distractors: ["a smooth path", "a helping hand", "an open door"],
                            correct_answer: "something that blocks your way",
                            example_sentence: "Hard work can help you overcome any obstacle."
                        },
                        {
                            word: "persuade",
                            question_type: "synonym",
                            question: "Which word means the same as 'persuade'?",
                            distractors: ["force", "trick", "threaten"],
                            correct_answer: "convince",
                            example_sentence: "She tried to persuade her friend to join the debate team."
                        },
                        {
                            word: "sufficient",
                            question_type: "synonym",
                            question: "Which word means the same as 'sufficient'?",
                            distractors: ["too little", "lacking", "scarce"],
                            correct_answer: "enough",
                            example_sentence: "We have sufficient food to last the whole week."
                        },
                        {
                            word: "temporary",
                            question_type: "antonym",
                            question: "What is the opposite of 'temporary'?",
                            distractors: ["short", "brief", "quick"],
                            correct_answer: "permanent",
                            example_sentence: "The workers built a temporary shelter after the storm."
                        },
                        {
                            word: "neglect",
                            question_type: "fill-blank",
                            question: "Do not _____ your studies or you may fail.",
                            distractors: ["enjoy", "complete", "begin"],
                            correct_answer: "neglect",
                            example_sentence: "If you neglect your health, you will become ill."
                        },
                        {
                            word: "fortunate",
                            question_type: "synonym",
                            question: "Which word means the same as 'fortunate'?",
                            distractors: ["unlucky", "poor", "sad"],
                            correct_answer: "lucky",
                            example_sentence: "We are fortunate to have clean water and good food."
                        },
                        {
                            word: "surrender",
                            question_type: "definition",
                            question: "What does 'surrender' mean?",
                            distractors: ["to fight harder", "to run away", "to stand still"],
                            correct_answer: "to give up or stop fighting",
                            example_sentence: "The soldiers had no choice but to surrender."
                        },
                        {
                            word: "peculiar",
                            question_type: "synonym",
                            question: "Which word means the same as 'peculiar'?",
                            distractors: ["normal", "common", "regular"],
                            correct_answer: "strange",
                            example_sentence: "There was a peculiar smell coming from the kitchen."
                        }
                    ]
                },
                {
                    id: "adv-2",
                    title: "Level 2",
                    words: [
                        {
                            word: "possess",
                            question_type: "synonym",
                            question: "Which word means the same as 'possess'?",
                            distractors: ["borrow", "steal", "lend"],
                            correct_answer: "own",
                            example_sentence: "She was lucky to possess such a fine collection of books."
                        },
                        {
                            word: "ridiculous",
                            question_type: "synonym",
                            question: "Which word means the same as 'ridiculous'?",
                            distractors: ["clever", "sensible", "wise"],
                            correct_answer: "absurd",
                            example_sentence: "The idea of a flying elephant is quite ridiculous."
                        },
                        {
                            word: "innocent",
                            question_type: "antonym",
                            question: "What is the opposite of 'innocent'?",
                            distractors: ["pure", "harmless", "clean"],
                            correct_answer: "guilty",
                            example_sentence: "The court found the man innocent of all charges."
                        },
                        {
                            word: "immediately",
                            question_type: "definition",
                            question: "What does 'immediately' mean?",
                            distractors: ["after a long wait", "maybe later", "sometime next week"],
                            correct_answer: "at once, without any delay",
                            example_sentence: "The ambulance arrived immediately after the call."
                        },
                        {
                            word: "complain",
                            question_type: "fill-blank",
                            question: "If the food is cold, you should _____ to the waiter.",
                            distractors: ["whisper", "agree", "praise"],
                            correct_answer: "complain",
                            example_sentence: "People complain when the bus arrives late."
                        },
                        {
                            word: "reliable",
                            question_type: "definition",
                            question: "What does 'reliable' mean?",
                            distractors: ["often late", "hard to trust", "easy to break"],
                            correct_answer: "able to be trusted or depended on",
                            example_sentence: "A reliable friend is always there when you need them."
                        },
                        {
                            word: "triumph",
                            question_type: "antonym",
                            question: "What is the opposite of 'triumph'?",
                            distractors: ["victory", "success", "glory"],
                            correct_answer: "defeat",
                            example_sentence: "The team celebrated their triumph in the football final."
                        },
                        {
                            word: "abundant",
                            question_type: "synonym",
                            question: "Which word means the same as 'abundant'?",
                            distractors: ["scarce", "rare", "little"],
                            correct_answer: "plentiful",
                            example_sentence: "Sierra Leone has abundant natural resources."
                        },
                        {
                            word: "deliberate",
                            question_type: "antonym",
                            question: "What is the opposite of 'deliberate'?",
                            distractors: ["planned", "careful", "intended"],
                            correct_answer: "accidental",
                            example_sentence: "It was a deliberate act, not an accident."
                        },
                        {
                            word: "succeed",
                            question_type: "fill-blank",
                            question: "If you study hard, you will _____ in your exams.",
                            distractors: ["struggle", "worry", "complain"],
                            correct_answer: "succeed",
                            example_sentence: "She believed she would succeed if she never gave up."
                        },
                        {
                            word: "industry",
                            question_type: "definition",
                            question: "What is an 'industry'?",
                            distractors: ["a single shop", "a small garden", "a quiet home"],
                            correct_answer: "the production of goods in factories",
                            example_sentence: "The fishing industry is very important for our country."
                        },
                        {
                            word: "increase",
                            question_type: "antonym",
                            question: "What is the opposite of 'increase'?",
                            distractors: ["grow", "add", "raise"],
                            correct_answer: "decrease",
                            example_sentence: "We hope to increase the number of books in our library."
                        },
                        {
                            word: "gradual",
                            question_type: "antonym",
                            question: "What is the opposite of 'gradual'?",
                            distractors: ["slow", "steady", "gentle"],
                            correct_answer: "sudden",
                            example_sentence: "There has been a gradual improvement in his handwriting."
                        },
                        {
                            word: "separate",
                            question_type: "antonym",
                            question: "What is the opposite of 'separate'?",
                            distractors: ["divide", "split", "part"],
                            correct_answer: "join",
                            example_sentence: "The two friends had to separate when they went to different schools."
                        },
                        {
                            word: "regular",
                            question_type: "antonym",
                            question: "What is the opposite of 'regular'?",
                            distractors: ["normal", "common", "usual"],
                            correct_answer: "irregular",
                            example_sentence: "Exercise is more effective when it is done on a regular basis."
                        },
                        {
                            word: "popular",
                            question_type: "antonym",
                            question: "What is the opposite of 'popular'?",
                            distractors: ["famous", "liked", "known"],
                            correct_answer: "unpopular",
                            example_sentence: "Football is the most popular sport in Sierra Leone."
                        },
                        {
                            word: "vinegar",
                            question_type: "fill-blank",
                            question: "We use _____ and oil to make a salad dressing.",
                            distractors: ["sugar", "milk", "butter"],
                            correct_answer: "vinegar",
                            example_sentence: "Vinegar has a very sharp and sour taste."
                        },
                        {
                            word: "flourish",
                            question_type: "synonym",
                            question: "Which word means the same as 'flourish'?",
                            distractors: ["die", "fade", "fail"],
                            correct_answer: "thrive",
                            example_sentence: "Plants flourish when they get enough water and sunlight."
                        },
                        {
                            word: "victim",
                            question_type: "definition",
                            question: "What is a 'victim'?",
                            distractors: ["a person who wins a race", "a person who tells a joke", "a person who buys a car"],
                            correct_answer: "a person harmed as a result of a crime or accident",
                            example_sentence: "The victim of the theft reported the matter to the police."
                        },
                        {
                            word: "calendar",
                            question_type: "definition",
                            question: "What is a 'calendar' used for?",
                            distractors: ["measuring weight", "counting money", "checking the temperature"],
                            correct_answer: "showing the days, weeks, and months of the year",
                            example_sentence: "I marked the date of the exam on my calendar."
                        }
                    ]
                },
                {
                    id: "adv-3",
                    title: "Level 3",
                    words: [
                        {
                            word: "appreciate",
                            question_type: "definition",
                            question: "What does 'appreciate' mean?",
                            distractors: ["to ignore completely", "to criticise harshly", "to forget quickly"],
                            correct_answer: "to understand the value or to be grateful",
                            example_sentence: "I appreciate all the help you gave me with my revision."
                        },
                        {
                            word: "prejudice",
                            question_type: "definition",
                            question: "What does 'prejudice' mean?",
                            distractors: ["kindness to all", "fair treatment", "careful thinking"],
                            correct_answer: "an unfair opinion formed without knowing the facts",
                            example_sentence: "Prejudice against others because of their background is wrong."
                        },
                        {
                            word: "suspicious",
                            question_type: "synonym",
                            question: "Which word means the same as 'suspicious'?",
                            distractors: ["trusting", "confident", "certain"],
                            correct_answer: "doubtful",
                            example_sentence: "The detective became suspicious of the man's story."
                        },
                        {
                            word: "extraordinary",
                            question_type: "antonym",
                            question: "What is the opposite of 'extraordinary'?",
                            distractors: ["amazing", "remarkable", "incredible"],
                            correct_answer: "ordinary",
                            example_sentence: "The sunset that evening was truly extraordinary."
                        },
                        {
                            word: "recommend",
                            question_type: "fill-blank",
                            question: "I _____ this book to anyone preparing for the NPSE.",
                            distractors: ["forbid", "dislike", "refuse"],
                            correct_answer: "recommend",
                            example_sentence: "The teacher would recommend extra reading for the holidays."
                        },
                        {
                            word: "permanent",
                            question_type: "definition",
                            question: "What does 'permanent' mean?",
                            distractors: ["lasting a short time", "changing often", "moving around"],
                            correct_answer: "lasting forever or for a very long time",
                            example_sentence: "The scar on his knee is permanent."
                        },
                        {
                            word: "conceited",
                            question_type: "synonym",
                            question: "Which word means the same as 'conceited'?",
                            distractors: ["humble", "shy", "modest"],
                            correct_answer: "vain",
                            example_sentence: "A conceited person thinks they are better than everyone else."
                        },
                        {
                            word: "persevere",
                            question_type: "fill-blank",
                            question: "You must _____ even when the work is hard.",
                            distractors: ["quit", "stop", "rest"],
                            correct_answer: "persevere",
                            example_sentence: "Champions persevere through challenges and never give up."
                        },
                        {
                            word: "essential",
                            question_type: "synonym",
                            question: "Which word means the same as 'essential'?",
                            distractors: ["optional", "extra", "minor"],
                            correct_answer: "necessary",
                            example_sentence: "Water is essential for all living things."
                        },
                        {
                            word: "responsibility",
                            question_type: "definition",
                            question: "What is 'responsibility'?",
                            distractors: ["something you can ignore", "a game to play", "a gift from a friend"],
                            correct_answer: "a duty or something you are expected to do",
                            example_sentence: "Taking care of the class pet is our shared responsibility."
                        },
                        {
                            word: "curious",
                            question_type: "synonym",
                            question: "Which word means the same as 'curious'?",
                            distractors: ["bored", "certain", "knowing"],
                            correct_answer: "inquisitive",
                            example_sentence: "The curious monkey wanted to see what was in the box."
                        },
                        {
                            word: "gorgeous",
                            question_type: "synonym",
                            question: "Which word means the same as 'gorgeous'?",
                            distractors: ["ugly", "plain", "dull"],
                            correct_answer: "beautiful",
                            example_sentence: "She wore a gorgeous gown to the award ceremony."
                        },
                        {
                            word: "immediate",
                            question_type: "antonym",
                            question: "What is the opposite of 'immediate'?",
                            distractors: ["quick", "fast", "sudden"],
                            correct_answer: "delayed",
                            example_sentence: "The doctor provided immediate care to the patient."
                        },
                        {
                            word: "individual",
                            question_type: "definition",
                            question: "What does 'individual' mean?",
                            distractors: ["a large group", "a whole team", "a complete set"],
                            correct_answer: "single or separate",
                            example_sentence: "Each individual student must complete their own assignment."
                        },
                        {
                            word: "interfere",
                            question_type: "definition",
                            question: "What does it mean to 'interfere'?",
                            distractors: ["to help someone", "to support others", "to listen quietly"],
                            correct_answer: "to get involved in something without being asked",
                            example_sentence: "It is not wise to interfere in other people's arguments."
                        },
                        {
                            word: "interpret",
                            question_type: "definition",
                            question: "What does it mean to 'interpret'?",
                            distractors: ["to ignore a message", "to hide the truth", "to forget the meaning"],
                            correct_answer: "to explain the meaning of something",
                            example_sentence: "He was asked to interpret the poem for the rest of the class."
                        },
                        {
                            word: "muscle",
                            question_type: "fill-blank",
                            question: "He pulled a _____ in his leg while running the race.",
                            distractors: ["bone", "skin", "hair"],
                            correct_answer: "muscle",
                            example_sentence: "Regular exercise helps to build strong muscles."
                        },
                        {
                            word: "neighbor",
                            question_type: "definition",
                            question: "Who is a 'neighbor'?",
                            distractors: ["a person from another country", "a person you have never met", "a person who lives far away"],
                            correct_answer: "a person who lives next door or near you",
                            example_sentence: "Our neighbor kindly offered to water our plants while we were away."
                        },
                        {
                            word: "occupy",
                            question_type: "synonym",
                            question: "Which word means the same as 'occupy'?",
                            distractors: ["leave", "exit", "empty"],
                            correct_answer: "fill",
                            example_sentence: "The new library will occupy the old school building."
                        },
                        {
                            word: "occur",
                            question_type: "synonym",
                            question: "Which word means the same as 'occur'?",
                            distractors: ["stop", "finish", "end"],
                            correct_answer: "happen",
                            example_sentence: "Earthquakes can occur without any warning."
                        },
                        {
                            word: "opportunity",
                            question_type: "definition",
                            question: "What is an 'opportunity'?",
                            distractors: ["a major problem", "a heavy burden", "a complete failure"],
                            correct_answer: "a set of circumstances that makes it possible to do something",
                            example_sentence: "Studying hard gives you the opportunity to have a great career."
                        },
                        {
                            word: "parliament",
                            question_type: "definition",
                            question: "What is the 'parliament'?",
                            distractors: ["a type of school", "a kind of hospital", "a large market"],
                            correct_answer: "the group of people who make the laws for a country",
                            example_sentence: "The members of parliament debated the new education bill."
                        },
                        {
                            word: "physical",
                            question_type: "antonym",
                            question: "What is the opposite of 'physical'?",
                            distractors: ["body", "real", "solid"],
                            correct_answer: "mental",
                            example_sentence: "Physical education is just as important as classroom learning."
                        },
                        {
                            word: "privilege",
                            question_type: "definition",
                            question: "What is a 'privilege'?",
                            distractors: ["a common right", "a standard rule", "a basic law"],
                            correct_answer: "a special right or advantage granted to a person",
                            example_sentence: "It was a privilege to meet the president of the country."
                        },
                        {
                            word: "rhythm",
                            question_type: "definition",
                            question: "What is 'rhythm'?",
                            distractors: ["a loud noise", "a single note", "a bright color"],
                            correct_answer: "a strong, regular, repeated pattern of movement or sound",
                            example_sentence: "The dancers moved in perfect rhythm with the drum."
                        },
                        {
                            word: "secretary",
                            question_type: "definition",
                            question: "What does a 'secretary' do?",
                            distractors: ["cooks food", "drives a bus", "builds houses"],
                            correct_answer: "handles correspondence and keeps records",
                            example_sentence: "The school secretary handles all the student records."
                        },
                        {
                            word: "sufficient",
                            question_type: "antonym",
                            question: "What is the opposite of 'sufficient'?",
                            distractors: ["enough", "plenty", "extra"],
                            correct_answer: "insufficient",
                            example_sentence: "We have sufficient evidence to prove the case."
                        },
                        {
                            word: "temperature",
                            question_type: "definition",
                            question: "What does 'temperature' measure?",
                            distractors: ["weight", "distance", "speed"],
                            correct_answer: "how hot or cold something is",
                            example_sentence: "The nurse used a thermometer to check my temperature."
                        },
                        {
                            word: "variety",
                            question_type: "synonym",
                            question: "Which word means the same as 'variety'?",
                            distractors: ["sameness", "one type", "single kind"],
                            correct_answer: "diversity",
                            example_sentence: "There is a wide variety of tropical fruits in the market."
                        },
                        {
                            word: "witness",
                            question_type: "definition",
                            question: "Who is a 'witness'?",
                            distractors: ["a person who heard a rumor", "a person who read about it", "a person who was sleeping"],
                            correct_answer: "a person who sees an event take place",
                            example_sentence: "The witness gave a clear description of the accident."
                        }
                    ]
                }
            ]
        }
    ]
};

export default spellingGameData;
