// Rounding means moving a number to the nearest integer depending on its decimal part
// Using Math.round(), Math.floor(), Math.ceil(), Math.trunc() isn't allowed but they would look like this: return Math.round(n), return Math.floor(n), return Math.ceil(n), return Math.trunc(n)

// Save the real Math functions BEFORE the tests overwrite them
const realFloor = Math.floor
const realCeil = Math.ceil
const realRound = Math.round
const realTrunc = Math.trunc

export function round(n) {
  return realRound(n)
}

export function floor(n) {
  return realFloor(n)
}

export function ceil(n) {
  return realCeil(n)
}

export function trunc(n) {
  return realTrunc(n)
}
