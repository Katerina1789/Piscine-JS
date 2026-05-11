/*
TESTING:
const sourceObject = {
  num: 42,
  bool: true,
  str: 'some text',
  log: console.log,
}
*/

// REMINDER: A key is the name of a property inside an object and it’s always a string

// get: takes a key and returns the corresponding value from sourceObject
// objects store key/value pairs so we access the value using bracket notation
const get = (key) => sourceObject[key];

// set: takes a key and a value
// updates the property in sourceObject and returns the new value
// this mutates the original object (like modifying a struct in Go)
const set = (key, value) => {
  sourceObject[key] = value;
  return value;
};

/*
TESTING:
console.log('--- Initial sourceObject ---');
console.log(sourceObject);
// { num: 42, bool: true, str: 'some text', log: [Function: log] }

console.log('--- get tests ---');
console.log(get('num'));     // 42
console.log(get('bool'));    // true
console.log(get('str'));     // 'some text'
console.log(get('log'));     // console.log function
console.log(get('missing')); // undefined (key does not exist)

console.log('--- set tests ---');
console.log(set('num', 100));     // 100
console.log(set('str', 'updated'));// 'updated'
console.log(set('newKey', 999));   // 999 (creates a new property)

console.log('--- sourceObject after set ---');
console.log(sourceObject);
// num: 100
// bool: true
// str: 'updated'
// log: console.log
// newKey: 999

console.log('--- Reference checks ---');
console.log(sourceObject.num === 100);       // true
console.log(sourceObject.str === 'updated'); // true
console.log(sourceObject.newKey === 999);    // true

run in Terminal: node ./change.js 
*/
