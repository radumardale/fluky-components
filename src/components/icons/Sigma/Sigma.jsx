import React, { Component } from 'react';
import PropTypes from 'prop-types';

import wrapInTheme from '../../wrapInTheme';

/** Sigma icon */
const Sigma = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <title id="title">Sigma</title>
    <path d="M5,4H18V9H17L16,6H10.06L13.65,11.13L9.54,17H16L17,15H18V20H5L10.6,12L5,4Z"/>
  </svg>
);

export default wrapInTheme(Sigma);
