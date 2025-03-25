import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Emoji } from '../../enums';

@Component({
  selector: 'app-cell',
  templateUrl: './cell.component.html',
  styleUrl: './cell.component.css',
})
export class CellComponent {
  @Input() isMine: boolean = false;
  @Input() neighboringMines: number = 0;
  @Input() opened: boolean = false;
  @Input() flagged: boolean = false;
  @Output() cellClick: EventEmitter<void> = new EventEmitter<void>();
  @Output() cellFlag: EventEmitter<void> = new EventEmitter<void>();

  onClick(): void {
    if (!this.opened && !this.flagged) {
      this.cellClick.emit();
    }
  }

  onRightClick(event: MouseEvent): void {
    event.preventDefault();
    if (!this.opened) {
      this.cellFlag.emit();
    }
  }

  get cellValue(): string {
    if (this.opened) {
      return this.isMine
        ? Emoji.BOMB
        : this.neighboringMines === 0
        ? ''
        : this.neighboringMines.toString();
    } else if (this.flagged) {
      return Emoji.FLAG;
    } else {
      return Emoji.EMPTY;
    }
  }
}
