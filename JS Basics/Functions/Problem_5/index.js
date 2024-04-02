const n = parseInt(prompt("Enter n:"));
let inputArr = [];
const inputNum = prompt("Enter an array of " + n + " integers:"). split(" ");

for(let j = 0; j < n; j++) {
    const num = parseInt(inputNum[j]);
    inputArr.push(num);
}

function ifLarger(arr, index) {
    return arr[index] > arr[index - 1] && arr[index] > arr[index + 1] ? true : false;
}

function largerThanNeighbors(arr) {
    let count = 0;
    for(let i = 0; i < arr.length; i++) {
        if(checkIfLarger(arr, i)){
            count++;
        }
    }
    return count;
}

const result = largerThanNeighbors(inputArr);
console.log(result);
