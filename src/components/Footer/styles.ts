import styled from 'styled-components';

export const Container = styled.footer`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 60%;
    margin: auto;
    margin-top: 120px;
    margin-bottom: 62px;
`;

export const SocialMedia = styled.div`
    display: flex;
    gap: 48px;

    svg {
        font-size: 24px;
        color: #111827;
        cursor: pointer;
    }
`;

export const PageLinks = styled.div`
    display: flex;
    gap: 48px;
    margin-top: 36px;

    a {
        color: #111827;
        font-weight: 700;
        font-size: 18px;
        text-decoration: none;
    }
`;

export const Author = styled.h4`
    margin-top: 36px;
    color: #6B7280;
    font-weight: 700;
    font-size: 18px;
`;