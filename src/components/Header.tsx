import styled from "styled-components";

const Wrapper = styled.div`
  background-color: rgba(255, 255, 255, 0.25);
  padding: 10px 20px;
  border-radius: 10px;
  z-index: 1;
  margin-bottom: 40px;
  font-size: 2rem;
  color: white;

  @media (max-width: 1600px) {
    padding: 5px 10px;
    font-size: 1.4rem;
    margin-bottom: 15px;
}
`;

export default function Header() {
  return (
    <Wrapper>
      <h1>Tic Tac Toe</h1>
    </Wrapper>
  );
}
