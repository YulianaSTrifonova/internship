const inputArray = ["1", "-2", "3"];

const a = parseFloat(inputArray[0]);
const b = parseFloat(inputArray[1]);
const c = parseFloat(inputArray[2]);

let multiplicationSign;

if ( a == 0 || b == 0 || c == 0) {
    multiplicationSign = "0";
} else if ( (a > 0 && b > 0 && c > 0) || (a < 0 && b < 0 && c > 0) || (a < 0 && b > 0 && c < 0) || (a > 0 && b < 0 && c < 0)) {
    multiplicationSign = "+";
} else {
    multiplicationSign = "-";
}
