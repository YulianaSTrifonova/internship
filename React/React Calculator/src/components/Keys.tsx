import { Decimal, Numbers, Operations } from "../enums";

export default function Keys({
  onNumberClick,
  onOperationClick,
  onDeleteClick,
  onClearAllClick,
  onClearLastClick,
  onPlusMinusClick,
  onEqualsClick,
}: {
  onNumberClick: (number: string) => void;
  onOperationClick: (op: string) => void;
  onDeleteClick: () => void;
  onClearAllClick: () => void;
  onClearLastClick: () => void;
  onPlusMinusClick: () => void;
  onEqualsClick: () => void;
}) {
  const calculatorKeys = [
    [
      {
        displayName: Operations.CLEARALL,
        colspan: 1,
        rowspan: 1,
        className: "btn",
        clickHandler: onClearAllClick,
      },
      {
        displayName: Operations.CLEARLAST,
        colspan: 1,
        rowspan: 1,
        className: "btn",
        clickHandler: onClearLastClick,
      },
      {
        displayName: Operations.DELETE,
        colspan: 1,
        rowspan: 1,
        className: "btn",
        clickHandler: onDeleteClick,
      },
      {
        displayName: Decimal.POINT,
        colspan: 1,
        rowspan: 1,
        className: "btn disabled",
      },
      {
        displayName: Decimal.POINT,
        colspan: 1,
        rowspan: 1,
        className: "btn disabled",
      },
      {
        displayName: Operations.PLUSMINUS,
        colspan: 1,
        rowspan: 1,
        className: "btn",
        clickHandler: onPlusMinusClick,
      },
      {
        displayName: Operations.SQRT,
        colspan: 1,
        rowspan: 1,
        className: "btn",
        clickHandler: () => onOperationClick(Operations.SQRT),
      },
    ],
    [
      {
        displayName: Decimal.POINT,
        colspan: 1,
        rowspan: 1,
        className: "btn disabled",
      },
      {
        displayName: Decimal.POINT,
        colspan: 1,
        rowspan: 1,
        className: "btn disabled",
      },
      {
        displayName: Numbers.SEVEN,
        colspan: 1,
        rowspan: 1,
        className: "btn",
        clickHandler: () => onNumberClick(Numbers.SEVEN),
      },
      {
        displayName: Numbers.EIGHT,
        colspan: 1,
        rowspan: 1,
        className: "btn",
        clickHandler: () => onNumberClick(Numbers.EIGHT),
      },
      {
        displayName: Numbers.NINE,
        colspan: 1,
        rowspan: 1,
        className: "btn",
        clickHandler: () => onNumberClick(Numbers.NINE),
      },
      {
        displayName: Operations.DIVISION,
        colspan: 1,
        rowspan: 1,
        className: "btn",
        clickHandler: () => onOperationClick(Operations.DIVISION),
      },
      {
        displayName: Operations.MODULO,
        colspan: 1,
        rowspan: 1,
        className: "btn",
        clickHandler: () => onOperationClick(Operations.MODULO),
      },
    ],
    [
      {
        displayName: Operations.ROL,
        colspan: 1,
        rowspan: 1,
        className: "btn",
        clickHandler: () => onOperationClick(Operations.ROL),
      },
      {
        displayName: Operations.ROR,
        colspan: 1,
        rowspan: 1,
        className: "btn",
        clickHandler: () => onOperationClick(Operations.ROR),
      },
      {
        displayName: Numbers.FOUR,
        colspan: 1,
        rowspan: 1,
        className: "btn",
        clickHandler: () => onNumberClick(Numbers.FOUR),
      },
      {
        displayName: Numbers.FIVE,
        colspan: 1,
        rowspan: 1,
        className: "btn",
        clickHandler: () => onNumberClick(Numbers.FIVE),
      },
      {
        displayName: Numbers.SIX,
        colspan: 1,
        rowspan: 1,
        className: "btn",
        clickHandler: () => onNumberClick(Numbers.SIX),
      },
      {
        displayName: Operations.MULTIPLICATION,
        colspan: 1,
        rowspan: 1,
        className: "btn",
        clickHandler: () => onOperationClick(Operations.MULTIPLICATION),
      },
      {
        displayName: Operations.INVERSE,
        colspan: 1,
        rowspan: 1,
        className: "btn",
        clickHandler: () => onOperationClick(Operations.INVERSE),
      },
    ],
    [
      {
        displayName: Operations.OR,
        colspan: 1,
        rowspan: 1,
        className: "btn",
        clickHandler: () => onOperationClick(Operations.OR),
      },
      {
        displayName: Operations.XOR,
        colspan: 1,
        rowspan: 1,
        className: "btn",
        clickHandler: () => onOperationClick(Operations.XOR),
      },
      {
        displayName: Numbers.ONE,
        colspan: 1,
        rowspan: 1,
        className: "btn",
        clickHandler: () => onNumberClick(Numbers.ONE),
      },
      {
        displayName: Numbers.TWO,
        colspan: 1,
        rowspan: 1,
        className: "btn",
        clickHandler: () => onNumberClick(Numbers.TWO),
      },
      {
        displayName: Numbers.THREE,
        colspan: 1,
        rowspan: 1,
        className: "btn",
        clickHandler: () => onNumberClick(Numbers.THREE),
      },
      {
        displayName: Operations.SUBSTRACTION,
        colspan: 1,
        rowspan: 1,
        className: "btn",
        clickHandler: () => onOperationClick(Operations.SUBSTRACTION),
      },
      {
        displayName: Operations.EQUALS,
        colspan: 1,
        rowspan: 2,
        className: "btn tall",
        clickHandler: onEqualsClick,
      },
    ],
    [
      {
        displayName: Operations.NOT,
        colspan: 1,
        rowspan: 1,
        className: "btn",
        clickHandler: () => onOperationClick(Operations.NOT),
      },
      {
        displayName: Operations.AND,
        colspan: 1,
        rowspan: 1,
        className: "btn",
        clickHandler: () => onOperationClick(Operations.AND),
      },
      {
        displayName: Numbers.ZERO,
        colspan: 2,
        rowspan: 1,
        className: "btn long",
        clickHandler: () => onNumberClick(Numbers.ZERO),
      },
      {
        displayName: Decimal.POINT,
        colspan: 1,
        rowspan: 1,
        className: "btn",
        clickHandler: () => onNumberClick(Decimal.POINT),
      },
      {
        displayName: Operations.ADDITION,
        colspan: 1,
        rowspan: 1,
        className: "btn",
        clickHandler: () => onOperationClick(Operations.ADDITION),
      },
    ],
  ];

  return (
    <table>
      <tbody>
        {calculatorKeys.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {row.map((button, colIndex) => (
              <td
                key={colIndex}
                colSpan={button.colspan}
                rowSpan={button.rowspan}
                className={button.className}
                onClick={() => {
                  button.clickHandler && button.clickHandler();
                }}
              >
                {button.displayName}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
