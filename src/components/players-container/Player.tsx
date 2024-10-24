import styled from "styled-components";
import { useState, useCallback } from "react";
import { IPlayerData, IPlayersData } from "./Types";
import EditSVG from "../../svgs/Edit";

const Wrapper = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
  border-radius: 5px;
  background-color: #ffffff;
  color: black;
  font-size: 1.2rem;
  width: 45%;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s;

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
    width: 90%;
    margin: auto;
  }

  .symbol {
    background-color: black;
    color: white;
    padding: 0px 10px;
    border-radius: 5px;
  }

  &:hover {
    cursor: pointer;
    background-color: #f0f0f0;
  }

  &.active {
    border: 2px solid black;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  }
`;

interface IPlayerProps {
  setPlayers: (func: (prev: IPlayersData) => IPlayersData) => void;
  player: IPlayerData;
  isActive?: boolean;
}

export default function Player({ setPlayers, player, isActive }: IPlayerProps) {
  const [editingPlayer, setEditingPlayer] = useState<boolean>(false);

  const handleEditPlayer = useCallback(() => {
    setEditingPlayer(true);
  }, []);

  const handleNameChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const newName = e.target.value;
      setPlayers((prev) => ({
        ...prev,
        [player.symbol]: {
          ...prev[player.symbol],
          name: newName,
        },
      }));
    },
    [setPlayers, player.symbol]
  );

  const handleBlur = useCallback(() => {
    setEditingPlayer(false);
  }, []);

  return (
    <Wrapper onClick={handleEditPlayer} className={isActive ? "active" : ""}>
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
