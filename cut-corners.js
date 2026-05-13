export function trunc(n) {
  if (Number.isNaN(n)) return NaN
  if (n === Infinity || n === -Infinity) return n

  const s = Math.sign(n)
  let a = Math.abs(n)

  // Try to eliminate decimals by scaling
  let factor = 1
  for (let i = 0; i < 15; i++) {
    const scaled = a * factor
    if (scaled === Math.floor(scaled)) {
      return s * (scaled / factor)
    }
    factor *= 10
  }

  // fallback (should never happen)
  return s * a
}


export function ceil(n) {
  const t = trunc(n)
  if (t === n) return n       
  return n > 0 ? t + 1 : t       
}

export function floor(n) {
  const t = trunc(n)
  if (t === n) return n          
  return n < 0 ? t - 1 : t       
}

export function round(n) {
  const t = trunc(n)
  const d = n - t

  if (n >= 0) {
    return d >= 0.5 ? ceil(n) : t
  } else {
    return d <= -0.5 ? floor(n) : t
  }
}


/*
const nums = [ Infinity, -Infinity, NaN, "-1.123", -0.123, -0, 0, 0.123, 13.37, 42.84, 3.7, -3.7, 3.1, -3.1]

console.log('Trunc')
console.log(nums.map(trunc)) // [ Infinity, -Infinity, NaN, -1, -0, -0, 0, 0, 13, 42, 3, -3, 3, -3 ]
console.log('Ceil')
console.log(nums.map(ceil))  // [ Infinity, -Infinity, NaN, -1, -0, 0, 0, 1, 14, 43, 4, -3, 4, -3 ]
console.log('Floor')
console.log(nums.map(floor)) // [ Infinity, -Infinity, NaN, -2, -1, -0, 0, 0, 13, 42, 3, -4, 3, -4 ]
console.log('Round')
console.log(nums.map(round)) // [ Infinity, -Infinity, NaN, -1, -0, 0, 0, 0, 13, 43, 4, -4, 3, -3 ]
*/
