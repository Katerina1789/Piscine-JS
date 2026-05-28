// Object.entries(): returns [key, value] pairs of an object's own properties
// Object.fromEntries(): builds a new object from an array of [key, value] pairs
// Array.isArray(): checks if a value is an array
// typeof: returns the type of a value as a string ('number', 'string', 'object')
// Recursion: a function that calls itself, used here to handle nested objects

// fusion merges two objects into one, combining values by type (arrays concat, strings join with space, numbers add, objects recurse)
export const fusion = (obj1, obj2) => {
  // start with all keys from both objects combined
  const allKeys = [...new Set([...Object.keys(obj1), ...Object.keys(obj2)])];

  return Object.fromEntries(
    allKeys.map((key) => {
      const a = obj1[key];
      const b = obj2[key];

      // if key only exists in one object, use whichever value exists
      if (a === undefined) return [key, b];
      if (b === undefined) return [key, a];

      // if both are arrays, concatenate them
      if (Array.isArray(a) && Array.isArray(b)) return [key, [...a, ...b]];

      // if both are strings, join with a space
      if (typeof a === 'string' && typeof b === 'string') return [key, `${a} ${b}`];

      // if both are numbers, add them
      if (typeof a === 'number' && typeof b === 'number') return [key, a + b];

      // if both are plain objects (not arrays), recurse into them
      if (typeof a === 'object' && typeof b === 'object' && !Array.isArray(a) && !Array.isArray(b)) {
        return [key, fusion(a, b)];
      }

      // type mismatch: replace with the second object's value
      return [key, b];
    })
  );
};
