const { expect } = require('chai');
const without = require('../without');

describe("without function", () => {
  it("should not alter the original array", () => {
    const words = ["hello", "world", "lighthouse"];
    without(words, ["lighthouse"]);
    expect(words).to.deep.equal(["hello", "world", "lighthouse"]);
  });
  it("should return an array after removing unwanted elements", () => {
    const words = ["hello", "world", "lighthouse"];
    expect(without(words, ["lighthouse"])).to.deep.equal(["hello", "world"]);
    expect(without([1, 2, 3], [1])).to.deep.equal([2, 3]);
  });
  it("should not be affected by unwanted items that the original array does not have", () => {
    const words = ["hello", "world", "lighthouse"];
    expect(without(words, ["lighthouse"])).to.deep.equal(["hello", "world"]);
    expect(without(["1", "2", "3"], [1, 2, "3"])).to.deep.equal(["1", "2"]);
  });
});
