const gameBoard = document.getElementById("grid");
const score = document.getElementById("score");
const initialInstructionText = document.getElementById("init-instruction-text");
const instructionText = document.getElementById("game-over");

let shapes = Object.values(TETRIS_SHAPE);
let currentShape;
let currentShapeCounter = 0;
let gameInterval;
let result = 0;
let speed = 1000;
let gameStarted = false;
let newSpaceTrigerTimestamp = new Date().getTime();
const maxX = 10;
const minX = 1;
const maxY = 15;
const minY = 1;

function draw() {
  drawShape();
  deleteRow();
}

function randomProperty(shape) {
  let keys = Object.keys(shape);
  return shape[keys[Math.floor(keys.length * Math.random())]];
}

function setCurrentShape() {
  currentShapeCounter++;
  let randomShape = randomProperty(TETRIS_SHAPE);
  const randomColor = COLORS[Math.floor(Math.random() * COLORS.length)];
  currentShape = JSON.parse(JSON.stringify(TETRIS_SHAPES[randomShape]));
  currentShape.rendered = false;
  currentShape.points = currentShape.points.map((point) => {
    return {
      coordinates: point,
      domElement: createGameElement(
        HTML_ELEMENTS.DIV,
        `shape_${currentShapeCounter}`,
        randomColor
      ),

      hasBeenRotatedOnce: false,
      hasBeenRotatedTwice: false,
      hasBeenRotatedThrice: false,
    };
  });

  if (checkForCollision()) {
    resetGame();
  }
}

function drawShape() {
  if (gameStarted) {
    const { points, rendered } = currentShape;

    if (!rendered) {
      points.forEach(({ coordinates, domElement }) => {
        setPosition(domElement, coordinates);
        gameBoard.appendChild(domElement);
      });
      currentShape.rendered = true;
    } else {
      if (checkForCollision()) {
        setCurrentShape();
      } else {
        points.forEach(({ coordinates, domElement }) => {
          coordinates.y++;
          setPosition(domElement, coordinates);
        });
      }
    }
  }
}

function createGameElement(tag, className, color) {
  const element = document.createElement(tag);
  element.classList.add(className);
  element.style.backgroundColor = color;
  return element;
}

function setPosition(element, position) {
  element.style.gridColumn = position.x;
  element.style.gridRow = position.y;

  element.setAttribute(ATTRIBUTES.DATA_Y, position.y);
  element.setAttribute(ATTRIBUTES.DATA_X, position.x);

  return position;
}

function handleKeyDown(event) {
  if (
    (!gameStarted && event.code === CONTROLS.SPACE_CODE) ||
    (!gameStarted && event.key === CONTROLS.SPACE_KEY)
  ) {
    startGame();
    updateScore(0);
  } else {
    moveShape(event.key);
  }
}

document.addEventListener(EVENTS.KEYDOWN, handleKeyDown);

function startGame() {
  gameStarted = true;
  result = 0;
  updateScore(0);
  setCurrentShape();
  initialInstructionText.style.display = DISPLAY.NONE;
  instructionText.style.display = DISPLAY.NONE;
  tick();
}

function moveShape(key) {
  switch (key) {
    case CONTROLS.RIGHT:
    case CONTROLS.LEFT:
      const moveRight = key === CONTROLS.RIGHT ? 1 : 0;
      moveShapeLeftOrRight(moveRight);
      break;
    case CONTROLS.UP:
      rotateShape();
      break;
    case CONTROLS.SPACE_KEY:
      let lastSpaceTrigerTimestamp = newSpaceTrigerTimestamp;
      newSpaceTrigerTimestamp = new Date().getTime();
      if (newSpaceTrigerTimestamp - lastSpaceTrigerTimestamp >= 1000) {
        moveShapeDown();
      }
      break;
  }
}

function moveShapeLeftOrRight(moveRight) {
  if (canMoveLeftRight(moveRight)) {
    const increment = moveRight ? 1 : -1;
    currentShape.points.forEach((point) => {
      point.coordinates.x += increment;
      setPosition(point.domElement, point.coordinates);
    });
  }
}

