import React from 'react';
import { render } from '@testing-library/react';
import { Jumbotron } from '../../../components';
import jumbotronData from '../../../fixtures/jumbotron.json';

describe('<Jumbotron />', () => {
  it('renders the <Jumbotron /> with populated data', () => {
    const { container, getByText, getAllByAltText, getByTestId } = render(
      <Jumbotron.Container>
        {jumbotronData.map((item) => (
          <Jumbotron key={item.id}>
            <Jumbotron.Pane>
              <Jumbotron.Title>{item.title}</Jumbotron.Title>
              <Jumbotron.SubTitle>{item.subTitle}</Jumbotron.SubTitle>
            </Jumbotron.Pane>
            <Jumbotron.Pane>
              <Jumbotron.Image
                src={item.image}
                alt={item.alt}
                data-testid={`${item.id}-jumbotron`}
              />
            </Jumbotron.Pane>
          </Jumbotron>
        ))}
      </Jumbotron.Container>
    );

    expect(getByText('Enjoy on your TV.')).toBeTruthy();
    expect(getByTestId('1-jumbotron')).toBeTruthy();
    expect(
      getByText(
        'Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.'
      )
    ).toBeTruthy();
    expect(getAllByAltText('Tiger King | Netflix')).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
  });
});
