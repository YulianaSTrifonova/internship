const n = prompt("Enter a number");
let arr = [];
for(let i = 1; i <= n; i++) {
    number = i;
    arr.push(number);
}

function permutation(arr) {
    let resultArr = [];
    
    if(arr.length === 0) {
        return []
    } 

    if(arr.length === 1) {
        return [arr]
    }
    
    for(let i = 0; i < arr.length; i++) {
        const currentNum = arr[i];
        
        const remainingNums = arr.slice(0,i).concat(arr.slice(i+1));
        const remainingNumsPermuted = permutation(remainingNums);
        
        for(let j = 0; j < remainingNumsPermuted.length; j++) {
        const finalPermutation = [currentNum].concat(remainingNumsPermuted[j]);
        resultArr.push(finalPermutation);
        }
    }
    
    return resultArr;
}

const permutedArr = permutation(arr);
console.log(permutedArr);
