const countLetters = function(str) {
  let letterCount = {};
  let noSpaceStr = str.split(" ").join("");
  for (const letter of noSpaceStr) {
    letterCount[letter] = letterCount[letter] + 1 || 1;
  }
  return letterCount;
};

module.exports = countLetters;
