// every(): normally checks if all elements satisfy a condition (disabled here)
// some(): normally checks if at least one element satisfies a condition (disabled here)
// loops can replace every() and some() when native methods are disabled
// callback: the function applied to each element
// element: the current value being processed
// index: the position of the current element
// array: the full array being iterated
// logical NOT (!): negates a condition

// every returns true only if all elements satisfy the callback
function every(arr, fn) {
  for (let i = 0; i < arr.length; i++) {
    if (!fn(arr[i], i, arr)) {
      return false;
    }
  }
  return true;
}

// some returns true if at least one element satisfies the callback
function some(arr, fn) {
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i], i, arr)) {
      return true;
    }
  }
  return false;
}

// none returns true if no element satisfies the callback
function none(arr, fn) {
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i], i, arr)) {
      return false;
    }
  }
  return true;
}

/*
TESTING:
const isEven = n => n % 2 === 0;

console.log(every([2, 4, 6], isEven));
// Expected: true

console.log(every([2, 3, 6], isEven));
// Expected: false

console.log(some([1, 3, 5], isEven));
// Expected: false

console.log(some([1, 4, 5], isEven));
// Expected: true

console.log(none([1, 3, 5], isEven));
// Expected: true

console.log(none([1, 2, 3], isEven));
// Expected: false
*/
