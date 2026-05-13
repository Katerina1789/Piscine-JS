// Slicing copies characters from: a start index up to (but not including) an end index

// cutFirst returns the string without the first 2 characters
export function cutFirst(str) {
  // returns everything starting from index 2
  return str.slice(2)
}

// cutLast returns the string without the last 2 characters
export function cutLast(str) {
  // returns everything up to length - 2
  return str.slice(0, str.length - 2)
}

// cutFirstLast removes the first 2 and last 2 characters
export function cutFirstLast(str) {
  // slices from index 2 up to length - 2
  return str.slice(2, str.length - 2)
}

// keepFirst returns only the first 2 characters
export function keepFirst(str) {
  // slices from index 0 to index 2
  return str.slice(0, 2)
}

// keepLast returns only the last 2 characters
export function keepLast(str) {
  // slices from length - 2 to the end
  return str.slice(str.length - 2)
}

// keepFirstLast returns the first 2 and last 2 characters
export function keepFirstLast(str) {
  // for very short strings, returns the original string
  if (str.length <= 3) {
    return str
  }
  // combines the first 2 and last 2 characters
  return str.slice(0, 2) + str.slice(str.length - 2)
}

/*
TESTING:
console.log('--- cutFirst ---')
console.log(cutFirst('abcdef')) // 'cdef'
console.log(cutFirst('hi')) // '' (removing 2 chars from a 2-char string)

console.log('--- cutLast ---')
console.log(cutLast('abcdef')) // 'abcd'
console.log(cutLast('hi')) // '' (removing last 2 chars)

console.log('--- cutFirstLast ---')
console.log(cutFirstLast('abcdef')) // 'cd'
console.log(cutFirstLast('hello')) // 'l'

console.log('--- keepFirst ---')
console.log(keepFirst('abcdef')) // 'ab'
console.log(keepFirst('hi')) // 'hi'

console.log('--- keepLast ---')
console.log(keepLast('abcdef')) // 'ef'
console.log(keepLast('hi')) // 'hi'

console.log('--- keepFirstLast ---')
console.log(keepFirstLast('abcdef')) // 'abef'
console.log(keepFirstLast('hello')) // 'helo'

console.log('--- type checks ---')
console.log(typeof cutFirst('abc')) // 'string'
console.log(typeof keepLast('abc')) // 'string'

run in Terminal: node ./keep-cut.js
*/
