// dogYears: takes a planet name + dog age in seconds => the dog's age on that planet in DOG YEARS
// 1 human year = 7 dog years
// Earth year in seconds = 31,557,600
const dogYears = (planet, seconds) => {
  // these are the orbital periods relative to Earth
  const periods = {
    earth: 1.0,
    mercury: 0.2408467,
    venus: 0.61519726,
    mars: 1.8808158,
    jupiter: 11.862615,
    saturn: 29.447498,
    uranus: 84.016846,
    neptune: 164.79132,
  };

  // convert seconds -> Earth years
  const earthYears = seconds / 31557600;

  // convert Earth years -> planet years
  const planetYears = earthYears / periods[planet];

  // convert planet years -> dog years
  const dogYears = planetYears * 7;

  // round to 2 decimals
  return Number(dogYears.toFixed(2));
};

/*
TESTING:
console.log('--- Example from instructions ---');
console.log(dogYears('earth', 1000000000)); // Expected: 221.82 (dog years on Earth)

console.log('--- Planet tests ---');
console.log(dogYears('mercury', 1000000000)); // Expected: 920.99
console.log(dogYears('venus', 1000000000));   // Expected: 360.56
console.log(dogYears('mars', 1000000000));    // Expected: 117.94
console.log(dogYears('jupiter', 1000000000)); // Expected: 18.7
console.log(dogYears('saturn', 1000000000));  // Expected: 7.53
console.log(dogYears('uranus', 1000000000));  // Expected: 2.64
console.log(dogYears('neptune', 1000000000)); // Expected: 1.35

console.log('--- Small values ---');
console.log(dogYears('earth', 1));   // tiny fraction (0)
console.log(dogYears('mars', 500));  // tiny fraction (0)

console.log('--- Edge cases ---');
console.log(dogYears('earth', 0));        // Expected: 0
console.log(dogYears('earth', 31557600)); // Expected: 1 Earth year -> 7 dog years
*/
