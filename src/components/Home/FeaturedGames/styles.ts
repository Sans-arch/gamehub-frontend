import styled from "styled-components";

export const Container = styled.section`
  background-color: #1c1e21;
  padding: 83px 100px 83px 100px;
`;

export const CreateListContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 30px;
`;

export const CreateListModal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  font-family: var(--font-poppins);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 75%;
  height: 90%;
  background-color: #111111;
  border-radius: 30px;
  border: 2px solid #fff;
  padding: 12px;
`;

export const CreateListModalGames = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  height: 80%;
  width: 100%;
  padding: 20px;
  margin-bottom: 20px;
  overflow: auto;
`;

export const CreateListModalGameCard = styled.div`
  width: 160px;
  height: 200px;
  border: 2px solid blue;
  cursor: pointer;
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
