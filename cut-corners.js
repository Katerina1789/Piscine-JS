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

export function ceil(n) {
  if (Number.isNaN(n)) return NaN
  if (n === Infinity || n === -Infinity) return n

  const t = trunc(n)
  if (n === t) return n
  return n > 0 ? t + 1 : t
}

export function floor(n) {
  if (Number.isNaN(n)) return NaN
  if (n === Infinity || n === -Infinity) return n

  const t = trunc(n)
  if (n === t) return n
  return n < 0 ? t - 1 : t
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
