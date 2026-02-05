var Student = /** @class */ (function () {
    function Student(name, age) {
        this.name = name;
        this.age = age;
    }
    return Student;
}());
var student1 = new Student("Ramu", 20);
console.log("Student Details:");
console.log("Name:", student1.name);
console.log("Age:", student1.age);
