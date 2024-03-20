const BRACKETS = {
  OPEN: "(",
  CLOSE: ")",
};

const RESULT = {
  CORRECT: "Correct",
  INCORRECT: "Incorrect",
};

function correctBrackets(arr) {
  arr.forEach((element) => {
    const str = element.toString();
    let bracketsArr = [];
    for (let i = 0; i < str.length; i++) {
      if (str[i] === BRACKETS.OPEN) {
        bracketsArr.push(str[i]);
      } else if (str[i] === BRACKETS.CLOSE) {
        if (bracketsArr.length === 0) {
          console.log(RESULT.INCORRECT);
          return;
        }
        bracketsArr.pop();
      }
    }

    console.log(bracketsArr.length === 0 ? RESULT.CORRECT : RESULT.INCORRECT);
  });
}

correctBrackets([")(a+b))"]);
