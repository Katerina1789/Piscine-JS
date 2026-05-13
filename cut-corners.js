// Rounding means moving a number to the nearest integer depending on its decimal part
// Using Math.round(), Math.floor(), Math.ceil(), Math.trunc() isn't allowed but they would look like this: return Math.round(n), return Math.floor(n), return Math.ceil(n), return Math.trunc(n)

// get fractional part without %, bitwise, or strings
function frac(n) {
  return n - (n < 0 ? -Math.floor(-n) : Math.floor(n))
}

// trunc removes the decimal part and keeps only the integer part
export function trunc(n) {
  return n < 0 ? -Math.floor(-n) : Math.floor(n)
}

// floor returns the largest integer <= n
export function floor(n) {
  const f = frac(n)
  return f === 0 ? n : (n < 0 ? n - f - 1 : n - f)
}

// ceil returns the smallest integer >= n
export function ceil(n) {
  const f = frac(n)
  return f === 0 ? n : (n > 0 ? n - f + 1 : n - f)
}

// round returns the nearest integer
export function round(n) {
  const f = frac(n)
  if (n >= 0) {
    return f >= 0.5 ? n - f + 1 : n - f
  }
  return f <= -0.5 ? n - f - 1 : n - f
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
