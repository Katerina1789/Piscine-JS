// map(): creates a new array by transforming each element
// flatMap(): maps each element and flattens the result by one level
// flat(): removes one level of nesting from an array
// callback: the function applied to each element
// element: the current value being processed
// index: the position of the current element
// array: the full array being iterated
// push(): adds a new element to an array

// map returns a new array created by applying the callback to each element
function map(arr, fn) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(fn(arr[i], i, arr));
  }
  return result;
}

// flatMap returns a flattened array created by mapping then flattening one level
function flatMap(arr, fn) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    const value = fn(arr[i], i, arr);
    if (Array.isArray(value)) {
      for (let j = 0; j < value.length; j++) {
        result.push(value[j]);
      }
    } else {
      result.push(value);
    }
  }
  return result;
}

/*
TESTING:

console.log(map([1, 2, 3], n => n * 2));
// Expected: [2, 4, 6]

console.log(map(['a', 'b'], (c, i) => `${i}:${c}`));
// Expected: ['0:a', '1:b']

console.log(flatMap([1, 2, 3], n => [n, n * 2]));
// Expected: [1, 2, 2, 4, 3, 6]

console.log(flatMap(['hi', 'bye'], w => w.split('')));
// Expected: ['h', 'i', 'b', 'y', 'e']

console.log(flatMap([1, 2, 3], n => n));
// Expected: [1, 2, 3]
*/
