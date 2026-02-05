class Student {
  public name: string;      
  private rollNo: number; 
  constructor(name: string, rollNo: number) {
    this.name = name;
    this.rollNo = rollNo;
  }
  showRollNo(): void {
    console.log("Roll Number:", this.rollNo);
  }
}
let student2 = new Student("Ravi", 101);
console.log("Name:", student2.name);
student2.showRollNo(); //Property 'rollNo' is private

// Name: Ravi
// Roll Number: 101

