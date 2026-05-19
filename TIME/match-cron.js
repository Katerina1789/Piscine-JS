// split(): splits a string into an array by a given separator
// parseInt(): converts a string to an integer
// Cron format: 'minute hour dayOfMonth month dayOfWeek'
// getMinutes(): returns the minutes of a Date (0-59)
// getHours(): returns the hours of a Date (0-23)
// getDate(): returns the day of the month (1-31)
// getMonth(): returns the month (0-11, so we add 1 for cron's 1-12 range)
// getDay(): returns the day of the week (0=Sunday, so we convert to cron's 1-7 where 1=Monday)

// matchCron returns true if the cron pattern matches the given Date
function matchCron(cron, date) {
  // Split cron string into its 5 parts: minute hour dayOfMonth month dayOfWeek
  const [minute, hour, dayOfMonth, month, dayOfWeek] = cron.split(' ');

  // Convert getDay() (0=Sunday, 1=Monday ... 6=Saturday) to cron (1=Monday ... 7=Sunday)
  const cronDay = date.getDay() === 0 ? 7 : date.getDay();

  // For each part: if it is '*' it matches anything, otherwise compare to the Date value
  if (minute !== '*' && parseInt(minute) !== date.getMinutes()) return false;
  if (hour !== '*' && parseInt(hour) !== date.getHours()) return false;
  if (dayOfMonth !== '*' && parseInt(dayOfMonth) !== date.getDate()) return false;
  if (month !== '*' && parseInt(month) !== date.getMonth() + 1) return false;
  if (dayOfWeek !== '*' && parseInt(dayOfWeek) !== cronDay) return false;

  return true;
}

/*
TESTING:
const date1 = new Date('2020-05-30 18:09:00');
const date2 = new Date('2020-05-30 19:09:00');
const date3 = new Date('2020-05-30 19:21:00');

console.log(matchCron('9 * * * *', date1));      // Expected: true
console.log(matchCron('9 * * * *', date2));      // Expected: true
console.log(matchCron('9 * * * *', date3));      // Expected: false
console.log(matchCron('* * * * *', date1));      // Expected: true (all wildcards)
console.log(matchCron('9 18 30 5 *', date1));    // Expected: true (exact match)
console.log(matchCron('9 18 30 6 *', date1));    // Expected: false (wrong month)
*/
