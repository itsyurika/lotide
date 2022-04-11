const { assert } = require('chai');
const flatten = require('../flatten');

describe("flatten function", () => {
  it("returns [1, 2, 3, 4, 5, 6] for [1, 2, [3, 4], 5, [6]]", () => {
    assert.deepEqual((flatten([1, 2, [3, 4], 5, [6]])), [1, 2, 3, 4, 5, 6]);
  });

});

// console.log(flatten([1, 2, [3, [4, 5]], 5, [6], [7, 8]])); // => [1, 2, 3, 4, 5, 6]
//work on recursive double nested arrays 