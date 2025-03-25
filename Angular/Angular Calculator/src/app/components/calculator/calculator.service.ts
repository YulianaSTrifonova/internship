import { Injectable } from '@angular/core';
import { Decimal, Numbers, Operations } from '../../constants/enums';

@Injectable({
  providedIn: 'root',
})
export class CalculatorService {
  previousOperand = '';
  currentOperand = '';
  operation = '';

  handleClearAllClick() {
    this.currentOperand = '';
    this.previousOperand = '';
    this.operation = '';
  }

  handleClearLastClick() {
    this.currentOperand = '';
  }

  handleDeleteClick() {
    this.currentOperand = this.currentOperand.slice(0, -1);
  }

  handleNumberClick(number: string) {
    if (
      number === Decimal.POINT &&
      this.currentOperand.includes(Decimal.POINT)
    ) {
      return;
    }
    this.currentOperand += number;
  }

  handleOperationClick(op: string) {
    if (this.currentOperand === '') {
      return;
    } else if (this.previousOperand !== '') {
      this.compute();
    }
    this.operation = op;
    this.previousOperand = this.currentOperand;
    this.currentOperand = '';
  }

  handleEqualsClick() {
    if (this.previousOperand !== '') {
      this.compute();
    }
  }

  handlePlusMinusClick() {
    if (this.currentOperand === '') {
      return;
    }
    this.currentOperand = (-1 * parseFloat(this.currentOperand)).toString();
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

    this.previousOperand = '';
    this.currentOperand = computation.toString();
    this.operation = '';
  }

  handleKeyClick(pressedKey: any) {
    if (Object.values(Operations).includes(pressedKey)) {
      switch (pressedKey) {
        case Operations.CLEARALL:
          this.handleClearAllClick();
          break;
        case Operations.CLEARLAST:
          this.handleClearLastClick();
          break;
        case Operations.PLUSMINUS:
          this.handlePlusMinusClick();
          break;
        case Operations.DELETE:
          this.handleDeleteClick();
          break;
        case Operations.EQUALS:
          this.handleEqualsClick();
          break;
        default:
          this.handleOperationClick(pressedKey);
          break;
      }
    } else if (Object.values(Numbers).includes(pressedKey)) {
      this.handleNumberClick(pressedKey);
    }
  }
}
