import styled from 'styled-components/macro';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  max-width: 915px;
  margin: auto;
  padding: 120px 50px;
`;

export const Title = styled.h1`
  color: white;
  font-size: 3rem;
  max-width: 650px;
  font-weight: 500;
  margin: auto;

  @media (max-width: 600px) {
    font-size: 2rem;
  }
`;

export const SubTitle = styled.h2`
  color: white;
  font-size: 1.5rem;
  font-weight: normal;
  margin: 16px auto;

  @media (max-width: 600px) {
    font-size: 1rem;
  }
`;
