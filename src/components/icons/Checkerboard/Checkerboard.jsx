import React, { Component } from 'react';
import PropTypes from 'prop-types';

import wrapInTheme from '../../wrapInTheme';

/** Checkerboard icon */
const Checkerboard = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <title id="title">Checkerboard</title>
    <path d="M3,3H21V21H3V3M5,5V12H12V19H19V12H12V5H5Z"/>
  </svg>
);

export default wrapInTheme(Checkerboard);
