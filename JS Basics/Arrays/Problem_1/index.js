const n = prompt("Enter a number");
let randomNumber = 0;
let integerArray = [];

for(let i = 0; i < n; i++) {
    randomNumber = parseInt(Math.random() * 10);
    integerArray.push(randomNumber);
}

integerArray.forEach((element) => console.log(element * 5));
