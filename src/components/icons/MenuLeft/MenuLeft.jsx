import React, { Component } from 'react';
import PropTypes from 'prop-types';

import wrapInTheme from '../../wrapInTheme';

/** MenuLeft icon */
const MenuLeft = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <title id="title">MenuLeft</title>
    <path d="M14,7L9,12L14,17V7Z"/>
  </svg>
);

export default wrapInTheme(MenuLeft);
