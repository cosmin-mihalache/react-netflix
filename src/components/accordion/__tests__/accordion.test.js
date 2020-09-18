import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import dataFaq from '../../../fixtures/faq.json';
import { Accordion } from '../../../components';

describe('Accordion', () => {
  it('renders the <Accordion /> with populated data', () => {
    const { getByText } = render(
      <Accordion>
        <Accordion.Title>Frequently Asked Questions</Accordion.Title>

        {dataFaq.map((item) => (
          <Accordion.Item key={item.id}>
            <Accordion.Header>{item.header}</Accordion.Header>
            <Accordion.Body>{item.body}</Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    );

    expect(getByText('Frequently Asked Questions')).toBeTruthy();
    expect(getByText('What is Netflix?')).toBeTruthy();
    expect(getByText('How much does Netflix cost?')).toBeTruthy();
    expect(getByText('Where can I watch?')).toBeTruthy();
    expect(getByText('How do I cancel?')).toBeTruthy();
    expect(getByText('What can I watch on Neflix')).toBeTruthy();
  });

  it('opens and closes the <Accordion /> component', () => {
    const { queryByText } = render(
      <Accordion>
        <Accordion.Title>Frequently Asked Questions</Accordion.Title>

        {dataFaq.map((item) => (
          <Accordion.Item key={item.id}>
            <Accordion.Header>{item.header}</Accordion.Header>
            <Accordion.Body>{item.body}</Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    );

    const whatCanIWatchOnNetflixBodyText =
      'Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.';

    expect(queryByText(whatCanIWatchOnNetflixBodyText)).toBeFalsy();
    fireEvent.click(queryByText('What can I watch on Neflix'));
    expect(queryByText(whatCanIWatchOnNetflixBodyText)).toBeTruthy();

    fireEvent.click(queryByText('What can I watch on Neflix'));
    expect(queryByText(whatCanIWatchOnNetflixBodyText)).toBeFalsy();
  });
});
