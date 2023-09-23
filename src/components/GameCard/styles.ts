import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: 18%;
    box-sizing: border-box;
    overflow: hidden;

    img {
        width: 100%;
    }

    p {
        color: #111827;
        font-size: 18px;
        font-weight: 700;
    }
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    width: 100%;
    margin-top: 12px;

    & > span {
        color: #9CA3AF;
        font-weight: 700;
        font-size: 12px;
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
    color: #9CA3AF;
    font-weight: 700;
    font-size: 12px;
`;