import React, { Component } from 'react';
import PropTypes from 'prop-types';

import wrapInTheme from '../../wrapInTheme';

/** FormatWrapSquare icon */
const FormatWrapSquare = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <title id="title">FormatWrapSquare</title>
    <path d="M12,7L17,17H7L12,7M3,3H21V5H3V3M3,7H6V9H3V7M21,7V9H18V7H21M3,11H6V13H3V11M21,11V13H18V11H21M3,15H6V17H3V15M21,15V17H18V15H21M3,19H21V21H3V19Z"/>
  </svg>
);

export default wrapInTheme(FormatWrapSquare);
