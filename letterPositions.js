const letterPositions = function(sentence) {
  const results = {};
  let noSpaceStr = sentence.split(" ").join("");
  for (const letter of noSpaceStr) {
    !results[letter] ? (results[letter] = []) : null;
  }
  for (let i = 0; i < noSpaceStr.length; i++) {
    results[noSpaceStr[i]].push(i);
  }
  return results;
};

module.exports = letterPositions;