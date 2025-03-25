import { Component } from '@angular/core';
import { BoardComponent } from './components/board/board.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular-minesweeper';
}
