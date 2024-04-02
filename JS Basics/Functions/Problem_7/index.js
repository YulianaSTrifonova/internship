const n = parseInt(prompt("Enter n:"));
let inputArr = [];

const inputNum = prompt("Enter an array of " + n + " integers:").split(" ");

for(let j = 0; j < n; j++) {
    const num = parseInt(inputNum[j]);
    inputArr.push(num);
}

const order = prompt("Asc or desc?");

function maxElement(arr, index, portion) {
    let maxEl = arr[index];

    for(let i = index; i < index + portion; i++) {
        if(arr[i] > maxEl) {
            maxEl = arr[i];
        }
    }
    return maxEl;
}

// Merge Sort
function sort(left, right) {
    let sortedArr = [];

    while(left.length && right.length) {
        if (maxElement(left, 0, left.length) > maxElement(right, 0, right.length)) {
            sortedArr.push(left.shift());
        } else {
            sortedArr.push(right.shift());
        }
    }

    return [...sortedArr, ...left, ...right];
}

function mergeSort(arr) {
    if(arr.length <= 1) {
        return arr;
    }

    let mid = Math.floor(arr.length / 2);

    let left = sortArr(arr.slice(0,mid));
    let right = sortArr(arr.slice(mid));

    return sort(left, right);
}

// Three arrays
/*
function sortArr(arr) {
    let arrCopy = [...arr];
    let sortedArr = [];
    while(arrCopy.length > 0) {
        const max = maxElement(arrCopy, 0, arrCopy.length);
        sortedArr.push(max);
        const maxIndex = arrCopy.indexOf(max);
        arrCopy.splice(maxIndex, 1)
    }

    if(order == "asc") {
        arr.reverse();
    }

    return sortedArr;
}
*/

if(order == "asc" || order == "desc") {
    const mergeSortArr = mergeSort(inputArr);
    if(order == "asc") {
        mergeSortArr.reverse();
    }
    console.log(mergeSortArr.join(" "));
} else {
    console.log("Invalid order");
}

// function sortArr(arr, order) {
//     for(let k = 0; k < arr.length; k++) {
//         const maxElIndex = arr.indexOf(maxElement(arr, k));

//         [arr[k], arr[maxElIndex]] = [arr[maxElIndex], arr[k]];
//     }

//     if(order == "asc") {
//         arr.reverse();
//     }

//     return arr;
// }
