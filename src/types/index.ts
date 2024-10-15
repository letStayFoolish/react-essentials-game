export type GameTurns = {
  square: {
    row: number;
    col: number;
  };
  player: "X" | "O";
};

export type GameBoardType = ("X" | "O" | null)[][];
