function reverseStr(str) {
    const reversedStr = str.split("").reverse().join("");
    return reversedStr;
}

const arr = ['sample'];
const test = arr[0];
reverseStr(test);
