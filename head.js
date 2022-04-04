const pass = String.fromCodePoint(0x1f952);
const fail = String.fromCodePoint(0x1f336);

const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`${pass} Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`${fail} Assertion Failed: ${actual} !== ${expected}`);
  }
};

const head = function (array) {
  return array[0];
};

assertEqual(head([]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
