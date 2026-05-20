// closures: inner functions remember variables from the outer function
// returning a function allows storing country and its cities for later checks
// includes(): checks if an array contains a given value

// hasCity returns a function that checks if a city belongs to a given country
function hasCity(country, cities) {
  return function (city) {
    if (cities.includes(city)) {
      return `${city} is a city from ${country}`;
    }
    return `${city} is not a city from ${country}`;
  };
}

/*
TESTING:
const greekCities = hasCity('Greece', ['Athens', 'Thessaloniki', 'Patras']);

console.log(greekCities('Athens'));
// Expected: "Athens is a city from Greece"

console.log(greekCities('London'));
// Expected: "London is not a city from Greece"

const usaCities = hasCity('USA', ['New York', 'Chicago', 'Miami']);

console.log(usaCities('Miami'));
// Expected: "Miami is a city from USA"
*/
