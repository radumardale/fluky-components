import React, { Component } from 'react';
import PropTypes from 'prop-types';

import wrapInTheme from '../../wrapInTheme';

/** SimAlert icon */
const SimAlert = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <title id="title">SimAlert</title>
    <path d="M13,13H11V8H13M13,17H11V15H13M18,2H10L4,8V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V4A2,2 0 0,0 18,2Z"/>
  </svg>
);

export default wrapInTheme(SimAlert);
