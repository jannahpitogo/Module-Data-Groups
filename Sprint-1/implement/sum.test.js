/* Sum the numbers in an array

In this kata, you will need to implement a function that sums the numerical elements of an array

E.g. sum([10, 20, 30]), target output: 60
E.g. sum(['hey', 10, 'hi', 60, 10]), target output: 80 (ignore any non-numerical elements)
*/

const sum = require("./sum.js");

// Acceptance Criteria:

describe("sum", () => {
  // Given an empty array
  // When passed to the sum function
  // Then it should return 0

  test("Given an empty array return 0", () => {
    const input = [];
    const output = sum(input);

    expect(output).toEqual(0);
  });

  // Given an array with just one number
  // When passed to the sum function
  // Then it should return that number

  test("Given an array with just one number returned that number", () => {
    const input = [1];
    const output = sum(input);

    expect(output).toEqual(1);
  });

  // Given an array containing negative numbers
  // When passed to the sum function
  // Then it should still return the correct total sum

  test("Given an array containing negative numbers return correct total sum", () => {
    const input = [-1, -2, -3, -4, -5, -6];
    const output = sum(input);

    expect(output).toEqual(-21);
  });

  // Given an array with decimal/float numbers
  // When passed to the sum function
  // Then it should return the correct total sum

  test("Given an array with decimal numbers return correct total sum", () => {
    const input = [0.3, 0.25, 0.98];
    const output = sum(input);

    expect(output).toEqual(1.53);
  });

  // Given an array containing non-number values
  // When passed to the sum function
  // Then it should ignore the non-numerical values and return the sum of the numerical elements

  test("Given an array containing non-number values return the sum of the numerial elements", () => {
    const input = ["a", "b", "c", 1, 2];
    const output = sum(input);

    expect(output).toEqual(3);
  });

  // Given an array with only non-number values
  // When passed to the sum function
  // Then it should return the least surprising value given how it behaves for all other inputs

  test("Given an array with only non-number values return Infinity", () => {
    const input = ["a", "b", "c", "d"];
    const output = sum(input);

    expect(output).toEqual(0);
  });
});
