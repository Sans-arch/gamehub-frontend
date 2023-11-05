import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  height: 100vh;
  width: 100vw;
  background-color: #111111;
  color: #f5f5f5;
  font-family: 'Poppins', sans-serif;
  overflow: auto;


  h1 {
    font-weight: 500;
    margin-top: 20px;
    text-align: center;
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

export const ListContainer = styled.main`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  overflow: auto;
  overflow-x: hidden;
  gap: 200px;
  margin-bottom: 40px;

  /* border: 2px solid red; */
  padding: 30px;
`;

export const ListCard = styled.div`
  display: flex;
  border: 2px solid red;
  width: 300px;
  height: 200px;

  justify-content: center;
  align-items: center;
`;