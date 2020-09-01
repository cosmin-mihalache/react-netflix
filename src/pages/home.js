import React from 'react';
import {HeaderChildren, OptForm } from '../components';
import { JumbotronContainer } from '../containers/jumbotron';
import { FaqsContainer } from '../containers/faqs';
import { FooterContainer } from '../containers/footer';
import { HeaderContainer } from '../containers/header';

export default function Home() {
  return (
    <>
      <HeaderContainer>
        <HeaderChildren>
          <HeaderChildren.Title>100% entertainment. EUR0.99 for your first 30 days.</HeaderChildren.Title>
          <HeaderChildren.SubTitle>Watch anywhere. Cancel anytime.</HeaderChildren.SubTitle>
          <OptForm>
            <OptForm.Text>Ready to watch? Enter your email to create or restart your membership.</OptForm.Text>
            <OptForm.Input placeholder="Email Address" />
            <OptForm.Button>TRY NOW FOR EUR0.99</OptForm.Button>
            <OptForm.Text>Only new members are eligible for this offer.</OptForm.Text>
          </OptForm>
        </HeaderChildren>
      </HeaderContainer>
      <JumbotronContainer />;
      <FaqsContainer />
      <FooterContainer />;
    </>
  );
}
