import React, { Component } from 'react';
import PropTypes from 'prop-types';

import wrapInTheme from '../../wrapInTheme';

/** Plex icon */
const Plex = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <title id="title">Plex</title>
    <path d="M4,2C2.89,2 2,2.89 2,4V20C2,21.11 2.89,22 4,22H20C21.11,22 22,21.11 22,20V4C22,2.89 21.11,2 20,2H4M8.56,6H12.06L15.5,12L12.06,18H8.56L12,12L8.56,6Z"/>
  </svg>
);

export default wrapInTheme(Plex);