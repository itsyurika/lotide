const head = require('./head');
const middle = require('./middle');
const tail = require('./tail');
const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');
const assertEqual = require('./assertEqual'); // cleaned up upto here
const assertObjectsEqual = require('./assertObjectsEqual');
const countLetters = require('./countLetters');
const countOnly = require('./countOnly');
const eqObjects = require('./eqObjects');
const findKey = require('./findKey');
const findKeyByValue = require('./findKeyByValue');
const flatten = require('./flatten');
const map = require('./map');
const takeUntil = require('./takeUntil');
const without = require('./without');




module.exports = {
  head, tail, middle, eqArrays, assertEqual, assertArraysEqual, assertObjectsEqual, countLetters, countOnly, eqObjects, findKey, findKeyByValue, flatten, map, takeUntil, without
};