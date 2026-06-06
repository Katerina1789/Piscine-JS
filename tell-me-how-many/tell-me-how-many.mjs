// process.argv: array of command line arguments, index 2 is the optional directory path
// process.cwd(): returns the current working directory, used as fallback when no arg is given
// readdir(): reads a directory and returns an array of its entries
// try/catch: handles errors if the directory doesn't exist or can't be read

import { readdir } from 'fs/promises';

// use the argument if provided, otherwise default to the current working directory
const dirPath = process.argv[2] || process.cwd();

try {
  const entries = await readdir(dirPath);
  console.log(entries.length);
} catch (err) {
  console.error(`Error reading directory: ${err.message}`);
}
