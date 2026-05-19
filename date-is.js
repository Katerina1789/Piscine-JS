// Comparison operators (<, >): compare two values and return a boolean
// isNaN(): returns true if a value is NaN (Not a Number), used to detect invalid Dates
// Date comparison: Date objects can be compared with < and > as they convert to milliseconds
// typeof: returns the type of a value as a string (e.g. 'number', 'string', 'object')
// instanceof: checks if a value is an instance of a specific type (e.g. Date)
// Date.now(): returns the current time in milliseconds since the Unix epoch

// isValid returns false if the given Date is invalid
function isValid(date) {
  // if date is a number and not NaN (e.g. Date.now()), it is valid
  if (typeof date === 'number' && !isNaN(date)) return true;
  // if date is a Date object and not NaN (e.g. new Date('banana')), it is valid
  if (date instanceof Date && !isNaN(date)) return true;
  return false;
}

// isAfter returns true if the first date is greater than the second
function isAfter(date1, date2) {
  return date1 > date2;
}

// isBefore returns true if the first date is less than the second
function isBefore(date1, date2) {
  return date1 < date2;
}

// isFuture returns true if the date is valid and is after the present moment
function isFuture(date) {
  // Date.now() gives the current time to compare against
  return isValid(date) && date > Date.now();
}

// isPast returns true if the date is valid and is before the present moment
function isPast(date) {
  // Date.now() gives the current time to compare against
  return isValid(date) && date < Date.now();
}

/*
TESTING:
const validDate = new Date('2020-01-01');
const invalidDate = new Date('banana');
const pastDate = new Date('2000-01-01');
const futureDate = new Date('2099-01-01');
const earlierDate = new Date('2020-01-01');
const laterDate = new Date('2021-01-01');

console.log(isValid(validDate));               // Expected: true
console.log(isValid(invalidDate));             // Expected: false

console.log(isAfter(laterDate, earlierDate));  // Expected: true
console.log(isAfter(earlierDate, laterDate));  // Expected: false

console.log(isBefore(earlierDate, laterDate)); // Expected: true
console.log(isBefore(laterDate, earlierDate)); // Expected: false

console.log(isFuture(futureDate));             // Expected: true
console.log(isFuture(pastDate));               // Expected: false
console.log(isFuture(invalidDate));            // Expected: false

console.log(isPast(pastDate));                 // Expected: true
console.log(isPast(futureDate));               // Expected: false
console.log(isPast(invalidDate));              // Expected: false
*/
