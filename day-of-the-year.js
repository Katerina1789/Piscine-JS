// Date arithmetic: subtracting two Dates gives the difference in milliseconds
// getFullYear(): returns the 4 digit year of a Date
// setFullYear(year, month, day): sets a Date's year, month (0-indexed), and day manually
// Math.round(): rounds a number to the nearest integer, avoids floating point errors

// dayOfTheYear returns the number of days since January 1st of the given Date's year
function dayOfTheYear(date) {
  // Build January 1st of the given year using setFullYear to handle ancient years correctly
  const jan1 = new Date(0);
  jan1.setFullYear(date.getFullYear(), 0, 1);

  const msPerDay = 1000 * 60 * 60 * 24;

  // Subtract jan1 from date to get milliseconds difference, divide by msPerDay to get days
  return Math.round((date - jan1) / msPerDay);
}

/*
TESTING:
console.log(dayOfTheYear(new Date('2020-01-01'))); // Expected: 0 (first day of the year)
console.log(dayOfTheYear(new Date('2020-01-02'))); // Expected: 1
console.log(dayOfTheYear(new Date('2020-12-31'))); // Expected: 365 (2020 is a leap year)
console.log(dayOfTheYear(new Date('2019-12-31'))); // Expected: 364 (2019 is not a leap year)
*/
