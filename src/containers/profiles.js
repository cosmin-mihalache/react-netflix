import React from 'react';
import { Header } from '../components';
import * as ROUTES from '../constants/routes';
// import logo from '/images/misc/logo.svg';

export function SelectProfileContainer({ user, SetProfile }) {
  return (
    <>
      <Header bg={true}>
        <Header.Frame></Header.Frame>
        <Header.Logo
          to={ROUTES.HOME}
          src="/images/misc/logo.svg"
          alt="Netflix"
        />
      </Header>

      <Profiles>
        <Profiles.Title>Who's Watching?</Profiles.Title>
        <Profiles.List>
          <Profiles.User>
            <Profiles.Picture src={user.photoURL} />
            <Profiles.Name>{user.displayName}</Profiles.Name>
          </Profiles.User>
        </Profiles.List>
      </Profiles>
    </>
  );
}
