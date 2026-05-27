// Recursion: a function that calls itself to handle nested structures
// Array.isArray(): checks if a value is an array before treating it as an object
// typeof: checks the type of a value, used to identify plain objects vs primitives
// Object.keys(): returns own keys of an object, works even on frozen objects

// deepCopy returns a fully independent recursive copy of an object or array
export const deepCopy = (value) => {
  // if value is an array, recursively copy each element into a new array
  if (Array.isArray(value)) return value.map(deepCopy);

  // if value is a plain object, recursively copy each key into a new object
  if (typeof value === 'object' && value !== null) {
    return Object.fromEntries(
      Object.keys(value).map((key) => [key, deepCopy(value[key])])
    );
  }

  // primitives (numbers, strings, booleans, functions, regex, undefined) are returned as-is
  return value;
};
