// constant string value
// use " " if the string contains a ' -> 2 bytes per character (UTF-16) + emojis = 4 bytes
const str = 'Biba Buba';

// constant number value
// JS has only one number type (integers + floats) aka 64‑bit IEEE 754 double -> 8 bytes
const num = 1510; 

// constant boolean value
// used for conditions, comparisons, logic -> engine‑dependent byte count (in Go it is 1 byte)
const bool = true;

// constant undefined value (no assigned value)
const undef = undefined;

/*
TESTING:
console.log(str);        // 'Biba Buba'
console.log(typeof str); // 'string'

console.log(num);        // 1510
console.log(typeof num); // 'number'

console.log(bool);       // true
console.log(typeof bool);// 'boolean'

console.log(undef);      // undefined
console.log(typeof undef);// 'undefined'

run in Terminal: node ./primitives.js 
*/
