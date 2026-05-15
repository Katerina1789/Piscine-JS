// Building a triangle can be done by generating each line as a string
// Using Array.from() lets us create an array of length height
// Then map() builds each row, and join("\n") combines them


// triangle returns a string representing a triangle of given height using the given character
export function triangle(char, height) {
  // creates an array [1, 2, ..., height]
  const rows = Array.from({ length: height }, (_, i) => i + 1)

  // maps each number to a repeated character string
  const lines = rows.map(n => char.repeat(n))

  // joins all lines with newline separators
  return lines.join('\n')
}


/*
TESTING:

console.log('--- basic tests ---')
console.log(triangle('*', 5))
//
// *
// **
// ***
// ****
// *****
//

console.log('--- different characters ---')
console.log(triangle('#', 3))
//
// #
// ##
// ###
//

console.log('--- edge cases ---')
console.log(triangle('*', 1)) // "*"
console.log(triangle('*', 0)) // ""

console.log('--- type checks ---')
console.log(typeof triangle('*', 4)) // "string"

run in Terminal: node ./triangle.js
*/
