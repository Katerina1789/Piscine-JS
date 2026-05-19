// Arrays: ordered lists of values accessed by index
// Modulo (%): returns the remainder of a division, useful for cycling through a fixed range
// Date math: subtracting two Date objects gives the difference in milliseconds
// Destructuring: unpack object properties directly into named variables ({ a, b } = obj)
// setFullYear(year, month, day): sets a Date's year, month (0-indexed), and day manually
// setHours(h, m, s): modifies a Date's time in place
/* epoch is a fixed starting point in time that everything else is measured from
    -it is like a ruler: the epoch is the 0 mark but instead of measuring time in hours and minutes, computers often measure it as "how many seconds/milliseconds have passed since the epoch"
    - the most famous epoch in computing is January 1, 1970, 00:00:00 UTC, known as the Unix epoch. That's what JavaScript's new Date(0) gives you
*/

const weekDays = [
  'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday',
  'secondMonday', 'secondTuesday', 'secondWednesday', 'secondThursday', 'secondFriday', 'secondSaturday', 'secondSunday',
];

// addWeek returns the 14-day weekday name for a given Date, starting from epoch 0001-01-01
function addWeek(date) {
  // Build epoch manually: new Date('0001-01-01') is unreliable in JS for ancient years
  // setFullYear(year, month, day): months are 0-indexed (0 = January)
  const epoch = new Date(0);
  epoch.setFullYear(1, 0, 1);

  // Subtract epoch from date to get milliseconds, divide by ms-per-day to get total days passed
  const msPerDay = 1000 * 60 * 60 * 24;
  const daysPassed = Math.round((date - epoch) / msPerDay);

  // Modulo 14 gives our position in the 14-day cycle (0 = Monday, 13 = secondSunday)
  const dayIndex = daysPassed % 14;

  return weekDays[dayIndex];
}

// timeTravel returns a Date modified with the hour, minute and second from the given object
function timeTravel({ date, hour, minute, second }) {
  // Destructuring: unpack hour, minute, second from the object directly in the parameter
  // setHours(h, m, s) modifies the date in place
  date.setHours(hour, minute, second);

  return date;
}


/*
TESTING:
console.log(addWeek(new Date('0001-01-01'))); // Expected: Monday
console.log(addWeek(new Date('0001-01-02'))); // Expected: Tuesday
console.log(addWeek(new Date('0001-01-07'))); // Expected: Sunday
console.log(addWeek(new Date('0001-01-08'))); // Expected: secondMonday
console.log(addWeek(new Date('0001-01-09'))); // Expected: secondTuesday

console.log(timeTravel({
  date: new Date('2020-05-29 23:25:22'),
  hour: 21,
  minute: 22,
  second: 22,
}).toString());
// Expected: Fri May 29 2020 21:22:22 GMT+0100 (Western European Summer Time)
*/
