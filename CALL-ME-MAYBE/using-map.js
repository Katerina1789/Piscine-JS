// map(): creates a new array by transforming each element
// object.property: accesses a value from an object
// split(): splits a string into an array of words
// join(): rebuilds an array of words into a single string
// toUpperCase(): converts a character to uppercase
// slice(): returns part of a string starting from a given index
// replace(): replaces all matches of a regex pattern
// \s+: matches one or more whitespace characters
// parseInt(): extracts the numeric part of a string
// Math.floor(): rounds a number down
// template string: builds formatted strings using ${}

// citiesOnly returns an array containing only the city names
function citiesOnly(arr) {
  return arr.map(obj => obj.city);
}

// upperCasingStates capitalizes each word in every state name
function upperCasingStates(arr) {
  return arr.map(state =>
    state
      .split(' ')
      .map(word => word[0].toUpperCase() + word.slice(1))
      .join(' ')
  );
}

// fahrenheitToCelsius converts Fahrenheit strings into Celsius strings
function fahrenheitToCelsius(arr) {
  return arr.map(str => {
    const f = parseInt(str);
    const c = Math.floor((f - 32) * 5 / 9);
    return `${c}°C`;
  });
}

// trimTemp removes all spaces from the temperature strings
function trimTemp(arr) {
  return arr.map(obj => ({
    ...obj,
    temperature: obj.temperature.replace(/\s+/g, '')
  }));
}

// tempForecasts returns formatted forecast sentences
function tempForecasts(arr) {
  return arr.map(obj => {
    const trimmed = obj.temperature.replace(/\s+/g, '');
    const f = parseInt(trimmed);
    const c = Math.floor((f - 32) * 5 / 9);

    const state = obj.state
      .split(' ')
      .map(w => w[0].toUpperCase() + w.slice(1))
      .join(' ');

    return `${c}°Celsius in ${obj.city}, ${state}`;
  });
}

/*
TESTING:
console.log(citiesOnly([
  { city: 'Los Angeles', temperature: '  101 °F   ' },
  { city: 'San Francisco', temperature: ' 84 ° F   ' },
]));
// Expected: ['Los Angeles', 'San Francisco']

console.log(upperCasingStates(['alabama', 'new jersey']));
// Expected: ['Alabama', 'New Jersey']

console.log(fahrenheitToCelsius(['68°F', '59°F', '25°F']));
// Expected: ['20°C', '15°C', '-4°C']

console.log(trimTemp([
  { city: 'Los Angeles', temperature: '  101 °F   ' },
  { city: 'San Francisco', temperature: ' 84 ° F   ' },
]));
// Expected:
// [
//   { city: 'Los Angeles', temperature: '101°F' },
//   { city: 'San Francisco', temperature: '84°F' },
// ]

console.log(tempForecasts([
  {
    city: 'Pasadena',
    temperature: ' 101 °F',
    state: 'california',
    region: 'West',
  },
]));
// Expected: ['38°Celsius in Pasadena, California']
*/
