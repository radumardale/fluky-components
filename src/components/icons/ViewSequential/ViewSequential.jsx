import React, { Component } from 'react';
import PropTypes from 'prop-types';

import wrapInTheme from '../../wrapInTheme';

/** ViewSequential icon */
const ViewSequential = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <title id="title">ViewSequential</title>
    <path d="M3,4H21V8H3V4M3,10H21V14H3V10M3,16H21V20H3V16Z"/>
  </svg>
);

export default wrapInTheme(ViewSequential);
