import styled from 'styled-components';

export const Container = styled.section`
  background-color: #1c1e21;
  padding: 83px 100px 83px 100px;
`;

export const CreateListContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 30px;
`;

export const GamesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 80px;
`;

export const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 44px;

  h2 {
    color: #f5f5f5;
    font-family: var(--font-dmsans);
    font-size: 36px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  p {
    display: flex;
    color: #be123c;
    font-size: 18px;
    line-height: 24px;
    cursor: pointer;

    svg {
      align-self: center;
    }
  }
`;
