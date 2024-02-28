function reverseString(str) {
    const strSplit = str.split("");
    const strReverse = strSplit.reverse();
    const strJoin = strReverse.join("");

    return strJoin;
}

const arr = ['qwertytrewq'];
const test = arr[0];
reverseString(test);
