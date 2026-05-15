// Building a pyramid means creating centered rows of increasing width
// Using Array.from() lets us generate each row cleanly
// Each row has (height - i) spaces and (2*i - 1) characters


// pyramid returns a centered pyramid of given height using the given character
export function pyramid(char, height) {
  // creates an array [1, 2, ..., height]
  const rows = Array.from({ length: height }, (_, i) => i + 1)

  // maps each row number to its pyramid line
  const lines = rows.map(n => {
    const padSize = (height - n) * char.length
    const spaces = ' '.repeat(padSize)
    const chars = char.repeat(2 * n - 1)
    return spaces + chars
  })

  // joins all lines with newline separators
  return lines.join('\n')
}


/*
TESTING:

console.log('--- basic tests ---')
console.log(pyramid('*', 5))
//
//     *
//    ***
//   *****
//  *******
// *********
//

console.log('--- different characters ---')
console.log(pyramid('#', 3))
//
//   #
//  ###
// #####
//

console.log('--- edge cases ---')
console.log(pyramid('*', 1)) // "*"
console.log(pyramid('*', 0)) // ""

console.log('--- type checks ---')
console.log(typeof pyramid('*', 4)) // "string"

run in Terminal: node ./pyramid.js
*/
