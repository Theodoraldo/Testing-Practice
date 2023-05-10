const Calculator = require('./task3');

describe('Add', () => {
  test('10+10=20', () => {
    //Arange
    const x = 10;
    const y = 10;

    //Act
    const calculator = new Calculator(x, y);
    const result = calculator.add(x, y);
    //Assert
    expect(result).toBe(20);
  });
});

describe('Subtract', () => {
  test('10-10=0', () => {
    //Arrange
    const x = 10;
    const y = 10;

    //Act
    const calculation = new Calculator(x, y);
    const result = calculation.subtract(x, y);

    //Assert
    expect(result).toBe(0);
  });
});

describe('divide', () => {
  test('10/10=1', () => {
    //Arrange
    const x = 10;
    const y = 10;

    //Act
    const divide = new Calculator(x, y);
    const result = divide.divide(x, y);

    //Assert
    expect(result).toBe(1);
  });
});

describe('multiply', () => {
  test('10*10=100', () => {
    //Arrange
    const x = 10;
    const y = 10;

    //Act
    const multiply = new Calculator(x, y);
    const result = multiply.multiply(x, y);

    //Assert
    expect(result).toBe(100);
  });
});
