import { Component, OnInit } from '@angular/core';
import { Result, Sounds } from '../../enums';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrl: './board.component.css',
})
export class BoardComponent implements OnInit {
  size: number = 10;
  cells: {
    isMine: boolean;
    neighborMines: number;
    opened: boolean;
    flagged: boolean;
  }[][] = [];
  gameOver: boolean = false;
  text: string | undefined;

  ngOnInit(): void {
    this.generateBoard();
  }

  generateBoard(): void {
    for (let x = 0; x < this.size; x++) {
      this.cells[x] = [];
      for (let y = 0; y < this.size; y++) {
        this.cells[x][y] = {
          isMine: false,
          neighborMines: 0,
          opened: false,
          flagged: false,
        };
      }
    }

    for (let m = 0; m < this.size; m++) {
      let x, y;
      do {
        x = Math.floor(Math.random() * this.size);
        y = Math.floor(Math.random() * this.size);
      } while (this.cells[x][y].isMine);
      this.cells[x][y].isMine = true;
    }

    for (let x = 0; x < this.size; x++) {
      for (let y = 0; y < this.size; y++) {
        if (!this.cells[x][y].isMine) {
          this.cells[x][y].neighborMines = this.countNeighborMines(x, y);
        }
      }
    }
  }

  countNeighborMines(x: number, y: number): number {
    let count = 0;
    for (let adjacentX = -1; adjacentX <= 1; adjacentX++) {
      for (let adjacentY = -1; adjacentY <= 1; adjacentY++) {
        const neighborX = x + adjacentX;
        const neighborY = y + adjacentY;
        if (
          neighborX >= 0 &&
          neighborX < this.size &&
          neighborY >= 0 &&
          neighborY < this.size
        ) {
          if (this.cells[neighborX][neighborY].isMine) {
            count++;
          }
        }
      }
    }
    return count;
  }

  revealCell(x: number, y: number): void {
    if (this.gameOver || this.cells[x][y].opened || this.cells[x][y].flagged) {
      return;
    }

    this.cells[x][y].opened = true;

    if (this.cells[x][y].isMine) {
      this.playAudio(Sounds.EXPLOSION);
      this.revealAllMines();
      this.text = Result.GAME_OVER;
      this.gameOver = true;
    } else {
      const neighborMines = this.countNeighborMines(x, y);
      this.cells[x][y].neighborMines = neighborMines;
      if (neighborMines === 0) {
        this.revealNeighboringCells(x, y);
      }
    }
    this.checkWin();
  }

  flagCell(x: number, y: number): void {
    if (this.gameOver || this.cells[x][y].opened) {
      return;
    }
    this.playAudio(Sounds.FLAG);
    this.cells[x][y].flagged = !this.cells[x][y].flagged;
  }

  revealNeighboringCells(x: number, y: number): void {
    for (let adjacentX = -1; adjacentX <= 1; adjacentX++) {
      for (let adjacentY = -1; adjacentY <= 1; adjacentY++) {
        const neighborX = x + adjacentX;
        const neighborY = y + adjacentY;
        if (
          neighborX >= 0 &&
          neighborX < this.size &&
          neighborY >= 0 &&
          neighborY < this.size
        ) {
          this.revealCell(neighborX, neighborY);
        }
      }
    }
  }

  revealAllMines(): void {
    for (let x = 0; x < this.size; x++) {
      for (let y = 0; y < this.size; y++) {
        if (this.cells[x][y].isMine) {
          this.cells[x][y].opened = true;
        }
      }
    }
  }

  checkWin(): void {
    for (let x = 0; x < this.size; x++) {
      for (let y = 0; y < this.size; y++) {
        if (
          (!this.cells[x][y].isMine && !this.cells[x][y].opened) ||
          (this.cells[x][y].isMine && !this.cells[x][y].flagged)
        ) {
          return;
        }
      }
    }
    this.playAudio(Sounds.SUCCESS);
    this.text = Result.WIN;
  }

  playAudio(sound: string) {
    let audio = new Audio();
    audio.src = `../../../assets/sounds/${sound}.mp3`;
    audio.load();
    audio.play();
  }

  newGame(): void {
    this.generateBoard();
    this.gameOver = false;
    this.text = Result.EMPTY;
  }
}
