function printAllZeros() {
    return '0';
}

function printAllOnes() {
    return '1';
}

function markMainDiagonal(x, y) {
    return x === y ? '1' : '0'
}

function markSecondDiagonal(x, y, n) {
    return y === n - x - 1 ? '1' : '0'
}

function markBothDiagonals(x, y, n) {
    return (y === n - x - 1) || x === y ? '1' : '0'
}

function markTargetRowCol(x, y) {
    return x === this.targetRowCol || y === this.targetRowCol ? '1' : '0'
}

function baseMatrixOfNumbers(n, calcFn) {
    let result = "";
    if(n > 1 && n < 20) {
        let rows = [];
        for (let j = 0; j < n; j++) {
            let row = "";
            for(let i = 0; i < n; i++) {
                let numberToAdd = calcFn(i, j, n);
                row += ` ${numberToAdd}`;
            }
            rows.push(row);
        }

        for (let k = 0; k < rows.length; k++) {
            const delimeter = k != 0 && k != rows.length ? '\n' : '';
            result += `${delimeter}${rows[k]}`;
        }
        
    } else {
        result = "Invalid input";
    }
    return result;
}

function allZerosMatrix(n) {
    console.log(baseMatrixOfNumbers(n, printAllZeros));
}

function allOnesMatrix(n) {
    console.log(baseMatrixOfNumbers(n, printAllOnes));
}

function mainDiagMaskedMatrix(n) {
    console.log(baseMatrixOfNumbers(n, markMainDiagonal));
}

function secondDIagMaskedMatrix(n) {
    console.log(baseMatrixOfNumbers(n, markSecondDiagonal));
}

function markBothDiagMatrix(n) {
    console.log(baseMatrixOfNumbers(n, markBothDiagonals));
}

function makrRowCOlFromPrompt(n) {
    this.targetRowCol = parseInt(prompt());
    if(this.targetRowCol > n - 1) {
        return console.log("Invalid");
    }
    console.log(baseMatrixOfNumbers(n, markTargetRowCol.bind(this)));
}
