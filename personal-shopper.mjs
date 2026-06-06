// process.argv: command line arguments
// readFile/writeFile/rm: Node file system operations
// JSON.parse/stringify: converts between JSON strings and objects
// isNaN/Number: checks and converts numeric arguments
// console.error: prints errors to stderr

import { readFile, writeFile, rm } from 'fs/promises';

const [filePath, command, elem, rawAmount] = process.argv.slice(2);

// readList reads the JSON file and returns the parsed object
const readList = async () => {
  try {
    return JSON.parse(await readFile(filePath, 'utf8'));
  } catch {
    return {};
  }
};

// saveList writes the object back to the JSON file
const saveList = async (list) =>
  writeFile(filePath, JSON.stringify(list, null, 2));

const help = `Commands:
- create: takes a filename as argument and create it (should have .json extension specified)
- delete: takes a filename as argument and delete it
- add: takes an element name and optional number, adds it to the list
- rm: takes an element name and optional number, removes it from the list
- ls: prints the current list
- help: prints this help message`;

if (command === 'create') {
  await saveList({});

} else if (command === 'delete') {
  await rm(filePath);

} else if (command === 'add') {
  // no elem specified: print error to stderr
  if (!elem) { process.stderr.write('No elem specified.\n'); process.exit(0); }

  const list = await readList();
  const current = list[elem] || 0;
  const amount = isNaN(Number(rawAmount)) || rawAmount === undefined ? 1 : Number(rawAmount);
  const newVal = current + amount;

  // if result is <= 0, delete the entry
  if (newVal <= 0) delete list[elem];
  else list[elem] = newVal;

  await saveList(list);

} else if (command === 'rm') {
  // no elem specified: print error to stderr
  if (!elem) { process.stderr.write('No elem specified.\n'); process.exit(0); }

  const list = await readList();
  const amount = rawAmount === undefined ? undefined : Number(rawAmount);

  // negative amount behaves like add — even if elem doesn't exist yet
  if (amount !== undefined && !isNaN(amount) && amount < 0) {
    const current = list[elem] || 0;
    list[elem] = current - amount;
    await saveList(list);
    process.exit(0);
  }

  // elem not in list: do nothing
  if (!(elem in list)) { await saveList(list); process.exit(0); }

  if (rawAmount === undefined) {
    // no amount: delete the entry entirely
    delete list[elem];
  } else if (isNaN(amount)) {
    // NaN amount: print error, do nothing
    process.stderr.write('Unexpected request: nothing has been removed.\n');
  } else {
    // positive amount: subtract from current value
    const newVal = list[elem] - amount;
    if (newVal <= 0) delete list[elem];
    else list[elem] = newVal;
  }

  await saveList(list);

} else if (command === 'ls' || !command) {
  const list = await readList();
  const entries = Object.entries(list);
  if (entries.length === 0) {
    console.log('Empty list.');
  } else {
    entries.forEach(([key, val]) => console.log(`- ${key} (${val})`));
  }

} else if (command === 'help' || !command) {
  console.log(help);
}
