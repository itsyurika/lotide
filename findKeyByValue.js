const findKeyByValue = function(object, value) {
  for (const iterator in object) {
    if (object[iterator] === value) return iterator;
  }
};

module.exports = findKeyByValue;