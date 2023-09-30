import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  background-color: #1c1e21;
`;

export const Overlay = styled.div`
  background-color: #be3144;
  width: 100%;
  height: 30%;
  display: flex;
  justify-content: space-between;
  padding: 0 81px;
`;

export const Title = styled.h1`
  color: #fff;
  margin: 0;
  padding: 0;
  margin-bottom: 10px;
`;

export const GameInitialInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-family: var(--font-poppins);

  height: 100%;

  p {
    color: #f5f5f5;
    margin: 0;
  }

  span {
    color: #f5f5f5;
    font-size: 1rem;
    margin-top: 17px;
  }
`;

export const Rating = styled.div`
  display: flex;
  margin-top: 44px;

  svg {
    color: #ffd700;
    font-size: 30px;
  }
`;
