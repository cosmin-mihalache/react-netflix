import styled from 'styled-components/macro';

/* Override the body background-color (global-styles.js) for opacity
    will allow background to peak through*/
export const Container = styled.div`
  display: flex;
  max-width: 1000px;
  flex-direction: column;
  padding: 70px 50px;
  margin: auto;
  background-color: rgba(0,0,0,0.5);

  @media (max-width: 1000px) {
    padding: 60px 25px;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  grid-gap: 10px;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
`;

export const Title = styled.div`
  font-size: 1rem;
  color: #757575;
  margin-bottom: 40px;
`;

export const Link = styled.a`
  color: #757575;
  margin-bottom: 14px;
  font-size: 1rem;
  text-decoration: none;
  &:hover {
    text-decoration: underline #757575;
  }
`;

export const Break = styled.div`
  flex-basis: 100%;
  height: 0;
`;

export const Text = styled.p`
  font-size: 0.8rem;
  color: #757575;
  margin-bottom: 40px;
`;
