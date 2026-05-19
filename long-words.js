// every(): returns true only if all elements satisfy the condition
// some(): returns true if at least one element satisfies the condition
// string.length: returns the number of characters in a string
// logical NOT (!): negates a condition
// toLowerCase(): converts a string to lowercase
// comparison operators: used to check minimum or maximum lengths

// longWords returns true if every string has at least 5 characters
function longWords(arr) {
  return arr.every(str => str.length >= 5);
}

// oneLongWord returns true if at least one string has 10 or more characters
function oneLongWord(arr) {
  return arr.some(str => str.length >= 10);
}

// noLongWords returns true if no string has 7 or more characters
function noLongWords(arr) {
  return arr.every(str => str.length < 7);
}

/*
TESTING:
console.log(longWords(['hello', 'world', 'apple']));
// Expected: true

console.log(longWords(['hi', 'world']));
// Expected: false

console.log(oneLongWord(['short', 'medium', 'extraordinary']));
// Expected: true

console.log(oneLongWord(['tiny', 'small', 'short']));
// Expected: false

console.log(noLongWords(['cat', 'dog', 'bird']));
// Expected: true

console.log(noLongWords(['cat', 'giraffe', 'bird']));
// Expected: false
*/
