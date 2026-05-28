// Object.entries(): returns an array of [key, value] pairs from an object's own properties
// Object.fromEntries(): builds an object from an array of [key, value] pairs

// invert returns a new object with keys and values swapped, last duplicate value wins
export const invert = (obj) => {
  // swap each [key, value] pair to [value, key] then build a new object from the result
  return Object.fromEntries(
    Object.entries(obj).map(([key, value]) => [value, key])
  );
};