function sum(elements) {
  if (elements.length === 0) return 0; // empty return 0
  if (elements.length === 1) return elements[0]; // If one number only it will rerturn the same
  if (elements.every((item) => typeof item !== "number")) return -Infinity; //all non number return -Infinity

  let result = 0;

  elements = elements.filter((item) => typeof item == "number");

  for (let i = 0; i < elements.length; i++) {
    result = result + elements[i]; //adding value
  }

  return result;
}

module.exports = sum;
