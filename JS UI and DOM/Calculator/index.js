const OPERATIONS = {
  ADDITION: "+",
  SUBSTRACTION: "-",
  MULTIPLICATION: "*",
  DIVISION: "/",
  SQRT: "√",
  MODULO: "%",
  INVERSE: "1/x",
  ROL: "RoL",
  ROR: "RoR",
  OR: "Or",
  XOR: "Xor",
  NOT: "Not",
  AND: "And",
};

const REVERSE_POSITION_OPERATIONS = [OPERATIONS.SQRT, OPERATIONS.NOT];

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

  compute() {
    let computation;
    const prev = parseFloat(this.previousOperand);
    const current = parseFloat(this.currentOperand);

    switch (this.operation) {
      case OPERATIONS.ADDITION:
        computation = prev + current;
        break;
      case OPERATIONS.SUBSTRACTION:
        computation = prev - current;
        break;
      case OPERATIONS.MULTIPLICATION:
        computation = prev * current;
        break;
      case OPERATIONS.DIVISION:
        computation = prev / current;
        break;
      case OPERATIONS.SQRT:
        computation = Math.sqrt(prev);
        break;
      case OPERATIONS.MODULO:
        computation = prev % current;
        break;
      case OPERATIONS.INVERSE:
        computation = 1 / prev;
        break;

      case OPERATIONS.AND:
        computation = prev & current;
        break;
      case OPERATIONS.NOT:
        computation = ~prev;
        break;
      case OPERATIONS.OR:
        computation = prev | current;
        break;
      case OPERATIONS.XOR:
        computation = prev ^ current;
        break;
      case OPERATIONS.ROL:
        computation = prev << 1;
        break;
      case OPERATIONS.ROR:
        computation = prev >> 1;
        break;
      default:
        return;
    }

    this.previousOperand = "";
    this.currentOperand = computation;
    this.operation = undefined;
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
      if (REVERSE_POSITION_OPERATIONS.indexOf(this.operation) > -1) {
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
