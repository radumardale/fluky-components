import React, { Component } from 'react';
import PropTypes from 'prop-types';

import wrapInTheme from '../../wrapInTheme';

/** ArrowLeftBoldBox icon */
const ArrowLeftBoldBox = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <title id="title">ArrowLeftBoldBox</title>
    <path d="M21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3H19A2,2 0 0,1 21,5M7,12L12,17V14H16V10H12V7L7,12Z"/>
  </svg>
);

export default wrapInTheme(ArrowLeftBoldBox);
