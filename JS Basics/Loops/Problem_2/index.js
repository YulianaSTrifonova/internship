let result;

function mmsa(arr) {
    const arrayMap = arr.map((x) => parseFloat(x));
    if(arrayMap.every(num => num >= -10000 && num <= 10000)) {
        let arraySum = 0;
        for (let i = 0; i < arrayMap.length; i++) {
            arraySum += arrayMap[i];
        }
        const min = parseFloat(Math.min(...arrayMap)).toFixed(2);
        const max = parseFloat(Math.max(...arrayMap)).toFixed(2);
        const sum = parseFloat(arraySum).toFixed(2);
        const avg = parseFloat(arraySum / arrayMap.length).toFixed(2);
            
        result = "min = " + min + "\nmax = " + max + "\nsum = " + sum + "\navg = " + avg; 
    } else {
        result = "Invalid input";
    }
    return result;
}

console.log(mmsa(["0.24", "1.2713", "2.1745", "3.14", "5.391"]));
