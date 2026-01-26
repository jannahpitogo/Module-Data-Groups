// Predict and explain first...

// This program attempts to log out all the property values in the object.
// But it isn't working. Explain why first and then fix the problem

const author = {
  firstName: "Zadie",
  lastName: "Smith",
  occupation: "writer",
  age: 40,
  alive: true,
};

console.log(author); //This logs every property and values inside author.

for (const value in author) {
  console.log(author[value]);
} //This will loop one by one for all the values of every propeerty.

//It isn't working because it is inside a loop which logging every element inside.
// Which isn't showing because author is an object not an array.
// Simply because objects are not iterable which shows in the error.
