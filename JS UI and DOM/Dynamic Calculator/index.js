class Calculator {
  constructor(containerId, keysConfig) {
    this.calculatorContainer = document.getElementById(containerId);
    this.keys = keysConfig;
    this.controller = new CalculatorController(this);
    this.assignClickHandlers();
    this.generateTable();
  }

  assignClickHandlers() {
    this._numberButtonsClickHandler = numberButtonsClickHandler.bind(this);
    this._operationButtonsClickHandler =
      operationButtonsClickHandler.bind(this);
    this._deleteButtonClickHandler = deleteButtonClickHandler.bind(this);
    this._clearAllClickHandler = clearAllClickHandler.bind(this);
    this._clearLastClickHandler = clearLastClickHandler.bind(this);
    this._equalsButtonClickHandler = equalsButtonClickHandler.bind(this);
    this._plusMinusButtonClickHandler = plusMinusButtonClickHandler.bind(this);
  }

  generateTable() {
    var tableElement = this.createElement(HTML_ELEMENTS.TABLE, ["table"]);

    var displayElement = this.createDisplayElement();
    tableElement.appendChild(displayElement);

    var calculatorKeyRows = this.createCalculatorKeyRows();
    calculatorKeyRows.forEach((row) => {
      tableElement.appendChild(row);
    });

    this.calculatorContainer.appendChild(tableElement);
  }

  createDisplayElement() {
    let trEl = this.createElement(HTML_ELEMENTS.TR, ["output"]);

    const colspan = this.keys[0].length;
    let tdEl = this.createTdElement({ colspan });

    this.screenRow1 = this.createElement(HTML_ELEMENTS.DIV, ["screenRow"]);
    this.screenRow2 = this.createElement(HTML_ELEMENTS.DIV, ["screenRow"]);

    tdEl.appendChild(this.screenRow1);
    tdEl.appendChild(this.screenRow2);

    trEl.appendChild(tdEl);

    return trEl;
  }

  createCalculatorKeyRows() {
    const rowElements = [];
    this.keys.forEach((rowKeys) => {
      let rowElement = this.createElement(HTML_ELEMENTS.TR);
      let keyElements = this.createCalculatorKeyRow(rowKeys);

      keyElements.forEach((key) => {
        rowElement.appendChild(key);
      });

      rowElements.push(rowElement);
    });

    return rowElements;
  }

  createCalculatorKeyRow(keysInRow) {
    let keyElements = [];
    keysInRow.forEach((key) => {
      let tdElement = this.createTdElement(key);
      let buttonElement = this.createElement(
        HTML_ELEMENTS.BUTTON,
        key.className,
        key.displayName,
        key.clickHandler
      );

      tdElement.appendChild(buttonElement);

      keyElements.push(tdElement);
    });
    return keyElements;
  }

  createElement(element, classNames, innerText, clickHandlerName) {
    let el = document.createElement(element);

    if (classNames) {
      classNames.forEach((className) => {
        el.classList.add(className);
      });
    }

    if (innerText) {
      el.innerText = innerText;
    }

    if (clickHandlerName) {
      el.addEventListener(EVENTS.CLICK, (event) => {
        this[`_${clickHandlerName}`](event);
      });
    }

    return el;
  }

  createTdElement({ colspan, rowspan }) {
    let tdElement = document.createElement(HTML_ELEMENTS.TD);

    if (colspan) {
      tdElement.setAttribute(HTML_ATTRIBUTES.COLSPAN, colspan);
    }

    if (rowspan) {
      tdElement.setAttribute(HTML_ATTRIBUTES.ROWSPAN, rowspan);
    }

    return tdElement;
  }

  updateDisplay() {
    const [previousOperandText, currentOperandText] =
      this.controller.getDisplayText();
    this.screenRow1.innerText = previousOperandText;
    this.screenRow2.innerText = currentOperandText;
  }
}

class CalculatorController {
  constructor(calculator) {
    this.calculator = calculator;
    this.clear();
  }

  clear() {
    this.previousOperand = "";
    this.currentOperand = "";
    this.operation = undefined;
  }

  clearAll() {
    this.previousOperand = "";
    this.currentOperand = "";
    this.operation = undefined;
    this.calculator.updateDisplay();
  }

  clearLast() {
    this.currentOperand = "";
    this.calculator.updateDisplay();
  }

  delete() {
    this.currentOperand = this.currentOperand.toString().slice(0, -1);
    this.calculator.updateDisplay();
  }

  appendNumber(number) {
    if (
      number === DECIMAL.POINT &&
      this.currentOperand.includes(DECIMAL.POINT)
    ) {
      return;
    }
    this.currentOperand = this.currentOperand.toString() + number.toString();
    this.calculator.updateDisplay();
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
    this.calculator.updateDisplay();
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
    this.calculator.updateDisplay();
  }

  reverse() {
    if (this.currentOperand !== "") {
      const reverseNum = parseFloat(this.currentOperand);
      this.currentOperand = -1 * reverseNum;
      this.calculator.updateDisplay();
    }
  }

  getDisplayText() {
    let currentOperandText = this.currentOperand;
    let previousOperandText = "";

    if (this.operation != null) {
      if (REVERSE_POSITION_OPERATIONS.indexOf(this.operation) > -1) {
        previousOperandText = `${this.operation} ${this.previousOperand}`;
      } else {
        previousOperandText = `${this.previousOperand} ${this.operation}`;
      }
    } else {
      previousOperandText = "";
    }

    return [previousOperandText, currentOperandText];
  }
}

const calculator1 = new Calculator("container-1", calculatorKeysConfig);
const calculator2 = new Calculator("container-2", calculatorKeysConfig);
const calculator3 = new Calculator("container-3", calculatorKeysConfig);
const calculator4 = new Calculator("container-4", calculatorKeysConfig);
