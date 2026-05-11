// concatStr: takes 2 arguments and concatenates them
// strings use the + operator to join values together (so both arguments are returned as one combined string)
const concatStr = (a, b) => String(a) + String(b);

/*
TESTING:

console.log('--- concatStr tests ---');
console.log(concatStr('Biba', 'Buba'));     // 'BibaBuba'
console.log(concatStr('Hello ', 'World'));  // 'Hello World'
console.log(concatStr('', 'Test'));         // 'Test'
console.log(concatStr('Test', ''));         // 'Test'
console.log(concatStr('', ''));             // ''
console.log(concatStr(1, 2));               // '12'

run in Terminal: node ./concat-str.js
*/
