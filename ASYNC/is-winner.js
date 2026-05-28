// async/await: pauses execution until a promise resolves
// try/catch: handles errors from async db calls without crashing
// Promise: isWinner always returns a resolved promise with a string
// Array map/join: formats years and scores into comma-separated strings

// isWinner returns a string describing whether and how a country won the FIFA World Cup
export const isWinner = async (country) => {
  let winner;

  // try to find the country — if not found db throws, meaning it never won
  try {
    winner = await db.getWinner(country);
  } catch {
    return `${country} never was a winner`;
  }

  // check continent — must be European
  if (winner.continent !== 'Europe') {
    return `${country} is not what we are looking for because of the continent`;
  }

  let results;

  // try to get results — if not found db throws
  try {
    results = await db.getResults(winner.id);
  } catch {
    return `${country} is not what we are looking for because of the number of times it was champion`;
  }

  // must have won at least 3 times
  if (results.length < 3) {
    return `${country} is not what we are looking for because of the number of times it was champion`;
  }

  // format years and scores as comma-separated strings
  const years = results.map((r) => r.year).join(', ');
  const scores = results.map((r) => r.score).join(', ');

  return `${country} won the FIFA World Cup in ${years} winning by ${scores}`;
};
