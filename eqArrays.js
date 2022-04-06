const pass = String.fromCodePoint(0x1f952);
const fail = String.fromCodePoint(0x1f336);

const assertEqual = function (actual, expected) {
  if (actual === expected) {
    return console.log(`🥒 Assertion Passed: ${actual} === ${expected}`);
  }
  return console.log(`🌶 Assertion Failed: ${actual} !== ${expected}`);
};

const eqArrays = function (array1, array2) {
  return (
    array1.length === array2.length &&
    array1.every((element, index) => {
      return element === array2[index];
    })
  );
};

// return (
//   arr1.length == arr2.length &&
//   (arr1, arr2).every((index) => {
//     return arr1[index] === arr2[index];
//   })
// );

assertEqual(eqArrays(["1", "2"], ["1", "2", "3"]), true); // =>
