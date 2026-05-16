// regex character set: matches any vowel a, e, i, o, u (both lower and upper case)
// without regex we would loop through chars and check each against a vowel list
// good to remember: $& in replace() means "the whole matched text"

// regex stored in variable 
export const vowels = /[aeiouAEIOU]/g

// function: adds a '.' after every vowel in the string
export function vowelDots(str) {
  // replace each vowel with itself + '.'
  return str.replace(vowels, '$&.')
}


/*
TESTING:
console.log('--- basic tests ---')
console.log(vowelDots('hello'))           // h.e.ll.o.
console.log(vowelDots('example'))         // e.x.a.m.p.l.e.
console.log(vowelDots('aeiou'))           // a.e.i.o.u.

console.log('--- uppercase tests ---')
console.log(vowelDots('Algorithm'))       // A.lgo.ri.thm
console.log(vowelDots('AEIOU'))           // A.E.I.O.U.

console.log('--- edge cases ---')
console.log(vowelDots(''))                // ''
console.log(vowelDots('bcdfg'))           // 'bcdfg' (no vowels)

console.log('--- mixed cases ---')
console.log(vowelDots('You are Amazing')) // Yo.u. a.re. A.ma.zi.ng.

run in Terminal: node vowel-dots.js
*/
