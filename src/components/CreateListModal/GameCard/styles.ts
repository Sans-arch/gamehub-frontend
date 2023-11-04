import styled from 'styled-components';

interface ContainerProps {
  isSelected?: boolean;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  width: 200px;
  height: 330px;

  box-sizing: border-box;
  overflow: hidden;
  cursor: pointer;

  opacity: ${props => props.isSelected && 0.1};

  transition: box-shadow 0.3s, transform 0.3s;

  &:hover {
    box-shadow: ${props => !props.isSelected && '0 0 10px #be3144'};
    transform: scale(1.1);
    border-radius: 4px;
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

  p {
    text-align: center;
    color: #fef2f2;
    font-size: 18px;
    font-weight: 700;
  }
`;
