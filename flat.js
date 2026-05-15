// Flattening means removing one level of nesting each time
// If depth is 0, return the array as-is
// If depth > 0, flatten one level and recurse


export function flat(arr, depth = 1) {
  if (depth <= 0) return arr

  let out = []
  let i = 0

  // flatten ONE level
  while (i < arr.length) {
    const el = arr[i]
    if (Array.isArray(el)) {
      out = out.concat(el)
    } else {
      out.push(el)
    }
    i++
  }

  // recursively flatten deeper levels
  return flat(out, depth - 1)
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
