const firstNum = parseInt(prompt("Enter the first integer:"));
const secondNum = parseInt(prompt("Enter the second integer:"));
const thirdNum = parseInt(prompt("Enter the third integer:"));

function getMax(num1, num2) {
    return num1 > num2 ? num1 : num2;
}

const largestNum = getMax(getMax(firstNum, secondNum), thirdNum);
console.log("The largest integer is " + largestNum + ".")
