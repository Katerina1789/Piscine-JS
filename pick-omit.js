// Object.entries(): returns [key, value] pairs of an object's own properties only (ignores prototype chain)
// Object.fromEntries(): builds a new object from an array of [key, value] pairs
// Array.isArray(): checks if a value is an array, used to handle both string and array input
// filter(): returns a new array with only the elements that pass a condition
// includes(): returns true if an array contains a given value

// pick returns a new object containing only the keys that appear in the given string or array
export const pick = (obj, keys) => {
  // normalise keys to an array whether a single string or array of strings is passed
  const keyArr = Array.isArray(keys) ? keys : [keys];
  return Object.fromEntries(
    Object.entries(obj).filter(([key]) => keyArr.includes(key))
  );
};

// omit returns a new object excluding the keys that appear in the given string or array
export const omit = (obj, keys) => {
  // normalise keys to an array whether a single string or array of strings is passed
  const keyArr = Array.isArray(keys) ? keys : [keys];
  return Object.fromEntries(
    Object.entries(obj).filter(([key]) => !keyArr.includes(key))
  );
};
