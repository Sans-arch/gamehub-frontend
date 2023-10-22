import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  font-family: var(--font-poppins);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 75%;
  height: 90%;
  background-color: #101418;
  border-radius: 15px;
  padding: 12px;
`;

export const Form = styled.form`
  display: flex;
  gap: 10px;
  margin-bottom: 2rem;

  label {
    color: #fff;
  }

  input {
    width: 100%;
    color: #fff;
  }
`;

export const GameList = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 30px;
  height: 80%;
  width: 95%;
  padding: 20px;
  margin-bottom: 20px;
  overflow: auto;
`;
