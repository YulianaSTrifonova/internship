import { useState } from "react";
import Keys from "./Keys";
import Display from "./Display";
import { Decimal, Numbers, Operations } from "../enums";

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
        if (
            number === Decimal.POINT &&
            currentOperand.includes(Decimal.POINT)
        ) {
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

    const handleKeyClick = (pressedKey: string) => {
        switch (pressedKey) {
            case Operations.CLEARALL:
                handleClearAllClick();
                break;

            case Operations.CLEARLAST:
                handleClearLastClick();
                break;

            case Operations.DELETE:
                handleDeleteClick();
                break;

            case Operations.PLUSMINUS:
                handlePlusMinusClick();
                break;

            case Operations.ADDITION:
            case Operations.DIVISION:
            case Operations.SUBSTRACTION:
            case Operations.MULTIPLICATION:
            case Operations.MODULO:
            case Operations.SQRT:
            case Operations.INVERSE:
            case Operations.ROL:
            case Operations.ROR:
            case Operations.NOT:
            case Operations.OR:
            case Operations.XOR:
            case Operations.AND:
                handleOperationClick(pressedKey);
                break;

            case Operations.EQUALS:
                handleEqualsClick();
                break;

            case Numbers.ZERO:
            case Numbers.ONE:
            case Numbers.TWO:
            case Numbers.THREE:
            case Numbers.FOUR:
            case Numbers.FIVE:
            case Numbers.SIX:
            case Numbers.SEVEN:
            case Numbers.EIGHT:
            case Numbers.NINE:
            case Decimal.POINT:
                handleNumberClick(pressedKey);
                break;
        }
    };

    return (
        <div className="calculator">
            <Display
                previousOperand={previousOperand}
                currentOperand={currentOperand}
                operation={operation}
            />
            <Keys
                clickHandler={(pressedKey: string) => {
                    handleKeyClick(pressedKey);
                }}
            />
        </div>
    );
}
