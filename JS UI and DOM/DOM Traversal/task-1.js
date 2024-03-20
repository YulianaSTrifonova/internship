function solve() {
  let selectAside = document.querySelector("aside");

  let nonSpecialAnchor = [...document.querySelectorAll("a")].filter(
    (child) => selectAside.contains(child) && !child.classList.contains("special-anchor") 
  );
  nonSpecialAnchor.forEach((child) => console.log(child.innerText));

  console.log(" ");
  let specialAnchor = document.querySelectorAll(".special-anchor");
  specialAnchor.forEach((child) => console.log(child.innerText));

  console.log(" ");
  let redSpecialAnchor = document.querySelectorAll(
    ".special-anchor[style*='background-color: red']"
  );
  redSpecialAnchor.forEach((child) => console.log(child.innerText));

  console.log(" ");
  let selectMain = document.getElementById("main-element-id");

  let anchors = [...document.querySelectorAll("a.special-anchor")].filter((anchor) => selectMain.contains(anchor) && anchor.style.backgroundColor !== "red");
  anchors.forEach((anchor) => console.log(anchor.innerText));
}
