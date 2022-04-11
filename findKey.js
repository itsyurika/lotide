
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(`🥒 Assertion Passed: ${actual} === ${expected}`);
  }
  return console.log(`🌶 Assertion Failed: ${actual} !== ${expected}`);
};


const findKey = (obj, callback) => {
  for (const planet in obj) {
    if (callback(obj[planet])) return planet;
  }
};

const starSets = {
  "Blue Hill": { stars: 1 },
  "Akaleri": { stars: 3 },
  "noma": { stars: 2 },
  "elBulli": { stars: 3 },
  "Ora": { stars: 2 },
  "Akelarre": { stars: 3 }
};

// assertEqual(findKey(starSets, x => x.stars === 2), "noma");

// findKey({
//   "Blue Hill": { stars: 1 },
//   "Akaleri":   { stars: 3 },
//   "noma":      { stars: 2 },
//   "elBulli":   { stars: 3 },
//   "Ora":       { stars: 2 },
//   "Akelarre":  { stars: 3 }
// }, x => x.stars === 3) ;// => "noma"

module.exports = findKey;