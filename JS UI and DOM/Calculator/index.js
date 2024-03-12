class Calculator {
  constructor(previousOperandTextElement, currentOperandTextElement) {
    this.previousOperandTextElement = previousOperandTextElement;
    this.currentOperandTextElement = currentOperandTextElement;
    this.clear();
  }

  clear() {
    this.currentOperand = "";
    this.previousOperand = "";
    this.operation = undefined;
  }

  clearLast() {
    this.currentOperand = "";
  }

  delete() {
    this.currentOperand = this.currentOperand.toString().slice(0, -1);
  }

  appendNumber(number) {
    if (number === "." && this.currentOperand.includes(".")) {
      return;
    }
    this.currentOperand = this.currentOperand.toString() + number.toString();
  }

  chooseOperation(operation) {
    if (this.currentOperand === "") {
      return;
    }

    if (this.previousOperand !== "") {
      this.compute();
    }

    this.operation = operation;
    this.previousOperand = this.currentOperand;
    this.currentOperand = "";
  }

  /*
  handleBrackets(bracket) {
    if( bracket === ")" && computation.includes("(")) {
      computation += bracket;
    } else if(bracket === "(" || !computation.includes("(")) {
      computation += bracket;
    }
  }
  */

  compute() {
    let computation;
    const prev = parseFloat(this.previousOperand);
    const current = parseFloat(this.currentOperand);

    switch (this.operation) {
      case "+":
        computation = prev + current;
        break;
      case "-":
        computation = prev - current;
        break;
      case "*":
        computation = prev * current;
        break;
      case "/":
        computation = prev / current;
        break;
      case "√":
        computation = Math.sqrt(prev);
        break;
      case "%":
        computation = prev % current;
        break;
      case "1/x":
        computation = 1 / prev;
        break;

      case "(":
      //handleBrackets("(");
      // break;
      case ")":
      //handleBrackets(")");
      // break;

      case "And":
        computation = prev & current;
        break;
      case "Not":
        computation = ~prev;
        break;
      case "Or":
        computation = prev | current;
        break;
      case "Xor":
        computation = prev ^ current;
        break;
      case "RoL":
        computation = prev << 1;
        break;
      case "RoR":
        computation = prev >> 1;
        break;
      default:
        return;
    }

    this.previousOperand = "";
    this.currentOperand = computation;
    this.operation = undefined;
    /*
    if(this.operation === "(") {
      `( ${ this.previousOperand}`;
    } else if(this.operation === ")") {
      `${this.currentOperand} )`;
    }
    */
  }

  reverse() {
    if (this.currentOperand !== "") {
      const reverseNum = parseFloat(this.currentOperand);
      this.currentOperand = -1 * reverseNum;
    }
  }

  updateDisplay() {
    this.currentOperandTextElement.innerText = this.currentOperand;
    if (this.operation != null) {
      if (this.operation === "√" || this.operation === "Not") {
        this.previousOperandTextElement.innerText = `${this.operation} ${this.previousOperand}`;
      } else {
        this.previousOperandTextElement.innerText = `${this.previousOperand} ${this.operation}`;
      }
    } else {
      this.previousOperandTextElement.innerText = "";
    }
  }
}

const numberButtons = document.querySelectorAll("[data-number]");
const operationButtons = document.querySelectorAll("[data-operation]");
//const bracketButtons = document.querySelectorAll("[data-bracket]");
const equalsButton = document.querySelector("[data-equals]");
const clearButton = document.querySelector("[data-clear]");
const clearLastInputButton = document.querySelector("[data-clear-last]");
const deleteButton = document.querySelector("[data-delete]");
const plusMinusButton = document.querySelector("[data-plus-minus]");
const previousOperandTextElement = document.querySelector(
  "[data-previous-operand]"
);
const currentOperandTextElement = document.querySelector(
  "[data-current-operand]"
);

const calculator = new Calculator(
  previousOperandTextElement,
  currentOperandTextElement
);

numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    calculator.appendNumber(button.innerText);
    calculator.updateDisplay();
  });
});

operationButtons.forEach((button) => {
  button.addEventListener("click", () => {
    calculator.chooseOperation(button.innerText);
    calculator.updateDisplay();
  });
});

equalsButton.addEventListener("click", () => {
  calculator.compute();
  calculator.updateDisplay();
});

clearButton.addEventListener("click", () => {
  calculator.clear();
  calculator.updateDisplay();
});

clearLastInputButton.addEventListener("click", () => {
  calculator.clearLast();
  calculator.updateDisplay();
});

deleteButton.addEventListener("click", () => {
  calculator.delete();
  calculator.updateDisplay();
});

plusMinusButton.addEventListener("click", () => {
  calculator.reverse();
  calculator.updateDisplay();
});

/*
bracketButtons.forEach((button) => {
  button.addEventListener("click", () => {
    calculator.handleBrackets(button.innerText);
    calculator.updateDisplay();
  });
});
*/
