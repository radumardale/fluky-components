import React, { Component } from 'react';
import PropTypes from 'prop-types';

import wrapInTheme from '../../wrapInTheme';

/** SkipNext icon */
const SkipNext = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <title id="title">SkipNext</title>
    <path d="M16,18H18V6H16M6,18L14.5,12L6,6V18Z"/>
  </svg>
);

export default wrapInTheme(SkipNext);
