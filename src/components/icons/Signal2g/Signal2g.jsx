import React, { Component } from 'react';
import PropTypes from 'prop-types';

import wrapInTheme from '../../wrapInTheme';

/** Signal2g icon */
const Signal2g = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <title id="title">Signal2g</title>
    <path d="M11,19.5H2V13.5A3,3 0 0,1 5,10.5H8V7.5H2V4.5H8A3,3 0 0,1 11,7.5V10.5A3,3 0 0,1 8,13.5H5V16.5H11M22,10.5H17.5V13.5H19V16.5H16V7.5H22V4.5H16A3,3 0 0,0 13,7.5V16.5A3,3 0 0,0 16,19.5H19A3,3 0 0,0 22,16.5"/>
  </svg>
);

export default wrapInTheme(Signal2g);
