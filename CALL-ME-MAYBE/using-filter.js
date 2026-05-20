// filter(): creates a new array containing only elements that pass a condition
// string.length: returns the number of characters in a string
// startsWith(): checks if a string begins with a given character
// toLowerCase(): converts a string to lowercase
// includes(): checks if a string contains a given character
// match(): returns an array of regex matches or null
// Set(): stores unique values, useful for counting distinct vowels
// object.property: accesses a value from an object
// logical AND (&&): all conditions must be true
// logical NOT (!): negates a condition

// filterShortStateName returns strings with fewer than 7 characters
function filterShortStateName(arr) {
  return arr.filter(str => str.length < 7);
}

// filterStartVowel returns strings that start with a vowel
function filterStartVowel(arr) {
  return arr.filter(str => {
    const first = str[0].toLowerCase();
    return ['a', 'e', 'i', 'o', 'u'].includes(first);
  });
}

// filter5Vowels returns strings containing at least 5 vowels
function filter5Vowels(arr) {
  return arr.filter(str => {
    const matches = str.toLowerCase().match(/[aeiou]/g);
    return matches && matches.length >= 5;
  });
}

// filter1DistinctVowel returns strings containing only one distinct vowel
function filter1DistinctVowel(arr) {
  return arr.filter(str => {
    const vowels = str.toLowerCase().match(/[aeiou]/g);
    if (!vowels) return false;
    const distinct = new Set(vowels);
    return distinct.size === 1;
  });
}

// multiFilter returns objects that satisfy all four filtering rules
function multiFilter(arr) {
  return arr.filter(obj => {
    const capitalOK = obj.capital.length >= 8;
    const nameOK = !['a', 'e', 'i', 'o', 'u'].includes(obj.name[0].toLowerCase());
    const tagOK = /[aeiou]/i.test(obj.tag);
    const regionOK = obj.region !== 'South';
    return capitalOK && nameOK && tagOK && regionOK;
  });
}

/*
TESTING:

console.log(filterShortStateName(['Texas', 'Alabama', 'Ohio']));
// Expected: ['Texas', 'Ohio']

console.log(filterStartVowel(['Alaska', 'Texas', 'Ohio', 'Utah']));
// Expected: ['Alaska', 'Ohio', 'Utah']

console.log(filter5Vowels(['California', 'Mississippi', 'Queueing']));
// Expected: ['Queueing']

console.log(filter1DistinctVowel(['Alabama', 'Tennessee', 'Mississippi', 'Colorado']));
// Expected: ['Alabama', 'Mississippi']

console.log(multiFilter([
  { name: 'Texas', capital: 'Austin', tag: 'TX', region: 'South' },
  { name: 'Colorado', capital: 'DenverCity', tag: 'CO', region: 'West' },
  { name: 'Florida', capital: 'Tallahassee', tag: 'FLA', region: 'South' },
  { name: 'Montana', capital: 'HelenaTown', tag: 'MT', region: 'West' },
]));
// Expected:
// [
//   { name: 'Colorado', capital: 'DenverCity', tag: 'CO', region: 'West' },
//   { name: 'Montana', capital: 'HelenaTown', tag: 'MT', region: 'West' },
// ]
*/
