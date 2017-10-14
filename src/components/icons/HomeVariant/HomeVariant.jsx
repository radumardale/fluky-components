import React, { Component } from 'react';
import PropTypes from 'prop-types';

import wrapInTheme from '../../wrapInTheme';

/** HomeVariant icon */
const HomeVariant = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <title id="title">HomeVariant</title>
    <path d="M8,20H5V12H2L12,3L22,12H19V20H12V14H8V20M14,14V17H17V14H14Z"/>
  </svg>
);

export default wrapInTheme(HomeVariant);
