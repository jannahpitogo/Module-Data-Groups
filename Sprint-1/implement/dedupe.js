function dedupe(inputArray) {
  if (!Array.isArray(inputArray)) return [];

  return [...new Set(inputArray)];
}

module.exports = dedupe;
