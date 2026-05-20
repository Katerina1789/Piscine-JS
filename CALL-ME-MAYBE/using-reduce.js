// reduce(): processes an array and accumulates a single result
// accumulator: the running value passed from one iteration to the next
// current: the current element being processed
// number % 2: checks if a number is even (0) or odd (1)
// function(): a function can be stored in an array and executed later
// initial value: optional starting value for reduce, used when provided
// logical AND (&&): all conditions must be true
// arrow functions: compact function syntax used for callbacks

// adder returns the sum of all numbers in the array
function adder(arr, initial = 0) {
  return arr.reduce((acc, n) => acc + n, initial);
}

// sumOrMul adds odd numbers and multiplies even numbers
function sumOrMul(arr, initial = 0) {
  return arr.reduce((acc, n) => {
    return n % 2 === 0 ? acc * n : acc + n;
  }, initial);
}

// funcExec executes an array of functions in sequence
function funcExec(arr, initial) {
  return arr.reduce((acc, fn) => fn(acc), initial);
}

/*
TESTING:

console.log(adder([1, 2, 3])); 
// Expected: 6

console.log(adder([1, 2, 3], 10)); 
// Expected: 16

console.log(sumOrMul([1, 2, 3, 5, 8], 5));
// ((((5 + 1) * 2) + 3) + 5) * 8 = 160
// Expected: 160

const f1 = x => x + 1;
const f2 = x => x * 2;
const f3 = x => x - 3;

console.log(funcExec([f1, f2, f3], 10));
// ((10 + 1) * 2) - 3 = 19
// Expected: 19
*/
