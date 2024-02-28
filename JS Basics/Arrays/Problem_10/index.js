const n = parseInt(prompt("N: "));

function primeNumbers(n) {
    let arr =[], result = [];
    for(let i = 1; i <= n; i++) {
        arr.push(i);
    } 
    
    arr[0] = false;

    for(let j = 2; j <= Math.sqrt(n); j++) {
        if(arr[j]) {
            for(let m = j * j; m <= n; m += j) {
                arr[m] = false;
            }
        }
    }

    for (let k = 2; k <= n; k++) {
        if(arr[k]){
            result.push(k);
        }
    }

    return result[result.length - 1];
}

const biggestNum = primeNumbers(n);
console.log("The biggest prime number between 1 and " + n + " is " + biggestNum + ".");
