// invert returns a new object with keys and values swapped
function invert(obj) {
  const result = {} // new object to store inverted pairs

  for (const key in obj) {
    const value = obj[key]
    result[value] = key // assign inverted pair
  }

  return result
}

/*
Testing:
console.log(invert({ a: 1, b: 2 }))           // { '1': 'a', '2': 'b' }
console.log(invert({ x: 'hello', y: 'bye' })) // { hello: 'x', bye: 'y' }
console.log(invert({ 1: 'one', 2: 'two' }))   // { one: '1', two: '2' }
*/
