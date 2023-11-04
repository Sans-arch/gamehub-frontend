import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  width: 320px;
  height: 500px;

  box-sizing: border-box;
  overflow: hidden;
  cursor: pointer;

  transition: box-shadow 0.3s, transform 0.3s;

  &:hover {
    box-shadow: 0 0 10px #be3144;
    transform: scale(1.1);
    border-radius: 4px;
    padding: 10px;
    transition: padding 0.7s ease;
  }

  img {
    width: 100%;
    height: 100%;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
  margin-top: 12px;
  font-family: 'Poppins', sans-serif;

  & > span {
    color: #9ca3af;
    font-weight: 700;
    font-size: 12px;
  }

  p {
    color: #fef2f2;
    font-size: 18px;
    font-weight: 700;
  }
`;

export const Rating = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const ImdbRating = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;

  img {
    width: 35px;
    height: 17px;
  }

  span {
    font-size: 12px;
    color: #111827;
    line-height: 12px;
  }
`;

export const RottenTomatoesRating = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;

  img {
    width: 16px;
  }

  span {
    font-size: 12px;
    color: #111827;
    line-height: 12px;
  }
`;

export const Genre = styled.span`
  color: #9ca3af;
  font-weight: 700;
  font-size: 12px;
`;
