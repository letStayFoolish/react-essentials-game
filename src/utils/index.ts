import type { GameTurns } from "../types";

export function handleCurrentPlayer(gameTurns: GameTurns[]) {
  let currentPlayer: "X" | "O" = "X";

  if (gameTurns.length > 0 && gameTurns[0].player === "X") {
    currentPlayer = "O";
  }

  return currentPlayer;
}
