function correctBrackets(arr) {
    let bracketsArr = [];
    const str = arr.toString();

    for(let i = 0; i < str.length; i++) {
        if(str[i] === '(') {
            bracketsArr.push(str[i]);
        } else if(str[i] === ')') {
            if(bracketsArr.length === 0) {
                return "Incorrect";
            }
            bracketsArr.pop();
        }
    }
    return bracketsArr.length === 0 ? "Correct" : "Incorrect";
}

correctBrackets([')(a+b))']);
