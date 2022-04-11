const countOnly = function(allItems, itemsToCount) {
  let resultObj = {};
  for (const element of allItems) {
    if (itemsToCount[element]) {
      if (resultObj[element]) resultObj[element] += 1;
      else resultObj[element] = 1;
    }
  }
  return resultObj;
};

module.exports = countOnly;