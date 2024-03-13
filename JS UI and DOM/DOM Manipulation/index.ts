enum ERROR {
  INVALID_PARAMETER = "Invalid parameter",
  INVALID_ID = "Invalid id",
  INVALID_ELEMENT = "Invalid element",
  INVALID_CONTENT = "Invalid content",
}

enum DATATYPE {
  STRING = "string",
  NUMBER = "number",
}

enum HTML_ELEMENT {
  DIV = "div",
}

type id = string;

function solve() {
  return function (element: id | Element, contents: Array<string | number>) {
    const isValidID = (id: string): boolean =>
      document.getElementById(id) ? true : false;

    if (!element || !contents) {
      throw new Error(ERROR.INVALID_PARAMETER);
    }

    if (!isValidID) {
      throw new Error(ERROR.INVALID_ID);
    }

    const selectElement =
    // ???
      typeof element === DATATYPE.STRING
        ? document.getElementById(element as string)
        : element as Element

    if (!selectElement) {
      throw new Error(ERROR.INVALID_ELEMENT);
    }

    selectElement.innerHTML = "";

    contents.forEach((content) => {
      if (
        typeof content !== DATATYPE.STRING &&
        typeof content !== DATATYPE.NUMBER
      ) {
        throw new Error(ERROR.INVALID_CONTENT);
      }

      const divElement = document.createElement(HTML_ELEMENT.DIV);
      divElement.textContent = content.toString();
      divElement.appendChild(divElement);
    });
  };
}
