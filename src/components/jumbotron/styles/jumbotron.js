import styled from 'styled-components';

export const Inner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* destruct props*/
  flex-direction: ${({ direction }) => direction};
  max-width: 1100px;
  margin: auto;
  width: 100%;

  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

export const Item = styled.div``;

export const Container = styled.section``;

export const Title = styled.h1`
  font-size: 3.5rem;
  line-height: 1.2;
  margin-bottom: 10px;

  @media (max-width: 600px) {
    font-size: 2.5rem;
  }
`;

export const SubTitle = styled.h2`
  font-size: 2rem;
  font-weight: normal;
  line-height: normal;

  @media (max-width: 600px) {
    font-size: 1rem;
  }
`;

export const Image = styled.img`
  max-width: 100%;
  height: auto;
`;
