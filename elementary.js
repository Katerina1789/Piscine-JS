// Modulo means the remainder left after repeated subtraction
// Using *, /, % is forbidden but they would look like this: a * b, a / b, a % b

// multiply returns a multiplied by b without using *
export function multiply(a, b) {
  // holds the running total
  let out = 0

  // repeats addition b times
  let count = 0
  while (count < b) {
    out = out + a
    count = count + 1
  }

  // returns the final result
  return out
}

// divide returns integer division of a by b without using /
export function divide(a, b) {
  // holds how many times b fits into a
  let count = 0

  // subtracts b repeatedly until a is too small
  while (a >= b) {
    a = a - b
    count = count + 1
  }

  // returns the integer result
  return count
}

// modulo returns the remainder of a divided by b without using %
export function modulo(a, b) {
  // subtracts b repeatedly until a is smaller than b
  while (a >= b) {
    a = a - b
  }

  // returns the leftover value
  return a
}

/*
TESTING:
console.log('--- multiply ---')
console.log(multiply(3, 4)) // 12
console.log(multiply(5, 0)) // 0
console.log(multiply(7, 1)) // 7

console.log('--- divide ---')
console.log(divide(10, 2)) // 5
console.log(divide(9, 3)) // 3
console.log(divide(7, 2)) // 3 

console.log('--- modulo ---')
console.log(modulo(10, 3)) // 1
console.log(modulo(14, 5)) // 4
console.log(modulo(7, 7)) // 0

console.log('--- type checks ---')
console.log(typeof multiply(2, 3)) // 'number'
console.log(typeof divide(9, 3)) // 'number'
console.log(typeof modulo(10, 4)) // 'number'

run in Terminal: node ./elementary.js
*/
