// filter(): creates a new array containing only elements that pass a condition
// callback: the function applied to each element
// element: the current value being processed
// index: the position of the current element
// array: the full array being iterated
// push(): adds a new element to an array
// logical NOT (!): negates a condition
// arrays can be built manually using loops when native methods are disabled

// filter returns a new array with elements for which the callback returns true
function filter(arr, fn) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i], i, arr)) {
      result.push(arr[i]);
    }
  }
  return result;
}

// reject returns a new array with elements for which the callback returns false
function reject(arr, fn) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (!fn(arr[i], i, arr)) {
      result.push(arr[i]);
    }
  }
  return result;
}

// partition returns an array of two arrays: [passed, failed]
function partition(arr, fn) {
  const passed = [];
  const failed = [];
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i], i, arr)) {
      passed.push(arr[i]);
    } else {
      failed.push(arr[i]);
    }
  }
  return [passed, failed];
}

/*
TESTING:
console.log(filter([1, 2, 3, 4], n => n % 2 === 0));
// Expected: [2, 4]

console.log(reject([1, 2, 3, 4], n => n % 2 === 0));
// Expected: [1, 3]

console.log(partition([1, 2, 3, 4], n => n > 2));
// Expected: [[3, 4], [1, 2]]

console.log(partition(['hi', 'there', 'a'], s => s.length > 1));
// Expected: [['hi', 'there'], ['a']]
*/
