import React from 'react';
import wrapInTheme from '../../wrapInTheme';

/** Fullscreen icon */
const Fullscreen = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <title id="title">Fullscreen</title>
    <path d="M5,5H10V7H7V10H5V5M14,5H19V10H17V7H14V5M17,14H19V19H14V17H17V14M10,17V19H5V14H7V17H10Z"/>
  </svg>
);

export default wrapInTheme(Fullscreen);
