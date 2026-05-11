// max: returns the largest of two numbers
// uses a ternary: if a > b return a, otherwise return b
// a ternary operator is a tiny, compact way to write an if/else in a single line [condition ? valueIfTrue : valueIfFalse]
const max = (a, b) => (a > b ? a : b);

// min: returns the smallest of two numbers
// same logic but reversed
const min = (a, b) => (a < b ? a : b);

/*
TESTING:
console.log('--- max ---');
console.log(max(5, 10));     // 10
console.log(max(10, 5));     // 10
console.log(max(-3, -7));    // -3
console.log(max(0, 0));      // 0

console.log('--- min ---');
console.log(min(5, 10));     // 5
console.log(min(10, 5));     // 5
console.log(min(-3, -7));    // -7
console.log(min(0, 0));      // 0

console.log('--- edge cases ---');
console.log(max(-0, 0));     // 0
console.log(min(-0, 0));     // 0 (it can return -0 but it is a JS quirk, still correct)

run in Terminal: node ./min-max.js
*/
