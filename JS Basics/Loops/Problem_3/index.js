function getNumberToAdd(x, y) {
    return x === y ? '1' : '0'
}

function matrixOfNumbers(n) {
    let result = '';
    if(n > 1 && n < 20) {
        debugger;
        let rows = [];
        for (let j = 0; j < n; j++) {
            let row = ''
            for(let i = 0; i < n; i++) {
                let numberToAdd = getNumberToAdd(i, j);
                row += ` ${numberToAdd}`;
            }
            rows.push(row);
        }

        for (let k = 0; k < rows.length; k++) {
            const delimeter = k == 0 && k == rows.length - 1 ? '' : '\n';
            result += `${delimeter}${rows[k]}`
        }

        
    } else {
        result = "Invalid input";
    }
    return result;
}

console.log(matrixOfNumbers(5));

// reversed diagonal
/*
function getNumberToAdd(x, y, n) {
    return y === n - x - 1 ? '1' : '0'
}

function matrixOfNumbers(n) {
    let result = '';
    if(n > 1 && n < 20) {
        let rows = [];
        for (let j = 0; j < n; j++) {
            let row = '';
            for(let i = 0; i < n; i++) {
                let numberToAdd = getNumberToAdd(i, j, n);
                row += ` ${numberToAdd}`;
            }
            rows.push(row);
        }

        for (let k = 0; k < rows.length; k++) {
            const delimeter = k ==0 && k == rows.length - 1 ? '' : '\n';
            result += `${delimeter}${rows[k]}`
        }

        
    } else {
        result = "Invalid input";
    }
    return result;
}

console.log(matrixOfNumbers(10));

*/

// both diagonals
/*
function getNumberToAdd(x, y, n) {
    return (y === n - x - 1) || x === y ? '1' : '0'
}

function matrixOfNumbers(n) {
    let result = '';
    if(n > 1 && n < 20) {
        let rows = [];
        for (let j = 0; j < n; j++) {
            let row = '';
            for(let i = 0; i < n; i++) {
                let numberToAdd = getNumberToAdd(i, j, n);
                row += ` ${numberToAdd}`;
            }
            rows.push(row);
        }

        for (let k = 0; k < rows.length; k++) {
            const delimeter = k ==0 && k == rows.length - 1 ? '' : '\n';
            result += `${delimeter}${rows[k]}`
        }

        
    } else {
        result = "Invalid input";
    }
    return result;
}

console.log(matrixOfNumbers(10));

*/

// print ones only on targeted row/col
/*
function getNumberToAdd(x, y, target) {
    return x === target || y === target ? "1" : "0"
}

function matrixOfNumbers(n) {
    let result = '';
    let targetRowCol = parseInt(prompt());
    if(targetRowCol > n - 1) {
        return "Invalid"
    }
    if(n > 1 && n < 20) {
        //debugger;
        let rows = [];
        for (let j = 0; j < n; j++) {
            let row = '';
            for(let i = 0; i < n; i++) {
                let numberToAdd = getNumberToAdd(i, j, targetRowCol);
                row += ` ${numberToAdd}`;
            }
            rows.push(row);
        }

        for (let k = 0; k < rows.length; k++) {
            const delimeter = k == 0 && k == rows.length - 1 ? '' : '\n';
            result += `${delimeter}${rows[k]}`
        }

        
    } else {
        result = "Invalid input";
    }
    return result;
}

console.log(matrixOfNumbers(9));
*/
