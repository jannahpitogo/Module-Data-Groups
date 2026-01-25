const tally = require("./tally.js");

/**
 * tally array
 *
 * In this task, you'll need to implement a function called tally
 * that will take a list of items and count the frequency of each item
 * in an array
 *
 * For example:
 *
 * tally(['a']), target output: { a: 1 }
 * tally(['a', 'a', 'a']), target output: { a: 3 }
 * tally(['a', 'a', 'b', 'c']), target output: { a : 2, b: 1, c: 1 }
 */

// Acceptance criteria:

// Given a function called tally
// When passed an array of items
// Then it should return an object containing the count for each unique item

describe("tally", () => {
  // Given an empty array
  // When passed to tally
  // Then it should return an empty object

  test("Given an empty array should return an empty object", () => {
    const input = [];
    const output = tally(input);
    const targetOutput = {};

    expect(output).toEqual(targetOutput);
  });

  // Given an array with duplicate items
  // When passed to tally
  // Then it should return counts for each unique item

  test("Given an array of items it should return an object containing count for each unique item", () => {
    const input = [1, "a", "b", "b", "a", 1];
    const output = tally(input);
    const targetOutput = { 1: 2, a: 2, b: 2 };

    expect(output).toEqual(targetOutput);
  });

  // When passed to tally
  // Given an invalid input like a string
  // Then it should throw an error

  test("Given an invalid input like a string should throw an error", () => {
    const input = "Hello";
    const output = tally(input);
    const targetOutput = console.error("Invalid input");
    expect(output).toEqual(targetOutput);
  });
});
