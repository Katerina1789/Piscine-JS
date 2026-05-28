// setTimeout: schedules a function after a delay
// clearTimeout: cancels a scheduled timeout
// Date.now(): returns current timestamp in ms, used to track elapsed time since last call
// Closure: lastCall and timer persist across calls via closure

// throttle returns a function that executes at most once every `wait` ms (trailing edge by default off)
export const throttle = (fn, wait) => {
  let lastCall = 0;
  return (...args) => {
    const now = Date.now();
    // only execute if enough time has passed since the last call
    if (now - lastCall >= wait) {
      lastCall = now;
      fn(...args);
    }
  };
};

// opThrottle adds leading and trailing edge options
export const opThrottle = (fn, wait, { leading = false, trailing = false } = {}) => {
  let lastCall = 0;
  let timer;
  return (...args) => {
    const now = Date.now();
    const remaining = wait - (now - lastCall);

    if (leading && remaining <= 0) {
      // leading: fire immediately if wait has elapsed
      lastCall = now;
      fn(...args);
    } else if (trailing && !timer) {
      // trailing: schedule one final call after wait ms of silence
      timer = setTimeout(() => {
        timer = null;
        lastCall = Date.now();
        fn(...args);
      }, remaining > 0 ? remaining : wait);
    }
  };
};
