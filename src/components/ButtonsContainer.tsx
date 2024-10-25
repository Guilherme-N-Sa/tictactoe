import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  gap: 10px;
  margin: 20px 0;
  flex-wrap: wrap;
  justify-content: center;

  @media (max-width: 1600px) {
    gap: 10px;
    margin: 10px 0;
  }
`;

export const Button = styled.button`
  padding: 12px 36px;
  border: none;
  border-radius: 5px;
  background-color: rgb(89 120 141);
  color: white;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.2s;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);

  &:hover {
    background-color: rgb(26 99 149);
    transform: translateY(-2px);
  }

  &:active {
    background-color: #004494;
    transform: translateY(0);
  }

  @media (max-width: 1600px) {
    padding: 10px 30px;
    font-size: 0.9rem;
  }
`;

interface IButtonsContainerProps {
  setLog: any;
}

export default function ButtonsContainer({ setLog }: IButtonsContainerProps) {
  return (
    <Wrapper>
      <Button
        onClick={() => {
          setLog((prev: any) => []);
        }}
      >
        Restart
      </Button>
    </Wrapper>
  );
}
