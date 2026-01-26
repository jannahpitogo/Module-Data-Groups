function parseQueryString(queryString) {
  const queryParams = {};
  if (queryString.length === 0) {
    return queryParams;
  }
  const keyValuePairs = queryString.split("&");

  const index0 = queryString.split("=", 1)[0];
  const index1 = queryString.slice(index0.length + 1);
  const key = index0;
  const value = index1;
  queryParams[key] = value;

  return queryParams;
}

module.exports = parseQueryString;
