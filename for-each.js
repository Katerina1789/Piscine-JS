// forEach(): executes a function once for each element of an array
// callback: the function passed as the second argument
// element: the current value being processed
// index: the position of the current element
// array: the full array being iterated
// no return value: forEach does not build or return a new array

// forEach executes the callback on every element of the array
function forEach(arr, fn) {
  for (let i = 0; i < arr.length; i++) {
    fn(arr[i], i, arr);
  }
}

/*
TESTING:
const nums = [1, 2, 3];
let sum = 0;

forEach(nums, n => {
  sum += n;
});

console.log(sum);
// Expected: 6

const words = ['hi', 'there'];
let collected = [];

forEach(words, (w, i) => {
  collected.push(`${i}:${w}`);
});

console.log(collected);
// Expected: ['0:hi', '1:there']
*/
