// currying: transforms a function so it takes one argument at a time
// arity: the number of parameters a function expects
// closures: inner functions remember the arguments already provided
// currify returns a new function that keeps collecting arguments until enough are provided

// currify turns any multi-argument function into a curried version
function currify(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn(...args);
    }
    return function (...next) {
      return curried(...args, ...next);
    };
  };
}

/*
TESTING:
const mult2 = (a, b) => a * b;

console.log(mult2(2, 2));
// Expected: 4

const mult2Curried = currify(mult2);

console.log(mult2Curried(2)(2));
// Expected: 4

const add3 = (a, b, c) => a + b + c;
const add3Curried = currify(add3);

console.log(add3Curried(1)(2)(3));
// Expected: 6

console.log(add3Curried(1, 2)(3));
// Expected: 6

console.log(add3Curried(1)(2, 3));
// Expected: 6
*/
