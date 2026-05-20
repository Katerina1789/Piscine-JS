// reduce(): processes an array and accumulates a single result
// accumulator: the running value passed from one iteration to the next
// current: the current element being processed
// left fold: processes elements from index 0 to the end
// right fold: processes elements from the last index to the start
// error throwing: used when reduce is called on an empty array without an initial value
// loops can replace reduce when native methods are disabled

// fold applies the function from left to right starting with the given accumulator
function fold(arr, fn, acc) {
  for (let i = 0; i < arr.length; i++) {
    acc = fn(acc, arr[i]);
  }
  return acc;
}

// foldRight applies the function from right to left starting with the given accumulator
function foldRight(arr, fn, acc) {
  for (let i = arr.length - 1; i >= 0; i--) {
    acc = fn(acc, arr[i]);
  }
  return acc;
}

// reduce uses the first array element as the initial accumulator and folds left
function reduce(arr, fn) {
  if (arr.length < 1) {
    throw new Error('reduce of empty array with no initial value');
  }
  let acc = arr[0];
  for (let i = 1; i < arr.length; i++) {
    acc = fn(acc, arr[i]);
  }
  return acc;
}

// reduceRight uses the last array element as the initial accumulator and folds right
function reduceRight(arr, fn) {
  if (arr.length < 1) {
    throw new Error('reduceRight of empty array with no initial value');
  }
  let acc = arr[arr.length - 1];
  for (let i = arr.length - 2; i >= 0; i--) {
    acc = fn(acc, arr[i]);
  }
  return acc;
}

/*
TESTING:
const adder = (a, b) => a + b;

console.log(fold([1, 2, 3], adder, 2));
// Expected: 8

console.log(foldRight([1, 2, 3], adder, 2));
// Expected: 8

console.log(reduce([1, 2, 3], adder));
// Expected: 6

console.log(reduceRight([1, 2, 3], adder));
// Expected: 6

try {
  console.log(reduce([], adder));
} catch (e) {
  console.log('Error thrown correctly');
}
*/
