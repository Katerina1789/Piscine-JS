// Object.entries(): returns [key, value] pairs of an object's own properties
// Object.fromEntries(): builds a new object from an array of [key, value] pairs
// Object.keys(): returns an array of an object's own keys
// filter(), map(), reduce(): array methods applied here to keys instead of values

// filterKeys returns a new object with only the entries whose key passes the callback
export const filterKeys = (obj, cb) =>
  Object.fromEntries(Object.entries(obj).filter(([key]) => cb(key)));

// mapKeys returns a new object with each key transformed by the callback, values unchanged
export const mapKeys = (obj, cb) =>
  Object.fromEntries(Object.entries(obj).map(([key, value]) => [cb(key), value]));

// reduceKeys accumulates all keys into a single result using the callback, with optional initial value
export const reduceKeys = (obj, cb, initialValue) => {
  const keys = Object.keys(obj);
  // if initial value is undefined, use first key as starting accumulator
  return initialValue !== undefined
    ? keys.reduce(cb, initialValue)
    : keys.reduce(cb);
};
