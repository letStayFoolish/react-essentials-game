import { GameBoardType, GameTurns, InitialState, PlayerNames } from "../types";
import { INITIAL_GAME_BOARD, WINNING_COMBINATIONS } from "../constants";

export function handleCurrentPlayer(gameTurns: GameTurns[]) {
  let currentPlayer: "X" | "O" = "X";

  if (gameTurns.length > 0 && gameTurns[0].player === "X") {
    currentPlayer = "O";
  }

  return currentPlayer;
}

export function deriveWinner(
  gameBoard: GameBoardType,
  playerNames: PlayerNames,
) {
  let winner = null;

  for (const combination of WINNING_COMBINATIONS) {
    const firstSquareSymbol = gameBoard[combination[0].row][combination[0].col];
    const secondSquareSymbol =
      gameBoard[combination[1].row][combination[1].col];
    const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].col];

    console.log({ firstSquareSymbol, secondSquareSymbol, thirdSquareSymbol });

    if (
      firstSquareSymbol &&
      firstSquareSymbol === secondSquareSymbol &&
      firstSquareSymbol === thirdSquareSymbol
    ) {
      winner = playerNames[firstSquareSymbol];
    }
  }

  return winner;
}

export function deriveGameBoard(gameTurns: GameTurns[]) {
  const gameBoard: InitialState | GameBoardType = [
    ...INITIAL_GAME_BOARD.map((array) => [...array]),
  ];

  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;

    gameBoard[row][col] = player;
  }

  return gameBoard;
}
