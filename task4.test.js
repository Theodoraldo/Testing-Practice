const capitalize = require('./task4');

test("Capitalize the first character in a sting", () => {
  const str = "microverse";
  expect(capitalize(str)).toBe("Microverse");
})