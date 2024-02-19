const inputArray = ["3.14", "2.71"];

let a = parseFloat(inputArray[0]);
let b = parseFloat(inputArray[1]);

if (a > b) {
    let c;
    c = a;
    a = b;
    b = c;
    console.log(a + " " + b);
} else {
    console.log("The second variable is greater than the first.");
}
