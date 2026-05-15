// Modulo means the remainder left after repeated subtraction
// Using *, /, % is forbidden but they would look like this: a * b, a / b, a % b
// Handle negative numbers by working with absolute values and applying the sign at the end


// multiply returns a multiplied by b without using *
export function multiply(a, b) {
  // determines the sign of the result
  const negative = (a < 0 && b > 0) || (a > 0 && b < 0)

  // works with positive values for the loop
  let x = a < 0 ? -a : a
  let y = b < 0 ? -b : b

  // holds the running total
  let out = 0

  // repeats addition y times
  let count = 0
  while (count < y) {
    out = out + x
    count = count + 1
  }

  // applies the sign to the result
  return negative ? -out : out
}

// divide returns integer division of a by b without using /
export function divide(a, b) {
  // determines the sign of the result
  const negative = (a < 0 && b > 0) || (a > 0 && b < 0)

  // works with positive values for the loop
  let x = a < 0 ? -a : a
  let y = b < 0 ? -b : b

  // holds how many times y fits into x
  let count = 0

  // subtracts y repeatedly until x is too small
  while (x >= y) {
    x = x - y
    count = count + 1
  }

  // applies the sign to the result
  return negative ? -count : count
}

// modulo returns the remainder of a divided by b without using %
export function modulo(a, b) {
  // works with positive values for the loop
  let x = a < 0 ? -a : a
  let y = b < 0 ? -b : b

  // subtracts y repeatedly until x is smaller than y
  while (x >= y) {
    x = x - y
  }

  // applies the sign of the original a to the remainder
  return a < 0 ? -x : x
}

/*
TESTING:
console.log('--- multiply ---')
console.log(multiply(3, 4)) // 12
console.log(multiply(5, 0)) // 0
console.log(multiply(7, 1)) // 7
console.log(multiply(123, -22)) // -2706
console.log(multiply(-10, -3)) // 30

console.log('--- divide ---')
console.log(divide(10, 2)) // 5
console.log(divide(9, 3)) // 3
console.log(divide(7, 2)) // 3
console.log(divide(-10, 2)) // -5
console.log(divide(10, -2)) // -5
console.log(divide(-10, -2)) // 5

console.log('--- modulo ---')
console.log(modulo(10, 3)) // 1
console.log(modulo(14, 5)) // 4
console.log(modulo(7, 7)) // 0
console.log(modulo(-10, 3)) // -1
console.log(modulo(10, -3)) // 1

console.log('--- type checks ---')
console.log(typeof multiply(2, 3)) // 'number'
console.log(typeof divide(9, 3)) // 'number'
console.log(typeof modulo(10, 4)) // 'number'

run in Terminal: node ./elementary.js
*/
