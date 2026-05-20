// flow: creates a function that runs an array of functions from left to right
// each function receives the result of the previous one
// closures: store the array of functions for later execution
// rest parameters: allow passing any number of arguments to the first function

// flow returns a function that applies each function in order
function flow(funcs) {
  return function (...args) {
    let result = funcs[0](...args);
    for (let i = 1; i < funcs.length; i++) {
      result = funcs[i](result);
    }
    return result;
  };
}

/*
TESTING:
const square = n => n * n;
const add2Numbers = (a, b) => a + b;

const flowedFunctions = flow([add2Numbers, square]);

console.log(flowedFunctions(2, 3));
// add2Numbers(2,3) = 5
// square(5) = 25
// Expected: 25

const triple = n => n * 3;
const minus1 = n => n - 1;

const flow2 = flow([triple, minus1, square]);

console.log(flow2(4));
// triple(4)=12 -> minus1(12)=11 -> square(11)=121
// Expected: 121
*/
