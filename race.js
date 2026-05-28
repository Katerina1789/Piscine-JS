// new Promise(): manually construct a promise with resolve and reject controls
// Promise.resolve(): wraps any value safely so plain values work alongside promises
// forEach: registers handlers on every promise simultaneously

// race returns the first promise to resolve or reject, never resolves for empty arrays
export const race = (promises) =>
  new Promise((resolve, reject) => {
    // empty array: never resolve, just hang
    promises.forEach((p) => Promise.resolve(p).then(resolve, reject));
  });

// some returns the first `count` resolved values, preserving their original order
export const some = (promises, count) =>
  new Promise((resolve) => {
    // edge cases: empty array or count of 0 resolve immediately with empty array
    if (!promises.length || count < 1) return resolve([]);

    const results = new Array(promises.length);
    let resolved = 0;

    promises.forEach((p, i) => {
      Promise.resolve(p).then((value) => {
        // store result at original index to preserve order
        results[i] = value;
        resolved++;
        // resolve once we have enough results
        if (resolved === count) resolve(results.filter((_, j) => j < promises.length));
      });
    });
  });
