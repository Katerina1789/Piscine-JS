// async/await: pauses execution until each promise resolves before moving to the next
// reduce: chains promises sequentially, each waiting for the previous to finish
// Promise.resolve: wraps any value safely so we can await both sync and async functions

// series executes an array of async functions one at a time and returns all results in order
export const series = (fns) =>
  fns.reduce(
    async (accPromise, fn) => {
      // wait for all previous results, then await the next function
      const acc = await accPromise;
      const result = await Promise.resolve(fn());
      return [...acc, result];
    },
    Promise.resolve([])
  );
