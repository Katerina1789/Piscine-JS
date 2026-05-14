// Reversing means reading elements from the end back to the beginning
// Using Array.reverse() isn't allowed but it would look like this: 
//  if (typeof input === 'string') {
//    return input.split('').reverse().join('')
//  }
//
//  return input.reverse()
// Strings cannot be changed, so reversing a string means building a new one


// reverse returns a reversed array (in place) or a reversed string (new string)
export function reverse(input) {
  // CASE 1: input is a string → return a NEW reversed string
  if (typeof input === 'string') {
    // holds the reversed string
    let out = ''

    // reads characters from the end to the beginning
    let i = input.length - 1
    while (i >= 0) {
      out = out + input[i]
      i = i - 1
    }

    // returns the new reversed string
    return out
  }

  // CASE 2: input is an array → reverse IN PLACE
  const arr = input
  const len = arr.length

  // swaps elements from both ends until the middle
  let i = 0
  while (i < len / 2) {
    const j = len - 1 - i // matching index from the end

    // swap arr[i] and arr[j]
    const temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp

    i = i + 1
  }

  // returns the same array, now reversed
  return arr
}


/*
TESTING:
console.log('--- string tests ---')
console.log(reverse("hello")) // "olleh"
console.log(reverse("A")) // "A"
console.log(reverse("")) // ""

console.log('--- array tests ---')
let a1 = [1, 2, 3]
console.log(reverse(a1)) // [3, 2, 1]
console.log(a1) // [3, 2, 1] (mutated)

let a2 = ["one", "two", "three"]
console.log(reverse(a2)) // ["three", "two", "one"]
console.log(a2) // ["three", "two", "one"] (mutated)

console.log(reverse([10])) // [10]
console.log(reverse([])) // []

console.log('--- type checks ---')
console.log(typeof reverse([1,2,3])) // "object"
console.log(typeof reverse("abc")) // "string"

run in Terminal: node ./reverser.js
*/
