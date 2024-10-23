import styled from "styled-components";

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

const Header = styled.div`
  background-color: rgba(255, 255, 255, 0.25);
  padding: 10px 20px;
  border-radius: 10px;
  z-index: 1;
  margin-bottom: 40px;
  font-size: 2rem;
  color: white;
`;

const GameZone = styled.div`
  width: 80%;
  max-width: 600px;
  height: auto;
  background-color: rgba(255, 255, 255, 0.75);
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

const GameBoard = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  gap: 10px;

  @media (max-width: 768px) {
    gap: 3px;
  }
`;

const Cell = styled.div`
  width: 30%;
  aspect-ratio: 1;
  border: 1px solid white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  border-radius: 5px;
  background-color: rgba(255, 255, 255, 0.1);
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: rgba(255, 255, 255, 0.7);
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
  margin: 20px 0;
  flex-wrap: wrap;
  justify-content: center;

  @media (max-width: 768px) {
    gap: 5px;
    margin: 10px 0;
  }
`;

const Button = styled.button`
  padding: 12px 24px;
  border: none;
  border-radius: 5px;
  background-color: #007bff;
  color: white;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.2s;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);

  &:hover {
    background-color: #0056b3;
    transform: translateY(-2px);
  }

  &:active {
    background-color: #004494;
    transform: translateY(0);
  }
`;

const PlayersContainer = styled.div`
  display: flex;
  gap: 10px;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 5px;
  }
`;

const Player = styled.div`
  padding: 15px 20px;
  border-radius: 5px;
  background-color: #ffffff;
  color: black;
  font-size: 1.2rem;
  text-align: center;
  width: 45%;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    width: 80%;
  }
`;

function App() {
  return (
    <Wrapper>
      <Overlay />
      <Header>
        <h1>Tic Tac Toe</h1>
      </Header>
      <GameZone>
        <PlayersContainer>
          <Player>Player 1: X</Player>
          <Player>Player 2: O</Player>
        </PlayersContainer>
        <ButtonContainer>
          <Button>Start Game</Button>
          <Button>Restart</Button>
        </ButtonContainer>
        <GameBoard>
          <Cell>X</Cell>
          <Cell>O</Cell>
          <Cell>X</Cell>
          <Cell>X</Cell>
          <Cell>O</Cell>
          <Cell>X</Cell>
          <Cell>O</Cell>
          <Cell>X</Cell>
          <Cell>X</Cell>
        </GameBoard>
      </GameZone>
    </Wrapper>
  );
}

export default App;
