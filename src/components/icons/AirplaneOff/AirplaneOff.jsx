import React, { Component } from 'react';
import PropTypes from 'prop-types';

import wrapInTheme from '../../wrapInTheme';

/** AirplaneOff icon */
const AirplaneOff = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <title id="title">AirplaneOff</title>
    <path d="M3.15,5.27L8.13,10.26L2.15,14V16L10.15,13.5V19L8.15,20.5V22L11.65,21L15.15,22V20.5L13.15,19V15.27L18.87,21L20.15,19.73L4.42,4M13.15,9V3.5A1.5,1.5 0 0,0 11.65,2A1.5,1.5 0 0,0 10.15,3.5V7.18L17.97,15L21.15,16V14L13.15,9Z"/>
  </svg>
);

export default wrapInTheme(AirplaneOff);
