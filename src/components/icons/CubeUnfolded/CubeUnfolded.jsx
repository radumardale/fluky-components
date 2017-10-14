import React, { Component } from 'react';
import PropTypes from 'prop-types';

import wrapInTheme from '../../wrapInTheme';

/** CubeUnfolded icon */
const CubeUnfolded = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <title id="title">CubeUnfolded</title>
    <path d="M6,9V4H13V9H23V16H18V21H11V16H1V9H6M16,16H13V19H16V16M8,9H11V6H8V9M6,14V11H3V14H6M18,11V14H21V11H18M13,11V14H16V11H13M8,11V14H11V11H8Z"/>
  </svg>
);

export default wrapInTheme(CubeUnfolded);