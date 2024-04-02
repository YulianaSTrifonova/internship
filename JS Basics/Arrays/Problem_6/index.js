const n = prompt("Enter a number");
let arr = [];
let frequency = 0, num, repTimes = 0, repNum;

for(let i = 0; i < n; i++) {
    randomNumber = parseInt(Math.random() * 10);
    arr.push(randomNumber);
}

arr.sort();
for(let i = 0; i < n; i++) {
    if(arr[i] == arr[i + 1]) {
        frequency++;
    } else {
        frequency = 1;
    }

    if(frequency > repTimes) {
        repTimes = frequency;
        repNum = arr[i];
    }
}

console.log(arr);
console.log(repNum + " (" + repTimes + " times)");
