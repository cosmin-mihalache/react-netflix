import React from 'react';
import { render } from '@testing-library/react';
import { HeaderChildren } from '../../../components';

describe('HeaderChildren', () => {
  it('renders the <HeaderChildren /> with populated data', () => {
    const { container, getByText } = render(
      <HeaderChildren>
        <HeaderChildren.Title>
          100% entertainment. EUR0.99 for your first 30 days.
        </HeaderChildren.Title>
        <HeaderChildren.SubTitle>
          Watch anywhere. Cancel anytime.
        </HeaderChildren.SubTitle>
      </HeaderChildren>
    );
    expect(
      getByText('100% entertainment. EUR0.99 for your first 30 days.')
    ).toBeTruthy();
    expect(getByText('Watch anywhere. Cancel anytime.')).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
  });

  it('render the <HeaderChildren /> just a title', () => {
    const {container, queryByText, getByText } = render(
      <HeaderChildren>
        <HeaderChildren.Title>
          100% entertainment. EUR0.99 for your first 30 days.
        </HeaderChildren.Title>
        );
      </HeaderChildren>
    );
    expect(
      getByText('100% entertainment. EUR0.99 for your first 30 days.')
    ).toBeTruthy();
    expect(queryByText('Watch anywhere. Cancel anytime.')).toBeFalsy();
    expect(container.firstChild).toMatchSnapshot();
  });

  it('render the <HeaderChildren /> just a subTitle', () => {
    const {container, queryByText, getByText } = render(
      <HeaderChildren>
        <HeaderChildren.SubTitle>
          Watch anywhere. Cancel anytime.
        </HeaderChildren.SubTitle>
      </HeaderChildren>
    );
    expect(getByText('Watch anywhere. Cancel anytime.')).toBeTruthy();
    expect(
      queryByText('100% entertainment. EUR0.99 for your first 30 days.')
    ).toBeFalsy();
    expect(container.firstChild).toMatchSnapshot();
  });
});
