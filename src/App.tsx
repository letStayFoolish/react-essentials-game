import Player from "./components/Player.tsx";
import GameBoard from "./components/Gameboard.tsx";
import { useState } from "react";
import Log from "./components/Log.tsx";
import type { GameTurns } from "./types";
import { handleCurrentPlayer } from "./utils";

function App() {
  // const [activePlayer, setActivePlayer] = useState<"X" | "O">("X");
  const [gameTurns, setGameTurns] = useState<GameTurns[]>([]);
  const activePlayer = handleCurrentPlayer(gameTurns);

  const handleSelectedSquare = (rowIndex: number, colIndex: number): void => {
    // setActivePlayer((currentPlayer) => (currentPlayer === "X" ? "O" : "X"));

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
        <GameBoard onSelectSquare={handleSelectedSquare} turns={gameTurns} />
      </div>
      <Log gameTurns={gameTurns} />
    </main>
  );
}

export default App;
