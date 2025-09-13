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
}
