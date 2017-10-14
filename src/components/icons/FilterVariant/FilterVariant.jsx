import React, { Component } from 'react';
import PropTypes from 'prop-types';

import wrapInTheme from '../../wrapInTheme';

/** FilterVariant icon */
const FilterVariant = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <title id="title">FilterVariant</title>
    <path d="M6,13H18V11H6M3,6V8H21V6M10,18H14V16H10V18Z"/>
  </svg>
);

export default wrapInTheme(FilterVariant);
