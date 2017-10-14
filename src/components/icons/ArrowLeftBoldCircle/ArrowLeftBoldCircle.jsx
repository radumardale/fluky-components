import React, { Component } from 'react';
import PropTypes from 'prop-types';

import wrapInTheme from '../../wrapInTheme';

/** ArrowLeftBoldCircle icon */
const ArrowLeftBoldCircle = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <title id="title">ArrowLeftBoldCircle</title>
    <path d="M22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12M7,12L12,17V14H16V10H12V7L7,12Z"/>
  </svg>
);

export default wrapInTheme(ArrowLeftBoldCircle);
