import React, { Component } from 'react';
import PropTypes from 'prop-types';

import wrapInTheme from '../../wrapInTheme';

/** ShapeRectanglePlus icon */
const ShapeRectanglePlus = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <title id="title">ShapeRectanglePlus</title>
    <path d="M19,6H22V8H19V11H17V8H14V6H17V3H19V6M17,17V14H19V19H3V6H11V8H5V17H17Z"/>
  </svg>
);

export default wrapInTheme(ShapeRectanglePlus);
