import React, { Component } from 'react';
import PropTypes from 'prop-types';

import wrapInTheme from '../../wrapInTheme';

/** CodeLessThan icon */
const CodeLessThan = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <title id="title">CodeLessThan</title>
    <path d="M13.59,7.41L9,12L13.59,16.6L15,15.18L11.82,12L15,8.82M19,3C20.11,3 21,3.9 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3H19Z"/>
  </svg>
);

export default wrapInTheme(CodeLessThan);