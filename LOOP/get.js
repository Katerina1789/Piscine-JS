// Getting a value from an object using a path means walking through nested keys
// Remember: the path is a string like "nested.key.other"


// get returns the value at the given path inside src
export function get(src, path) {
  // splits the path into keys
  const keys = path.split('.')

  // starts from the source object
  let current = src

  // walks through each key
  let i = 0
  while (i < keys.length) {
    const key = keys[i]

    // if the key doesn't exist, return undefined
    if (current == null || !(key in current)) {
      return undefined
    }

    // move deeper
    current = current[key]
    i++
  }

  // returns the final value
  return current
}


/*
TESTING:

const src = {
  nested: {
    key: 'peekaboo',
    deep: { value: 42 }
  },
  flat: 'hello'
}

console.log('--- basic tests ---')
console.log(get(src, 'nested.key'))       // "peekaboo"
console.log(get(src, 'nested.deep.value')) // 42
console.log(get(src, 'flat'))              // "hello"

console.log('--- missing paths ---')
console.log(get(src, 'nested.missing'))    // undefined
console.log(get(src, 'nope'))              // undefined

console.log('--- type checks ---')
console.log(typeof get(src, 'flat'))       // "string"
console.log(get({}, 'a.b.c'))              // undefined

run in Terminal: node ./get.js
*/
