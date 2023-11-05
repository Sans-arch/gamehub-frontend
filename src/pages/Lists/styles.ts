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
  width: 100%;
  background: linear-gradient(180deg, rgba(211, 19, 19, 0.72) 0%, rgba(68, 12, 12, 0.05) 99.99%, rgba(217, 217, 217, 0.00) 100%);

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
  gap: 100px;
  margin-bottom: 40px;
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