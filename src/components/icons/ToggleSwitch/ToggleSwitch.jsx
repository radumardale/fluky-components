import React, { Component } from 'react';
import PropTypes from 'prop-types';

import wrapInTheme from '../../wrapInTheme';

/** ToggleSwitch icon */
const ToggleSwitch = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <title id="title">ToggleSwitch</title>
    <path d="M17,7A5,5 0 0,1 22,12A5,5 0 0,1 17,17A5,5 0 0,1 12,12A5,5 0 0,1 17,7M4,14A2,2 0 0,1 2,12A2,2 0 0,1 4,10H10V14H4Z"/>
  </svg>
);

export default wrapInTheme(ToggleSwitch);
