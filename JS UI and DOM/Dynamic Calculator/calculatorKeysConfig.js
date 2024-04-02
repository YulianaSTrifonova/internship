const calculatorKeysConfig = [
  [
    {
      displayName: "C",
      className: ["btn"],
      clickHandler: "clearAllClickHandler",
    },
    {
      displayName: "CE",
      className: ["btn"],
      clickHandler: "clearLastClickHandler",
    },
    {
      displayName: "←",
      className: ["btn"],
      clickHandler: "deleteButtonClickHandler",
    },
    { displayName: "", className: ["btn", "disabled"] },
    { displayName: "", className: ["btn", "disabled"] },
    {
      displayName: "±",
      className: ["btn"],
      clickHandler: "plusMinusButtonClickHandler",
    },
    {
      displayName: "√",
      className: ["btn"],
      clickHandler: "operationButtonsClickHandler",
    },
  ],
  [
    { displayName: "", className: ["btn", "disabled"] },
    { displayName: "", className: ["btn", "disabled"] },
    {
      displayName: "7",

      className: ["btn"],
      clickHandler: "numberButtonsClickHandler",
    },
    {
      displayName: "8",

      className: ["btn"],
      clickHandler: "numberButtonsClickHandler",
    },
    {
      displayName: "9",
      className: ["btn"],
      clickHandler: "numberButtonsClickHandler",
    },
    {
      displayName: "/",
      className: ["btn"],
      clickHandler: "operationButtonsClickHandler",
    },
    {
      displayName: "%",
      className: ["btn"],
      clickHandler: "operationButtonsClickHandler",
    },
  ],
  [
    {
      displayName: "RoL",
      className: ["btn"],
      clickHandler: "operationButtonsClickHandler",
    },
    {
      displayName: "RoR",
      className: ["btn"],
      clickHandler: "operationButtonsClickHandler",
    },
    {
      displayName: "4",
      className: ["btn"],
      clickHandler: "numberButtonsClickHandler",
    },
    {
      displayName: "5",

      className: ["btn"],
      clickHandler: "numberButtonsClickHandler",
    },
    {
      displayName: "6",
      className: ["btn"],
      clickHandler: "numberButtonsClickHandler",
    },
    {
      displayName: "*",
      className: ["btn"],
      clickHandler: "operationButtonsClickHandler",
    },
    {
      displayName: "1/x",
      className: ["btn"],
      clickHandler: "operationButtonsClickHandler",
    },
  ],
  [
    {
      displayName: "Or",
      className: ["btn"],
      clickHandler: "operationButtonsClickHandler",
    },
    {
      displayName: "Xor",
      className: ["btn"],
      clickHandler: "operationButtonsClickHandler",
    },
    {
      displayName: "1",
      className: ["btn"],
      clickHandler: "numberButtonsClickHandler",
    },
    {
      displayName: "2",
      className: ["btn"],
      clickHandler: "numberButtonsClickHandler",
    },
    {
      displayName: "3",
      className: ["btn"],
      clickHandler: "numberButtonsClickHandler",
    },
    {
      displayName: "-",
      className: ["btn"],
      clickHandler: "operationButtonsClickHandler",
    },
    {
      displayName: "=",
      rowspan: 2,
      className: ["btn", "tall"],
      clickHandler: "equalsButtonClickHandler",
    },
  ],
  [
    {
      displayName: "Not",
      className: ["btn"],
      clickHandler: "operationButtonsClickHandler",
    },
    {
      displayName: "And",
      className: ["btn"],
      clickHandler: "operationButtonsClickHandler",
    },
    {
      displayName: "0",
      colspan: 2,
      className: ["btn", "long"],
      clickHandler: "numberButtonsClickHandler",
    },
    {
      displayName: ".",
      className: ["btn"],
      clickHandler: "numberButtonsClickHandler",
    },
    {
      displayName: "+",
      className: ["btn"],
      clickHandler: "operationButtonsClickHandler",
    },
  ],
];
