const assertArraysEqual = function(array1, array2) {
  if (array2) {
    // function wouldn't run unless there are 2 arrays
    const isEqual = eqArrays(array1, array2);
    if (isEqual === true) {
      console.log(`🥒 Assertion Passed: first array === second array`);
    } else {
      console.log(`🌶 Assertion Failed: first array !== second array`);
    }
  }
};

const eqArrays = function(array1, array2) {
  return (
    array1.length === array2.length &&
    array1.every((element, index) => {
      return element === array2[index];
    })
  );
};

const without = function(array1, array2) {
  const newArray = array1.filter((element) => !array2.includes(element));
  // console.log(newArray);
  return newArray;
};

module.exports = without;