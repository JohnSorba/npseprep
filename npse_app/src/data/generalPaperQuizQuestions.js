// General Paper Quiz Questions – NPSE MBSSE Class 6 Syllabus
// 150 MCQs | Ratio → Social Studies 45, Science 30, Home Economics 30, Ag Science 30, PHE 15

const generalPaperQuizQuestions = [

    // ================================================================
    //  SOCIAL STUDIES (45 Questions — 9 units × 5 each)
    // ================================================================

    // ===== SS Unit 1: Sierra Leone and Her Immediate Neighbours =====
    {
        id: 'gp-q1', unit: 'ss-unit-1', subject: 'Social Studies',
        topic: 'Sierra Leone and Her Immediate Neighbours', difficulty: 'easy',
        question: 'Which two countries share borders with Sierra Leone?',
        options: [
            { label: 'A', text: 'Ghana and Nigeria' }, { label: 'B', text: 'Guinea and Liberia' },
            { label: 'C', text: 'Senegal and Mali' }, { label: 'D', text: 'Ivory Coast and Guinea' },
            { label: 'E', text: 'Liberia and Ghana' }
        ],
        correctOption: 'B',
        explanation: 'Sierra Leone shares its northern/eastern border with Guinea and its southern border with Liberia.'
    },
    {
        id: 'gp-q2', unit: 'ss-unit-1', subject: 'Social Studies',
        topic: 'Sierra Leone and Her Immediate Neighbours', difficulty: 'easy',
        question: 'What is the capital city of Guinea?',
        options: [
            { label: 'A', text: 'Monrovia' }, { label: 'B', text: 'Freetown' },
            { label: 'C', text: 'Conakry' }, { label: 'D', text: 'Dakar' },
            { label: 'E', text: 'Abuja' }
        ],
        correctOption: 'C',
        explanation: 'Conakry is the capital of Guinea. Monrovia is the capital of Liberia.'
    },
    {
        id: 'gp-q3', unit: 'ss-unit-1', subject: 'Social Studies',
        topic: 'Sierra Leone and Her Immediate Neighbours', difficulty: 'easy',
        question: 'What is the capital city of Liberia?',
        options: [
            { label: 'A', text: 'Conakry' }, { label: 'B', text: 'Freetown' },
            { label: 'C', text: 'Accra' }, { label: 'D', text: 'Monrovia' },
            { label: 'E', text: 'Abidjan' }
        ],
        correctOption: 'D',
        explanation: 'Monrovia is the capital of Liberia, named after US President James Monroe.'
    },
    {
        id: 'gp-q4', unit: 'ss-unit-1', subject: 'Social Studies',
        topic: 'Sierra Leone and Her Immediate Neighbours', difficulty: 'easy',
        question: 'Which body of water borders Sierra Leone to the west?',
        options: [
            { label: 'A', text: 'Pacific Ocean' }, { label: 'B', text: 'Indian Ocean' },
            { label: 'C', text: 'Mediterranean Sea' }, { label: 'D', text: 'Atlantic Ocean' },
            { label: 'E', text: 'Red Sea' }
        ],
        correctOption: 'D',
        explanation: 'The Atlantic Ocean lies to the west of Sierra Leone.'
    },
    {
        id: 'gp-q5', unit: 'ss-unit-1', subject: 'Social Studies',
        topic: 'Sierra Leone and Her Immediate Neighbours', difficulty: 'medium',
        question: 'Good neighbourly relations between countries help to promote:',
        options: [
            { label: 'A', text: 'War and conflict' }, { label: 'B', text: 'Isolation' },
            { label: 'C', text: 'Peace and trade' }, { label: 'D', text: 'Poverty' },
            { label: 'E', text: 'Corruption' }
        ],
        correctOption: 'C',
        explanation: 'Good relations between neighbours promote peace, trade, and cooperation.'
    },

    // ===== SS Unit 2: Ethnic Groups in Sierra Leone =====
    {
        id: 'gp-q6', unit: 'ss-unit-2', subject: 'Social Studies',
        topic: 'Ethnic Groups in Sierra Leone', difficulty: 'easy',
        question: 'Which is one of the two largest ethnic groups in Sierra Leone?',
        options: [
            { label: 'A', text: 'Yoruba' }, { label: 'B', text: 'Temne' },
            { label: 'C', text: 'Igbo' }, { label: 'D', text: 'Zulu' },
            { label: 'E', text: 'Ashanti' }
        ],
        correctOption: 'B',
        explanation: 'The Temne and Mende are the two largest ethnic groups in Sierra Leone.'
    },
    {
        id: 'gp-q7', unit: 'ss-unit-2', subject: 'Social Studies',
        topic: 'Ethnic Groups in Sierra Leone', difficulty: 'easy',
        question: 'The Mende ethnic group is mainly found in:',
        options: [
            { label: 'A', text: 'The north' }, { label: 'B', text: 'The west' },
            { label: 'C', text: 'The south and east' }, { label: 'D', text: 'Freetown only' },
            { label: 'E', text: 'Guinea' }
        ],
        correctOption: 'C',
        explanation: 'The Mende are mainly found in the southern and eastern parts of Sierra Leone.'
    },
    {
        id: 'gp-q8', unit: 'ss-unit-2', subject: 'Social Studies',
        topic: 'Ethnic Groups in Sierra Leone', difficulty: 'medium',
        question: 'The Limba ethnic group is mainly found in which part of Sierra Leone?',
        options: [
            { label: 'A', text: 'Southern Province' }, { label: 'B', text: 'Eastern Province' },
            { label: 'C', text: 'Western Area' }, { label: 'D', text: 'Northern Province' },
            { label: 'E', text: 'Freetown Peninsula' }
        ],
        correctOption: 'D',
        explanation: 'The Limba people are mainly found in the Northern Province of Sierra Leone.'
    },
    {
        id: 'gp-q9', unit: 'ss-unit-2', subject: 'Social Studies',
        topic: 'Ethnic Groups in Sierra Leone', difficulty: 'medium',
        question: 'Why is national unity important among the different ethnic groups?',
        options: [
            { label: 'A', text: 'It promotes conflict' }, { label: 'B', text: 'It prevents peace' },
            { label: 'C', text: 'It encourages division' }, { label: 'D', text: 'It prevents conflict and promotes development' },
            { label: 'E', text: 'It has no importance' }
        ],
        correctOption: 'D',
        explanation: 'National unity prevents ethnic conflict and promotes peace and national development.'
    },
    {
        id: 'gp-q10', unit: 'ss-unit-2', subject: 'Social Studies',
        topic: 'Ethnic Groups in Sierra Leone', difficulty: 'medium',
        question: 'The Kono people are mainly known for:',
        options: [
            { label: 'A', text: 'Fishing' }, { label: 'B', text: 'Diamond mining' },
            { label: 'C', text: 'Cattle rearing' }, { label: 'D', text: 'Weaving' },
            { label: 'E', text: 'Ship building' }
        ],
        correctOption: 'B',
        explanation: 'The Kono district is well known for diamond mining in Sierra Leone.'
    },

    // ===== SS Unit 3: History of Sierra Leone =====
    {
        id: 'gp-q11', unit: 'ss-unit-3', subject: 'Social Studies',
        topic: 'History of Sierra Leone', difficulty: 'easy',
        question: 'Freetown was originally founded as a settlement for:',
        options: [
            { label: 'A', text: 'Traders' }, { label: 'B', text: 'Soldiers' },
            { label: 'C', text: 'Freed slaves' }, { label: 'D', text: 'Farmers' },
            { label: 'E', text: 'Missionaries' }
        ],
        correctOption: 'C',
        explanation: 'Freetown was established in 1787 as a settlement for freed African slaves.'
    },
    {
        id: 'gp-q12', unit: 'ss-unit-3', subject: 'Social Studies',
        topic: 'History of Sierra Leone', difficulty: 'easy',
        question: 'When did Sierra Leone gain independence?',
        options: [
            { label: 'A', text: 'April 27, 1957' }, { label: 'B', text: 'April 27, 1961' },
            { label: 'C', text: 'October 1, 1960' }, { label: 'D', text: 'March 6, 1957' },
            { label: 'E', text: 'July 26, 1847' }
        ],
        correctOption: 'B',
        explanation: 'Sierra Leone gained independence from Britain on April 27, 1961.'
    },
    {
        id: 'gp-q13', unit: 'ss-unit-3', subject: 'Social Studies',
        topic: 'History of Sierra Leone', difficulty: 'medium',
        question: 'Who was the first Prime Minister of Sierra Leone?',
        options: [
            { label: 'A', text: 'Siaka Stevens' }, { label: 'B', text: 'Ahmad Tejan Kabbah' },
            { label: 'C', text: 'Sir Milton Margai' }, { label: 'D', text: 'Albert Margai' },
            { label: 'E', text: 'Joseph Saidu Momoh' }
        ],
        correctOption: 'C',
        explanation: 'Sir Milton Margai was the first Prime Minister after independence in 1961.'
    },
    {
        id: 'gp-q14', unit: 'ss-unit-3', subject: 'Social Studies',
        topic: 'History of Sierra Leone', difficulty: 'easy',
        question: 'Sierra Leone was colonised by which European country?',
        options: [
            { label: 'A', text: 'France' }, { label: 'B', text: 'Portugal' },
            { label: 'C', text: 'Spain' }, { label: 'D', text: 'Britain' },
            { label: 'E', text: 'Germany' }
        ],
        correctOption: 'D',
        explanation: 'Sierra Leone was a British colony until independence in 1961.'
    },
    {
        id: 'gp-q15', unit: 'ss-unit-3', subject: 'Social Studies',
        topic: 'History of Sierra Leone', difficulty: 'medium',
        question: 'The name "Sierra Leone" means:',
        options: [
            { label: 'A', text: 'Land of rivers' }, { label: 'B', text: 'Lion Mountains' },
            { label: 'C', text: 'Golden Coast' }, { label: 'D', text: 'Green Land' },
            { label: 'E', text: 'Beautiful country' }
        ],
        correctOption: 'B',
        explanation: 'Portuguese explorer Pedro de Sintra named it "Serra Lyoa" (Lion Mountains) in 1462.'
    },

    // ===== SS Unit 4: Sierra Leone After Independence =====
    {
        id: 'gp-q16', unit: 'ss-unit-4', subject: 'Social Studies',
        topic: 'Sierra Leone After Independence', difficulty: 'medium',
        question: 'The civil war in Sierra Leone lasted from:',
        options: [
            { label: 'A', text: '1980 to 1990' }, { label: 'B', text: '1991 to 2002' },
            { label: 'C', text: '1995 to 2005' }, { label: 'D', text: '1985 to 1995' },
            { label: 'E', text: '2000 to 2010' }
        ],
        correctOption: 'B',
        explanation: 'The Sierra Leone civil war lasted 11 years, from 1991 to 2002.'
    },
    {
        id: 'gp-q17', unit: 'ss-unit-4', subject: 'Social Studies',
        topic: 'Sierra Leone After Independence', difficulty: 'hard',
        question: 'Who was the first Executive President of Sierra Leone?',
        options: [
            { label: 'A', text: 'Sir Milton Margai' }, { label: 'B', text: 'Siaka Stevens' },
            { label: 'C', text: 'Ahmad Tejan Kabbah' }, { label: 'D', text: 'Ernest Bai Koroma' },
            { label: 'E', text: 'Albert Margai' }
        ],
        correctOption: 'B',
        explanation: 'Siaka Stevens became the first Executive President when SL became a republic in 1971.'
    },
    {
        id: 'gp-q18', unit: 'ss-unit-4', subject: 'Social Studies',
        topic: 'Sierra Leone After Independence', difficulty: 'medium',
        question: 'What major health crisis affected Sierra Leone in 2014?',
        options: [
            { label: 'A', text: 'Malaria epidemic' }, { label: 'B', text: 'COVID-19' },
            { label: 'C', text: 'Ebola outbreak' }, { label: 'D', text: 'Cholera' },
            { label: 'E', text: 'Yellow fever' }
        ],
        correctOption: 'C',
        explanation: 'The deadly Ebola virus outbreak hit Sierra Leone, Guinea, and Liberia in 2014.'
    },
    {
        id: 'gp-q19', unit: 'ss-unit-4', subject: 'Social Studies',
        topic: 'Sierra Leone After Independence', difficulty: 'easy',
        question: 'What type of government does Sierra Leone practise today?',
        options: [
            { label: 'A', text: 'Monarchy' }, { label: 'B', text: 'Military rule' },
            { label: 'C', text: 'Democracy' }, { label: 'D', text: 'Communism' },
            { label: 'E', text: 'Dictatorship' }
        ],
        correctOption: 'C',
        explanation: 'Sierra Leone is a democratic republic with regular elections.'
    },
    {
        id: 'gp-q20', unit: 'ss-unit-4', subject: 'Social Studies',
        topic: 'Sierra Leone After Independence', difficulty: 'medium',
        question: 'After the civil war, rebuilding the country is called:',
        options: [
            { label: 'A', text: 'Colonisation' }, { label: 'B', text: 'Post-war recovery' },
            { label: 'C', text: 'Industrialisation' }, { label: 'D', text: 'Nationalisation' },
            { label: 'E', text: 'Privatisation' }
        ],
        correctOption: 'B',
        explanation: 'Post-war recovery involves rebuilding infrastructure, institutions, and communities.'
    },

    // ===== SS Unit 5: Civic Education and Citizenship =====
    {
        id: 'gp-q21', unit: 'ss-unit-5', subject: 'Social Studies',
        topic: 'Civic Education and Citizenship', difficulty: 'easy',
        question: 'The three colours on the Sierra Leone flag are:',
        options: [
            { label: 'A', text: 'Red, yellow, green' }, { label: 'B', text: 'Green, white, blue' },
            { label: 'C', text: 'Red, white, blue' }, { label: 'D', text: 'Green, yellow, red' },
            { label: 'E', text: 'Blue, white, black' }
        ],
        correctOption: 'B',
        explanation: 'The SL flag has green (top), white (middle), and blue (bottom) horizontal stripes.'
    },
    {
        id: 'gp-q22', unit: 'ss-unit-5', subject: 'Social Studies',
        topic: 'Civic Education and Citizenship', difficulty: 'medium',
        question: 'The green colour on the Sierra Leone flag represents:',
        options: [
            { label: 'A', text: 'The sea' }, { label: 'B', text: 'Unity and justice' },
            { label: 'C', text: 'Agriculture and natural resources' }, { label: 'D', text: 'Peace' },
            { label: 'E', text: 'Blood of heroes' }
        ],
        correctOption: 'C',
        explanation: 'Green represents agriculture and the country\'s natural resources.'
    },
    {
        id: 'gp-q23', unit: 'ss-unit-5', subject: 'Social Studies',
        topic: 'Civic Education and Citizenship', difficulty: 'easy',
        question: 'Which of these is a RIGHT of a citizen?',
        options: [
            { label: 'A', text: 'Paying taxes' }, { label: 'B', text: 'Obeying laws' },
            { label: 'C', text: 'Right to vote' }, { label: 'D', text: 'Serving in the army' },
            { label: 'E', text: 'Cleaning the community' }
        ],
        correctOption: 'C',
        explanation: 'The right to vote is a fundamental right. Paying taxes and obeying laws are duties.'
    },
    {
        id: 'gp-q24', unit: 'ss-unit-5', subject: 'Social Studies',
        topic: 'Civic Education and Citizenship', difficulty: 'easy',
        question: 'Which of these is a DUTY of a citizen?',
        options: [
            { label: 'A', text: 'Right to education' }, { label: 'B', text: 'Freedom of speech' },
            { label: 'C', text: 'Right to vote' }, { label: 'D', text: 'Paying taxes' },
            { label: 'E', text: 'Right to own property' }
        ],
        correctOption: 'D',
        explanation: 'Paying taxes is a duty (obligation). The others are rights (entitlements).'
    },
    {
        id: 'gp-q25', unit: 'ss-unit-5', subject: 'Social Studies',
        topic: 'Civic Education and Citizenship', difficulty: 'medium',
        question: 'The white colour on the Sierra Leone flag represents:',
        options: [
            { label: 'A', text: 'Agriculture' }, { label: 'B', text: 'The ocean' },
            { label: 'C', text: 'Unity and justice' }, { label: 'D', text: 'Minerals' },
            { label: 'E', text: 'Bravery' }
        ],
        correctOption: 'C',
        explanation: 'White represents unity and justice in Sierra Leone.'
    },

    // ===== SS Unit 6: Government and Democracy =====
    {
        id: 'gp-q26', unit: 'ss-unit-6', subject: 'Social Studies',
        topic: 'Government and Democracy', difficulty: 'easy',
        question: 'The three arms of government are:',
        options: [
            { label: 'A', text: 'Army, Police, Courts' }, { label: 'B', text: 'Executive, Legislature, Judiciary' },
            { label: 'C', text: 'President, Chiefs, Elders' }, { label: 'D', text: 'Senate, House, Cabinet' },
            { label: 'E', text: 'Local, Regional, National' }
        ],
        correctOption: 'B',
        explanation: 'The three arms are Executive (implements laws), Legislature (makes laws), Judiciary (interprets laws).'
    },
    {
        id: 'gp-q27', unit: 'ss-unit-6', subject: 'Social Studies',
        topic: 'Government and Democracy', difficulty: 'easy',
        question: 'The head of the Executive arm of government is the:',
        options: [
            { label: 'A', text: 'Chief Justice' }, { label: 'B', text: 'Speaker of Parliament' },
            { label: 'C', text: 'President' }, { label: 'D', text: 'Vice President' },
            { label: 'E', text: 'Paramount Chief' }
        ],
        correctOption: 'C',
        explanation: 'The President is the head of the Executive arm of government.'
    },
    {
        id: 'gp-q28', unit: 'ss-unit-6', subject: 'Social Studies',
        topic: 'Government and Democracy', difficulty: 'easy',
        question: 'Laws in Sierra Leone are made by the:',
        options: [
            { label: 'A', text: 'President' }, { label: 'B', text: 'Police' },
            { label: 'C', text: 'Army' }, { label: 'D', text: 'Parliament' },
            { label: 'E', text: 'Courts' }
        ],
        correctOption: 'D',
        explanation: 'Parliament (the Legislature) is responsible for making laws.'
    },
    {
        id: 'gp-q29', unit: 'ss-unit-6', subject: 'Social Studies',
        topic: 'Government and Democracy', difficulty: 'medium',
        question: 'The Judiciary is responsible for:',
        options: [
            { label: 'A', text: 'Making laws' }, { label: 'B', text: 'Implementing laws' },
            { label: 'C', text: 'Interpreting laws' }, { label: 'D', text: 'Enforcing order' },
            { label: 'E', text: 'Collecting taxes' }
        ],
        correctOption: 'C',
        explanation: 'The Judiciary interprets laws and settles disputes in courts.'
    },
    {
        id: 'gp-q30', unit: 'ss-unit-6', subject: 'Social Studies',
        topic: 'Government and Democracy', difficulty: 'medium',
        question: 'Separation of powers means:',
        options: [
            { label: 'A', text: 'One person controls everything' }, { label: 'B', text: 'Each arm of government works independently' },
            { label: 'C', text: 'Only the President makes decisions' }, { label: 'D', text: 'The army controls the government' },
            { label: 'E', text: 'There is no government' }
        ],
        correctOption: 'B',
        explanation: 'Separation of powers ensures each arm works independently to prevent misuse of power.'
    },

    // ===== SS Unit 7: International Organizations =====
    {
        id: 'gp-q31', unit: 'ss-unit-7', subject: 'Social Studies',
        topic: 'International Organizations', difficulty: 'easy',
        question: 'What does ECOWAS stand for?',
        options: [
            { label: 'A', text: 'East Central Organization of West African States' },
            { label: 'B', text: 'Economic Community of West African States' },
            { label: 'C', text: 'Environmental Council of West African States' },
            { label: 'D', text: 'Education Commission of West Africa' },
            { label: 'E', text: 'European Community of Western States' }
        ],
        correctOption: 'B',
        explanation: 'ECOWAS = Economic Community of West African States, founded in 1975.'
    },
    {
        id: 'gp-q32', unit: 'ss-unit-7', subject: 'Social Studies',
        topic: 'International Organizations', difficulty: 'medium',
        question: 'The Mano River Union includes Sierra Leone, Guinea, and:',
        options: [
            { label: 'A', text: 'Ghana' }, { label: 'B', text: 'Nigeria' },
            { label: 'C', text: 'Senegal' }, { label: 'D', text: 'Liberia' },
            { label: 'E', text: 'Mali' }
        ],
        correctOption: 'D',
        explanation: 'The Mano River Union was founded by Sierra Leone, Liberia, and later Guinea joined.'
    },
    {
        id: 'gp-q33', unit: 'ss-unit-7', subject: 'Social Studies',
        topic: 'International Organizations', difficulty: 'easy',
        question: 'Which organization represents all African countries?',
        options: [
            { label: 'A', text: 'ECOWAS' }, { label: 'B', text: 'United Nations' },
            { label: 'C', text: 'African Union' }, { label: 'D', text: 'NATO' },
            { label: 'E', text: 'World Bank' }
        ],
        correctOption: 'C',
        explanation: 'The African Union (AU) represents all 55 African countries.'
    },
    {
        id: 'gp-q34', unit: 'ss-unit-7', subject: 'Social Studies',
        topic: 'International Organizations', difficulty: 'medium',
        question: 'The United Nations headquarters is located in:',
        options: [
            { label: 'A', text: 'London' }, { label: 'B', text: 'Paris' },
            { label: 'C', text: 'Geneva' }, { label: 'D', text: 'New York' },
            { label: 'E', text: 'Addis Ababa' }
        ],
        correctOption: 'D',
        explanation: 'The UN headquarters is in New York City, United States.'
    },
    {
        id: 'gp-q35', unit: 'ss-unit-7', subject: 'Social Studies',
        topic: 'International Organizations', difficulty: 'hard',
        question: 'ECOWAS was founded in:',
        options: [
            { label: 'A', text: '1963' }, { label: 'B', text: '1970' },
            { label: 'C', text: '1975' }, { label: 'D', text: '1980' },
            { label: 'E', text: '1990' }
        ],
        correctOption: 'C',
        explanation: 'ECOWAS was established on May 28, 1975, in Lagos, Nigeria.'
    },

    // ===== SS Unit 8: Environmental Issues =====
    {
        id: 'gp-q36', unit: 'ss-unit-8', subject: 'Social Studies',
        topic: 'Environmental Issues', difficulty: 'easy',
        question: 'Cutting down trees without replanting is called:',
        options: [
            { label: 'A', text: 'Afforestation' }, { label: 'B', text: 'Irrigation' },
            { label: 'C', text: 'Deforestation' }, { label: 'D', text: 'Conservation' },
            { label: 'E', text: 'Cultivation' }
        ],
        correctOption: 'C',
        explanation: 'Deforestation is the removal of trees without replacement.'
    },
    {
        id: 'gp-q37', unit: 'ss-unit-8', subject: 'Social Studies',
        topic: 'Environmental Issues', difficulty: 'easy',
        question: 'Which of these causes soil erosion?',
        options: [
            { label: 'A', text: 'Planting trees' }, { label: 'B', text: 'Building terraces' },
            { label: 'C', text: 'Cutting down trees' }, { label: 'D', text: 'Watering crops' },
            { label: 'E', text: 'Composting' }
        ],
        correctOption: 'C',
        explanation: 'Removing trees exposes soil to rain and wind, causing erosion.'
    },
    {
        id: 'gp-q38', unit: 'ss-unit-8', subject: 'Social Studies',
        topic: 'Environmental Issues', difficulty: 'medium',
        question: 'What is one solution to deforestation?',
        options: [
            { label: 'A', text: 'Mining' }, { label: 'B', text: 'Using more charcoal' },
            { label: 'C', text: 'Building more roads' }, { label: 'D', text: 'Afforestation (planting new trees)' },
            { label: 'E', text: 'Burning bushes' }
        ],
        correctOption: 'D',
        explanation: 'Afforestation — planting new trees — helps restore forests and prevent erosion.'
    },
    {
        id: 'gp-q39', unit: 'ss-unit-8', subject: 'Social Studies',
        topic: 'Environmental Issues', difficulty: 'easy',
        question: 'Water pollution can be caused by:',
        options: [
            { label: 'A', text: 'Planting flowers' }, { label: 'B', text: 'Dumping waste into rivers' },
            { label: 'C', text: 'Recycling' }, { label: 'D', text: 'Building schools' },
            { label: 'E', text: 'Walking to school' }
        ],
        correctOption: 'B',
        explanation: 'Dumping waste, chemicals, and refuse into rivers pollutes water sources.'
    },
    {
        id: 'gp-q40', unit: 'ss-unit-8', subject: 'Social Studies',
        topic: 'Environmental Issues', difficulty: 'medium',
        question: 'Air pollution can be caused by:',
        options: [
            { label: 'A', text: 'Planting trees' }, { label: 'B', text: 'Clean water' },
            { label: 'C', text: 'Burning fossil fuels and waste' }, { label: 'D', text: 'Recycling paper' },
            { label: 'E', text: 'Reading books' }
        ],
        correctOption: 'C',
        explanation: 'Burning fuels and waste releases harmful gases into the air.'
    },

    // ===== SS Unit 9: Population and Development =====
    {
        id: 'gp-q41', unit: 'ss-unit-9', subject: 'Social Studies',
        topic: 'Population and Development', difficulty: 'easy',
        question: 'Population refers to:',
        options: [
            { label: 'A', text: 'The size of a country' }, { label: 'B', text: 'The total number of people living in an area' },
            { label: 'C', text: 'The amount of money a country has' }, { label: 'D', text: 'The number of schools' },
            { label: 'E', text: 'The number of animals' }
        ],
        correctOption: 'B',
        explanation: 'Population is the total number of people living in a given area at a given time.'
    },
    {
        id: 'gp-q42', unit: 'ss-unit-9', subject: 'Social Studies',
        topic: 'Population and Development', difficulty: 'easy',
        question: 'The official counting of all people in a country is called a:',
        options: [
            { label: 'A', text: 'Survey' }, { label: 'B', text: 'Census' },
            { label: 'C', text: 'Election' }, { label: 'D', text: 'Poll' },
            { label: 'E', text: 'Register' }
        ],
        correctOption: 'B',
        explanation: 'A census is the official count of all people, usually done every 10 years.'
    },
    {
        id: 'gp-q43', unit: 'ss-unit-9', subject: 'Social Studies',
        topic: 'Population and Development', difficulty: 'medium',
        question: 'Overcrowding in cities can lead to:',
        options: [
            { label: 'A', text: 'Better healthcare' }, { label: 'B', text: 'More forests' },
            { label: 'C', text: 'Pressure on resources and services' }, { label: 'D', text: 'Cleaner air' },
            { label: 'E', text: 'More farmland' }
        ],
        correctOption: 'C',
        explanation: 'Overcrowding puts pressure on water, food, housing, schools, and hospitals.'
    },
    {
        id: 'gp-q44', unit: 'ss-unit-9', subject: 'Social Studies',
        topic: 'Population and Development', difficulty: 'medium',
        question: 'What causes population growth?',
        options: [
            { label: 'A', text: 'Low birth rate' }, { label: 'B', text: 'High death rate' },
            { label: 'C', text: 'High birth rate and low death rate' }, { label: 'D', text: 'Emigration' },
            { label: 'E', text: 'Natural disasters' }
        ],
        correctOption: 'C',
        explanation: 'When more people are born than die, the population grows.'
    },
    {
        id: 'gp-q45', unit: 'ss-unit-9', subject: 'Social Studies',
        topic: 'Population and Development', difficulty: 'medium',
        question: 'Population distribution refers to:',
        options: [
            { label: 'A', text: 'How fast people grow' }, { label: 'B', text: 'How people are spread across an area' },
            { label: 'C', text: 'How many people die' }, { label: 'D', text: 'The total number of births' },
            { label: 'E', text: 'How many schools exist' }
        ],
        correctOption: 'B',
        explanation: 'Distribution refers to how people are spread across different areas (urban vs rural, etc.).'
    },

    // ================================================================
    //  SCIENCE (30 Questions — 8 units × ~4 each)
    // ================================================================

    // ===== SC Unit 1: Sources of Energy =====
    {
        id: 'gp-q46', unit: 'sc-unit-1', subject: 'Science',
        topic: 'Sources of Energy', difficulty: 'easy',
        question: 'Which of these is a source of energy?',
        options: [
            { label: 'A', text: 'A stone' }, { label: 'B', text: 'The sun' },
            { label: 'C', text: 'A chair' }, { label: 'D', text: 'A pencil' },
            { label: 'E', text: 'A book' }
        ],
        correctOption: 'B',
        explanation: 'The sun is a major source of light and heat energy.'
    },
    {
        id: 'gp-q47', unit: 'sc-unit-1', subject: 'Science',
        topic: 'Sources of Energy', difficulty: 'easy',
        question: 'A battery provides what form of energy?',
        options: [
            { label: 'A', text: 'Sound energy' }, { label: 'B', text: 'Light energy' },
            { label: 'C', text: 'Chemical energy' }, { label: 'D', text: 'Nuclear energy' },
            { label: 'E', text: 'Wind energy' }
        ],
        correctOption: 'C',
        explanation: 'Batteries store chemical energy which is converted to electrical energy.'
    },
    {
        id: 'gp-q48', unit: 'sc-unit-1', subject: 'Science',
        topic: 'Sources of Energy', difficulty: 'medium',
        question: 'When a candle burns, chemical energy is converted to:',
        options: [
            { label: 'A', text: 'Sound and electrical energy' }, { label: 'B', text: 'Nuclear energy' },
            { label: 'C', text: 'Heat and light energy' }, { label: 'D', text: 'Wind energy' },
            { label: 'E', text: 'Mechanical energy' }
        ],
        correctOption: 'C',
        explanation: 'Burning a candle converts chemical energy into heat and light energy.'
    },
    {
        id: 'gp-q49', unit: 'sc-unit-1', subject: 'Science',
        topic: 'Sources of Energy', difficulty: 'medium',
        question: 'Which of these is NOT a form of energy?',
        options: [
            { label: 'A', text: 'Heat' }, { label: 'B', text: 'Light' },
            { label: 'C', text: 'Sound' }, { label: 'D', text: 'Weight' },
            { label: 'E', text: 'Chemical' }
        ],
        correctOption: 'D',
        explanation: 'Weight is a force, not a form of energy. Heat, light, sound, and chemical are all energy forms.'
    },

    // ===== SC Unit 2: General Properties of Matter =====
    {
        id: 'gp-q50', unit: 'sc-unit-2', subject: 'Science',
        topic: 'General Properties of Matter', difficulty: 'easy',
        question: 'Matter is anything that:',
        options: [
            { label: 'A', text: 'Can be seen only' }, { label: 'B', text: 'Has weight and occupies space' },
            { label: 'C', text: 'Is always a solid' }, { label: 'D', text: 'Is always liquid' },
            { label: 'E', text: 'Cannot be touched' }
        ],
        correctOption: 'B',
        explanation: 'Matter is anything that has weight (mass) and takes up space (volume).'
    },
    {
        id: 'gp-q51', unit: 'sc-unit-2', subject: 'Science',
        topic: 'General Properties of Matter', difficulty: 'easy',
        question: 'Which of these is a non-living thing?',
        options: [
            { label: 'A', text: 'A dog' }, { label: 'B', text: 'A tree' },
            { label: 'C', text: 'A stone' }, { label: 'D', text: 'A bird' },
            { label: 'E', text: 'A fish' }
        ],
        correctOption: 'C',
        explanation: 'A stone is non-living — it does not grow, breathe, or reproduce.'
    },
    {
        id: 'gp-q52', unit: 'sc-unit-2', subject: 'Science',
        topic: 'General Properties of Matter', difficulty: 'medium',
        question: 'Which of these is an example of a metal?',
        options: [
            { label: 'A', text: 'Wood' }, { label: 'B', text: 'Rubber' },
            { label: 'C', text: 'Iron' }, { label: 'D', text: 'Plastic' },
            { label: 'E', text: 'Cotton' }
        ],
        correctOption: 'C',
        explanation: 'Iron is a metal. Metals are shiny, conduct heat and electricity, and can be shaped.'
    },
    {
        id: 'gp-q53', unit: 'sc-unit-2', subject: 'Science',
        topic: 'General Properties of Matter', difficulty: 'easy',
        question: 'Air is an example of:',
        options: [
            { label: 'A', text: 'A solid' }, { label: 'B', text: 'A liquid' },
            { label: 'C', text: 'A gas' }, { label: 'D', text: 'A metal' },
            { label: 'E', text: 'A non-matter' }
        ],
        correctOption: 'C',
        explanation: 'Air is a gas — it has mass and takes up space, but has no fixed shape.'
    },

    // ===== SC Unit 3: Properties of Matter — Mass, Volume and Density =====
    {
        id: 'gp-q54', unit: 'sc-unit-3', subject: 'Science',
        topic: 'Mass, Volume and Density', difficulty: 'easy',
        question: 'Mass is the amount of:',
        options: [
            { label: 'A', text: 'Space an object takes up' }, { label: 'B', text: 'Matter in an object' },
            { label: 'C', text: 'Energy in an object' }, { label: 'D', text: 'Colour in an object' },
            { label: 'E', text: 'Water in an object' }
        ],
        correctOption: 'B',
        explanation: 'Mass is the amount of matter contained in an object, measured in grams or kilograms.'
    },
    {
        id: 'gp-q55', unit: 'sc-unit-3', subject: 'Science',
        topic: 'Mass, Volume and Density', difficulty: 'easy',
        question: 'Volume is the amount of:',
        options: [
            { label: 'A', text: 'Matter in an object' }, { label: 'B', text: 'Energy in an object' },
            { label: 'C', text: 'Space an object occupies' }, { label: 'D', text: 'Heat in an object' },
            { label: 'E', text: 'Weight of an object' }
        ],
        correctOption: 'C',
        explanation: 'Volume is the amount of space an object takes up, measured in cm³ or litres.'
    },
    {
        id: 'gp-q56', unit: 'sc-unit-3', subject: 'Science',
        topic: 'Mass, Volume and Density', difficulty: 'medium',
        question: 'Which instrument is used to measure mass?',
        options: [
            { label: 'A', text: 'Ruler' }, { label: 'B', text: 'Thermometer' },
            { label: 'C', text: 'Beam balance' }, { label: 'D', text: 'Measuring cylinder' },
            { label: 'E', text: 'Stopwatch' }
        ],
        correctOption: 'C',
        explanation: 'A beam balance compares an unknown mass with standard masses to measure it.'
    },
    {
        id: 'gp-q57', unit: 'sc-unit-3', subject: 'Science',
        topic: 'Mass, Volume and Density', difficulty: 'medium',
        question: 'Density is calculated by:',
        options: [
            { label: 'A', text: 'Mass + Volume' }, { label: 'B', text: 'Mass × Volume' },
            { label: 'C', text: 'Mass ÷ Volume' }, { label: 'D', text: 'Volume ÷ Mass' },
            { label: 'E', text: 'Mass − Volume' }
        ],
        correctOption: 'C',
        explanation: 'Density = Mass ÷ Volume. It tells us how much matter is packed into a given space.'
    },

    // ===== SC Unit 4: States of Matter =====
    {
        id: 'gp-q58', unit: 'sc-unit-4', subject: 'Science',
        topic: 'States of Matter', difficulty: 'easy',
        question: 'Which state of matter has a fixed shape and fixed volume?',
        options: [
            { label: 'A', text: 'Liquid' }, { label: 'B', text: 'Gas' },
            { label: 'C', text: 'Solid' }, { label: 'D', text: 'Vapour' },
            { label: 'E', text: 'Plasma' }
        ],
        correctOption: 'C',
        explanation: 'Solids have a definite shape and a definite volume.'
    },
    {
        id: 'gp-q59', unit: 'sc-unit-4', subject: 'Science',
        topic: 'States of Matter', difficulty: 'easy',
        question: 'Which state of matter takes the shape of its container but has a fixed volume?',
        options: [
            { label: 'A', text: 'Solid' }, { label: 'B', text: 'Liquid' },
            { label: 'C', text: 'Gas' }, { label: 'D', text: 'Smoke' },
            { label: 'E', text: 'Ice' }
        ],
        correctOption: 'B',
        explanation: 'Liquids take the shape of their container but keep a fixed volume.'
    },
    {
        id: 'gp-q60', unit: 'sc-unit-4', subject: 'Science',
        topic: 'States of Matter', difficulty: 'medium',
        question: 'Gases have:',
        options: [
            { label: 'A', text: 'Fixed shape and fixed volume' }, { label: 'B', text: 'Fixed shape only' },
            { label: 'C', text: 'No fixed shape and no fixed volume' }, { label: 'D', text: 'Fixed volume only' },
            { label: 'E', text: 'Fixed colour' }
        ],
        correctOption: 'C',
        explanation: 'Gases have no fixed shape or volume — they spread to fill their container.'
    },

    // ===== SC Unit 5: Changes in Shape of Matter =====
    {
        id: 'gp-q61', unit: 'sc-unit-5', subject: 'Science',
        topic: 'Changes in Shape of Matter', difficulty: 'easy',
        question: 'When ice is heated, it changes into:',
        options: [
            { label: 'A', text: 'Gas' }, { label: 'B', text: 'Steam' },
            { label: 'C', text: 'Water' }, { label: 'D', text: 'Smoke' },
            { label: 'E', text: 'Air' }
        ],
        correctOption: 'C',
        explanation: 'Heating ice causes it to melt into water (solid → liquid).'
    },
    {
        id: 'gp-q62', unit: 'sc-unit-5', subject: 'Science',
        topic: 'Changes in Shape of Matter', difficulty: 'easy',
        question: 'The process of a liquid changing to a gas is called:',
        options: [
            { label: 'A', text: 'Freezing' }, { label: 'B', text: 'Melting' },
            { label: 'C', text: 'Condensation' }, { label: 'D', text: 'Evaporation' },
            { label: 'E', text: 'Solidification' }
        ],
        correctOption: 'D',
        explanation: 'Evaporation is when a liquid turns into gas, usually by heating.'
    },
    {
        id: 'gp-q63', unit: 'sc-unit-5', subject: 'Science',
        topic: 'Changes in Shape of Matter', difficulty: 'medium',
        question: 'When steam touches a cold surface and turns back to water drops, this is called:',
        options: [
            { label: 'A', text: 'Evaporation' }, { label: 'B', text: 'Melting' },
            { label: 'C', text: 'Condensation' }, { label: 'D', text: 'Boiling' },
            { label: 'E', text: 'Freezing' }
        ],
        correctOption: 'C',
        explanation: 'Condensation is when gas cools and turns back into a liquid.'
    },
    {
        id: 'gp-q64', unit: 'sc-unit-5', subject: 'Science',
        topic: 'Changes in Shape of Matter', difficulty: 'medium',
        question: 'Changing water to ice is an example of:',
        options: [
            { label: 'A', text: 'Evaporation' }, { label: 'B', text: 'Melting' },
            { label: 'C', text: 'Boiling' }, { label: 'D', text: 'Condensation' },
            { label: 'E', text: 'Freezing' }
        ],
        correctOption: 'E',
        explanation: 'Freezing changes a liquid into a solid when cooled to its freezing point.'
    },

    // ===== SC Unit 6: Motion in Plants =====
    {
        id: 'gp-q65', unit: 'sc-unit-6', subject: 'Science',
        topic: 'Motion in Plants', difficulty: 'easy',
        question: 'Plants move towards light to:',
        options: [
            { label: 'A', text: 'Hide from insects' }, { label: 'B', text: 'Get water' },
            { label: 'C', text: 'Make food through photosynthesis' }, { label: 'D', text: 'Avoid heat' },
            { label: 'E', text: 'Grow roots' }
        ],
        correctOption: 'C',
        explanation: 'Plants grow towards light because they need it for photosynthesis (making food).'
    },
    {
        id: 'gp-q66', unit: 'sc-unit-6', subject: 'Science',
        topic: 'Motion in Plants', difficulty: 'medium',
        question: 'A climbing plant uses __________ to attach itself to a support.',
        options: [
            { label: 'A', text: 'Leaves' }, { label: 'B', text: 'Flowers' },
            { label: 'C', text: 'Tendrils' }, { label: 'D', text: 'Fruits' },
            { label: 'E', text: 'Seeds' }
        ],
        correctOption: 'C',
        explanation: 'Tendrils are thin, thread-like parts that climbing plants use to grip supports.'
    },
    {
        id: 'gp-q67', unit: 'sc-unit-6', subject: 'Science',
        topic: 'Motion in Plants', difficulty: 'easy',
        question: 'A plant that spreads along the ground is called a:',
        options: [
            { label: 'A', text: 'Climbing plant' }, { label: 'B', text: 'Tall tree' },
            { label: 'C', text: 'Creeping plant' }, { label: 'D', text: 'Floating plant' },
            { label: 'E', text: 'Flowering plant' }
        ],
        correctOption: 'C',
        explanation: 'Creeping plants, like sweet potato vines, grow along the ground.'
    },

    // ===== SC Unit 7: Motion in Animals =====
    {
        id: 'gp-q68', unit: 'sc-unit-7', subject: 'Science',
        topic: 'Motion in Animals', difficulty: 'easy',
        question: 'Fish move through water using their:',
        options: [
            { label: 'A', text: 'Legs' }, { label: 'B', text: 'Wings' },
            { label: 'C', text: 'Fins and tails' }, { label: 'D', text: 'Hands' },
            { label: 'E', text: 'Feathers' }
        ],
        correctOption: 'C',
        explanation: 'Fish use their fins and tail to swim through water.'
    },
    {
        id: 'gp-q69', unit: 'sc-unit-7', subject: 'Science',
        topic: 'Motion in Animals', difficulty: 'easy',
        question: 'Birds move from place to place mainly by:',
        options: [
            { label: 'A', text: 'Swimming' }, { label: 'B', text: 'Crawling' },
            { label: 'C', text: 'Flying' }, { label: 'D', text: 'Jumping' },
            { label: 'E', text: 'Burrowing' }
        ],
        correctOption: 'C',
        explanation: 'Most birds use their wings to fly. Some birds also walk or swim.'
    },
    {
        id: 'gp-q70', unit: 'sc-unit-7', subject: 'Science',
        topic: 'Motion in Animals', difficulty: 'medium',
        question: 'One reason animals move is to:',
        options: [
            { label: 'A', text: 'Stay in one place' }, { label: 'B', text: 'Avoid sunlight always' },
            { label: 'C', text: 'Search for food and escape predators' }, { label: 'D', text: 'Become plants' },
            { label: 'E', text: 'Turn into stones' }
        ],
        correctOption: 'C',
        explanation: 'Animals move to find food, water, shelter, mates, and to escape danger.'
    },
    {
        id: 'gp-q71', unit: 'sc-unit-7', subject: 'Science',
        topic: 'Motion in Animals', difficulty: 'easy',
        question: 'Snakes move by:',
        options: [
            { label: 'A', text: 'Flying' }, { label: 'B', text: 'Walking on legs' },
            { label: 'C', text: 'Slithering (crawling without legs)' }, { label: 'D', text: 'Hopping' },
            { label: 'E', text: 'Swimming only' }
        ],
        correctOption: 'C',
        explanation: 'Snakes are reptiles that slither — they move by bending their body in curves.'
    },

    // ===== SC Unit 8: The Human Body and Development =====
    {
        id: 'gp-q72', unit: 'sc-unit-8', subject: 'Science',
        topic: 'The Human Body and Development', difficulty: 'easy',
        question: 'The stage when a child\'s body begins to change into an adult body is called:',
        options: [
            { label: 'A', text: 'Infancy' }, { label: 'B', text: 'Old age' },
            { label: 'C', text: 'Puberty' }, { label: 'D', text: 'Childhood' },
            { label: 'E', text: 'Babyhood' }
        ],
        correctOption: 'C',
        explanation: 'Puberty is the stage when physical and emotional changes happen as a child grows into an adult.'
    },
    {
        id: 'gp-q73', unit: 'sc-unit-8', subject: 'Science',
        topic: 'The Human Body and Development', difficulty: 'medium',
        question: 'Good personal hygiene includes:',
        options: [
            { label: 'A', text: 'Not bathing' }, { label: 'B', text: 'Wearing dirty clothes' },
            { label: 'C', text: 'Regular bathing and brushing teeth' }, { label: 'D', text: 'Skipping meals' },
            { label: 'E', text: 'Avoiding sleep' }
        ],
        correctOption: 'C',
        explanation: 'Good hygiene means keeping your body clean — bathing, brushing teeth, and wearing clean clothes.'
    },
    {
        id: 'gp-q74', unit: 'sc-unit-8', subject: 'Science',
        topic: 'The Human Body and Development', difficulty: 'medium',
        question: 'Physical changes during puberty are controlled by:',
        options: [
            { label: 'A', text: 'Food' }, { label: 'B', text: 'Water' },
            { label: 'C', text: 'Hormones' }, { label: 'D', text: 'Vitamins only' },
            { label: 'E', text: 'Exercise' }
        ],
        correctOption: 'C',
        explanation: 'Hormones are chemical messengers in the body that trigger puberty changes.'
    },
    {
        id: 'gp-q75', unit: 'sc-unit-8', subject: 'Science',
        topic: 'The Human Body and Development', difficulty: 'easy',
        question: 'Which of these is a sign of puberty in both boys and girls?',
        options: [
            { label: 'A', text: 'Growing shorter' }, { label: 'B', text: 'Losing teeth' },
            { label: 'C', text: 'Growing taller and body hair' }, { label: 'D', text: 'Learning to walk' },
            { label: 'E', text: 'Crawling' }
        ],
        correctOption: 'C',
        explanation: 'During puberty both boys and girls grow taller, and body hair appears.'
    },

    // ================================================================
    //  HOME ECONOMICS (30 Questions — 13 units × ~2-3 each)
    // ================================================================

    // ===== HE Unit 1: Definition and Careers in Home Economics =====
    {
        id: 'gp-q76', unit: 'he-unit-1', subject: 'Home Economics',
        topic: 'Definition and Careers in Home Economics', difficulty: 'easy',
        question: 'Home Economics is the study of:',
        options: [
            { label: 'A', text: 'Rocks and minerals' }, { label: 'B', text: 'Stars and planets' },
            { label: 'C', text: 'Relationships between individuals, families, and the environment' },
            { label: 'D', text: 'Machines and engines' }, { label: 'E', text: 'Computer programming' }
        ],
        correctOption: 'C',
        explanation: 'Home Economics studies how individuals and families manage resources and relate to their environment.'
    },
    {
        id: 'gp-q77', unit: 'he-unit-1', subject: 'Home Economics',
        topic: 'Definition and Careers in Home Economics', difficulty: 'medium',
        question: 'Which of these is a career related to Home Economics?',
        options: [
            { label: 'A', text: 'Pilot' }, { label: 'B', text: 'Nutritionist' },
            { label: 'C', text: 'Electrician' }, { label: 'D', text: 'Sailor' },
            { label: 'E', text: 'Mechanic' }
        ],
        correctOption: 'B',
        explanation: 'A nutritionist studies food and nutrition, which is a key area of Home Economics.'
    },

    // ===== HE Unit 2: Food and Nutrition =====
    {
        id: 'gp-q78', unit: 'he-unit-2', subject: 'Home Economics',
        topic: 'Food and Nutrition', difficulty: 'easy',
        question: 'Which nutrient helps build and repair the body?',
        options: [
            { label: 'A', text: 'Carbohydrates' }, { label: 'B', text: 'Fats' },
            { label: 'C', text: 'Proteins' }, { label: 'D', text: 'Water' },
            { label: 'E', text: 'Minerals' }
        ],
        correctOption: 'C',
        explanation: 'Proteins are body-building nutrients found in meat, fish, eggs, and beans.'
    },
    {
        id: 'gp-q79', unit: 'he-unit-2', subject: 'Home Economics',
        topic: 'Food and Nutrition', difficulty: 'easy',
        question: 'Carbohydrates provide the body with:',
        options: [
            { label: 'A', text: 'Building materials' }, { label: 'B', text: 'Energy' },
            { label: 'C', text: 'Protection from diseases' }, { label: 'D', text: 'Strong bones' },
            { label: 'E', text: 'Good eyesight' }
        ],
        correctOption: 'B',
        explanation: 'Carbohydrates (rice, bread, cassava) are energy-giving foods.'
    },
    {
        id: 'gp-q80', unit: 'he-unit-2', subject: 'Home Economics',
        topic: 'Food and Nutrition', difficulty: 'medium',
        question: 'Which cooking method uses dry heat in an enclosed space?',
        options: [
            { label: 'A', text: 'Boiling' }, { label: 'B', text: 'Frying' },
            { label: 'C', text: 'Baking' }, { label: 'D', text: 'Steaming' },
            { label: 'E', text: 'Stewing' }
        ],
        correctOption: 'C',
        explanation: 'Baking uses dry heat in an oven to cook food like bread and cakes.'
    },

    // ===== HE Unit 3: Clothing and Textiles =====
    {
        id: 'gp-q81', unit: 'he-unit-3', subject: 'Home Economics',
        topic: 'Clothing and Textiles', difficulty: 'easy',
        question: 'Cotton fibre comes from:',
        options: [
            { label: 'A', text: 'An animal' }, { label: 'B', text: 'A chemical' },
            { label: 'C', text: 'A plant' }, { label: 'D', text: 'A mineral' },
            { label: 'E', text: 'Rocks' }
        ],
        correctOption: 'C',
        explanation: 'Cotton is a natural fibre that comes from the cotton plant.'
    },
    {
        id: 'gp-q82', unit: 'he-unit-3', subject: 'Home Economics',
        topic: 'Clothing and Textiles', difficulty: 'medium',
        question: 'A temporary stitch used to hold fabric in place before permanent sewing is called:',
        options: [
            { label: 'A', text: 'Running stitch' }, { label: 'B', text: 'Back stitch' },
            { label: 'C', text: 'Tacking (basting)' }, { label: 'D', text: 'Hemming stitch' },
            { label: 'E', text: 'Cross stitch' }
        ],
        correctOption: 'C',
        explanation: 'Tacking (basting) is a temporary stitch that holds fabric pieces together before final sewing.'
    },

    // ===== HE Unit 4: Family Life Education =====
    {
        id: 'gp-q83', unit: 'he-unit-4', subject: 'Home Economics',
        topic: 'Family Life Education', difficulty: 'easy',
        question: 'A nuclear family consists of:',
        options: [
            { label: 'A', text: 'Grandparents, uncles, and aunts' }, { label: 'B', text: 'Father, mother, and children' },
            { label: 'C', text: 'Friends and neighbours' }, { label: 'D', text: 'Teachers and students' },
            { label: 'E', text: 'The whole village' }
        ],
        correctOption: 'B',
        explanation: 'A nuclear family is made up of father, mother, and their children.'
    },
    {
        id: 'gp-q84', unit: 'he-unit-4', subject: 'Home Economics',
        topic: 'Family Life Education', difficulty: 'medium',
        question: 'An extended family includes:',
        options: [
            { label: 'A', text: 'Only parents and children' }, { label: 'B', text: 'Parents, children, grandparents, uncles, aunts, and cousins' },
            { label: 'C', text: 'Only friends' }, { label: 'D', text: 'Teachers and classmates' },
            { label: 'E', text: 'Only neighbours' }
        ],
        correctOption: 'B',
        explanation: 'An extended family goes beyond the nuclear family to include grandparents, uncles, aunts, and cousins.'
    },

    // ===== HE Unit 5: Family Resources Management =====
    {
        id: 'gp-q85', unit: 'he-unit-5', subject: 'Home Economics',
        topic: 'Family Resources Management', difficulty: 'easy',
        question: 'Malaria is spread by:',
        options: [
            { label: 'A', text: 'Dirty hands' }, { label: 'B', text: 'Mosquito bites' },
            { label: 'C', text: 'Dirty water' }, { label: 'D', text: 'Coughing' },
            { label: 'E', text: 'Bad food' }
        ],
        correctOption: 'B',
        explanation: 'Malaria is a disease spread through the bites of infected female Anopheles mosquitoes.'
    },
    {
        id: 'gp-q86', unit: 'he-unit-5', subject: 'Home Economics',
        topic: 'Family Resources Management', difficulty: 'medium',
        question: 'Which agent is commonly used for washing clothes?',
        options: [
            { label: 'A', text: 'Sand' }, { label: 'B', text: 'Chalk' },
            { label: 'C', text: 'Soap or detergent' }, { label: 'D', text: 'Oil' },
            { label: 'E', text: 'Salt' }
        ],
        correctOption: 'C',
        explanation: 'Soap and detergent are laundry agents used to remove dirt from clothes.'
    },

    // ===== HE Unit 6: Food Preservation and Storage =====
    {
        id: 'gp-q87', unit: 'he-unit-6', subject: 'Home Economics',
        topic: 'Food Preservation and Storage', difficulty: 'easy',
        question: 'Drying food in the sun helps to:',
        options: [
            { label: 'A', text: 'Make it go bad faster' }, { label: 'B', text: 'Preserve it by removing moisture' },
            { label: 'C', text: 'Add colour to it' }, { label: 'D', text: 'Make it sweeter' },
            { label: 'E', text: 'Cook it' }
        ],
        correctOption: 'B',
        explanation: 'Sun-drying removes water from food, preventing bacteria growth and spoilage.'
    },
    {
        id: 'gp-q88', unit: 'he-unit-6', subject: 'Home Economics',
        topic: 'Food Preservation and Storage', difficulty: 'medium',
        question: 'Which of these is a method of food preservation?',
        options: [
            { label: 'A', text: 'Leaving food on the table' }, { label: 'B', text: 'Smoking' },
            { label: 'C', text: 'Throwing food away' }, { label: 'D', text: 'Mixing food with dirt' },
            { label: 'E', text: 'Leaving food open' }
        ],
        correctOption: 'B',
        explanation: 'Smoking is a preservation method — the heat and chemicals in smoke preserve fish and meat.'
    },
    {
        id: 'gp-q89', unit: 'he-unit-6', subject: 'Home Economics',
        topic: 'Food Preservation and Storage', difficulty: 'easy',
        question: 'Storing food in a refrigerator helps because:',
        options: [
            { label: 'A', text: 'Heat kills germs' }, { label: 'B', text: 'Cold slows down bacterial growth' },
            { label: 'C', text: 'It adds flavour' }, { label: 'D', text: 'It makes food bigger' },
            { label: 'E', text: 'It changes the colour' }
        ],
        correctOption: 'B',
        explanation: 'Cold temperatures in a fridge slow bacteria growth, keeping food fresh longer.'
    },

    // ===== HE Unit 7: The Sewing Machine =====
    {
        id: 'gp-q90', unit: 'he-unit-7', subject: 'Home Economics',
        topic: 'The Sewing Machine', difficulty: 'easy',
        question: 'The part of the sewing machine that holds the fabric in place while sewing is the:',
        options: [
            { label: 'A', text: 'Needle' }, { label: 'B', text: 'Bobbin' },
            { label: 'C', text: 'Presser foot' }, { label: 'D', text: 'Hand wheel' },
            { label: 'E', text: 'Spool pin' }
        ],
        correctOption: 'C',
        explanation: 'The presser foot presses the fabric down to keep it steady during sewing.'
    },
    {
        id: 'gp-q91', unit: 'he-unit-7', subject: 'Home Economics',
        topic: 'The Sewing Machine', difficulty: 'medium',
        question: 'After use, a sewing machine should be:',
        options: [
            { label: 'A', text: 'Left uncovered and dirty' }, { label: 'B', text: 'Thrown away' },
            { label: 'C', text: 'Cleaned, oiled, and covered' }, { label: 'D', text: 'Placed in water' },
            { label: 'E', text: 'Left outside' }
        ],
        correctOption: 'C',
        explanation: 'Proper care means cleaning, oiling moving parts, and covering the machine when not in use.'
    },

    // ===== HE Unit 8: Immunization, Puberty and Health =====
    {
        id: 'gp-q92', unit: 'he-unit-8', subject: 'Home Economics',
        topic: 'Immunization, Puberty and Health', difficulty: 'easy',
        question: 'Immunization protects children from:',
        options: [
            { label: 'A', text: 'Hunger' }, { label: 'B', text: 'Accidents' },
            { label: 'C', text: 'Dangerous diseases' }, { label: 'D', text: 'Bad weather' },
            { label: 'E', text: 'Insects' }
        ],
        correctOption: 'C',
        explanation: 'Vaccines are given to protect children from serious diseases like measles, polio, and tetanus.'
    },
    {
        id: 'gp-q93', unit: 'he-unit-8', subject: 'Home Economics',
        topic: 'Immunization, Puberty and Health', difficulty: 'medium',
        question: 'HIV can be spread through:',
        options: [
            { label: 'A', text: 'Handshaking' }, { label: 'B', text: 'Sharing food' },
            { label: 'C', text: 'Contact with infected blood' }, { label: 'D', text: 'Mosquito bites' },
            { label: 'E', text: 'Sitting near someone' }
        ],
        correctOption: 'C',
        explanation: 'HIV spreads through infected blood, unprotected sex, and from mother to child — not by casual contact.'
    },
    {
        id: 'gp-q94', unit: 'he-unit-8', subject: 'Home Economics',
        topic: 'Immunization, Puberty and Health', difficulty: 'medium',
        question: 'Which insect is a common vector (disease carrier)?',
        options: [
            { label: 'A', text: 'Butterfly' }, { label: 'B', text: 'Ant' },
            { label: 'C', text: 'Mosquito' }, { label: 'D', text: 'Ladybird' },
            { label: 'E', text: 'Bee' }
        ],
        correctOption: 'C',
        explanation: 'Mosquitoes carry diseases like malaria and yellow fever.'
    },

    // ===== HE Unit 9: Accidents and Safety =====
    {
        id: 'gp-q95', unit: 'he-unit-9', subject: 'Home Economics',
        topic: 'Accidents and Safety', difficulty: 'easy',
        question: 'Which of these is a common accident at home?',
        options: [
            { label: 'A', text: 'Reading a book' }, { label: 'B', text: 'Sitting on a chair' },
            { label: 'C', text: 'Burns from hot water' }, { label: 'D', text: 'Watching TV' },
            { label: 'E', text: 'Sleeping' }
        ],
        correctOption: 'C',
        explanation: 'Burns and scalds from hot water, fire, and cooking are common home accidents.'
    },
    {
        id: 'gp-q96', unit: 'he-unit-9', subject: 'Home Economics',
        topic: 'Accidents and Safety', difficulty: 'medium',
        question: 'To prevent accidents in the kitchen, you should:',
        options: [
            { label: 'A', text: 'Leave knives on the floor' }, { label: 'B', text: 'Keep pot handles facing outward' },
            { label: 'C', text: 'Keep sharp objects out of children\'s reach' }, { label: 'D', text: 'Spill water on the floor' },
            { label: 'E', text: 'Leave the gas on' }
        ],
        correctOption: 'C',
        explanation: 'Safety measures include keeping sharp objects away from children and cleaning spills quickly.'
    },

    // ===== HE Unit 10: Food Spoilage and Balanced Diet =====
    {
        id: 'gp-q97', unit: 'he-unit-10', subject: 'Home Economics',
        topic: 'Food Spoilage and Balanced Diet', difficulty: 'easy',
        question: 'A balanced diet contains:',
        options: [
            { label: 'A', text: 'Only carbohydrates' }, { label: 'B', text: 'Only proteins' },
            { label: 'C', text: 'All the nutrients the body needs in the right amounts' },
            { label: 'D', text: 'Only fats and oils' }, { label: 'E', text: 'Only vitamins' }
        ],
        correctOption: 'C',
        explanation: 'A balanced diet includes carbohydrates, proteins, fats, vitamins, minerals, and water.'
    },
    {
        id: 'gp-q98', unit: 'he-unit-10', subject: 'Home Economics',
        topic: 'Food Spoilage and Balanced Diet', difficulty: 'medium',
        question: 'Food spoilage can be caused by:',
        options: [
            { label: 'A', text: 'Proper storage' }, { label: 'B', text: 'Refrigeration' },
            { label: 'C', text: 'Bacteria and fungi' }, { label: 'D', text: 'Clean containers' },
            { label: 'E', text: 'Washing hands' }
        ],
        correctOption: 'C',
        explanation: 'Bacteria, fungi, and other micro-organisms cause food to spoil.'
    },

    // ===== HE Unit 11: Weaving and Textile Crafts =====
    {
        id: 'gp-q99', unit: 'he-unit-11', subject: 'Home Economics',
        topic: 'Weaving and Textile Crafts', difficulty: 'easy',
        question: 'Weaving is the process of making cloth by:',
        options: [
            { label: 'A', text: 'Melting fibres' }, { label: 'B', text: 'Gluing threads together' },
            { label: 'C', text: 'Interlacing threads over and under each other' },
            { label: 'D', text: 'Cutting fabric' }, { label: 'E', text: 'Painting on cloth' }
        ],
        correctOption: 'C',
        explanation: 'Weaving interlaces horizontal (weft) and vertical (warp) threads to create fabric.'
    },
    {
        id: 'gp-q100', unit: 'he-unit-11', subject: 'Home Economics',
        topic: 'Weaving and Textile Crafts', difficulty: 'medium',
        question: 'Which material can be used for weaving?',
        options: [
            { label: 'A', text: 'Stones' }, { label: 'B', text: 'Raffia' },
            { label: 'C', text: 'Sand' }, { label: 'D', text: 'Water' },
            { label: 'E', text: 'Glass' }
        ],
        correctOption: 'B',
        explanation: 'Raffia, cotton yarn, and straw are common materials used for weaving.'
    },

    // ===== HE Unit 12: Adolescence and Drug Awareness =====
    {
        id: 'gp-q101', unit: 'he-unit-12', subject: 'Home Economics',
        topic: 'Adolescence and Drug Awareness', difficulty: 'easy',
        question: 'Drug abuse means:',
        options: [
            { label: 'A', text: 'Taking medicine when sick' }, { label: 'B', text: 'Using drugs as prescribed by a doctor' },
            { label: 'C', text: 'Taking drugs wrongly or without a prescription' },
            { label: 'D', text: 'Buying medicine from a pharmacy' }, { label: 'E', text: 'Visiting a hospital' }
        ],
        correctOption: 'C',
        explanation: 'Drug abuse is the misuse of drugs — taking them wrongly, excessively, or without prescription.'
    },
    {
        id: 'gp-q102', unit: 'he-unit-12', subject: 'Home Economics',
        topic: 'Adolescence and Drug Awareness', difficulty: 'medium',
        question: 'One effect of drug abuse on school children is:',
        options: [
            { label: 'A', text: 'Better grades' }, { label: 'B', text: 'More friends' },
            { label: 'C', text: 'Poor concentration and academic failure' },
            { label: 'D', text: 'Improved health' }, { label: 'E', text: 'Better sleep' }
        ],
        correctOption: 'C',
        explanation: 'Drug abuse leads to poor concentration, school dropout, health problems, and bad behaviour.'
    },

    // ===== HE Unit 13: Kitchen Safety and Household Care =====
    {
        id: 'gp-q103', unit: 'he-unit-13', subject: 'Home Economics',
        topic: 'Kitchen Safety and Household Care', difficulty: 'easy',
        question: 'Household articles like plates and cups should be:',
        options: [
            { label: 'A', text: 'Left dirty after use' }, { label: 'B', text: 'Thrown away after one use' },
            { label: 'C', text: 'Washed and stored properly after use' },
            { label: 'D', text: 'Left on the floor' }, { label: 'E', text: 'Used only once' }
        ],
        correctOption: 'C',
        explanation: 'Proper care of household articles includes washing, drying, and storing them correctly.'
    },
    {
        id: 'gp-q104', unit: 'he-unit-13', subject: 'Home Economics',
        topic: 'Kitchen Safety and Household Care', difficulty: 'medium',
        question: 'Human resources in the home include:',
        options: [
            { label: 'A', text: 'Money and furniture' }, { label: 'B', text: 'Time, energy, and skills of family members' },
            { label: 'C', text: 'Only electricity' }, { label: 'D', text: 'Only water' },
            { label: 'E', text: 'Land and buildings only' }
        ],
        correctOption: 'B',
        explanation: 'Human resources are people\'s time, energy, knowledge, and skills — while money and property are material resources.'
    },
    {
        id: 'gp-q105', unit: 'he-unit-2', subject: 'Home Economics',
        topic: 'Food and Nutrition', difficulty: 'easy',
        question: 'Which food group provides vitamins and minerals to protect the body?',
        options: [
            { label: 'A', text: 'Rice and bread' }, { label: 'B', text: 'Meat and fish' },
            { label: 'C', text: 'Fruits and vegetables' }, { label: 'D', text: 'Oil and butter' },
            { label: 'E', text: 'Sugar and sweets' }
        ],
        correctOption: 'C',
        explanation: 'Fruits and vegetables are protective foods — rich in vitamins and minerals.'
    },

    // ================================================================
    //  AGRICULTURAL SCIENCE (30 Questions — 9 units × ~3-4 each)
    // ================================================================

    // ===== AG Unit 1: Concept of Agriculture and Environment =====
    {
        id: 'gp-q106', unit: 'ag-unit-1', subject: 'Agricultural Science',
        topic: 'Concept of Agriculture and Environment', difficulty: 'easy',
        question: 'Agriculture is the practice of:',
        options: [
            { label: 'A', text: 'Building houses' }, { label: 'B', text: 'Growing crops and rearing animals' },
            { label: 'C', text: 'Making clothes' }, { label: 'D', text: 'Painting pictures' },
            { label: 'E', text: 'Teaching children' }
        ],
        correctOption: 'B',
        explanation: 'Agriculture involves growing crops and rearing animals for food, income, and raw materials.'
    },
    {
        id: 'gp-q107', unit: 'ag-unit-1', subject: 'Agricultural Science',
        topic: 'Concept of Agriculture and Environment', difficulty: 'medium',
        question: 'Land preparation for farming includes:',
        options: [
            { label: 'A', text: 'Painting the soil' }, { label: 'B', text: 'Brushing, ploughing, and harrowing' },
            { label: 'C', text: 'Covering the land with concrete' }, { label: 'D', text: 'Cutting down all trees permanently' },
            { label: 'E', text: 'Building roads' }
        ],
        correctOption: 'B',
        explanation: 'Land preparation involves clearing (brushing), ploughing, and harrowing to make soil ready for planting.'
    },
    {
        id: 'gp-q108', unit: 'ag-unit-1', subject: 'Agricultural Science',
        topic: 'Concept of Agriculture and Environment', difficulty: 'easy',
        question: 'Food security means:',
        options: [
            { label: 'A', text: 'Locking food in a safe' }, { label: 'B', text: 'Everyone having access to enough nutritious food' },
            { label: 'C', text: 'Only rich people eating well' }, { label: 'D', text: 'Importing all food' },
            { label: 'E', text: 'Eating only one type of food' }
        ],
        correctOption: 'B',
        explanation: 'Food security means all people have reliable access to enough safe and nutritious food.'
    },

    // ===== AG Unit 2: Farm Machinery, Tools and Structures =====
    {
        id: 'gp-q109', unit: 'ag-unit-2', subject: 'Agricultural Science',
        topic: 'Farm Machinery, Tools and Structures', difficulty: 'easy',
        question: 'A cutlass is used in farming for:',
        options: [
            { label: 'A', text: 'Watering plants' }, { label: 'B', text: 'Cutting grass and clearing bushes' },
            { label: 'C', text: 'Measuring soil' }, { label: 'D', text: 'Harvesting rice' },
            { label: 'E', text: 'Milking cows' }
        ],
        correctOption: 'B',
        explanation: 'A cutlass (machete) is used for clearing bushes, cutting grass, and preparing land.'
    },
    {
        id: 'gp-q110', unit: 'ag-unit-2', subject: 'Agricultural Science',
        topic: 'Farm Machinery, Tools and Structures', difficulty: 'medium',
        question: 'A combined harvester is used for:',
        options: [
            { label: 'A', text: 'Planting seeds' }, { label: 'B', text: 'Cutting, threshing, and cleaning grain' },
            { label: 'C', text: 'Watering crops' }, { label: 'D', text: 'Building fences' },
            { label: 'E', text: 'Spraying chemicals' }
        ],
        correctOption: 'B',
        explanation: 'A combined harvester performs cutting, threshing, and cleaning of grain crops in one operation.'
    },
    {
        id: 'gp-q111', unit: 'ag-unit-2', subject: 'Agricultural Science',
        topic: 'Farm Machinery, Tools and Structures', difficulty: 'medium',
        question: 'One disadvantage of using heavy farm machinery is:',
        options: [
            { label: 'A', text: 'It saves time' }, { label: 'B', text: 'It reduces labour' },
            { label: 'C', text: 'It can damage the soil structure' }, { label: 'D', text: 'It increases crop yield' },
            { label: 'E', text: 'It makes harvesting easier' }
        ],
        correctOption: 'C',
        explanation: 'Heavy machines can compact and damage soil structure, affecting water absorption.'
    },

    // ===== AG Unit 3: Crop Production =====
    {
        id: 'gp-q112', unit: 'ag-unit-3', subject: 'Agricultural Science',
        topic: 'Crop Production', difficulty: 'easy',
        question: 'Rice is an example of a:',
        options: [
            { label: 'A', text: 'Cash crop' }, { label: 'B', text: 'Decorative plant' },
            { label: 'C', text: 'Cereal crop' }, { label: 'D', text: 'Root crop' },
            { label: 'E', text: 'Tree crop' }
        ],
        correctOption: 'C',
        explanation: 'Rice is a cereal crop — a grain grown for food, which is a staple in Sierra Leone.'
    },
    {
        id: 'gp-q113', unit: 'ag-unit-3', subject: 'Agricultural Science',
        topic: 'Crop Production', difficulty: 'medium',
        question: 'Urban agriculture is the practice of:',
        options: [
            { label: 'A', text: 'Farming only in villages' }, { label: 'B', text: 'Growing crops in or near towns and cities' },
            { label: 'C', text: 'Farming in the forest' }, { label: 'D', text: 'Only rearing animals' },
            { label: 'E', text: 'Fishing in rivers' }
        ],
        correctOption: 'B',
        explanation: 'Urban agriculture involves growing food in or around cities, often in small spaces.'
    },
    {
        id: 'gp-q114', unit: 'ag-unit-3', subject: 'Agricultural Science',
        topic: 'Crop Production', difficulty: 'easy',
        question: 'Which of these is a vegetable crop?',
        options: [
            { label: 'A', text: 'Cocoa' }, { label: 'B', text: 'Rubber' },
            { label: 'C', text: 'Tomato' }, { label: 'D', text: 'Palm oil' },
            { label: 'E', text: 'Cotton' }
        ],
        correctOption: 'C',
        explanation: 'Tomatoes, peppers, and okra are common vegetable crops grown in Sierra Leone.'
    },
    {
        id: 'gp-q115', unit: 'ag-unit-3', subject: 'Agricultural Science',
        topic: 'Crop Production', difficulty: 'medium',
        question: 'Cassava is an example of a:',
        options: [
            { label: 'A', text: 'Tree crop' }, { label: 'B', text: 'Cereal crop' },
            { label: 'C', text: 'Root and tuber crop' }, { label: 'D', text: 'Oil crop' },
            { label: 'E', text: 'Fibre crop' }
        ],
        correctOption: 'C',
        explanation: 'Cassava is a root crop that is widely grown for food across Sierra Leone.'
    },

    // ===== AG Unit 4: Deforestation =====
    {
        id: 'gp-q116', unit: 'ag-unit-4', subject: 'Agricultural Science',
        topic: 'Deforestation', difficulty: 'easy',
        question: 'Deforestation means:',
        options: [
            { label: 'A', text: 'Planting new trees' }, { label: 'B', text: 'Protecting forests' },
            { label: 'C', text: 'Clearing forests by cutting down trees' }, { label: 'D', text: 'Watering trees' },
            { label: 'E', text: 'Growing grass' }
        ],
        correctOption: 'C',
        explanation: 'Deforestation is the removal or clearing of forests, often for farming or building.'
    },
    {
        id: 'gp-q117', unit: 'ag-unit-4', subject: 'Agricultural Science',
        topic: 'Deforestation', difficulty: 'medium',
        question: 'A disadvantage of deforestation is:',
        options: [
            { label: 'A', text: 'More trees grow' }, { label: 'B', text: 'Soil erosion and loss of wildlife' },
            { label: 'C', text: 'Better air quality' }, { label: 'D', text: 'More rainfall' },
            { label: 'E', text: 'Stronger soil' }
        ],
        correctOption: 'B',
        explanation: 'Deforestation causes soil erosion, habitat loss, climate change, and reduced rainfall.'
    },
    {
        id: 'gp-q118', unit: 'ag-unit-4', subject: 'Agricultural Science',
        topic: 'Deforestation', difficulty: 'medium',
        question: 'Which of these is a cause of deforestation?',
        options: [
            { label: 'A', text: 'Planting trees' }, { label: 'B', text: 'Building parks' },
            { label: 'C', text: 'Farming, logging, and mining' }, { label: 'D', text: 'Watering plants' },
            { label: 'E', text: 'Recycling paper' }
        ],
        correctOption: 'C',
        explanation: 'Agriculture expansion, logging for timber, and mining are major causes of deforestation.'
    },

    // ===== AG Unit 5: Soils and Organic Matter =====
    {
        id: 'gp-q119', unit: 'ag-unit-5', subject: 'Agricultural Science',
        topic: 'Soils and Organic Matter', difficulty: 'easy',
        question: 'Soil is made up of:',
        options: [
            { label: 'A', text: 'Only water' }, { label: 'B', text: 'Only rocks' },
            { label: 'C', text: 'Minerals, organic matter, air, and water' }, { label: 'D', text: 'Only sand' },
            { label: 'E', text: 'Only clay' }
        ],
        correctOption: 'C',
        explanation: 'Soil contains mineral particles, organic matter (humus), air, and water.'
    },
    {
        id: 'gp-q120', unit: 'ag-unit-5', subject: 'Agricultural Science',
        topic: 'Soils and Organic Matter', difficulty: 'medium',
        question: 'Organic matter in soil comes from:',
        options: [
            { label: 'A', text: 'Plastic and metal' }, { label: 'B', text: 'Decayed plants and animals' },
            { label: 'C', text: 'Rocks only' }, { label: 'D', text: 'Paint and chemicals' },
            { label: 'E', text: 'Concrete' }
        ],
        correctOption: 'B',
        explanation: 'Organic matter (humus) forms when dead plants and animals decompose in the soil.'
    },
    {
        id: 'gp-q121', unit: 'ag-unit-5', subject: 'Agricultural Science',
        topic: 'Soils and Organic Matter', difficulty: 'easy',
        question: 'Which soil type holds the most water?',
        options: [
            { label: 'A', text: 'Sandy soil' }, { label: 'B', text: 'Gravel' },
            { label: 'C', text: 'Clay soil' }, { label: 'D', text: 'Rocky soil' },
            { label: 'E', text: 'Stony soil' }
        ],
        correctOption: 'C',
        explanation: 'Clay soil has very small particles that hold water tightly, giving it the highest water retention.'
    },
    {
        id: 'gp-q122', unit: 'ag-unit-5', subject: 'Agricultural Science',
        topic: 'Soils and Organic Matter', difficulty: 'medium',
        question: 'The best soil for farming is:',
        options: [
            { label: 'A', text: 'Pure clay' }, { label: 'B', text: 'Pure sand' },
            { label: 'C', text: 'Loam soil (mixture of sand, clay, and humus)' }, { label: 'D', text: 'Gravel' },
            { label: 'E', text: 'Rocky soil' }
        ],
        correctOption: 'C',
        explanation: 'Loam is the best for farming — it drains well, retains some moisture, and is rich in nutrients.'
    },

    // ===== AG Unit 6: Forest Management =====
    {
        id: 'gp-q123', unit: 'ag-unit-6', subject: 'Agricultural Science',
        topic: 'Forest Management', difficulty: 'easy',
        question: 'A forest reserve is a protected area where:',
        options: [
            { label: 'A', text: 'Anyone can cut trees freely' }, { label: 'B', text: 'Trees and wildlife are conserved' },
            { label: 'C', text: 'Buildings are constructed' }, { label: 'D', text: 'Mining happens freely' },
            { label: 'E', text: 'Farming is always done' }
        ],
        correctOption: 'B',
        explanation: 'Forest reserves are protected areas where trees and wildlife are conserved by law.'
    },
    {
        id: 'gp-q124', unit: 'ag-unit-6', subject: 'Agricultural Science',
        topic: 'Forest Management', difficulty: 'medium',
        question: 'Sustainable harvesting of forests means:',
        options: [
            { label: 'A', text: 'Cutting all trees at once' }, { label: 'B', text: 'Using forest resources without replanting' },
            { label: 'C', text: 'Using resources while ensuring trees regrow for future use' },
            { label: 'D', text: 'Burning the whole forest' }, { label: 'E', text: 'Never using any forest products' }
        ],
        correctOption: 'C',
        explanation: 'Sustainable harvesting means using forest resources carefully so they can regenerate for the future.'
    },
    {
        id: 'gp-q125', unit: 'ag-unit-6', subject: 'Agricultural Science',
        topic: 'Forest Management', difficulty: 'medium',
        question: 'Trees help the environment by:',
        options: [
            { label: 'A', text: 'Producing carbon dioxide' }, { label: 'B', text: 'Causing soil erosion' },
            { label: 'C', text: 'Absorbing carbon dioxide and producing oxygen' },
            { label: 'D', text: 'Blocking rainfall' }, { label: 'E', text: 'Creating deserts' }
        ],
        correctOption: 'C',
        explanation: 'Trees absorb CO₂ from the air and release oxygen, which we need to breathe.'
    },

    // ===== AG Unit 7: Afforestation =====
    {
        id: 'gp-q126', unit: 'ag-unit-7', subject: 'Agricultural Science',
        topic: 'Afforestation', difficulty: 'easy',
        question: 'Afforestation means:',
        options: [
            { label: 'A', text: 'Cutting down trees' }, { label: 'B', text: 'Burning forests' },
            { label: 'C', text: 'Planting trees on land that had no forest before' },
            { label: 'D', text: 'Building houses in forests' }, { label: 'E', text: 'Hunting animals' }
        ],
        correctOption: 'C',
        explanation: 'Afforestation is planting trees on land where there were no trees before.'
    },
    {
        id: 'gp-q127', unit: 'ag-unit-7', subject: 'Agricultural Science',
        topic: 'Afforestation', difficulty: 'easy',
        question: 'One benefit of afforestation is:',
        options: [
            { label: 'A', text: 'More pollution' }, { label: 'B', text: 'More soil erosion' },
            { label: 'C', text: 'Prevention of soil erosion and cleaner air' }, { label: 'D', text: 'Less rainfall' },
            { label: 'E', text: 'More deserts' }
        ],
        correctOption: 'C',
        explanation: 'Planting trees prevents erosion (roots hold soil), produces oxygen, and improves air quality.'
    },
    {
        id: 'gp-q128', unit: 'ag-unit-7', subject: 'Agricultural Science',
        topic: 'Afforestation', difficulty: 'medium',
        question: 'Afforestation helps fight climate change by:',
        options: [
            { label: 'A', text: 'Releasing more carbon dioxide' }, { label: 'B', text: 'Producing smoke' },
            { label: 'C', text: 'Trees absorbing carbon dioxide from the atmosphere' },
            { label: 'D', text: 'Reducing oxygen' }, { label: 'E', text: 'Creating floods' }
        ],
        correctOption: 'C',
        explanation: 'Trees absorb CO₂ (a greenhouse gas), helping reduce global warming.'
    },

    // ===== AG Unit 8: Agricultural Environment and Soil Science =====
    {
        id: 'gp-q129', unit: 'ag-unit-8', subject: 'Agricultural Science',
        topic: 'Agricultural Environment and Soil Science', difficulty: 'easy',
        question: 'Which of these is a weather component that affects farming?',
        options: [
            { label: 'A', text: 'Television' }, { label: 'B', text: 'Rainfall' },
            { label: 'C', text: 'Electricity' }, { label: 'D', text: 'Transport' },
            { label: 'E', text: 'Education' }
        ],
        correctOption: 'B',
        explanation: 'Rainfall, temperature, sunlight, and wind are weather components that affect farming.'
    },
    {
        id: 'gp-q130', unit: 'ag-unit-8', subject: 'Agricultural Science',
        topic: 'Agricultural Environment and Soil Science', difficulty: 'medium',
        question: 'Harrowing is done to:',
        options: [
            { label: 'A', text: 'Harvest crops' }, { label: 'B', text: 'Plant seeds' },
            { label: 'C', text: 'Break up soil clumps and level the ground after ploughing' },
            { label: 'D', text: 'Water the plants' }, { label: 'E', text: 'Apply fertiliser' }
        ],
        correctOption: 'C',
        explanation: 'Harrowing smooths the soil after ploughing, breaking lumps to create a fine seedbed.'
    },
    {
        id: 'gp-q131', unit: 'ag-unit-8', subject: 'Agricultural Science',
        topic: 'Agricultural Environment and Soil Science', difficulty: 'easy',
        question: 'Ploughing helps farming by:',
        options: [
            { label: 'A', text: 'Removing all soil' }, { label: 'B', text: 'Turning over the soil to mix in nutrients' },
            { label: 'C', text: 'Making soil harder' }, { label: 'D', text: 'Removing all water' },
            { label: 'E', text: 'Adding salt to soil' }
        ],
        correctOption: 'B',
        explanation: 'Ploughing turns over the top layer of soil, mixing in nutrients and burying weeds.'
    },

    // ===== AG Unit 9: Agro-Forestry =====
    {
        id: 'gp-q132', unit: 'ag-unit-9', subject: 'Agricultural Science',
        topic: 'Agro-Forestry', difficulty: 'easy',
        question: 'Agro-forestry is a system that combines:',
        options: [
            { label: 'A', text: 'Fishing and hunting' }, { label: 'B', text: 'Growing trees with crops or livestock' },
            { label: 'C', text: 'Only planting flowers' }, { label: 'D', text: 'Only rearing fish' },
            { label: 'E', text: 'Only growing grass' }
        ],
        correctOption: 'B',
        explanation: 'Agro-forestry integrates trees with crops and/or animals on the same land.'
    },
    {
        id: 'gp-q133', unit: 'ag-unit-9', subject: 'Agricultural Science',
        topic: 'Agro-Forestry', difficulty: 'medium',
        question: 'Which of these is a forest product?',
        options: [
            { label: 'A', text: 'Cement' }, { label: 'B', text: 'Petrol' },
            { label: 'C', text: 'Timber' }, { label: 'D', text: 'Glass' },
            { label: 'E', text: 'Plastic' }
        ],
        correctOption: 'C',
        explanation: 'Timber (wood), fruits, medicines, and rubber are all products that come from forests.'
    },
    {
        id: 'gp-q134', unit: 'ag-unit-9', subject: 'Agricultural Science',
        topic: 'Agro-Forestry', difficulty: 'medium',
        question: 'An agro-climatic zone is defined by its:',
        options: [
            { label: 'A', text: 'Population only' }, { label: 'B', text: 'Climate conditions like rainfall and temperature' },
            { label: 'C', text: 'Number of cities' }, { label: 'D', text: 'Type of government' },
            { label: 'E', text: 'Number of schools' }
        ],
        correctOption: 'B',
        explanation: 'Agro-climatic zones are regions defined by climate features (rainfall, temperature) that affect what can be farmed.'
    },
    {
        id: 'gp-q135', unit: 'ag-unit-1', subject: 'Agricultural Science',
        topic: 'Concept of Agriculture and Environment', difficulty: 'medium',
        question: 'Land conservation means:',
        options: [
            { label: 'A', text: 'Using all land for buildings' }, { label: 'B', text: 'Wasting soil resources' },
            { label: 'C', text: 'Protecting and managing land to prevent degradation' },
            { label: 'D', text: 'Flooding all land' }, { label: 'E', text: 'Removing topsoil' }
        ],
        correctOption: 'C',
        explanation: 'Conservation protects land from erosion, pollution, and overuse to keep it productive.'
    },

    // ================================================================
    //  PHYSICAL HEALTH EDUCATION (15 Questions — 12 units × ~1-2 each)
    // ================================================================

    // ===== PHE Unit 1: The Meaning of PHE =====
    {
        id: 'gp-q136', unit: 'phe-unit-1', subject: 'Physical Health Education',
        topic: 'The Meaning of PHE', difficulty: 'easy',
        question: 'PHE stands for:',
        options: [
            { label: 'A', text: 'Public House Education' }, { label: 'B', text: 'Physical Health Education' },
            { label: 'C', text: 'Primary Health Examination' }, { label: 'D', text: 'Personal Hygiene Exercise' },
            { label: 'E', text: 'Practical Home Education' }
        ],
        correctOption: 'B',
        explanation: 'PHE stands for Physical Health Education — a subject about body care, fitness, and healthy living.'
    },

    // ===== PHE Unit 2: Fundamental Movement and Gymnastics =====
    {
        id: 'gp-q137', unit: 'phe-unit-2', subject: 'Physical Health Education',
        topic: 'Fundamental Movement and Gymnastics', difficulty: 'easy',
        question: 'Gymnastics helps to develop:',
        options: [
            { label: 'A', text: 'Only the brain' }, { label: 'B', text: 'Flexibility, balance, and coordination' },
            { label: 'C', text: 'Only reading skills' }, { label: 'D', text: 'Only writing skills' },
            { label: 'E', text: 'Only singing skills' }
        ],
        correctOption: 'B',
        explanation: 'Gymnastics develops physical qualities like flexibility, balance, and body coordination.'
    },

    // ===== PHE Unit 3: Games and Sports =====
    {
        id: 'gp-q138', unit: 'phe-unit-3', subject: 'Physical Health Education',
        topic: 'Games and Sports', difficulty: 'easy',
        question: 'How many players are on a soccer team on the field?',
        options: [
            { label: 'A', text: '9' }, { label: 'B', text: '10' },
            { label: 'C', text: '11' }, { label: 'D', text: '12' },
            { label: 'E', text: '15' }
        ],
        correctOption: 'C',
        explanation: 'A soccer (football) team has 11 players on the field, including the goalkeeper.'
    },
    {
        id: 'gp-q139', unit: 'phe-unit-3', subject: 'Physical Health Education',
        topic: 'Games and Sports', difficulty: 'medium',
        question: 'Dribbling in football means:',
        options: [
            { label: 'A', text: 'Throwing the ball' }, { label: 'B', text: 'Moving with the ball at your feet past opponents' },
            { label: 'C', text: 'Heading the ball' }, { label: 'D', text: 'Standing still' },
            { label: 'E', text: 'Sitting on the bench' }
        ],
        correctOption: 'B',
        explanation: 'Dribbling is the skill of moving with the ball close to your feet while avoiding opponents.'
    },

    // ===== PHE Unit 4: Hygiene and Disease Prevention =====
    {
        id: 'gp-q140', unit: 'phe-unit-4', subject: 'Physical Health Education',
        topic: 'Hygiene and Disease Prevention', difficulty: 'easy',
        question: 'Which disease is spread through the air when an infected person coughs?',
        options: [
            { label: 'A', text: 'Malaria' }, { label: 'B', text: 'Cholera' },
            { label: 'C', text: 'Tuberculosis' }, { label: 'D', text: 'River blindness' },
            { label: 'E', text: 'Bilharzia' }
        ],
        correctOption: 'C',
        explanation: 'Tuberculosis (TB) is an airborne disease spread through coughing and sneezing.'
    },

    // ===== PHE Unit 5: Foods and Nutrition =====
    {
        id: 'gp-q141', unit: 'phe-unit-5', subject: 'Physical Health Education',
        topic: 'Foods and Nutrition', difficulty: 'easy',
        question: '"Go Foods" give the body:',
        options: [
            { label: 'A', text: 'Protection from disease' }, { label: 'B', text: 'Energy to be active' },
            { label: 'C', text: 'Body-building nutrients' }, { label: 'D', text: 'Strong teeth only' },
            { label: 'E', text: 'Better eyesight only' }
        ],
        correctOption: 'B',
        explanation: 'Go Foods (carbohydrates and fats) provide energy. Grow Foods build the body. Glow Foods protect it.'
    },

    // ===== PHE Unit 6: Water and Water-Related Diseases =====
    {
        id: 'gp-q142', unit: 'phe-unit-6', subject: 'Physical Health Education',
        topic: 'Water and Water-Related Diseases', difficulty: 'medium',
        question: 'Typhoid is caused by drinking:',
        options: [
            { label: 'A', text: 'Clean water' }, { label: 'B', text: 'Contaminated (dirty) water' },
            { label: 'C', text: 'Boiled water' }, { label: 'D', text: 'Filtered water' },
            { label: 'E', text: 'Mineral water' }
        ],
        correctOption: 'B',
        explanation: 'Typhoid is a water-borne disease caused by bacteria in contaminated water and food.'
    },

    // ===== PHE Unit 7: Accidents and First Aid =====
    {
        id: 'gp-q143', unit: 'phe-unit-7', subject: 'Physical Health Education',
        topic: 'Accidents and First Aid', difficulty: 'easy',
        question: 'First aid is:',
        options: [
            { label: 'A', text: 'Surgery in a hospital' }, { label: 'B', text: 'The first help given to an injured person before a doctor arrives' },
            { label: 'C', text: 'Only done by doctors' }, { label: 'D', text: 'Giving medicine only' },
            { label: 'E', text: 'Calling the police' }
        ],
        correctOption: 'B',
        explanation: 'First aid is the immediate help given to an injured or sick person before professional medical care.'
    },
    {
        id: 'gp-q144', unit: 'phe-unit-7', subject: 'Physical Health Education',
        topic: 'Accidents and First Aid', difficulty: 'medium',
        question: 'A first aid box should contain:',
        options: [
            { label: 'A', text: 'Food and drinks' }, { label: 'B', text: 'Bandages, antiseptic, cotton wool, and scissors' },
            { label: 'C', text: 'Books and pencils' }, { label: 'D', text: 'Only plasters' },
            { label: 'E', text: 'Toys and games' }
        ],
        correctOption: 'B',
        explanation: 'A first aid kit contains bandages, antiseptic, cotton wool, plasters, scissors, and gloves.'
    },

    // ===== PHE Unit 8: Athletics =====
    {
        id: 'gp-q145', unit: 'phe-unit-8', subject: 'Physical Health Education',
        topic: 'Athletics', difficulty: 'easy',
        question: 'The 100-metre race is an example of a:',
        options: [
            { label: 'A', text: 'Field event' }, { label: 'B', text: 'Track event (sprint)' },
            { label: 'C', text: 'Swimming event' }, { label: 'D', text: 'Team sport' },
            { label: 'E', text: 'Gymnastics event' }
        ],
        correctOption: 'B',
        explanation: 'The 100m race is a sprint — a track event where athletes run on a track.'
    },

    // ===== PHE Unit 9: The Human Body Systems =====
    {
        id: 'gp-q146', unit: 'phe-unit-9', subject: 'Physical Health Education',
        topic: 'The Human Body Systems', difficulty: 'easy',
        question: 'The skeletal system is made up of:',
        options: [
            { label: 'A', text: 'Muscles' }, { label: 'B', text: 'Bones' },
            { label: 'C', text: 'Nerves' }, { label: 'D', text: 'Blood vessels' },
            { label: 'E', text: 'Skin' }
        ],
        correctOption: 'B',
        explanation: 'The skeletal system is made up of bones which support and protect the body.'
    },

    // ===== PHE Unit 10: Drugs and Drug Abuse =====
    {
        id: 'gp-q147', unit: 'phe-unit-10', subject: 'Physical Health Education',
        topic: 'Drugs and Drug Abuse', difficulty: 'medium',
        question: 'Essential drugs are drugs that:',
        options: [
            { label: 'A', text: 'Are harmful to the body' }, { label: 'B', text: 'Are needed to treat common illnesses' },
            { label: 'C', text: 'Should never be used' }, { label: 'D', text: 'Are illegal everywhere' },
            { label: 'E', text: 'Are only for adults' }
        ],
        correctOption: 'B',
        explanation: 'Essential drugs are medicines needed to treat common and serious illnesses (e.g. paracetamol, antibiotics).'
    },

    // ===== PHE Unit 11: Rest and Sleep =====
    {
        id: 'gp-q148', unit: 'phe-unit-11', subject: 'Physical Health Education',
        topic: 'Rest and Sleep', difficulty: 'easy',
        question: 'Adequate sleep is important because:',
        options: [
            { label: 'A', text: 'It wastes time' }, { label: 'B', text: 'It makes you lazy' },
            { label: 'C', text: 'It helps the body rest, repair, and grow' },
            { label: 'D', text: 'It is not necessary for children' }, { label: 'E', text: 'It causes sickness' }
        ],
        correctOption: 'C',
        explanation: 'Sleep allows the body to rest, repair tissues, and grow — especially important for children.'
    },

    // ===== PHE Unit 12: HIV/AIDS Education =====
    {
        id: 'gp-q149', unit: 'phe-unit-12', subject: 'Physical Health Education',
        topic: 'HIV/AIDS Education', difficulty: 'medium',
        question: 'HIV CANNOT be spread by:',
        options: [
            { label: 'A', text: 'Sharing needles' }, { label: 'B', text: 'Mother to child' },
            { label: 'C', text: 'Shaking hands or sharing food' }, { label: 'D', text: 'Contact with infected blood' },
            { label: 'E', text: 'Unprotected sex' }
        ],
        correctOption: 'C',
        explanation: 'HIV cannot spread through handshakes, hugging, sharing food, or mosquito bites.'
    },
    {
        id: 'gp-q150', unit: 'phe-unit-4', subject: 'Physical Health Education',
        topic: 'Hygiene and Disease Prevention', difficulty: 'easy',
        question: 'EPI stands for:',
        options: [
            { label: 'A', text: 'Early Physical Instruction' }, { label: 'B', text: 'Expanded Programme on Immunisation' },
            { label: 'C', text: 'Essential Primary Identification' }, { label: 'D', text: 'Exercise for Physical Improvement' },
            { label: 'E', text: 'Environmental Protection Initiative' }
        ],
        correctOption: 'B',
        explanation: 'EPI (Expanded Programme on Immunisation) provides free vaccines to children against diseases.'
    },
];

export default generalPaperQuizQuestions;
