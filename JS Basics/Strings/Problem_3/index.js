function countOccurences(arr) {
  const regex = new RegExp(arr[0], "g");
  const matches = arr[1].match(regex);
  return matches ? matches.length : 0;
}

const textArr = [
  "in",
  "We are living in an yellow submarine. We don't have anything else. inside the submarine is very tight. So we are drinking all the day. We will move out of it in 5 days.",
];
countOccurences(textArr);
