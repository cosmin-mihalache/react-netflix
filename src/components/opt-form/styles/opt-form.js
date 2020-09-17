import styled from 'styled-components/macro';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  margin-top: 20px;
  flex-wrap: wrap;

  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Input = styled.input`
  max-width: 450px;
  width: 100%;
  border: none;
  padding: 10px;
  height: 60px;
  box-sizing: border-box;
  font-size: 16px;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  height: 60px;
  border: none;
  cursor: pointer;
  background-color: #e50914;
  padding: 0 32px;
  color: white;
  text-transform: uppercase;
  font-size: 26px;

  img {
    margin-left: 10px;
    filter: brightness(0) invert(1);
    width: 24px;

    @media (max-width: 1000px) {
      width: 16px;
    }
  }

  &:hover {
    background-color: #f40612;
  }

  @media (max-width: 1000px) {
    height: 40px;
    font-size: 16px;
    margin-top: 20px;
    font-weight: bold;
  }
`;
export const Text = styled.p`
  color: white;
  font-size: 20px;
  text-align: center;

  @media (max-width: 600px) {
      font-size: 16px;
      line-height: 22px;
  }
`;
