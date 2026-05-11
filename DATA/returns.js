// id: takes one argument (a value) and returns it unchanged
// this is called the "identity function"
const id = (value) => value;

// getLength: takes a string OR an array and returns its length
// .length works for both arrays and strings in JavaScript
const getLength = (input) => input.length;

/*
TESTING:

console.log('--- id tests ---');
console.log(id(5));                 // 5
console.log(id('hello'));           // hello
console.log(id([1, 2, 3]));         // [ 1, 2, 3 ]
console.log(id({ a: 1 }));          // { a: 1 }

console.log('--- getLength tests ---');
console.log(getLength('Biba Buba'));     // 9
console.log(getLength([1, 2, 3, 4]));    // 4
console.log(getLength([]));              // 0
console.log(getLength(''));              // 0

run in Terminal: node ./returns.js
*/
