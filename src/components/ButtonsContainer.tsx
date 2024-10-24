import styled from "styled-components";

const Wrapper = styled.div`
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

export default function ButtonsContainer() {
  return (
    <Wrapper>
      <Button>Start Game</Button>
      <Button>Restart</Button>
    </Wrapper>
  );
}
