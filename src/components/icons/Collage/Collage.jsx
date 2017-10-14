import React, { Component } from 'react';
import PropTypes from 'prop-types';

import wrapInTheme from '../../wrapInTheme';

/** Collage icon */
const Collage = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <title id="title">Collage</title>
    <path d="M5,3C3.89,3 3,3.89 3,5V19C3,20.11 3.89,21 5,21H11V3M13,3V11H21V5C21,3.89 20.11,3 19,3M13,13V21H19C20.11,21 21,20.11 21,19V13"/>
  </svg>
);

export default wrapInTheme(Collage);