function canMoveLeftRight(moveRight) {
  return currentShape.points.every((point) => {
    const filledSpace =
      getFilledSpace(point.coordinates.x - 1, point.coordinates.y) ||
      getFilledSpace(point.coordinates.x + 1, point.coordinates.y);
    const pointX = point.coordinates.x;
    if (!filledSpace) {
      return moveRight ? pointX < maxX : pointX > minX;
    }
  });
}

function moveShapeDown() {
  if (canMoveDown() && !checkForCollision()) {
    currentShape.points.forEach((point) => {
      point.coordinates.y += 1;
      setPosition(point.domElement, point.coordinates);
    });
  }
}

function canMoveDown() {
  return currentShape.points.every((point) => {
    const pointY = point.coordinates.y;
    return pointY < maxY;
  });
}

function rotateShape() {
  getShapeRotation();
  if (!canRotateShape()) {
    const rotationOffset = getOffset();
    currentShape.points.forEach((point) => {
      point.coordinates.x += rotationOffset;
    });
  }
}

function canRotateShape() {
  return currentShape.points.every((point) => {
    let pointXMax = point.coordinates.x;
    let pointXMin = point.coordinates.x;

    return pointXMax <= maxX && pointXMin >= minX;
  });
}

function getOffset() {
  let offset = 0;

  currentShape.points.some((point) => {
    const pointX = point.coordinates.x;

    if (pointX === maxX) {
      if (currentShape.type === TETRIS_SHAPE.I) {
        offset = -2;
      } else {
        offset = -1;
      }
    } else if (pointX === minX) {
      offset = 1;
    }
  });

  return offset;
}

function getShapeRotation() {
  switch (currentShape.type) {
    case TETRIS_SHAPE.I:
      rotateIShape();
      break;
    case TETRIS_SHAPE.J:
      rotateJShape();
      break;
    case TETRIS_SHAPE.L:
      rotateLShape();
      break;
    case TETRIS_SHAPE.S:
      rotateSShape();
      break;
    case TETRIS_SHAPE.T:
      rotateTShape();
      break;
    case TETRIS_SHAPE.Z:
      rotateZShape();
      break;
  }
}

function rotateIShape() {
  if (currentShape.hasBeenRotatedOnce) {
    currentShape.points[0].coordinates.x += 1;
    currentShape.points[0].coordinates.y -= 1;

    currentShape.points[2].coordinates.x -= 1;
    currentShape.points[2].coordinates.y += 1;

    currentShape.points[3].coordinates.x -= 2;
    currentShape.points[3].coordinates.y += 2;

    currentShape.hasBeenRotatedOnce = false;
  } else {
    currentShape.points[0].coordinates.x -= 1;
    currentShape.points[0].coordinates.y += 1;

    currentShape.points[2].coordinates.x += 1;
    currentShape.points[2].coordinates.y -= 1;

    currentShape.points[3].coordinates.x += 2;
    currentShape.points[3].coordinates.y -= 2;

    currentShape.hasBeenRotatedOnce = true;
    return;
  }
}

function rotateJShape() {
  if (currentShape.hasBeenRotatedOnce) {
    currentShape.points[0].coordinates.x -= 1;
    currentShape.points[0].coordinates.y += 1;

    currentShape.points[2].coordinates.x += 1;
    currentShape.points[2].coordinates.y -= 1;

    currentShape.points[3].coordinates.x -= 2;

    currentShape.hasBeenRotatedOnce = false;
    currentShape.hasBeenRotatedTwice = true;
    currentShape.hasBeenRotatedThrice = false;
  } else if (currentShape.hasBeenRotatedTwice) {
    currentShape.points[0].coordinates.x -= 1;
    currentShape.points[0].coordinates.y -= 1;

    currentShape.points[2].coordinates.x += 1;
    currentShape.points[2].coordinates.y += 1;

    currentShape.points[3].coordinates.y -= 2;

    currentShape.hasBeenRotatedOnce = false;
    currentShape.hasBeenRotatedTwice = false;
    currentShape.hasBeenRotatedThrice = true;
  } else if (currentShape.hasBeenRotatedThrice) {
    currentShape.points[0].coordinates.x += 1;
    currentShape.points[0].coordinates.y -= 1;

    currentShape.points[2].coordinates.x -= 1;
    currentShape.points[2].coordinates.y += 1;

    currentShape.points[3].coordinates.x += 2;

    currentShape.hasBeenRotatedOnce = false;
    currentShape.hasBeenRotatedTwice = false;
    currentShape.hasBeenRotatedThrice = false;
  } else {
    currentShape.points[0].coordinates.x += 1;
    currentShape.points[0].coordinates.y += 1;

    currentShape.points[2].coordinates.x -= 1;
    currentShape.points[2].coordinates.y -= 1;

    currentShape.points[3].coordinates.y += 2;

    currentShape.hasBeenRotatedOnce = true;
    currentShape.hasBeenRotatedTwice = false;
    currentShape.hasBeenRotatedThrice = false;
  }
}

