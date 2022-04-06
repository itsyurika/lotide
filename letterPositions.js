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

// const letterPositions = function (sentence) {
//   const results = {};
//   let noSpaceStr = sentence.split(" ").join("");
//   for (let letter = 0; letter < noSpaceStr.length; letter++) {
//     if (!results[noSpaceStr[letter]]) {
//       results[noSpaceStr.charAt(letter)] = [letter];
//     } else {
//       results[noSpaceStr.charAt(letter)].push(letter);
//     }
//   }
//   return results;
// };

const letterPositions = function (sentence) {
  const results = {};
  let noSpaceStr = sentence.split(" ").join("");
  let index = 0;
  for (let letter of noSpaceStr) {
    if (!results[letter]) {
      results[letter] = [index];
      index++;
    } else {
      results[letter].push(index);
      index++;
    }
  }
  return results;
};

console.log(letterPositions("hello"));
// assertArraysEqual(letterPositions("hello"), {
//   h: [0],
//   e: [1],
//   l: [2, 3],
//   o: [4],
// });
assertArraysEqual(letterPositions("hello").e, [1]);
