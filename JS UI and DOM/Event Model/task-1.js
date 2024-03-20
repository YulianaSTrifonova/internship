function solve() {
    return function (selector) {
        var targetElement;
        if (typeof selector === "string") {
            targetElement = document.getElementById(selector);
        }
        else if (selector instanceof Element) {
            targetElement = selector;
        }
        else {
            throw new Error("The id is neither string nor a DOM element");
        }
        if (!targetElement) {
            throw new Error("The provided DOM element is non-existent");
        }
        var buttonOrContentElement = targetElement.querySelectorAll(".button, .content");
        buttonOrContentElement.forEach(function (element) {
            if (element.classList.contains("button")) {
                element.innerText = "hide";
                element.addEventListener("click", handleButtonClick);
            }
        });
        function handleButtonClick(event) {
            var clickedButton = event.target;
            var contentElement = findContentElement(clickedButton);
            if (contentElement) {
                if (contentElement.style.display === "") {
                    contentElement.style.display = "none";
                    clickedButton.innerText = "show";
                }
                else {
                    contentElement.style.display = "";
                    clickedButton.innerText = "hide";
                }
            }
        }
        function findContentElement(button) {
            var currentElement = button.previousElementSibling;
            while (currentElement && !currentElement.classList.contains("content")) {
                currentElement = currentElement.previousElementSibling;
            }
            return currentElement;
        }
    };
}
