const assertEqual = function (actual, expected) {
  if (eqArrays(actual, expected)) {
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

const eqObjects = function (object1, object2) {
  let key1 = Object.keys(object1);
  let key2 = Object.keys(object2);
  if (key1.length !== key2.length) return false;

  for (const key of key1) {
    if (Array.isArray(object1[key])) {
      if (!eqArrays(object2[key], object1[key])) {
        return false;
      }
    } else {
      if (object1[key] !== object2[key]) {
        return false;
      }
    }
  }
  return true;
};

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function (actual, expected) {
  const inspect = require("util").inspect;
  // console.log(`Example label: ${inspect(actual)}`);
  if (eqObjects(actual, expected)) {
    return console.log(
      `🥒 Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`
    );
  }
  return console.log(
    `🌶 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`
  );
};

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
// console.log(eqObjects(cd, dc)); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
// console.log(eqObjects(cd, cd2)); // => false

assertObjectsEqual(cd, dc);
assertObjectsEqual(cd, cd2);
