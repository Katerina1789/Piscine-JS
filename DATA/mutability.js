/*
TESTING:
const person = {
  name: 'Rick',
  age: 77,
  country: 'US',
};
*/

// clone1, clone2, samePerson must be created from the provided person object
// person is an object -> objects are reference types in JS
// copying them incorrectly will copy the reference, not the values

// clone1: shallow copy using spread syntax
// Option 1: spread copies enumerable own properties -> creates a new object with same values
const clone1 = { ...person };
// const clone1 = Object.assign({}, person);

// clone2: shallow copy using Object.assign
// Option 2: Object.assign(target, source) -> also creates a new object with same values
// I prefer Option 2 since JS uses Object. a lot and I want to have a consistent mental model
const clone2 = Object.assign({}, person);
// const clone2 = { ...person };

// samePerson: reference to the same object (like a pointer in Go)
// changing person will also change samePerson because both point to the same memory location
const samePerson = person;

// Increase the age of person by one
person.age += 1;

// Set the country of person to 'FR'
person.country = 'FR';

/*
TESTING:

console.log('--- Initial clones ---');
console.log('clone1:', clone1);   // should show original values
console.log('clone2:', clone2);   // should show original values
console.log('samePerson:', samePerson); // should show updated values
console.log('person:', person);   // should show updated values

console.log('--- Value checks ---');
console.log(clone1.age === 77);        // true
console.log(clone2.country === 'US');  // true

console.log(samePerson.age === 78);    // true
console.log(person.age === 78);        // true

console.log('--- Reference checks ---');
console.log(person === samePerson);    // true
console.log(person === clone1);        // false
console.log(person === clone2);        // false

run in Terminal: node ./mutability.js 
*/
