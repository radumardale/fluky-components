import React, { Component } from 'react';
import PropTypes from 'prop-types';

import wrapInTheme from '../../wrapInTheme';

/** FastForward icon */
const FastForward = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <title id="title">FastForward</title>
    <path d="M13,6V18L21.5,12M4,18L12.5,12L4,6V18Z"/>
  </svg>
);

export default wrapInTheme(FastForward);
