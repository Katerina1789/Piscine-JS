// Chunking means splitting an array into smaller arrays of equal size
// Using Array.slice() would be allowed but a library helper like _.chunk would look like this: return _.chunk(arr, size)
// Remember: the last chunk may be smaller if there are not enough elements


// chunk returns an array of sub-arrays, each containing up to size elements
export function chunk(arr, size) {
  // holds the final list of chunks
  const out = []

  // current index in the original array
  let i = 0

  // loops until all elements are processed
  while (i < arr.length) {
    // builds one chunk
    const sub = []

    // collects up to size elements
    let count = 0
    while (count < size && i < arr.length) {
      sub.push(arr[i])
      i = i + 1
      count = count + 1
    }

    // adds the completed chunk to the output
    out.push(sub)
  }

  // returns the array of chunks
  return out
}


/*
TESTING:

console.log('--- basic tests ---')
console.log(chunk([1,2,3,4,5,6], 2)) // [[1,2],[3,4],[5,6]]
console.log(chunk([1,2,3,4,5], 2)) // [[1,2],[3,4],[5]]
console.log(chunk([1,2,3], 3)) // [[1,2,3]]
console.log(chunk([1,2,3], 1)) // [[1],[2],[3]]

console.log('--- edge cases ---')
console.log(chunk([], 3)) // []
console.log(chunk([10], 5)) // [[10]]

console.log('--- type checks ---')
console.log(typeof chunk([1,2], 1)) // "object"

run in Terminal: node ./chunky.js
*/
