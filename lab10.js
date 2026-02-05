// Object of type User
var user1 = {
    id: 101,
    name: "Ramu",
    age: 20,
};
// Printing properties
console.log("User Details:");
console.log("ID:", user1.id);
console.log("Name:", user1.name);
console.log("Age:", user1.age);
// Trying to modify readonly property
// user1.id = 202; Error: Cannot assign to 'id' because it is a read-only property
