import styled from "styled-components";

import mainPoster from "../../../assets/poster/cyberpunk.jpg";

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 600px;
  margin-bottom: 70px;
  padding: 15px 95px 0 95px;

  &::before {
    content: "";
    background-image: url(${mainPoster.src});
    background-repeat: no-repeat;
    background-size: cover;
    filter: brightness(50%);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
  }
`;

export const MainImage = styled.div``;

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

export const Searchbar = styled.div`
  width: 50%;

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
    line-height: 24px;
    font-weight: 400;
    font-family: "DM Sans", sans-serif;
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
