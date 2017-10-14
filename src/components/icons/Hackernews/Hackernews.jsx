import React from 'react';
import wrapInTheme from '../../wrapInTheme';

/** Hackernews icon */
const Hackernews = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <title id="title">Hackernews</title>
    <path d="M2,2H22V22H2V2M11.25,17.5H12.75V13.06L16,7H14.5L12,11.66L9.5,7H8L11.25,13.06V17.5Z"/>
  </svg>
);

export default wrapInTheme(Hackernews);
