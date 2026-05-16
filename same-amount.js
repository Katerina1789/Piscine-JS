// regex: we count how many times each pattern appears in the string
// without regex we would manually scan the string and compare characters
// good to remember: we must force the 'g' flag to count all matches, even if regex was passed without it

// sameAmount: returns true if both regexes match the string the same number of times
export function sameAmount(str, re1, re2) {
  // ensure both regexes are global so match() finds all occurrences
  const r1 = new RegExp(re1.source, re1.flags.replace('g', '') + 'g')
  const r2 = new RegExp(re2.source, re2.flags.replace('g', '') + 'g')

  const c1 = (str.match(r1) || []).length
  const c2 = (str.match(r2) || []).length

  return c1 === c2
}


/*
TESTING:
const data = 'ababa q q qqqqqqq something q  qqqqqqq end'

console.log('--- basic tests ---')
console.log(sameAmount('hello', /l/g, /e/g))          // false (2 vs 1)
console.log(sameAmount('aabb', /a/, /b/))             // true  (2 vs 2, no g flag but still counted)

console.log('--- edge cases ---')
console.log(sameAmount('', /a/g, /b/g))               // true (0 vs 0)
console.log(sameAmount('xxxx', /x/, /y/))             // false (4 vs 0)

console.log('--- provided-style test ---')
console.log(!sameAmount(data, /q /, /qqqqqqq/))       // should be true

console.log('--- mixed cases ---')
console.log(sameAmount('123abc123', /\d/, /[a-z]/g))  // false (6 vs 3)

run in Terminal: node same-amount.js
*/
