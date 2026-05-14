/*
  MATH FUNCTIONS WITHOUT:
  - %, bitwise operators, string conversion
  - Math.floor, Math.ceil, Math.trunc, Math.round
  - parseInt

  THEORY:
  JavaScript numbers are IEEE‑754 floating‑point values.
  We cannot extract the integer part using built‑ins or modulo,
  and we cannot loop up to the number (infinite loop for large values).

  So we use a LOGARITHMIC approach:

  1. Work with the absolute value of n.
  2. Find the largest power of 2 (p) that is <= |n|.
     This takes at most ~53 steps (safe for all JS numbers, aka no infinity loops).
  3. Build the integer part by subtracting powers of 2 from |n|.
     This is binary decomposition and also takes at most ~53 steps.
  4. Reapply the original sign.

  This gives us truncation toward zero in O(log n) time,
  with no forbidden operations and no infinite loops.
*/

function intPartTowardZero(n) {
  // Handle special values
  if (Number.isNaN(n)) return NaN
  if (n === Infinity || n === -Infinity) return n

  // Determine sign and work with absolute value
  const sign = n < 0 ? -1 : 1
  let a = n * sign

  // If |n| < 1, truncation is 0
  if (a < 1) return 0 * sign

  // STEP 1: Find the largest power of 2 <= a
  // This loop runs at most ~53 times (safe)
  let p = 1
  while (p * 2 <= a) {
    p *= 2
  }

  // STEP 2: Build the integer part using binary decomposition
  // Also at most ~53 iterations
  let r = 0
  while (p >= 1) {
    if (a >= p) {
      a -= p     // subtract this power of 2
      r += p     // add it to the integer result
    }
    p /= 2       // move to the next lower power of 2
  }

  return r * sign
}

export function trunc(n) {
  // Truncation is simply the integer part toward zero
  return intPartTowardZero(n)
}

export function floor(n) {
  const t = intPartTowardZero(n)

  if (Number.isNaN(t)) return NaN
  if (n === t) return t // already an integer

  // If negative and not an integer → go down by 1
  return n < 0 ? t - 1 : t
}

export function ceil(n) {
  const t = intPartTowardZero(n)

  if (Number.isNaN(t)) return NaN
  if (n === t) return t // already an integer

  // If positive and not an integer → go up by 1
  return n > 0 ? t + 1 : t
}

export function round(n) {
  const t = intPartTowardZero(n)
  if (Number.isNaN(t)) return NaN

  const d = n - t // fractional part

  // Positive rounding
  if (n >= 0) {
    return d >= 0.5 ? t + 1 : t
  }

  // Negative rounding
  return d <= -0.5 ? t - 1 : t
}


/*
TESTING:
console.log("trunc tests:")
console.log(trunc(13.37), "→ 13")
console.log(trunc(-13.37), "→ -13")
console.log(trunc(0.123), "→ 0")
console.log(trunc(-0.123), "→ 0")
console.log(trunc(Infinity), "→ Infinity")
console.log(trunc(-Infinity), "→ -Infinity")
console.log(trunc(NaN), "→ NaN")

console.log("floor tests:")
console.log(floor(3.7), "→ 3")
console.log(floor(-3.7), "→ -4")

console.log("ceil tests:")
console.log(ceil(3.1), "→ 4")
console.log(ceil(-3.1), "→ -3")

console.log("round tests:")
console.log(round(3.5), "→ 4")
console.log(round(3.4), "→ 3")
console.log(round(-3.5), "→ -4")
console.log(round(-3.4), "→ -3")

run in Terminal: node cut-corners.js
*/
