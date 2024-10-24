import styled from "styled-components";
import { ILog } from "./Types";

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
  font-size: 5rem;
  font-weight: bold;
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

  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

interface GameBoardProps {
  board: (string | null)[][];
  log: ILog[];
  setLog: (func: (prev: ILog[]) => ILog[]) => void;
}

export default function GameBoard({ board, log, setLog }: GameBoardProps) {
  function HandleCellSelection(i: number, j: number) {
    setLog((prev) => {
      const lastPlayer = prev.length === 0 ? "O" : prev[prev.length - 1].player;
      const nextPlayer = lastPlayer === "X" ? "O" : "X";
      return [...prev, { player: nextPlayer, position: [i, j] }];
    });
  }
  return (
    <Wrapper>
      {board.map((row, i) =>
        row.map((cell, j) => {
          return (
            <Cell
              onClick={() => HandleCellSelection(i, j)}
              disabled={!!cell}
              className={cell ? "deactivated" : ""}
              key={`${i}-${j}`}
            >
              {cell}
            </Cell>
          );
        })
      )}
    </Wrapper>
  );
}
