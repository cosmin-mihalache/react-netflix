import React from 'react';
import { JumbotronContainer } from '../containers/jumbotron';
import { FaqsContainer } from '../containers/faqs';
import { FooterContainer } from '../containers/footer';
import { HeaderContainer } from '../containers/header';

export default function Home() {
  return (
    <>
      <HeaderContainer>
        <p>Hello children</p>
      </HeaderContainer>
      <JumbotronContainer />;
      <FaqsContainer />
      <FooterContainer />;
    </>
  );
}
