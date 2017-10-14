import React, { Component } from 'react';
import PropTypes from 'prop-types';

import wrapInTheme from '../../wrapInTheme';

/** Home icon */
const Home = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <title id="title">Home</title>
    <path d="M10,20V14H14V20H19V12H22L12,3L2,12H5V20H10Z"/>
  </svg>
);

export default wrapInTheme(Home);
