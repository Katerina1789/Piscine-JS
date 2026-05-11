// getAcceleration: returns the acceleration of an object based on available data
// it uses one of the formulas: F/m, Δv/Δt or 2d/t^2
// returns "impossible" if none can be computed
const getAcceleration = (obj) => {
  // Formula 1: a = F / m
  if (obj.f !== undefined && obj.m !== undefined) {
    return obj.f / obj.m;
  }

  // Formula 2: a = Δv / Δt
  if (obj["Δv"] !== undefined && obj["Δt"] !== undefined) {
    return obj["Δv"] / obj["Δt"];
  }

  // Formula 3: a = 2d / t^2
  if (obj.d !== undefined && obj.t !== undefined) {
    return (2 * obj.d) / (obj.t ** 2);
  }

  // If none of the formulas can be used
  return "impossible";
};


/*
TESTING:
console.log(getAcceleration({ f: 10, m: 5 }));             // 2
console.log(getAcceleration({ "Δv": 100, "Δt": 50 }));     // 2
console.log(getAcceleration({ d: 10, t: 1 }));             // 20
console.log(getAcceleration({ f: 10 }));                   // "impossible"
console.log(getAcceleration({ m: 5 }));                    // "impossible"
console.log(getAcceleration({}));                          // "impossible"

run in Terminal: node ./physics.js
*/
