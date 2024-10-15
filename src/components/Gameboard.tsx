import React from "react";
import { GameTurns } from "../types";

type InitialState = null[][];

const initialGameBoard: InitialState = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

// type Props = {
//   handleCurrentActivePlayer: () => void;
//   currentActivePlayer: "X" | "O";
// };

type Props = {
  onSelectSquare: (rowIndex: number, colIndex: number) => void;
  turns: GameTurns[];
};

type GameBoard = ("X" | "O" | null)[][];

const GameBoard: React.FC<Props> = ({ onSelectSquare, turns }) => {
  // const [gameBoard, setGameBoard] =
  //   useState<(string | null)[][]>(initialGameBoard);
  //
  // const handleSelectSquare = (rowIndex: number, colIndex: number): void => {
  //   setGameBoard((prevGameBoard) => {
  //     // Updating on a immutable way:
  //     // this way we're creating a new copy of the array, and later on we update values of a newly created array, not the original one!
  //     const updatedGameBoard = [
  //       ...prevGameBoard.map((prevRow) => [...prevRow]),
  //     ];
  //
  //     updatedGameBoard[rowIndex][colIndex] = currentActivePlayer;
  //
  //     return updatedGameBoard;
  //   });
  //
  //   handleCurrentActivePlayer();
  // };

  const gameBoard: InitialState | GameBoard = initialGameBoard;

  for (const turn of turns) {
    const { square, player } = turn;
    const { row, col } = square;

    gameBoard[row][col] = player;
  }

  // if we use index as a key - that index is not tight to the data but to the position of the data!
  return (
    <ol id="game-board">
      {gameBoard?.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row?.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button onClick={() => onSelectSquare(rowIndex, colIndex)}>
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
