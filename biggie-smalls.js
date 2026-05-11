// smalls: smallest number JavaScript can represent (and it is minus infinity)
// the smallest positive numeric value representable in JavaScript is Number.MIN_VALUE (which is 5E-324)
const smalls = Number.NEGATIVE_INFINITY;

// biggie: largest number JavaScript can represent (and it is infinity)
// the largest positive numeric value representable in JavaScript is Number.MAX_VALUE (which is approximately 1.7976931348623157e+308)
const biggie = Number.POSITIVE_INFINITY;

/*
TESTING:
console.log('--- smalls ---');
console.log(smalls); // -Infinity

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
