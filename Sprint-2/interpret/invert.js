// Let's define how invert should work

// Given an object
// When invert is passed this object
// Then it should swap the keys and values in the object

// E.g. invert({x : 10, y : 20}), target output: {"10": "x", "20": "y"}

function invert(obj) {
  const invertedObj = {};

  for (const [key, value] of Object.entries(obj)) {
    // invertedObj.key = value;
    invertedObj[value] = key;
  }

  // console.log(invertedObj);
  return invertedObj;
}

module.exports = invert;

// a) What is the current return value when invert is called with { a : 1 }
// in this current code the return value will be key: 1.
//In this case the name of the property will be key since it used dot notation and not bracket where technically it get the key word as the property name

// b) What is the current return value when invert is called with { a: 1, b: 2 }
// The return value will be invertedObj = {key:1, key:2}

// c) What is the target return value when invert is called with {a : 1, b: 2}
//The target return value should be {1: a, 2: b}

// c) What does Object.entries return? Why is it needed in this program?
//It will return an array both from the object. It is needed so you will be able to reassign the values into the object.
//because you have to be able to read them and reassigned it to their new role as a property or as a value.

// d) Explain why the current return value is different from the target output
//because the code inside the loop doesn't really do anyting. It's just converting it to array assigning it to key and as a value
// then just reassigning it the same.
//The same explanation from the first question, it get the key literally as the name of the property and not the value of it since it used dot notation

// e) Fix the implementation of invert (and write tests to prove it's fixed!)
