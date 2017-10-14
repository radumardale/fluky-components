import React, { Component } from 'react';
import PropTypes from 'prop-types';

import wrapInTheme from '../../wrapInTheme';

/** BookMultiple icon */
const BookMultiple = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <title id="title">BookMultiple</title>
    <path d="M19,18H9A2,2 0 0,1 7,16V4A2,2 0 0,1 9,2H10V7L12,5.5L14,7V2H19A2,2 0 0,1 21,4V16A2,2 0 0,1 19,18M17,20V22H5A2,2 0 0,1 3,20V6H5V20H17Z"/>
  </svg>
);

export default wrapInTheme(BookMultiple);
