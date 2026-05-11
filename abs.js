// isPositive: returns true if n is strictly positive, false otherwise
// it's a comparison so it automatically is a boolean
const isPositive = (n) => n > 0; 

// abs: returns the absolute value of n
// must NOT use Math.abs() as per exercise description
const abs = (n) => (n < 0 ? -n : n);

/*
TESTING:
console.log('--- isPositive ---');
console.log(isPositive(5));     // true
console.log(isPositive(0));     // false
console.log(isPositive(-3));    // false

console.log('--- abs ---');
console.log(abs(5));            // 5
console.log(abs(-5));           // 5
console.log(abs(0));            // 0
console.log(abs(-123.45));      // 123.45

console.log('--- edge cases ---');
console.log(abs(-0));           // -0 
console.log(isPositive(-0));    // false

run in Terminal: node ./abs.js
*/
