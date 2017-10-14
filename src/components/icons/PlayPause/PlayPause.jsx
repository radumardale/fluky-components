import React from 'react';
import wrapInTheme from '../../wrapInTheme';

/** PlayPause icon */
const PlayPause = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <title id="title">PlayPause</title>
    <path d="M3,5V19L11,12M13,19H16V5H13M18,5V19H21V5"/>
  </svg>
);

export default wrapInTheme(PlayPause);
