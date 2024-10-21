import React, { ChangeEvent, useState } from "react";

type Props = {
  initialName: string;
  symbol: "X" | "O";
  className: string | undefined;
  onNameChange: (symbol: "X" | "O", newName: string) => void;
};

const Player: React.FC<Props> = ({
  initialName,
  symbol,
  className,
  onNameChange,
}) => {
  const [isEditing, setIsEditing] = useState(false);

  const [playerName, setPlayerName] = useState(initialName);

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setPlayerName(e.target.value);
  };

  const handleOnEdit = () => {
    // Updating your state based on the previous value of that state, it is better to pass function to that stat state updating function
    // instead of setState(!state) use: setState((prevState) => !prevState) | Schedule by the React to be preformed in the future.
    setIsEditing((prevState) => !prevState);

    if (isEditing) {
      onNameChange(symbol, playerName);
    }
  };

  let editablePlayerName = <span className="player-name">{playerName}</span>;

  if (isEditing) {
    editablePlayerName = (
      <input
        type="text"
        placeholder="Player name"
        value={playerName}
        onChange={handleOnChange}
        required
      />
    );
  }

  return (
    <li className={className}>
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleOnEdit}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
};
export default Player;
