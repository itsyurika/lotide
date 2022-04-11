const { expect } = require('chai');
const takeUntil = require('../takeUntil');


describe("takeUntil function", () => {
  it("should collect items from a provided array until the callback provided returns a truthy value", () => {
    const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
    const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];

    expect(takeUntil(data1, x => x < 0)).to.deep.equal([1, 2, 5, 7, 2]);
    expect(takeUntil(data2, x => x === ',')).to.deep.equal(['I\'ve', 'been', 'to', 'Hollywood']);
  });

});