function rotateLShape() {
  if (currentShape.hasBeenRotatedOnce) {
    currentShape.points[0].coordinates.x -= 1;
    currentShape.points[0].coordinates.y += 1;

    currentShape.points[2].coordinates.x += 1;
    currentShape.points[2].coordinates.y -= 1;

    currentShape.points[3].coordinates.y -= 2;

    currentShape.hasBeenRotatedOnce = false;
    currentShape.hasBeenRotatedTwice = true;
    currentShape.hasBeenRotatedThrice = false;
  } else if (currentShape.hasBeenRotatedTwice) {
    currentShape.points[0].coordinates.x -= 1;
    currentShape.points[0].coordinates.y -= 1;

    currentShape.points[2].coordinates.x += 1;
    currentShape.points[2].coordinates.y += 1;

    currentShape.points[3].coordinates.x += 2;

    currentShape.hasBeenRotatedOnce = false;
    currentShape.hasBeenRotatedTwice = false;
    currentShape.hasBeenRotatedThrice = true;
  } else if (currentShape.hasBeenRotatedThrice) {
    currentShape.points[0].coordinates.x += 1;
    currentShape.points[0].coordinates.y -= 1;

    currentShape.points[2].coordinates.x -= 1;
    currentShape.points[2].coordinates.y += 1;

    currentShape.points[3].coordinates.y += 2;

    currentShape.hasBeenRotatedOnce = false;
    currentShape.hasBeenRotatedTwice = false;
    currentShape.hasBeenRotatedThrice = false;
  } else {
    currentShape.points[0].coordinates.x += 1;
    currentShape.points[0].coordinates.y += 1;

    currentShape.points[2].coordinates.x -= 1;
    currentShape.points[2].coordinates.y -= 1;

    currentShape.points[3].coordinates.x -= 2;

    currentShape.hasBeenRotatedOnce = true;
    currentShape.hasBeenRotatedTwice = false;
    currentShape.hasBeenRotatedThrice = false;
  }
}

function rotateSShape() {
  if (currentShape.hasBeenRotatedOnce) {
    currentShape.points[0].coordinates.x -= 1;
    currentShape.points[0].coordinates.y += 1;

    currentShape.points[2].coordinates.x -= 1;
    currentShape.points[2].coordinates.y -= 1;

    currentShape.points[3].coordinates.y -= 2;

    currentShape.hasBeenRotatedOnce = false;
  } else {
    currentShape.points[0].coordinates.x += 1;
    currentShape.points[0].coordinates.y -= 1;

    currentShape.points[2].coordinates.x += 1;
    currentShape.points[2].coordinates.y += 1;

    currentShape.points[3].coordinates.y += 2;

    currentShape.hasBeenRotatedOnce = true;
  }
}

