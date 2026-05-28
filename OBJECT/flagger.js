// Object.entries(): returns [key, value] pairs of an object's own properties
// Object.fromEntries(): builds a new object from [key, value] pairs
// filter(): returns only elements passing a condition
// map(): transforms each element, used here to build alias and description entries
// join('\n'): joins array of description strings into one newline-separated string

// flags returns alias and description objects from a flags config object
export const flags = (obj) => {
  // separate help list from the rest of the flags
  const { help, ...rest } = obj;

  // build alias object: always start with h -> help, then first letter of each flag
  const alias = { h: 'help', ...Object.fromEntries(
    Object.keys(rest).map((key) => [key[0], key])
  )};

  // if help lists specific flags, show only those descriptions in that order
  // otherwise show all flags' descriptions
  const flagsToDescribe = help ? help : Object.keys(rest);

  const description = flagsToDescribe
    .filter((key) => rest[key])
    .map((key) => `-${key[0]}, --${key}: ${rest[key]}`)
    .join('\n');

  return { alias, description };
};
