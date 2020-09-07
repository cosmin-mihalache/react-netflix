import styled from 'styled-components';
import { Link as ReachRouterLink } from 'react-router-dom';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  min-height: 660px;
  background-color: rgba(0, 0, 0, 0.8);
  border-radius: 5px;
  box-sizing: border-box;
  width: 100%;
  margin: auto;
  max-width: 450px;
  padding: 60px 60px 40px;
  margin-bottom: 100px;
`;

export const Base = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 450px;
  width: 100%;
`;

export const Error = styled.div`
  background-color: #e87c03;
  border-radius: 4px;
  font-size: 1;
  margin: 0 0 16px;
  color: white;
  padding: 15px 20px;
`;

export const Title = styled.h1`
  color: white;
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 28px;
  margin-top: 0;
`;

export const Text = styled.h1`
  color: #737373;
  font-weight: 500;
  font-size: 1rem;
`;

export const SmallText = styled.h2`
  color: #8c8c8c;
  line-height: normal;
  font-size: 0.9rem;
  margin-top: 10px;
`;

export const Input = styled.input`
  background-color: #333;
  border-radius: 4px;
  border: none;
  color: white;
  height: 50px;
  font-size: 1rem;
  line-height: 50px;
  padding: 5px 20px;
  margin-bottom: 20px;

  &:last-of-type {
    margin-bottom: 40px;
  }
`;

export const Submit = styled.button`
  background-color: #e50914;
  border: none;
  border-radius: 4px;
  padding: 5px 20px;
  height: 50px;
  color: white;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  margin: 24px 0 12px;

  &:disabled {
    opacity: 0.5;
  }
`;

export const Link = styled(ReachRouterLink)`
  color: white;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;
