// const pass = String.fromCodePoint(0x1f952);
// const fail = String.fromCodePoint(0x1f336);
const eqArrays = function (array1, array2) {
  return (
    array1.length === array2.length &&
    array1.every((element, index) => {
      return element === array2[index];
    })
  );
};

const assertArraysEqual = function (array1, array2) {
  const isEqual = eqArrays(array1, array2);
  if (isEqual) {
    return console.log(`🥒 Assertion Passed: first array === second array`);
  }
  return console.log(`🌶 Assertion Failed: first array !== second array`);
};

assertArraysEqual([1, 2, 3], [1, 2, "3"]); // => should FAIL
