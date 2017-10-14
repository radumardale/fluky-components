import React, { Component } from 'react';
import PropTypes from 'prop-types';

import wrapInTheme from '../../wrapInTheme';

/** MusicNoteHalf icon */
const MusicNoteHalf = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <title id="title">MusicNoteHalf</title>
    <path d="M12,3V12.26C11.5,12.09 11,12 10.5,12C8.54,12 6.9,13.26 6.28,15H3V18H6.28C6.9,19.74 8.54,21 10.5,21C12.46,21 14.1,19.74 14.72,18H19V15H15V9L15,6V3H12M10.5,14.5A2,2 0 0,1 12.5,16.5A2,2 0 0,1 10.5,18.5A2,2 0 0,1 8.5,16.5A2,2 0 0,1 10.5,14.5Z"/>
  </svg>
);

export default wrapInTheme(MusicNoteHalf);
