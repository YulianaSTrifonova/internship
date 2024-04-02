const arr1 = ["a", "b", "c", "d"];
const arr2 = ["m", "n", "y", "j"];

const length = Math.min(arr1.length, arr2.length);

let result = "=";

for(let i = 0; i < length; i++) {
    if(arr1[i] > arr2[i]) {
        result = ">";
        break;
    } else if(arr2[i] > arr1[i]) {
       result = "<";
       break;
    } 
}

console.log(result);
