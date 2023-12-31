import styled from 'styled-components';

import mainPoster from '@assets/poster/cyberpunk.jpg';

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 800px;
  padding: 15px 95px 0 95px;

  @media (max-width: 1366px) {
    height: 620px;
  }

  &::before {
    content: '';
    background-image: url(${mainPoster});
    background-repeat: no-repeat;
    background-size: cover;
    filter: brightness(70%);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
  }
`;

export const Navbar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  gap: 212px;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;
  cursor: pointer;

  img {
    transition: filter 0.3s;
  }

  img:hover {
    filter: brightness(60%);
  }

  h2 {
    color: #fff;
    font-size: 24px;
    font-weight: 700;
    line-height: 24px;
  }
`;

export const SearchbarContainer = styled.div`
  position: relative;
  width: 50%;

  input {
    font-size: 16px;
    padding: 10px;
    outline: none;
    border: none;
    outline: 2px solid #d1d5db;
    border-radius: 6px;
    width: 100%;
    background: transparent;
    color: #fff;
    line-height: 24px;
    font-weight: 400;
    font-family: 'DM Sans', sans-serif;
    transition: background-color 0.6s ease;
    transform-origin: center;
    transform: scale(1);
  }

  input:focus {
    background-color: #323238;
    color: #f5f5f5;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }

  input:not(:focus) {
    background-color: transparent;
    transform: scale(1);
  }

  input::placeholder {
    color: #9c9c9c;
  }
`;

export const SearchGamesOptionsBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: absolute;
  left: 0;
  background-color: #323238;
  border-radius: 6px;
  outline: 2px solid #d1d5db;
  min-height: 50px;

  border-top-left-radius: 0;
  border-top-right-radius: 0;
`;

export const SearchGameOptionContainer = styled.div`
  display: flex;
  cursor: pointer;
  padding: 1rem;
  border-bottom: 1px solid #d1d5db;

  &:last-child {
    border-bottom: none;
  }
`;

export const SignIn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 27px;

  span {
    font-weight: 700;
    line-height: 24px;
    font-size: 16px;
    white-space: nowrap;
    cursor: pointer;
  }

  svg {
    cursor: pointer;
    color: #f5f5f5;
    font-size: 36px;

    &:hover {
      opacity: 0.6;
    }
  }
`;

export const MainGame = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  margin-top: 40px;

  h1 {
    color: #fff;
    font-size: 48px;
  }

  p {
    color: #fff;
    font-weight: 400;
  }
`;
