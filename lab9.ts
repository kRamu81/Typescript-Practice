function move(direction: "up" | "down" | "left" | "right"): void {
  console.log("Moving", direction);
}

move("up");
move("left");
move("down");

// output: 
// Moving up
// Moving left
// Moving down