// Searching an array manually means checking each element one by one
// Using indexOf(), lastIndexOf() and includes() isn't allowed but they would look like this: return arr.indexOf(value, from), return arr.lastIndexOf(value, from), return arr.includes(value)
// indexOf and lastIndexOf accept a starting index to give functions default values

// indexOf returns the first index where value is found or -1 if not found
export function indexOf(arr, value, from = 0) {
  // starts searching from the given index
  let i = from

  // checks each element until the end
  while (i < arr.length) {
    if (arr[i] === value) {
      return i
    }
    i = i + 1
  }

  // returns -1 when value is not found
  return -1
}

// lastIndexOf returns the last index where value is found or -1 if not found
export function lastIndexOf(arr, value, from = arr.length - 1) {
  // starts searching from the given index backwards
  let i = from

  // checks each element until the beginning
  while (i >= 0) {
    if (arr[i] === value) {
      return i
    }
    i = i - 1
  }

  // returns -1 when value is not found
  return -1
}

// includes returns true if value is found, false otherwise
export function includes(arr, value) {
  // starts searching from index 0
  let i = 0

  // checks each element until the end
  while (i < arr.length) {
    if (arr[i] === value) {
      return true
    }
    i = i + 1
  }

  // returns false when value is not found
  return false
}


/*
TESTING:
console.log('--- indexOf ---')
console.log(indexOf([1, 2, 3, 2], 2)) // 1
console.log(indexOf([1, 2, 3, 2], 2, 2)) // 3
console.log(indexOf([1, 2, 3], 5)) // -1

console.log('--- lastIndexOf ---')
console.log(lastIndexOf([1, 2, 3, 2], 2)) // 3
console.log(lastIndexOf([1, 2, 3, 2], 2, 2)) // 1
console.log(lastIndexOf([1, 2, 3], 5)) // -1

console.log('--- includes ---')
console.log(includes([1, 2, 3], 2)) // true
console.log(includes([1, 2, 3], 5)) // false
console.log(includes([], 1)) // false

console.log('--- type checks ---')
console.log(typeof indexOf([1], 1)) // 'number'
console.log(typeof lastIndexOf([1], 1)) // 'number'
console.log(typeof includes([1], 1)) // 'boolean'

run in Terminal: node ./index-of.js
*/
