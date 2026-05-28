// Object.entries(): returns [key, value] pairs of an object's own properties
// Object.fromEntries(): builds a new object from an array of [key, value] pairs
// filter(), map(), reduce(): array methods applied here to entries ([key, value] pairs)
// Math.round(): rounds to nearest integer, used here with precision to avoid floating point errors

// filterEntries returns a new object with only entries passing the callback
export const filterEntries = (obj, cb) =>
  Object.fromEntries(Object.entries(obj).filter(cb));

// mapEntries returns a new object with each entry transformed by the callback
export const mapEntries = (obj, cb) =>
  Object.fromEntries(Object.entries(obj).map(cb));

// reduceEntries accumulates all entries into a single result using the callback
export const reduceEntries = (obj, cb, initialValue) => {
  const entries = Object.entries(obj);
  return initialValue !== undefined
    ? entries.reduce(cb, initialValue)
    : entries.reduce(cb);
};

// round to given decimal places to fix floating point precision errors
const round = (n, decimals = 3) => Math.round(n * 10 ** decimals) / 10 ** decimals;

// totalCalories returns the sum of calories for all items in the cart using nutritionDB
export const totalCalories = (cart) =>
  reduceEntries(cart, (acc, [item, grams]) =>
    round(acc + (nutritionDB[item].calories * grams) / 100), 0);

// lowCarbs returns only cart items whose total carbs are less than 50g
export const lowCarbs = (cart) =>
  filterEntries(cart, ([item, grams]) =>
    (nutritionDB[item].carbs * grams) / 100 < 50);

// cartTotal returns a new object with each item's nutrition facts scaled to the cart's grams
export const cartTotal = (cart) =>
  mapEntries(cart, ([item, grams]) => [
    item,
    // scale each nutrient value by grams/100 and round to avoid floating point errors
    mapEntries(nutritionDB[item], ([nutrient, per100g]) => [
      nutrient,
      round((per100g * grams) / 100),
    ]),
  ]);
