import styled from 'styled-components';

export const Container = styled.section`
    margin-bottom: 70px;
`;

export const MoviesContainer = styled.div`
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
        font-size: 36px;
        font-weight: 700;
        color: #000;
        text-align: left;
    }

    p {
        display: flex;
        color: #BE123C;
        font-size: 18px;
        line-height: 24px;
        cursor: pointer;

        svg {
            align-self: center;
        }
    }
`;