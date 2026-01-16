const dedupe = require("./dedupe.js");
/*
Dedupe Array

📖 Dedupe means **deduplicate**

In this kata, you will need to deduplicate the elements of an array

E.g. dedupe(['a','a','a','b','b','c']) target output: ['a','b','c']
E.g. dedupe([5, 1, 1, 2, 3, 2, 5, 8]) target output: [5, 1, 2, 3, 8]
E.g. dedupe([1, 2, 1]) target output: [1, 2]
*/

// Acceptance Criteria:

// Given an empty array
// When passed to the dedupe function
// Then it should return an empty array

// Given an array with no duplicates
// When passed to the dedupe function
// Then it should return a copy of the original array

// Given an array with strings or numbers
// When passed to the dedupe function
// Then it should remove the duplicate values, preserving the first occurence of each element

describe("dedupe", () => {
  test("given an empty array it should return empty array", () => {
    const input = [];
    const output = dedupe(input);

    expect(output).toEqual(input);
  });

  test("Given an array with no duplicates return a copy of the original array", () => {
    const input = [1, 2, 3, 4, 5];
    const output = dedupe(input);

    expect(output).toEqual([1, 2, 3, 4, 5]);
  });

  test("Given an array with strings or numbers remove duplicated values preserving the first occurence of each element", () => {
    const input = ["a", 1, 2, 2, 3, 4, 5, 5, 6];
    const output = dedupe(input);

    expect(output).toEqual(["a", 1, 2, 3, 4, 5, 6]);
  });
});
