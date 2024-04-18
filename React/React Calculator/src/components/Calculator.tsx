import { useState } from "react";
import Keys from "./Keys";
import Display from "./Display";
import { Decimal, Operations } from "../enums";

export default function Calculator() {
  const [previousOperand, setPreviousOperand] = useState("");
  const [currentOperand, setCurrentOperand] = useState("");
  const [operation, setOperation] = useState("");

  const handleClearAllClick = () => {
    setCurrentOperand("");
    setPreviousOperand("");
    setOperation("");
  };

  const handleClearLastClick = () => {
    setCurrentOperand("");
  };

  const handleDeleteClick = () => {
    setCurrentOperand((prevOperand) => prevOperand.slice(0, -1));
  };

  const handleNumberClick = (number: string) => {
    if (number === Decimal.POINT && currentOperand.includes(Decimal.POINT)) {
      return;
    }
    setCurrentOperand((prevOperand) => prevOperand + number);
  };

  const handleOperationClick = (op: string) => {
    if (currentOperand === "") {
      return;
    } else if (previousOperand !== "") {
      compute();
    } else {
      setOperation(op);
      setPreviousOperand(currentOperand);
      setCurrentOperand("");
    }
  };

  const handleEqualsClick = () => {
    if (previousOperand !== "") {
      compute();
    }
  };

  const handlePlusMinusClick = () => {
    if (currentOperand === "") {
      return;
    }
    setCurrentOperand((prevOperand) =>
      (-1 * parseFloat(prevOperand)).toString()
    );
  };

  const compute = () => {
    let computation;
    const prev = parseFloat(previousOperand);
    const current = parseFloat(currentOperand);

    switch (operation) {
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

    setPreviousOperand("");
    setCurrentOperand(computation.toString());
    setOperation("");
  };

  return (
    <div className="calculator">
      <Display
        previousOperand={previousOperand}
        currentOperand={currentOperand}
        operation={operation}
      />
      <Keys
        onNumberClick={handleNumberClick}
        onOperationClick={handleOperationClick}
        onDeleteClick={handleDeleteClick}
        onClearAllClick={handleClearAllClick}
        onClearLastClick={handleClearLastClick}
        onPlusMinusClick={handlePlusMinusClick}
        onEqualsClick={handleEqualsClick}
      />
    </div>
  );
}
