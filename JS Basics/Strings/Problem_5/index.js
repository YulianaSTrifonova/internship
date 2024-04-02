function replaceWhitespace(str) {
    const modifiedStr = str.replace(/ /g, '&nbsp;')
    return modifiedStr;
}

const strArr = ['This text contains 4 spaces!!'];
const text = strArr.toString();
replaceWhitespace(text);
