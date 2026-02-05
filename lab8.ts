// Type Alias for Point -> Alias represents the nick name
type Point = {
  x: number;
  y: number;
};

function result(p: Point): void {
  console.log("Answer :");
  console.log("x =", p.x);
  console.log("y =", p.y);
}

let point1: Point = { x: 10, y: 20 };

result(point1);
// Answer :
// x = 10
// y = 20