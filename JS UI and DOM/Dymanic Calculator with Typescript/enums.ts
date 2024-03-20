export enum Operations {
  ADDITION = "+",
  SUBSTRACTION = "-",
  MULTIPLICATION = "*",
  DIVISION = "/",
  SQRT = "√",
  MODULO = "%",
  INVERSE = "1/x",
  ROL = "RoL",
  ROR = "RoR",
  OR = "Or",
  XOR = "Xor",
  NOT = "Not",
  AND = "And",
}

export enum Decimal {
  POINT = ".",
}

export enum HTML_Elements {
  TD = "td",
  TR = "tr",
  DIV = "div",
  TABLE = "table",
  BUTTON = "button",
}

export enum HTML_Attributes {
  COLSPAN = "colspan",
  ROWSPAN = "rowspan",
}

export enum Events {
  CLICK = "click",
}

export const Reverse_Position_Operations: string[] = [
  Operations.SQRT,
  Operations.NOT,
];
