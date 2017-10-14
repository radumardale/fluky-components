import React, { Component } from 'react';
import PropTypes from 'prop-types';

import wrapInTheme from '../../wrapInTheme';

/** FormatPageBreak icon */
const FormatPageBreak = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <title id="title">FormatPageBreak</title>
    <path d="M7,11H9V13H7V11M11,11H13V13H11V11M19,17H15V11.17L21,17.17V22H3V13H5V20H19V17M3,2H21V11H19V4H5V11H3V2Z"/>
  </svg>
);

export default wrapInTheme(FormatPageBreak);
