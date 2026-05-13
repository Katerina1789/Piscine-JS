// A while loop repeats code as long as a condition is true
// Building a string gradually means that we (usually) start with an empty value, add to it repeatedly and return the final result
// Using String.repeat() isn't allowed for this exercise but it would look like this: return str.repeat(n)

// repeat returns the string repeated n times
export function repeat(str, n) {
  // holds the final repeated string
  let out = ''

  // repeats the string n times
  let count = 0
  while (count < n) {
    out = out + str
    count = count + 1
  }

  // returns the final result
  return out
}


/*
TESTING:
console.log('--- repeat basic ---')
console.log(repeat('hi', 3)) // 'hihihi'
console.log(repeat('a', 5)) // 'aaaaa'
console.log(repeat('x', 0)) // ''

console.log('--- type checks ---')
console.log(typeof repeat('yo', 2)) // 'string'

console.log('--- edge cases ---')
console.log(repeat('', 10)) // '' (empty repeated stays empty)
console.log(repeat('ok', 1)) // 'ok'

run in Terminal: node ./repeat.js
*/
