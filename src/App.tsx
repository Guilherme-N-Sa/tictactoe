import styled from "styled-components";
import PlayersContainer from "./components/players-container/PlayersContainer";
import ButtonContainer from "./components/ButtonsContainer";
import GameBoard from "./components/game-board/GameBoard";
import Header from "./components/Header";
import { useState } from "react";
import { IPlayersData } from "./components/players-container/Types";
import { ILog } from "./components/game-board/Types";
import { initialBoard, initialPlayers } from "./constants";
import checkWinner from "./utils/CheckWinner";
import Dimmer from "./components/Dimmer";
import WinningModal from "./components/winning-modal/WinningModal";

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

function App() {
  const [log, setLog] = useState<ILog[]>([]);
  const [players, setPlayers] = useState<IPlayersData>(initialPlayers);

  const board = initialBoard.map((row) => [...row]);

  let activePlayer = log.length === 0 || log[log.length - 1].player === "O" ? "X" : "O";

  log.forEach(({ player, position }) => {
    board[position[0]][position[1]] = players[player].symbol;
  });

  let winner = checkWinner(board);

  return (
    <Wrapper>
      <Dimmer />
      <Header />
      <GameZone>
        <PlayersContainer
          players={players}
          setPlayers={setPlayers}
          activePlayer={activePlayer}
        />
        <ButtonContainer setLog={setLog} />
        <GameBoard board={board} log={log} setLog={setLog} />
      </GameZone>
      {winner && <WinningModal winner={winner} players={players} />}
    </Wrapper>
  );
}

export default App;
