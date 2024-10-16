import Player from "./components/Player.tsx";
import GameBoard from "./components/Gameboard.tsx";
import { useState } from "react";
import Log from "./components/Log.tsx";
import type { GameBoardType, GameTurns, InitialState } from "./types";
import { handleCurrentPlayer } from "./utils";
import { initialGameBoard, WINNING_COMBINATIONS } from "./constants";

function App() {
  const [gameTurns, setGameTurns] = useState<GameTurns[]>([]);
  const activePlayer = handleCurrentPlayer(gameTurns);

  const gameBoard: InitialState | GameBoardType = initialGameBoard;

  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;

    gameBoard[row][col] = player;
  }

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
      winner = firstSquareSymbol;
    }
  }

  const handleSelectedSquare = (rowIndex: number, colIndex: number): void => {
    setGameTurns((prevTurns) => {
      const updatedTurns = [
        { square: { row: rowIndex, col: colIndex }, player: activePlayer },
        ...prevTurns,
      ];

      return updatedTurns;
    });
  };

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            initialName="Player 1"
            symbol="X"
            className={activePlayer === "X" ? "active" : undefined}
          />
          <Player
            initialName="Player 2"
            symbol="O"
            className={activePlayer === "O" ? "active" : undefined}
          />
        </ol>
        {winner && <p>You won, {winner}!</p>}
        <GameBoard onSelectSquare={handleSelectedSquare} board={gameBoard} />
      </div>
      <Log gameTurns={gameTurns} />
    </main>
  );
}

export default App;
