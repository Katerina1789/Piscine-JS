// Rounding means moving a number to the nearest integer depending on its decimal part
// Using Math.round(), Math.floor(), Math.ceil(), Math.trunc() isn't allowed but they would look like this: return Math.round(n), return Math.floor(n), return Math.ceil(n), return Math.trunc(n)

// trunc removes the decimal part and keeps only the integer part
export function trunc(n) {
  const s = Math.sign(n)
  let a = Math.abs(n)

  // reduce a until it's < 1
  while (a >= 1) a -= 1

  // now a is the fractional part
  return s * (Math.abs(n) - a)
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
