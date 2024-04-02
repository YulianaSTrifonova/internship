import { calculatorKeys } from './calculatorKeys';
import {
  Operations,
  Decimal,
  HTML_Attributes,
  HTML_Elements,
  Events,
  Reverse_Position_Operations,
} from "./enums";
import {
  clearAllClickHandler,
  clearLastClickHandler,
  deleteButtonClickHandler,
  equalsButtonClickHandler,
  numberButtonsClickHandler,
  operationButtonsClickHandler,
  plusMinusButtonClickHandler,
} from "./clickHandlers";

class Calculator {
  calculatorContainer: HTMLElement;
  keys: any[];
  controller: CalculatorController;
  screenRow1: HTMLElement;
  screenRow2: HTMLElement;
  _numberButtonsClickHandler: any;
  _operationButtonsClickHandler: any;
  _deleteButtonClickHandler: any;
  _clearAllClickHandler: any;
  _clearLastClickHandler: any;
  _equalsButtonClickHandler: any;
  _plusMinusButtonClickHandler: any;

  constructor(containerId: string, keysConfig: any[]) {
    this.calculatorContainer = document.getElementById(
      containerId
    ) as HTMLElement;
    this.keys = keysConfig;
    this.controller = new CalculatorController(this);
    this.assignClickHandlers();
    this.generateTable();
  }

  assignClickHandlers(): void {
    this._numberButtonsClickHandler = numberButtonsClickHandler.bind(this);
    this._operationButtonsClickHandler =
      operationButtonsClickHandler.bind(this);
    this._deleteButtonClickHandler = deleteButtonClickHandler.bind(this);
    this._clearAllClickHandler = clearAllClickHandler.bind(this);
    this._clearLastClickHandler = clearLastClickHandler.bind(this);
    this._equalsButtonClickHandler = equalsButtonClickHandler.bind(this);
    this._plusMinusButtonClickHandler = plusMinusButtonClickHandler.bind(this);
  }

  generateTable(): void {
    var tableElement: HTMLElement = this.createElement(HTML_Elements.TABLE, [
      "table",
    ]);

    var displayElement: HTMLElement = this.createDisplayElement();
    tableElement.appendChild(displayElement);

    var calculatorKeyRows: HTMLElement[] = this.createCalculatorKeyRows();
    calculatorKeyRows.forEach((row: HTMLElement) => {
      tableElement.appendChild(row);
    });

    this.calculatorContainer.appendChild(tableElement);
  }

  createDisplayElement(): HTMLElement {
    let trEl: HTMLElement = this.createElement(HTML_Elements.TR, ["output"]);

    const colspan = this.keys[0].length;
    let tdEl: HTMLElement = this.createTdElement({ colspan });

    this.screenRow1 = this.createElement(HTML_Elements.DIV, ["screenRow"]);
    this.screenRow2 = this.createElement(HTML_Elements.DIV, ["screenRow"]);

    tdEl.appendChild(this.screenRow1);
    tdEl.appendChild(this.screenRow2);

    trEl.appendChild(tdEl);

    return trEl;
  }

  createCalculatorKeyRows(): HTMLElement[] {
    const rowElements: HTMLElement[] = [];
    this.keys.forEach((rowKeys) => {
      let rowElement: HTMLElement = this.createElement(HTML_Elements.TR);
      let keyElements: HTMLElement[] = this.createCalculatorKeyRow(rowKeys);

      keyElements.forEach((key) => {
        rowElement.appendChild(key);
      });

      rowElements.push(rowElement);
    });

    return rowElements;
  }

  createCalculatorKeyRow(keysInRow: any[]): HTMLElement[] {
    let keyElements: HTMLElement[] = [];
    keysInRow.forEach((key) => {
      let tdElement: HTMLElement = this.createTdElement(key);
      let buttonElement: HTMLElement = this.createElement(
        HTML_Elements.BUTTON,
        key.className,
        key.displayName,
        key.clickHandler
      );

      tdElement.appendChild(buttonElement);

      keyElements.push(tdElement);
    });
    return keyElements;
  }

  createElement(
    element: string,
    classNames?: string[],
    innerText?: string,
    clickHandlerName?: string
  ): HTMLElement {
    const el: HTMLElement = document.createElement(element);

    if (classNames) {
      classNames.forEach((className: string) => {
        el.classList.add(className);
      });
    }

    if (innerText) {
      el.innerText = innerText;
    }

    if (clickHandlerName) {
      el.addEventListener(Events.CLICK, (event: Event) => {
        this[`_${clickHandlerName}`](event);
      });
    }

    return el;
  }

  createTdElement({
    colspan,
    rowspan,
  }: {
    colspan?: number;
    rowspan?: number;
  }) {
    let tdElement: HTMLElement = document.createElement(HTML_Elements.TD);

    if (colspan) {
      tdElement.setAttribute(HTML_Attributes.COLSPAN, colspan.toString());
    }

    if (rowspan) {
      tdElement.setAttribute(HTML_Attributes.ROWSPAN, rowspan.toString());
    }

    return tdElement;
  }

  updateDisplay(): void {
    const [previousOperandText, currentOperandText]: string[] =
      this.controller.getDisplayText();
    this.screenRow1.innerText = previousOperandText;
    this.screenRow2.innerText = currentOperandText;
  }
}

class CalculatorController {
  calculator: any;
  operation: any;
  previousOperand: string;
  currentOperand: string;

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
      number === Decimal.POINT &&
      this.currentOperand.includes(Decimal.POINT)
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
      case Operations.ADDITION:
        computation = prev + current;
        break;
      case Operations.SUBSTRACTION:
        computation = prev - current;
        break;
      case Operations.MULTIPLICATION:
        computation = prev * current;
        break;
      case Operations.DIVISION:
        computation = prev / current;
        break;
      case Operations.SQRT:
        computation = Math.sqrt(prev);
        break;
      case Operations.MODULO:
        computation = prev % current;
        break;
      case Operations.INVERSE:
        computation = 1 / prev;
        break;

      case Operations.AND:
        computation = prev & current;
        break;
      case Operations.NOT:
        computation = ~prev;
        break;
      case Operations.OR:
        computation = prev | current;
        break;
      case Operations.XOR:
        computation = prev ^ current;
        break;
      case Operations.ROL:
        computation = prev << 1;
        break;
      case Operations.ROR:
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
      this.currentOperand = (-1 * reverseNum).toString();
      this.calculator.updateDisplay();
    }
  }

  getDisplayText() {
    let currentOperandText = this.currentOperand;
    let previousOperandText = "";

    if (this.operation != null) {
      if (Reverse_Position_Operations.indexOf(this.operation) > -1) {
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

const calculator1 = new Calculator("container-1", calculatorKeys);
const calculator2 = new Calculator("container-2", calculatorKeys);
const calculator3 = new Calculator("container-3", calculatorKeys);
const calculator4 = new Calculator("container-4", calculatorKeys);
