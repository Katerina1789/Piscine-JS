// Promise.resolve(): wraps any value in a promise — resolves immediately for plain values, passes through promises
// Object.entries(): returns [key, value] pairs to iterate over the object
// Object.fromEntries(): rebuilds the object from resolved [key, value] pairs

// all works like Promise.all but for objects — resolves all values and returns a new object with the same keys
export const all = (obj) => {
  const entries = Object.entries(obj);

  // resolve each entry individually and collect into a new object
  return new Promise((resolve, reject) => {
    const result = {};
    let remaining = entries.length;

    // edge case: empty object resolves immediately
    if (remaining === 0) return resolve({});

    entries.forEach(([key, value]) => {
      Promise.resolve(value).then((resolved) => {
        result[key] = resolved;
        // only resolve once all entries are done
        if (--remaining === 0) resolve(result);
      }).catch(reject);
    });
  });
};
