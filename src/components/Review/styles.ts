import styled from "styled-components";

export const ReviewContainer = styled.div`
  width: 72%;
  background: #29292E;
  padding: 16px;
  border-radius: 6px;

  div {
    display: flex;

    h3 {
      font-size: 14px;
      font-style: normal;
      font-weight: 700;
      line-height: 160%; /* 22.4px */
  
      strong {
        color: #8D8D99;
        font-size: 14px;
        font-style: normal;
        font-weight: 700;
        line-height: 160%;
      }
  }

  }

  span {
    color: #8D8D99;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 160%; /* 19.2px */
  }

  p {
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 160%; /* 22.4px */
    margin-top: 1rem;
  }
`;