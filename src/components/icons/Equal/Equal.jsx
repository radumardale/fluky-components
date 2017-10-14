import React, { Component } from 'react';
import PropTypes from 'prop-types';

import wrapInTheme from '../../wrapInTheme';

/** Equal icon */
const Equal = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <title id="title">Equal</title>
    <path d="M19,10H5V8H19V10M19,16H5V14H19V16Z"/>
  </svg>
);

export default wrapInTheme(Equal);
