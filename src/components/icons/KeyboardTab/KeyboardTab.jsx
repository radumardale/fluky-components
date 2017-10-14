import React, { Component } from 'react';
import PropTypes from 'prop-types';

import wrapInTheme from '../../wrapInTheme';

/** KeyboardTab icon */
const KeyboardTab = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <title id="title">KeyboardTab</title>
    <path d="M20,18H22V6H20M11.59,7.41L15.17,11H1V13H15.17L11.59,16.58L13,18L19,12L13,6L11.59,7.41Z"/>
  </svg>
);

export default wrapInTheme(KeyboardTab);
