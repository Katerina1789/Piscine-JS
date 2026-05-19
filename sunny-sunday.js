// Arrays: ordered lists of values accessed by index
// Modulo (%): returns the remainder of a division, used to cycle through a fixed range
// Date arithmetic: subtracting two Dates gives the difference in milliseconds
// setFullYear(year, month, day): sets a Date's year, month (0-indexed), and day manually
// Math.round(): rounds a number to the nearest integer, avoids floating point errors

const weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

// sunnySunday returns the weekday name for a given Date in a 6-day week (no Sundays)
function sunnySunday(date) {
  // Build epoch 0001-01-01 safely using setFullYear to handle ancient years
  const epoch = new Date(0);
  epoch.setFullYear(1, 0, 1);

  const msPerDay = 1000 * 60 * 60 * 24;

  // Subtract epoch from date to get total days passed since 0001-01-01
  const daysPassed = Math.round((date - epoch) / msPerDay);

  // Modulo 6 gives our position in the 6-day cycle (0 = Monday, 5 = Saturday)
  return weekDays[daysPassed % 6];
}

/*
TESTING:
console.log(sunnySunday(new Date('0001-01-01'))); // Expected: Monday
console.log(sunnySunday(new Date('0001-01-02'))); // Expected: Tuesday
console.log(sunnySunday(new Date('0001-01-06'))); // Expected: Saturday
console.log(sunnySunday(new Date('0001-01-07'))); // Expected: Monday (Sunday skipped, back to Monday)
console.log(sunnySunday(new Date('0001-01-08'))); // Expected: Tuesday
*/
