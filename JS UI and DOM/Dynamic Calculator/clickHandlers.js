function numberButtonsClickHandler(event) {
  this.controller.appendNumber(event.target.innerText);
}

function operationButtonsClickHandler(event) {
  this.controller.chooseOperation(event.target.innerText);
}

function deleteButtonClickHandler(event) {
  this.controller.delete(event);
}

function clearAllClickHandler(event) {
  this.controller.clearAll(event);
}

function clearLastClickHandler(event) {
  this.controller.clearLast(event);
}

function equalsButtonClickHandler(event) {
  this.controller.compute(event);
}

function plusMinusButtonClickHandler(event) {
  this.controller.reverse(event);
}
