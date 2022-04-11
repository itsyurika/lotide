const { assert } = require('chai');
const countOnly = require('../countOnly');
const { expect } = require('chai');

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe",
];

const result1 = countOnly(firstNames, {
  Jason: true,
  Karima: true,
  Fang: true,
  Agouhanna: false,
});


describe("countOnly function", () => {
  it("returns occurences of specific elements designated by the second argument", () => {
    assert.equal((result1['Jason']), 1);
    assert.equal((result1['Fang']), 2);

  });

  it("returns undefined when looks for an element not wanted by the second argument", () => {
    expect(result1['Karima']).to.equal(undefined);
    assert.equal((result1['Agouhanna']), undefined);
  });

});