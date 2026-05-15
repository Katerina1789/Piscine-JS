// regex: letter + space + single digit, not followed by a digit or a letter
// without regex we would manually scan characters and check neighbors
// good to remember: (?!...) negative lookahead lets us forbid specific following chars

// letterSpaceNumber: returns all matches of "<letter> <digit>" not followed by a digit or letter
export function letterSpaceNumber(str) {
  // global regex to find every valid match
  const re = /[a-zA-Z] \d(?![a-zA-Z0-9])/g

  // match() returns null when no matches, so we default to []
  return str.match(re) || []
}


/*
TESTING:
console.log('--- provided tests ---')
console.log(letterSpaceNumber('He is 8 or 9 years old, not 10.'))
// ['s 8', 'r 9']

console.log('--- example from statement ---')
console.log(letterSpaceNumber('example 1, example 20'))
// ['e 1']

console.log('--- basic tests ---')
console.log(letterSpaceNumber('a 1 b 2c'))       // ['a 1', 'b 2']
console.log(letterSpaceNumber('x 9y'))           // [] (digit followed by letter)
console.log(letterSpaceNumber('Z 3!'))           // ['Z 3']
console.log(letterSpaceNumber('no matches'))     // []

console.log('--- edge cases ---')
console.log(letterSpaceNumber('A 0'))            // ['A 0']
console.log(letterSpaceNumber('a 5  b 7c d 8'))  // ['a 5']

run in Terminal: node letter-space-number.js
*/
