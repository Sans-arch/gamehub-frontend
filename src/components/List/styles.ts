import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;

    h3 {
        font-size: 24px;
        font-weight: 700;
        margin-bottom: 20px;
        font-family: 'Poppins', sans-serif;
    }
`;

export const GamesArea = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    gap: 100px;
    flex-wrap: wrap;
    box-sizing: border-box;
`;