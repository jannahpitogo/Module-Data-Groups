function tally(test) {
  let result = {};
  if (test.length === 0) return result;

  if (Array.isArray(test)) {
    const unique = new Set(test);

    for (const element of unique) {
      result[element] = 0;
    }

    for (const element of test) {
      result[element]++;
    }
    console.log(result);
    return result;
  } else {
    console.error("Invalid input");
  }
}

// tally(["a", "a", "b", "b", "c"]);
// tally("hello");

module.exports = tally;
