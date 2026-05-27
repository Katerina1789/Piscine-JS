// Currying: a function that returns another function, allowing partial application of arguments
// Object.entries(): returns [key, value] pairs of an object's own properties
// Object.fromEntries(): builds a new object from an array of [key, value] pairs
// Spread operator (...): merges objects together, later keys override earlier ones

// defaultCurry merges two objects, second object's values override first object's values
export const defaultCurry = (defaults) => (obj) => ({ ...defaults, ...obj });

// mapCurry applies a mapping function to each entry of an object
export const mapCurry = (cb) => (obj) =>
  Object.fromEntries(Object.entries(obj).map(cb));

// reduceCurry applies a reduce function to an object's entries with an optional initial value
export const reduceCurry = (cb) => (obj, initialValue) => {
  const entries = Object.entries(obj);
  return initialValue !== undefined
    ? entries.reduce(cb, initialValue)
    : entries.reduce(cb);
};

// filterCurry filters an object's entries using a callback
export const filterCurry = (cb) => (obj) =>
  Object.fromEntries(Object.entries(obj).filter(cb));

// reduceScore returns the total of pilotingScore + shootingScore for force users only
export const reduceScore = (personnel, initialValue) =>
  reduceCurry((acc, [, v]) =>
    v.isForceUser ? acc + v.pilotingScore + v.shootingScore : acc
  )(personnel, initialValue);

// filterForce returns only force users with a shootingScore of 80 or higher
export const filterForce = (personnel) =>
  filterCurry(([, v]) => v.isForceUser && v.shootingScore >= 80)(personnel);

// mapAverage returns each person with an added averageScore of their two scores
export const mapAverage = (personnel) =>
  mapCurry(([k, v]) => [
    k,
    { ...v, averageScore: (v.pilotingScore + v.shootingScore) / 2 },
  ])(personnel);
