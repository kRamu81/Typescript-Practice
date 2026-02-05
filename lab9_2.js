function check(value) {
    if (typeof value === "string") {
        console.log("Uppercase:", value.toUpperCase());
    }
    else {
        console.log("Rounded:", Math.round(value));
    }
}
check("Ramu");
check(20);
