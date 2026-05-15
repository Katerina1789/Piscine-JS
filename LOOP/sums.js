// A partition is a list of numbers that sum to n
// To avoid duplicates like [1,3] and [3,1], we only build partitions in non-decreasing order
// We use recursion to explore all valid next numbers

export function sums(n) {
  // for 1 or less, there are no partitions
  if (n <= 1) return []

  const out = []

  // helper builds partitions starting from "start" to keep order non-decreasing
  function build(remaining, start, current) {
    // if we reached exactly 0, we found a valid partition
    if (remaining === 0) {
      // only keep partitions with at least two numbers
      if (current.length > 1) {
        out.push(current)
      }
      return
    }

    // try all next numbers from "start" up to "remaining"
    let i = start
    while (i <= remaining) {
      build(remaining - i, i, current.concat(i))
      i++
    }
  }

  // start building partitions
  build(n, 1, [])

  return out
}


/*
TESTING:

console.log('--- basic tests ---')
console.log(sums(4))
// [
//   [1,1,1,1],
//   [1,1,2],
//   [1,3],
//   [2,2]
// ]

console.log('--- more tests ---')
console.log(sums(5))
// [
//   [1,1,1,1,1],
//   [1,1,1,2],
//   [1,1,3],
//   [1,2,2],
//   [1,4],
//   [2,3]
// ]

console.log('--- edge cases ---')
console.log(sums(1)) // [[1]]
console.log(sums(0)) // [[]] (one empty partition)

console.log('--- type checks ---')
console.log(Array.isArray(sums(4))) // true

run in Terminal: node ./sums.js
*/
