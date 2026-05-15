// Flattening means removing one level of nesting each time
// We repeat the flattening process "depth" times
// Remember: only flatten deeper if depth > 0


export function flat(arr, depth = 1) {
  let out = arr

  // repeat flattening "depth" times
  let d = 0
  while (d < depth) {
    let temp = []
    let i = 0

    // flatten ONE level
    while (i < out.length) {
      const el = out[i]
      if (Array.isArray(el)) {
        temp = temp.concat(el)
      } else {
        temp.push(el)
      }
      i++
    }

    out = temp
    d++
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
