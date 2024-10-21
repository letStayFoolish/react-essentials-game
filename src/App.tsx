import Player from "./components/Player.tsx";
import GameBoard from "./components/Gameboard.tsx";
import { useState } from "react";
import Log from "./components/Log.tsx";
import { GameTurns, PlayerNames, SymbolType } from "./types";
import { deriveGameBoard, deriveWinner, handleCurrentPlayer } from "./utils";
import GameOver from "./components/GameOver.tsx";
import { PLAYERS } from "./constants";

function App() {
  const [gameTurns, setGameTurns] = useState<GameTurns[]>([]);
  const [playerNames, setPlayerNames] = useState<PlayerNames>(PLAYERS);
  const activePlayer = handleCurrentPlayer(gameTurns);

  const gameBoard = deriveGameBoard(gameTurns);

  const winner = deriveWinner(gameBoard, playerNames);

  const isDraw = gameTurns.length === 9 && !winner;

  const handleSelectedSquare = (rowIndex: number, colIndex: number): void => {
    setGameTurns((prevTurns) => {
      const updatedTurns = [
        { square: { row: rowIndex, col: colIndex }, player: activePlayer },
        ...prevTurns,
      ];

      return updatedTurns;
    });
  };

  const handleRematch = () => {
    setGameTurns([]);

    // In case we didn't create a deep copy of an initial array when setting the game board, we have to add this:
    // for (let row = 0; row < 3; row++) {
    //   for (let col = 0; col < 3; col++) {
    //     gameBoard[row][col] = null;
    //   }
    // }
  };

  const handleOnPlayerNameChange = (symbol: SymbolType, newName: string) => {
    setPlayerNames((prevState) => ({ ...prevState, [symbol]: newName }));
  };

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            initialName={PLAYERS.X}
            symbol="X"
            className={activePlayer === "X" ? "active" : undefined}
            onNameChange={handleOnPlayerNameChange}
          />
          <Player
            initialName={PLAYERS.O}
            symbol="O"
            className={activePlayer === "O" ? "active" : undefined}
            onNameChange={handleOnPlayerNameChange}
          />
        </ol>
        {(winner || isDraw) && (
          <GameOver
            handleRematch={handleRematch}
            winner={winner}
            isDraw={isDraw}
          />
        )}

        <GameBoard onSelectSquare={handleSelectedSquare} board={gameBoard} />
      </div>
      <Log gameTurns={gameTurns} />
    </main>
  );
}

export default App;
