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

const DISPLAY = {
  BLOCK: "block",
  NONE: "none",
};

const gameBoard = document.getElementById("game-board");
const initialInstructionText = document.getElementById("init-instruction-text");
const instructionText = document.getElementById("game-over");
const score = document.getElementById("score");
const finalScore = document.getElementById("result");

let snake = [{ x: 10, y: 10 }];
let food = generateFood();
let direction = DIRECTIONS.RIGHT;
let gameInterval;
let speed = 200;
let gameStarted = false;
let scorePointSound = new Audio("/pop.mp3");
let gameOverSound = new Audio("/game-over.mp3");
let result = 0;

function draw() {
  gameBoard.innerHTML = "";
  drawSnake();
  drawFood();
  updateScore();
}

function drawSnake() {
  if (gameStarted) {
    snake.forEach((element) => {
      const snakeElement = createGameElement("div", "snake");
      setPosition(snakeElement, element);
      gameBoard.appendChild(snakeElement);
    });
  }
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
    snake.filter((part) => part.x == x && part.y == y).length > 0;

  if (matchWithSnakePart) {
    return generateFood();
  }

  return { x: x, y: y };
}

function moveSnake() {
  const head = { ...snake[0] };
  switch (direction) {
    case DIRECTIONS.RIGHT:
      head.x++;
      break;
    case DIRECTIONS.LEFT:
      head.x--;
      break;
    case DIRECTIONS.UP:
      head.y--;
      break;
    case DIRECTIONS.DOWN:
      head.y++;
      break;
  }

  snake.unshift(head);

  if (head.x === food.x && head.y === food.y) {
    scorePointSound.play();
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
    moveSnake();
    checkForCollision();
    draw();
  }, speed);
}

function setDirection(key) {
  let directionToGo;

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
    directionToGo != OPPOSITE_DIRECTIONS[direction] || snake.length === 1;

  if (shouldSwitchDirection) {
    direction = directionToGo;
  }
}

function handleKeyDown(event) {
  if (
    (!gameStarted && event.code === "Space") ||
    (!gameStarted && event.key === " ")
  ) {
    startGame();
    result = 0;
  } else {
    setDirection(event.key);
  }
}

document.addEventListener("keydown", handleKeyDown);

function increaseSpeed() {
  if (speed > 150) {
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
  const head = snake[0];

  if (head.x < 1 || head.x > 20 || head.y < 1 || head.y > 20) {
    resetGame();
  }

  for (let i = 1; i < snake.length; i++) {
    if (head.x === snake[i].x && head.y === snake[i].y) {
      resetGame();
    }
  }
}

function resetGame() {
  gameOverSound.play();
  stopGame();
  snake = [{ x: 10, y: 10 }];
  food = generateFood();
  direction = DIRECTIONS.RIGHT;
  speed = 200;
  updateScore();
}

function updateScore() {
  const currentScore = snake.length - 1;
  if (currentScore > result) {
    result = currentScore;
  }
  score.textContent = currentScore.toString().padStart(3, "0");
  finalScore.textContent = `You scored ${result}`;
}

function stopGame() {
  clearInterval(gameInterval);
  gameStarted = false;
  instructionText.style.display = DISPLAY.BLOCK;
}
