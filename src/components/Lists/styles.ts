import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  height: 100vh;
  width: 100vw;
  background-color: #111111;
  color: #f5f5f5;
  font-family: var(--font-poppins);

  h1 {
    font-weight: 500;
  }
`;

export const Navbar = styled.nav`
  height: 100px;
  width: 100%;
  background: #be3144;

  img {
    transition: filter 0.3s;
    margin-left: 20px;
  }

  img:hover {
    filter: brightness(80%);
  }
`;
