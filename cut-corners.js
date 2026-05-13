// Rounding means moving a number to the nearest integer depending on its decimal part
// Using Math.round(), Math.floor(), Math.ceil(), Math.trunc() isn't allowed but they would look like this: return Math.round(n), return Math.floor(n), return Math.ceil(n), return Math.trunc(n)

export function trunc(n) {
  // move toward zero in small steps until crossing the integer boundary
  let i = n
  while (i !== 0 && (i > 0 ? i - 1 >= n : i + 1 <= n)) {
    i = i > 0 ? i - 1 : i + 1
  }
  return i
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

