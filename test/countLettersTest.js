const { assert } = require('chai');
const countLetters = require('../countLetters');

const expected = {
  l: 1,
  i: 2,
  g: 1,
  h: 4,
  t: 2,
  o: 2,
  u: 2,
  s: 2,
  e: 3,
  n: 1,
};

describe("countLetters function", () => {
  it("returns an object with each letter as key and occurences as value", () => {
    assert.deepEqual((countLetters("lighthouse in the house")), expected);
  });

});
