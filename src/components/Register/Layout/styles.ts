import styled from "styled-components";

import backgroundImg from "../../../assets/poster/cyberpunk.jpg";

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;

  &::before {
    content: "";
    background-image: url(${backgroundImg.src});
    background-repeat: no-repeat;
    background-size: cover;
    filter: brightness(40%);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
  }
`;

export const Dialog = styled.div`
  display: flex;
  width: 50%;
  height: 70%;
  margin: auto;
  box-shadow: 5px 4px 10px 0px rgba(0, 0, 0, 0.25);
  border-radius: 30px;

  box-sizing: border-box;
  overflow: hidden;
`;

export const LoginSidebar = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #be3144;
  padding: 64px;

  h1 {
    color: #fff;
    font-family: var(--font-poppins);
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  p {
    color: #fff;
    font-family: var(--font-poppins);
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin: 0;
  }
`;

export const LoginButton = styled.button`
  color: #fff;
  font-family: var(--font-poppins);
  font-size: 14px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  width: 176px;
  height: 48px;
  border-radius: 30px;
  border: 2px solid #fff;
  background: rgba(217, 217, 217, 0);
  margin-top: 43px;
  cursor: pointer;
  text-transform: uppercase;
`;

export const RegisterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: #fff;
  width: 100%;
  h1 {
    margin: 0;
    margin-top: 110px;
    margin-bottom: 81px;
    color: #dc3157;
    text-align: center;
    font-family: var(--font-poppins);
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 28px;

    width: 70%;
    height: 60px;

    input {
      width: 100%;
      background-color: #f5f5f5;
      outline: none;
      border: none;
      padding: 20px;

      color: #9c9c9c;
      font-family: var(--font-poppins);
      font-size: 14px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
    }
  }
`;
