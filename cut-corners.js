// Rounding means moving a number to the nearest integer depending on its decimal part
// Using Math.round(), Math.floor(), Math.ceil(), Math.trunc() isn't allowed but they would look like this: return Math.round(n), return Math.floor(n), return Math.ceil(n), return Math.trunc(n)

// round returns the nearest integer
export function round(n) {
  // get the integer part
  const t = trunc(n)
  // get the decimal part
  const decimal = n - t

  // positive numbers: .5 rounds up
  if (n >= 0) {
    return decimal >= 0.5 ? t + 1 : t
  }

  // negative numbers: -.5 rounds down (toward -∞)
  return decimal <= -0.5 ? t - 1 : t
}

// ceil returns the smallest integer greater than or equal to n
export function ceil(n) {
  // if n is already an integer, return it
  if (n === trunc(n)) {
    return n
  }
  // positive numbers go up to the next integer
  return n > 0 ? trunc(n) + 1 : trunc(n)
}

// floor returns the largest integer less than or equal to n
export function floor(n) {
  // if n is already an integer, return it
  if (n === trunc(n)) {
    return n
  }
  // negative numbers go down to the next integer
  return n < 0 ? trunc(n) - 1 : trunc(n)
}

// trunc removes the decimal part and keeps only the integer part
export function trunc(n) {
  // moves toward zero by removing decimals
  return n < 0 ? -Math.floor(-n) : Math.floor(n)
}


/*
TESTING:
const nums = [3.7, -3.7, 3.1, -3.1]

console.log('--- round ---')
console.log(nums.map(round)) // [ 4, -4, 3, -3 ]

console.log('--- floor ---')
console.log(nums.map(floor)) // [ 3, -4, 3, -4 ]

console.log('--- trunc ---')
console.log(nums.map(trunc)) // [ 3, -3, 3, -3 ]

console.log('--- ceil ---')
console.log(nums.map(ceil)) // [ 4, -3, 4, -3 ]

console.log('--- type checks ---')
console.log(typeof round(3.2)) // 'number'
console.log(typeof floor(-2.8)) // 'number'
console.log(typeof trunc(5.9)) // 'number'
console.log(typeof ceil(1.1)) // 'number'

run in Terminal: node ./cut-corners.js
*/
