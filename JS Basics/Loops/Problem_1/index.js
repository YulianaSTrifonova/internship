function Numbers(inputArray) {
    let numbers = "";
    let result = "";
    let n = parseInt(inputArray[0]);
    if (n <= 0) {
        result = "Invalid input";
    } else {
        for(let i = 1; i <= n; i++){
           numbers += i + " ";
        } 
        result = numbers;
    }

    return result;
}

Numbers(["13"]);
