const n = parseInt(prompt("Enter n:"));
let inputArr = [];
const inputNum = prompt("Enter an array of " + n + " integers:"). split(" ");

for(let j = 0; j < n; j++) {
    const num = parseInt(inputNum[j]);
    inputArr.push(num);
}

function firstLarger(arr) {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] > arr[i - 1] && arr[i] > arr[i + 1]) {
            return i;
        } 
    }
    return "-1"
}

const result = firstLarger(inputArr);
console.log("index = " + result);
