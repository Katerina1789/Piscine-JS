// Splitting means cutting a string into pieces based on a separator
// Using String.split() isn't allowed but it would look like this: return str.split(separator)
// Remember: when separator is "", the string becomes an array of characters


// split returns an array of substrings based on the separator
export function split(str, separator) {
  // if separator is undefined, return the whole string in an array
  if (separator === undefined) {
    return [str]
  }

  // if separator is an empty string, return each character
  if (separator === '') {
    const out = []
    let i = 0
    while (i < str.length) {
      out.push(str[i])
      i = i + 1
    }
    return out
  }

  // holds the resulting substrings
  const out = []
  let current = ''
  let i = 0

  // walks through the string and builds substrings
  while (i < str.length) {
    // checks if separator matches at this position
    let match = true
    let j = 0
    while (j < separator.length) {
      if (str[i + j] !== separator[j]) {
        match = false
        break
      }
      j = j + 1
    }

    // if separator found → push current substring and skip separator
    if (match) {
      out.push(current)
      current = ''
      i = i + separator.length
    } else {
      // otherwise keep building the current substring
      current = current + str[i]
      i = i + 1
    }
  }

  // push the last substring
  out.push(current)

  return out
}

// Joining means combining array elements into a single string
// Using Array.join() isn't allowed but it would look like this: return arr.join(separator)
// Remember: undefined or null elements become empty strings when joined


// join returns a string made from all array elements separated by separator
export function join(arr, separator = ',') {
  // empty array returns an empty string
  if (arr.length === 0) {
    return ''
  }

  // starts with the first element converted to string
  let out = arr[0] === undefined || arr[0] === null ? '' : String(arr[0])

  // adds each next element with the separator
  let i = 1
  while (i < arr.length) {
    const value = arr[i] === undefined || arr[i] === null ? '' : String(arr[i])
    out = out + separator + value
    i = i + 1
  }

  return out
}


/*
TESTING:

console.log('--- split tests ---')
console.log(split("a,b,c", ",")) // ["a","b","c"]
console.log(split("hello", "")) // ["h","e","l","l","o"]
console.log(split("no-separator", "-")) // ["no", "separator"]
console.log(split("abc", undefined)) // ["abc"]
console.log(split("", ",")) // [""]

console.log('--- join tests ---')
console.log(join(["a","b","c"])) // "a,b,c"
console.log(join(["a","b","c"], "-")) // "a-b-c"
console.log(join(["hello"])) // "hello"
console.log(join([])) // ""
console.log(join([1, undefined, 3], ",")) // "1,,3"

console.log('--- type checks ---')
console.log(typeof split("a,b", ",")) // "object"
console.log(typeof join(["a","b"])) // "string"

run in Terminal: node ./unbreakable.js
*/
