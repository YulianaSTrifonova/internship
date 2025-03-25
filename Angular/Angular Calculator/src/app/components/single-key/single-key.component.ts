import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-single-key',
  templateUrl: './single-key.component.html',
  styleUrl: './single-key.component.css',
})
export class SingleKeyComponent {
  @Input() button: any;
  @Output() buttonClick = new EventEmitter<string>();

  onClick() {
    this.buttonClick.emit(this.button.displayName);
  }
}
