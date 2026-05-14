export function trunc(n) {
  if (Number.isNaN(n)) return NaN
  if (n === Infinity || n === -Infinity) return n
  return parseInt(n)
}

export function round(n) {
  if (Number.isNaN(n)) return NaN
  if (n === Infinity || n === -Infinity) return n

  const t = trunc(n)
  const d = n - t

  if (n >= 0) {
    return d >= 0.5 ? t + 1 : t
  } else {
    return d <= -0.5 ? t - 1 : t
  }
}

export function trunc(n) {
  if (Number.isNaN(n)) return NaN
  if (n === Infinity || n === -Infinity) return n

  const sign = n < 0 ? -1 : 1
  let a = n * sign

  // shrink the number until it's small enough
  let factor = 1
  while (a > 10) {
    a /= 10
    factor *= 10
  }

  // now extract integer part safely (max 10 iterations)
  let i = 0
  while (i + 1 <= a) {
    i += 1
  }

  // scale back up
  return i * factor * sign
}




/*
const nums = [ Infinity, -Infinity, NaN, "-1.123", -0.123, -0, 0, 0.123, 13.37, 42.84, 3.7, -3.7, 3.1, -3.1]

console.log('Round Tests')
console.log(nums.map(round)) // [ Infinity, -Infinity, NaN, -1, -0, 0, 0, 0, 13, 43, 4, -4, 3, -3 ]
console.log('Ceil Tests')
console.log(nums.map(ceil))  // [ Infinity, -Infinity, NaN, -1, -0, 0, 0, 1, 14, 43, 4, -3, 4, -3 ]
console.log('Floor Tests')
console.log(nums.map(floor)) // [ Infinity, -Infinity, NaN, -2, -1, -0, 0, 0, 13, 42, 3, -4, 3, -4 ]
console.log('Trunc Tests')
console.log(nums.map(trunc)) // [ Infinity, -Infinity, NaN, -1, -0, 0, 0, 0, 13, 42, 3, -3, 3, -3 ]
*/
