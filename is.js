// 'is' is a toolbox object that will hold various type‑checking functions
const is = {};

// value is a number (but not NaN (NotANumber))
is.num = (value) => typeof value === 'number' && !Number.isNaN(value);

// value is NaN
is.nan = (value) => Number.isNaN(value);

// value is a string
is.str = (value) => typeof value === 'string';

// value is a boolean
is.bool = (value) => typeof value === 'boolean';

// value is undefined
is.undef = (value) => value === undefined;

// value is defined
is.def = (value) => value !== undefined;

// value is an array
is.arr = (value) => Array.isArray(value);

// value is a simple object or null
// typeof null === 'object', so it includes it
is.obj = (value) =>
  typeof value === 'object' && !Array.isArray(value);

// value is a function
is.fun = (value) => typeof value === 'function';

// value is truthy
is.truthy = (value) => Boolean(value) === true;

// value is falsy
is.falsy = (value) => Boolean(value) === false;

/*
TESTING:
console.log('--- num ---');
console.log(is.num(5));          // true
console.log(is.num('ciao'));     // false
console.log(is.num(NaN));        // false

console.log('--- nan ---');
console.log(is.nan(NaN));        // true
console.log(is.nan(5));          // false

console.log('--- str ---');
console.log(is.str('hello'));    // true
console.log(is.str(42));         // false

console.log('--- bool ---');
console.log(is.bool(true));      // true
console.log(is.bool(false));     // true
console.log(is.bool(0));         // false

console.log('--- undef ---');
console.log(is.undef(undefined)); // true
console.log(is.undef(null));      // false

console.log('--- def ---');
console.log(is.def(5));           // true
console.log(is.def(undefined));   // false

console.log('--- arr ---');
console.log(is.arr([1, 2]));      // true
console.log(is.arr('not array')); // false

console.log('--- obj ---');
console.log(is.obj({}));          // true
console.log(is.obj(null));        // true 
console.log(is.obj([]));          // false

console.log('--- fun ---');
console.log(is.fun(() => {}));    // true
console.log(is.fun(5));           // false

console.log('--- truthy ---');
console.log(is.truthy(1));        // true
console.log(is.truthy('hi'));     // true
console.log(is.truthy([]));       // true

console.log('--- falsy ---');
console.log(is.falsy(0));         // true
console.log(is.falsy(''));        // true
console.log(is.falsy(null));      // true

run in Terminal: node ./is.js
*/
