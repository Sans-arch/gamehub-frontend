import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  font-family: 'Poppins', sans-serif;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 75%;
  height: 90%;
  background-color: #101418;
  border-radius: 15px;
  padding: 12px;

  h1 {
    margin-top: 1rem;
    margin-bottom: 2rem;
    font-weight: 500;
  }
`;

export const Form = styled.form`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 2rem;
  width: 100%;
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

export const Input = styled.input`
  width: 50%;
  background-color: transparent;
  border: none;
  outline: none;
  color: #f5f5f5;
  outline: 2px solid ;
  border-radius: 4px;
  padding: 12px;
  outline: 2px solid #1F2937;
  
  &:focus {
    outline: 2px solid #1D4ED8;
  }
`;

export const Button = styled.button`
  background-color: #1D4ED8;
  padding: 14px 20px;
  color: #f5f5f5;
  border: none;
  outline: none;
  border-radius: 4px;
  cursor: pointer;
  text-transform: uppercase;

  &:not(:disabled):hover {
    background-color: #2563EB;
  }

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
`;