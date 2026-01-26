function createLookup(countryCurrency) {
  let result = Object.fromEntries(countryCurrency);
  return result;
}

module.exports = createLookup;
