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

const flatten = (array) => {
  const newArray = array.reduce((previous, current) => {
    return previous.concat(current);
  }, []);
  return newArray;
};

// console.log(flatten([1, 2, [3, [4, 5]], 5, [6], [7, 8]])); // => [1, 2, 3, 4, 5, 6]

module.exports = flatten;