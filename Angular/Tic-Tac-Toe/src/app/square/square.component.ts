import { Component, Input } from '@angular/core';
import { Player } from '../enums';


@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.css'],
})
export class SquareComponent {
  @Input() value!: Player;
}
