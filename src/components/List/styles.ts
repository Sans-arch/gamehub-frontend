import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const GamesArea = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  gap: 100px;
  flex-wrap: wrap;
  box-sizing: border-box;
`;

export const ListDescription = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 20px;

  h3 {
    font-size: 24px;
    font-weight: 700;
    font-family: 'Poppins', sans-serif;
  }

  span#delete-icon {
    height: 100%;
    margin-left: 10px;
    cursor: pointer;
    
    svg {
      transform: translateY(45%);
      margin: auto;
      color: #f43f5e;
      font-size: 20px;
    }
  }
`;
