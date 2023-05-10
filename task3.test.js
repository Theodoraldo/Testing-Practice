const Calculator = require('./task3');

describe('Arithmetic', () => {
  it('Add', () => {
    //Arange
    const x = 10;
    const y = 10;

    //Act
    const calculator = new Calculator(x, y);
    const result = calculator.add(x, y);
    //Assert
    expect(result).toBe(20);
  });

  it('Subtract', () => {
    //Arrange
    const x = 10;
    const y = 10;

    //Act
    const calculation = new Calculator(x, y);
    const result = calculation.subtract(x, y);

    //Assert
    expect(result).toBe(0);
  });

  it('Divide', () => {
    //Arrange
    const x = 10;
    const y = 10;

    //Act
    const divide = new Calculator(x, y);
    const result = divide.divide(x, y);

    //Assert
    expect(result).toBe(1);
  });

  it('Multiply', () => {
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
