function subsetSum(arr, n, S) {
    if(S == 0) {
        return true;
    }

    if(n == 0) {
        return false;
    }

    if(arr[n - 1] > S) {
        return subsetSum(arr, n - 1, S);
    }

    let incl = subsetSum(arr, n - 1, S);
    let excl = subsetSum(arr, n - 1, S - arr[n - 1]);

    return  incl || excl; 

}

const inputArray = [2, 1, 2, 4, 3, 5, 2, 6];
const S = 14;

let result = subsetSum(inputArray, inputArray.length, S) ? "yes" : "no";

console.log("input array: [" + inputArray + "]  S = " + S + " " + result);
