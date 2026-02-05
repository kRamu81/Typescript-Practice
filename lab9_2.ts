function check(value: string | number): void {
  if (typeof value === "string") {
    console.log("Uppercase:", value.toUpperCase());
  } else {
    console.log("Rounded:", Math.round(value));
  }
}

check("Ramu");
check(20);

// Uppercase: RAMU
// Rounded: 20