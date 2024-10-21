export type GameTurns = {
  square: {
    row: number;
    col: number;
  };
  player: SymbolType;
};

export type GameBoardType = (SymbolType | null)[][];

export type InitialState = null[][];

export type PlayerNames = { X: string; O: string };

export type SymbolType = "X" | "O";
