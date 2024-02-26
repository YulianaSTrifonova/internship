function calculateDistance(x1, y1, x2, y2) {
    return Math.sqrt((x2 - x1)**2 + (y2 - y1)**2)
}

function formTriangle(a, b, c) {
    return a < b + c && b < a + c && c < a + b ? "Triangle can be formed" : "Triangle can't be formed"; 
}

const inputData = [
    '7', '7', '2', '2',
    '5', '6', '2', '2',
    '95', '-14.5', '0', '-0.123'
  
  ];

/*
for(i = 0; i < 12; i++) {
    const input = parseFloat(prompt("Enter a coordinate: "));
    inputData.push(input);
}

*/

const length1 = (calculateDistance(parseFloat(inputData[0]), parseFloat(inputData[1]), parseFloat(inputData[2]), parseFloat(inputData[3]))).toFixed(2);
const length2 = (calculateDistance(parseFloat(inputData[4]), parseFloat(inputData[5]), parseFloat(inputData[6]), parseFloat(inputData[7]))).toFixed(2);
const length3 = (calculateDistance(parseFloat(inputData[8]), parseFloat(inputData[9]), parseFloat(inputData[10]), parseFloat(inputData[11]))).toFixed(2);

console.log("Length of Line 1: " + length1);
console.log("Length of Line 2: " + length2);
console.log("Length of Line 3: " + length3);

formTriangle(length1, length2, length3);
