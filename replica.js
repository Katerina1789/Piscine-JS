// Recursion: function calls itself to handle deeply nested objects
// typeof: checks value type, used to identify plain objects vs primitives
// Array.isArray(): distinguishes arrays from plain objects
// Object.keys(): returns own keys, works on frozen objects
// Rest parameter (...sources): collects multiple source objects into an array

// replica deep assigns all properties from one or more source objects into the target object
export const replica = (target, ...sources) => {
  // loop through each source object and deep assign its properties into target
  for (const source of sources) {
    for (const key of Object.keys(source)) {
      const srcVal = source[key];
      const tgtVal = target[key];

      // if both source and target values are plain objects (not arrays), recurse into them
      if (
        typeof srcVal === 'object' && srcVal !== null && !Array.isArray(srcVal) &&
        typeof tgtVal === 'object' && tgtVal !== null && !Array.isArray(tgtVal)
      ) {
        replica(tgtVal, srcVal);
      } else {
        // otherwise assign the source value directly (handles primitives, arrays, regex, functions)
        target[key] = srcVal;
      }
    }
  }
  return target;
};
