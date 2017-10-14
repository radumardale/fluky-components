import React, { Component } from 'react';
import PropTypes from 'prop-types';

import wrapInTheme from '../../wrapInTheme';

/** FridgeFilledBottom icon */
const FridgeFilledBottom = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <title id="title">FridgeFilledBottom</title>
    <path d="M8,8V6H10V8H8M7,2H17A2,2 0 0,1 19,4V19A2,2 0 0,1 17,21V22H15V21H9V22H7V21A2,2 0 0,1 5,19V4A2,2 0 0,1 7,2M7,4V9H17V4H7M8,12V15H10V12H8Z"/>
  </svg>
);

export default wrapInTheme(FridgeFilledBottom);