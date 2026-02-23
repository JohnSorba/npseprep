const WORDNIK_API_KEY = import.meta.env.VITE_WORDNIK_API_KEY;
const BASE_URL = 'https://api.wordnik.com/v4';

/**
 * Fetch word details from Wordnik API
 * @param {string} word - The word to fetch
 */
export const fetchWordDetails = async (word) => {
    if (!WORDNIK_API_KEY) {
        console.warn('Wordnik API Key not found. Please set VITE_WORDNIK_API_KEY in your .env file.');
        return null;
    }

    try {
        // 1. Fetch Definitions
        const defResponse = await fetch(`${BASE_URL}/word.json/${word}/definitions?limit=3&includeRelated=false&sourceDictionaries=all&useCanonical=false&includeTags=false&api_key=${WORDNIK_API_KEY}`);
        const definitions = await defResponse.json();

        // 2. Fetch Examples
        const exResponse = await fetch(`${BASE_URL}/word.json/${word}/examples?includeDuplicates=false&useCanonical=false&limit=5&api_key=${WORDNIK_API_KEY}`);
        const examples = await exResponse.json();

        // 3. Fetch Pronunciations
        const pronResponse = await fetch(`${BASE_URL}/word.json/${word}/pronunciations?useCanonical=false&limit=1&api_key=${WORDNIK_API_KEY}`);
        const pronunciations = await pronResponse.json();

        return {
            term: word,
            definition: definitions[0]?.text || 'No definition found.',
            example: examples.examples?.[0]?.text || 'No example found.',
            pronunciation: pronunciations[0]?.raw || ''
        };
    } catch (error) {
        console.error(`Error fetching details for word "${word}":`, error);
        return null;
    }
};
