import React from "react";
import type { GameBoardType, InitialState } from "../types";

type Props = {
  onSelectSquare: (rowIndex: number, colIndex: number) => void;
  board: InitialState | GameBoardType;
};

const GameBoard: React.FC<Props> = ({ onSelectSquare, board }) => {
  // if we use index as a key - that index is not tight to the data but to the position of the data!
  return (
    <ol id="game-board">
      {board?.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row?.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button
                  disabled={playerSymbol !== null}
                  onClick={() => onSelectSquare(rowIndex, colIndex)}
                >
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
};

export default GameBoard;
