import styled from "styled-components";

import johnWickPoster from "../../assets/poster/john_wick_poster.png";

export const Container = styled.div`
  background-image: url(${johnWickPoster.src});
  background-repeat: no-repeat;
  background-size: cover;
  box-sizing: border-box;

  width: 100%;
  height: 600px;
  margin-bottom: 70px;
  padding: 15px 95px 0 95px;
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

  h2 {
    color: #fff;
    font-size: 24px;
    font-weight: 700;
    line-height: 24px;
  }
`;

export const Searchbar = styled.div`
  width: 100%;

  input {
    font-size: 16px;
    padding: 10px;
    outline: none;
    border: none;
    border: 2px solid #d1d5db;
    border-radius: 6px;
    width: 100%;
    background: transparent;
    color: #fff;
  }

  input::placeholder {
    color: #fff;
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
    color: white;
    font-size: 36px;
  }
`;
