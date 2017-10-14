import React from 'react';
import wrapInTheme from '../../wrapInTheme';

/** Tooltip icon */
const Tooltip = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <title id="title">Tooltip</title>
    <path d="M4,2H20A2,2 0 0,1 22,4V16A2,2 0 0,1 20,18H16L12,22L8,18H4A2,2 0 0,1 2,16V4A2,2 0 0,1 4,2Z"/>
  </svg>
);

export default wrapInTheme(Tooltip);
