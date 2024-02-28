function stringFormat(str, ...args) {
    const regex = /{([0-9]+)}/g;
    str = str.replace(regex, function(match, index) {
        return typeof args[index] == 'undefined' ? match : args[index];
    });
    return str;
}

let frmt = '{0}, {1}, {0} text {2}';
let str = stringFormat(frmt, 1, 'Pesho', 'Gosho');
stringFormat(str);
