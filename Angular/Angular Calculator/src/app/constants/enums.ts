export enum Operations {
  ADDITION = '+',
  SUBSTRACTION = '-',
  MULTIPLICATION = '*',
  DIVISION = '/',
  SQRT = '√',
  MODULO = '%',
  INVERSE = '1/x',
  ROL = 'RoL',
  ROR = 'RoR',
  OR = 'Or',
  XOR = 'Xor',
  NOT = 'Not',
  AND = 'And',
  EQUALS = '=',
  PLUSMINUS = '±',
  DELETE = '←',
  CLEARALL = 'C',
  CLEARLAST = 'CE',
}

export enum Numbers {
  ZERO = '0',
  ONE = '1',
  TWO = '2',
  THREE = '3',
  FOUR = '4',
  FIVE = '5',
  SIX = '6',
  SEVEN = '7',
  EIGHT = '8',
  NINE = '9',
}

export enum Decimal {
  POINT = '.',
}

export const Reverse_Position_Operations: string[] = [
  Operations.SQRT,
  Operations.NOT,
];
