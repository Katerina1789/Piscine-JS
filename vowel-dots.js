// regex character set: matches any vowel a, e, i, o, u
// without regex we would loop through chars and check manually
// good to remember: replace() can insert matched text using $&

// regex stored in variable as required
export const vowels = /[aeiou]/g

// function: adds a '.' after every vowel in the string
export function vowelDots(str) {
  // replace each vowel with itself + '.'
  return str.replace(vowels, '$&.')
}


/*
TESTING:
console.log('--- basic tests ---')
console.log(vowelDots('hello'))          // h.e.ll.o.
console.log(vowelDots('example'))        // e.x.a.m.p.l.e.
console.log(vowelDots('aeiou'))          // a.e.i.o.u.

console.log('--- edge cases ---')
console.log(vowelDots(''))               // ''
console.log(vowelDots('bcdfg'))          // 'bcdfg' (no vowels)
console.log(vowelDots('A E I O U'))      // 'A E I O U' (uppercase not matched)

console.log('--- mixed cases ---')
console.log(vowelDots('you are amazing')) // y.o.u. a.r.e. a.m.a.z.i.n.g.

run in Terminal: node vowel-dots.js
*/
