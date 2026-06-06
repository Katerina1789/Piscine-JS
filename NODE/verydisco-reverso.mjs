// process.argv: array of command line arguments, index 2 is the file path
// readFile(): reads a file's content as a string
// Math.floor(): rounds down, used to split even-length words (reverso of Math.ceil)
// try/catch: handles errors if the file doesn't exist or can't be read

import { readFile } from 'fs/promises';

// reverso is the inverse of disco: split with Math.floor and swap halves back
const reverso = (word) => {
  const mid = Math.floor(word.length / 2);
  return word.slice(mid) + word.slice(0, mid);
};

// read the file path from args, read its content, apply reverso to each word
const filePath = process.argv[2];

try {
  const content = await readFile(filePath, 'utf8');
  const result = content.split(' ').map(reverso).join(' ');
  console.log(result);
} catch (err) {
  console.error(`Error reading file: ${err.message}`);
}
