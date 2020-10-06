import React from 'react';
import { useContent } from '../hooks';

export default function Browse() {
  // need series and the films
  // slides
  // pass it to browse container
  const { series } = useContent('series');
  const { films} = useContent('films')

 
   console.log(series);
   console.log(films)

  return <p>This is the Browse Page.</p>;
}
