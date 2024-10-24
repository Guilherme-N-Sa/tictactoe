import styled from "styled-components";
import PlayersContainer from "./components/players-container/PlayersContainer";
import ButtonContainer from "./components/ButtonsContainer";
import GameBoard from "./components/GameBoard";
import Header from "./components/Header";
import { useState } from "react";
import { IPlayersData } from "./components/players-container/Types";

const Wrapper = styled.div`
  background-image: url("bg.webp");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  position: relative;
`;

const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.85);
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;

const GameZone = styled.div`
  width: 50%;
  max-width: 500px;
  height: auto;
  background-color: rgba(255, 255, 255, 0.7);
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  border-radius: 10px;
  z-index: 1;
  padding: 30px;

  @media (max-width: 1600px) {
    padding: 15px;
    max-width: 400px;
  }
`;

const initialBoard = new Array(3).fill(null).map(() => new Array(3).fill(null));

function App() {
  const [players, setPlayers] = useState<IPlayersData>({
    1: {
      id: 1,
      name: "Player 1",
      symbol: "X",
    },
    2: {
      id: 2,
      name: "Player 2",
      symbol: "O",
    },
  });
  const board = initialBoard;
  const activePlayer = 1;

  return (
    <Wrapper>
      <Overlay />
      <Header />
      <GameZone>
        <PlayersContainer
          players={players}
          setPlayers={setPlayers}
          activePlayer={activePlayer}
        />
        <ButtonContainer />
        <GameBoard board={board} />
      </GameZone>
    </Wrapper>
  );
}

export default App;
