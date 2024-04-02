const n = prompt("Enter a number");
let arr = [];

for(let i = 0; i < n; i++) {
    randomNumber = parseInt(Math.random() * 10);
    arr.push(randomNumber);
}

function selectionSort(sortedArr) {
    for (let i = 0; i < sortedArr.length; i++) {
      let lower = i;
      for (let j = i + 1; j < sortedArr.length; j++) {
        if (sortedArr[j] < sortedArr[lower]) {
          lower = j;
        }
      }
      if (lower !== i) {
        [sortedArr[i], sortedArr[lower]] = [sortedArr[lower], sortedArr[i]]
      }
    } 
    return console.log(sortedArr);
  }

selectionSort(arr);
