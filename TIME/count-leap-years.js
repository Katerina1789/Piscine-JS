// getFullYear(): returns the 4 digit year of a Date
// Modulo (%): returns the remainder of a division, used to check divisibility
// for loop: repeats a block of code a set number of times
// Leap year rule: divisible by 400 always leap, divisible by 100 but not 400 not leap, divisible by 4 but not 100 leap

// countLeapYears returns the number of leap years from year 1 up to the year of the given Date
function countLeapYears(date) {
  const year = date.getFullYear();
  let count = 0;

  // Loop from year 1 to the year before the given year, incrementing count for each leap year
  for (let i = 1; i < year; i++) {
    // Divisible by 400: always a leap year
    // Divisible by 100 but not 400: not a leap year
    // Divisible by 4 but not 100: leap year
    if (i % 400 === 0 || (i % 4 === 0 && i % 100 !== 0)) count++;
  }

  return count;
}

/*
TESTING:
console.log(countLeapYears(new Date('0001-01-01'))); // Expected: 0 (year 1 is not a leap year)
console.log(countLeapYears(new Date('0004-01-01'))); // Expected: 1 (year 4 is first leap year)
console.log(countLeapYears(new Date('0100-01-01'))); // Expected: 24 (year 100 is not a leap year)
console.log(countLeapYears(new Date('0400-01-01'))); // Expected: 97 (year 400 is a leap year)
console.log(countLeapYears(new Date('2000-01-01'))); // Expected: 485
*/
