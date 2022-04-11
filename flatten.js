const flatten = (array) => {
  const newArray = array.reduce((previous, current) => {
    return previous.concat(current);
  }, []);
  return newArray;
};

// will work on recursive double nested arrays later
// console.log(flatten([1, 2, [3, [4, 5]], 5, [6], [7, 8]])); // => [1, 2, 3, 4, 5, 6]

module.exports = flatten;