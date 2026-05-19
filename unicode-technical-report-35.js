// String replace(): replaces a substring or regex match with a new value
// Regex /pattern/g: matches all occurrences of a pattern in a string (g = global)
// Regex | (or): matches the first pattern that fits, so longest tokens listed first win
// Object: key-value map used here to look up each token's replacement value
// Callback in replace(): when replace receives a function, it calls it with each match and uses the return value
// padStart(length, char): pads a string from the left to reach the given length (e.g. '3' -> '03')
// getFullYear(): returns the 4 digit year of a Date
// getMonth(): returns the month (0-11)
// getDate(): returns the day of the month (1-31)
// getDay(): returns the day of the week (0=Sunday ... 6=Saturday)
// getHours(): returns the hours (0-23)
// getMinutes(): returns the minutes (0-59)
// getSeconds(): returns the seconds (0-59)
// Ternary operator (condition ? a : b): short if/else, returns a if true, b if false

const monthsShort = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const monthsLong = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const daysShort = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const daysLong = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

// format returns a formatted string from a Date and a format string using Unicode TR35 tokens
function format(date, str) {
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();
  const weekday = date.getDay();
  const hours24 = date.getHours();
  const hours12 = hours24 % 12 || 12;
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  // era: AD for year > 0, BC for year <= 0
  const eraShort = year > 0 ? 'AD' : 'BC';
  const eraLong = year > 0 ? 'Anno Domini' : 'Before Christ';

  // Map each token to its value
  const tokens = {
    'GGGG': eraLong,
    'MMMM': monthsLong[month],
    'EEEE': daysLong[weekday],
    'yyyy': String(year).padStart(4, '0'),
    'MMM' : monthsShort[month],
    'HH'  : String(hours24).padStart(2, '0'),
    'hh'  : String(hours12).padStart(2, '0'),
    'mm'  : String(minutes).padStart(2, '0'),
    'ss'  : String(seconds).padStart(2, '0'),
    'dd'  : String(day).padStart(2, '0'),
    'MM'  : String(month + 1).padStart(2, '0'),
    'G'   : eraShort,
    'E'   : daysShort[weekday],
    'y'   : String(year),
    'M'   : String(month + 1),
    'H'   : String(hours24),
    'h'   : String(hours12),
    'm'   : String(minutes),
    's'   : String(seconds),
    'd'   : String(day),
    'a'   : hours24 < 12 ? 'AM' : 'PM',
  };

  // Match all known tokens in the format string, replace each with its value
  // The regex matches longest tokens first thanks to the | (or) order
  return str.replace(/GGGG|MMMM|EEEE|yyyy|MMM|HH|hh|mm|ss|dd|MM|G|E|y|M|H|h|m|s|d|a/g, (token) => tokens[token]);
}

/*
TESTING:
const d = new Date('7 January 1985, 3:08:19');

console.log(format(d, 'HH(mm)ss [dd] <MMM>')); // Expected: 03(08)19 [07] <Jan>
console.log(format(d, 'yyyy'));                 // Expected: 1985
console.log(format(d, 'MMMM'));                 // Expected: January
console.log(format(d, 'EEEE'));                 // Expected: Monday
console.log(format(d, 'h:mm a'));               // Expected: 3:08 AM
console.log(format(d, 'HH:mm:ss'));             // Expected: 03:08:19
console.log(format(d, 'dd/MM/yyyy'));           // Expected: 07/01/1985
console.log(format(d, 'G'));                    // Expected: AD
console.log(format(d, 'GGGG'));                 // Expected: Anno Domini
*/
