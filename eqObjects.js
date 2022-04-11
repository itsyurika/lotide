const eqArrays = require('./eqArrays');

const eqObjects = function(object1, object2) {
  let key1 = Object.keys(object1);
  let key2 = Object.keys(object2);
  if (key1.length !== key2.length) return false;

  for (const key of key1) {
    if (Array.isArray(object1[key])) {
      // console.log("array is here");
      if (!eqArrays(object2[key], object1[key])) {
        return false;
      }
    } else {
      if (object1[key] !== object2[key]) {
        // console.log("object2 key: ", key, "object2 value: ", object2[key]);
        return false;
      }
    }
  }
  return true;
};

module.exports = eqObjects;