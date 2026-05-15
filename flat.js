// Flattening an array means removing one level of nesting
// Using Array.concat() is the simplest way to flatten one level
// Remember: only flatten ONE level, not deep flattening


// flat returns a new array with one level of nesting removed
export function flat(arr) {
  // starts with an empty array
  let out = []

  // loops through each element
  let i = 0
  while (i < arr.length) {
    const el = arr[i]

    // if element is an array, spread its items
    if (Array.isArray(el)) {
      out = out.concat(el)
    } else {
      // otherwise push the element itself
      out.push(el)
    }

    i++
  }

  // returns the flattened array
  return out
}


/*
TESTING:

console.log('--- basic tests ---')
console.log(flat([1, [2], 3]))          // [1, 2, 3]
console.log(flat([[1, 2], [3, 4]]))     // [1, 2, 3, 4]
console.log(flat([1, [2, 3], 4]))       // [1, 2, 3, 4]

console.log('--- mixed values ---')
console.log(flat([1, ['a', 'b'], true])) // [1, 'a', 'b', true]

console.log('--- edge cases ---')
console.log(flat([]))                   // []
console.log(flat([[], []]))             // []
console.log(flat([1, 2, 3]))            // [1, 2, 3]

console.log('--- type checks ---')
console.log(Array.isArray(flat([1])))   // true

run in Terminal: node ./flat.js
*/
