import selectionFilter from '../selection-filter';

test('selectionFilter with legitimate data', () => {
  const series = [
    {
      id: 'film-321x',
      title: 'Family Guy',
      description: 'Peter Griffin and his family of two teenagers.',
      genre: 'comedies',
      maturity: '15',
      slug: 'family-guy',
    },
  ];
  const films = [
    {
      id: 'film-123x',
      title: 'The Prestige',
      description: 'Cool movie',
      genre: 'drama',
      maturity: '15',
      slug: 'the-prestige',
    },
  ];
  const slides = selectionFilter({ series, films });
  expect(slides.films[0].title).toBe('Drama');
  expect(slides.films[0].data[0].description).toBe('Cool movie');
  expect(slides.films[0].data[0].genre).toBe('drama');
  expect(slides.films[0].data[0].maturity).toBe('15');
  expect(slides.films[0].data[0].slug).toBe('the-prestige');

  expect(slides.series[1].title).toBe('Comedies');
  expect(slides.series[1].data[0].description).toBe(
    'Peter Griffin and his family of two teenagers.'
  );
  expect(slides.series[1].data[0].genre).toBe('comedies');
  expect(slides.series[1].data[0].maturity).toBe('15');
  expect(slides.series[1].data[0].slug).toBe('family-guy');
});

test('selectionFilter with no data', () => {
  const slides = selectionFilter();
  expect(slides.series[1].title).toBe('Comedies');
  expect(slides.films[0].title).toBe('Drama');
  expect(slides.series[1].data).toBe(undefined);
  expect(slides.series[1].data).toBe(undefined);
});
