function correctBrackets(str) {
    let bracketsArr = [];

    for(let i = 0; i < str.length; i++) {
        if(str[i] == '(') {
            bracketsArr.push(str[i]);
        } else if(str[i] == ')') {
            if(bracketsArr.length == 0) {
                return "Incorrect";
            }
            bracketsArr.pop();
        }
    }
    return bracketsArr.length == 0 ? "Correct" : "Incorrect";
}

const strArr = [ ')(a+b))'];
const sample = strArr.toString();
correctBrackets(sample);
