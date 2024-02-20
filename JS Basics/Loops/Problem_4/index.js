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


for(let i = 0; i < allProps.length; i++) {
    if(smallest > allProps[i]) {
        smallest = allProps[i];
    }
    if(allProps[i] > largest) {
        largest = allProps[i];
    }
}

console.log("largrest: " + largest + ", smallest: " + smallest);
