const stringLength = require('./task1');

test('String length to be less or equal to 10', () => {
  expect(stringLength("Hello Theo")).toBeLessThanOrEqual(10);
});

