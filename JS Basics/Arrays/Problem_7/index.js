const n = prompt("Array length:");
let arr = [];

if(n > 0) {
    for(let i = 0; i < n; i++) {
        let randomNumber = parseInt(Math.random() * 10);
        arr.push(randomNumber);
    }
} else {
    console.log("Invalid input");
}

let sortedArr = arr.sort();
console.log(sortedArr);
const x = parseInt(prompt("x:"));

function binarySearch(sortedArr, x) {

    let start = 0;
    let end = sortedArr.length - 1;

    while(start <= end) {
        let mid = Math.floor((start + end) / 2);

        if(sortedArr[mid] === x) {
            return "index = " + mid;
        } else if(sortedArr[mid] < x) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }

    return -1;
}

console.log(binarySearch(sortedArr, x));
