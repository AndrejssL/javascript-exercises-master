const reverse = require("./index.js");

describe("Reverse function", () => {
  test("should exists", () => {
    expect(reverse).toBeDefined();
    expect(typeof reverse).toEqual("function");
  });

  test("should return passed string with the reversed order of characters", () => {
    expect(reverse("abcd")).toEqual("dcba");
    expect(reverse("  abcd")).toEqual("dcba  ");
  });
});
