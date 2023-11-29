import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  /* box-sizing: border-box; */
  background-color: #1c1e21;
  /* padding-bottom: 4rem; */
  height: 100vh;
  width: 100vw;
  overflow-y: auto;
`;

export const Navbar = styled.nav`
  width: 100%;
  background: linear-gradient(180deg, rgba(211, 19, 14, 0.62) 0%, rgba(68, 12, 12, 0.05) 99%, rgba(217, 217, 217, 0.00) 100%);
  padding-bottom: 30px;

  img {
    margin-top: 20px;
    margin-left: 30px;
    transition: filter 0.3s;
  }

  img:hover {
    filter: brightness(80%);
  }

  h1 {
    text-align: center;
    font-size: 2.25rem;
  }
  span {
    text-align: center;
    font-size: 2.25rem;
  }
`;

export const GameContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 50%;
  margin-top: 2rem;
  margin-left: auto;
  margin-right: auto;
  box-sizing: border-box;
  gap: 50px;

  img {
    width: 420px;
    height: 520px;
    object-fit: initial;
  }

  p {
    text-align: justify;
    width: 100%;
  }
`;

export const GameInfo = styled.div`
  display: flex;
  flex-direction: column;

  #heading-platforms {
    margin-top: 1rem;
  }

  .custom-rating {
    margin-top: 2rem;
    margin-bottom: 2rem;
    svg {
      color: #f5f5f5;
      font-size: 2.25rem;
    }
  }
`;

export const GamePlatforms = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 1rem;

  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1rem;

  }
`;

export const ReviewsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  margin-left: auto;
  margin-right: auto;
  box-sizing: border-box;
  gap: 30px;
  margin-top: 3rem;
  margin-bottom: 3rem;
`;

export const ReviewRatingForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1rem;

    svg {
      color: #D31313;
    }
  }

`;

export const CreateReviewInput = styled.input`
    padding: 17px 94px 39px 16px;
    background-color: #121214;
    border-radius: 8px;
    border: 1px solid #C4C4C4;
    height: 78px;
    color: #f5f5f5;
    margin-bottom: 1rem;
`;