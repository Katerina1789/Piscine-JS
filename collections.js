/*
  DATA TYPE DICTIONARY OF JavaScript

  Array:
    - Ordered list of values (indexed from 0).
    - Can contain any type (numbers, strings, objects, etc.).
    - Grows dynamically (aka not fixed size).
    - Used when you need a sequence: lists, collections ordered data.
    - Example: [1, 2, 3]

  Set:
    - Collection of unique values of any type (no duplicates).
    - Order is preserved by insertion.
    - Used when you want to remove duplicates or check membership quickly.
    - Example: Set {1, 2, 3}

  String:
    - Sequence of characters (text).
    - Immutable (cannot be changed in place).
    - Used for words, sentences, identifiers, anything textual.
    - Example: "hello"

  Object:
    - Key–value pairs (like a dictionary).
    - Keys are strings (or symbols), values can be anything.
    - Used to represent structured data: user profiles, settings, configs.
    - Example: { name: "Nikos", age: 28 }

  Map:
    - Key–value pairs like an object, but keys can be ANY type (even objects).
    - Maintains insertion order.
    - Used when you need reliable iteration or non-string keys.
    - Example: Map { 'a' => 1, 3 => 'c' }
*/


/*
TESTING:
const str = 'hello';
const arr = [1, 2, 1, 3];
const obj = { x: 45, y: 75, radius: 24 };
const set = new Set([1, 2, 1, 3]);
const map = new Map([
  ['a', 1],
  ['b', 2],
  [3, 'c'],
  [4, 'd'],
]);
*/


// arrToSet: Array -> Set
const arrToSet = (arr) => new Set(arr);

// arrToStr: Array -> string
const arrToStr = (arr) => arr.join('');

// setToArr: Set -> Array
const setToArr = (set) => [...set];

// setToStr: Set -> string
const setToStr = (set) => [...set].join('');

// strToArr: string -> Array
const strToArr = (str) => [...str];

// strToSet: string -> Set
const strToSet = (str) => new Set(str);

// mapToObj: Map -> Object
// Object.fromEntries converts [key, value] pairs into an object
const mapToObj = (map) => Object.fromEntries(map);

// objToArr: Object -> Array (values only)
const objToArr = (obj) => Object.values(obj);

// objToMap: Object -> Map
const objToMap = (obj) => new Map(Object.entries(obj));

// arrToObj: Array -> Object (index -> value)
const arrToObj = (arr) => Object.fromEntries(arr.map((v, i) => [i, v]));

// strToObj: string -> Object (index -> character)
const strToObj = (str) => Object.fromEntries([...str].map((v, i) => [i, v]));

// superTypeOf: returns advanced type names
const superTypeOf = (value) => {
  if (value === null) return 'null';
  if (value instanceof Map) return 'Map';
  if (value instanceof Set) return 'Set';
  if (Array.isArray(value)) return 'Array';
  return typeof value === 'object'
    ? 'Object'
    : typeof value === 'string'
    ? 'String'
    : typeof value === 'number'
    ? 'Number'
    : typeof value === 'boolean'
    ? 'Boolean'
    : typeof value === 'function'
    ? 'Function'
    : typeof value === 'undefined'
    ? 'undefined'
    : typeof value;
};


/*
TESTING:
console.log('--- arrToSet ---');
console.log(arrToSet(arr)); // Set { 1, 2, 3 }

console.log('--- arrToStr ---');
console.log(arrToStr(arr)); // '1213'

console.log('--- setToArr ---');
console.log(setToArr(set)); // [1, 2, 3]

console.log('--- setToStr ---');
console.log(setToStr(set)); // '123'

console.log('--- strToArr ---');
console.log(strToArr(str)); // ['h', 'e', 'l', 'l', 'o']

console.log('--- strToSet ---');
console.log(strToSet(str)); // Set { 'h', 'e', 'l', 'o' }

console.log('--- mapToObj ---');
console.log(mapToObj(map)); // { a: 1, b: 2, '3': 'c', '4': 'd' }

console.log('--- objToArr ---');
console.log(objToArr(obj)); // [45, 75, 24]

console.log('--- objToMap ---');
console.log(objToMap(obj)); // Map { 'x' => 45, 'y' => 75, 'radius' => 24 }

console.log('--- arrToObj ---');
console.log(arrToObj(arr)); // { '0': 1, '1': 2, '2': 1, '3': 3 }

console.log('--- strToObj ---');
console.log(strToObj(str)); // { '0': 'h', '1': 'e', '2': 'l', '3': 'l', '4': 'o' }

console.log('--- superTypeOf ---');
console.log(superTypeOf(map));         // 'Map'
console.log(superTypeOf(set));         // 'Set'
console.log(superTypeOf(obj));         // 'Object'
console.log(superTypeOf(str));         // 'String'
console.log(superTypeOf(666));         // 'Number'
console.log(superTypeOf(NaN));         // 'Number'
console.log(superTypeOf(arr));         // 'Array'
console.log(superTypeOf(null));        // 'null'
console.log(superTypeOf(undefined));   // 'undefined'
console.log(superTypeOf(superTypeOf)); // 'Function'

run in Terminal: node ./collections.js
*/
