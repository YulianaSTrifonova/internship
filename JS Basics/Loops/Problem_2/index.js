function mmsa(n) {
    if(n >= 1 && n <= 1000) {
        const inputArray = []; 
        for(let i = 1; i <= n; i++) {
            const randomNum = parseFloat(Math.random() * 10).toFixed(2);
            inputArray.push(randomNum);
        }
        console.log(inputArray);
        const arrayMap = inputArray.map((x) => parseFloat(x));
        if(arrayMap.every(num => num >= -10000 && num <= 10000)) {
            let arraySum = 0;
            for (let i = 0; i < arrayMap.length; i++) {
                arraySum += arrayMap[i];
            }
            const min = parseFloat(Math.min(...arrayMap)).toFixed(2);
            const max = parseFloat(Math.max(...arrayMap)).toFixed(2);
            const sum = parseFloat(arraySum).toFixed(2);
            const avg = parseFloat(arraySum / arrayMap.length).toFixed(2);
            
            return "min = " + min + "\nmax = " + max + "\nsum = " + sum + "\navg = " + avg; 
        } else {
            console.log("Invalid Array");
        }
    } else {
        console.log("Invalid n");
    }
    
}

console.log(mmsa(4));
