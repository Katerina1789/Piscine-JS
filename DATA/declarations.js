// escapeStr: string containing special characters
// includes `, \\, /, ", '  -> using " " since ' is present
const escapeStr = "` \\\\ / \" '";

// Freezing an object prevents extensions and makes existing properties non-writable and non-configurable

// arr: array with values 4 and '2'
// arrays keep ordered values -> index-based using numbers as keys, starting at 0
// they have a special property 'length' to get the size of the list
const arr = Object.freeze([4, '2']);

// obj: object containing primitive values
// objects store key/value pairs -> keys are strings, values can be any type
const obj = Object.freeze({
  // string value
  str: 'Biba Buba',

  // number value
  num: 1510,

  // boolean value 
  bool: true,

  // undefined value 
  undef: undefined,
});

// nested: object containing an array + object
const nested = Object.freeze({
  // array with 4, undefined, '2'
  // arrays are objects with numeric keys
  arr: Object.freeze([4, undefined, '2']),

  // object with primitive values
  obj: Object.freeze({
    // string value
    str: 'nest',

    // number value
    num: 2025,

    // boolean value
    bool: true,
  }),
});

/*
TESTING:
console.log(escapeStr); // check special characters

console.log(arr);       // [4, '2']
arr[0] = 999;
console.log(arr);       // still [4, '2'] because frozen

console.log(obj);
obj.str = 'changed';
console.log(obj.str);   // still 'Biba Buba'

console.log(nested);
nested.arr[0] = 999;
console.log(nested.arr[0]); // still 4

run in Terminal: node ./declarations.js  
*/
