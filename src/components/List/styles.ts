import styled from "styled-components";

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
    margin-bottom: 20px;

    h3 {
        font-size: 24px;
        font-weight: 700;
        font-family: 'Poppins', sans-serif;
    }

    #delete-icon {
        margin-left: 10px;
        color: #F43F5E;
        font-size: 20px;
        cursor: pointer;
    }
`;
