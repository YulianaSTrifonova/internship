import { Component, Output, EventEmitter } from '@angular/core';
import { calculatorKeys } from '../../constants/calculatorKeys';

@Component({
  selector: 'app-keys',
  templateUrl: './keys.component.html',
  styleUrls: ['./keys.component.css'],
})
export class KeysComponent {
  @Output() clickHandler = new EventEmitter<string>();
  calculatorKeys = calculatorKeys;

  handleClick(pressedKey: string) {
    this.clickHandler.emit(pressedKey);
  }
}
