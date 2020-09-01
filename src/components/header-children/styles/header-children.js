import styled from 'styled-components';
import HeaderChild from '..';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 10px solid #222;
  text-align: center;
  max-width: 915px;
  margin: auto;
  padding: 120px 50px;
`;

export const Title = styled.h1`
  color: white;
  font-size: 3.5rem;
  max-width: 650px;
  font-weight: 500;
  margin: auto;

  @media (max-width: 600px) {
    font-size: 2.5rem;
  }
`;

export const SubTitle = styled.h2`
  color: white;
  font-size: 2rem;
  font-weight: normal;
  margin: 16px auto;

  @media (max-width: 600px) {
    font-size: 1rem;
  }
`;
