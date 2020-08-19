import React from 'react';
import { Accordion } from '../components';
import dataFaq from '../fixtures/faq.json';

export function FaqsContainer() {
  return (
    <Accordion>
      <Accordion.Title>Frequently Asked Questions</Accordion.Title>
      {dataFaq.map((item) => (
        <Accordion.Item key={item.id}>
          <Accordion.Header>{item.header}</Accordion.Header>
          <Accordion.Header>{item.body}</Accordion.Header>
        </Accordion.Item>
      ))}
    </Accordion>
  );
}
