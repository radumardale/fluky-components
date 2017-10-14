import React, { Component } from 'react';
import PropTypes from 'prop-types';

import wrapInTheme from '../../wrapInTheme';

/** BookMinus icon */
const BookMinus = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <title id="title">BookMinus</title>
    <path d="M18,22H6A2,2 0 0,1 4,20V4C4,2.89 4.9,2 6,2H7V9L9.5,7.5L12,9V2H18A2,2 0 0,1 20,4V20A2,2 0 0,1 18,22M18,18V16H12V18H18Z"/>
  </svg>
);

export default wrapInTheme(BookMinus);
