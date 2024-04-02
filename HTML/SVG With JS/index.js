function openAndCloseWindow(button, open, close) {
  button.addEventListener("click", () => {
    let text = button.innerText;

    if (text.includes(STATES.OPEN)) {
      text = text.replace(STATES.OPEN, STATES.CLOSE);
      button.innerHTML = text;
      open.style.visibility = STATES.VISIBLE;
      close.style.visibility = STATES.HIDDEN;
    } else {
      open.style.visibility = STATES.HIDDEN;
      close.style.visibility = STATES.VISIBLE;
      text = text.replace(STATES.CLOSE, STATES.OPEN);
      button.innerHTML = text;
    }
  });
}

doorButton.addEventListener("click", () => {
  let text = doorButton.innerText;

  switch (text) {
    case TEXT.OPEN_DOOR:
      openDoor.style.visibility = STATES.VISIBLE;
      closeDoor.style.fill = COLORS.YELLOW;
      doorKnob.style.visibility = STATES.HIDDEN;
      text = text.replace(STATES.OPEN, STATES.CLOSE);
      doorButton.innerHTML = text;

      break;

    default:
      openDoor.style.visibility = STATES.HIDDEN;
      closeDoor.style.fill = COLORS.BROWN;
      doorKnob.style.visibility = STATES.VISIBLE;
      text = text.replace(STATES.CLOSE, STATES.OPEN);
      doorButton.innerHTML = text;

      break;
  }
});

dayAndNightButton.addEventListener("click", () => {
  let text = dayAndNightButton.innerText;

  switch (text) {
    case TEXT.DAY:
      sky.animate(
        [
          { fill: COLORS.DARK_BLUE },
          { fill: COLORS.PINK },
          { fill: COLORS.LIGHT_BLUE },
        ],
        3000
      );
      sky.style.fill = COLORS.LIGHT_BLUE;
      stars.animate([{ opacity: 0.5 }, { opacity: 0 }, { opacity: 0 }], 3000);
      stars.style.visibility = STATES.VISIBLE;
      sun.animate(
        [
          { visibility: STATES.VISIBLE, transform: "rotateZ(45deg)" },
          { transform: " translate(20px)" },
          { transform: "rotate(-18deg)" },
        ],
        3000
      );

      front.forEach((frontEl) => {
        frontEl.animate(
          [{ filter: "brightness(60%)" }, { filter: "brightness(90%)" }],
          3000
        );
        frontEl.style.filter = "brightness(90%)";
      });

      windows.forEach((window) => {
        setTimeout(() => {
          window.style.fill = COLORS.WHITE;
        }, 1200);
      });

      if (doorButton.innerText === TEXT.CLOSE_DOOR) {
        setTimeout(() => {
          closeDoor.style.fill = COLORS.WHITE;
        }, 1200);
      }

      text = TEXT.NIGHT;
      dayAndNightButton.innerHTML = text;

      break;

    default:
      sky.animate(
        [{ fill: COLORS.LIGHT_BLUE }, { fill: COLORS.DARK_BLUE }],
        3000
      );
      sky.style.fill = COLORS.DARK_BLUE;
      stars.animate([{ opacity: 0 }, { opacity: 0.7 }, { opacity: 1 }], 3000);
      stars.style.visibility = STATES.VISIBLE;
      moon.animate(
        [
          { visibility: STATES.VISIBLE, transform: "rotateZ(45deg)" },
          { transform: " translate(20px)" },
          { transform: "rotate(-18deg)" },
        ],
        3000
      );
      front.forEach((frontEl) => {
        frontEl.animate(
          [{ filter: "brightness(90%)" }, { filter: "brightness(60%)" }],
          3000
        );
        frontEl.style.filter = "brightness(60%)";
      });

      windows.forEach((window) => {
        setTimeout(() => {
          window.style.fill = COLORS.YELLOW;
        }, 1200);
      });

      if (doorButton.innerText === TEXT.CLOSE_DOOR) {
        setTimeout(() => {
          closeDoor.style.fill = COLORS.YELLOW;
        }, 1200);
      }

      text = TEXT.DAY;
      dayAndNightButton.innerHTML = text;

      break;
  }
});

smokeButton.addEventListener("click", () => {
  smokes.forEach((smoke) => {
    smoke.animate(
      [
        {
          opacity: "0.1",
        },
        {
          transform: "translateY(-20px)",
          transform: "rotate(-5deg)",
          opacity: "0.4",
        },
        { opacity: "0.1" },
      ],
      3000
    );
    smoke.style.opacity = "0";
  });
});

catButton.addEventListener("click", () => {
  let start, previousTimeStamp;
  let done = false;
  let stepsDone = 0;

  function step(timeStamp) {
    if (start === undefined) {
      start = timeStamp;
    }
    const elapsed = timeStamp - start;

    if (previousTimeStamp !== timeStamp) {
      const count = Math.min(0.1 * elapsed, 670);
      const reversed = 600 - count;
      leftFootCat.style.transform = `translate(${reversed}px, 285px)`;
      rightFootCat.style.transform = `translate(${reversed}px, 285px)`;

      if (stepsDone % 2 == 0) {
        leftFootCat.style.visibility = STATES.HIDDEN;
        rightFootCat.style.visibility = STATES.VISIBLE;
      } else {
        leftFootCat.style.visibility = STATES.VISIBLE;
        rightFootCat.style.visibility = STATES.HIDDEN;
      }

      if (count === 670) {
        leftFootCat.style.visibility = STATES.HIDDEN;
        rightFootCat.style.visibility = STATES.HIDDEN;
        done = true;
      }
    }

    if (elapsed < 7000) {
      previousTimeStamp = timeStamp;
      if (!done) {
        stepsDone += 1;
      } else {
        stepsDone = 0;
        clearInterval(catWalkInterval);
      }
    }
  }

  let catWalkInterval = setInterval(() => {
    step(Date.now());
  }, 225);
});

openAndCloseWindow(rightWindowButton, openRightWindow, closeRightWindow);
openAndCloseWindow(leftWindowButton, openLeftWindow, closeLeftWindow);
openAndCloseWindow(sideWindowButton, openSideWindow, closeSideWindow);
