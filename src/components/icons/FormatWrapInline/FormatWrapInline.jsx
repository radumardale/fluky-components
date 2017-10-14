import React, { Component } from 'react';
import PropTypes from 'prop-types';

import wrapInTheme from '../../wrapInTheme';

/** FormatWrapInline icon */
const FormatWrapInline = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <title id="title">FormatWrapInline</title>
    <path d="M8,7L13,17H3L8,7M3,3H21V5H3V3M21,15V17H14V15H21M3,19H21V21H3V19Z"/>
  </svg>
);

export default wrapInTheme(FormatWrapInline);
