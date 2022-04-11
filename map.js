const words = ["hello", "my", "name", "is", "yuri"];

const map = function(array, callback) {
  const results = [];
  for (const item of array) {
    results.push(callback(item));
  }
  return results;
};

const eqArrays = function(array1, array2) {
  return (
    array1.length === array2.length &&
    array1.every((element, index) => {
      return element === array2[index];
    })
  );
};

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    const inspect = require("util").inspect;
    return console.log(`🥒 Assertion Passed: ${inspect(array1)} === ${inspect(array2)}`);
  }
  return console.log(`🌶 Assertion Failed: first array !== second array`);
};

// const results1 = map(words, word => word[0]);
// const expected = ["h", "m", "n", "i", "y"];
// assertArraysEqual(results1, expected);

module.exports = map;