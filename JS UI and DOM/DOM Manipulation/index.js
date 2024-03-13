var ERROR;
(function (ERROR) {
    ERROR["INVALID_PARAMETER"] = "Invalid parameter";
    ERROR["INVALID_ID"] = "Invalid id";
    ERROR["INVALID_ELEMENT"] = "Invalid element";
    ERROR["INVALID_CONTENT"] = "Invalid content";
})(ERROR || (ERROR = {}));
var DATATYPE;
(function (DATATYPE) {
    DATATYPE["STRING"] = "string";
    DATATYPE["NUMBER"] = "number";
})(DATATYPE || (DATATYPE = {}));
var HTML_ELEMENT;
(function (HTML_ELEMENT) {
    HTML_ELEMENT["DIV"] = "div";
})(HTML_ELEMENT || (HTML_ELEMENT = {}));
function solve() {
    return function (element, contents) {
        var isValidID = function (id) {
            return document.getElementById(id) ? true : false;
        };
        if (!element || !contents) {
            throw new Error(ERROR.INVALID_PARAMETER);
        }
        if (!isValidID) {
            throw new Error(ERROR.INVALID_ID);
        }
        var selectElement = 
        // ???
        typeof element === DATATYPE.STRING
            ? document.getElementById(element)
            : element;
        if (!selectElement) {
            throw new Error(ERROR.INVALID_ELEMENT);
        }
        selectElement.innerHTML = "";
        contents.forEach(function (content) {
            if (typeof content !== DATATYPE.STRING &&
                typeof content !== DATATYPE.NUMBER) {
                throw new Error(ERROR.INVALID_CONTENT);
            }
            var divElement = document.createElement(HTML_ELEMENT.DIV);
            divElement.textContent = content.toString();
            divElement.appendChild(divElement);
        });
    };
}
