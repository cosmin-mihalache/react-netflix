import styled from 'styled-components/macro';
import { Link as ReactRouterLink } from 'react-router-dom';

export const Background = styled.section`
  display: flex;
  flex-direction: column;
  background: url(${({ src }) => src ? `/images/misc/${src}.jpg` : '/images/misc/home-bg.jpg'});
  background-position: top left;
  background-repeat: no-repeat;
  background-size: cover;

  @media (max-width: 1100px) {
    ${({ dontShowOnSmallViewPort }) =>
      dontShowOnSmallViewPort && `background: none`}
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 50px;
  padding: 18px 0;
  height: 60px;
  align-items: center;

  a {
    display: flex;
  }

  @media (max-width: 1000px) {
    margin: 0 30px;
  }
`;

export const Link = styled.p`
  color: #fff;
  text-decoration: none;
  margin-right: 30px;
  font-weight: ${({ active }) => (active === 'true' ? '700' : 'normal')};
  cursor: pointer;

  &:hover {
    font-weight: bold;
  }

  &:last-of-type {
    margin-right: 0;
  }
`;

export const ButtonLink = styled(ReactRouterLink)`
  display: block;
  background-color: #e50914;
  width: 84px;
  height: fit-content;
  color: white;
  border: none;
  font-size: 15px;
  border-radius: 3px;
  padding: 8px 17px;
  cursor: pointer;
  text-decoration: none;
  box-sizing: border-box;

  &:hover {
    background-color: #f40612;
  }
`;

export const Logo = styled.img`
  height: 32px;
  width: 108px;
  margin-right: 40px;

  @media (min-width: 1149px) {
    height: 45px;
    width: 165px;
  }
`;
