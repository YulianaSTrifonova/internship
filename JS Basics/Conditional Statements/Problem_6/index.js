let a = parseFloat(prompt("a = "));
let b = parseFloat(prompt("b = "));
let c = parseFloat(prompt("c = "));

let discriminant = (b * b) - (4 * a * c);
console.log(discriminant);
let x1, x2;

if (discriminant == 0) {
    x1 = x2 = -b / (2 * a);
    console.log(x1);
    console.log("x1 = x2 = " + x1);

} else if (discriminant > 0) {
    x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    x2 = (-b - Math.sqrt(discriminant)) / (2 * a);

    if (x1 > x2) {
        let x;
        x = x1;
        x1 = x2;
        x2 = x;
    }

    console.log("x1 = " + x1 + ", x2 = " + x2);
    console.log(x1 + " < " + x2);

} else {
    console.log("The quadratic equation has no real roots.")
}
