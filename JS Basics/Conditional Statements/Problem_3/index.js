const inputArray = ["1", "2", "-3"];

const a = parseFloat(inputArray[0]);
const b = parseFloat(inputArray[1]);
const c = parseFloat(inputArray[2]);

let biggestNum;

if(a > b) {
    if (a > c) {
        biggestNum = a;
    } else {
        biggestNum = c;
    }
} else {
    if (b > c) {
        biggestNum = b;
    } else {
        biggestNum = c;
    }
}

console.log(biggestNum);
