import React from 'react';
import { render } from '@testing-library/react';
import { Profiles } from '../../../components';
import { italic } from 'colorette';

describe('<Profiles />', () => {
  it('renders the <Profile /> with populated data', () => {
    const { container, getByText, getByTestId } = render(
      <Profiles>
        <Profiles.Title>Who's Watching?</Profiles.Title>
        <Profiles.List>
          <Profiles.User onClick={() => {}}>
            <Profiles.Picture
              src="/images/cosmin.png"
              data-testid="profile-picture"
            />
            <Profiles.Name>Cosmin Mihalache</Profiles.Name>
          </Profiles.User>
        </Profiles.List>
      </Profiles>
    );

    expect(getByText("Who's Watching?"));
    expect(getByTestId('profile-picture')).toBeTruthy();
    expect(getByText('Cosmin Mihalache')).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
  });

  it('renders the <Profiles /> with populated data but misc profile image', () => {
    const { container, getByText, getByTestId } = render(
      <Profiles>
        <Profiles.Title>Who's Watching?</Profiles.Title>
        <Profiles.List>
          <Profiles.User onClick={() => {}}>
            <Profiles.Picture data-testid="profile-picture-misc" />
            <Profiles.Name>Cosmin Mihalache</Profiles.Name>
          </Profiles.User>
        </Profiles.List>
      </Profiles>
    );

    expect(getByText("Who's Watching?"));
    expect(getByTestId('profile-picture-misc')).toBeTruthy();
    expect(getByText('Cosmin Mihalache')).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
  });
});
