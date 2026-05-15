// Flattening means removing one level of nesting each time
// If depth is Infinity, we flatten until no nested arrays remain
// Otherwise, we flatten exactly "depth" levels


export function flat(arr, depth = 1) {
  let out = arr
  let d = 0

  // loop until depth reached OR no nested arrays remain
  while (d < depth) {
    let temp = []
    let changed = false
    let i = 0

    // flatten ONE level
    while (i < out.length) {
      const el = out[i]
      if (Array.isArray(el)) {
        temp = temp.concat(el)
        changed = true
      } else {
        temp.push(el)
      }
      i++
    }

    out = temp
    d++

    // if nothing was flattened, stop early (important for Infinity)
    if (!changed) break
  }

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
