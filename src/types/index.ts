export type GameTurns = {
  square: {
    row: number;
    col: number;
  };
  player: "X" | "O";
};

export type GameBoardType = ("X" | "O" | null)[][];

export type InitialState = null[][];

export type PlayerNames = { X: string; O: string };
