// Rounding means moving a number to the nearest integer depending on its decimal part
// Using Math.round(), Math.floor(), Math.ceil(), Math.trunc() isn't allowed but they would look like this: return Math.round(n), return Math.floor(n), return Math.ceil(n), return Math.trunc(n)


// trunc removes the decimal part and keeps only the integer part
export function trunc(n) {
  // moves toward zero by stepping 1 at a time
  let t = 0

  if (n > 0) {
    // count up until the next step would be bigger than n
    while (t + 1 <= n) {
      t = t + 1
    }
  } else if (n < 0) {
    // count down until the next step would be smaller than n
    while (t - 1 >= n) {
      t = t - 1
    }
  }

  return t
}

// floor returns the largest integer less than or equal to n
export function floor(n) {
  const t = trunc(n)

  // if already an integer, return it
  if (t === n) {
    return n
  }

  // positive: trunc is already floor
  // negative: floor is one less than trunc
  return n > 0 ? t : t - 1
}

// ceil returns the smallest integer greater than or equal to n
export function ceil(n) {
  const t = trunc(n)

  // if already an integer, return it
  if (t === n) {
    return n
  }

  // positive: ceil is one more than trunc
  // negative: trunc is already ceil
  return n > 0 ? t + 1 : t
}

// round returns the nearest integer
export function round(n) {
  const t = trunc(n)
  const decimal = n - t

  // positive numbers: .5 rounds up
  if (n >= 0) {
    return decimal >= 0.5 ? t + 1 : t
  }

  // negative numbers: -.5 rounds down (toward -∞)
  return decimal <= -0.5 ? t - 1 : t
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
