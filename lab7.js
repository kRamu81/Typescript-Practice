function greetUser(name, title) {
    if (title) {
        return "Hello, ".concat(title, " ").concat(name, "!");
    }
    else {
        return "Hello, ".concat(name, "!");
    }
}
console.log(greetUser("Ramu"));
console.log(greetUser("Ravi", "Dr."));
//Hello, Ramu!
//Hello, Dr. Ravi!
//title?: string  -> represents optional parameter
