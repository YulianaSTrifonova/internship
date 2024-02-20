let allProps = [];
let smallest = allProps[0], largest = allProps[0];


for(var key in document) {
    allProps.push(key)
}

for(var key in window) {
    allProps.push(key)
}

for(var key in navigator) {
    allProps.push(key)
}


for(let i = 0; i < allProps.length; i++) {
    if(smallest > allProps[i]) {
        smallest = allProps[i];
    }
    if(allProps[i] > largest) {
        largest = allProps[i];
    }
    return smallest, largest;
}

console.log("largrest: " + largest + ", smallest: " + smallest);
