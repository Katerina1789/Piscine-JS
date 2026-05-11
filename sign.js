// sign: returns 1 if n is positive, -1 if n is negative and 0 if n is exactly 0
const sign = (n) => {
  if (n > 0) return 1;
  if (n < 0) return -1;
  return 0; // covers n === 0 and -0
};

// sameSign: returns true if both numbers have the same sign
// uses our own sign() function since Math.sign is not allowed in this exercise
const sameSign = (a, b) => sign(a) === sign(b);

/*
TESTING:
console.log('--- sign ---');
console.log(sign(5));      // 1
console.log(sign(-5));     // -1
console.log(sign(0));      // 0
console.log(sign(-0));     // 0 

console.log('--- sameSign ---');
console.log(sameSign(5, 10));     // true (both positive)
console.log(sameSign(-3, -7));    // true (both negative)
console.log(sameSign(0, 0));      // true (both zero)
console.log(sameSign(-0, 0));     // true 
console.log(sameSign(5, -5));     // false
console.log(sameSign(-3, 0));     // false
console.log(sameSign(0, 7));      // false

run in Terminal: node ./sign.js
*/
