import React from 'react';
import { render } from '@testing-library/react';
import { OptForm } from '../../../components';

describe('OptForm', () => {
  it('renders <OptForm /> component with populated data', () => {
    const {container, getByText, getByPlaceholderText } = render(
      <OptForm>
        <OptForm.Text>
          Ready to watch? Enter your email to create or restart your membership.
        </OptForm.Text>
        <OptForm.Input placeholder="Email Address" />
        <OptForm.Button>GET STARTED</OptForm.Button>
      </OptForm>
    );

    expect(getByText('Ready to watch? Enter your email to create or restart your membership.')).toBeTruthy();
    expect(getByPlaceholderText('Email Address')).toBeTruthy();
    expect(getByText('GET STARTED')).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
  });
});
