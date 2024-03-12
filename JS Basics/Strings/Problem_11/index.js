function stringFormat(str, ...args) {
  const regex = /{([0-9]+)}/g;
  let count = 0;
  str.split(" ").forEach((word) => {
    if (word.match(regex)) {
      count++;
    }
  });
  if (count < 30) {
    str = str.replace(regex, function (match, index) {
      return args[index];
    });
  } else {
    return "Too many placeholders.";
  }

  return str;
}

let frmt = "{0}, {1}, {0} text {2}";
let str = stringFormat(frmt, 1, "Pesho", "Gosho");
stringFormat(str);
