const DIRECTIONS = {
  LEFT: "left",
  RIGHT: "right",
  UP: "up",
  DOWN: "down",
};

const OPPOSITE_DIRECTIONS = {
  [DIRECTIONS.LEFT]: DIRECTIONS.RIGHT,
  [DIRECTIONS.RIGHT]: DIRECTIONS.LEFT,
  [DIRECTIONS.UP]: DIRECTIONS.DOWN,
  [DIRECTIONS.DOWN]: DIRECTIONS.UP,
};

const ARROWS = {
  LEFT: "ArrowLeft",
  RIGHT: "ArrowRight",
  UP: "ArrowUp",
  DOWN: "ArrowDown",
};

const LETTERS = {
  A: "a",
  D: "d",
  W: "w",
  S: "s",
};

const DISPLAY = {
  BLOCK: "block",
  NONE: "none",
};

const WINNER = {
  BLUE: "The blue snake wins",
  GREEN: "The green snake wins",
};

const gameBoard = document.getElementById("game-board");
const initialInstructionText = document.getElementById("init-instruction-text");
const instructionText = document.getElementById("game-over");
const scorePlayer1 = document.getElementById("scorePlayer1");
const finalResultPlayer1 = document.getElementById("green");
const scorePlayer2 = document.getElementById("scorePlayer2");
const finalResultPlayer2 = document.getElementById("blue");
const finalScore = document.getElementById("result");

let snakeArrows = [{ x: 10, y: 15 }];
let snakeLetters = [{ x: 10, y: 5 }];
let food = generateFood();
let directionArrows = DIRECTIONS.RIGHT;
let directionLetters = DIRECTIONS.LEFT;
let gameInterval;
let speed = 300;
let gameStarted = false;
const scorePointSoundGreen = new Audio("/pop.mp3");
const scorePointSoundBlue = new Audio("/eating-sound.mp3");
const gameOverSound = new Audio("/game-over.mp3");
let scoreGreen = 0;
let scoreBlue = 0;
let winner;

function draw() {
  gameBoard.innerHTML = "";
  drawSnake(snakeArrows, "blueSnake");
  drawSnake(snakeLetters, "greenSnake");
  drawFood();
  updateScore();
}

function drawSnake(snake, className) {
  if (gameStarted) {
    generateSnake(snake, className);
  }
}

function generateSnake(snake, className) {
  snake.forEach((element) => {
    const snakeElement = createGameElement("div", className);
    setPosition(snakeElement, element);
    gameBoard.appendChild(snakeElement);
  });
}

function createGameElement(tag, className) {
  const element = document.createElement(tag);
  element.classList.add(className);
  return element;
}

function setPosition(element, position) {
  element.style.gridColumn = position.x;
  element.style.gridRow = position.y;
}

function drawFood() {
  if (gameStarted) {
    const foodElement = createGameElement("div", "food");
    setPosition(foodElement, food);
    gameBoard.appendChild(foodElement);
  }
}

function generateFood() {
  const x = Math.floor(Math.random() * 20 + 1);
  const y = Math.floor(Math.random() * 20 + 1);

  const matchWithSnakePart =
    snakeArrows.filter((partArrows) => partArrows.x == x && partArrows.y == y)
      .length > 0 ||
    snakeLetters.filter(
      (partLetters) => partLetters.x == x && partLetters.y == y
    ).length > 0;

  if (matchWithSnakePart) {
    return generateFood();
  }

  return { x: x, y: y };
}

function moveSnake(snake, direction) {
  const head = { ...snake[0] };
  switch (direction) {
    case DIRECTIONS.RIGHT:
      head.x++;
      break;
    case DIRECTIONS.LEFT:
      head.x--;
      break;
    case DIRECTIONS.DOWN:
      head.y++;
      break;
    case DIRECTIONS.UP:
      head.y--;
      break;
  }

  snake.unshift(head);

  if (head.x === food.x && head.y === food.y) {
    if (snake === snakeArrows) {
      scorePointSoundBlue.play();
    } else if (snake === snakeLetters) {
      scorePointSoundGreen.play();
    }

    food = generateFood();
    increaseSpeed();
    track();
  } else {
    snake.pop();
  }
}

function startGame() {
  gameStarted = true;
  initialInstructionText.style.display = DISPLAY.NONE;
  instructionText.style.display = DISPLAY.NONE;
  track();
}

function track() {
  if (gameInterval !== "undefined") {
    clearInterval(gameInterval);
  }
  gameInterval = setInterval(() => {
    moveSnake(snakeArrows, directionArrows);
    moveSnake(snakeLetters, directionLetters);
    checkForCollision();
    draw();
  }, speed);
}

