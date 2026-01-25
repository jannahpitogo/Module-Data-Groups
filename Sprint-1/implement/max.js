function findMax(elements) {
  if (elements.length === 0) return -Infinity;

  if (elements.length === 1) return elements[0];

  if (elements.every((index) => typeof index !== "number")) return -Infinity;

  elements = elements.filter((item) => typeof item == "number");

  let result = elements[0];
  for (let i = 1; i < elements.length; i++) {
    if (elements[i] > result) {
      result = elements[i];
    }
  }
  return result;
}

module.exports = findMax;
