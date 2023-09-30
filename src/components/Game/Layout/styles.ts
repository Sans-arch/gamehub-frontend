import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  background-color: #1c1e21;
`;

export const Overlay = styled.div`
  display: flex;
  justify-content: space-between;

  background-color: #be3144;
  width: 100%;
  height: 35%;
  box-sizing: border-box;
  box-shadow: 10px 10px 10px 0px rgba(0, 0, 0, 0.25);
`;

export const LogoContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  padding-left: 60px;
  padding-bottom: 100px;
`;

export const GameInitialInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 100%;
  font-family: var(--font-poppins);

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

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;

  height: 100%;
  width: 40%;
  padding-right: 80px;
`;

export const Title = styled.h1`
  color: #fff;
  margin: 0;
  padding: 0;
`;

export const Rating = styled.div`
  display: flex;
  margin-top: 44px;

  svg {
    color: #ffd700;
    font-size: 30px;
    font-size: 46px;
  }
`;

export const MainGameImageContainer = styled.div`
  display: flex;
  flex-direction: column;

  position: relative;
  margin-left: 50px;
  width: fit-content;
  bottom: 120px;
  /* border: 2px solid red; */

  img {
    border-radius: 30px;
    box-shadow: 10px 4px 5px 0px rgba(0, 0, 0, 0.25);
  }
`;

export const GameMedia = styled.div`
  display: flex;
`;

export const Description = styled.div`
  p {
    margin: 50px 60px 0 60px;
    color: #fff;
    font-family: var(--font-poppins);
    font-size: 1.4rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
`;
