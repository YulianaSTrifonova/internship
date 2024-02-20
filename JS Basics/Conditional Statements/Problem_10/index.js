const inputArray = ["1", "2", "4"];

const a = parseFloat(inputArray[0]);
const b = parseFloat(inputArray[1]);
const c = parseFloat(inputArray[2]);

const multiplication = a > 0 ? 
                        b * c : 
                        (
                            a < 0 ?
                            a * b : 
                            a * b * c
                            )

console.log(multiplication);
