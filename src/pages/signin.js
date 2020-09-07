import React, { useState } from 'react';
import { Form } from '../components';
import { HeaderContainer } from '../containers/header';

export default function SignIn() {
  const [error, setError] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');

  const isInvalid = password === '' || emailAddress === '';

  const handleSignIn = (event) => {
    event.preventDefault();

    //call in here the firebase to auth the user
    //if there's error, populate the error state
  };
  return (
    <HeaderContainer>
      <Form>
        <Form.Title>Sign In</Form.Title>
        {error && <Form.Error>{error}</Form.Error>}

        <Form.Base onSubmit={handleSignIn} method="POST">
          <Form.Input
            placeholder="Email address"
            value={emailAddress}
            onChange={({ target }) => setEmailAddress(target.value)}
          />

          <Form.Input
            placeholder="Password"
            type="password"
            autoCompete="off"
            value={password}
            onChange={({ target }) => setPassword(target.value)}
          />

          <Form.Submit disabled={isInvalid} type="submit">
            Sign In
          </Form.Submit>
          <Form.Text>
            New to Netflix.<Form.Link to="/signup"> Sign up now.</Form.Link>
          </Form.Text>
          <Form.SmallText>
            This page is protected by Google reCAPTCHA.
          </Form.SmallText>
        </Form.Base>
      </Form>
    </HeaderContainer>
  );
}
