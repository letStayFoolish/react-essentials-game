import React, { ChangeEvent, useState } from "react";

type Props = {
  name: string;
  symbol: string;
};

const Player: React.FC<Props> = ({ name, symbol }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [playerInfo, setPlayerInfo] = useState({
    name,
    symbol,
  });

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setPlayerInfo({
      ...playerInfo,
      [e.target.name]: e.target.value,
    });
  };

  const handleOnEdit = () => {
    setIsEditing((prevState) => !prevState);
  };

  let playerName = <span className="player-name">{name}</span>;

  if (isEditing) {
    playerName = (
      <input
        type="text"
        name="name"
        placeholder="Player name"
        value={playerInfo.name}
        onChange={handleOnChange}
      />
    );
  }

  return (
    <li>
      <span className="player">
        {playerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleOnEdit}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
};
export default Player;
