// Date arithmetic: adding/subtracting milliseconds to move between dates
// getDay(): returns the day of the week as a number (0 = Sunday, 1 = Monday ... 6 = Saturday)
// getFullYear(): returns the 4 digit year of a Date
// padStart(length, char): pads a string from the left until it reaches the given length (e.g. '1' -> '01')
// String(): converts a value to a string so string methods like padStart can be used on it
// Template literals: strings using backticks that allow embedded expressions with ${}

// firstDayWeek returns the date of the first Monday of the given week number and year as dd-mm-yyyy
function firstDayWeek(number, year) {
  const msPerDay = 1000 * 60 * 60 * 24;

  // Use setFullYear to handle ancient years correctly (new Date(year) misreads years 0-99 as 1900-1999)
  const jan1 = new Date(0);
  jan1.setFullYear(parseInt(year), 0, 1);

  // getDay() returns 0 for Sunday, 1 for Monday etc.
  // We convert so that Monday = 0, Tuesday = 1 ... Sunday = 6
  const jan1Day = (jan1.getDay() + 6) % 7;

  // Find the Monday of week 1 by stepping back from Jan 1st to the nearest Monday
  const week1Monday = new Date(jan1.getTime() - jan1Day * msPerDay);

  // Add (number - 1) weeks in milliseconds to get to the target week's Monday
  const targetMonday = new Date(week1Monday.getTime() + (number - 1) * 7 * msPerDay);

  // If the target Monday is in the previous year, return January 1st instead
  if (targetMonday.getFullYear() < parseInt(year)) return `01-01-${year}`;

  // Format the date as dd-mm-yyyy, padStart ensures single digits get a leading zero (e.g. 1 -> 01)
  const day = String(targetMonday.getDate()).padStart(2, '0');
  const month = String(targetMonday.getMonth() + 1).padStart(2, '0');
  const fullYear = targetMonday.getFullYear();

  return `${day}-${month}-${fullYear}`;
}

/*
TESTING:
console.log(firstDayWeek(1, '2020'));  // Expected: 01-01-2020 (week 1 Monday is Dec 30 2019, previous year so return Jan 1)
console.log(firstDayWeek(1, '2021'));  // Expected: 01-01-2021 (week 1 Monday is Dec 28 2020, previous year so return Jan 1)
console.log(firstDayWeek(2, '2020'));  // Expected: 06-01-2020
console.log(firstDayWeek(1, '2018'));  // Expected: 01-01-2018 (Jan 1 is a Monday, week 1 starts exactly on Jan 1)
*/
