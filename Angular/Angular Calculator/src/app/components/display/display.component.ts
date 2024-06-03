import { Component, Input } from '@angular/core';
import { Reverse_Position_Operations } from '../../constants/enums';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrl: './display.component.css',
})
export class DisplayComponent {
  @Input()
  previousOperand!: string;
  @Input()
  currentOperand!: string;
  @Input()
  operation!: string;

  get displayOperation() {
    return Reverse_Position_Operations.includes(this.operation)
      ? `${this.operation} ${this.previousOperand}`
      : `${this.previousOperand} ${this.operation}`;
  }
}
