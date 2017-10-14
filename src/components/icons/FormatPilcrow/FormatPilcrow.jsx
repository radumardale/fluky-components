import React, { Component } from 'react';
import PropTypes from 'prop-types';

import wrapInTheme from '../../wrapInTheme';

/** FormatPilcrow icon */
const FormatPilcrow = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <title id="title">FormatPilcrow</title>
    <path d="M10,11A4,4 0 0,1 6,7A4,4 0 0,1 10,3H18V5H16V21H14V5H12V21H10V11Z"/>
  </svg>
);

export default wrapInTheme(FormatPilcrow);
