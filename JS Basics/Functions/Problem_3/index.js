const inputNum = parseInt(prompt("Enter an integer:"));

function englishDigit(num) {
    const digits = {
        0: "Zero",
        1: "One",
        2: "Two",
        3: "Three",
        4: "Four",
        5: "Five",
        6: "Six",
        7: "Seven",
        8: "Eight",
        9: "Nine"
    }

    const lastDigit = num % 10;
    return digits[lastDigit];
}

englishDigit(inputNum);
