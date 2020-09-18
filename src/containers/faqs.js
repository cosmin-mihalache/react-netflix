import React from 'react';
import { Accordion, OptForm } from '../components';
import dataFaq from '../fixtures/faq.json';

export function FaqsContainer() {
  return (
    <Accordion>
      <Accordion.Title>Frequently Asked Questions</Accordion.Title>

      {dataFaq.map((item) => (
        <Accordion.Item key={item.id}>
          <Accordion.Header>{item.header}</Accordion.Header>
          <Accordion.Body>{item.body}</Accordion.Body>
        </Accordion.Item>
      ))}

      <OptForm>
        <OptForm.Text>
          Ready to watch? Enter your email to create or restart your membership.
        </OptForm.Text>
        <OptForm.Input placeholder="Email Address" />
        <OptForm.Button>GET STARTED</OptForm.Button>
      </OptForm>
    </Accordion>
  );
}
