import styled, { keyframes } from 'styled-components';

import backgroundImg from '../../../assets/poster/cyberpunk.jpg';
import { red } from '@mui/material/colors';

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;

  .register-toast {
    border-radius: 20px;
  }

  .register-toast-alert {
    background-color: #4caf50;
    color: #f5f5f5;
    font-family: var(--font-poppins);
    font-style: normal;
    font-weight: 500;
    line-height: normal;

    svg {
      color: #f5f5f5;
    }
  }

  .register-toast-alert-error {
    background-color: #be3144;
    color: #f5f5f5;
    font-family: var(--font-poppins);
    font-style: normal;
    font-weight: 500;
    line-height: normal;

    svg {
      color: #f5f5f5;
    }
  }

  &::before {
    content: '';
    background-image: url(${backgroundImg.src});
    background-repeat: no-repeat;
    background-size: cover;
    filter: brightness(35%);
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

  @media (max-width: 1400px) {
    width: 70%;
    height: 90%;
  }
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
    font-size: 13px;
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
    background: #fff;
    color: #333;
    border-color: #fff;
    transform: scale(1.05);
  }

  &:active {
    background: #ccc;
    border-color: #ccc;
    transform: scale(0.95);
  }
`;

export const RegisterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: #1c1e21;
  width: 100%;

  h1 {
    margin: 0;
    margin-top: 110px;
    margin-bottom: 3.25rem;
    color: #dc3157;
    color: #f5f5f5;
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

    a {
      font-size: 14px;
      color: #f0f0f0;
      font-family: var(--font-poppins);
      text-decoration: none;

      & {
      }
    }

    input {
      width: 70%;
      background-color: #f0f0f0;
      outline: none;
      border: none;
      padding: 20px;
      border-radius: 12px;

      font-family: var(--font-poppins);
      font-size: 14px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;

      &::placeholder {
        color: #9c9c9c;
      }
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
  transition: background-color 0.3s, transform 0.3s, box-shadow 0.3s, border-color 0.3s;

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

  @media (max-width: 1400px) {
    margin-top: 10px;
  }
`;
