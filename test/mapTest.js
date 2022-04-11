const { expect } = require('chai');
const map = require('../map');
const words = ["hello", "my", "name", "is", "yuri"];

describe("map function", () => {
  it("should iterate over given array and apply given callback function", () => {
    expect(map(words, words => words[0])).to.deep.equal(["h", "m", "n", "i", "y"]);
  });
});