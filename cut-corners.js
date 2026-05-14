function toInt32(n) {
  // Handle NaN and infinities
  if (Number.isNaN(n)) return NaN
  if (n === Infinity || n === -Infinity) return n

  // Step 1: truncate toward zero without forbidden ops
  const sign = n < 0 ? -1 : 1
  let a = n * sign

  // shrink until small enough
  while (a > 1e12) a /= 2

  // extract integer part safely (max ~12 iterations)
  let i = 0
  while (i + 1 <= a) i += 1
  let t = i * sign

  // Step 2: simulate 32-bit wrapping (~~n behavior)
  const TWO32 = 4294967296      // 2^32
  const TWO31 = 2147483648      // 2^31

  // bring into unsigned 32-bit range without %
  while (t >= TWO32) t -= TWO32
  while (t < 0) t += TWO32

  // convert to signed 32-bit
  if (t >= TWO31) t -= TWO32

  return t
}

export function trunc(n) {
  return toInt32(n)
}

export function floor(n) {
  const t = toInt32(n)
  if (Number.isNaN(t)) return NaN
  if (n === t) return t
  return n < 0 ? t - 1 : t
}

export function ceil(n) {
  const t = toInt32(n)
  if (Number.isNaN(t)) return NaN
  if (n === t) return t
  return n > 0 ? t + 1 : t
}

export function round(n) {
  const t = toInt32(n)
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
