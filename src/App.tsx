import Player from "./components/Player.tsx";
import GameBoard from "./components/Gameboard.tsx";
import { useState } from "react";

function App() {
  const [activePlayer, setActivePlayer] = useState<"X" | "O">("X");

  const handleCurrentPlayer = () => {
    setActivePlayer((currentPlayer) => (currentPlayer === "X" ? "O" : "X"));
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
        <GameBoard
          handleCurrentActivePlayer={handleCurrentPlayer}
          currentActivePlayer={activePlayer}
        />
      </div>
      LOGS
    </main>
  );
}

export default App;
