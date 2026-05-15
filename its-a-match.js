// regex anchors: ^ checks the start, $ checks the end
// if we were restricted from using anchors, we'd need manual string checks (not needed here)
// good to remember: regex literals /.../ are the simplest form of RegExp

// normal matches 'hi' anywhere in the string
export const normal = /hi/

// begin matches 'hi' only at the start of the string
export const begin = /^hi/

// end matches 'hi' only at the end of the string
export const end = /hi$/

// beginEnd matches exactly 'hi' and nothing else
export const beginEnd = /^hi$/


/*
TESTING:
console.log('--- normal ---')
console.log(normal.test('hi there'))      // true
console.log(normal.test('oh hi!'))        // true
console.log(normal.test('hello'))         // false

console.log('--- begin ---')
console.log(begin.test('hi there'))       // true
console.log(begin.test('oh hi'))          // false

console.log('--- end ---')
console.log(end.test('say hi'))           // true
console.log(end.test('hi there'))         // false

console.log('--- beginEnd ---')
console.log(beginEnd.test('hi'))          // true
console.log(beginEnd.test(' hi '))        // false
console.log(beginEnd.test('hii'))         // false

run in Terminal: node ./its-a-match.js
*/
