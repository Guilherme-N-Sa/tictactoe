import styled from "styled-components";
import PlayersContainer from "./components/PlayersContainer";
import ButtonContainer from "./components/ButtonsContainer";
import GameBoard from "./components/GameBoard";
import Header from "./components/Header";

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
  width: 80%;
  max-width: 600px;
  height: auto;
  background-color: rgba(255, 255, 255, 0.70);
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  border-radius: 10px;
  z-index: 1;
  padding: 30px;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

const initialBoard = new Array(3).fill(null).map(() => new Array(3).fill(null));

function App() {
  const board = initialBoard;

  return (
    <Wrapper>
      <Overlay />
      <Header />
      <GameZone>
        <PlayersContainer />
        <ButtonContainer />
        <GameBoard board={board} />
      </GameZone>
    </Wrapper>
  );
}

export default App;
