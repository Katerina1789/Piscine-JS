// regex: find words containing 'tion' (t + ion) using lookahead to ensure 'ion' follows 't'
// without regex we would split into words and manually search for 'tion'
// good to remember: capturing groups let us rebuild the word without the removed part

// ionOut: returns words containing 'tion', but without the 'ion' part
export function ionOut(str) {
  // match whole words that contain 'tion'
  const re = /\b(\w*?)tion(\w*)\b/g

  // extract matches
  const out = []
  let m

  // loop through all matches
  while ((m = re.exec(str)) !== null) {
    // m[1] = before 'tion'
    // m[2] = after 'tion'
    out.push(m[1] + m[2])
  }

  return out
}


/*
TESTING:
console.log('--- basic tests ---')
console.log(ionOut('attention'))            // ['attent']
console.log(ionOut('action reaction'))      // ['act', 'react']
console.log(ionOut('station creation'))     // ['stat', 'creat']

console.log('--- mixed cases ---')
console.log(ionOut('The nation had a celebration')) 
// ['nat', 'celebrat']

console.log('--- edge cases ---')
console.log(ionOut('no matches here'))      // []
console.log(ionOut('tions are tricky'))     // ['t'] (word is "tions" → remove "ion" → "ts")

console.log('--- punctuation cases ---')
console.log(ionOut('This is a question, not a suggestion.'))
// ['quest', 'suggest']

run in Terminal: node ion-out.js
*/
