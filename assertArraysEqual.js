
const eqArrays = function (array1, array2) {
  return (
    array1.length === array2.length &&
    array1.every((element, index) => {
      return element === array2[index];
    })
  );
};

const assertArraysEqual = function (array1, array2) {
  if (eqArrays(array1, array2)) {
  const inspect = require("util").inspect;
    return console.log(`🥒 Assertion Passed: ${inspect(array1)} === ${inspect(array2)}`);
  }
  return console.log(`🌶 Assertion Failed: first array !== second array`);
};
assertArraysEqual([1, 2, 3], [1, 2, "3"]); // => should FAIL
