// Promise.resolve(): wraps any value in a promise — resolves immediately for plain values, passes through promises
// Object.entries(): returns [key, value] pairs to iterate over the object
// Object.fromEntries(): rebuilds the object from resolved [key, value] pairs

// all works like Promise.all but for objects — resolves all values and returns a new object with the same keys
export const all = async (obj) => {
  // resolve all values (plain values resolve immediately, promises wait)
  const entries = await Promise.all(
    Object.entries(obj).map(async ([key, value]) => [key, await Promise.resolve(value)])
  );
  return Object.fromEntries(entries);
};

// Learned to use Promise.resolve which wraps any value safely for awaiting