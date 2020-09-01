import React from 'react';
import { Container, Title, SubTitle } from './styles/header-children';

export default function HeaderChild({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

HeaderChild.Title = function HeaderChildTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

HeaderChild.SubTitle = function HeaderChildSubTitle({
  children,
  ...restProps
}) {
  return <SubTitle {...restProps}>{children}</SubTitle>;
};
