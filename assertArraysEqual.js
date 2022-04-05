const pass = String.fromCodePoint(0x1f952);
const fail = String.fromCodePoint(0x1f336);

const assertArraysEqual = function (array1, array2) {
  const comparison = eqArrays(array1, array2);
  if (comparison === true) {
    console.log(`${pass} Assertion Passed: first array === second array`);
  } else {
    console.log(`${fail} Assertion Failed: first array !== second array`);
  }
};

const eqArrays = function (array1, array2) {
  return (
    array1.length === array2.length &&
    array1.every((element, index) => {
      return element === array2[index];
    })
  );
};

assertArraysEqual([1, 2, 3, 4], [1, 2, "3"]); // => should PASS
