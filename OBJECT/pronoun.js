// split(): splits a string into an array of words by a given separator
// toLowerCase(): converts a string to lowercase for case-insensitive comparison
// replace(): removes punctuation from words using regex
// includes(): checks if an array or string contains a given value
// forEach(): loops through each element of an array

const PRONOUNS = ['i', 'you', 'he', 'she', 'it', 'they', 'we'];

// pronoun returns an object where each key is a pronoun found in the string with its following word and count
export const pronoun = (str) => {
  // clean and split string into lowercase words, stripping punctuation from each word
  const words = str.split(/\s+/).map((w) => w.replace(/[^a-zA-Z]/g, '').toLowerCase());

  const result = {};

  words.forEach((word, i) => {
    // if word is not a pronoun, skip it
    if (!PRONOUNS.includes(word)) return;

    // initialise the pronoun entry if it doesn't exist yet
    if (!result[word]) result[word] = { word: [], count: 0 };

    result[word].count++;

    // get the next word, only add it if it exists and is not itself a pronoun
    const next = words[i + 1];
    if (next && !PRONOUNS.includes(next)) result[word].word.push(next);
  });

  return result;
};
