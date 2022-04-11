
const isEven = (array) => array.length % 2 === 0;
const middle = function(array) {
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

module.exports = middle;