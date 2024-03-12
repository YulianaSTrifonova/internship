const BRACKETS = {
    OPEN: "(",
    CLOSE: ")"
}

const RESULT = {
    CORRECT: "Correct",
    INCORRECT: "Incorrect"
}

function correctBrackets(arr) {
    let bracketsArr = [];
    const str = arr.toString();

    for(let i = 0; i < str.length; i++) {
        if(str[i] === BRACKETS.OPEN) {
            bracketsArr.push(str[i]);
        } else if(str[i] === BRACKETS.CLOSE) {
            if(bracketsArr.length === 0) {
                return RESULT.INCORRECT;
            }
            bracketsArr.pop();
        }
    }
    return bracketsArr.length === 0 ? RESULT.CORRECT : RESULT.INCORRECT;
}

correctBrackets([')(a+b))']);
