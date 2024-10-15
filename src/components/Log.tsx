import React from "react";
import { GameTurns } from "../types";

type Props = {
  gameTurns: GameTurns[];
};

const Log: React.FC<Props> = ({ gameTurns }) => {
  return (
    <ol id="log">
      {gameTurns &&
        gameTurns.map((turn) => (
          <li key={turn.player + turn.square.row + turn.square.col}>
            Player: {turn.player}, selected row: {turn.square.row + 1}, column:{" "}
            {turn.square.col + 1}
          </li>
        ))}
    </ol>
  );
};

export default Log;
