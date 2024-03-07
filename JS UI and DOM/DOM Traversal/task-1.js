function solve() {
    let selectAside = document.querySelector("aside");
    let nonSpecialAnchor = Array.from(selectAside.children).filter(
        (child) => !child.classList.contains("special-anchor"));
    nonSpecialAnchor.forEach((child) => console.log(child.innerText));

    console.log(" ");
    let specialAnchor = document.querySelectorAll(".special-anchor");
    specialAnchor.forEach((child) => console.log(child.innerText));

    console.log(" ");
    let redSpecialAnchor = document.querySelectorAll(".special-anchor[style*='background-color: red']");
    redSpecialAnchor.forEach((child) => console.log(child.innerText));

    console.log(" ");
    let selectMain = document.getElementById("main-element-id");

    let anchor = Array.from(selectMain.querySelectorAll("a.special-anchor")).filter(
        (anchor) => anchor.style.backgroundColor !== "red");
  anchor.forEach((anchor) => console.log(anchor.innerText));
}
