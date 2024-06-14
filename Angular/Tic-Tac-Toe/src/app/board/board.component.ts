import { Component, OnInit } from '@angular/core';
import { Lines, Player, nextMove } from '../enums';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrl: './board.component.css',
})
export class BoardComponent implements OnInit {
  squares!: Player[];
  ticOrTac!: Player;
  winner!: Player | null;

  constructor() {}

  ngOnInit(): void {
    this.newGame();
  }

  newGame() {
    this.squares = Array(9).fill(Player.None);
    this.winner = null;
    this.ticOrTac = Player.X;
  }

  makeMove(index: number) {
    const isPossibleMove = this.squares[index] === Player.None && !this.winner;

    if (isPossibleMove) {
      this.squares[index] = this.ticOrTac;
      this.ticOrTac = nextMove[this.ticOrTac];
    }

    this.winner = this.calculateWinner();
  }

  calculateWinner(): Player | null {
    for (const [a, b, c] of Lines) {
      
      const someoneHasWon =
        this.squares[a] !== Player.None &&
        this.squares[a] === this.squares[b] &&
        this.squares[a] === this.squares[c];

      if (someoneHasWon) {
        return this.squares[a];
      }
    }
    return null;
  }
}
