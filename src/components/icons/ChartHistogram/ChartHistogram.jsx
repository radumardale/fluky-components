import React, { Component } from 'react';
import PropTypes from 'prop-types';

import wrapInTheme from '../../wrapInTheme';

/** ChartHistogram icon */
const ChartHistogram = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <title id="title">ChartHistogram</title>
    <path d="M3,3H5V13H9V7H13V11H17V15H21V21H3V3Z"/>
  </svg>
);

export default wrapInTheme(ChartHistogram);
