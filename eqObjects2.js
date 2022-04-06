const assertEqual = function (actual, expected) {
  if (actual === expected) {
    return console.log(`🥒 Assertion Passed: ${actual} === ${expected}`);
  }
  return console.log(`🌶 Assertion Failed: ${actual} !== ${expected}`);
};

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
//* Just putting eqArrays here to refer to
const eqArrays = function (array1, array2) {
  return (
    array1.length === array2.length &&
    array1.every((element, index) => {
      return element === array2[index];
    })
  );
};

const eqObjects = function (object1, object2) {
  let key1 = Object.keys(object1);
  let key2 = Object.keys(object2);
  // let value1 = Object.values(object1);
  // let value2 = Object.values(object2);

  // for (const element of key1) {
  //   if (!key2.includes(element)) return false;
  // }
  // for (const element of key2) {
  //   if (!key1.includes(element)) return false;
  // }
  if (key1.length !== key2.length) return false;

  for (const key of key1) {
    // console.log("obj1 key: ", key);
    // console.log("obj1 value: ", object1[key]);
    // console.log("obj2 value: ", object2[key]);
    // if (object1[key] === undefined || object2[key] === undefined) return false;
    if (object2[key] !== object1[key]) {
      return false;
    }
  }
  return true;
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(eqObjects(ab, ba));

const abc = { a: "1", b: "2", c: "3" };
console.log(eqObjects(ab, abc)); // => false

const test = { a: "1", c: "2" };
console.log(eqObjects(ab, test));
