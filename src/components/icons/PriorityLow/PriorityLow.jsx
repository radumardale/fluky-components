import React, { Component } from 'react';
import PropTypes from 'prop-types';

import wrapInTheme from '../../wrapInTheme';

/** PriorityLow icon */
const PriorityLow = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <title id="title">PriorityLow</title>
    <path d="M14,5H22V7H14V5M14,10.5H22V12.5H14V10.5M14,16H22V18H14V16M2,11.5C2,15.08 4.92,18 8.5,18H9V20L12,17L9,14V16H8.5C6,16 4,14 4,11.5C4,9 6,7 8.5,7H12V5H8.5C4.92,5 2,7.92 2,11.5Z"/>
  </svg>
);

export default wrapInTheme(PriorityLow);