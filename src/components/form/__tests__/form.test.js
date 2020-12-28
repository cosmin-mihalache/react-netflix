import React from 'react';
import { render } from '@testing-library/react';
import { Form } from '../../../components';

jest.mock('react-router-dom');

describe('<Form />', () => {
  it('renders the <Form /> with populated data', () => {
    const { container, getByText, getByPlaceholderText } = render(
      <Form>
        <Form.Title>Sign In Now</Form.Title>
        <Form.Base>
          <Form.Input placeholder="Email Address" onChange={() => {}} />
          <Form.Input
            placeholder="Password"
            type="password"
            type="password"
            onChange={() => {}}
          />
          <Form.Submit type="submit" disabled>
            Sign In
          </Form.Submit>
        </Form.Base>
        <Form.Text>
          New to Netflix.<Form.Link to="/signup"> Sign up now.</Form.Link>
        </Form.Text>
        <Form.SmallText>
          This page is protected by Google reCAPTCHA.
        </Form.SmallText>
      </Form>
    );
    expect(getByText('Sign In Now')).toBeTruthy();
    expect(getByText('Sign In')).toBeTruthy();
    expect(getByText('Sign In').disabled).toBeTruthy();
    expect(
      getByText('This page is protected by Google reCAPTCHA.')
    ).toBeTruthy();
    expect(getByPlaceholderText('Email Address')).toBeTruthy();
    expect(getByPlaceholderText('Password')).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
  });

  it('renders a <Form /> with an error', () => {
    const { container, getByText, queryByText } = render(
      <Form>
        <Form.Error>Your email address is already being used.</Form.Error>
        <Form.Submit type="submit">Sign In</Form.Submit>
      </Form>
    );

    expect(getByText('Your email address is already being used.')).toBeTruthy();
    expect(queryByText('Sign In').disabled).toBeFalsy();
    expect(container.firstChild).toMatchSnapshot();
  });
});
