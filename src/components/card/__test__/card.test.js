import React from 'react';
import {
  render,
  fireEvent,
  getByText,
  getByAltText,
  queryAllByTestId,
} from '@testing-library/react';
import { Card, Player } from '../../../components';

const category = 'series';
const slideRows = [
  {
    title: 'Documentaries',
    data: [
      {
        genre: 'documentaries',
        maturity: '18',
        slug: 'amanda-knox',
        description:
          'Amanda Marie Knox is an American woman who spent almost four years in an Italian prison.',
        id: '1ab5cec5-bfe7-4f6c-81b2-bb4638aeb7b3',
        title: 'Amanda Knox',
        docId: '4miTnQ8VItOKKcD0Eyou',
      },
    ],
  },
  {
    title: 'Feel Good',
    data: [
      {
        title: 'Juno',
        genre: 'feel-good',
        description:
          'Social misfit Juno protects herself with a caustic wit, but her unplanned pregnancy has the teen getting more involved in the lives of her babys adoptive parents than she expected.',
        maturity: '6',
        id: '3ef8d1dc-2a04-4c3d-a3da-67d5a268969e',
        slug: 'juno',
        docId: 'FJuauc5Ja3jzi2nH50ar',
      },
    ],
  },
];

describe('<Card />', () => {
  it('renders the <Card /> with populated data', () => {
    const { container, getByText } = render(
      <Card.Group>
        {slideRows.map((slideItem) => (
          <Card key={`${category}-${slideItem.title.toLowerCase()}`}>
            <Card.Title>{slideItem.title}</Card.Title>
            <Card.Entities>
              {slideItem.data.map((item) => (
                <Card.Item key={item.docId} item={item}>
                  <Card.Image
                    src={`/images/${category}/${item.genre}/${item.slug}/small.jpg`}
                  />
                  <Card.Meta>
                    <Card.SubTitle>{item.title}</Card.SubTitle>
                    <Card.Text>{item.description}</Card.Text>
                  </Card.Meta>
                </Card.Item>
              ))}
            </Card.Entities>
            <Card.Feature category={category}>
              <Player>
                <Player.Button />
                <Player.Video />
              </Player>
            </Card.Feature>
          </Card>
        ))}
      </Card.Group>
    );

    expect(getByText('Documentaries')).toBeTruthy();
    expect(getByText('Amanda Knox')).toBeTruthy();
    expect(
      getByText(
        'Amanda Marie Knox is an American woman who spent almost four years in an Italian prison.'
      )
    ).toBeTruthy();

    expect(getByText('Feel Good')).toBeTruthy();
    expect(getByText('Juno')).toBeTruthy();
    expect(
      getByText(
        'Social misfit Juno protects herself with a caustic wit, but her unplanned pregnancy has the teen getting more involved in the lives of her babys adoptive parents than she expected.'
      )
    ).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
  });

  it('renders the <Card /> and toggles the card feature', () => {
    const { container, queryByText, getByTestId, getByAltText } = render(
      <Card.Group>
        {slideRows.map((slideItem) => (
          <Card key={`${category}-${slideItem.title.toLowerCase()}`}>
            <Card.Title>{slideItem.title}</Card.Title>
            <Card.Entities>
              {slideItem.data.map((item) => (
                <Card.Item key={item.docId} item={item}>
                  <Card.Image
                    data-testid={`${item.slug}-item-feature`}
                    src={`/images/${category}/${item.genre}/${item.slug}/small.jpg`}
                  />
                  <Card.Meta>
                    <Card.SubTitle>{item.title}</Card.SubTitle>
                    <Card.Text>{item.description}</Card.Text>
                  </Card.Meta>
                </Card.Item>
              ))}
            </Card.Entities>
            <Card.Feature category={category}>
              <Player>
                <Player.Button />
                <Player.Video />
              </Player>
            </Card.Feature>
          </Card>
        ))}
      </Card.Group>
    );

    expect(queryByText('18')).toBeFalsy();
    fireEvent.click(getByTestId('amanda-knox-item-feature'));
    expect(queryByText('18')).toBeTruthy();

    fireEvent.click(getByAltText('Close'));
    expect(queryByText('18')).toBeFalsy();

    expect(queryByText('PG')).toBeFalsy();
    fireEvent.click(getByTestId('juno-item-feature'));
    expect(queryByText('PG')).toBeTruthy();

    fireEvent.click(getByAltText('Close'));
    expect(queryByText('PG')).toBeFalsy();
    expect(container.firstChild).toMatchSnapshot();
  });
});
