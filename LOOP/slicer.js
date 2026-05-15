/*
  CONTROL FLOW & VARIABLES DICTIONARY OF JavaScript

  let:
    - Declares a variable whose value can change over time.
    - Used when you need to store information that will be updated.
    - Block‑scoped (only exists inside the nearest { }).
    - Commonly used for counters, accumulators, or temporary values.
    - Example: let count = 0

  if:
    - Runs code only when a condition is true.
    - Used for making decisions: choosing one path or another.
    - Does not repeat; it executes once when the condition is met.
    - Can be extended with else or else if for multiple branches.
    - Example:
        if (x > 10) {
          console.log('big number')
        }

  while:
    - Repeats code as long as a condition stays true.
    - Used for loops where you don’t know the number of repetitions in advance.
    - Requires a variable that changes inside the loop to avoid infinite loops.
    - Often used with counters or when scanning through data.
    - Example:
        let i = 0
        while (i < 5) {
          i = i + 1
        }
*/

// Slicing means copying elements from start to end into a new array or string
// Using slice() isn't allowed but it would look like this: return value.slice(start, end)

// slice returns a portion of an array or string from start to end
export function slice(value, start, end = value.length) {
  // holds the sliced result
  let out = Array.isArray(value) ? [] : ''

  // normalizes negative start
  let s = start < 0 ? value.length + start : start
  if (s < 0) s = 0

  // normalizes negative end
  let e = end < 0 ? value.length + end : end
  if (e > value.length) e = value.length

  // copies elements from s to e
  let i = s
  while (i < e) {
    if (Array.isArray(value)) {
      out.push(value[i]) // simple and safe for arrays
    } else {
      out = out + value[i] // simple and safe for strings
    }
    i = i + 1
  }

  // returns the final result
  return out
}


/*
TESTING:
console.log('--- slice arrays ---')
console.log(slice([1, 2, 3, 4], 1, 3)) // [2, 3]
console.log(slice([1, 2, 3, 4], 0, 2)) // [1, 2]
console.log(slice([1, 2, 3, 4], -2)) // [3, 4]

console.log('--- slice strings ---')
console.log(slice('hello', 1, 4)) // 'ell'
console.log(slice('hello', -2)) // 'lo'
console.log(slice('hello', 0, 1)) // 'h'

console.log('--- edge cases ---')
console.log(slice([], 0, 10)) // []
console.log(slice('abc', 5, 10)) // ''
console.log(slice([1, 2, 3], -10, 2)) // [1, 2]

console.log('--- type checks ---')
console.log(typeof slice([1, 2], 0, 1)) // 'object'
console.log(typeof slice('hi', 0, 1)) // 'string'

run in Terminal: node ./slicer.js
*/
