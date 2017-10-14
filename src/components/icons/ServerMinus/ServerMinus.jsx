import React, { Component } from 'react';
import PropTypes from 'prop-types';

import wrapInTheme from '../../wrapInTheme';

/** ServerMinus icon */
const ServerMinus = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <title id="title">ServerMinus</title>
    <path d="M4,4H20A1,1 0 0,1 21,5V9A1,1 0 0,1 20,10H4A1,1 0 0,1 3,9V5A1,1 0 0,1 4,4M9,8H10V6H9V8M5,6V8H7V6H5M8,16H16V18H8V16Z"/>
  </svg>
);

export default wrapInTheme(ServerMinus);
