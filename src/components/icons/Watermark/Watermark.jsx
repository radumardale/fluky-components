import React from 'react';
import wrapInTheme from '../../wrapInTheme';

/** Watermark icon */
const Watermark = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <title id="title">Watermark</title>
    <path d="M21,3H3A2,2 0 0,0 1,5V19A2,2 0 0,0 3,21H21A2,2 0 0,0 23,19V5A2,2 0 0,0 21,3M21,19H12V13H21V19Z"/>
  </svg>
);

export default wrapInTheme(Watermark);
