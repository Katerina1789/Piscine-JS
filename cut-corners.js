// Rounding means moving a number to the nearest integer depending on its decimal part
// Using Math.round(), Math.floor(), Math.ceil(), Math.trunc() isn't allowed but they would look like this: return Math.round(n), return Math.floor(n), return Math.ceil(n), return Math.trunc(n)

export function trunc(n) {
  const s = Math.sign(n)
  const a = Math.abs(n)
  let i = a

  // subtract 1 until crossing the integer boundary
  while (i >= 1) i -= 1

  // now i is the fractional part
  return s * (a - i)
}

export function floor(n) {
  const t = trunc(n)
  return t === n ? n : (n < 0 ? t - 1 : t)
}

export function ceil(n) {
  const t = trunc(n)
  return t === n ? n : (n > 0 ? t + 1 : t)
}

export function round(n) {
  const t = trunc(n)
  const d = n - t
  return n >= 0 ? (d >= 0.5 ? t + 1 : t) : (d <= -0.5 ? t - 1 : t)
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
