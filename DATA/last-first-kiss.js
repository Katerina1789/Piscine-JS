// first: takes an array or a string and returns its first element/character
// arrays and strings both use index 0 for the first value
const first = (input) => input[0];

// last: takes an array or a string and returns its last element/character
// .length gives the size, so last index is length - 1
const last = (input) => input[input.length - 1];

// kiss: returns an array with [last, first]
// order matters: last element first, then first element
const kiss = (input) => [last(input), first(input)];


/*
TESTING:

console.log('--- first tests ---');
console.log(first('Biba'));          // 'B'
console.log(first([10, 20, 30]));    // 10
console.log(first(''));              // undefined (empty string)
console.log(first([]));              // undefined (empty array)

console.log('--- last tests ---');
console.log(last('Buba'));           // 'a'
console.log(last([10, 20, 30]));     // 30
console.log(last(''));               // undefined
console.log(last([]));               // undefined

console.log('--- kiss tests ---');
console.log(kiss('Biba'));           // ['a', 'B']
console.log(kiss([10, 20, 30]));     // [30, 10]
console.log(kiss('A'));              // ['A', 'A']
console.log(kiss([5]));              // [5, 5]

run in Terminal: node ./last-first-kiss.js
*/
