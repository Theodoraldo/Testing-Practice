const stringLength = require('./task1');

//Task 0ne
test('String length to be less or equal to 10', () => {
  expect(stringLength("Hello Theo")).toBeLessThanOrEqual(10);
});

