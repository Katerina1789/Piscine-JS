// async/await: pauses execution until a promise resolves or rejects
// try/catch: catches errors from async functions without crashing
// Promise.race(): resolves or rejects with whichever promise settles first
// Recursion: retry calls itself, decrementing count until it runs out of retries

// retry returns a function that calls callback, retrying up to count times on error
export const retry = (count, callback) => async (...args) => {
  try {
    return await callback(...args);
  } catch (err) {
    // if no retries left, throw the error
    if (count === 0) throw err;
    // otherwise decrement count and try again
    return retry(count - 1, callback)(...args);
  }
};

// timeout returns a function that calls callback and rejects if it takes longer than delay ms
export const timeout = (delay, callback) => async (...args) => {
  // race the callback against a timer that rejects after delay ms
  return Promise.race([
    callback(...args),
    new Promise((_, reject) =>
      setTimeout(() => reject(new Error('timeout')), delay)
    ),
  ]);
};
