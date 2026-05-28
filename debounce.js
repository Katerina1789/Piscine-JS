// setTimeout: schedules a function to run after a delay in milliseconds
// clearTimeout: cancels a scheduled setTimeout using its id
// Date.now(): returns current timestamp in ms, used to track when last call happened
// Closure: the returned function remembers timer/lastCall from the outer scope across calls

// debounce returns a function that only executes after it stops being called for `wait` ms (trailing edge)
export const debounce = (fn, wait) => {
  let timer;
  return (...args) => {
    // reset the timer on every call — only fires after `wait` ms of silence
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), wait);
  };
};

// opDebounce adds leading edge support: fires immediately on first call if leading is true
export const opDebounce = (fn, wait, { leading = false } = {}) => {
  let timer;
  return (...args) => {
    // if leading and no timer is running, fire immediately
    if (leading && !timer) fn(...args);

    // reset the timer — if leading, just blocks re-entry; if trailing, schedules execution
    clearTimeout(timer);
    timer = setTimeout(() => {
      timer = null;
      if (!leading) fn(...args);
    }, wait);
  };
};
