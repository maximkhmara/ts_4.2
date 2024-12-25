"use strict";
class Calculator {
    add(a, b) {
        return a + b;
    }
    subtract(a, b) {
        return a - b;
    }
    multiply(a, b) {
        return a * b;
    }
    divide(a, b) {
        return a / b;
    }
    percent(a, b) {
        return (a * b) / 100;
    }
    calculate(operation, a, b) {
        switch (operation) {
            case 'add':
                return this.add(a, b);
            case 'subtract':
                return this.subtract(a, b);
            case 'multiply':
                return this.multiply(a, b);
            case 'divide':
                return this.divide(a, b);
            case 'percent':
                return this.percent(a, b);
            default:
                throw new Error("Invalid operation.");
        }
    }
}
const calculator = new Calculator();
console.log(calculator.calculate('add', 10, 5));
console.log(calculator.calculate('subtract', 10, 5));
console.log(calculator.calculate('multiply', 10, 5));
console.log(calculator.calculate('divide', 10, 5));
console.log(calculator.calculate('percent', 50, 10));
