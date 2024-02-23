let allProps = [];
let smallest, largest;


for(var key in document) {
    allProps.push(key)
}

for(var key in window) {
    allProps.push(key)
}

for(var key in navigator) {
    allProps.push(key)
}

smallest = largest = allProps[0];

for(let i = 0; i < allProps.length; i++) {
    if(smallest.length > allProps[i].length) {
        smallest = allProps[i];
    }
    if(allProps[i].length > largest.length) {
        largest = allProps[i];
    }
}

console.log("largrest: " + largest + ", smallest: " + smallest);
