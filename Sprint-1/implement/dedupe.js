function dedupe(inputArray) {
  if (!Array.isArray(inputArray)) return [];

  let notDuplicated = [];

  for (let i = 0; i < inputArray.length; i++) {
    if (!notDuplicated.includes(inputArray[i])) {
      notDuplicated.push(inputArray[i]);
    }
  }
  return notDuplicated;
}

module.exports = dedupe;
