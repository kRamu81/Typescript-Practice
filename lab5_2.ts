/* Lab5 task2: Arrow Functions & function type annotations*/

type operator = (a: number, b: number) => number;

// 2. Arrow function
const add: operator = (a, b) => {
    return a + b;
}
const sub: operator = (a, b) => {
    return a - b;
}

console.log("Addition :", add(1, 3));      // Output: Addition : 4
console.log("Subtraction :", sub(5, 1));   // Output: Subtraction : 4
