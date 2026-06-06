// Buffer.from(string, encoding): converts a string to a buffer using a given encoding
// buffer.toString(encoding): converts a buffer back to a string in a given encoding
// base64: an encoding that converts binary/text data to a safe ASCII string
// readFile(): reads a file's content, writeFile(): saves content to a file

import { readFile, writeFile } from 'fs/promises';

const [filePath, keyword, customName] = process.argv.slice(2);

const content = await readFile(filePath, 'utf8');

if (keyword === 'encode') {
  // convert file content to base64 and save to cypher.txt or custom name
  const encoded = Buffer.from(content).toString('base64');
  await writeFile(customName || 'cypher.txt', encoded);
} else if (keyword === 'decode') {
  // convert base64 content back to plain text and save to clear.txt or custom name
  const decoded = Buffer.from(content, 'base64').toString('utf8');
  await writeFile(customName || 'clear.txt', decoded);
}
