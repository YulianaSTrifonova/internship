// Comparing triangle sides

const inputArray = ["1", "-2", "3"];

const a = parseFloat(inputArray[0]);
const b = parseFloat(inputArray[1]);
const c = parseFloat(inputArray[2]);


const biggestSide = a > b && a > c ? 
                    "a" :   
                    (
                        a < b && b > c ?
                        "b" : 
                        "c"
                        )

console.log(biggestSide);
