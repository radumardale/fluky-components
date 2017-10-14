import React, { Component } from 'react';
import PropTypes from 'prop-types';

import wrapInTheme from '../../wrapInTheme';

/** CodeNotEqual icon */
const CodeNotEqual = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <title id="title">CodeNotEqual</title>
    <path d="M6,15H8V17H6M11,13H18V15H11M11,9H18V11H11M6,7H8V13H6M5,3C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3H5Z"/>
  </svg>
);

export default wrapInTheme(CodeNotEqual);