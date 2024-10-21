import React from "react";

type Props = {
  winner: string | null;
  isDraw?: boolean;
  handleRematch: () => void;
};

const GameOver: React.FC<Props> = ({ winner, isDraw, handleRematch }) => {
  return (
    <div id="game-over">
      <h2>Game Over!</h2>
      {isDraw ? <p>It is a draw!</p> : <p>{winner} won!</p>}
      <p>
        <button onClick={handleRematch}>Rematch!!</button>
      </p>
    </div>
  );
};

export default GameOver;
