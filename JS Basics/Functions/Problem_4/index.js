const n = parseInt(prompt("Enter n:"));
let inputArr = [];
const inputNum = prompt("Enter an array of " + n + " integers:"). split(" ");

for(let j = 0; j < n; j++) {
    const num = parseInt(inputNum[j]);
    inputArr.push(num);
}

const x = parseInt(prompt("Enter x:"));

function appearenceCount(arr, x) {
    let count = 0;
    
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === x) {
            count++;
        }
    }
    return "x = " + x +  " appears " + count + " time(s) in the array";
}

appearenceCount(inputArr, x);
