const { expect } = require('chai');
const eqObjects = require('../eqObjects');

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const cd2 = { c: "1", d: ["2", 3, 4] };

describe("eqObjects function", () => {
  it("checks deep equality of two objects and returns true if they're identical, otherwise returns false", () => {
    expect(eqObjects(cd, dc)).to.equal(true);
    expect(eqObjects(cd, cd2)).to.equal(false);
  });
});
