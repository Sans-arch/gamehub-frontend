import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  height: 100vh;
  width: 100vw;
  box-sizing: border-box;
  background-color: #1c1e21;
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: #111111;
  width: 75%;
  height: 80%;
  border-radius: 30px;
  overflow: hidden;
  box-sizing: border-box;
  box-shadow: 12px 4px 5px 0px rgba(0, 0, 0, 0.25);
`;

export const GameImage = styled.div`
  height: 100%;
  overflow: hidden;
  text-align: center;

  img {
    object-fit: initial;
  }
`;

export const GameInformation = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 80%;
  color: #f5f5f5;
  font-family: 'Poppins', sans-serif;

  h1 {
    margin-bottom: 0;
  }

  p {
    font-size: 0.9rem;
    text-align: center;
    width: 90%;
    margin: 0;
    margin-top: 1.5rem;
    margin-bottom: 2rem;
  }

  svg {
    color: #f5f5f5;
    font-size: 3rem;
  }
`;
