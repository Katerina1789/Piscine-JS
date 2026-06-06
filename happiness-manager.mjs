// readdir/readFile/writeFile: Node file system operations
// JSON.parse/stringify: converts between JSON strings and objects
// Math.ceil(): rounds up for bottle/pack calculations
// Promise.all: reads all guest files concurrently
// process.exit(): exits the script early when no one is coming

import { readdir, readFile, writeFile } from 'fs/promises';
import { join } from 'path';

const [guestsDir, outputFile] = process.argv.slice(2);

// read all guest files and parse them
const files = await readdir(guestsDir);
const guests = await Promise.all(
  files.map(async (f) => JSON.parse(await readFile(join(guestsDir, f), 'utf8')))
);

// filter to only yes answers
const vips = guests.filter((g) => g.answer === 'yes');

if (vips.length === 0) {
  console.log('No one is coming.');
  process.exit(0);
}

// count food and drink preferences
const counts = { carnivore: 0, fish: 0, everything: 0, vegg: 0 };
const drinks = { 'iced-tea': 0, water: 0, 'sparkling-water': 0, soft: 0 };

vips.forEach(({ food, drink }) => {
  if (food === 'carnivore') counts.carnivore++;
  else if (food === 'fish') counts.fish++;
  else if (food === 'everything') counts.everything++;
  else if (food === 'vegan' || food === 'veggie') counts.vegg++;

  if (drink === 'iced-tea') drinks['iced-tea']++;
  else if (drink === 'water') drinks.water++;
  else if (drink === 'sparkling-water') drinks['sparkling-water']++;
  else if (drink === 'soft') drinks.soft++;
});

// load existing file if it exists, otherwise start fresh
let list = {};
try {
  list = JSON.parse(await readFile(outputFile, 'utf8'));
} catch { /* file doesn't exist yet, start empty */ }

// potatoes: 1 per vip
list.potatoes = vips.length;

// vegg food: per 3 vegg vips (rounded up)
if (counts.vegg > 0) {
  list.mushrooms = counts.vegg;
  list.eggplants = Math.ceil(counts.vegg / 3);
  list.courgettes = Math.ceil(counts.vegg / 3);
  list.hummus = Math.ceil(counts.vegg / 3);
}

// meat/fish/everything food: 1 per person
if (counts.carnivore > 0) list.burgers = counts.carnivore;
if (counts.fish > 0) list.sardines = counts.fish;
if (counts.everything > 0) list.kebabs = counts.everything;

// drinks: bottles per group size
if (drinks['iced-tea'] > 0) list['iced-tea-bottles'] = Math.ceil(drinks['iced-tea'] / 6);
if (drinks.water > 0) list['water-bottles'] = Math.ceil(drinks.water / 4);
if (drinks['sparkling-water'] > 0) list['sparkling-water-bottles'] = Math.ceil(drinks['sparkling-water'] / 4);
if (drinks.soft > 0) list['soft-bottles'] = Math.ceil(drinks.soft / 4);

await writeFile(outputFile, JSON.stringify(list));
