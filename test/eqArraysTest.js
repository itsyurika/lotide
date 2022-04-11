const { assert } = require('chai');
const eqArrays = require('../eqArrays');


describe("eqArrays function", () => {
  it("checks deep equality of two arrays and returns true if they're identical, otherwise returns false", () => {
    assert.equal((eqArrays([1, 2, 3], [1, 2, 3])), true);
    assert.equal((eqArrays([1, 2, 3], [1, 2, "3"])), false);

  });

});
