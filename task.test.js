const stringLength = require('./task');

test('String length to be less or equal to 10', () => {
  expect(stringLength("Hello")).toBeLessThanOrEqual(10);
});