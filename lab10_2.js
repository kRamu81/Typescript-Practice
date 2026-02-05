//Task 2: Interface with Functions
// Object implementing Calculator
var calc = {
    add: function (a, b) {
        return a + b;
    },
    multiply: function (a, b) {
        return a * b;
    },
};
console.log("Addition:", calc.add(10, 5));
console.log("Multiplication:", calc.multiply(10, 5));
