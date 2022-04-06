const assertEqual = function (actual, expected) {
  if (actual === expected) {
    return console.log(`🥒 Assertion Passed: ${actual} === ${expected}`);
  } else {
    return console.log(`🌶 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// const countLetters = function (str) {
//   let letterCount = {};
//   let noSpaceStr = str.split(" ").join("");
//   for (const letter of noSpaceStr) {
//     if (letterCount[letter]) letterCount[letter] += 1;
//     else letterCount[letter] = 1;
//   }
//   return letterCount;
// };

const countLetters = function (str) {
  let letterCount = {};
  let noSpaceStr = str.split(" ").join("");
  for (const letter of noSpaceStr) {
    letterCount[letter] = letterCount[letter] + 1 || 1;
  }
  return letterCount;
};

const expected = {
  l: 1,
  i: 2,
  g: 1,
  h: 4,
  t: 2,
  o: 2,
  u: 2,
  s: 2,
  e: 3,
  n: 1,
};
console.log(countLetters("lighthouse in the house"));
