import React, { ChangeEvent, useState } from "react";

type Props = {
  initialName: string;
  symbol: string;
};

const Player: React.FC<Props> = ({ initialName, symbol }) => {
  const [isEditing, setIsEditing] = useState(false);
  // const [playerInfo, setPlayerInfo] = useState({
  //   name,
  //   symbol,
  // });

  const [playerName, setPlayerName] = useState(initialName);

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>): void => {
    // setPlayerInfo({
    //   ...playerInfo,
    //   [e.target.name]: e.target.value,
    // });

    setPlayerName(e.target.value);
  };

  const handleOnEdit = () => {
    // Updating your state based on the previous value of that state, it is better to pass function to that stat state updating function
    // instead of setState(!state) use: setState((prevState) => !prevState) | Schedule by the React to be preformed in the future.
    setIsEditing((prevState) => !prevState);
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
    <li>
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleOnEdit}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
};
export default Player;
