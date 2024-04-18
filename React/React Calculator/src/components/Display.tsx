import { Reverse_Position_Operations } from "../enums";

export default function Display({
  previousOperand,
  currentOperand,
  operation,
}: {
  previousOperand: string;
  currentOperand: string;
  operation: string;
}) {
  return (
    <div className="output">
      <div className="screenRow" id="screenRow1">
        {Reverse_Position_Operations.includes(operation)
          ? `${operation} ${previousOperand}`
          : `${previousOperand} ${operation}`}
      </div>
      <div className="screenRow" id="screenRow2">
        {currentOperand}
      </div>
    </div>
  );
}
