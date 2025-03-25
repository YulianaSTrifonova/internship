export enum Player {
  X = 'X',
  O = 'O',
  None = '',
}

export const nextMove = {
  [Player.X]: Player.O,
  [Player.O]: Player.X,
  [Player.None]: Player.X,
};

export const Lines = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
