import React, { Component } from 'react';
import PropTypes from 'prop-types';

import wrapInTheme from '../../wrapInTheme';

/** Dolby icon */
const Dolby = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <title id="title">Dolby</title>
    <path d="M2,5V19H22V5H2M6,17H4V7H6C8.86,7.09 11.1,9.33 11,12C11.1,14.67 8.86,16.91 6,17M20,17H18C15.14,16.91 12.9,14.67 13,12C12.9,9.33 15.14,7.09 18,7H20V17Z"/>
  </svg>
);

export default wrapInTheme(Dolby);