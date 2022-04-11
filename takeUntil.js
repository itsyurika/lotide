const takeUntil = function(array, callback) {
  let result = [];
  for (const item of array) {
    if (callback(item)) return result;
    result.push(item);
  }
  return result;
};


const eqArrays = function(array1, array2) {
  return (
    array1.length === array2.length &&
    array1.every((element, index) => {
      return element === array2[index];
    })
  );
};

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    const inspect = require("util").inspect;
    return console.log(`🥒 Assertion Passed: ${inspect(array1)} === ${inspect(array2)}`);
  }
  return console.log(`🌶 Assertion Failed: first array !== second array`);
};

// const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
// const results1 = assertArraysEqual(takeUntil(data1, x => x < 0), [1, 2, 5, 7, 2]);


// console.log('---');

// const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
// const results2 = assertArraysEqual(takeUntil(data2, x => x === ','), ['I\'ve', 'been', 'to', 'Hollywood']);


//expected output
// [ 1, 2, 5, 7, 2 ]
// --
// [ 'I\'ve', 'been', 'to', 'Hollywood' ]
module.exports = takeUntil;