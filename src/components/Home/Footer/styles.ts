import styled from "styled-components";

export const Container = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  margin: auto;
  background: #1c1e21;
`;

export const SocialMedia = styled.div`
  display: flex;
  gap: 48px;

  svg {
    font-size: 24px;
    color: #515151;
    cursor: pointer;
    transition: color 0.3s;
  }

  svg:hover {
    color: #be123c;
  }
`;

export const PageLinks = styled.div`
  display: flex;
  gap: 48px;
  margin-top: 36px;

  a {
    color: #515151;
    font-weight: 700;
    font-size: 18px;
    text-decoration: none;
  }
`;

export const Author = styled.h4`
  margin-top: 36px;
  color: #6b7280;
  font-weight: 700;
  font-size: 18px;
  padding-bottom: 1.3rem;
`;
