import styled, { keyframes } from "styled-components";

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
  transition: background-color 0.3s, transform 0.3s, border-color 0.3s;

  &:hover {
    background: #fff; /* Nova cor de fundo durante o hover */
    color: #333; /* Nova cor de texto durante o hover */
    border-color: #fff; /* Nova cor da borda durante o hover */
    transform: scale(1.05);
  }

  &:active {
    background: #ccc; /* Nova cor de fundo quando clicado */
    border-color: #ccc; /* Nova cor da borda quando clicado */
    transform: scale(0.95); /* Reduz ligeiramente o tamanho quando clicado */
  }
`;

export const RegisterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: #f5f5f5;
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
    align-items: center;
    gap: 28px;

    height: 100%;
    width: 100%;

    input {
      width: 70%;
      background-color: #f0f0f0;
      outline: none;
      border: none;
      padding: 20px;
      border-radius: 12px;

      color: #9c9c9c;
      font-family: var(--font-poppins);
      font-size: 14px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
    }
  }
`;

export const RegisterButton = styled.button`
  color: #fff;
  font-family: var(--font-poppins);
  font-size: 14px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  width: 144px;
  height: 48px;
  border: 2px solid #be3144;
  margin-top: 43px;
  cursor: pointer;
  text-transform: uppercase;
  border-radius: 30px;
  background: #be3144;
  padding: 10px;
  transition: background-color 0.3s, transform 0.3s, box-shadow 0.3s,
    border-color 0.3s;

  &:hover {
    transform: scale(1.05);
    background: #ff5e6e;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    border-color: #ff5e6e;
  }

  &:active {
    transform: scale(0.95);
    background: #a82e3c;
    border-color: #a82e3c;
    box-shadow: none;
  }
`;
