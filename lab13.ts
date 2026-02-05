
class Student {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

let student1 = new Student("Ramu", 20);
console.log("Student Details:");
console.log("Name:", student1.name);
console.log("Age:", student1.age);

// Student Details:
// Name: Ramu
// Age: 20