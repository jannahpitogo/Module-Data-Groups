function contains(objectName, propertyName) {
  if (
    typeof objectName !== "object" ||
    objectName == null ||
    Array.isArray(objectName)
  ) {
    return false;
  } else return propertyName in objectName;
}

module.exports = contains;
