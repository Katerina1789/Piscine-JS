// split(): splits a string by a separator to extract parts
// toLowerCase(): normalises category names to handle mixed case like 'Orders' and 'orders'
// replace(): converts spaces to underscores and strips punctuation for object keys
// trim(): removes leading/trailing whitespace from extracted strings

// toKey converts a phrase to a snake_case key by lowercasing and replacing spaces with underscores
const toKey = (phrase) =>
  phrase.toLowerCase().trim().replace(/[^a-z0-9\s]/g, '').trim().replace(/\s+/g, '_');

// neuron parses an array of interaction strings into a structured object grouped by category
export const neuron = (data) => {
  const result = {};

  data.forEach((entry) => {
    // split into 'Category: phrase' and 'Response: response' parts
    const [left, response] = entry.split(' - Response: ');
    const colonIndex = left.indexOf(':');
    const category = left.slice(0, colonIndex).toLowerCase().trim();
    const phrase = left.slice(colonIndex + 1).trim();

    // build the snake_case key from the phrase, keeping punctuation in the stored phrase
    const key = toKey(phrase);

    // initialise the category object if it doesn't exist yet
    if (!result[category]) result[category] = {};

    // initialise the entry if it doesn't exist yet, using singular form of category as property name
    if (!result[category][key]) {
      // singular: remove trailing 's' from category (questions->question, orders->order)
      const singular = category.replace(/s$/, '');
      result[category][key] = { [singular]: phrase, responses: [] };
    }

    result[category][key].responses.push(response);
  });

  return result;
};
