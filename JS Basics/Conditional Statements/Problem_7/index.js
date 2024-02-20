const inputArray = ["1", "2.11","-3.14","4","5.3"];

const a = parseFloat(inputArray[0]);
const b = parseFloat(inputArray[1]);
const c = parseFloat(inputArray[2]);
const d = parseFloat(inputArray[3]);
const f = parseFloat(inputArray[4]);

let biggestNum;

if(a > b) {
    if(a > c) {
        if (a > d) {
            if(a > f) {
                biggestNum = a;
            } else {
                biggestNum = f;
            }
        } else {
            if (d > f) {
                biggestNum = d;
            } else {
                biggestNum = f;
            }
        }
    } else {
        if(c > d) {
            if(c > f) {
                biggestNum = c;
            } else {
                biggestNum = f;
            }
        } 
    }
} else {
    if(b > c) {
        if(b > d) {
            if(b > f) {
                biggestNum = b;
            } else {
                biggestNum = f;
            }
        } else {
            if(d > f) {
                biggestNum = d;
            } else {
                biggestNum = f;
            }
        }
    } else {
        if(c > d) {
            if(c > f) {
                biggestNum = c;
            } else {
                biggestNum = f;
            }
        } else {
            if(d > f) {
                biggestNum = d;
            } else {
                biggestNum = f;
            }
        }
    }
}
console.log(biggestNum);
