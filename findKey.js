const findKey = (obj, callback) => {
  for (const planet in obj) {
    if (callback(obj[planet])) return planet;
  }
};

module.exports = findKey;