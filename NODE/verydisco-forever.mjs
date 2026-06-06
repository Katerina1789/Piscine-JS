// process.argv: array of command line arguments, index 2 is the first user argument
// writeFile(): writes a string to a file, creates it if it doesn't exist, overwrites if it does
// import: ES module syntax to bring in Node built-in modules using their URL path

import { writeFile } from 'fs/promises';

// disco transforms one word by splitting it in half and swapping the two halves
const disco = (word) => {
  const mid = Math.ceil(word.length / 2);
  return word.slice(mid) + word.slice(0, mid);
};

// take the first argument, apply disco to each word, write result to file instead of console
const input = process.argv[2] || '';
const result = input.split(' ').map(disco).join(' ');

await writeFile('verydisco-forever.txt', result);
