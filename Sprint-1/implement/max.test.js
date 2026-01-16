/* Find the maximum element of an array of numbers

In this kata, you will need to implement a function that find the largest numerical element of an array.

E.g. max([30, 50, 10, 40]), target output: 50
E.g. max(['hey', 10, 'hi', 60, 10]), target output: 60 (sum ignores any non-numerical elements)

You should implement this function in max.js, and add tests for it in this file.

We have set things up already so that this file can see your function from the other file.
*/

const findMax = require("./max.js");

// Given an empty array
// When passed to the max function
// Then it should return -Infinity
// Delete this test.todo and replace it with a test.

describe("findMax", () => {
  test("Given an empty array return -Infinity", () => {
    const input = [];
    const output = findMax(input);

    expect(output).toEqual(-Infinity);
  });

  // Given an array with one number
  // When passed to the max function
  // Then it should return that number

  test("Given an array with one number return that number", () => {
    const input = [1];
    const output = findMax(input);

    expect(output).toEqual(1);
  });

  // Given an array with both positive and negative numbers
  // When passed to the max function
  // Then it should return the largest number overall

  test("Given an array with positive and negative numbers return largest number", () => {
    const input = [1, 2, 3, 4, 5, 6, 20, -1, -5, -6];
    const output = findMax(input);

    expect(output).toEqual(20);
  });

  // Given an array with just negative numbers
  // When passed to the max function
  // Then it should return the closest one to zero

  test("Given an array with only negative numbers return closest to zero", () => {
    const input = [-200, -100, -10, -1, -0.5];
    const output = findMax(input);

    expect(output).toEqual(-0.5);
  });

  // Given an array with decimal numbers
  // When passed to the max function
  // Then it should return the largest decimal number

  test("Given array with decimal numbers return largest decimal number", () => {
    const input = [0.54, 0.2, 0.99, 0.1];
    const output = findMax(input);

    expect(output).toEqual(0.99);
  });

  // Given an array with non-number values
  // When passed to the max function
  // Then it should return the max and ignore non-numeric values

  test("Given an array with non number values return max and ignore non numberic values", () => {
    const input = ["a", "b", "c", "d", 1];
    const output = findMax(input);

    expect(output).toEqual(1);
  });

  // Given an array with only non-number values
  // When passed to the max function
  // Then it should return the least surprising value given how it behaves for all other inputs

  test("Given an array with only non-number values return the least surprising value", () => {
    const input = ["a", "b", "c", "d"];
    const output = findMax(input);

    expect(output).toEqual(-Infinity);
  });
});
