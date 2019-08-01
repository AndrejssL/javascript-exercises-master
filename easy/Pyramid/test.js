const pyramid = require("./index");

describe("Pyramin function", () => {
  beforeEach(() => {
    jest.spyOn(console, "log");
  });

  afterEach(() => {
    console.log.mockRestore();
  });

  test("should exists", () => {
    expect(pyramid).toBeDefined();
    expect(typeof pyramid).toEqual("function");
  });

  test("should prints a pryamid when called with 2", () => {
    pyramid(2);
    expect(console.log.mock.calls[0][0]).toEqual(" # ");
    expect(console.log.mock.calls[1][0]).toEqual("###");
    expect(console.log.mock.calls.length).toEqual(2);
  });

  test("should prints a pryamid when called with 3", () => {
    pyramid(3);
    expect(console.log.mock.calls[0][0]).toEqual("  #  ");
    expect(console.log.mock.calls[1][0]).toEqual(" ### ");
    expect(console.log.mock.calls[2][0]).toEqual("#####");
    expect(console.log.mock.calls.length).toEqual(3);
  });

  test("should prints a pryamid when called with 4", () => {
    pyramid(4);
    expect(console.log.mock.calls[0][0]).toEqual("   #   ");
    expect(console.log.mock.calls[1][0]).toEqual("  ###  ");
    expect(console.log.mock.calls[2][0]).toEqual(" ##### ");
    expect(console.log.mock.calls[3][0]).toEqual("#######");
    expect(console.log.mock.calls.length).toEqual(4);
  });
});
