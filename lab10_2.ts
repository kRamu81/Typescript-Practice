//Task 2: Interface with Functions

// Interface Calculator
interface Calculator {
  add(a: number, b: number): number;
  multiply(a: number, b: number): number;
}

// Object implementing Calculator
let calc: Calculator = {
  add(a, b) {
    return a + b;
  },

  multiply(a, b) {
    return a * b;
  },
};

console.log("Addition:", calc.add(10, 5));
console.log("Multiplication:", calc.multiply(10, 5));

//output:
// Addition: 15
// Multiplication: 50