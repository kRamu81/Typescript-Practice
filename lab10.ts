//Task 1: Interface Basics & Optional / Readonly Properties
// Interface User
interface User {
  readonly id: number;
  name: string;
  age?: number; // Optional property 
}

// creating the object for user
let user1: User = {
  id: 101,
  name: "Ramu",
  age: 20,
};

// print :-
console.log("User Details:");
console.log("ID:", user1.id);
console.log("Name:", user1.name);
console.log("Age:", user1.age);

// output : User Details:
// ID: 101
// Name: Ramu
// Age: 20
