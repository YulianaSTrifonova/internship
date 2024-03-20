export function numberButtonsClickHandler(event: Event): void {
  this.controller.appendNumber((event.target as HTMLElement).innerText);
}

export function operationButtonsClickHandler(event: Event): void {
  this.controller.chooseOperation((event.target as HTMLElement).innerText);
}

export function deleteButtonClickHandler(event: Event): void {
  this.controller.delete(event);
}

export function clearAllClickHandler(event: Event): void {
  this.controller.clearAll(event);
}

export function clearLastClickHandler(event: Event): void {
  this.controller.clearLast(event);
}

export function equalsButtonClickHandler(event: Event): void {
  this.controller.compute(event);
}

export function plusMinusButtonClickHandler(event: Event): void {
  this.controller.reverse(event);
}
