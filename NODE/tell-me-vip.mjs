// readdir(): reads a directory and returns filenames
// readFile(): reads a file's content as a string
// JSON.parse(): parses a JSON string into an object
// join(): constructs a full file path from directory and filename
// filter(): keeps only guests who answered 'yes'
// writeFile(): saves the vip list to vip.txt

import { readdir, readFile, writeFile } from 'fs/promises';
import { join } from 'path';

const dirPath = process.argv[2];

const files = await readdir(dirPath);

// read and parse each guest file, keeping track of the filename for the name
const guests = await Promise.all(
  files.map(async (file) => {
    const content = await readFile(join(dirPath, file), 'utf8');
    const { answer } = JSON.parse(content);
    const [first, last] = file.slice(0, -5).split('_');
    return { name: `${last} ${first}`, answer };
  })
);

// filter to only yes answers, sort alphabetically, format with 1-based index
const vip = guests
  .filter(({ answer }) => answer === 'yes')
  .map(({ name }) => name)
  .sort();

const output = vip.map((name, i) => `${i + 1}. ${name}`).join('\n');

await writeFile('vip.txt', output);
