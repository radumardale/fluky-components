import React, { Component } from 'react';
import PropTypes from 'prop-types';

import wrapInTheme from '../../wrapInTheme';

/** SkipPrevious icon */
const SkipPrevious = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <title id="title">SkipPrevious</title>
    <path d="M6,18V6H8V18H6M9.5,12L18,6V18L9.5,12Z"/>
  </svg>
);

export default wrapInTheme(SkipPrevious);
