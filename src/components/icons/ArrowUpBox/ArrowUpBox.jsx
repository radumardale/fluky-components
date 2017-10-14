import React, { Component } from 'react';
import PropTypes from 'prop-types';

import wrapInTheme from '../../wrapInTheme';

/** ArrowUpBox icon */
const ArrowUpBox = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <title id="title">ArrowUpBox</title>
    <path d="M21,19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3H19C20.11,3 21,3.9 21,5V19M13,18V9.5L16.5,13L17.92,11.58L12,5.66L6.08,11.58L7.5,13L11,9.5V18H13Z"/>
  </svg>
);

export default wrapInTheme(ArrowUpBox);