function setDirection(key) {
  const isArrow =
    key === ARROWS.LEFT ||
    key === ARROWS.RIGHT ||
    key === ARROWS.UP ||
    key === ARROWS.DOWN;
  const isLetter =
    key === LETTERS.A ||
    key === LETTERS.D ||
    key === LETTERS.W ||
    key === LETTERS.S;
  let directionToGo;

  if (isArrow) {
    switch (key) {
      case ARROWS.UP:
        directionToGo = DIRECTIONS.UP;
        break;
      case ARROWS.DOWN:
        directionToGo = DIRECTIONS.DOWN;
        break;
      case ARROWS.LEFT:
        directionToGo = DIRECTIONS.LEFT;
        break;
      case ARROWS.RIGHT:
        directionToGo = DIRECTIONS.RIGHT;
        break;
    }
    const shouldSwitchDirection =
      directionToGo != OPPOSITE_DIRECTIONS[directionArrows] ||
      snakeArrows.length === 1;

    if (shouldSwitchDirection) {
      directionArrows = directionToGo;
    }
  }

  if (isLetter) {
    switch (key) {
      case LETTERS.W:
        directionToGo = DIRECTIONS.UP;
        break;
      case LETTERS.S:
        directionToGo = DIRECTIONS.DOWN;
        break;
      case LETTERS.A:
        directionToGo = DIRECTIONS.LEFT;
        break;
      case LETTERS.D:
        directionToGo = DIRECTIONS.RIGHT;
        break;
    }

    const shouldSwitchDirection =
      directionToGo != OPPOSITE_DIRECTIONS[directionLetters] ||
      snakeLetters.length === 1;

    if (shouldSwitchDirection) {
      directionLetters = directionToGo;
    }
  }
}

function handleKeyDown(event) {
  if (
    (!gameStarted && event.code === "Space") ||
    (!gameStarted && event.key === " ")
  ) {
    startGame();
    scoreGreen = 0;
    scoreBlue = 0;
  } else {
    setDirection(event.key);
  }
}

document.addEventListener("keydown", handleKeyDown);

function increaseSpeed() {
  if (speed > 200) {
    speed -= 5;
  } else if (speed > 100) {
    speed -= 3;
  } else if (speed > 50) {
    speed -= 2;
  } else if (speed > 25) {
    speed -= 1;
  }
}

function checkForCollision() {
  const headSnakeArrows = snakeArrows[0];
  const headSnakeLetters = snakeLetters[0];

  const isSnakeArrowsOutOfBoard =
    headSnakeArrows.x < 1 ||
    headSnakeArrows.x > 20 ||
    headSnakeArrows.y < 1 ||
    headSnakeArrows.y > 20;
  const isSnakeLettersOutOfBoard =
    headSnakeLetters.x < 1 ||
    headSnakeLetters.x > 20 ||
    headSnakeLetters.y < 1 ||
    headSnakeLetters.y > 20;

  if (isSnakeArrowsOutOfBoard) {
    winner = 0;
    resetGame();
  } else if (isSnakeLettersOutOfBoard) {
    winner = 1;
    resetGame();
  }

  checkSelfCollision(snakeArrows);
  checkSelfCollision(snakeLetters);

  if (
    headSnakeArrows.x === headSnakeLetters.x &&
    headSnakeArrows.y === headSnakeLetters.y
  ) {
    if (scoreBlue > scoreGreen) {
      winner = 1;
    } else if (scoreGreen > scoreBlue) {
      winner = 0;
    } else {
      winner = -1;
    }
    resetGame();
  } else {
    for (let i = 1; i < snakeArrows.length; i++) {
      if (
        headSnakeLetters.x === snakeArrows[i].x &&
        headSnakeLetters.y === snakeArrows[i].y
      ) {
        winner = 1;
        resetGame();
      }
    }

    for (let j = 1; j < snakeLetters.length; j++) {
      if (
        headSnakeArrows.x === snakeLetters[j].x &&
        headSnakeArrows.y === snakeLetters[j].y
      ) {
        winner = 0;
        resetGame();
      }
    }
  }
}

function checkSelfCollision(snake) {
  const head = snake[0];
  for (let i = 1; i < snake.length; i++) {
    if (head.x === snake[i].x && head.y === snake[i].y) {
      resetGame();
    }
  }
}

function resetGame() {
  gameOverSound.play();
  stopGame();
  snakeArrows = [{ x: 10, y: 15 }];
  snakeLetters = [{ x: 10, y: 5 }];
  food = generateFood();
  directionArrows = DIRECTIONS.RIGHT;
  directionLetters = DIRECTIONS.LEFT;
  speed = 300;
  updateScore();
}

function updateScore() {
  let currentScorePlayer1 = snakeLetters.length - 1;
  let currentScorePlayer2 = snakeArrows.length - 1;

  if (currentScorePlayer1 > scoreGreen) {
    scoreGreen = currentScorePlayer1;
  }

  if (currentScorePlayer2 > scoreBlue) {
    scoreBlue = currentScorePlayer2;
  }
  scorePlayer1.textContent = currentScorePlayer1.toString().padStart(3, "0");
  scorePlayer2.textContent = currentScorePlayer2.toString().padStart(3, "0");

  if (winner === 0) {
    finalScore.textContent = WINNER.GREEN;
  } else if (winner === 1) {
    finalScore.textContent = WINNER.BLUE;
  } else {
    finalScore.textContent = "Both snakes have the same score";
  }

  finalResultPlayer1.textContent = scoreGreen.toString().padStart(3, "0");
  finalResultPlayer2.textContent = scoreBlue.toString().padStart(3, "0");
}

function stopGame() {
  clearInterval(gameInterval);
  gameStarted = false;
  instructionText.style.display = DISPLAY.BLOCK;
}
