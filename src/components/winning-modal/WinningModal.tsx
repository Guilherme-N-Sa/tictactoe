import styled from "styled-components";
import { IPlayersData } from "../players-container/Types";
import { Button } from "../ButtonsContainer";

const Wrapper = styled.div`
  background-color: rgba(0, 0, 0, 0.87);
  position: absolute;
  top: 0;
  left: 0;
  z-index: 3;
  height: 100vh;
  width: 100%;
`;

const Modal = styled.div`
  background-color: white;
  padding: 40px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

interface IWinningModalProps {
  winner: string;
  players: IPlayersData;
}

export default function WinningModal({ winner, players }: IWinningModalProps) {
  return (
    <Wrapper>
      <Modal>
        <h1>{winner === "Tie" ? "It's a Tie!" : `${players[winner].name} wins!`}</h1>
        <Button onClick={() => window.location.reload()}>Play Again</Button>
      </Modal>
    </Wrapper>
  );
}
