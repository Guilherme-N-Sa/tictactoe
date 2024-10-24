import styled from "styled-components";

const Wrapper = styled.div`
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

const Player = styled.button`
  padding: 15px 20px;
  border-radius: 5px;
  background-color: #ffffff;
  color: black;
  font-size: 1.2rem;
  text-align: center;
  width: 45%;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15);

  @media (max-width: 768px) {
    width: 80%;
  }
`;

export default function PlayersContainer() {
  return (
    <Wrapper>
      <Player>Player 1: X</Player>
      <Player>Player 2: O</Player>
    </Wrapper>
  );
}
