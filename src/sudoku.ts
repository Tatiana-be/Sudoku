import { Board, GameState } from './types';

export class Sudoku {
  private board: Board;
  private state: GameState = GameState.IDLE;

  constructor() {
    this.board = Array(9).fill(null).map(() => Array(9).fill(0));
  }

  getBoard(): Board {
    return this.board;
  }

  setValue(row: number, col: number, value: number | null): boolean {
    if (row < 0 || row > 8 || col < 0 || col > 8) return false;
    this.board[row][col] = value;
    return true;
  }

  getState(): GameState {
    return this.state;
  }

  private isInRow(row: number, num: number): boolean {
    return this.board[row].includes(num);
  }

  private isInCol(col: number, num: number): boolean {
    for (let i = 0; i < 9; i++) {
      if (this.board[i][col] === num) return true;
    }
    return false;
  }

  private isInBox(row: number, col: number, num: number): boolean {
    const boxRow = Math.floor(row / 3) * 3;
    const boxCol = Math.floor(col / 3) * 3;
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (this.board[boxRow + i][boxCol + j] === num) return true;
      }
    }
    return false;
  }

  public isValid(row: number, col: number, num: number): boolean {
    if (num === 0) return true; // можно очистить
    return !this.isInRow(row, num) &&
           !this.isInCol(col, num) &&
           !this.isInBox(row, col, num);
  }
}
