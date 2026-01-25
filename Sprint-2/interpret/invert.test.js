const invert = require("./invert.js");

describe("invert", () => {
  test("Given an object should return an inverted or swap value of property and the value", () => {
    const input = { a: 1 };
    const output = invert(input);
    const targetOutput = { 1: "a" };

    expect(output).toEqual(targetOutput);
  });
});
