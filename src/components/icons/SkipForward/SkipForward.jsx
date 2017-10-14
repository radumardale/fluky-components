import React, { Component } from 'react';
import PropTypes from 'prop-types';

import wrapInTheme from '../../wrapInTheme';

/** SkipForward icon */
const SkipForward = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <title id="title">SkipForward</title>
    <path d="M4,5V19L11,12M18,5V19H20V5M11,5V19L18,12"/>
  </svg>
);

export default wrapInTheme(SkipForward);
