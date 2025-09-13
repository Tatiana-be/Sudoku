export interface Cell {
  row: number;
  col: number;
  value: number | null;
}

export type Board = number[][];
export enum GameState {
  IDLE,
  PLAYING,
  WIN,
  LOSE
}
