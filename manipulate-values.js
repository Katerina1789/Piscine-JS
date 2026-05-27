// Object.entries(): returns [key, value] pairs of an object's own properties
// Object.fromEntries(): builds a new object from an array of [key, value] pairs
// filter(): returns only elements passing a condition
// map(): transforms each element into a new value
// reduce(): accumulates all values into a single result

// filterValues returns a new object with only the entries whose value passes the callback
export const filterValues = (obj, cb) =>
  Object.fromEntries(Object.entries(obj).filter(([, value]) => cb(value)));

// mapValues returns a new object with each value transformed by the callback
export const mapValues = (obj, cb) =>
  Object.fromEntries(Object.entries(obj).map(([key, value]) => [key, cb(value)]));

// reduceValues accumulates all values into a single result using the callback, with optional initial value
export const reduceValues = (obj, cb, initialValue) => {
  const values = Object.values(obj);
  // if no initial value provided, use the first value as the starting accumulator
  return initialValue !== undefined
    ? values.reduce(cb, initialValue)
    : values.reduce(cb);
};
