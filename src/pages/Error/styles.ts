import styled from 'styled-components'

export const Container = styled.div`
    height: 100vh;
    width: 100vw;
    background-color: ${(props) => props.theme["red-500"]};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    img {
      width: 200px;
      height: 200px;
      transition: filter 0.3s;
    }

    img:hover {
      filter: brightness(70%);
    }
`;