function findSum(arr, S) {
    let start = 0, currentS = 0; 
    let result = "";

    for(let end = 0; end <= arr.length; end++) {
        currentS += arr[end];

        while(currentS > S) {
            currentS -= arr[start];
            start++;
        }

        if(currentS === S) {
            result = arr.slice(start, end + 1);
            break;
        }

        result = "Such sum is not present."

    }
    return result;
}

const inputArray = [4, 3, 1, 4, 2, 5, 8];
const S = 11;
console.log("array = [" + inputArray + "], S =  " + S + ", result =  [" + findSum(inputArray, S) + "]");
