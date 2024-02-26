function hexToDec(hex) {
    let result = 0; 
    let digitIndex = 0;
    let hexDigit = hex.split('').reverse().join('');
    for (let i = 0; i < hexDigit.length; i++) {
        digitIndex = "0123456789abcdef".indexOf(hexDigit[i]);
        result += digitIndex * Math.pow(16, i);
    }
    return result;
}

console.log(hexToDec("5fe"));
