const inputNum = prompt("Enter a digit: ");
const digit = parseInt(inputNum);

let digitAsWord;

switch (digit) {
    case 0: 
        digitAsWord = "Zero";
        break;
    case 1: 
        digitAsWord = "One";
        break; 
    case 2: 
        digitAsWord = "Two";
        break;
    case 3: 
        digitAsWord = "Three";
        break;
    case 4: 
        digitAsWord = "Four";
        break; 
    case 5: 
        digitAsWord = "Five";
        break;
    case 6: 
        digitAsWord = "Six";
        break;
    case 7: 
        digitAsWord = "Seven";
        break; 
    case 8: 
        digitAsWord = "Eight";
        break;
    case 9: 
        digitAsWord = "Nine";
        break;
    default:
        console.log("Not a digit.");
}

console.log(digitAsWord);