function rotateTShape() {
  if (currentShape.hasBeenRotatedOnce) {
    currentShape.points[0].coordinates.x -= 1;
    currentShape.points[0].coordinates.y += 1;

    currentShape.points[1].coordinates.x += 1;
    currentShape.points[1].coordinates.y += 1;

    currentShape.points[3].coordinates.x -= 1;
    currentShape.points[3].coordinates.y -= 1;

    currentShape.hasBeenRotatedOnce = false;
    currentShape.hasBeenRotatedTwice = true;
    currentShape.hasBeenRotatedThrice = false;
  } else if (currentShape.hasBeenRotatedTwice) {
    currentShape.points[0].coordinates.x -= 1;
    currentShape.points[0].coordinates.y -= 1;

    currentShape.points[1].coordinates.x -= 1;
    currentShape.points[1].coordinates.y += 1;

    currentShape.points[3].coordinates.x += 1;
    currentShape.points[3].coordinates.y -= 1;

    currentShape.hasBeenRotatedOnce = false;
    currentShape.hasBeenRotatedTwice = false;
    currentShape.hasBeenRotatedThrice = true;
  } else if (currentShape.hasBeenRotatedThrice) {
    currentShape.points[0].coordinates.x += 1;
    currentShape.points[0].coordinates.y -= 1;

    currentShape.points[1].coordinates.x -= 1;
    currentShape.points[1].coordinates.y -= 1;

    currentShape.points[3].coordinates.x += 1;
    currentShape.points[3].coordinates.y += 1;

    currentShape.hasBeenRotatedOnce = false;
    currentShape.hasBeenRotatedTwice = false;
    currentShape.hasBeenRotatedThrice = false;
  } else {
    currentShape.points[0].coordinates.x += 1;
    currentShape.points[0].coordinates.y += 1;

    currentShape.points[1].coordinates.x += 1;
    currentShape.points[1].coordinates.y -= 1;

    currentShape.points[3].coordinates.x -= 1;
    currentShape.points[3].coordinates.y += 1;

    currentShape.hasBeenRotatedOnce = true;
    currentShape.hasBeenRotatedTwice = false;
    currentShape.hasBeenRotatedThrice = false;
  }
}

function rotateZShape() {
  if (currentShape.hasBeenRotatedOnce) {
    currentShape.points[0].coordinates.x -= 2;

    currentShape.points[1].coordinates.x -= 1;
    currentShape.points[1].coordinates.y -= 1;

    currentShape.points[3].coordinates.x += 1;
    currentShape.points[3].coordinates.y -= 1;

    currentShape.hasBeenRotatedOnce = false;
  } else {
    currentShape.points[0].coordinates.x += 2;

    currentShape.points[1].coordinates.x += 1;
    currentShape.points[1].coordinates.y += 1;

    currentShape.points[3].coordinates.x -= 1;
    currentShape.points[3].coordinates.y += 1;

    currentShape.hasBeenRotatedOnce = true;
  }
}

function checkForCollision() {
  for (let point of currentShape.points) {
    let { x, y } = point.coordinates;

    if (y == maxY) {
      return true;
    }

    const filledSpace = getFilledSpace(x, y + 1);
    if (filledSpace) {
      return true;
    }
  }

  return false;
}

function deleteRow() {
  let count = 0;
  for (let y = maxY; y >= minY; y--) {
    const elementsInRow = document.querySelectorAll(
      `div[data-y='${y}']:not([class='shape_${currentShapeCounter}']`
    );
    if (elementsInRow.length === maxX) {
      elementsInRow.forEach((element) => {
        element.remove();
      });

      count++;

      for (let rowAbove = y - 1; rowAbove >= minY; rowAbove--) {
        const elementsToMoveDown = document.querySelectorAll(
          `div[data-y='${rowAbove}']`
        );
        elementsToMoveDown.forEach((element) => {
          const newY = parseInt(element.getAttribute(ATTRIBUTES.DATA_X)) + 1;
          element.setAttribute(ATTRIBUTES.DATA_Y, newY);
          element.style.gridRow = newY;
        });

        console.log(count);
      }
      y++;
      updateScore(count);
      increaseSpeed();
    }
  }
}

function getFilledSpace(x, y) {
  return document.querySelector(
    `div[data-x='${x}'][data-y='${y}']:not([class='shape_${currentShapeCounter}'])`
  );
}

function tick() {
  if (gameInterval !== "undefined") {
    clearInterval(gameInterval);
  }
  gameInterval = setInterval(() => {
    draw();
  }, speed);
}

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

function resetGame() {
  gameBoard.innerHTML = "";
  stopGame();
  speed = 1000;
}

function updateScore(count) {
  if (count > 0) {
    let currentScore = count ** count * 15;
    result += currentScore;
  }

  score.textContent = result.toString().padStart(3, "0");
}

function stopGame() {
  clearInterval(gameInterval);
  gameStarted = false;
  instructionText.style.display = DISPLAY.BLOCK;
}
