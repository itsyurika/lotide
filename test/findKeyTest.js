const { expect } = require('chai');
const findKey = require('../findKey');

const starSets = {
  "Blue Hill": { stars: 1 },
  "Akaleri": { stars: 3 },
  "noma": { stars: 2 },
  "elBulli": { stars: 3 },
  "Ora": { stars: 2 },
  "Akelarre": { stars: 3 }
};


describe("findKey function", () => {
  it("should return the first key for which the callback returns a truthy value from an object", () => {
    expect(findKey(starSets, x => x.stars === 2)).to.equal("noma");
    expect(findKey(starSets, x => x.stars === 3)).to.equal("Akaleri");
  });

});
