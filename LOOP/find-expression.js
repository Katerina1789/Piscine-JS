// We try to reach the target starting from 1
// At each step we can either multiply by 2 or add 4
// We use recursion to explore both possibilities
// If we reach the target, we return the expression string
// If we exceed the target, we stop exploring that path


export function findExpression(target) {
  // recursive helper: current value + expression string
  function search(value, expr) {
    // if we reached the target, return the expression
    if (value === target) return expr

    // if we passed the target, stop exploring
    if (value > target) return undefined

    // try multiplying by 2
    const mul = search(value * 2, expr + ' ' + mul2)
    if (mul !== undefined) return mul

    // try adding 4
    const add = search(value + 4, expr + ' ' + add4)
    if (add !== undefined) return add

    // no solution found
    return undefined
  }

  // start from 1 with expression "1"
  return search(1, '1')
}


/*
TESTING:
console.log('--- basic tests ---')
console.log(findExpression(8))   // "1 *2 *2 +4"
console.log(findExpression(10))  // "1 +4 *2 +4" (or another valid path)

console.log('--- unreachable numbers ---')
console.log(findExpression(3))   // undefined
console.log(findExpression(7))   // undefined

console.log('--- larger numbers ---')
console.log(findExpression(20))  // e.g. "1 *2 +4 *2 +4"

console.log('--- type checks ---')
console.log(typeof findExpression(8)) // "string" or "undefined"

run in Terminal: node ./find-expression.js
*/
