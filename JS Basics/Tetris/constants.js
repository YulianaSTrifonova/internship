const COLORS = [
  "#0341AE",
  "#72CB3B",
  "#FFD500",
  "#FF971C",
  "#FF3213",
  "#753CB1",
];

const TETRIS_SHAPE = {
  I: "I",
  J: "J",
  L: "L",
  O: "O",
  S: "S",
  T: "T",
  Z: "Z",
};

const TETRIS_SHAPES = {
  [TETRIS_SHAPE.I]: {
    type: TETRIS_SHAPE.I,
    points: [
      { x: 5, y: 1 },
      { x: 5, y: 2 },
      { x: 5, y: 3 },
      { x: 5, y: 4 },
    ],
  },
  [TETRIS_SHAPE.J]: {
    type: TETRIS_SHAPE.J,
    points: [
      { x: 5, y: 1 },
      { x: 5, y: 2 },
      { x: 5, y: 3 },
      { x: 6, y: 1 },
    ],
  },
  [TETRIS_SHAPE.L]: {
    type: TETRIS_SHAPE.L,
    points: [
      { x: 5, y: 1 },
      { x: 5, y: 2 },
      { x: 5, y: 3 },
      { x: 6, y: 3 },
    ],
  },
  [TETRIS_SHAPE.O]: {
    type: TETRIS_SHAPE.O,
    points: [
      { x: 5, y: 1 },
      { x: 5, y: 2 },
      { x: 6, y: 1 },
      { x: 6, y: 2 },
    ],
  },
  [TETRIS_SHAPE.S]: {
    type: TETRIS_SHAPE.S,
    points: [
      { x: 4, y: 2 },
      { x: 5, y: 2 },
      { x: 5, y: 1 },
      { x: 6, y: 1 },
    ],
  },
  [TETRIS_SHAPE.T]: {
    type: TETRIS_SHAPE.T,
    points: [
      { x: 5, y: 1 },
      { x: 4, y: 2 },
      { x: 5, y: 2 },
      { x: 6, y: 2 },
    ],
  },
  [TETRIS_SHAPE.Z]: {
    type: TETRIS_SHAPE.Z,
    points: [
      { x: 4, y: 1 },
      { x: 5, y: 1 },
      { x: 5, y: 2 },
      { x: 6, y: 2 },
    ],
  },
};

const CONTROLS = {
  LEFT: "ArrowLeft",
  RIGHT: "ArrowRight",
  UP: "ArrowUp",
  SPACE_KEY: " ",
  SPACE_CODE: "Space",
};

const DISPLAY = {
  BLOCK: "block",
  NONE: "none",
};

const ATTRIBUTES = {
  DATA_X: "data-x",
  DATA_Y: "data-y"
}

const EVENTS = {
  KEYDOWN: "keydown"
}

const HTML_ELEMENTS = {
  DIV: "div"
}
