import styled from "styled-components";
import { useState } from "react";
import { IPlayerData, IPlayersData } from "./Types";
import EditSVG from "../../svgs/Edit";

const Wrapper = styled.button`
  display: flex;
  justify-content: space-between;
  padding: 15px 20px;
  border-radius: 5px;
  background-color: #ffffff;
  color: black;
  font-size: 1.2rem;
  text-align: center;
  width: 45%;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);

  @media (max-width: 1600px) {
    padding: 10px 10px;
  }

  @media (max-width: 768px) {
    width: 80%;
  }

  input {
    padding: 5px;
    border-radius: 5px;
    border: 1px solid #000;
    font-size: 0.8rem;
    width: 80%;
  }

  .symbol {
    background-color: black;
    color: white;
    padding: 0px 10px;
    border-radius: 5px;
  }

  
`;

interface IPlayerProps {
  setPlayers: (func: (prev: IPlayersData) => IPlayersData) => void;
  player: IPlayerData;
  isActive?: boolean;
}

export default function Player({ setPlayers, player }: IPlayerProps) {
  const [editingPlayer, setEditingPlayer] = useState(false);

  const handleEditPlayer = () => {
    setEditingPlayer(true);
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newName = e.target.value;
    setPlayers((prev) => ({
      ...prev,
      [player.id]: {
        ...prev[player.id],
        name: newName,
      },
    }));
  };

  const handleBlur = () => {
    setEditingPlayer(false);
  };

  return (
    <Wrapper onClick={handleEditPlayer}>
      {editingPlayer ? (
        <input
          defaultValue={player.name}
          onChange={handleNameChange}
          onBlur={handleBlur}
          autoFocus
        />
      ) : (
        <>
          <EditSVG size="25px" />
          <span>{player.name}</span>
          <span className="symbol">{player.symbol}</span>
        </>
      )}
    </Wrapper>
  );
}
