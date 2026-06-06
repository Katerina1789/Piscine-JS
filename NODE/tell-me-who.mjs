// readdir(): reads a directory and returns an array of filenames
// sort(): sorts array alphabetically, used here on last names
// map() with index: formats each name with its 1-based position number
// split('_'): separates firstname and lastname from the filename format Firstname_Lastname.json
// slice(0, -5): removes the .json extension (last 5 characters)

import { readdir } from 'fs/promises';

const dirPath = process.argv[2];

const files = await readdir(dirPath);

// parse each filename into "Lastname Firstname" and sort alphabetically by lastname
const guests = files
  .map((file) => {
    const [first, last] = file.slice(0, -5).split('_');
    return `${last} ${first}`;
  })
  .sort();

// print each guest with a 1-based index
guests.forEach((guest, i) => console.log(`${i + 1}. ${guest}`));
