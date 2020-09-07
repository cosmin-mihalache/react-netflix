import React from 'react';
import { render } from '@testing-library/react';
import { Form } from '../../../components';

jest.mock('react-router-dom');

describe('<Form />', () => {
  it('renders the <Form /> with populated data', () => {
    const { getByText, getByPlaceholderText, queryAllByText } = render(
      <Form>
        <Form.Title>Sign In</Form.Title>
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
    expect(queryAllByText('Sign In')).toBeTruthy();
    expect(getByText('This page is protected by Google reCAPTCHA.')).toBeTruthy();
    expect(getByPlaceholderText('Email Address')).toBeTruthy();
    expect(getByPlaceholderText('Password')).toBeTruthy();
  });
});
