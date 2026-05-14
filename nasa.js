// Generating a sequence can be done by creating an array of length N
// map is an array method that: takes an array, runs a function on every element and builds a NEW array with the results
// Remember: numbers divisible by 3 AND 5 must become "NASA"


// nasa returns a string of numbers from 1 to N with special replacements
export function nasa(N) {
  // builds an array [1, 2, ..., N]
  const arr = Array.from({ length: N }, (_, i) => i + 1)

  // maps each number to its correct string
  const mapped = arr.map((n) => {
    if (n % 15 === 0) return 'NASA'
    if (n % 3 === 0) return 'NA'
    if (n % 5 === 0) return 'SA'
    return String(n)
  })

  // joins everything into a single space-separated string
  return mapped.join(' ')
}


/*
TESTING:

console.log('--- basic tests ---')
console.log(nasa(5))  // "1 2 NA 4 SA"
console.log(nasa(15)) // "1 2 NA 4 SA NA 7 8 NA SA 11 NA 13 14 NASA"

console.log('--- edge cases ---')
console.log(nasa(1))  // "1"
console.log(nasa(3))  // "1 2 NA"

console.log('--- type checks ---')
console.log(typeof nasa(10)) // "string"

run in Terminal: node ./nasa.js
*/
