// circular: an object whose property "circular" points back to itself
// objects are reference types so we can assign the object to one of its own keys
const circular = {};
circular.circular = circular;

/*
TESTING:
console.log('--- circular object ---');
console.log(circular);  // You will see "<ref *1> { circular: [Circular *1] }", this means the object references itself

console.log('--- reference checks ---');
console.log(circular.circular === circular);  // true -> the property points to the same object

console.log('--- deep chain check ---');
console.log(circular.circular.circular.circular === circular);  // true -> no matter how deep you go, it loops back

run in Terminal: node ./circular.js
*/
