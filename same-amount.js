// regex: we use match() to count how many times each pattern appears
// without regex we would manually scan the string and compare characters
// good to remember: match() returns null when no matches, so we default to []

// sameAmount: returns true if both regexes match the string the same number of times
export function sameAmount(str, re1, re2) {
  // count matches for each regex
  const c1 = (str.match(re1) || []).length
  const c2 = (str.match(re2) || []).length

  // return boolean comparing counts
  return c1 === c2
}


/*
TESTING:
console.log('--- basic tests ---')
console.log(sameAmount('hello', /l/g, /e/g))        // false (2 vs 1)
console.log(sameAmount('ababa', /a/g, /b/g))        // true  (3 vs 2? NO → 3 vs 2 → false)
console.log(sameAmount('aabb', /a/g, /b/g))         // true  (2 vs 2)

console.log('--- edge cases ---')
console.log(sameAmount('', /a/g, /b/g))             // true (0 vs 0)
console.log(sameAmount('xxxx', /x/g, /y/g))         // false (4 vs 0)

console.log('--- mixed cases ---')
console.log(sameAmount('123abc123', /\d/g, /[a-z]/g)) // false (6 vs 3)

run in Terminal: node same-amount.js
*/
