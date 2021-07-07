const reverse = require("./index.js");

describe("Reverse function", () => {
  test("should exists", () => {
    expect(reverse).toBeDefined();
    expect(typeof reverse).toEqual("function");
  });

  test("should return integer that is the reverse ordering of numbers", () => {
    expect(reverse(500)).toEqual(5);
    expect(reverse(2394)).toEqual(4932);
    expect(reverse(-200)).toEqual(-2);
    expect(reverse(-324)).toEqual(-423);
  });
});
