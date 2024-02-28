function countOccurences(str) {
    return count = [...(str.match(/in/g))].length;;
}

const textArr = ['We are living in an yellow submarine. We don\'t have anything else. inside the submarine is very tight. So we are drinking all the day. We will move out of it in 5 days.'];
const text = textArr.toString();
countOccurences(text);
