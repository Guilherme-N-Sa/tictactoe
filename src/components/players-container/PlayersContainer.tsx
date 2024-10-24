import styled from "styled-components";
import Player from "./Player";
import { IPlayersData } from "./Types";

const Wrapper = styled.div`
  display: flex;
  gap: 10px;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 10px;

  @media (max-width: 1600px) {
    margin-bottom: 5px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 5px;
  }
`;

interface IPlayersContainerProps {
  players: IPlayersData;
  setPlayers: (func: (prev: IPlayersData) => IPlayersData) => void;
  activePlayer: string;
}

export default function PlayersContainer({
  players,
  setPlayers,
  activePlayer,
}: IPlayersContainerProps) {
  return (
    <Wrapper>
      {Object.values(players).map((player) => (
        <Player
          key={player.symbol}
          setPlayers={setPlayers}
          player={player}
          isActive={activePlayer === player.symbol}
        />
      ))}
    </Wrapper>
  );
}
