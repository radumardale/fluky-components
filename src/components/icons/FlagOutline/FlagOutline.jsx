import React, { Component } from 'react';
import PropTypes from 'prop-types';

import wrapInTheme from '../../wrapInTheme';

/** FlagOutline icon */
const FlagOutline = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <title id="title">FlagOutline</title>
    <path d="M14.5,6H20V16H13L12.5,14H7V21H5V4H14L14.5,6M7,6V12H13L13.5,14H18V8H14L13.5,6H7Z"/>
  </svg>
);

export default wrapInTheme(FlagOutline);
