const inputArray = ["1", "-2", "3"];

const a = parseFloat(inputArray[0]);
const b = parseFloat(inputArray[1]);
const c = parseFloat(inputArray[2]);

const product = a*b*c;

if(product > 0) {
    console.log("+");
} else if(product < 0) {
    console.log("-");
} else {
    console.log("0");
}

/*
const sign = product > 0 ? 
                '+' : 
                (
                    product < 0 ?
                        '-' :
                        '0' 
                );

console.log(sign);
*/
