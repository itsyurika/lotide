const eqArrays = function(array1, array2) {
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


module.exports = eqArrays;