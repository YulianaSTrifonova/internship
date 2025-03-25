import { Component } from '@angular/core';
import { CalculatorService } from './calculator.service';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css',
  providers: [CalculatorService],
})
export class CalculatorComponent {
  constructor(public _calculatorService: CalculatorService) {}

  handleKeyClick(pressedKey: string) {
    this._calculatorService.handleKeyClick(pressedKey);
  }
}
