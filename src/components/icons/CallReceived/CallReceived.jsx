import React, { Component } from 'react';
import PropTypes from 'prop-types';

import wrapInTheme from '../../wrapInTheme';

/** CallReceived icon */
const CallReceived = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <title id="title">CallReceived</title>
    <path d="M20,5.41L18.59,4L7,15.59V9H5V19H15V17H8.41"/>
  </svg>
);

export default wrapInTheme(CallReceived);
