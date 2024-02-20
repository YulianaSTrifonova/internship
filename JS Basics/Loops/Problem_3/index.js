function matrixOfNumbers(n) {
    if(n > 1 && n < 20) {
        let matrix = [];
        for(let i = 0; i < n; i++) {
            matrix[i] = [];
            for(let j = 0; j < n; j++) {
                matrix[i][j] = 0;
            }
        }
        return matrix;
    } else {
        return("Invalid input");
    }
}

matrixOfNumbers(5);
