import React, { Component } from 'react';
import PropTypes from 'prop-types';

import wrapInTheme from '../../wrapInTheme';

/** CodeEqual icon */
const CodeEqual = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <title id="title">CodeEqual</title>
    <path d="M6,13H11V15H6M13,13H18V15H13M13,9H18V11H13M6,9H11V11H6M5,3C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3H5Z"/>
  </svg>
);

export default wrapInTheme(CodeEqual);