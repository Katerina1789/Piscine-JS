// process.argv: array of command line arguments, index 0 is node, index 1 is script path, index 2+ are user args
// split(): splits a string into an array by a separator
// slice(): extracts a portion of a string by start and end index
// Math.ceil(): rounds up to nearest integer, used to split odd-length words correctly
// join(): joins an array of strings into one string with a separator

// disco transforms one word by splitting it in half and swapping the two halves
const disco = (word) => {
  const mid = Math.ceil(word.length / 2);
  return word.slice(mid) + word.slice(0, mid);
};

// take the first argument after the script name and apply disco to each word
const input = process.argv[2] || "";
const result = input.split(" ").map(disco).join(" ");

console.log(result);
