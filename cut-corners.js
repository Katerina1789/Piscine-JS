function intPartTowardZero(n) {
  if (Number.isNaN(n)) return NaN
  if (n === Infinity || n === -Infinity) return n

  const sign = n < 0 ? -1 : 1
  let a = n * sign

  if (a < 1) return 0 * sign

  // find highest power of 2 <= a
  let p = 1
  while (p * 2 <= a) {
    p *= 2
  }

  // build integer part using binary decomposition
  let r = 0
  while (p >= 1) {
    if (a >= p) {
      a -= p
      r += p
    }
    p /= 2
  }

  return r * sign
}

export function trunc(n) {
  return intPartTowardZero(n)
}

export function floor(n) {
  const t = intPartTowardZero(n)
  if (Number.isNaN(t)) return NaN
  if (n === t) return t
  return n < 0 ? t - 1 : t
}

export function ceil(n) {
  const t = intPartTowardZero(n)
  if (Number.isNaN(t)) return NaN
  if (n === t) return t
  return n > 0 ? t + 1 : t
}

export function round(n) {
  const t = intPartTowardZero(n)
  if (Number.isNaN(t)) return NaN
  const d = n - t
  if (n >= 0) return d >= 0.5 ? t + 1 : t
  return d <= -0.5 ? t - 1 : t
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
