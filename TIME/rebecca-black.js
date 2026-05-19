// getDay(): returns the day of the week as a number (0 = Sunday, 1 = Monday ... 6 = Saturday)
// getFullYear(): returns the 4 digit year of a Date
// getMonth(): returns the month as a number (0 = January ... 11 = December)
// getDate(): returns the day of the month as a number (1-31)
// Modulo (%): returns the remainder of a division, useful for divisibility checks
// Logical OR (||): returns true if at least one condition is true
// Logical AND (&&): returns true only if all conditions are true

// isFriday returns true if the given Date is a Friday
function isFriday(date) {
  // getDay() returns 5 for Friday
  return date.getDay() === 5;
}

// isWeekend returns true if the given Date is a Saturday or Sunday
function isWeekend(date) {
  // getDay() returns 6 for Saturday and 0 for Sunday
  return date.getDay() === 6 || date.getDay() === 0;
}

// isLeapYear returns true if the year of the given Date is a leap year
function isLeapYear(date) {
  const year = date.getFullYear();
  // Divisible by 400: always a leap year
  // Divisible by 100 but not 400: not a leap year
  // Divisible by 4 but not 100: leap year
  return year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0);
}

// isLastDayOfMonth returns true if the given Date is the last day of its month
function isLastDayOfMonth(date) {
  // Create a new Date set to the next day, if the month changes it means date was the last day
  const nextDay = new Date(date.getTime() + 24 * 60 * 60 * 1000);
  return nextDay.getMonth() !== date.getMonth();
}

/*
TESTING:
const friday = new Date('2024-01-05');
const saturday = new Date('2024-01-06');
const sunday = new Date('2024-01-07');
const monday = new Date('2024-01-08');
const leapYear = new Date('2000-01-01');
const notLeapYear = new Date('1900-01-01');
const lastDay = new Date('2024-01-31');
const notLastDay = new Date('2024-01-15');

console.log(isFriday(friday));          // Expected: true
console.log(isFriday(monday));          // Expected: false

console.log(isWeekend(saturday));       // Expected: true
console.log(isWeekend(sunday));         // Expected: true
console.log(isWeekend(monday));         // Expected: false

console.log(isLeapYear(leapYear));      // Expected: true
console.log(isLeapYear(notLeapYear));   // Expected: false

console.log(isLastDayOfMonth(lastDay));    // Expected: true
console.log(isLastDayOfMonth(notLastDay)); // Expected: false
*/
