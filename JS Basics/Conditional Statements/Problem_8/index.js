let inputNum = parseFloat(prompt("Enter a number between 0 and 999: "));
let answer = "";

let isValidNum = inputNum >= 0 && inputNum <= 999 && parseFloat(inputNum) === parseInt(inputNum);

if(isValidNum) {
    inputNum = parseInt(inputNum);

    const ones = ["One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"]
    const teens = ["Eleven", "Twelve", "Thirteen", "Fourteen", "Sixteen", "Seventeen", "Nineteen"];
    const tens = ["Ten", "Twenty", "Thirty", "Fourty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];

    const hundred = Math.floor(inputNum / 100);
    if(hundred > 0) {
        answer += ones[hundred - 1] + " Hundred ";
    }

    const ten = Math.floor((inputNum % 100) / 10);
    if(ten > 0) {
        answer += tens[ten - 1] + " ";
    }

    const one = Math.floor(inputNum % 10);
    if(one > 0) {
        answer += ones[one - 1];
    }

    console.log(answer);
} else {
    console.log("Invalid input");
}
