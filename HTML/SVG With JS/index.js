const leftWindowButton = document.getElementById("openFrontLeftWindowButton");
const rightWindowButton = document.getElementById("openFrontRightWindowButton");
const sideWindowButton = document.getElementById("openSideWindowButton");
const doorButton = document.getElementById("openDoorButton");
const dayAndNightButton = document.getElementById("dayAndNightButton");

const openLeftWindow = document.getElementById("opened-front-left-window");
const closeLeftWindow = document.getElementById("closed-front-left-window");

const openRightWindow = document.getElementById("opened-front-right-window");
const closeRightWindow = document.getElementById("closed-front-right-window");

const openSideWindow = document.getElementById("opened-side-window");
const closeSideWindow = document.getElementById("closed-side-window");

const openDoor = document.getElementById("opened-door");
const closeDoor = document.getElementById("closed-door");
const doorKnob = document.getElementById("door-knob");

const sky = document.getElementById("sky");
const stars = document.getElementById("star-sky");
const sun = document.getElementById("sun-glow");
const moon = document.getElementById("moon");

const smokeButton = document.getElementById("smokeButton");
const smokes = document.querySelectorAll(".chimney-smoke");

const front = document.querySelectorAll(".front");

const windows = document.querySelectorAll(".window");

const catButton = document.getElementById("catButton");
const leftFootCat = document.getElementById("on-left-foot");
const rightFootCat = document.getElementById("on-right-foot");

let isAnimating = false;

function openAndCloseWindow(button, open, close) {
  button.addEventListener("click", () => {
    let text = button.innerText;

    if (!isAnimating) {
      isAnimating = true;
      if (text.includes("Open")) {
        text = text.replace("Open", "Close");
        button.innerHTML = text;
        open.style.visibility = "visible";
        close.style.visibility = "hidden";
        isAnimating = false;
      } else {
        open.style.visibility = "hidden";
        close.style.visibility = "visible";
        text = text.replace("Close", "Open");
        button.innerHTML = text;
        isAnimating = false;
      }
    }
  });
}

openAndCloseWindow(rightWindowButton, openRightWindow, closeRightWindow);
openAndCloseWindow(leftWindowButton, openLeftWindow, closeLeftWindow);
openAndCloseWindow(sideWindowButton, openSideWindow, closeSideWindow);

doorButton.addEventListener("click", () => {
  let text = doorButton.innerText;
  if (!isAnimating) {
    isAnimating = true;
    switch (text) {
      case "Open Door":
        openDoor.style.visibility = "visible";
        closeDoor.style.fill = "rgb(248, 248, 135)";
        doorKnob.style.visibility = "hidden";
        text = text.replace("Open", "Close");
        doorButton.innerHTML = text;
        isAnimating = false;
        break;

      default:
        openDoor.style.visibility = "hidden";
        closeDoor.style.fill = "rgb(95, 67, 15)";
        doorKnob.style.visibility = "visible";
        text = text.replace("Close", "Open");
        doorButton.innerHTML = text;
        isAnimating = false;
        break;
    }
  }
});

dayAndNightButton.addEventListener("click", () => {
  let text = dayAndNightButton.innerText;
  if (!isAnimating) {
    isAnimating = true;

    switch (text) {
      case "Day":
        sky.animate(
          [{ fill: "darkblue" }, { fill: "lightpink" }, { fill: "lightblue" }],
          3000
        );
        sky.style.fill = "lightblue";
        stars.animate([{ opacity: 0.5 }, { opacity: 0 }, { opacity: 0 }], 3000);
        stars.style.visibility = "hidden";
        sun.animate(
          [
            { visibility: "visible", transform: "rotateZ(45deg)" },
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
            window.style.fill = "whitesmoke";
          }, 1200);
        });

        if (doorButton.innerText === "Close Door") {
          setTimeout(() => {
            closeDoor.style.fill = "whitesmoke";
          }, 1200);
        }

        text = "Night";
        dayAndNightButton.innerHTML = text;
        isAnimating = false;
        break;

      default:
        sky.animate([{ fill: "lightblue" }, { fill: "darkblue" }], 3000);
        sky.style.fill = "darkblue";
        stars.animate([{ opacity: 0 }, { opacity: 0.7 }, { opacity: 1 }], 3000);
        stars.style.visibility = "visible";
        moon.animate(
          [
            { visibility: "visible", transform: "rotateZ(45deg)" },
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
            window.style.fill = "rgb(248, 248, 135)";
          }, 1200);
        });

        if (doorButton.innerText === "Close Door") {
          setTimeout(() => {
            closeDoor.style.fill = "rgb(248, 248, 135)";
          }, 1200);
        }

        text = "Day";
        dayAndNightButton.innerHTML = text;
        isAnimating = false;

        break;
    }
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
        { transform: "rotate3d(10deg)", opacity: "0.1" },
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
      const count = Math.min(0.1 * elapsed, 650);
      const reversed = 650 - count;
      leftFootCat.style.transform = `translate(${reversed}px, 285px)`;
      rightFootCat.style.transform = `translate(${reversed}px, 285px)`;

      if (stepsDone % 2 == 0) {
        leftFootCat.style.visibility = "hidden";
        rightFootCat.style.visibility = "visible";
      } else {
        leftFootCat.style.visibility = "visible";
        rightFootCat.style.visibility = "hidden";
      }

      if (count === 650) {
        leftFootCat.style.visibility = "hidden";
        rightFootCat.style.visibility = "hidden";
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
