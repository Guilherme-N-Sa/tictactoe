import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  gap: 10px;

  @media (max-width: 768px) {
    gap: 3px;
  }
`;

const Cell = styled.button`
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

  &.deactivated {
    background-color: rgba(255, 255, 255, 0.5);
    cursor: not-allowed;
  }

  &:hover {
    background-color: rgba(255, 255, 255, 0.7);
  }
`;

interface GameBoardProps {
  board: (string | null)[][];
}

export default function GameBoard({ board }: GameBoardProps) {
  return (
    <Wrapper>
      {board.map((row, i) => (
        <>
          {row.map((cell, j) => (
            <Cell
              disabled={!!cell}
              className={cell ? "deactivated" : ""}
              key={`${i}-${j}`}
            >
              {cell}
            </Cell>
          ))}
        </>
      ))}
    </Wrapper>
  );
}
