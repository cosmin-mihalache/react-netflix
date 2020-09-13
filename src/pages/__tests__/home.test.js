import React from 'react';
import { render } from '@testing-library/react';
import { Home } from '../../pages';

jest.mock('react-router-dom');

test('render the homepage', () => {
  const { getByText, getAllByText, getAllByPlaceholderText } = render(<Home />);
  expect(getByText('100% entertainment. EUR0.99 for your first 30 days.')).toBeTruthy();
  expect(getByText('Watch anywhere. Cancel anytime.')).toBeTruthy();
  expect(getAllByText('Ready to watch? Enter your email to create or restart your membership.')).toBeTruthy()
  expect(getAllByPlaceholderText('Email Address')).toBeTruthy();
  expect(getAllByText('TRY NOW FOR EUR0.99')).toBeTruthy();
  expect(getAllByText('Only new members are eligible for this offer.')).toBeTruthy();
});
