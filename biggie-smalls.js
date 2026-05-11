// smalls: smallest positive number JavaScript can represent (and it is 5e-324)
// this is the closest number to 0 without being 0
const smalls = Number.MIN_VALUE;

// biggie: largest number JavaScript can represent (and it is infinity)
// the largest printable number is Number.MAX_VALUE (which is approximately 1.7976931348623157e+308)
const biggie = Number.POSITIVE_INFINITY;

/*
TESTING:
console.log('--- smalls ---');
console.log(smalls); // 5e-324 (very close to 0)

console.log('--- biggie ---');
console.log(biggie); // Infinity

console.log('--- type checks ---');
console.log(typeof smalls); // 'number'
console.log(typeof biggie); // 'number'

console.log('--- behavior checks ---');
console.log(smalls > 0); // true
console.log(biggie + 1 === biggie); // true

run in Terminal: node ./biggie-smalls.js
*/
