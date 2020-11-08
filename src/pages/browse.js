import React from 'react';
import { BrowseContainer } from '../containers/browse';
import { useContent } from '../hooks';
import selectionFilter from '../utils/selection-filter';

export default function Browse() {
  // need series and the films
  const { series } = useContent('series');
  const { films} = useContent('films')
   //console.log(series);
   //console.log('films: ', films)

  // slides
  const slides = selectionFilter({series, films})
 // console.log(slides);
  // pass it to browse container
 

  return <BrowseContainer slides={slides}/>;
}
