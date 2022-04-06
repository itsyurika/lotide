// const pass = String.fromCodePoint(0x1f952);
// const fail = String.fromCodePoint(0x1f336);

const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`🥒 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🌶 Assertion Failed: ${actual} !== ${expected}`);
  }
};

assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual(1, 4);
assertEqual("hello", "hello");
assertEqual("hello", "Hello");
