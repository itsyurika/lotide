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
    console.log(`🥒 Assertion Passed: first array === second array`);
  } else {
    console.log(`🌶 Assertion Failed: first array !== second array`);
  }
};

const isEven = (array) => array.length % 2 === 0;
const middle = function (array) {
  let midArray = [];
  let midIndex = Math.floor(array.length / 2);
  if (array.length < 3) return midArray;
  if (!isEven(array)) {
    midArray.push(array[midIndex]);
    return midArray;
  }
  midArray = array.slice(midIndex - 1, midIndex + 1);
  return midArray;
};

assertArraysEqual(middle([1]), []); // => []
assertArraysEqual(middle([1, 2]), []); // => []
assertArraysEqual(middle([1, 2, 3]), [2]); // => [2]
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]); // => [3]
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]); // => [2, 3]
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); // => [3, 4]
