function greetUser(name: string, title?: string): string {
  if (title) {
    return `Hello, ${title} ${name}!`;
  } else {
    return `Hello, ${name}!`;
  }
}

console.log(greetUser("Ramu"));
console.log(greetUser("Ravi", "Dr."));

//Hello, Ramu!
//Hello, Dr. Ravi!


//title?: string  -> represents optional parameter
