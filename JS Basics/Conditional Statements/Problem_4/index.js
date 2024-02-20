const inputArray = ["1", "2", "-3"];

const a = parseFloat(inputArray[0]);
const b = parseFloat(inputArray[1]);
const c = parseFloat(inputArray[2]);

let firstNum, secondNum, thirdNum;

if (a > b) {
    if (a > c) {
        firstNum = a;
        if(b > c) {
            secondNum = b;
            thirdNum = c;
        } else {
            secondNum = c;
            thirdNum = b;
        }
    } else {
       firstNum = c;
       secondNum = a;
       thirdNum = b;
    } 
} else {
    if (b > c) {
        firstNum = b;
        if (a > c) {
            secondNum = a;
            thirdNum = c;
        } else {
            secondNum = c;
            thirdNum = a;
        }
    } else {
        firstNum = c;
        secondNum = b;
        thirdNum = a;
    }
}

console.log(firstNum + " " + secondNum + " " + thirdNum);
