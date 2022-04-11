const { expect } = require('chai');
const letterPositions = require('../letterPositions');

describe("letterPosition function", () => {
  it("should return all the indices of each character in string as an object", () => {
    expect(letterPositions("hello")).to.deep.equal({
      h: [0],
      e: [1],
      l: [2, 3],
      o: [4],
    });
    expect(letterPositions("hello").e).to.deep.equal([1]);
  });
});
