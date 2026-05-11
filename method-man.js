// words: takes a string and splits it by spaces into an array
const words = (str) => str.split(' ');

// sentence: takes an array of strings and joins them with spaces
const sentence = (arr) => arr.join(' ');

// yell: returns the string in upper case
const yell = (str) => str.toUpperCase();

// whisper: returns the string in lower case, surrounded by *
const whisper = (str) => `*${str.toLowerCase()}*`;

// capitalize: first letter uppercase, rest lowercase
const capitalize = (str) => {
  if (str.length === 0) return '';
  return str[0].toUpperCase() + str.slice(1).toLowerCase();
};

/*
TESTING:
console.log('--- words ---');
console.log(words('hello world this is fun'));  // ['hello', 'world', 'this', 'is', 'fun']

console.log('--- sentence ---');
console.log(sentence(['hello', 'world']));  // 'hello world'

console.log('--- yell ---');
console.log(yell('hello'));  // 'HELLO'

console.log('--- whisper ---');
console.log(whisper('HELLO'));  // '*hello*'

console.log('--- capitalize ---');
console.log(capitalize('hELLo'));  // 'Hello'
console.log(capitalize('javaScript'));  // 'Javascript'
console.log(capitalize(''));  // ''

run in Terminal: node ./method-man.js
*/
