const n = prompt("Enter a number");
let arr = [];
let currentSequence = 1;
let longestSequence = 1;

for(let i = 0; i < n; i++) {
    randomNumber = parseInt(Math.random() * 10);
    arr.push(randomNumber);
}

for (let j = 0; j < arr.length; j++) {
    if (arr[j] < arr[j + 1] && arr[j] != arr[j + 1]) {
        currentSequence++;
    } else {
        if (longestSequence < currentSequence) {
            longestSequence = currentSequence;
        }
        currentSequence = 1;
    }
}

console.log(arr);
console.log('The lenght of the maximal seqence is ' + longestSequence + ".");
