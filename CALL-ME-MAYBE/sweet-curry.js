// currying: transforms a function so it takes one argument at a time
// each returned function receives the next argument
// closures: inner functions remember the outer function’s variables
// evaluation happens only when the final function is called

// mult2 multiplies two numbers using currying
function mult2(a) {
  return function (b) {
    return a * b;
  };
}

// add3 adds three numbers using currying
function add3(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

// sub4 subtracts four numbers in order using currying
function sub4(a) {
  return function (b) {
    return function (c) {
      return function (d) {
        return a - b - c - d;
      };
    };
  };
}

/*
TESTING:
console.log(mult2(3)(4));
// Expected: 12

console.log(add3(1)(2)(3));
// Expected: 6

console.log(sub4(20)(3)(2)(1));
// Expected: 14  (20 - 3 - 2 - 1)
*/
