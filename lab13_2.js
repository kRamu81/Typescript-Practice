var Student = /** @class */ (function () {
    function Student(name, rollNo) {
        this.name = name;
        this.rollNo = rollNo;
    }
    Student.prototype.showRollNo = function () {
        console.log("Roll Number:", this.rollNo);
    };
    return Student;
}());
var student2 = new Student("Ravi", 101);
console.log("Name:", student2.name);
student2.showRollNo();
