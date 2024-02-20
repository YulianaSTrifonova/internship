const inputArray = [7];

const n = parseFloat(inputArray[0]);

let numbers = "";

if (n <= 0) {
    console.log("Invalid input");
} else {
    for(let i = 1; i <= n; i++){
       numbers += i + " ";
    } console.log(numbers)
}
